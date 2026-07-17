"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      className="border-t border-accent/10 dark:border-accent-dark/10 px-6 py-8 sm:px-10 lg:px-16 bg-surface/30 dark:bg-surface-dark/30 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="section-inner flex flex-col items-center justify-between gap-4 text-sm text-muted dark:text-muted-dark sm:flex-row">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </motion.p>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent dark:hover:text-accent-dark"
            whileHover={{ scale: 1.2, rotate: 12 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={18} />
          </motion.a>
          <motion.a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent dark:hover:text-accent-dark"
            whileHover={{ scale: 1.2, rotate: -12 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={18} />
          </motion.a>
          <motion.a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-accent dark:hover:text-accent-dark"
            whileHover={{ scale: 1.2, rotate: 12 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={18} />
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
}
