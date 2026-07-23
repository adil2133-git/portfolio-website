"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null); // the actual circle, transform-driven
  const pathRef = useRef<SVGPathElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const announce = () => window.dispatchEvent(new Event("portfolio-intro-done"));
    const alreadySeen = sessionStorage.getItem("portfolio-intro-seen");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealTargets = contentRef.current
      ? contentRef.current.querySelectorAll<HTMLElement>("[data-reveal]")
      : null;
    const hasRevealTargets = !!revealTargets && revealTargets.length > 0;

    if (hasRevealTargets) {
      gsap.set(revealTargets, { opacity: 0, y: alreadySeen || reduceMotion ? 0 : 18 });
    } else {
      gsap.set(contentRef.current, { opacity: 0, y: alreadySeen || reduceMotion ? 0 : 20 });
    }

    if (alreadySeen || reduceMotion) {
      if (hasRevealTargets) gsap.set(revealTargets, { opacity: 1, y: 0 });
      else gsap.set(contentRef.current, { opacity: 1, y: 0 });
      setVisible(false);
      announce();
      return;
    }

    document.body.style.overflow = "hidden";

    const path = pathRef.current;
    const ctx = gsap.context(() => {
      if (!path) {
        if (hasRevealTargets) gsap.to(revealTargets, { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 });
        else gsap.to(contentRef.current, { opacity: 1, duration: 0.4 });
        return;
      }

      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length, fillOpacity: 0 });
      // scale big enough to cover the viewport corners from a centered circle
      gsap.set(maskRef.current, { scale: 2.6, force3D: true });

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          sessionStorage.setItem("portfolio-intro-seen", "true");
          setVisible(false);
          announce();
        },
      });

      tl.to(path, { strokeDashoffset: 0, duration: 1.1, ease: "power2.inOut" })
        .to(path, { fillOpacity: 1, duration: 0.4, ease: "power1.out" }, "-=0.15")
        .to({}, { duration: 0.35 })
        // transform-only: scale + fade, GPU-composited, no repaint per frame
        .to(maskRef.current, {
          scale: 0,
          duration: 1.1,
          ease: "power3.inOut",
          force3D: true,
        })
        .to(overlayRef.current, { opacity: 0, duration: 0.25 }, "-=0.15");

      if (hasRevealTargets) {
        tl.to(
          revealTargets,
          { opacity: 1, y: 0, duration: 0.9, ease: "power2.out", stagger: 0.12 },
          "-=0.85"
        );
      } else {
        tl.to(
          contentRef.current,
          { opacity: 1, y: 0, duration: 1.0, ease: "power2.out" },
          "-=0.85"
        );
      }
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
          className="fixed inset-0 z-[100] overflow-hidden flex items-center justify-center"
        >
          {/* the circle that scales down to reveal the page — transform only */}
          <div
            ref={maskRef}
            className="absolute inset-0 bg-background rounded-full"
            style={{ willChange: "transform" }}
          />
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
      <div ref={contentRef} style={{ willChange: "opacity, transform" }}>
        {children}
      </div>
    </>
  );
}