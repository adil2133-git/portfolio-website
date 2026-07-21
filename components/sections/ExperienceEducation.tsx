import { experience } from "@/lib/experience";
import FadeIn from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/StaggerReveal";

const education = {
  degree: "Bachelor of Computer Application",
  institution: "P A First Grade College",
  duration: "Sep 2022 – Jun 2025",
  points: [
    "Focused on Computer Science fundamentals, Web Technologies, and Database Management.",
  ],
};

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
            <div key={entry.title} className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 sm:gap-8">
              <div className="hidden sm:flex flex-col items-end pt-1">
                <span className="font-mono text-xs text-muted">{entry.duration}</span>
              </div>

              <div className="relative pl-8 pb-10">
                <div className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-accent" />
                {i < entries.length - 1 && (
                  <div className="absolute left-[4.5px] top-4 bottom-0 w-px bg-muted/20" />
                )}

                <span className="sm:hidden font-mono text-xs text-muted block mb-2">
                  {entry.duration}
                </span>

                <div className="bg-surface border border-muted/20 rounded-xl p-6 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{entry.title}</h3>
                  <p className="text-accent text-sm font-mono">{entry.org}</p>
                  <ul className="list-disc list-inside text-muted text-sm flex flex-col gap-1.5 mt-2">
                    {entry.points.map((point) => (
                      <li key={point}>{point}</li>
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
      <section id="experience" className="w-full max-w-3xl flex flex-col gap-10 scroll-mt-24">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="font-mono text-sm text-accent uppercase tracking-widest whitespace-nowrap">
              02 / experience
            </h2>
            <div className="h-px flex-grow bg-muted/20" />
          </div>
          <p className="text-muted text-sm">My professional journey.</p>
        </div>

        <Timeline entries={experienceEntries} />

        <div>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="font-mono text-sm text-accent uppercase tracking-widest whitespace-nowrap">
              education
            </h2>
            <div className="h-px flex-grow bg-muted/20" />
          </div>
        </div>

        <Timeline entries={educationEntries} />
      </section>
    </FadeIn>
  );
}