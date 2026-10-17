import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { StaggerContainer, StaggerItem } from "@/components/StaggerReveal";

export default function AboutIntro() {
  return (
    <section id="about" className="w-full max-w-5xl flex flex-col gap-8 scroll-mt-24">
      <StaggerContainer className="flex flex-col gap-8 w-full">
        <StaggerItem>
          <div className="flex items-center gap-4">
            <h2 className="font-mono text-sm text-accent uppercase tracking-widest whitespace-nowrap">
              01 / about
            </h2>
            <div className="h-px flex-grow bg-muted/20" />
          </div>
        </StaggerItem>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-10 items-start">
          <StaggerItem className="w-full flex justify-center md:justify-start">
            <div className="relative w-full max-w-[260px] aspect-square rounded-2xl overflow-hidden border border-muted/20 bg-surface shadow-xl">
              <Image
                src="/profile.png"
                alt="Abdul Rahman Adil"
                fill
                sizes="(max-width: 768px) 260px, 260px"
                className="object-cover object-top"
                priority
              />
            </div>
          </StaggerItem>

          <div className="flex flex-col gap-4">
            <StaggerItem>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-foreground">
                  Abdul Rahman Adil
                </h1>
                <p className="font-mono text-sm text-accent mt-1">
                  Full-Stack Developer | MERN & PostgreSQL · Kerala, India
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <p className="text-foreground leading-relaxed text-base sm:text-lg font-medium">
                Full-Stack Developer with three deployed production apps, specializing in building high-concurrency systems, real-time architectures, and clean, resilient user interfaces.
              </p>
            </StaggerItem>

            <StaggerItem>
              <p className="text-muted leading-relaxed text-sm sm:text-base">
                Currently interning at <strong className="text-foreground font-semibold">Bridgeon Skillversity</strong>, engineering full-stack modules across React, Next.js, TypeScript, Node.js, Express, and MongoDB — from schema design and Redis-backed OTPs to Razorpay payments and weekly Agile delivery.
              </p>
            </StaggerItem>

            <StaggerItem>
              <p className="text-muted leading-relaxed text-sm sm:text-base">
                I focus on real production engineering: atomic order dispatch over Socket.IO, BullMQ background job queues with Redis, PostgreSQL transaction slot holds, and automated CI/CD deployments on Docker and AWS.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href="https://github.com/adil2133-git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-muted/20 px-4 py-2 rounded-full text-xs sm:text-sm hover:border-accent hover:bg-surface transition-colors"
                >
                  <SiGithub size={15} className="text-accent" />
                  <span className="text-foreground">github.com/adil2133-git</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/abdlrhmnadil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-muted/20 px-4 py-2 rounded-full text-xs sm:text-sm hover:border-accent hover:bg-surface transition-colors"
                >
                  <FaLinkedin size={15} className="text-accent" />
                  <span className="text-foreground">linkedin.com/in/abdlrhmnadil</span>
                </a>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 pt-6 border-t border-muted/20">
                {[
                  { value: "3", label: "Deployed Apps" },
                  { value: "20+", label: "Technologies" },
                  { value: "1", label: "Internship" },
                  { value: "BCA", label: "Education" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1 bg-surface/50 border border-muted/10 p-3 rounded-xl sm:bg-transparent sm:border-0 sm:p-0">
                    <span className="text-2xl sm:text-3xl font-bold text-accent">{stat.value}</span>
                    <span className="font-mono text-[10px] sm:text-xs text-muted uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </StaggerItem>
          </div>
        </div>
      </StaggerContainer>
    </section>
  );
}