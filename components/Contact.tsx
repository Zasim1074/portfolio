"use client";

import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Github,
    label: "GitHub",
    value: profile.github,
    href: profile.githubUrl,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: profile.linkedin,
    href: profile.linkedinUrl,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: undefined,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section relative">
      <div className="section-inner">
        <p className="eyebrow">Contact</p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink dark:text-ink-dark sm:text-4xl">
          Let&apos;s build something.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted dark:text-muted-dark sm:text-lg">
          I work across frontend and backend product engineering, from interface architecture and performance to API design and real-time systems.
        </p>

        <motion.div
          className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const content = (
              <motion.div
                key={card.label}
                className="card h-full border border-border bg-surface/80 dark:border-border-dark dark:bg-surface-dark/80"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent dark:bg-accent-dark/10 dark:text-accent-dark">
                  <Icon size={18} />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted dark:text-muted-dark">
                  {card.label}
                </p>
                <p className="mt-2 text-base font-semibold text-ink dark:text-ink-dark">{card.value}</p>
              </motion.div>
            );

            return card.href ? (
              <motion.a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noreferrer"
                className="block"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.99 }}
              >
                {content}
              </motion.a>
            ) : (
              <div key={card.label}>{content}</div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
