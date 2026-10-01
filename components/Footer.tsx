"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      className="border-t border-border bg-surface/80 py-8 dark:border-border-dark dark:bg-surface-dark/80"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
    >
      <div className="section-inner flex flex-col items-center justify-between gap-4 px-4 text-sm text-muted dark:text-muted-dark sm:flex-row sm:px-8">
        <div>
          <p className="font-medium text-ink dark:text-ink-dark">{profile.name}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted dark:text-muted-dark">Full-Stack Engineer</p>
          <p className="mt-2 text-xs text-muted dark:text-muted-dark">React · TypeScript · Python · FastAPI</p>
        </div>

        <div className="flex items-center gap-4">
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent dark:hover:text-accent-dark">
            <Github size={18} />
          </a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent dark:hover:text-accent-dark">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-accent dark:hover:text-accent-dark">
            <Mail size={18} />
          </a>
        </div>

        <p>© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </motion.footer>
  );
}
