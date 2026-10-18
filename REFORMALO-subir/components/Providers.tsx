"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

/** Respeta prefers-reduced-motion: desactiva los movimientos de transform. */
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
