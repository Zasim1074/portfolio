"use client";

import { ChevronRight, MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="section bg-surface2/50 dark:bg-surface2-dark/50 relative">
      <div className="section-inner">
        <ScrollReveal>
          <p className="eyebrow">Experience</p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Work History
          </h2>
        </ScrollReveal>

        <motion.div
          className="mt-8 space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {experience.map((job, idx) => (
            <motion.div
              key={job.company}
              className="relative rounded-lg border border-accent/20 dark:border-accent-dark/20 hover:border-accent/40 dark:hover:border-accent-dark/40 p-6 transition-colors group card-glass-enhanced"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Background glow on hover */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-lg blur-xl -z-10"
                transition={{ duration: 0.3 }}
              />

              <motion.span
                className="absolute -left-3 top-6 h-3 w-3 rounded-full bg-accent dark:bg-accent-dark"
                whileHover={{ scale: 1.4 }}
                animate={{ boxShadow: ["0 0 0 0 rgba(96, 165, 250, 0.4)", "0 0 0 8px rgba(96, 165, 250, 0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
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
                {job.points.map((point, pointIdx) => (
                  <motion.li
                    key={point}
                    className="flex gap-2 text-sm leading-relaxed text-muted dark:text-muted-dark"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + pointIdx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <motion.div whileHover={{ x: 6, scale: 1.1 }} className="relative z-10">
                      <ChevronRight size={16} className="mt-0.5 shrink-0 text-accent dark:text-accent-dark" />
                    </motion.div>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
