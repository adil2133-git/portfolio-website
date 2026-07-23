import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { StaggerContainer, StaggerItem } from "@/components/StaggerReveal";

export default function AboutIntro() {
  return (
    <section id="about" className="w-full max-w-5xl flex flex-col gap-8 scroll-mt-24">
      <StaggerItem>
        <div className="flex items-center gap-4">
          <h2 className="font-mono text-sm text-accent uppercase tracking-widest whitespace-nowrap">
            01 / about
          </h2>
          <div className="h-px flex-grow bg-muted/20" />
        </div>
      </StaggerItem>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-start">
        <StaggerItem>
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-muted/20 bg-surface">
            <Image src="/profile.png" alt="Abdul Rahman Adil" fill sizes="280px" className="object-cover" priority />
          </div>
        </StaggerItem>

        <div className="flex flex-col gap-4">
          <StaggerItem>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight">Abdul Rahman Adil</h1>
              <p className="font-mono text-sm text-muted mt-1">Full-Stack MERN Developer · Kerala, India</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <p className="text-foreground leading-relaxed">
              Hi, I&apos;m Abdul Rahman Adil! I&apos;m a Full-Stack MERN Developer specializing in building scalable React and Next.js frontends backed by robust Node.js and Express APIs.
            </p>
          </StaggerItem>

          <StaggerItem>
            <p className="text-muted leading-relaxed">
              Currently interning at Bridgeon Solution, where I work across the full stack — from REST API integration and JWT authentication to payment gateway integrations and Redis-backed workflows.
            </p>
          </StaggerItem>

          <StaggerItem>
            <p className="text-muted leading-relaxed">
              I&apos;ve shipped two full-stack projects end to end — QuickCart and FUTGEN — focused on clean architecture, real-time features, and production deployment, not just local demos.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-wrap gap-3 mt-2">
              <a href="https://github.com/adil2133-git" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-muted/20 px-4 py-2 rounded-full text-sm hover:border-accent transition-colors">
                <SiGithub size={14} className="text-accent" />
                <span className="text-muted">github.com/adil2133-git</span>
              </a>
              <a href="https://www.linkedin.com/in/abdlrhmnadil" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-muted/20 px-4 py-2 rounded-full text-sm hover:border-accent transition-colors">
                <FaLinkedin size={14} className="text-accent" />
                <span className="text-muted">linkedin.com/in/abdlrhmnadil</span>
              </a>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 pt-6 border-t border-muted/20">
              {[
                { value: "2+", label: "Projects Shipped" },
                { value: "10+", label: "Technologies" },
                { value: "1", label: "Internship" },
                { value: "BCA", label: "Education" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-accent">{stat.value}</span>
                  <span className="font-mono text-[10px] text-muted uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </StaggerItem>
        </div>
      </StaggerContainer>
    </section>
  );
}