import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-6 px-6 py-16 max-w-2xl mx-auto">
      <h1 className="text-3xl font-semibold">{project.title}</h1>
      <p className="text-lg text-muted">{project.description}</p>

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

      <div className="flex gap-4 mt-2">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm border border-accent text-accent px-4 py-2 rounded-md"
          >
            Visit site
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm border border-muted/30 px-4 py-2 rounded-md"
          >
            GitHub
          </a>
        )}
      </div>
    </main>
  );
}