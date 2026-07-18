"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroReveal({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const targets = el.querySelectorAll("[data-reveal]");

    gsap.from(targets, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
    });
  }, []);

  return <div ref={containerRef}>{children}</div>;
}