import CodeCard from "@/components/CodeCard";
import HeroReveal from "@/components/HeroReveal";
import { ArrowRight, FileText } from "lucide-react";

export default function Hero() {
  return (
    <HeroReveal>
      <section className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div
            data-reveal
            className="inline-flex items-center gap-2 px-3 py-1 w-fit bg-surface border border-muted/20 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-medium">
              Available for hire
            </span>
          </div>

          <div data-reveal className="flex flex-col gap-2">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Abdul Rahman Adil
            </h1>
            <p className="text-xl sm:text-2xl text-muted font-medium">
              Full-Stack <span className="text-accent">MERN</span> Developer
            </p>
          </div>

          <p data-reveal className="text-base sm:text-lg text-muted max-w-xl leading-relaxed">
            Full-Stack Developer with three deployed production applications. Specializing in high-concurrency systems, atomic order workflows, BullMQ queues, and scalable microservices with React, Next.js, Node.js, PostgreSQL, and MongoDB.
          </p>

          <div data-reveal className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm bg-accent text-background font-semibold px-5 py-2.5 rounded-xl hover:brightness-110 transition-all shadow-md"
            >
              <span>Explore Projects</span>
              <ArrowRight size={15} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm bg-surface border border-muted/30 hover:border-accent text-foreground px-4 py-2.5 rounded-xl transition-all"
            >
              <FileText size={15} className="text-accent" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>

        <div data-reveal className="lg:col-span-5 w-full">
          <CodeCard />
        </div>
      </section>
    </HeroReveal>
  );
}
