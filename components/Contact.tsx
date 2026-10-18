import { Github, Linkedin, FileText } from "lucide-react";
import { profile } from "@/lib/data";
import { CopyEmailButton, Reveal } from "@/components/motion";

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
            Let&apos;s build something.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-4">
          <p className="max-w-2xl text-base leading-relaxed text-muted-dark sm:text-lg">
            I work across frontend and backend product engineering, from
            interface architecture and performance to API design and real-time
            systems.
          </p>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-3">
          <CopyEmailButton email={profile.email} />
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-ink-dark transition-colors hover:border-cyan/50 hover:text-cyan"
          >
            <FileText size={16} />
            Download Resume
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-ink-dark transition-colors hover:border-cyan/50 hover:text-cyan"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-ink-dark transition-colors hover:border-cyan/50 hover:text-cyan"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
        <Reveal delay={0.14} className="mt-5 text-sm text-muted-dark">
          Indore, India (open to relocate to Delhi NCR)
        </Reveal>
      </div>
    </section>
  );
}
