"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { m as motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-11 w-[110px] rounded-full border border-white/10" aria-hidden="true" />;
  }

  return (
    <div className="flex items-center rounded-full border border-white/10 bg-surface2-dark p-1 text-xs font-medium">
      <button
        onClick={() => setTheme("light")}
        className={`flex min-h-11 items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors ${
          theme === "light"
            ? "bg-slate-700 text-white"
            : "text-muted-dark"
        }`}
        aria-label="Switch to light mode"
      >
        <motion.span animate={{ rotate: theme === "light" ? 0 : -35 }} transition={{ duration: 0.25 }}><Sun size={14} /></motion.span>
        Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`flex min-h-11 items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors ${
          theme === "dark"
            ? "bg-slate-700 text-white"
            : "text-muted-dark"
        }`}
        aria-label="Switch to dark mode"
      >
        <motion.span animate={{ rotate: theme === "dark" ? 0 : 35 }} transition={{ duration: 0.25 }}><Moon size={14} /></motion.span>
        Dark
      </button>
    </div>
  );
}
