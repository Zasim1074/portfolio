"use client";

import { Activity, MapPin, Layers } from "lucide-react";
import { about } from "@/lib/data";
import { ScrollReveal, FloatingElement } from "./ScrollReveal";
import { motion } from "framer-motion";

const icons = [Activity, MapPin, Layers];

export function About() {
  return (
    <section id="about" className="section bg-surface2/50 dark:bg-surface2-dark/50 relative">
      <div className="section-inner">
        <ScrollReveal>
          <p className="eyebrow">About</p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Who I am
          </h2>
        </ScrollReveal>

        <motion.div
          className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col gap-6">
            <div className="space-y-4 text-base leading-relaxed text-muted dark:text-muted-dark">
              {about.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.div
              className="card grid grid-cols-2 gap-6 sm:gap-10 bg-gradient-to-br from-surface/50 to-surface/30 dark:from-surface-dark/50 dark:to-surface-dark/30 card-holographic interactive-3d relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, rotateX: 3 }}
            >
              {/* Animated glow background */}
              <motion.div
                className="absolute -top-32 -left-32 w-64 h-64 bg-accent/10 dark:bg-accent-dark/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 0.8],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              {about.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.p
                    className="font-display text-3xl font-bold text-accent dark:text-accent-dark sm:text-4xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="mt-1 text-sm font-medium">{stat.label}</p>
                  <p className="text-xs text-muted dark:text-muted-dark">{stat.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex flex-col gap-4">
            {about.highlights.map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <FloatingElement delay={i * 0.2}>
                    <motion.div
                      className="card flex items-start gap-4 border-accent/10 dark:border-accent-dark/10 bg-gradient-to-br from-surface/50 to-surface/30 dark:from-surface-dark/50 dark:to-surface-dark/30 cursor-pointer relative overflow-hidden card-holographic interactive-3d"
                      whileHover={{ y: -2, rotateY: 1, rotateX: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Dynamic glow effect */}
                      <motion.div
                        className="absolute -inset-full bg-gradient-to-r from-transparent via-accent/5 to-transparent"
                        animate={{
                          x: [-200, 200],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      {/* Gradient overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />

                      <motion.span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent dark:text-accent-dark relative z-10"
                        whileHover={{ scale: 1.2, rotate: -15 }}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      >
                        <Icon size={18} />
                      </motion.span>
                      <div className="relative z-10">
                        <p className="font-semibold">{item.title}</p>
                        <p className="mt-1 text-sm text-muted dark:text-muted-dark">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  </FloatingElement>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
