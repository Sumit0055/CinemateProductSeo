import { siteConfig } from "@/lib/siteConfig";

export default function sitemap() {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/model", priority: 0.8 },
    { path: "/memories", priority: 0.8 },
    { path: "/gallery", priority: 0.8 },
    { path: "/contact", priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route.path}`,
    lastModified: siteConfig.lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
