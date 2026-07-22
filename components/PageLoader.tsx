"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const counter = useRef({ value: 0 });

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("portfolio-intro-seen");
    if (alreadySeen) {
      setVisible(false);
      window.dispatchEvent(new Event("portfolio-intro-done"));
      return;
    }

    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        sessionStorage.setItem("portfolio-intro-seen", "true");
        setVisible(false);
        window.dispatchEvent(new Event("portfolio-intro-done"));
      },
    });

    tl.to(counter.current, {
      value: 100,
      duration: 1.4,
      ease: "power2.inOut",
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = Math.round(counter.current.value).toString();
        }
        if (barRef.current) {
          barRef.current.style.width = `${counter.current.value}%`;
        }
      },
    })
      .to({}, { duration: 0.3 })
      .to(overlayRef.current, {
        yPercent: -100,
        duration: 0.7,
        ease: "power3.inOut",
      });

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {visible && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center gap-6"
        >
          <span className="font-mono text-5xl font-semibold text-foreground">
            <span ref={countRef}>0</span>
            <span className="text-accent">%</span>
          </span>
          <div className="w-48 h-[2px] bg-muted/20 rounded-full overflow-hidden">
            <div ref={barRef} className="h-full bg-accent" style={{ width: "0%" }} />
          </div>
        </div>
      )}
      {children}
    </>
  );
}