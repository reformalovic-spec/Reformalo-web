"use client";

import Link from "next/link";
import type { PointerEvent, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useFinePointer } from "@/lib/useFinePointer";

type Variant = "primary" | "secondary" | "light";
type Size = "sm" | "md" | "lg";

// El texto blanco sobre #3A52CC cumple AA; #5170FF puro se reserva para
// elementos grandes, no para botones con texto pequeño.
const variants: Record<Variant, string> = {
  primary:
    "bg-brand-dark text-white shadow-soft hover:bg-[#3349BD] hover:shadow-lift",
  secondary:
    "bg-white text-ink ring-1 ring-inset ring-brand-soft hover:text-brand-dark hover:ring-brand-dark",
  light: "bg-white text-brand-dark hover:bg-brand-mist",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-7 text-base sm:px-8 sm:text-lg",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Clases del contenedor (display, anchura, márgenes). */
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  arrow?: boolean;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "inline-flex",
  href,
  onClick,
  type = "button",
  disabled,
  arrow = false,
}: ButtonProps) {
  const fine = useFinePointer();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.5 });

  function onMove(e: PointerEvent<HTMLSpanElement>) {
    if (!fine || disabled) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.22);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const inner = `group/btn inline-flex w-full select-none items-center justify-center gap-2 rounded-full font-semibold transition-[transform,box-shadow,background-color,color] duration-150 ease-out active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60 ${variants[variant]} ${sizes[size]}`;

  const content = (
    <>
      {children}
      {arrow && (
        <svg
          aria-hidden
          viewBox="0 0 20 20"
          className="h-4 w-4 transition-transform duration-150 ease-out group-hover/btn:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 10h12M11 5l5 5-5 5" />
        </svg>
      )}
    </>
  );

  const isExternal = href && /^(https?:|mailto:)/.test(href);

  return (
    <motion.span
      className={className}
      style={{ x: sx, y: sy }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {href ? (
        isExternal ? (
          <a
            href={href}
            className={inner}
            {...(href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {content}
          </a>
        ) : (
          <Link href={href} className={inner}>
            {content}
          </Link>
        )
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={inner}
        >
          {content}
        </button>
      )}
    </motion.span>
  );
}
