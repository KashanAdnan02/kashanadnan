import type { MetadataRoute } from "next";
import { caseStudies, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: site.url, lastModified: now, priority: 1 },
    ...caseStudies.map((project) => ({
      url: `${site.url}/work/${project.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
  ];
}
