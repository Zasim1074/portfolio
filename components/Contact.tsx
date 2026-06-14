import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "@/lib/data";

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
    <section id="contact" className="section">
      <div className="section-inner">
        <p className="eyebrow">Contact</p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s Work Together
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted dark:text-muted-dark">
          I&apos;m currently open to new opportunities. Whether you have a project in mind or just want to say hi, my
          inbox is always open.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            const content = (
              <div className="card h-full">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent dark:text-accent-dark">
                  <Icon size={18} />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted dark:text-muted-dark">
                  {card.label}
                </p>
                <p className="mt-1 font-semibold">{card.value}</p>
                <p className="mt-1 text-sm text-muted dark:text-muted-dark">{card.sub}</p>
              </div>
            );

            return card.href ? (
              <a key={card.label} href={card.href} target="_blank" rel="noreferrer" className="block">
                {content}
              </a>
            ) : (
              <div key={card.label}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
