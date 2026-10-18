import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { servicePages } from "@/content/services";

const page = servicePages["diseno-web"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "/diseno-web" },
  openGraph: { title: page.metaTitle, description: page.metaDescription, url: "/diseno-web" },
};

export default function Page() {
  return <ServicePage slug="diseno-web" />;
}
