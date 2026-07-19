"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const coreSkills = ["React.js", "Next.js", "Node.js", "MongoDB", "TypeScript"];

const allSkills = [
  "React.js", "Next.js", "Redux", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap",
  "Node.js", "Express.js", "MongoDB", "Mongoose",
  "JWT", "Razorpay", "Redis", "Git", "GitHub", "REST APIs", "Cloudinary", "AWS"
];

function TerminalScan() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showOk, setShowOk] = useState<boolean[]>(Array(coreSkills.length).fill(false));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started || lineIndex >= coreSkills.length) return;

    const currentSkill = coreSkills[lineIndex];

    if (charIndex < currentSkill.length) {
      const timer = setTimeout(() => setCharIndex((c) => c + 1), 35);
      return () => clearTimeout(timer);
    }

    const okTimer = setTimeout(() => {
      setShowOk((prev) => {
        const next = [...prev];
        next[lineIndex] = true;
        return next;
      });
      setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, 250);
    }, 150);
    return () => clearTimeout(okTimer);
  }, [started, charIndex, lineIndex]);

  return (
    <motion.div
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true, margin: "-100px" }}
      className="font-mono text-sm bg-surface border border-muted/20 rounded-xl p-6 flex flex-col gap-2"
    >
      <p className="text-accent mb-1">&gt; scanning stack...</p>
      {coreSkills.map((skill, i) => {
        if (i > lineIndex) return null;
        const isCurrent = i === lineIndex;
        const text = isCurrent ? skill.slice(0, charIndex) : skill;
        return (
          <p key={skill} className="text-foreground">
            {text}
            {isCurrent && charIndex < skill.length && (
              <span className="inline-block w-2 h-4 bg-accent ml-0.5 align-middle" />
            )}
            {showOk[i] && <span className="text-accent ml-2">[ok]</span>}
          </p>
        );
      })}
    </motion.div>
  );
}

function Marquee() {
  return (
    <div className="flex flex-col gap-3 overflow-hidden">
      <div className="flex gap-3 w-max animate-marquee-left">
        {[...allSkills, ...allSkills].map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="font-mono text-xs border border-accent/30 text-foreground bg-surface px-3 py-1.5 rounded-full whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <FadeIn>
      <section id="skills" className="w-full max-w-3xl flex flex-col gap-6 scroll-mt-24">
        <div className="flex items-center gap-4">
          <h2 className="font-mono text-sm text-accent uppercase tracking-widest whitespace-nowrap">
            03 / skills
          </h2>
          <div className="h-px flex-grow bg-muted/20" />
        </div>

        <TerminalScan />
        <Marquee />
      </section>
    </FadeIn>
  );
}