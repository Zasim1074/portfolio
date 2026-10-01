"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Performance",
    text: "Build fast applications, optimize bundles, reduce loading time, and improve real-world responsiveness.",
  },
  {
    title: "Reliability",
    text: "Build predictable APIs and interfaces with clear error handling, validation, and resilient behavior.",
  },
  {
    title: "Maintainability",
    text: "Prefer clear architecture, reusable components, and code that can evolve without friction.",
  },
  {
    title: "User Experience",
    text: "Technical quality should translate into fast, intuitive, and accessible product experiences.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="section relative bg-surface2/40 dark:bg-surface2-dark/40">
      <div className="section-inner">
        <p className="eyebrow">Engineering Approach</p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink dark:text-ink-dark sm:text-4xl">
          Thoughtful engineering decisions that improve product quality.
        </h2>

        <motion.div
          className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              className="card border border-border bg-surface/80 dark:border-border-dark dark:bg-surface-dark/80"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent dark:text-accent-dark">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted dark:text-muted-dark">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
