import { Activity, MapPin, Layers } from "lucide-react";
import { about } from "@/lib/data";

const icons = [Activity, MapPin, Layers];

export function About() {
  return (
    <section id="about" className="section bg-surface2/50 dark:bg-surface2-dark/50">
      <div className="section-inner">
        <p className="eyebrow">About</p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Who I am
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-6">
            <div className="space-y-4 text-base leading-relaxed text-muted dark:text-muted-dark">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="card grid grid-cols-2 gap-6 sm:gap-10">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-accent dark:text-accent-dark sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-medium">{stat.label}</p>
                  <p className="text-xs text-muted dark:text-muted-dark">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {about.highlights.map((item, i) => {
              const Icon = icons[i];
              return (
                <div key={item.title} className="card flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent dark:text-accent-dark">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-muted dark:text-muted-dark">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
