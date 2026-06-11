import type { MetadataRoute } from "next";

// ⚠️ Keep this domain in sync with metadataBase (app/layout.tsx) after deploying.
const SITE_URL = "https://dignity-anderson.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
