"use client";

import { useEffect, useRef } from "react";

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const accent = getComputedStyle(document.documentElement)
      .getPropertyValue("--accent")
      .trim();

    const NODE_COUNT = Math.floor((width * height) / 18000);
    const LINK_DISTANCE = 140;

    type Node = { x: number; y: number; vx: number; vy: number };
    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    let animationId: number;

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            ctx!.strokeStyle = accent;
            ctx!.globalAlpha = (1 - dist / LINK_DISTANCE) * 0.3;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.stroke();
          }
        }
      }

      ctx!.globalAlpha = 0.6;
      ctx!.fillStyle = accent;
      for (const node of nodes) {
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
        ctx!.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();

    function handleResize() {
      width = canvas!.width = window.innerWidth;
      height = canvas!.height = window.innerHeight;
    }

    // This is the new part: track the mouse and update the mask position
    // directly on the element, without going through React state.
    function handleMouseMove(e: MouseEvent) {
      canvas!.style.setProperty("--mx", `${e.clientX}px`);
      canvas!.style.setProperty("--my", `${e.clientY}px`);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        maskImage:
          "radial-gradient(circle 220px at var(--mx, 50%) var(--my, 50%), black 0%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(circle 220px at var(--mx, 50%) var(--my, 50%), black 0%, transparent 100%)",
      }}
    />
  );
}