"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks, profile } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ["home", ...navLinks.map((link) => link.href.slice(1))];
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
  }, []);

  const isScrolled = scrollY > 50;

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border dark:border-border-dark transition-all duration-300 ${
        isScrolled
          ? "bg-bg/70 dark:bg-bg-dark/70 backdrop-blur-lg"
          : "bg-bg/50 dark:bg-bg-dark/50 backdrop-blur-md"
      }`}
    >
      <div className="section-inner flex h-16 items-center justify-between px-6 sm:px-10 lg:px-16">
        {/* Logo with animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Link
            href="#home"
            className="font-display text-lg font-bold tracking-tight relative px-1 py-1"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="text-ink dark:text-ink-dark">Jaseem</span>
            <motion.span
              className="text-accent dark:text-accent-dark inline-block"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              .codes
            </motion.span>
            {activeLink === "home" && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent dark:bg-accent-dark"
                layoutId="underline"
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden items-center gap-6 text-sm font-medium text-muted dark:text-muted-dark md:flex mx-5"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navLinks
            .filter((link) => link.href.slice(1) !== "home")
            .map((link, idx) => {
              const isActive = activeLink === link.href.slice(1);
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="relative"
                >
                  <a
                    href={link.href}
                    className={`relative px-2 py-1 transition-colors ${
                      isActive
                        ? "text-accent dark:text-accent-dark font-semibold"
                        : "text-muted dark:text-muted-dark hover:text-ink dark:hover:text-ink-dark"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent dark:bg-accent-dark"
                        layoutId="underline"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </a>
                </motion.div>
              );
            })}
        </motion.nav>

        {/* Desktop CTA */}
        <motion.div
          className="hidden items-center gap-3 md:flex"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ThemeToggle />
          <motion.a
            href={profile.resumeUrl}
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-all"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(96, 165, 250, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-border dark:border-border-dark px-6 py-4 md:hidden bg-surface/50 dark:bg-surface-dark/50 backdrop-blur-md"
          >
            <motion.nav
              className="flex flex-col gap-3 text-sm font-medium text-muted dark:text-muted-dark"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="transition-colors hover:text-accent dark:hover:text-accent-dark py-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ x: 8 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>
            <motion.div
              className="mt-4 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ThemeToggle />
              <motion.a
                href={profile.resumeUrl}
                className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
