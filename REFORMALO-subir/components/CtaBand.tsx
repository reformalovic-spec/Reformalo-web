import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { finalCta } from "@/content/home";

type CtaBandProps = {
  title?: string;
  text?: string;
};

/** Banda final de llamada a la acción para las páginas interiores. */
export function CtaBand({
  title = finalCta.title,
  text = finalCta.text,
}: CtaBandProps) {
  return (
    <section className="section-y" aria-label="Contacto">
      <div className="container-x">
        <Reveal>
          <div className="on-dark relative overflow-hidden rounded-[2rem] bg-ink px-7 py-14 text-center text-white sm:px-14 sm:py-20">
            <div className="grid-faint absolute inset-0" aria-hidden />
            <div
              aria-hidden
              className="absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(81,112,255,.4), rgba(81,112,255,0) 65%)",
              }}
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="h-display text-4xl sm:text-5xl">{title}</h2>
              <p className="mt-5 text-lg text-brand-soft sm:text-xl">{text}</p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Button href="/contacto" variant="light" size="lg" arrow>
                  {finalCta.primary}
                </Button>
                <Button
                  href="/contacto"
                  size="lg"
                  className="inline-flex [&>a]:bg-white/10 [&>a]:text-white [&>a]:shadow-none [&>a:hover]:bg-white/20"
                >
                  {finalCta.secondary}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
