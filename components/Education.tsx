import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="section bg-surface2/50 dark:bg-surface2-dark/50">
      <div className="section-inner">
        <p className="eyebrow">Education</p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Academic Background
        </h2>

        <div className="mt-8 space-y-6">
          {education.map((edu) => (
            <div key={edu.degree} className="relative border-l-2 border-accent/30 pl-6">
              <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent dark:bg-accent-dark" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold">{edu.degree}</h3>
                  <p className="text-sm font-medium text-accent dark:text-accent-dark">{edu.school}</p>
                </div>
                <span className="text-sm text-muted dark:text-muted-dark">{edu.period}</span>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted dark:text-muted-dark">
                {edu.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
