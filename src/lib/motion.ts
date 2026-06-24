import type { Variants } from "framer-motion";

/**
 * Shared Framer Motion tokens and variants.
 *
 * Single source of truth so motion feels consistent across the site. All
 * reveal-style animations are gentle and short — the audience is seniors, so
 * we favor calm, readable motion over flashy movement. Components that use
 * these should also respect `useReducedMotion()` and skip transforms entirely
 * when the user prefers reduced motion.
 */

/** Smooth ease-out used for entrances (easeOutExpo-like). */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Standard in-view trigger: animate once, a little before fully on screen. */
export const viewportOnce = { once: true, margin: "-80px" } as const;

/** Fade up — the default reveal for a block of content. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

/** Plain fade — for elements where vertical movement would be distracting. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE_OUT } },
};

/** Subtle scale-in for cards/badges. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

/**
 * Container that orchestrates a staggered reveal of its `staggerItem`
 * children. Pair with `staggerItem` on each child.
 */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

/** Child of a `staggerContainer`. Inherits the parent's show/hidden state. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};
