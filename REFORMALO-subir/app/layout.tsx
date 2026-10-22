import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { serviceLinks, site } from "@/content/site";
import { servicePages } from "@/content/services";

// Titulares con carácter + texto muy legible.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const title = "Reformalo: agencia de soluciones digitales para pymes";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | Reformalo" },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: site.name,
    title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#5170FF",
  width: "device-width",
  initialScale: 1,
};

// Entidad principal: el mismo @id se referencia desde las páginas de servicio,
// así buscadores e IAs entienden que todo pertenece a la misma empresa.
// TODO: añadir dirección y teléfono si se quieren mostrar (LocalBusiness).
const organization = {
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organizacion`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/opengraph-image`,
  description: site.description,
  slogan: site.tagline,
  email: site.email,
  sameAs: [site.instagram],
  areaServed: [
    { "@type": "AdministrativeArea", name: "Osona" },
    { "@type": "AdministrativeArea", name: "Catalunya" },
  ],
  knowsAbout: [
    "Soluciones digitales para pymes",
    "Consultoría digital",
    "Inteligencia artificial para negocios",
    "Automatizaciones con IA",
    "SEO local",
    "GEO (optimización para motores generativos)",
    "Google Business Profile",
    "Diseño y desarrollo web",
  ],
  availableLanguage: ["es", "ca"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: site.email,
    availableLanguage: ["es", "ca"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Reformalo",
    itemListElement: serviceLinks.map((link) => {
      const page = servicePages[link.href.slice(1)];
      return {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: page.label,
          description: page.metaDescription,
          url: `${site.url}${link.href}`,
        },
      };
    }),
  },
};

const website = {
  "@type": "WebSite",
  "@id": `${site.url}/#web`,
  url: site.url,
  name: site.name,
  description: site.description,
  inLanguage: "es-ES",
  publisher: { "@id": organization["@id"] },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [organization, website],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body>
        <JsonLd data={structuredData} />
        <Providers>
          <a
            href="#contenido"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-dark focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
          >
            Saltar al contenido
          </a>
          <Header />
          <main id="contenido">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
