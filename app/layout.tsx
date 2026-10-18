import type { Metadata, Viewport } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { PointerSpotlight, ScrollProgress } from "@/components/motion";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["600", "700", "800"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Jaseem Quraishi | Full Stack Developer | React, Next.js, Python, FastAPI",
  description:
    "Full Stack Developer in Indore (open to Delhi NCR) building React, Next.js, TypeScript and FastAPI applications. 1+ year of production experience.",
  keywords: [
    "Jaseem Quraishi",
    "Full Stack Developer",
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
    title: "Jaseem Quraishi | Full Stack Developer",
    description: "Full Stack Developer in Indore, open to Delhi NCR, with 1+ year of production experience.",
    url: "https://jaseem-codes.vercel.app/",
    siteName: "Jaseem Quraishi | Full Stack Developer",
    images: ["https://jaseem-codes.vercel.app/jaseem.png"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaseem Quraishi | Full Stack Developer",
    description: "Full Stack Developer in Indore, open to Delhi NCR, with 1+ year of production experience.",
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
  jobTitle: "Full Stack Developer",
  address: { "@type": "PostalAddress", addressLocality: "Indore", addressCountry: "IN" },
  worksFor: { "@type": "Organization", name: "FloorWalk Consultants Pvt. Ltd." },
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
