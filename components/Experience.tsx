import { ChevronRight, MapPin } from "lucide-react";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section bg-surface2/50 dark:bg-surface2-dark/50">
      <div className="section-inner">
        <p className="eyebrow">Experience</p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Work History
        </h2>

        <div className="mt-8 space-y-8">
          {experience.map((job) => (
            <div key={job.company} className="relative border-l-2 border-accent/30 pl-6">
              <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent dark:bg-accent-dark" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold">{job.role}</h3>
                  <p className="text-sm font-medium text-accent dark:text-accent-dark">{job.company}</p>
                </div>
                <div className="flex flex-col text-sm text-muted dark:text-muted-dark sm:items-end">
                  <span>{job.period}</span>
                  <span className="flex items-center gap-1 sm:justify-end">
                    <MapPin size={12} />
                    {job.location}
                  </span>
                </div>
              </div>

              <ul className="mt-4 space-y-2.5">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted dark:text-muted-dark">
                    <ChevronRight size={16} className="mt-0.5 shrink-0 text-accent dark:text-accent-dark" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
