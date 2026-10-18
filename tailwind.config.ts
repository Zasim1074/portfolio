import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#f8fafc",
          dark: "#0a0f1c",
        },
        surface: {
          DEFAULT: "#ffffff",
          dark: "#0e1626",
        },
        surface2: {
          DEFAULT: "#f1f5f9",
          dark: "#111c2e",
        },
        border: {
          DEFAULT: "#e2e8f0",
          dark: "rgba(148,163,184,0.14)",
        },
        ink: {
          DEFAULT: "#0f172a",
          dark: "#e2e8f0",
        },
        muted: {
          DEFAULT: "#526174",
          dark: "#94a3b8",
        },
        accent: {
          DEFAULT: "#1d4ed8",
          dark: "#60a5fa",
        },
        cyan: { DEFAULT: "#06b6d4" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1100px",
      },
    },
  },
  plugins: [],
};

export default config;
