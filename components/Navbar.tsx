"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks, profile } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("home");

  const sectionLinks = navLinks.filter((link) => link.href.startsWith("#"));

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ["home", ...sectionLinks.map((link) => link.href.replace("#", ""))];
      let matched = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            matched = section;
            break;
          }
        }
      }

      setActiveLink(matched);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionLinks]);

  const isScrolled = scrollY > 18;

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md transition-colors dark:border-border-dark dark:bg-bg-dark/80 ${
        isScrolled ? "shadow-sm shadow-slate-900/5 dark:shadow-slate-950/20" : ""
      }`}
    >
      <div className="section-inner flex h-16 items-center justify-between px-4 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
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
        </motion.div>

        <nav className="hidden items-center gap-4 text-sm font-medium lg:flex xl:gap-6">
          {sectionLinks.map((link) => {
            const isActive = activeLink === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-1 py-2 transition-colors ${
                  isActive ? "text-accent dark:text-accent-dark" : "text-muted hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark"
                }`}
              >
                {link.label}
                {isActive ? (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-accent dark:bg-accent-dark" />
                ) : null}
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
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-accent/20 transition-transform hover:-translate-y-0.5"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink lg:hidden dark:border-border-dark dark:text-ink-dark"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border bg-surface/95 px-4 py-4 lg:hidden dark:border-border-dark dark:bg-surface-dark/95"
          >
            <nav className="flex flex-col gap-1">
              {sectionLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface2 hover:text-ink dark:text-muted-dark dark:hover:bg-surface2-dark dark:hover:text-ink-dark"
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
                className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white"
              >
                Resume
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
