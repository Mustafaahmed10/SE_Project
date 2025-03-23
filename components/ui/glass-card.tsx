import * as React from "react"

import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("glass-card rounded-lg p-6 shadow-sm", className)} {...props}>
      {children}
    </div>
  )
})
GlassCard.displayName = "GlassCard"

export { GlassCard }

