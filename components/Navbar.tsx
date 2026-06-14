"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks, profile } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border dark:border-border-dark bg-bg/80 dark:bg-bg-dark/80 backdrop-blur-md">
      <div className="section-inner flex h-16 items-center justify-between px-6 sm:px-10 lg:px-16">
        <Link href="#" className="font-display text-lg font-bold tracking-tight">
          <span className="text-ink dark:text-ink-dark">Jaseem</span>
          <span className="text-accent dark:text-accent-dark">.dev</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted dark:text-muted-dark md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink dark:hover:text-ink-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border dark:border-border-dark px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-muted dark:text-muted-dark">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="transition-colors hover:text-ink dark:hover:text-ink-dark"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <ThemeToggle />
            <a
              href={profile.resumeUrl}
              className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
