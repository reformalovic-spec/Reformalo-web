"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

type Tag = "div" | "li" | "section" | "article" | "p" | "span";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  tag?: Tag;
};

/** Aparición al entrar en pantalla. Con movimiento reducido solo hace fundido. */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  tag = "div",
}: RevealProps) {
  const Comp = motion[tag] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.55, ease, delay }}
    >
      {children}
    </Comp>
  );
}
