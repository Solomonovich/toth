"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { MotionConfig } from "framer-motion"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      {/*
        reducedMotion="user" makes Framer Motion automatically disable transform
        and layout animations (keeping opacity) for visitors with the OS
        "Reduce Motion" setting. Doing it here — rather than branching each
        component's rendered output on useReducedMotion() — keeps server and
        client markup identical and avoids hydration mismatches.
      */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </NextThemesProvider>
  )
}
