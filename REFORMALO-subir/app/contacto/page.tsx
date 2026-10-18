import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contacto y presupuesto",
  description:
    "Cuéntanos qué necesita tu negocio y te respondemos lo antes posible. Sin compromiso. Reformalo, Osona y Catalunya.",
  alternates: { canonical: "/contacto" },
};

export default function Page() {
  return <ContactSection standalone />;
}
