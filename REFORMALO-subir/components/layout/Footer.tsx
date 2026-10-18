import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { CoffeeEgg } from "@/components/ui/CoffeeEgg";
import { legalLinks, serviceLinks, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-ink text-brand-soft">
      <div className="grid-faint absolute inset-0" aria-hidden />
      <div className="container-x relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              aria-label="Reformalo, ir al inicio"
              className="inline-flex items-center gap-3"
            >
              <Logo className="h-12 w-12" />
              <span className="font-display text-2xl font-extrabold tracking-tight text-white">
                Reformalo
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-base leading-relaxed">
              Soluciones digitales e IA para pymes y negocios locales de Osona
              y Catalunya.
            </p>
          </div>

          <nav aria-label="Servicios">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
              Servicios
            </h2>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition-colors duration-150 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
              Contacto
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors duration-150 hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-150 hover:text-white"
                >
                  Instagram {site.instagramHandle}
                </a>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="transition-colors duration-150 hover:text-white"
                >
                  Pedir presupuesto
                </Link>
              </li>
            </ul>
          </div>

          <nav aria-label="Legal">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
              Legal
            </h2>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition-colors duration-150 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Reformalo. Todos los derechos reservados.</p>
          <p className="inline-flex items-center gap-1">
            Hecho en Osona, con mucho cariño y bastante café
            <CoffeeEgg />
          </p>
        </div>
      </div>
    </footer>
  );
}
