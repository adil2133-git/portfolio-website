"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    const alreadySeen = sessionStorage.getItem("portfolio-intro-seen");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (alreadySeen || reduceMotion) {
      setTimeout(() => {
        setVisible(false);
      }, 0);
      return;
    }

    document.body.style.overflow = "hidden";

    const path = pathRef.current;
    const overlay = overlayRef.current;

    const ctx = gsap.context(() => {
      if (!path || !overlay) {
        setTimeout(() => {
          setVisible(false);
        }, 0);
        document.body.style.overflow = "";
        return;
      }

      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length, fillOpacity: 0 });

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          sessionStorage.setItem("portfolio-intro-seen", "true");
          setVisible(false);
        },
      });

      tl.to(path, { strokeDashoffset: 0, duration: 0.9, ease: "power2.inOut" })
        .to(path, { fillOpacity: 1, duration: 0.35, ease: "power1.out" }, "-=0.15")
        .to({}, { duration: 0.25 })
        .to(overlay, {
          opacity: 0,
          scale: 1.02,
          duration: 0.5,
          ease: "power2.inOut",
        });
    });

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {visible && (
        <div
          ref={overlayRef}
          aria-hidden="true"
          className="fixed inset-0 z-[100] bg-background overflow-hidden flex items-center justify-center pointer-events-auto"
        >
          <svg width="72" height="72" viewBox="0 0 52 52" className="relative z-10">
            <path
              ref={pathRef}
              d="M26 6 L46 44 L34 44 L26 27 L18 44 L6 44 Z"
              fill="var(--accent)"
              stroke="var(--accent)"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeDasharray={300}
              strokeDashoffset={300}
              fillOpacity={0}
            />
            <rect x="20" y="30" width="12" height="5" fill="var(--background)" />
          </svg>
        </div>
      )}
      {children}
    </>
  );
}
