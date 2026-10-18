"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { process } from "@/content/home";

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 65%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section
      id="proceso"
      aria-labelledby="titulo-proceso"
      className="section-y"
    >
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="titulo-proceso"
            eyebrow={process.eyebrow}
            title={process.title}
            description={process.description}
          />
        </div>

        <ol ref={ref} className="relative space-y-6">
          {/* Línea de fondo y línea que se dibuja con el scroll. */}
          <span
            aria-hidden
            className="absolute bottom-6 left-[1.4375rem] top-6 w-0.5 rounded bg-brand-softer"
          />
          <motion.span
            aria-hidden
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute bottom-6 left-[1.4375rem] top-6 w-0.5 rounded bg-brand"
          />

          {process.steps.map((step, i) => (
            <Reveal key={step.title} tag="li" delay={0.05}>
              <div className="relative flex gap-5 sm:gap-7">
                <span
                  aria-hidden
                  className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-dark font-display text-lg font-extrabold text-white shadow-soft ring-4 ring-white"
                >
                  {i + 1}
                </span>
                <div className="flex-1 rounded-3xl border border-brand-softer bg-white p-6 shadow-soft sm:p-7">
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    <span className="sr-only">Paso {i + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-lg leading-relaxed text-ink-muted">
                    {step.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
