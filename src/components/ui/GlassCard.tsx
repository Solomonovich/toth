import { HTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "hover" | "interactive"
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl bg-white/95 dark:bg-card/40 backdrop-blur-md border border-zinc-300 dark:border-border/50",
          "shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
          variant === "hover" && "transition-all duration-300 hover:bg-white dark:hover:bg-card/60 hover:border-sapphire-500/50 hover:shadow-[0_8px_32px_rgba(59,130,246,0.1)]",
          variant === "interactive" && "transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer hover:bg-white dark:hover:bg-card/60 hover:border-sapphire-500/50",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
GlassCard.displayName = "GlassCard"
