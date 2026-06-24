"use client";

import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds to delay the reveal (useful for manual sequencing). */
  delay?: number;
  /** Override the default fade-up variant. */
  variants?: Variants;
}

/**
 * Reveals its children with a gentle fade-up the first time they scroll into
 * view. Reduced-motion is handled globally by `<MotionConfig reducedMotion="user">`
 * (see ThemeProvider), which strips the transform while keeping the fade — so
 * the rendered markup is identical on server and client (no hydration mismatch).
 */
export function Reveal({ children, className, delay = 0, variants = fadeUp }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Orchestrates a staggered reveal of `StaggerItem` children as the group
 * scrolls into view. Apply layout classes (e.g. a grid) via `className`.
 */
export function StaggerContainer({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

/** A single item within a `StaggerContainer`. */
export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}
