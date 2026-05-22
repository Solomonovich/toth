"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  id?: string
}

export function AnimatedSection({ 
  children, 
  className, 
  id
}: AnimatedSectionProps) {
  return (
    <section
      id={id}
      className={cn("w-full py-16 md:py-24", className)}
    >
      {children}
    </section>
  )
}
