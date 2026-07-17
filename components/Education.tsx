"use client";

import { education } from "@/lib/data";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" className="section bg-surface2/50 dark:bg-surface2-dark/50 relative">
      <div className="section-inner">
        <ScrollReveal>
          <p className="eyebrow">Education</p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Academic Background
          </h2>
        </ScrollReveal>

        <motion.div
          className="mt-8 space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              className="relative border-l-2 border-accent/30 hover:border-accent/60 pl-6 transition-colors group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.span
                className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent dark:bg-accent-dark group-hover:animate-pulse"
                whileHover={{ scale: 1.3 }}
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold">{edu.degree}</h3>
                  <p className="text-sm font-medium text-accent dark:text-accent-dark">{edu.school}</p>
                </div>
                <motion.span
                  className="text-sm text-muted dark:text-muted-dark"
                  initial={{ opacity: 0.6 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 + 0.1 }}
                  viewport={{ once: true }}
                >
                  {edu.period}
                </motion.span>
              </div>
              <motion.p
                className="mt-3 max-w-2xl text-sm leading-relaxed text-muted dark:text-muted-dark"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                {edu.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
