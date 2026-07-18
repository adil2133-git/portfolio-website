import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
    return (
        <FadeIn>
            <section className="w-full max-w-3xl flex flex-col gap-6">
                <h2 className="font-mono text-sm text-muted">01 / projects</h2>

                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </section >
        </FadeIn>

    )
}