import Link from "next/link";
import { projects } from "@/lib/projects";
import GithubActivity from "@/components/GithubActivity";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-16 px-6 py-20">
      <section className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-semibold">Abdul Rahman Adil</h1>
        <p className="max-w-md text-lg text-muted">
          Full-Stack Developer (MERN) — building scalable web apps with React,
          Next.js, Node.js, and MongoDB.
        </p>
      </section>

      <section className="flex flex-wrap justify-center gap-10 py-4">
        {[
          { label: "Full-stack projects", value: "2+" },
          { label: "Technologies", value: "10+" },
          { label: "Internship", value: "1" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <span className="text-2xl font-semibold text-accent">{stat.value}</span>
            <span className="font-mono text-xs text-muted">{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="w-full max-w-3xl flex flex-col gap-6">
        <h2 className="font-mono text-sm text-muted">01 / projects</h2>

        {projects.map((project) => (
          <div
            key={project.slug}
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

                <a href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                >
                  <ExternalLink size={16} />
                  Live site
                </a>
              )}
              {project.githubUrl && (

                <a href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                >
                  <SiGithub size={16} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))
        }
      </section >


      <section className="w-full max-w-3xl flex flex-col gap-4">
        <h2 className="font-mono text-sm text-muted">04 / github activity</h2>
        <div className="border border-muted/20 rounded-lg p-6 overflow-x-auto">
          <GithubActivity />
        </div>
      </section>

      <section className="w-full max-w-3xl flex flex-col items-center gap-6 py-12 text-center">
        <h2 className="font-mono text-sm text-muted">05 / connect</h2>
        <p className="max-w-md text-lg text-muted">Open to new roles and collaborations — feel free to reach out.</p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:adilaadhy.dev@gmail.com"
            className="font-mono text-sm border border-accent text-accent px-4 py-2 rounded-md"
          >
            Email me
          </a>
          <a
            href="https://github.com/adil2133-git"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm border border-muted/30 px-4 py-2 rounded-md hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abdlrhmnadil"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm border border-muted/30 px-4 py-2 rounded-md hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div >
      </section >
    </main >
  );
}