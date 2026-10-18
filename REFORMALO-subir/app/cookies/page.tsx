import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import legal from "@/content/legal.json";

export const metadata: Metadata = {
  title: "Política de cookies",
  alternates: { canonical: "/cookies" },
};

export default function Page() {
  return <LegalPage blocks={legal.cookies as [string, string][]} />;
}
