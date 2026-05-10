"use client"

import type { CSSProperties } from "react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, toast, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      closeButton
      icons={{
        success: (
          <CircleCheckIcon className="size-4" />
        ),
        info: (
          <InfoIcon className="size-4" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4" />
        ),
        error: (
          <OctagonXIcon className="size-4" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin" />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as CSSProperties
      }
      toastOptions={{
        classNames: {
          toast:
            "cn-toast rounded-[calc(var(--radius)+0.375rem)] border border-border/80 bg-popover text-popover-foreground shadow-xl shadow-black/15",
          title: "text-sm font-semibold tracking-[-0.01em]",
          description: "text-sm leading-6 text-muted-foreground",
          actionButton:
            "rounded-xl border border-border/70 bg-foreground px-3 py-2 text-xs font-medium text-background hover:bg-foreground/90",
          cancelButton:
            "rounded-xl border border-border/70 bg-background/80 px-3 py-2 text-xs font-medium text-foreground hover:bg-muted",
          closeButton:
            "rounded-full border border-border/70 bg-background/85 text-muted-foreground hover:bg-muted hover:text-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster, toast }
