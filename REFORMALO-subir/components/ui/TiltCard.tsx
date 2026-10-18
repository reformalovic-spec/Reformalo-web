"use client";

import { useRef } from "react";
import type { PointerEvent, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useFinePointer } from "@/lib/useFinePointer";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  dark?: boolean;
};

/** Tarjeta con inclinación suave y foco de luz que sigue al ratón. */
export function TiltCard({ children, className = "", dark = false }: TiltCardProps) {
  const fine = useFinePointer();
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 18 });
  const sry = useSpring(ry, { stiffness: 180, damping: 18 });

  function onMove(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!fine || !el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 7);
    rx.set(-(py - 0.5) * 7);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  }

  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  const glow = dark ? "rgba(195,205,251,.16)" : "rgba(81,112,255,.14)";

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`group relative overflow-hidden rounded-3xl ${className}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100"
        style={{
          background: `radial-gradient(340px circle at var(--mx,50%) var(--my,50%), ${glow}, transparent 62%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
