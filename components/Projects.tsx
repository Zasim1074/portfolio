"use client";

import { Activity, Briefcase, Code2, ExternalLink, Github, Sparkles } from "lucide-react";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";

const icons: Record<string, typeof Briefcase> = {
  briefcase: Briefcase,
  code: Code2,
  sparkles: Sparkles,
  activity: Activity,
};

export function Projects() {
  return (
    <section id="projects" className="section relative">
      <div className="section-inner">
        <p className="eyebrow">Selected Work</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {projects.map((project, idx) => {
            const Icon = icons[project.icon];
            const isFlagship = project.title === "TrackHire" || project.title === "Hotel Sanwariya";

            return (
              <motion.article
                key={project.title}
                className={`card flex h-full flex-col border border-border bg-surface/80 dark:border-border-dark dark:bg-surface-dark/80 ${isFlagship ? "lg:col-span-2" : ""}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent dark:bg-accent-dark/10 dark:text-accent-dark">
                    <Icon size={18} />
                  </span>
                  <span className="rounded-full border border-border bg-surface2 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted dark:border-border-dark dark:bg-surface2-dark dark:text-muted-dark">
                    {project.type}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-ink dark:text-ink-dark">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted dark:text-muted-dark">{project.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="badge border-border bg-surface2 text-muted dark:border-border-dark dark:bg-surface2-dark dark:text-muted-dark">
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted dark:text-muted-dark">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent dark:bg-accent-dark" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent dark:border-border-dark dark:bg-surface-dark dark:text-ink-dark dark:hover:text-accent-dark"
                  >
                    <Github size={15} />
                    GitHub
                  </a>
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent dark:border-border-dark dark:bg-surface-dark dark:text-ink-dark dark:hover:text-accent-dark"
                    >
                      <ExternalLink size={15} />
                      {project.title === "Hotel Sanwariya" ? "Visit Website" : "Live Demo"}
                    </a>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
