"use client";

import { MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="section relative bg-surface2/40 dark:bg-surface2-dark/40">
      <div className="section-inner">
        <p className="eyebrow">Experience</p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink dark:text-ink-dark sm:text-4xl">
          Product engineering work with real business context.
        </h2>

        <motion.div
          className="mt-8 space-y-6"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          {experience.map((job, idx) => (
            <motion.article
              key={job.company}
              className="card border border-border bg-surface/70 dark:border-border-dark dark:bg-surface-dark/70"
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <div className="flex flex-col gap-3 border-b border-border pb-4 dark:border-border-dark sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xl font-semibold text-ink dark:text-ink-dark">{job.role}</p>
                  <p className="mt-1 text-sm font-medium text-accent dark:text-accent-dark">{job.company}</p>
                </div>

                <div className="flex flex-col text-sm text-muted dark:text-muted-dark sm:items-end">
                  <span>{job.period}</span>
                  <span className="mt-1 inline-flex items-center gap-1">
                    <MapPin size={12} />
                    {job.location}
                  </span>
                </div>
              </div>

              <ul className="mt-4 space-y-3">
                {job.points.map((point, pointIdx) => (
                  <motion.li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted dark:text-muted-dark sm:text-base"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.3, delay: idx * 0.06 + pointIdx * 0.04 }}
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent dark:bg-accent-dark" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
