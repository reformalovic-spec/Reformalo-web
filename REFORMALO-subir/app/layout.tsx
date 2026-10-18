import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/content/site";

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

const title = "Reformalo: tu web, pero que venda";

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

// TODO: añadir dirección y teléfono si se quieren mostrar (LocalBusiness).
const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/opengraph-image`,
  description: site.description,
  email: site.email,
  sameAs: [site.instagram],
  areaServed: [
    { "@type": "AdministrativeArea", name: "Osona" },
    { "@type": "AdministrativeArea", name: "Catalunya" },
  ],
  knowsAbout: [
    "Desarrollo web",
    "SEO local",
    "GEO",
    "Google Business Profile",
    "Automatizaciones con IA",
    "Consultoría digital",
  ],
  availableLanguage: ["es", "ca"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body>
        <JsonLd data={organization} />
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
