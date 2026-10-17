import { projects, Project } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, CheckCircle2, Cpu } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const slugs = projects.map((project) => ({ slug: project.slug }));
  // support legacy quickcart route
  slugs.push({ slug: "quickcart" });
  return slugs;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — ${project.subtitle} | Abdul Rahman Adil`,
    description: project.description,
  };
}

function findProject(slug: string): Project | undefined {
  if (slug === "quickcart") {
    return projects.find((p) => p.slug === "quickkart") || projects.find((p) => p.slug === "quickcart");
  }
  return projects.find((p) => p.slug === slug);
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 flex flex-col gap-10">
      {/* Top back button */}
      <div>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors px-3 py-1.5 rounded-lg border border-muted/20 hover:border-accent/40 bg-surface/50"
        >
          <ArrowLeft size={14} />
          <span>Back to all projects</span>
        </Link>
      </div>

      {/* Header Info */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-emerald-500/30 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-emerald-400 font-medium uppercase tracking-wider">
              {project.status}
            </span>
          </div>
          <span className="font-mono text-xs text-muted">Production Architecture</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-accent font-medium font-mono">
          {project.subtitle}
        </p>

        <p className="text-base sm:text-lg text-muted leading-relaxed">
          {project.description}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-mono text-sm bg-accent text-background font-semibold px-5 py-2.5 rounded-xl hover:brightness-110 transition-all"
            >
              <span>Visit Live App</span>
              <ExternalLink size={15} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-mono text-sm bg-surface border border-muted/30 hover:border-accent text-foreground px-5 py-2.5 rounded-xl transition-all"
            >
              <SiGithub size={15} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>

      {/* Preview Image */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-muted/20 bg-surface shadow-2xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 896px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      {/* Key Engineering Highlights */}
      <div className="flex flex-col gap-4 bg-surface border border-muted/20 rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-2 text-foreground font-semibold text-lg">
          <CheckCircle2 size={20} className="text-accent" />
          <h2>Key Engineering Highlights & System Architecture</h2>
        </div>
        <ul className="flex flex-col gap-4 mt-2">
          {project.highlights.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="font-mono text-xs text-accent mt-1 shrink-0 font-bold">
                0{idx + 1}.
              </span>
              <span className="text-sm sm:text-base text-muted leading-relaxed">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack Breakdown */}
      <div className="flex flex-col gap-4 bg-surface/50 border border-muted/20 rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-2 text-foreground font-semibold text-lg">
          <Cpu size={20} className="text-accent" />
          <h2>Technologies & Infrastructure Used</h2>
        </div>
        <div className="flex flex-wrap gap-2.5 mt-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs sm:text-sm bg-background border border-muted/30 text-foreground px-3 py-1.5 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="pt-6 border-t border-muted/20 flex items-center justify-between">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline"
        >
          <ArrowLeft size={16} />
          <span>Back to All Projects</span>
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-accent transition-colors"
        >
          <span>Get in Touch →</span>
        </Link>
      </div>
    </main>
  );
}