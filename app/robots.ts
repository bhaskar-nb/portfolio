import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://bhaskar-portfolio.vercel.app/sitemap.xml", // TODO: replace with real domain
  };
}
