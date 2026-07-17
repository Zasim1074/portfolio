"use client";

import { Briefcase, Building, Code2, ExternalLink, Link as LinkIcon } from "lucide-react";
import { projects } from "@/lib/data";
import { ScrollReveal, StaggerContainer } from "./ScrollReveal";
import { motion } from "framer-motion";

const icons: Record<string, typeof Briefcase> = {
  briefcase: Briefcase,
  building: Building,
  code: Code2,
};

export function Projects() {
  return (
    <section id="projects" className="section relative">
      <div className="section-inner">
        <ScrollReveal>
          <p className="eyebrow">Projects</p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Work
          </h2>
        </ScrollReveal>

        <motion.div
          className="mt-8 grid gap-6 sm:grid-cols-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {projects.map((project, idx) => {
            const Icon = icons[project.icon];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, rotateY: 2 }}
                className="group perspective"
              >
                <div className="card interactive flex flex-col h-full relative overflow-hidden bg-gradient-to-br from-surface/50 to-surface/30 dark:from-surface-dark/50 dark:to-surface-dark/30 card-holographic interactive-3d">
                  {/* 3D gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 pointer-events-none"
                    transition={{ duration: 0.4 }}
                  />

                  {/* Animated background blob */}
                  <motion.div
                    className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 dark:bg-accent-dark/5 rounded-full blur-3xl group-hover:animate-blob"
                    animate={{
                      scale: [1, 1.2, 0.9, 1],
                      rotate: [0, 90, 180, 360],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />

                  <div className="flex items-center justify-between relative z-10">
                    <motion.span
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent dark:text-accent-dark"
                      whileHover={{ scale: 1.15, rotate: 12 }}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Icon size={18} />
                    </motion.span>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-xs font-medium text-muted dark:text-muted-dark transition-colors hover:text-accent dark:hover:text-accent-dark"
                      whileHover={{ x: 4 }}
                    >
                      <ExternalLink size={12} />
                      Live
                    </motion.a>
                  </div>

                  <h3 className="mt-4 text-lg font-bold relative z-10 text-gradient-3d">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted dark:text-muted-dark relative z-10">
                    {project.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 relative z-10">
                    {project.tags.map((tag, tagIdx) => (
                      <motion.span
                        key={tag}
                        className="badge border-border dark:border-border-dark bg-surface2 dark:bg-surface2-dark text-muted dark:text-muted-dark"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: tagIdx * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -3 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 flex items-center gap-1.5 text-sm font-medium text-accent dark:text-accent-dark relative z-10"
                    whileHover={{ x: 4 }}
                  >
                    <LinkIcon size={14} />
                    {project.linkLabel}
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
