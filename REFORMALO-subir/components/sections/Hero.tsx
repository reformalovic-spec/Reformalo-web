"use client";

import type { CSSProperties, PointerEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { SplitWords } from "@/components/ui/SplitWords";
import { useFinePointer } from "@/lib/useFinePointer";
import { hero } from "@/content/home";

const chipLayout = [
  { pos: "left-0 top-[14%]", k: 24, delay: "0s" },
  { pos: "right-[6%] top-[3%]", k: -18, delay: "-1.4s" },
  { pos: "right-0 top-[52%]", k: 28, delay: "-2.6s" },
  { pos: "left-[3%] bottom-[10%]", k: -26, delay: "-3.4s" },
  { pos: "right-[14%] bottom-[1%]", k: 16, delay: "-4.6s" },
] as const;

function Chip({
  label,
  emoji,
  pos,
  k,
  delay,
  mx,
  my,
}: {
  label: string;
  emoji: string;
  pos: string;
  k: number;
  delay: string;
  mx: MotionValue<number>;
  my: MotionValue<number>;
}) {
  const x = useTransform(mx, (v) => v * k);
  const y = useTransform(my, (v) => v * k);
  return (
    <motion.div aria-hidden style={{ x, y }} className={`absolute ${pos}`}>
      <div
        className="animate-float flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink shadow-soft ring-1 ring-brand-softer"
        style={{ animationDelay: delay } as CSSProperties}
      >
        <span>{emoji}</span>
        {label}
      </div>
    </motion.div>
  );
}

export function Hero() {
  const fine = useFinePointer();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const mx = useSpring(px, { stiffness: 90, damping: 18 });
  const my = useSpring(py, { stiffness: 90, damping: 18 });

  function onMove(e: PointerEvent<HTMLElement>) {
    if (!fine) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  }

  const marquee = [...hero.marquee];

  return (
    <section
      onPointerMove={onMove}
      className="relative isolate overflow-hidden pt-28 sm:pt-36"
    >
      <div className="mesh" aria-hidden>
        <span />
        <span />
        <span />
      </div>

      <div className="container-x grid items-center gap-12 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-20">
        <div>
          <p className="eyebrow enter" style={{ "--d": "0ms" } as CSSProperties}>
            {hero.eyebrow}
          </p>
          <SplitWords
            as="h1"
            text={hero.title}
            scribble
            delay={120}
            className="h-display mt-6 text-[clamp(3rem,8.4vw,6rem)] text-ink"
          />
          <p
            className="enter mt-7 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl"
            style={{ "--d": "620ms" } as CSSProperties}
          >
            {hero.subtitle}
          </p>
          <div
            className="enter mt-9 flex flex-wrap gap-3"
            style={{ "--d": "760ms" } as CSSProperties}
          >
            <Button href="/contacto" size="lg" arrow>
              {hero.primary}
            </Button>
            <Button href="/#servicios" size="lg" variant="secondary">
              {hero.secondary}
            </Button>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[24rem] sm:max-w-[30rem]">
          <div
            aria-hidden
            className="absolute inset-[7%] rounded-full bg-white/75 shadow-lift ring-1 ring-brand-softer backdrop-blur-sm"
          />
          <div className="absolute inset-[17%]">
            <Logo
              draw
              priority
              className="h-full w-full"
              sizes="(min-width: 1024px) 300px, 70vw"
            />
          </div>
          {hero.chips.map((chip, i) => (
            <Chip
              key={chip.label}
              label={chip.label}
              emoji={chip.emoji}
              mx={mx}
              my={my}
              {...chipLayout[i]}
            />
          ))}
        </div>
      </div>

      <div className="relative border-y border-brand-softer/80 bg-white/70 py-4 backdrop-blur-sm">
        <p className="sr-only">Servicios: {hero.marquee.join(", ")}.</p>
        <div aria-hidden className="overflow-hidden">
          <div className="animate-marquee flex w-max">
            {[0, 1].map((group) => (
              <div key={group} className="flex shrink-0 items-center gap-8 pr-8">
                {marquee.map((word) => (
                  <span
                    key={`${group}-${word}`}
                    className="flex items-center gap-8 whitespace-nowrap font-display text-lg font-bold text-brand-dark"
                  >
                    {word}
                    <span className="text-brand">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
