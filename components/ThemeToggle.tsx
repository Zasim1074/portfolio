"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-[110px] rounded-full border border-border dark:border-border-dark" />;
  }

  return (
    <div className="flex items-center rounded-full border border-border dark:border-border-dark bg-surface2 dark:bg-surface2-dark p-1 text-xs font-medium">
      <button
        onClick={() => setTheme("light")}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors ${
          theme === "light"
            ? "bg-surface dark:bg-surface-dark text-ink dark:text-ink-dark shadow-sm"
            : "text-muted dark:text-muted-dark"
        }`}
        aria-label="Switch to light mode"
      >
        <Sun size={14} />
        Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors ${
          theme === "dark"
            ? "bg-surface dark:bg-surface-dark text-ink dark:text-ink-dark shadow-sm"
            : "text-muted dark:text-muted-dark"
        }`}
        aria-label="Switch to dark mode"
      >
        <Moon size={14} />
        Dark
      </button>
    </div>
  );
}
