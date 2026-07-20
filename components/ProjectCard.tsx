"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Layers } from "lucide-react";
import { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const icons = [Zap, Layers];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex flex-col bg-surface border border-muted/20 rounded-2xl overflow-hidden hover:border-accent/40 transition-colors"
    >
      <div className="relative w-full aspect-video bg-background">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-4 p-6">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs border border-muted/30 text-muted px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
        <p className="text-muted text-sm leading-relaxed">{project.description}</p>

        <div className="flex flex-col gap-2 mt-1">
          {project.highlights.slice(0, 2).map((point, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={point} className="flex items-start gap-2.5">
                <Icon size={15} className="text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{point}</span>
              </div>
            );
          })}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-2 flex items-center justify-center gap-2 bg-background border border-muted/20 hover:border-accent text-foreground font-mono text-sm py-3 rounded-xl transition-colors"
        >
          View Case Study
          <ArrowRight size={15} />
        </Link>
      </div>
    </motion.div>
  );
}