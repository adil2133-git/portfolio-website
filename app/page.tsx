import Link from "next/link";
import { projects } from "@/lib/projects";

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
    </main>
  );
}