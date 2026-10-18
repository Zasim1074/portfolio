import { skills } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export function Skills() {
  return (
    <section id="skills" className="section relative">
      <div className="section-inner">
        <Reveal>
          <h2
            id="skills-title"
            className="mono-label text-cyan"
            aria-labelledby="skills-title"
          >
            Technical Skills
          </h2>
        </Reveal>
        <div className="mt-8 space-y-6">
          {skills.map((group) => (
            <Reveal
              key={group.group}
              className="grid gap-4 border-b border-white/10 pb-6 last:border-none last:pb-0 sm:grid-cols-[180px_1fr]"
            >
              <h3 className="mono-label pt-2 text-muted-dark">{group.group}</h3>
              <Stagger className="flex flex-wrap gap-2" delay={0.045}>
                {group.items.map((item) => (
                  <StaggerItem key={item}>
                    <span className="skill-chip badge border-white/10 bg-white/[0.03] text-ink-dark">
                      {item}
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
