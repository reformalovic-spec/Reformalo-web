import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { servicePages } from "@/content/services";

const page = servicePages["google-business"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: "/google-business" },
  openGraph: { title: page.metaTitle, description: page.metaDescription, url: "/google-business" },
};

export default function Page() {
  return <ServicePage slug="google-business" />;
}
