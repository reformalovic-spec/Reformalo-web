"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ease } from "@/lib/motion";

/** Easter egg discreto del footer: un café que se acepta con mucho gusto. */
export function CoffeeEgg() {
  const [pops, setPops] = useState<number[]>([]);

  function pop() {
    const id = Date.now();
    setPops((p) => [...p, id]);
    window.setTimeout(() => setPops((p) => p.filter((x) => x !== id)), 1600);
  }

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onClick={pop}
        aria-label="Invitar a un café al equipo"
        className="rounded-full px-1 transition-transform duration-150 ease-out hover:-rotate-12 active:scale-90"
      >
        <span aria-hidden>☕</span>
      </button>
      <span role="status" className="sr-only">
        {pops.length > 0 ? "Gracias por el café" : ""}
      </span>
      <AnimatePresence>
        {pops.map((id) => (
          <motion.span
            key={id}
            initial={{ opacity: 0, y: 0, scale: 0.95 }}
            animate={{ opacity: 1, y: -34, scale: 1 }}
            exit={{ opacity: 0, y: -48 }}
            transition={{ duration: 0.4, ease }}
            aria-hidden
            className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-dark px-3 py-1 text-xs font-semibold text-white shadow-lift"
          >
            ¡Gracias! Con avena, porfa 😄
          </motion.span>
        ))}
      </AnimatePresence>
    </span>
  );
}
