import { experience } from "@/lib/experience";
import { skills } from "@/lib/skills";

export default function About() {
  return (
    <main className="flex flex-col items-center gap-16 px-6 py-20">
      <section className="max-w-2xl flex flex-col gap-4 text-center">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className="text-lg text-muted">
          Full-Stack Developer (MERN) building scalable web applications with
          React, Next.js, Node.js, and MongoDB. Currently interning at
          Bridgeon Solution, with two shipped full-stack projects — QuickCart
          and FUTGEN.
        </p>
      </section>

      <section className="w-full max-w-3xl flex flex-col gap-6">
        <h2 className="font-mono text-sm text-muted">01 / experience</h2>
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

      <section className="w-full max-w-3xl flex flex-col gap-6">
        <h2 className="font-mono text-sm text-muted">02 / skills</h2>
        <div className="flex flex-col gap-5">
          {skills.map((group) => (
            <div key={group.category} className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-accent">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="font-mono text-xs border border-muted/30 text-muted px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}