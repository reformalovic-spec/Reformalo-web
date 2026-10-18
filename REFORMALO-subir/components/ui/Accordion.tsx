"use client";

import { useId, useState } from "react";

type Item = { q: string; a: string };

/** Acordeón accesible: botones con aria-expanded y paneles con role="region". */
export function Accordion({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <div className="divide-y divide-brand-softer overflow-hidden rounded-3xl border border-brand-softer bg-white shadow-soft">
      {items.map((item, i) => {
        const isOpen = open === i;
        const id = `${base}-${i}`;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                id={`${id}-btn`}
                aria-expanded={isOpen}
                aria-controls={`${id}-panel`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left font-display text-lg font-bold tracking-tight transition-colors duration-150 hover:bg-brand-mist sm:px-7 sm:py-6 sm:text-xl"
              >
                <span>{item.q}</span>
                <span
                  aria-hidden
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-mist text-xl font-semibold leading-none text-brand-dark transition-transform duration-200 ease-out ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={`${id}-panel`}
              role="region"
              aria-labelledby={`${id}-btn`}
              className={`grid transition-[grid-template-rows,opacity,visibility] duration-300 ease-out ${
                isOpen
                  ? "visible grid-rows-[1fr] opacity-100"
                  : "invisible grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 text-base leading-relaxed text-ink-muted sm:px-7 sm:text-lg">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
