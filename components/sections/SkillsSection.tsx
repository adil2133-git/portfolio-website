"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { skills } from "@/lib/skills";
import { Code2, Layout, Server, Database, Cloud, Wrench } from "lucide-react";

const coreSkills = [
  "TypeScript",
  "React.js & Next.js",
  "Node.js & Express.js",
  "PostgreSQL & MongoDB",
  "Redis & BullMQ",
  "Docker & AWS",
];

const categoryIcons: Record<string, typeof Code2> = {
  Languages: Code2,
  Frontend: Layout,
  Backend: Server,
  "Databases & ORM": Database,
  "DevOps & Cloud": Cloud,
  "Tools & Services": Wrench,
};

function TerminalScan() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showOk, setShowOk] = useState<boolean[]>(Array(coreSkills.length).fill(false));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started || lineIndex >= coreSkills.length) return;

    const currentSkill = coreSkills[lineIndex];

    if (charIndex < currentSkill.length) {
      const timer = setTimeout(() => setCharIndex((c) => c + 1), 30);
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
      }, 200);
    }, 120);
    return () => clearTimeout(okTimer);
  }, [started, charIndex, lineIndex]);

  return (
    <motion.div
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true, margin: "-100px" }}
      className="font-mono text-xs sm:text-sm bg-surface border border-muted/20 rounded-xl p-5 sm:p-6 flex flex-col gap-2 shadow-inner"
    >
      <p className="text-accent mb-1 font-semibold">&gt; runtime environment stack scan...</p>
      {coreSkills.map((skill, i) => {
        if (i > lineIndex) return null;
        const isCurrent = i === lineIndex;
        const text = isCurrent ? skill.slice(0, charIndex) : skill;
        return (
          <p key={skill} className="text-foreground flex items-center justify-between">
            <span>
              <span className="text-muted/60 mr-2">[{i + 1}]</span>
              {text}
              {isCurrent && charIndex < skill.length && (
                <span className="inline-block w-2 h-4 bg-accent ml-1 align-middle animate-pulse" />
              )}
            </span>
            {showOk[i] && <span className="text-emerald-400 font-bold ml-2">[verified]</span>}
          </p>
        );
      })}
    </motion.div>
  );
}

function Marquee() {
  const allSkillsList = skills.flatMap((s) => s.items);

  return (
    <div className="flex flex-col gap-3 overflow-hidden pt-2">
      <div className="flex gap-3 w-max animate-marquee-left">
        {[...allSkillsList, ...allSkillsList].map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="font-mono text-xs border border-accent/20 text-muted hover:text-foreground bg-surface px-3 py-1.5 rounded-full whitespace-nowrap transition-colors"
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
      <section id="skills" className="w-full max-w-5xl flex flex-col gap-8 scroll-mt-24">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <h2 className="font-mono text-sm text-accent uppercase tracking-widest whitespace-nowrap">
              04 / skills
            </h2>
            <div className="h-px flex-grow bg-muted/20" />
          </div>
          <p className="text-muted text-sm sm:text-base">
            Technical competencies across languages, full-stack frameworks, databases, and DevOps.
          </p>
        </div>

        <TerminalScan />

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group) => {
            const Icon = categoryIcons[group.category] || Code2;
            return (
              <div
                key={group.category}
                className="bg-surface border border-muted/20 rounded-xl p-5 flex flex-col gap-3 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center gap-2.5 pb-2 border-b border-muted/10">
                  <div className="w-7 h-7 rounded-lg bg-background border border-muted/20 flex items-center justify-center text-accent">
                    <Icon size={15} />
                  </div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs bg-background/80 border border-muted/20 text-muted hover:text-foreground px-2.5 py-1 rounded-md transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <Marquee />
      </section>
    </FadeIn>
  );
}