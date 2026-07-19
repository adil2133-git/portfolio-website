import { MapPin, Briefcase, GraduationCap, Clock } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import FadeIn from "@/components/FadeIn";

export default function AboutIntro() {
  return (
    <>
    <FadeIn>
      <section id="about" className="w-full max-w-5xl flex flex-col gap-8 scroll-mt-24">
        <div>
          <h2 className="font-mono text-sm text-accent mb-2 uppercase tracking-widest">01 / profile</h2>
          <h1 className="text-4xl font-bold uppercase tracking-tight">About Me</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-4">
            <p className="text-lg text-foreground leading-relaxed">
              Hi, I&apos;m Abdul Rahman Adil! I&apos;m a Full-Stack MERN Developer
              based in Kerala, specializing in building scalable React and Next.js
              frontends backed by robust Node.js and Express APIs.
            </p>
            <p className="text-muted leading-relaxed">
              Currently interning at Bridgeon Solution, where I work across the
              full stack — from REST API integration and JWT authentication to
              payment gateway integrations and Redis-backed workflows.
            </p>
            <p className="text-muted leading-relaxed">
              I&apos;ve shipped two full-stack projects end to end — QuickCart and
              FUTGEN — focused on clean architecture, real-time features, and
              production deployment, not just local demos.
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="https://github.com/adil2133-git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-surface border border-muted/20 px-4 py-2 rounded-full text-sm hover:border-accent transition-colors"
              >
                <SiGithub size={14} className="text-accent" />
                <span className="text-muted">github.com/adil2133-git</span>
              </a>
              <a
                href="https://www.linkedin.com/in/abdlrhmnadil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-surface border border-muted/20 px-4 py-2 rounded-full text-sm hover:border-accent transition-colors"
              >
                <FaLinkedin size={14} className="text-accent" />
                <span className="text-muted">linkedin.com/in/abdlrhmnadil</span>
              </a>
              <a
                href="mailto:adilaadhy.dev@gmail.com"
                className="flex items-center gap-2 bg-surface border border-muted/20 px-4 py-2 rounded-full text-sm hover:border-accent transition-colors"
              >
                <span className="text-accent">✦</span>
                <span className="text-muted">adilaadhy.dev@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: MapPin, label: "Location", value: "Kerala, India" },
              { icon: GraduationCap, label: "Degree", value: "BCA — P A First Grade College" },
              { icon: Briefcase, label: "Focus", value: "Full-Stack MERN" },
              { icon: Clock, label: "Status", value: "Available" },
            ].map((item) => (
              <div key={item.label} className="p-4 bg-surface border border-muted/20 rounded-xl">
                <item.icon size={18} className="text-accent mb-2" />
                <div className="font-mono text-[10px] text-muted uppercase tracking-widest mb-1">
                  {item.label}
                </div>
                <div className="text-sm font-semibold text-foreground">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
    </>
  );
}