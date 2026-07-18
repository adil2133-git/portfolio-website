import { experience } from "@/lib/experience";
import FadeIn from "@/components/FadeIn";

export default function ExperienceEducation() {
  return (
    <FadeIn>
      <section id="experience" className="w-full max-w-3xl flex flex-col gap-6 scroll-mt-24">
        <h2 className="font-mono text-sm text-muted">02 / experience</h2>
        {experience.map((job) => (
          <div key={job.company} className="border border-muted/20 rounded-lg p-6 flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-lg font-semibold">{job.role}</h3>
              <span className="font-mono text-xs text-muted">{job.duration}</span>
            </div>
            <p className="text-accent text-sm">{job.company}</p>
            <ul className="list-disc list-inside text-muted text-sm flex flex-col gap-1 mt-2">
              {job.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
        ))}
      </section>
    </FadeIn>
  );
}