import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/calendar`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/rentals`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
