import { skills } from "@/lib/skills";
import FadeIn from "@/components/FadeIn";

export default function SkillsSection() {
  return (
    <FadeIn>
      <section id="skills" className="w-full max-w-3xl flex flex-col gap-6 scroll-mt-24">
        <h2 className="font-mono text-sm text-muted">03 / skills</h2>
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
    </FadeIn>
  );
}