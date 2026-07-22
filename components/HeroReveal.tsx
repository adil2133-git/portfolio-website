"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function HeroReveal({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    function handleIntroDone() {
      setReady(true);
    }
    window.addEventListener("portfolio-intro-done", handleIntroDone);
    return () => window.removeEventListener("portfolio-intro-done", handleIntroDone);
  }, []);

  useEffect(() => {
    if (!ready) return;
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
  }, [ready]);

  return <div ref={containerRef}>{children}</div>;
}