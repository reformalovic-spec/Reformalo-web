import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Services } from "@/components/sections/Services";
import { AiDemo } from "@/components/sections/AiDemo";
import { Process } from "@/components/sections/Process";
import { Plans } from "@/components/sections/Plans";
import { Faq } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: {
    absolute: "Reformalo Vic: agencia de soluciones digitales en Vic y Osona",
  },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Services />
      <AiDemo />
      <Process />
      <Plans />
      <Faq />
      <ContactSection />
    </>
  );
}
