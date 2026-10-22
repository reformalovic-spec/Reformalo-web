export const site = {
  name: "Reformalo Vic",
  // Otras formas en que se conoce la marca (schema.org alternateName).
  alternateNames: ["Reformalo", "Reformalovic"],
  city: "Vic",
  url: "https://reformalovic.com",
  email: "reformalo.vic@gmail.com",
  instagram: "https://www.instagram.com/reformalovic",
  instagramHandle: "@reformalovic",
  tagline: "Soluciones digitales a tu medida.",
  description:
    "Agencia de soluciones digitales en Vic para pymes de Osona y Catalunya: consultoría, automatizaciones con IA, SEO y GEO, Google Business Profile y webs.",
  responseTime: "Lunes a viernes · respuesta en 24-48 h",
} as const;

export const nav = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Cómo trabajamos", href: "/#proceso" },
  { label: "Planes", href: "/#planes" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const serviceLinks = [
  { label: "Consultoría de soluciones digitales", href: "/consultoria" },
  { label: "Automatizaciones con IA", href: "/automatizaciones-ia" },
  { label: "SEO y GEO", href: "/seo" },
  { label: "Google Business Profile", href: "/google-business" },
  { label: "Diseño web", href: "/diseno-web" },
] as const;

export const legalLinks = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Política de cookies", href: "/cookies" },
] as const;
