import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import legal from "@/content/legal.json";

export const metadata: Metadata = {
  title: "Política de privacidad",
  alternates: { canonical: "/privacidad" },
};

export default function Page() {
  return <LegalPage blocks={legal.privacidad as [string, string][]} />;
}
