"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { nav, site } from "@/content/site";
import { ease } from "@/lib/motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 12));

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ease-out ${
        solid
          ? "bg-white/90 shadow-[0_1px_0_rgba(16,20,38,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between sm:h-[4.5rem]">
        <Link
          href="/"
          aria-label={`${site.name}, ir al inicio`}
          className="flex items-center gap-2.5"
        >
          <Logo className="h-10 w-10" priority />
          <span className="font-display text-xl font-extrabold tracking-tight">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-muted transition-colors duration-150 hover:bg-brand-mist hover:text-brand-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href="/contacto"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Hablemos
          </Button>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            className="relative grid h-11 w-11 place-items-center rounded-full text-ink transition-colors duration-150 hover:bg-brand-mist lg:hidden"
          >
            <span
              aria-hidden
              className={`absolute h-0.5 w-5 rounded bg-current transition-transform duration-200 ease-out ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              aria-hidden
              className={`absolute h-0.5 w-5 rounded bg-current transition-transform duration-200 ease-out ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movil"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease }}
            className="absolute inset-x-0 top-full border-t border-brand-softer bg-white px-5 pb-6 pt-3 shadow-lift lg:hidden"
          >
            <nav aria-label="Menú móvil" className="flex flex-col">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3.5 font-display text-lg font-bold hover:bg-brand-mist"
                >
                  {item.label}
                </Link>
              ))}
              <Button href="/contacto" className="mt-3 flex w-full" size="lg">
                Hablemos
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
