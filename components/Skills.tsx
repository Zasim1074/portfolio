"use client";

import { skills } from "@/lib/data";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

const colorMap: Record<string, string> = {
  blue: "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400",
  cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  green: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  amber: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
  slate: "border-border dark:border-border-dark bg-surface2 dark:bg-surface2-dark text-muted dark:text-muted-dark",
};

export function Skills() {
  return (
    <section id="skills" className="section relative">
      <div className="section-inner">
        <ScrollReveal>
          <p className="eyebrow">Skills</p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Technical Toolkit
          </h2>
        </ScrollReveal>

        <motion.div
          className="mt-8 space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((group, groupIdx) => (
            <motion.div
              key={group.group}
              className="grid grid-cols-1 gap-3 border-b border-accent/10 dark:border-accent-dark/10 pb-6 last:border-none last:pb-0 sm:grid-cols-[140px_1fr] sm:items-start hover:border-accent/30 dark:hover:border-accent-dark/30 transition-colors relative group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: groupIdx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Subtle background glow on hover */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-lg blur-xl"
                transition={{ duration: 0.3 }}
              />

              <p className="text-sm font-semibold text-muted dark:text-muted-dark relative z-10">{group.group}</p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {group.items.map((item, itemIdx) => (
                  <motion.span
                    key={item}
                    className={`badge border ${colorMap[group.color]} cursor-pointer relative overflow-hidden`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: groupIdx * 0.1 + itemIdx * 0.05 }}
                    whileHover={{ scale: 1.12, y: -3, rotateZ: 2 }}
                    viewport={{ once: true }}
                  >
                    {/* Shine effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{
                        x: [-100, 100],
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "linear",
                      }}
                    />
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
