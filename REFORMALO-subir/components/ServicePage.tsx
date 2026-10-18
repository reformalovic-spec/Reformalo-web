import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SplitWords } from "@/components/ui/SplitWords";
import { Button } from "@/components/ui/Button";
import { servicePages } from "@/content/services";
import { site } from "@/content/site";

function Check() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      className="mt-1 h-5 w-5 shrink-0 text-brand"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

export function ServicePage({ slug }: { slug: string }) {
  const page = servicePages[slug];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.label,
    description: page.metaDescription,
    url: `${site.url}/${page.slug}`,
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
    areaServed: ["Osona", "Catalunya"],
  };

  return (
    <>
      <JsonLd data={schema} />

      <section className="relative isolate overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40">
        <div className="mesh" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <div className="container-x">
          <Link
            href="/#servicios"
            className="enter flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-dark hover:underline"
          >
            <span aria-hidden>←</span> Todos los servicios
          </Link>
          <p className="eyebrow enter mt-6">
            <span aria-hidden>{page.emoji}</span> {page.label}
          </p>
          <SplitWords
            as="h1"
            text={page.title}
            delay={80}
            className="h-display mt-5 max-w-4xl text-[clamp(2.5rem,6.4vw,4.75rem)] text-ink"
          />
          <p
            className="enter mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl"
            style={{ "--d": "500ms" } as React.CSSProperties}
          >
            {page.intro}
          </p>
          <div
            className="enter mt-8"
            style={{ "--d": "620ms" } as React.CSSProperties}
          >
            <Button href="/contacto" size="lg" arrow>
              Pedir presupuesto
            </Button>
          </div>
        </div>
      </section>

      {page.blocks.map((block, i) => {
        const tinted = i % 2 === 0;
        const cards = block.cards;
        return (
          <section
            key={block.title}
            aria-labelledby={`bloque-${i}`}
            className={`section-y ${tinted ? "bg-brand-mist" : "bg-white"}`}
          >
            <div className="container-x">
              {block.points ? (
                <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                  <div>
                    <SectionHeading
                      id={`bloque-${i}`}
                      eyebrow={block.eyebrow}
                      title={block.title}
                    />
                    <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-muted">
                      {block.intro?.map((p) => (
                        <Reveal key={p} tag="p">
                          {p}
                        </Reveal>
                      ))}
                    </div>
                  </div>
                  <Reveal delay={0.1}>
                    <ul className="space-y-4 rounded-3xl border border-brand-softer bg-white p-6 shadow-soft sm:p-8">
                      {block.points.map((p) => (
                        <li key={p} className="flex gap-3 text-lg font-medium">
                          <Check />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              ) : (
                <>
                  <SectionHeading
                    id={`bloque-${i}`}
                    eyebrow={block.eyebrow}
                    title={block.title}
                    description={block.intro?.[0]}
                  />
                  {cards && (
                    <ul
                      className={`mt-12 grid gap-5 sm:grid-cols-2 ${
                        cards.length === 4 ? "" : "lg:grid-cols-3"
                      }`}
                    >
                      {cards.map((c, j) => (
                        <Reveal key={c.title} tag="li" delay={(j % 3) * 0.07}>
                          <div className="h-full rounded-3xl border border-brand-softer bg-white p-7 shadow-soft transition-transform duration-200 ease-out hover:-translate-y-1">
                            <h3 className="font-display text-2xl font-bold tracking-tight">
                              {c.title}
                            </h3>
                            <p className="mt-2 text-lg leading-relaxed text-ink-muted">
                              {c.text}
                            </p>
                          </div>
                        </Reveal>
                      ))}
                    </ul>
                  )}
                </>
              )}
              {block.points && cards && (
                <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {cards.map((c) => (
                    <li
                      key={c.title}
                      className="rounded-3xl border border-brand-softer bg-white p-7 shadow-soft"
                    >
                      <h3 className="font-display text-2xl font-bold tracking-tight">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-lg text-ink-muted">{c.text}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        );
      })}

      <CtaBand title={page.cta.title} text={page.cta.text} />
    </>
  );
}
