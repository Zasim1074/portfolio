import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section className="section pb-16 pt-20 text-center">
      <div className="section-inner flex flex-col items-center">
        <span className="badge border-accent/30 bg-accent/10 text-accent dark:text-accent-dark">
          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent dark:bg-accent-dark" />
          Open to new opportunities
        </span>

        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {profile.tags.map((tag) => (
            <span
              key={tag}
              className="badge border-border dark:border-border-dark bg-surface2 dark:bg-surface2-dark text-muted dark:text-muted-dark"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-6 max-w-xl text-balance text-base text-muted dark:text-muted-dark sm:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={profile.resumeUrl}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border dark:border-border-dark px-5 py-2.5 text-sm font-semibold text-ink dark:text-ink-dark transition-colors hover:bg-surface2 dark:hover:bg-surface2-dark"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted dark:text-muted-dark">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-ink dark:hover:text-ink-dark"
          >
            <Github size={16} />
            {profile.github}
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-ink dark:hover:text-ink-dark"
          >
            <Linkedin size={16} />
            {profile.linkedin}
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 transition-colors hover:text-ink dark:hover:text-ink-dark"
          >
            <Mail size={16} />
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
}
