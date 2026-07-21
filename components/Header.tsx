"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const underlineRef = useRef<HTMLDivElement>(null);

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
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-sm border-b border-muted/20" : ""
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto">
        <span className="font-mono text-sm text-accent font-bold">~/adil</span>

       <div className="hidden md:flex items-center gap-6 relative" onMouseLeave={handleNavLeave}>
  <a href="#about" onMouseEnter={handleNavHover} className="text-sm hover:text-accent transition-colors">About</a>
  <a href="#projects" onMouseEnter={handleNavHover} className="text-sm hover:text-accent transition-colors">Projects</a>
  <a href="#skills" onMouseEnter={handleNavHover} className="text-sm hover:text-accent transition-colors">Skills</a>
  <a href="#contact" onMouseEnter={handleNavHover} className="text-sm hover:text-accent transition-colors">Contact</a>
  <div
    ref={underlineRef}
    className="absolute bottom-[-6px] h-[1.5px] bg-accent opacity-0"
    style={{ left: 0, width: 0 }}
  />
</div>

        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs border border-accent text-accent px-3 py-1.5 rounded-md hover:bg-accent/10 transition-colors"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}