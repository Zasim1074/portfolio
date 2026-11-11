import type { Metadata, Viewport } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { PointerSpotlight, ScrollProgress } from "@/components/motion";
import { profile } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["600", "700", "800"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500", "600"] });
const profileImageUrl = new URL(profile.profileImageUrl, profile.portfolioUrl).toString();

export const metadata: Metadata = {
  title: "Jaseem Quraishi | Full Stack Software Engineer | React, Next.js, Python",
  description:
    "Jaseem Quraishi is a Full Stack Software Engineer experienced in React, Next.js, TypeScript, Python, FastAPI and PostgreSQL, building production web applications and AI-powered product features.",
  keywords: [
    "Jaseem Quraishi",
    "Full Stack Developer",
    "Software Developer",
    "Full Stack Engineer",
    "Web Developer",
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
  metadataBase: new URL(profile.portfolioUrl),
  alternates: {
    canonical: profile.portfolioUrl,
  },
  openGraph: {
    title: "Jaseem Quraishi | Full Stack Software Engineer | React, Next.js, Python",
    description:
      "Jaseem Quraishi is a Full Stack Software Engineer experienced in React, Next.js, TypeScript, Python, FastAPI and PostgreSQL, building production web applications and AI-powered product features.",
    url: profile.portfolioUrl,
    siteName: "Jaseem Quraishi",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaseem Quraishi | Full Stack Software Engineer | React, Next.js, Python",
    description:
      "Jaseem Quraishi is a Full Stack Software Engineer experienced in React, Next.js, TypeScript, Python, FastAPI and PostgreSQL, building production web applications and AI-powered product features.",
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
  jobTitle: profile.currentRole,
  address: { "@type": "PostalAddress", addressLocality: "Indore", addressCountry: "IN" },
  worksFor: { "@type": "Organization", name: profile.currentCompany },
  url: profile.portfolioUrl,
  image: profileImageUrl,
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
    "SQL",
    "AI Integration"
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} ${jetBrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <MotionConfig reducedMotion="user"><LazyMotion features={domAnimation}><ScrollProgress /><PointerSpotlight />{children}</LazyMotion></MotionConfig>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
