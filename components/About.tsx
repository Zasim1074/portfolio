"use client";

import { m as motion } from "framer-motion";
import { engineeringHighlights } from "@/lib/data";
import { about } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section relative">
      <div className="section-inner">
        <h2 id="about-title" className="eyebrow" aria-labelledby="about-title">About</h2>
        <div className="mt-5 max-w-4xl space-y-4 text-base leading-relaxed text-muted dark:text-muted-dark">
          {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>

        <motion.div
          className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {engineeringHighlights.map((item, index) => (
            <motion.div
              key={item.label}
              className="card border border-border bg-surface/80 dark:border-border-dark dark:bg-surface-dark/80"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <p className="font-display text-4xl font-bold tracking-tight text-accent dark:text-accent-dark">{item.value}</p>
              <p className="mt-3 text-sm font-medium text-ink dark:text-ink-dark">{item.label}</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-muted dark:text-muted-dark">{item.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
