"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const bootLines = [
  "$ initializing portfolio...",
  "$ loading modules... done",
  "$ compiling components... done",
  "$ status: ready",
];

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("portfolio-intro-seen");
    if (alreadySeen) {
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        sessionStorage.setItem("portfolio-intro-seen", "true");
        setVisible(false);
      },
    });

    lineRefs.current.forEach((line, i) => {
      if (!line) return;
      tl.fromTo(
        line,
        { opacity: 0, x: -12 },
        { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" },
        i * 0.35
      );
    });

    tl.to(overlayRef.current, {
      yPercent: -100,
      duration: 0.7,
      ease: "power3.inOut",
      delay: 0.3,
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
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <div className="font-mono text-sm sm:text-base flex flex-col gap-2">
            {bootLines.map((line, i) => (
              <p
                key={line}
                ref={(el) => {
                  lineRefs.current[i] = el;
                }}
                className={i === bootLines.length - 1 ? "text-accent" : "text-muted"}
                style={{ opacity: 0 }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      )}
      {children}
    </>
  );
}