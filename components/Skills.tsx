"use client";

import { skills } from "@/lib/data";
import { motion } from "framer-motion";

const colorMap: Record<string, string> = {
  blue: "border-blue-500/25 bg-blue-500/5 text-blue-700 dark:border-blue-400/30 dark:bg-blue-500/10 dark:text-blue-300",
  cyan: "border-cyan-500/25 bg-cyan-500/5 text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-500/10 dark:text-cyan-300",
  green: "border-emerald-500/25 bg-emerald-500/5 text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-500/10 dark:text-emerald-300",
  amber: "border-amber-500/25 bg-amber-500/5 text-amber-700 dark:border-amber-400/30 dark:bg-amber-500/10 dark:text-amber-300",
};

export function Skills() {
  return (
    <section id="skills" className="section relative">
      <div className="section-inner">
        <p className="eyebrow">Technical Stack</p>

        <motion.div
          className="mt-8 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          {skills.map((group, groupIdx) => (
            <motion.div
              key={group.group}
              className="grid gap-3 border-b border-border pb-6 last:border-none last:pb-0 dark:border-border-dark sm:grid-cols-[150px_1fr]"
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: groupIdx * 0.07 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted dark:text-muted-dark">
                {group.group}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item, itemIdx) => (
                  <motion.span
                    key={item}
                    className={`badge border ${colorMap[group.color]}`}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.25, delay: groupIdx * 0.08 + itemIdx * 0.04 }}
                    whileHover={{ y: -2, scale: 1.02 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
