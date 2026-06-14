import { Briefcase, Building, Code2, ExternalLink, Link as LinkIcon } from "lucide-react";
import { projects } from "@/lib/data";

const icons: Record<string, typeof Briefcase> = {
  briefcase: Briefcase,
  building: Building,
  code: Code2,
};

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <p className="eyebrow">Projects</p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Featured Work
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => {
            const Icon = icons[project.icon];
            return (
              <div key={project.title} className="card flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent dark:text-accent-dark">
                    <Icon size={18} />
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs font-medium text-muted dark:text-muted-dark transition-colors hover:text-ink dark:hover:text-ink-dark"
                  >
                    <ExternalLink size={12} />
                    Live
                  </a>
                </div>

                <h3 className="mt-4 text-lg font-bold">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted dark:text-muted-dark">
                  {project.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="badge border-border dark:border-border-dark bg-surface2 dark:bg-surface2-dark text-muted dark:text-muted-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 flex items-center gap-1.5 text-sm font-medium text-accent dark:text-accent-dark"
                >
                  <LinkIcon size={14} />
                  {project.linkLabel}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
