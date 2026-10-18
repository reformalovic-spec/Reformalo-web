"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type LogoProps = {
  /** Clases de tamaño del contenedor, p. ej. "h-10 w-10". */
  className?: string;
  /** Dibuja el círculo al cargar (solo en el hero). */
  draw?: boolean;
  priority?: boolean;
  sizes?: string;
};

/**
 * El logo se usa tal cual (PNG original). El gesto de hover solo gira y
 * escala el conjunto; la forma no se toca.
 */
export function Logo({
  className = "h-10 w-10",
  draw = false,
  priority = false,
  sizes = "80px",
}: LogoProps) {
  return (
    <motion.span
      className={`relative inline-block shrink-0 ${className}`}
      whileHover={{ rotate: -10, scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", duration: 0.45, bounce: 0.5 }}
    >
      <Image
        src="/logo.png"
        alt=""
        fill
        sizes={sizes}
        priority={priority}
        className={`object-contain ${draw ? "logo-draw" : ""}`}
      />
    </motion.span>
  );
}
