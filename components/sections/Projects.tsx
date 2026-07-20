import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";

export default function Projects() {
  return (
    <FadeIn>
      <section id="projects" className="w-full max-w-5xl flex flex-col gap-6 scroll-mt-24">
        <div className="flex items-center gap-4">
          <h2 className="font-mono text-sm text-accent uppercase tracking-widest whitespace-nowrap">
            02 / projects
          </h2>
          <div className="h-px flex-grow bg-muted/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </FadeIn>
  );
}