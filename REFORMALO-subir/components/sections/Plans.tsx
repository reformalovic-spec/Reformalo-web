import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { plans } from "@/content/home";

export function Plans() {
  return (
    <section id="planes" aria-labelledby="titulo-planes" className="section-y">
      <div className="container-x">
        <SectionHeading
          id="titulo-planes"
          eyebrow={plans.eyebrow}
          title={plans.title}
          description={plans.description}
        />

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr]">
          {plans.cards.map((card, i) => (
            <div key={card.title} className="contents">
              {i === 1 && (
                <div
                  aria-hidden
                  className="grid place-items-center font-display text-4xl font-extrabold text-brand lg:px-2"
                >
                  +
                </div>
              )}
              <Reveal delay={i * 0.1}>
                <article
                  className={`flex h-full flex-col rounded-[2rem] border p-7 sm:p-9 ${
                    i === 0
                      ? "border-brand-dark bg-brand-dark text-white shadow-lift"
                      : "border-brand-softer bg-white shadow-soft"
                  }`}
                >
                  <p
                    className={`text-sm font-semibold uppercase tracking-[0.12em] ${
                      i === 0 ? "text-brand-soft" : "text-brand-dark"
                    }`}
                  >
                    {card.kicker}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-extrabold tracking-tight">
                    {card.title}
                  </h3>
                  <p
                    className={`mt-1 inline-flex w-fit rounded-full px-3 py-1 text-sm font-semibold ${
                      i === 0
                        ? "bg-white/15 text-white"
                        : "bg-brand-mist text-brand-dark"
                    }`}
                  >
                    {card.cadence}
                  </p>
                  <p
                    className={`mt-5 text-lg ${
                      i === 0 ? "text-brand-softer" : "text-ink-muted"
                    }`}
                  >
                    {card.text}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {card.points.map((p) => (
                      <li key={p} className="flex gap-3 text-base">
                        <svg
                          aria-hidden
                          viewBox="0 0 20 20"
                          className={`mt-1 h-4 w-4 shrink-0 ${
                            i === 0 ? "text-brand-soft" : "text-brand"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 10.5l4 4 8-9" />
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <Button href="/contacto" size="lg" arrow>
            {plans.cta}
          </Button>
          {/* TODO: mostrar precios cuando estén confirmados. */}
          <p className="text-lg text-ink-muted">{plans.priceNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
