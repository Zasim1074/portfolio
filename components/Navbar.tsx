"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/lib/data";

const sectionLinks = [
  { label: "Home", href: "#home" }, { label: "About", href: "#about" }, { label: "Experience", href: "#experience" }, { label: "Projects", href: "#projects" }, { label: "Skills", href: "#skills" }, { label: "Education", href: "#education" }, { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const sections = sectionLinks.map((link) => document.getElementById(link.href.slice(1))).filter((element): element is HTMLElement => Boolean(element));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveLink(visible.target.id);
    }, { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5, 0.75] });
    sections.forEach((section) => observer.observe(section));
    const updateScrolled = () => setIsScrolled((current) => {
      const next = window.scrollY > 18;
      return current === next ? current : next;
    });
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", updateScrolled); };
  }, []);

  return (
    <header
      className={`glass-header sticky top-0 z-50 ${
        isScrolled ? "shadow-sm shadow-slate-900/5 dark:shadow-slate-950/20" : ""
      }`}
    >
      <div className="section-inner flex h-16 items-center justify-between px-4 sm:px-8 lg:px-10">
        <div>
          <Link
            href="#home"
            className="font-display text-lg font-bold tracking-tight text-ink dark:text-ink-dark"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Jaseem<span className="text-accent dark:text-accent-dark">.codes</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-4 text-sm font-medium lg:flex xl:gap-6">
          {sectionLinks.map((link) => {
            const isActive = activeLink === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={`relative isolate px-1 py-2 transition-colors ${
                  isActive ? "text-accent dark:text-accent-dark" : "text-muted hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark"
                }`}
              >
                {link.label}
                <span aria-hidden="true" className={`absolute -inset-x-2 inset-y-0 -z-10 rounded-full border border-cyan/20 bg-cyan/10 transition-[opacity,transform] duration-300 ${isActive ? "scale-100 opacity-100" : "scale-95 opacity-0"}`} />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-700 px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Download Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-ink-dark lg:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
          <div
            className="border-t border-white/10 bg-surface-dark/95 px-4 py-4 lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {sectionLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={activeLink === link.href.slice(1) ? "location" : undefined}
                  onClick={() => setOpen(false)}
                  className="min-h-11 rounded-lg px-3 py-3 text-sm font-medium text-muted-dark transition-colors hover:bg-surface2-dark hover:text-ink-dark"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 flex items-center justify-between gap-3">
              <ThemeToggle />
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-700 px-4 py-2 text-sm font-semibold text-white"
              >
                Download Resume
              </a>
            </div>
          </div>
        ) : null}
    </header>
  );
}
