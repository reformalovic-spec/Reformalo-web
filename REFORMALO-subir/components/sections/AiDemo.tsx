"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aiDemo } from "@/content/home";
import type { DemoMessage } from "@/content/home";
import { ease } from "@/lib/motion";

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export function AiDemo() {
  const [scenarioId, setScenarioId] = useState<string>(aiDemo.scenarios[0].id);
  const [shown, setShown] = useState<DemoMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const reduce = useReducedMotion();

  const scenario =
    aiDemo.scenarios.find((s) => s.id === scenarioId) ?? aiDemo.scenarios[0];

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setShown([...scenario.messages]);
      setTyping(false);
      return;
    }

    let cancelled = false;
    (async () => {
      setShown([]);
      setTyping(false);
      for (const msg of scenario.messages) {
        if (cancelled) return;
        if (msg.from === "client") {
          await sleep(900);
          if (cancelled) return;
          setShown((s) => [...s, msg]);
        } else {
          setTyping(true);
          await sleep(1100);
          if (cancelled) return;
          setTyping(false);
          setShown((s) => [...s, { from: "bot", text: "" }]);
          for (let i = 1; i <= msg.text.length; i++) {
            if (cancelled) return;
            await sleep(15);
            setShown((s) => {
              const next = [...s];
              next[next.length - 1] = { from: "bot", text: msg.text.slice(0, i) };
              return next;
            });
          }
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [inView, scenario, reduce]);

  return (
    <section
      id="ia"
      aria-labelledby="titulo-ia"
      className="on-dark relative overflow-hidden bg-ink section-y text-white"
    >
      <div className="grid-faint absolute inset-0" aria-hidden />
      <div
        aria-hidden
        className="absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(81,112,255,.28), rgba(81,112,255,0) 65%)",
        }}
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHeading
            dark
            id="titulo-ia"
            eyebrow={aiDemo.eyebrow}
            title={aiDemo.title}
            description={aiDemo.description}
          />

          <Reveal delay={0.1}>
            <ul className="mt-8 space-y-3">
              {aiDemo.points.map((p) => (
                <li key={p} className="flex gap-3 text-lg text-brand-soft">
                  <span aria-hidden className="mt-1 text-brand-light">
                    ✦
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div
              role="group"
              aria-label="Elige un ejemplo de automatización"
              className="mt-9 flex flex-wrap gap-2"
            >
              {aiDemo.scenarios.map((s) => {
                const active = s.id === scenarioId;
                return (
                  <button
                    key={s.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setScenarioId(s.id)}
                    className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-[transform,background-color,color] duration-150 ease-out active:scale-[0.97] ${
                      active
                        ? "bg-white text-ink"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    <span aria-hidden>{s.emoji} </span>
                    {s.label}
                  </button>
                );
              })}
            </div>
            <p className="mt-5 text-sm text-brand-soft">{aiDemo.note}</p>
          </Reveal>
        </div>

        <div ref={ref} className="mx-auto w-full max-w-[22rem]">
          <div className="rounded-[2.5rem] bg-white p-2 shadow-lift ring-1 ring-white/10">
            <div className="overflow-hidden rounded-[2rem] bg-brand-mist">
              <div className="flex items-center gap-3 bg-brand-dark px-4 py-3 text-white">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white">
                  <Logo className="h-8 w-8" />
                </span>
                <div className="leading-tight">
                  <p className="font-display text-base font-bold">
                    {aiDemo.businessName}
                  </p>
                  <p className="text-xs text-brand-softer">{aiDemo.status}</p>
                </div>
              </div>

              <div
                aria-hidden
                className="flex h-[27rem] flex-col justify-end gap-2.5 overflow-hidden p-4"
              >
                <AnimatePresence initial={false}>
                  {shown.map((m, i) => (
                    <motion.div
                      key={`${scenario.id}-${i}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, ease }}
                      style={{
                        transformOrigin:
                          m.from === "bot" ? "bottom right" : "bottom left",
                      }}
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[0.9375rem] leading-snug shadow-sm ${
                        m.from === "bot"
                          ? "self-end rounded-br-md bg-brand-dark text-white"
                          : "self-start rounded-bl-md bg-white text-ink"
                      }`}
                    >
                      {m.text}
                    </motion.div>
                  ))}
                </AnimatePresence>
                {typing && (
                  <div className="flex w-16 items-center justify-center gap-1 self-end rounded-2xl rounded-br-md bg-brand-dark px-3.5 py-3.5">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="animate-blink h-1.5 w-1.5 rounded-full bg-white"
                        style={{ animationDelay: `${d * 0.18}s` }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Transcripción completa para lectores de pantalla. */}
          <ol className="sr-only">
            {scenario.messages.map((m, i) => (
              <li key={i}>
                {m.from === "bot" ? "Tu negocio" : "Cliente"}: {m.text}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
