"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  function handleNavHover(e: React.MouseEvent<HTMLAnchorElement>) {
    const target = e.currentTarget;
    const nav = target.parentElement;
    if (!underlineRef.current || !nav) return;
    const navRect = nav.getBoundingClientRect();
    const linkRect = target.getBoundingClientRect();
    gsap.to(underlineRef.current, {
      left: linkRect.left - navRect.left,
      width: linkRect.width,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  }

  function handleNavLeave() {
    gsap.to(underlineRef.current, { opacity: 0, duration: 0.2 });
  }

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-muted/20 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-4 sm:px-6 py-4 max-w-6xl mx-auto">
        <Link
          href="/"
          className="font-mono text-sm sm:text-base text-accent font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          ~/adil
        </Link>

        {/* Desktop Navigation */}
        <div
          className="hidden md:flex items-center gap-7 relative"
          onMouseLeave={handleNavLeave}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={handleNavHover}
              className="text-sm text-foreground/80 hover:text-accent transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <div
            ref={underlineRef}
            className="absolute bottom-[-6px] h-[2px] bg-accent opacity-0 rounded-full"
            style={{ left: 0, width: 0 }}
          />
        </div>

        {/* Action button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs border border-accent/60 text-accent px-3.5 py-1.5 rounded-lg hover:bg-accent/10 transition-colors"
          >
            <FileText size={13} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-foreground hover:text-accent hover:bg-surface border border-muted/20 transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-muted/20 px-6 py-6 flex flex-col gap-4 overflow-hidden"
          >
            <div className="flex flex-col gap-3 font-mono text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-background/80 hover:text-accent transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-muted/40 text-xs">→</span>
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-muted/20">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 font-mono text-xs bg-accent text-background font-semibold py-2.5 rounded-lg hover:brightness-110 transition-all"
              >
                <FileText size={14} />
                <span>View Full Resume (PDF)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
