"use client";

import { useEffect } from "react";

export default function NetworkBackground() {
  useEffect(() => {
    let animationFrameId: number;

    function handleMouseMove(e: MouseEvent) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
        document.documentElement.style.setProperty("--my", `${e.clientY}px`);
      });
    }

    function handleMouseLeave() {
      cancelAnimationFrame(animationFrameId);
      document.documentElement.style.setProperty("--mx", "-9999px");
      document.documentElement.style.setProperty("--my", "-9999px");
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none opacity-20 mix-blend-lighten"
      style={{
        backgroundImage: "url('/coding_reveal.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        maskImage:
          "radial-gradient(circle 240px at var(--mx, -9999px) var(--my, -9999px), black 0%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(circle 240px at var(--mx, -9999px) var(--my, -9999px), black 0%, transparent 100%)",
      }}
    />
  );
}
