import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { servicePages } from "@/content/services";

const page = servicePages["seo"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "/seo" },
  openGraph: { title: page.metaTitle, description: page.metaDescription, url: "/seo" },
};

export default function Page() {
  return <ServicePage slug="seo" />;
}
