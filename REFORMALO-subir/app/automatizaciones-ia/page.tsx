import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { servicePages } from "@/content/services";

const page = servicePages["automatizaciones-ia"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "/automatizaciones-ia" },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: "/automatizaciones-ia",
  },
};

export default function Page() {
  return <ServicePage slug="automatizaciones-ia" />;
}
