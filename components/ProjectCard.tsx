"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            whileHover={{ y: -6, boxShadow: "0 12px 30px -10px var(--accent)" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border border-muted/20 rounded-lg p-6 flex flex-col gap-3 hover:border-accent transition-colors"
        >
            <Link href={`/projects/${project.slug}`}>
                <h3 className="text-xl font-semibold hover:text-accent transition-colors">
                    {project.title}
                </h3>
            </Link>
            <p className="text-muted">{project.description}</p>
            <ul className="list-disc list-inside text-muted text-sm flex flex-col gap-1">
                {project.highlights.map((point) => (
                    <li key={point}>{point}</li>
                ))}
            </ul>
            <div className="flex gap-4 mt-2">
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                    >
                        <ExternalLink size={16} />
                        Live site
                    </a>
                )}
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                    >
                        <SiGithub size={16} />
                        GitHub
                    </a>
                )}
            </div>
        </motion.div>
    );
}