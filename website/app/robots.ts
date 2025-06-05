import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/projects/ftc",
    },
    sitemap: "https://ringomar.com/sitemap.xml",
  };
}
