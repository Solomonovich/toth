"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

interface CountUpProps {
  /** The number to count up to. */
  end: number;
  prefix?: string;
  suffix?: string;
  /** Animation length in seconds. */
  duration?: number;
  className?: string;
}

/**
 * Animates a number from 0 up to `end` the first time it scrolls into view.
 * The final value is rendered server-side as the fallback, so it's correct
 * without JavaScript and for users who prefer reduced motion.
 */
export function CountUp({ end, prefix = "", suffix = "", duration = 1.6, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;

    if (reduceMotion) {
      node.textContent = `${prefix}${end}${suffix}`;
      return;
    }

    const controls = animate(motionValue, end, {
      duration,
      ease: EASE_OUT,
      onUpdate: (latest) => {
        node.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [inView, end, prefix, suffix, duration, reduceMotion, motionValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {end}
      {suffix}
    </span>
  );
}
