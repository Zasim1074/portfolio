import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AnimationProvider } from "@/components/AnimationProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["600", "700", "800"] });

export const metadata: Metadata = {
  title: "Jaseem Quraishi | Full-Stack Engineer | React, TypeScript, Python",
  description:
    "Full-Stack Engineer specializing in React, TypeScript, Python and FastAPI, building production-grade web applications, APIs and real-time systems.",
  keywords: [
    "Jaseem Quraishi",
    "Full-Stack Engineer",
    "React Developer",
    "TypeScript",
    "Python",
    "FastAPI",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Jaseem Quraishi" }],
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://jaseem-codes.vercel.app"),
  alternates: {
    canonical: "https://jaseem-codes.vercel.app/",
  },
  openGraph: {
    title: "Jaseem Quraishi | Full-Stack Engineer",
    description:
      "Full-Stack Engineer building production-grade web applications with React, TypeScript, Python, and FastAPI.",
    url: "https://jaseem-codes.vercel.app/",
    siteName: "Jaseem Quraishi | Full-Stack Engineer",
    images: ["https://jaseem-codes.vercel.app/jaseem.png"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaseem Quraishi | Full-Stack Engineer",
    description:
      "Full-Stack Engineer specializing in React, TypeScript, Python and FastAPI.",
    images: ["https://jaseem-codes.vercel.app/jaseem.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jaseem Quraishi",
  jobTitle: "Full-Stack Engineer",
  url: "https://jaseem-codes.vercel.app/",
  image: "https://jaseem-codes.vercel.app/jaseem.png",
  sameAs: [
    "https://github.com/Zasim1074",
    "https://www.linkedin.com/in/jaseem-quraishi",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "PostgreSQL",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider>
          <AnimationProvider>
            {children}
          </AnimationProvider>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
