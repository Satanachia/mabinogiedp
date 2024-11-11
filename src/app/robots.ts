import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mabiauction.vercel.app/sitemap.xml",
    host: "https://mabiauction.vercel.app",
  };
}
