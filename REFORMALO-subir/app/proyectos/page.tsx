import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Projects } from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos de Reformalo: webs y soluciones digitales para negocios locales de Osona y Catalunya.",
  alternates: { canonical: "/proyectos" },
};

export default function Page() {
  return (
    <>
      <Projects standalone />
      <CtaBand />
    </>
  );
}
