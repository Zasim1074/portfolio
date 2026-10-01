"use client";

import { ArrowRight, Github, Linkedin, FileText } from "lucide-react";
import { profile } from "@/lib/data";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export function Hero() {
  return (
    <section id="home" className="section relative flex min-h-[calc(100vh-5rem)] items-center py-14 sm:py-16 lg:py-18">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-8%] h-72 w-72 rounded-full bg-accent/8 blur-3xl dark:bg-accent-dark/8" />
        <div className="absolute bottom-[-10%] right-[-8%] h-80 w-80 rounded-full bg-sky-500/8 blur-3xl dark:bg-sky-400/8" />
      </div>

      <div className="section-inner w-full">
        <motion.div variants={container} initial="hidden" animate="show" className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="text-left">
              <motion.span
                variants={item}
                className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300"
              >
                Full-Stack Engineer
              </motion.span>

              <motion.h1
                variants={item}
                className="mt-6 font-display text-4xl font-bold tracking-tight text-ink dark:text-ink-dark sm:text-5xl lg:text-7xl"
              >
                {profile.name}
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-5 text-lg font-medium text-accent dark:text-accent-dark sm:text-2xl"
              >
                React • TypeScript • Python • FastAPI
              </motion.p>

              <motion.p
                variants={item}
                className="mt-6 max-w-xl text-base leading-relaxed text-muted dark:text-muted-dark sm:text-lg"
              >
                Building production-grade software.
              </motion.p>

              <motion.p
                variants={item}
                className="mt-4 text-sm font-medium text-emerald-700 dark:text-emerald-300"
              >
                Open to new opportunities.
              </motion.p>

              <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
                <motion.a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Work
                  <ArrowRight size={16} />
                </motion.a>
                <motion.a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/40 hover:text-accent dark:border-border-dark dark:bg-surface-dark dark:text-ink-dark dark:hover:text-accent-dark"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileText size={16} />
                  View Resume
                </motion.a>
                <motion.a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/40 hover:text-accent dark:border-border-dark dark:bg-surface-dark dark:text-ink-dark dark:hover:text-accent-dark"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github size={16} />
                  GitHub
                </motion.a>
              </motion.div>
            </div>

            <motion.div
              variants={item}
              className="relative"
            >
              <div className="rounded-3xl border border-border bg-surface/80 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm dark:border-border-dark dark:bg-surface-dark/80">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted dark:text-muted-dark">Current focus</p>

                <div className="mt-6 space-y-4">
                  {[
                    { label: "Frontend", value: "React / Next.js / TypeScript" },
                    { label: "Backend", value: "Python / FastAPI / PostgreSQL" },
                    { label: "Systems", value: "Authentication / dashboards / APIs" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-border bg-surface2/75 p-3 dark:border-border-dark dark:bg-surface2-dark/75">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-muted dark:text-muted-dark">{item.label}</p>
                      <p className="mt-2 text-sm font-semibold text-ink dark:text-ink-dark">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-border pt-4 dark:border-border-dark">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent dark:text-accent-dark">Product mindset</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted dark:text-muted-dark">
                    Performance, reliability, and maintainability across the full stack.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
