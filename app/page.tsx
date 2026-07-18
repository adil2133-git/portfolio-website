import Link from "next/link";
import { projects } from "@/lib/projects";
import GithubActivity from "@/components/GithubActivity";
import FadeIn from "@/components/FadeIn";
import HeroReveal from "@/components/HeroReveal";
import ProjectCard from "@/components/ProjectCard";
import CodeCard from "@/components/CodeCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-16 px-6 py-20">
      <HeroReveal>
        <section className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 w-fit bg-surface border border-muted/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs text-accent uppercase">Available for hire</span>
            </div>
            <h1 className="text-4xl font-semibold">Abdul Rahman Adil</h1>
            <p className="text-xl text-muted">
              Full-Stack <span className="text-accent">MERN</span> Developer
            </p>
            <p className="text-lg text-muted max-w-xl">
              Building scalable web apps with React, Next.js, Node.js, and MongoDB.
              Focused on performance, architecture, and clean code.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              {[
                { label: "Full-stack projects", value: "2+" },
                { label: "Technologies", value: "10+" },
                { label: "Internship", value: "1" },
              ].map((stat) => (
                <div key={stat.label} className="p-4 bg-surface border border-muted/20 rounded-xl flex-1 min-w-[120px]">
                  <div className="text-2xl font-semibold text-accent">{stat.value}</div>
                  <div className="font-mono text-xs text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <CodeCard />
          </div>
        </section>
      </HeroReveal>


      <FadeIn>
        <section className="w-full max-w-3xl flex flex-col gap-6">
          <h2 className="font-mono text-sm text-muted">01 / projects</h2>

          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </section >
      </FadeIn>


      <FadeIn>
        <section className="w-full max-w-3xl flex flex-col gap-4">
          <h2 className="font-mono text-sm text-muted">04 / github activity</h2>
          <div className="border border-muted/20 rounded-lg p-6 overflow-x-auto">
            <GithubActivity />
          </div>
        </section>
      </FadeIn>

      <FadeIn>
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
      </FadeIn>
    </main >
  );
}