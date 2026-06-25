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
          "rounded-xl bg-card border border-border",
          "shadow-sm",
          variant === "hover" && "transition-all duration-300 hover:border-sapphire-600/40 hover:shadow-md",
          variant === "interactive" && "transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer hover:border-sapphire-600/40 hover:shadow-md",
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
