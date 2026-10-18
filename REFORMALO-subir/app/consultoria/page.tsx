import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { servicePages } from "@/content/services";

const page = servicePages["consultoria"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "/consultoria" },
  openGraph: { title: page.metaTitle, description: page.metaDescription, url: "/consultoria" },
};

export default function Page() {
  return <ServicePage slug="consultoria" />;
}
