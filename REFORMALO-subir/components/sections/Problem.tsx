import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problem } from "@/content/home";

export function Problem() {
  return (
    <section className="section-y" aria-labelledby="problema">
      <div className="container-x">
        <SectionHeading
          id="problema"
          eyebrow={problem.eyebrow}
          title={problem.title}
          description={problem.description}
        />

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {problem.cards.map((card, i) => (
            <Reveal key={card.title} tag="li" delay={i * 0.07}>
              <div className="h-full rounded-3xl border border-brand-softer bg-white p-7 shadow-soft transition-transform duration-200 ease-out hover:-translate-y-1">
                <span
                  aria-hidden
                  className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-mist text-2xl"
                >
                  {card.emoji}
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-2 text-lg leading-relaxed text-ink-muted">
                  {card.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-8">
          <div className="on-dark relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white sm:p-12">
            <div className="grid-faint absolute inset-0" aria-hidden />
            <div className="relative">
              <h3 className="h-display max-w-3xl text-3xl sm:text-4xl lg:text-5xl">
                {problem.solution.title}
              </h3>
              <ul className="mt-10 grid gap-8 md:grid-cols-3">
                {problem.solution.items.map((item, i) => (
                  <li key={item.verb} className="border-t border-white/15 pt-5">
                    <p className="font-display text-sm font-bold text-brand-light">
                      0{i + 1}
                    </p>
                    <p className="mt-1 font-display text-3xl font-extrabold tracking-tight">
                      {item.verb}
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-brand-soft">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
