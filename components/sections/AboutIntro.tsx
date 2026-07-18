import { MapPin, Briefcase, GraduationCap, Clock } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function AboutIntro() {
  return (
    <FadeIn>
      <section id="about" className="w-full max-w-3xl flex flex-col gap-8 scroll-mt-24">
        <div>
          <h2 className="font-mono text-sm text-accent mb-2">01 / about</h2>
          <h1 className="text-3xl font-semibold mb-4">
            Crafting digital experiences with logic and precision.
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            A Kerala-based Full-Stack Developer with a deep-seated enthusiasm for
            the MERN ecosystem. Currently interning at Bridgeon Solution, with two
            shipped full-stack projects — QuickCart and FUTGEN — focused on clean
            code, solid architecture, and real-world problem solving.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: MapPin, label: "Location", value: "Kerala, India" },
            { icon: Briefcase, label: "Current Role", value: "Full-Stack Intern" },
            { icon: GraduationCap, label: "Education", value: "BCA Graduate" },
            { icon: Clock, label: "Availability", value: "Open to opportunities" },
          ].map((item) => (
            <div key={item.label} className="p-4 bg-surface border border-muted/20 rounded-xl">
              <item.icon size={20} className="text-accent mb-2" />
              <div className="font-mono text-xs text-muted mb-1">{item.label}</div>
              <div className="text-foreground">{item.value}</div>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}