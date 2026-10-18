export const site = {
  name: "Reformalo",
  // TODO: cambiar por el dominio propio cuando esté contratado.
  url: "https://reformalo.netlify.app",
  email: "reformalo.vic@gmail.com",
  instagram: "https://www.instagram.com/reformalovic",
  instagramHandle: "@reformalovic",
  tagline: "Tu web, pero que venda.",
  description:
    "Soluciones digitales e IA para pymes y negocios locales de Osona y Catalunya: webs, SEO y GEO, Google Business Profile y automatizaciones con IA.",
  responseTime: "Lunes a viernes · respuesta en 24-48 h",
} as const;

export const nav = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Cómo trabajamos", href: "/#proceso" },
  { label: "Planes", href: "/#planes" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const serviceLinks = [
  { label: "Diseño web", href: "/diseno-web" },
  { label: "SEO y GEO", href: "/seo" },
  { label: "Google Business Profile", href: "/google-business" },
  { label: "Automatizaciones con IA", href: "/automatizaciones-ia" },
  { label: "Consultoría", href: "/consultoria" },
] as const;

export const legalLinks = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Política de cookies", href: "/cookies" },
] as const;
