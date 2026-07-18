"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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

        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm hover:text-accent transition-colors">About</a>
          <a href="#projects" className="text-sm hover:text-accent transition-colors">Projects</a>
          <a href="#skills" className="text-sm hover:text-accent transition-colors">Skills</a>
          <a href="#contact" className="text-sm hover:text-accent transition-colors">Contact</a>
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
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}