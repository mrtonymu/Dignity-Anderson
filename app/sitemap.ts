import type { MetadataRoute } from "next";

// ⚠️ Keep this domain in sync with metadataBase (app/layout.tsx) after deploying.
const SITE_URL = "https://dignity-anderson.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
