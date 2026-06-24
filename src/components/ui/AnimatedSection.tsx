"use client"

import { ReactNode } from "react"
import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import { EASE_OUT, viewportOnce } from "@/lib/motion"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  /** Seconds to delay the reveal. */
  delay?: number
  /** Direction the section travels in from. "none" fades without movement. */
  direction?: "up" | "down" | "left" | "right" | "none"
  id?: string
}

const OFFSET = 28

function buildVariants(direction: NonNullable<AnimatedSectionProps["direction"]>, delay: number): Variants {
  const from =
    direction === "up"
      ? { y: OFFSET }
      : direction === "down"
        ? { y: -OFFSET }
        : direction === "left"
          ? { x: OFFSET }
          : direction === "right"
            ? { x: -OFFSET }
            : {}

  return {
    hidden: { opacity: 0, ...from },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.65, ease: EASE_OUT, delay },
    },
  }
}

/**
 * A semantic section that gently reveals as it scrolls into view. Reduced-motion
 * is handled globally by `<MotionConfig reducedMotion="user">` (see
 * ThemeProvider): the transform is dropped and only the fade remains. Rendering
 * the same `motion.section` on server and client avoids hydration mismatches.
 */
export function AnimatedSection({
  children,
  className,
  id,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={cn("w-full py-16 md:py-24", className)}
      variants={buildVariants(direction, delay)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </motion.section>
  )
}
