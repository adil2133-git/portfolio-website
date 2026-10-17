"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Zap, Shield, Cpu } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const highlightIcons = [Zap, Shield, Cpu];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex flex-col h-full bg-surface border border-muted/20 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 group shadow-lg"
    >
      {/* Cover Image Container */}
      <div className="relative w-full aspect-video bg-background overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/30 pointer-events-none" />

        {/* Status Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-md border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{project.status}</span>
        </div>

        {/* Quick action buttons on image hover */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="p-1.5 rounded-lg bg-background/90 backdrop-blur-md border border-muted/30 text-muted hover:text-accent hover:border-accent transition-colors"
            >
              <SiGithub size={14} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live website`}
              className="p-1.5 rounded-lg bg-background/90 backdrop-blur-md border border-muted/30 text-muted hover:text-accent hover:border-accent transition-colors"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-grow p-5 sm:p-6 gap-4 justify-between">
        <div className="flex flex-col gap-3">
          {/* Header Title & Subtitle */}
          <div>
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h3>
            </div>
            <p className="font-mono text-xs text-accent mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <p className="text-muted text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-col gap-2 pt-1 border-t border-muted/10">
            {project.highlights.slice(0, 2).map((point, i) => {
              const Icon = highlightIcons[i % highlightIcons.length];
              return (
                <div key={point} className="flex items-start gap-2">
                  <Icon size={14} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-xs text-muted/90 line-clamp-2 leading-snug">
                    {point}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-3">
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] sm:text-[11px] bg-background/80 border border-muted/20 text-muted px-2 py-0.5 rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 5 && (
              <span className="font-mono text-[10px] sm:text-[11px] text-accent px-1.5 py-0.5 self-center">
                +{project.stack.length - 5} more
              </span>
            )}
          </div>

          {/* Case study button */}
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center justify-center gap-2 bg-background hover:bg-accent hover:text-background border border-muted/20 hover:border-accent text-foreground font-mono text-xs sm:text-sm py-2.5 rounded-xl transition-all duration-200"
          >
            <span>View Architecture & Case Study</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}