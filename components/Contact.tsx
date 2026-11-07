import { Github, Linkedin,  Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/motion";

export function Contact() {
  return (
    <section id="contact" className="section relative">
      <div className="section-inner">
        <Reveal>
          <h2
            id="contact-title"
            className="mono-label text-cyan"
            aria-labelledby="contact-title"
          >
            Contact
          </h2>
        </Reveal>
        <Reveal delay={0.05} className="mt-3">
          <p className="font-display text-4xl font-semibold tracking-tight text-ink-dark sm:text-5xl">
            Let&apos;s build something useful.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-4">
          <p className="max-w-2xl text-base leading-relaxed text-muted-dark sm:text-lg">
            I&apos;m open to Full Stack Developer, React/Next.js, and Python
            backend opportunities in Delhi NCR and remote India. If you&apos;re
            building a product and need someone who can contribute across
            frontend and backend, let&apos;s connect.
          </p>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-700 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <Mail size={16} aria-hidden="true" />
            Email me
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-ink-dark transition-colors hover:border-cyan/50 hover:text-cyan"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-ink-dark transition-colors hover:border-cyan/50 hover:text-cyan"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
