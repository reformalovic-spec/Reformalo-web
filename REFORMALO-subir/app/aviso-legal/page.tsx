import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import legal from "@/content/legal.json";

export const metadata: Metadata = {
  title: "Aviso legal",
  alternates: { canonical: "/aviso-legal" },
};

export default function Page() {
  return <LegalPage blocks={legal["aviso-legal"] as [string, string][]} />;
}
