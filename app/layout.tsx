import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-moda",
  display: "swap",
});

const siteUrl = "https://portfolio-sand-one-44.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Data Analyst`,
    template: `%s — ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    "Data Analyst",
    "SQL",
    "Python",
    "Tableau",
    "Power BI",
    "Data Analytics Portfolio",
    profile.name,
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — Data Analyst`,
    description: profile.summary,
    siteName: `${profile.name} Portfolio`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Data Analyst`,
    description: profile.summary,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
    },
    url: siteUrl,
    sameAs: [profile.links.linkedin, profile.links.github, profile.links.tableau],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${bodoniModa.variable} font-body bg-base-800 text-ink-200 antialiased selection:bg-gold/30 selection:text-ink-100`}
      >
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-fine bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
        <ScrollProgress />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
