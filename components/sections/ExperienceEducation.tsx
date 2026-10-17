import { experience, education, certifications } from "@/lib/experience";
import FadeIn from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/StaggerReveal";
import { Award, GraduationCap, Briefcase } from "lucide-react";

type TimelineEntry = {
  title: string;
  org: string;
  duration: string;
  points: string[];
};

function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <StaggerContainer>
      <div className="flex flex-col">
        {entries.map((entry, i) => (
          <StaggerItem key={entry.title}>
            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-8">
              <div className="hidden sm:flex flex-col items-end pt-1">
                <span className="font-mono text-xs text-muted font-medium">{entry.duration}</span>
              </div>

              <div className="relative pl-6 sm:pl-8 pb-10">
                <div className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-accent/20" />
                {i < entries.length - 1 && (
                  <div className="absolute left-[4.5px] top-4 bottom-0 w-px bg-muted/20" />
                )}

                <span className="sm:hidden font-mono text-xs text-accent block mb-2 font-medium">
                  {entry.duration}
                </span>

                <div className="bg-surface border border-muted/20 rounded-xl p-5 sm:p-6 flex flex-col gap-2 hover:border-accent/30 transition-colors">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">{entry.title}</h3>
                  <p className="text-accent text-sm font-mono">{entry.org}</p>
                  <ul className="list-disc list-inside text-muted text-xs sm:text-sm flex flex-col gap-2 mt-2 leading-relaxed">
                    {entry.points.map((point) => (
                      <li key={point} className="text-muted/90">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </div>
    </StaggerContainer>
  );
}

export default function ExperienceEducation() {
  const experienceEntries: TimelineEntry[] = experience.map((job) => ({
    title: job.role,
    org: job.company,
    duration: job.duration,
    points: job.points,
  }));

  const educationEntries: TimelineEntry[] = [
    {
      title: education.degree,
      org: education.institution,
      duration: education.duration,
      points: education.points,
    },
  ];

  return (
    <FadeIn>
      <section id="experience" className="w-full max-w-4xl flex flex-col gap-10 scroll-mt-24">
        {/* Experience Header */}
        <div>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="font-mono text-sm text-accent uppercase tracking-widest whitespace-nowrap flex items-center gap-2">
              <Briefcase size={15} />
              <span>03 / experience</span>
            </h2>
            <div className="h-px flex-grow bg-muted/20" />
          </div>
          <p className="text-muted text-sm sm:text-base">Professional industry experience.</p>
        </div>

        <Timeline entries={experienceEntries} />

        {/* Education Header */}
        <div>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="font-mono text-sm text-accent uppercase tracking-widest whitespace-nowrap flex items-center gap-2">
              <GraduationCap size={16} />
              <span>education</span>
            </h2>
            <div className="h-px flex-grow bg-muted/20" />
          </div>
          <p className="text-muted text-sm sm:text-base">Academic background.</p>
        </div>

        <Timeline entries={educationEntries} />

        {/* Certifications Header */}
        <div>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="font-mono text-sm text-accent uppercase tracking-widest whitespace-nowrap flex items-center gap-2">
              <Award size={16} />
              <span>certifications</span>
            </h2>
            <div className="h-px flex-grow bg-muted/20" />
          </div>
          <p className="text-muted text-sm sm:text-base">Professional accreditations & training.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-surface border border-muted/20 rounded-xl p-5 flex flex-col gap-2 hover:border-accent/40 transition-colors"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs text-accent font-semibold">{cert.date}</span>
                <span className="w-2 h-2 rounded-full bg-accent" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{cert.title}</h3>
              <p className="text-sm text-muted leading-snug">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}