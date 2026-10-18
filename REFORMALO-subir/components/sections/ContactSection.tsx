import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { contact } from "@/content/home";
import { site } from "@/content/site";

export function ContactSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section
      id="contacto"
      aria-labelledby="titulo-contacto"
      className={`on-dark relative overflow-hidden bg-ink section-y text-white ${
        standalone ? "pt-32 sm:pt-40" : ""
      }`}
    >
      <div className="grid-faint absolute inset-0" aria-hidden />
      <div
        aria-hidden
        className="absolute -left-40 bottom-0 h-[34rem] w-[34rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(81,112,255,.3), rgba(81,112,255,0) 65%)",
        }}
      />

      <div className="container-x relative grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            dark
            as={standalone ? "h1" : "h2"}
            id="titulo-contacto"
            eyebrow={contact.eyebrow}
            title={contact.title}
            description={contact.description}
          />
          <Reveal delay={0.1}>
            <ul className="mt-9 space-y-5">
              <li>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-light">
                  Escríbenos a
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 inline-block break-all font-display text-xl font-bold hover:text-brand-soft sm:text-2xl"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-light">
                  Síguenos
                </p>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-display text-xl font-bold hover:text-brand-soft sm:text-2xl"
                >
                  Instagram {site.instagramHandle}
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                </a>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-light">
                  Horario de respuesta
                </p>
                <p className="mt-1 text-lg text-brand-soft">
                  {site.responseTime}
                </p>
              </li>
            </ul>
            <div className="mt-9">
              <Button
                href={`mailto:${site.email}`}
                variant="light"
                arrow
              >
                Prefiero escribir un correo
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
