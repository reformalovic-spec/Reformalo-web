import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faq } from "@/content/home";

export function Faq() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby="titulo-faq"
      className="section-y bg-brand-mist"
    >
      <JsonLd data={schema} />
      <div className="container-x grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <SectionHeading
          id="titulo-faq"
          eyebrow={faq.eyebrow}
          title={faq.title}
        />
        <Reveal>
          <Accordion items={faq.items} />
        </Reveal>
      </div>
    </section>
  );
}
