"use client";

import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import { ScrollReveal, FloatingElement } from "./ScrollReveal";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    sub: "Best way to reach me",
    href: `mailto:${profile.email}`,
  },
  {
    icon: Github,
    label: "GitHub",
    value: profile.github,
    sub: "See my code",
    href: profile.githubUrl,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: profile.linkedin,
    sub: "Connect professionally",
    href: profile.linkedinUrl,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    sub: profile.relocate,
    href: undefined,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section relative">
      <div className="section-inner">
        <ScrollReveal>
          <p className="eyebrow">Contact</p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s Work Together
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="mt-4 max-w-xl text-base text-muted dark:text-muted-dark">
            I&apos;m currently open to new opportunities. Whether you have a project in mind or just want to say hi, my
            inbox is always open.
          </p>
        </ScrollReveal>

        <motion.div
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const content = (
              <motion.div
                className="card h-full bg-gradient-to-br from-surface/50 to-surface/30 dark:from-surface-dark/50 dark:to-surface-dark/30 group interactive cursor-pointer card-holographic relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -4, rotateY: 2, rotateX: 1 }}
                viewport={{ once: true }}
              >
                {/* Animated background blob */}
                <motion.div
                  className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 dark:bg-accent-dark/5 rounded-full blur-2xl group-hover:animate-blob"
                  animate={{
                    y: [0, 20, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <motion.span
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent dark:text-accent-dark relative z-10"
                  whileHover={{ scale: 1.15, rotate: 12 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Icon size={18} />
                </motion.span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted dark:text-muted-dark relative z-10">
                  {card.label}
                </p>
                <motion.p
                  className="mt-1 font-semibold relative z-10"
                  initial={{ opacity: 0.8 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 + 0.1 }}
                  viewport={{ once: true }}
                >
                  {card.value}
                </motion.p>
                <p className="mt-1 text-sm text-muted dark:text-muted-dark relative z-10">{card.sub}</p>
              </motion.div>
            );

            return card.href ? (
              <motion.a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noreferrer"
                className="block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
