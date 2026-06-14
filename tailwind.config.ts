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
          dark: "#0a0e1a",
        },
        surface: {
          DEFAULT: "#ffffff",
          dark: "#101729",
        },
        surface2: {
          DEFAULT: "#f1f5f9",
          dark: "#0d1422",
        },
        border: {
          DEFAULT: "#e2e8f0",
          dark: "#1e2a40",
        },
        ink: {
          DEFAULT: "#0f172a",
          dark: "#f1f5f9",
        },
        muted: {
          DEFAULT: "#64748b",
          dark: "#94a3b8",
        },
        accent: {
          DEFAULT: "#3b82f6",
          dark: "#60a5fa",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1100px",
      },
    },
  },
  plugins: [],
};

export default config;
