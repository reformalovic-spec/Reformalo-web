import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative isolate grid min-h-[100svh] place-items-center overflow-hidden px-5 py-32 text-center">
      <div className="mesh" aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <div className="max-w-xl">
        <p
          aria-hidden
          className="flex items-center justify-center gap-1 font-display text-[clamp(5rem,24vw,11rem)] font-extrabold leading-none tracking-tighter text-ink"
        >
          4
          <Logo className="-mx-[0.1em] h-[1.1em] w-[1.1em]" draw priority sizes="240px" />
          4
        </p>
        <h1 className="h-display mt-6 text-3xl sm:text-5xl">
          <span className="sr-only">Error 404. </span>
          Esta página se ha ido a por un café
        </h1>
        <p className="mt-4 text-lg text-ink-muted sm:text-xl">
          No encontramos lo que buscas. Quizá el enlace es antiguo o alguien lo
          escribió con prisa. Te llevamos de vuelta a terreno conocido.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" size="lg" arrow>
            Volver al inicio
          </Button>
          <Button href="/contacto" size="lg" variant="secondary">
            Hablemos
          </Button>
        </div>
      </div>
    </section>
  );
}
