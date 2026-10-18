import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/content/home";

export function Projects({ standalone = false }: { standalone?: boolean }) {
  const f = projects.featured;
  return (
    <section
      id="proyectos"
      aria-labelledby="titulo-proyectos"
      className={`section-y bg-brand-mist ${standalone ? "pt-32 sm:pt-40" : ""}`}
    >
      <div className="container-x">
        <SectionHeading
          as={standalone ? "h1" : "h2"}
          id="titulo-proyectos"
          eyebrow={projects.eyebrow}
          title={projects.title}
          description={projects.description}
        />

        <Reveal className="mt-12">
          <article className="grid overflow-hidden rounded-[2rem] border border-brand-softer bg-white shadow-soft lg:grid-cols-[1.1fr_0.9fr]">
            {/* TODO: sustituir esta maqueta por una captura real de la web del proyecto. */}
            <div className="bg-brand-softer/60 p-5 sm:p-8" aria-hidden>
              <div className="overflow-hidden rounded-2xl bg-white shadow-lift ring-1 ring-brand-softer">
                <div className="flex items-center gap-2 border-b border-brand-softer px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-soft" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-soft" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-soft" />
                  <span className="ml-3 truncate rounded-full bg-brand-mist px-3 py-1 text-xs text-ink-muted">
                    timely-lollipop-41cab0.netlify.app
                  </span>
                </div>
                <div className="grid aspect-[16/10] place-items-center bg-gradient-to-br from-brand-mist to-white p-6 text-center">
                  <div>
                    <p className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                      {f.name}
                    </p>
                    <p className="mt-2 text-sm text-ink-muted">
                      Carta · Local · Reservas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10">
              <ul className="flex flex-wrap gap-2" aria-label="Servicios">
                {f.tags.map((t) => (
                  <li key={t} className="eyebrow">
                    {t}
                  </li>
                ))}
              </ul>
              <h3 className="mt-5 font-display text-3xl font-extrabold tracking-tight">
                {f.name}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-ink-muted">
                {f.text}
              </p>
              <div className="mt-7">
                <Button href={f.href} arrow>
                  {f.cta}
                  <span className="sr-only"> de {f.name} (se abre en una pestaña nueva)</span>
                </Button>
              </div>
            </div>
          </article>
        </Reveal>

        <ul className="mt-5 grid gap-5 md:grid-cols-2">
          {projects.placeholders.map((p, i) => (
            <Reveal key={i} tag="li" delay={i * 0.07}>
              <div className="flex h-full flex-col items-start rounded-3xl border-2 border-dashed border-brand-soft bg-white/60 p-7">
                <span className="eyebrow">Próximamente</span>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-lg text-ink-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10">
          <Button href="/contacto" arrow>
            {projects.cta}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
