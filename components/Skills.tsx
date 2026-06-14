import { skills } from "@/lib/data";

const colorMap: Record<string, string> = {
  blue: "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400",
  cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  green: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  amber: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
  slate: "border-border dark:border-border-dark bg-surface2 dark:bg-surface2-dark text-muted dark:text-muted-dark",
};

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <p className="eyebrow">Skills</p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Technical Toolkit
        </h2>

        <div className="mt-8 space-y-6">
          {skills.map((group) => (
            <div
              key={group.group}
              className="grid grid-cols-1 gap-3 border-b border-border dark:border-border-dark pb-6 last:border-none last:pb-0 sm:grid-cols-[140px_1fr] sm:items-start"
            >
              <p className="text-sm font-semibold text-muted dark:text-muted-dark">{group.group}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className={`badge border ${colorMap[group.color]}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
