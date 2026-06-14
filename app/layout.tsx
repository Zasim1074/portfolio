import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["600", "700", "800"] });

export const metadata: Metadata = {
  title: "Jaseem Quraishi | Frontend Developer (React, Next.js, TypeScript)",
  description:
    "Frontend Developer specializing in React and Next.js. I build performance-critical, scalable web applications with TypeScript, modern JavaScript, and clean UI — reduced production bundle size by 81%.",
  keywords: [
    "Jaseem Quraishi",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Web Performance",
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
    title: "Jaseem Quraishi | Frontend Developer",
    description:
      "React & Next.js Developer building performance-critical, scalable web applications with TypeScript.",
    url: "https://jaseem-codes.vercel.app/",
    siteName: "Jaseem Quraishi | Frontend Developer",
    images: ["https://jaseem-codes.vercel.app/jaseem.png"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaseem Quraishi | Frontend Developer",
    description: "Frontend Developer skilled in React, Next.js, and TypeScript.",
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
  jobTitle: "Frontend Developer",
  url: "https://jaseem-codes.vercel.app/",
  image: "https://jaseem-codes.vercel.app/jaseem.png",
  sameAs: [
    "https://github.com/Zasim1074",
    "https://www.linkedin.com/in/jaseem-quraishi",
  ],
  knowsAbout: ["React", "Next.js", "TypeScript", "JavaScript", "Web Performance Optimization"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
