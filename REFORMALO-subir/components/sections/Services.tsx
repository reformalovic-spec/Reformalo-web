import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { services } from "@/content/home";

// Rejilla bento: cada tarjeta ocupa un ancho distinto en pantallas grandes.
const span: Record<string, string> = {
  web: "lg:col-span-7",
  seo: "lg:col-span-5",
  google: "lg:col-span-4",
  ia: "lg:col-span-8",
  consultoria: "lg:col-span-12",
};

function Check({ dark }: { dark: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      className={`mt-1 h-4 w-4 shrink-0 ${dark ? "text-brand-light" : "text-brand"}`}
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

export function Services() {
  return (
    <section
      id="servicios"
      aria-labelledby="titulo-servicios"
      className="section-y bg-brand-mist"
    >
      <div className="container-x">
        <SectionHeading
          id="titulo-servicios"
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
        />

        <ul className="mt-12 grid gap-5 lg:grid-cols-12">
          {services.cards.map((card, i) => {
            const dark = card.slug === "ia";
            return (
              <Reveal
                key={card.slug}
                tag="li"
                delay={i * 0.06}
                className={span[card.slug]}
              >
                <TiltCard
                  dark={dark}
                  className={`h-full border transition-shadow duration-200 ease-out focus-within:ring-2 focus-within:ring-brand-dark hover:shadow-lift ${
                    dark
                      ? "on-dark border-ink bg-ink text-white"
                      : "border-brand-softer bg-white shadow-soft"
                  }`}
                >
                  <div className="relative flex h-full flex-col p-7 sm:p-8">
                    <div className="flex items-start justify-between">
                      <span
                        aria-hidden
                        className={`grid h-14 w-14 place-items-center rounded-2xl text-3xl ${
                          dark ? "bg-white/10" : "bg-brand-mist"
                        }`}
                      >
                        {card.emoji}
                      </span>
                      <span
                        aria-hidden
                        className={`grid h-10 w-10 place-items-center rounded-full transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                          dark
                            ? "bg-white/10 text-white"
                            : "bg-brand-mist text-brand-dark"
                        }`}
                      >
                        <svg
                          viewBox="0 0 20 20"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M6 14L14 6M7 6h7v7" />
                        </svg>
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                      {card.title}
                    </h3>
                    <p
                      className={`mt-2 max-w-xl text-lg leading-relaxed ${
                        dark ? "text-brand-soft" : "text-ink-muted"
                      }`}
                    >
                      {card.text}
                    </p>

                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-1">
                      {card.points.map((p) => (
                        <li key={p} className="flex gap-3 text-base">
                          <Check dark={dark} />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={card.href}
                      className={`mt-7 inline-flex items-center gap-1 font-semibold after:absolute after:inset-0 after:content-[''] ${
                        dark ? "text-white" : "text-brand-dark"
                      }`}
                    >
                      {services.more}
                      <span className="sr-only"> sobre {card.title}</span>
                    </Link>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
