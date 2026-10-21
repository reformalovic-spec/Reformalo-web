import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/diseno-web", priority: 0.9 },
  { path: "/seo", priority: 0.9 },
  { path: "/google-business", priority: 0.9 },
  { path: "/automatizaciones-ia", priority: 0.9 },
  { path: "/consultoria", priority: 0.8 },
  { path: "/contacto", priority: 0.8 },
  { path: "/aviso-legal", priority: 0.2 },
  { path: "/privacidad", priority: 0.2 },
  { path: "/cookies", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified,
    priority,
  }));
}
