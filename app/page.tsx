import Link from "next/link";
import { projects } from "@/lib/projects";
import { experience } from "@/lib/experience";
import { skills } from "@/lib/skills";

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

      <section className="w-full max-w-3xl flex flex-col gap-6">
        <h2 className="font-mono text-sm text-muted">~/projects</h2>

        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="border border-muted/20 rounded-lg p-6 flex flex-col gap-3 hover:border-accent transition-colors"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-muted">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs border border-muted/30 text-muted px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </section>

      <section className="w-full max-w-3xl flex flex-col gap-6">
        <h2 className="font-mono text-sm text-muted">~/experience</h2>

        {experience.map((job) => (
          <div
            key={job.company}
            className="border border-muted/20 rounded-lg p-6 flex flex-col gap-2"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-lg font-semibold">{job.role}</h3>
              <span className="font-mono text-xs text-muted">{job.duration}</span>
            </div>
            <p className="text-accent text-sm">{job.company}</p>
            <ul className="list-disc list-inside text-muted text-sm flex flex-col gap-1 mt-2">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="w-full max-w-3xl flex flex-col gap-6">
        <h2 className="font-mono text-sm text-muted">~/skills</h2>

        <div className="flex flex-col gap-5">
          {skills.map((group) => (
            <div key={group.category} className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-accent">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs border border-muted/30 text-muted px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-3xl flex flex-col items-center gap-6 py-12 text-center">
        <h2 className="font-mono text-sm text-muted">~/contact</h2>
        <p className="max-w-md text-lg text-muted">
          Open to new roles and collaborations — feel free to reach out.
        </p>

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