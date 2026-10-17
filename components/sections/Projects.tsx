import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/StaggerReveal";

export default function Projects() {
  return (
    <FadeIn>
      <section id="projects" className="w-full max-w-6xl flex flex-col gap-8 scroll-mt-24">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <h2 className="font-mono text-sm text-accent uppercase tracking-widest whitespace-nowrap">
              02 / projects
            </h2>
            <div className="h-px flex-grow bg-muted/20" />
          </div>
          <p className="text-muted text-sm sm:text-base max-w-2xl">
            Production-grade full-stack applications with real-time concurrency, background job queues, and robust financial integrations.
          </p>
        </div>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {projects.map((project) => (
              <StaggerItem key={project.slug} className="h-full">
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>
    </FadeIn>
  );
}