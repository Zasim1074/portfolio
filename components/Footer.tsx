import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border dark:border-border-dark px-6 py-8 sm:px-10 lg:px-16">
      <div className="section-inner flex flex-col items-center justify-between gap-4 text-sm text-muted dark:text-muted-dark sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink dark:hover:text-ink-dark">
            <Github size={18} />
          </a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink dark:hover:text-ink-dark">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-ink dark:hover:text-ink-dark">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
