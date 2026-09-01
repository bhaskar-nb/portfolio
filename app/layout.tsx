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
const siteTitle = `${profile.name} — Data Analyst Portfolio`;
const siteDescription =
  "Data Analyst portfolio showcasing SQL, Python, Tableau, Power BI, Excel, data visualization, dashboards, and practical analytics projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s — ${profile.name}`,
  },
  description: siteDescription,
  keywords: [
    "Data Analyst",
    "Data Analyst Portfolio",
    "SQL",
    "Python",
    "Tableau",
    "Power BI",
    "Excel",
    "Data Visualization",
    "Business Intelligence",
    "Data Analytics",
    profile.name,
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  category: "technology",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    locale: "en_US",
    title: siteTitle,
    description: siteDescription,
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${profile.name} — Data Analyst Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
