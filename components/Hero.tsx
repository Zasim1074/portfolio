"use client";

import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { profile } from "@/lib/data";
import { motion } from "framer-motion";
import { FloatingElement } from "./ScrollReveal";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export function Hero() {
  return (
    <section id="home" className="section pb-16 pt-20 text-center relative min-h-screen flex items-center perspective-3d">
      {/* Animated background gradients */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-0 -left-1/2 w-full h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/2 -right-1/2 w-full h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      </motion.div>

      <div className="section-inner flex flex-col items-center w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Badge with glow effect */}
          <motion.span
            variants={item}
            className="badge border-green-500/30 bg-green-500/10 text-green-600 dark:border-green-400/30 dark:bg-green-400/10 dark:text-green-400 animate-glow"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="mr-2 h-1.5 w-1.5 rounded-full bg-green-500 dark:bg-green-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Open to new opportunities
          </motion.span>

          {/* Main heading with gradient text */}
          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-6xl gradient-text"
          >
            {profile.name}
          </motion.h1>

          {/* Tags with stagger */}
          <motion.div
            variants={item}
            className="mt-5 flex flex-wrap items-center justify-center gap-2"
          >
            {profile.tags.map((tag, idx) => (
              <motion.span
                key={tag}
                className="badge border-border dark:border-border-dark bg-surface2 dark:bg-surface2-dark text-muted dark:text-muted-dark hover-lift"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-balance text-base text-muted dark:text-muted-dark sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <motion.a
              href={profile.resumeUrl}
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(96, 165, 250, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="rounded-full border border-border dark:border-border-dark px-5 py-2.5 text-sm font-semibold text-ink dark:text-ink-dark transition-colors hover:bg-surface2 dark:hover:bg-surface2-dark"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted dark:text-muted-dark"
          >
            <motion.a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-ink dark:hover:text-ink-dark hover-glow"
              whileHover={{ x: 4, scale: 1.1 }}
            >
              <Github size={16} />
              {profile.github}
            </motion.a>
            <motion.a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-ink dark:hover:text-ink-dark hover-glow"
              whileHover={{ x: 4, scale: 1.1 }}
            >
              <Linkedin size={16} />
              {profile.linkedin}
            </motion.a>
            <motion.a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 transition-colors hover:text-ink dark:hover:text-ink-dark hover-glow"
              whileHover={{ x: 4, scale: 1.1 }}
            >
              <Mail size={16} />
              {profile.email}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} className="text-accent dark:text-accent-dark" />
        </motion.div>
      </div>
    </section>
  );
}
