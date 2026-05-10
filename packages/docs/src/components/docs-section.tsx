import type { ReactNode } from "react";

import { cn } from "@repo/ui/lib/utils";

type DocsSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  title?: string;
  description?: string;
};

export function DocsSection({
  children,
  className,
  id,
  title,
  description,
}: DocsSectionProps) {
  return (
    <section className={cn("space-y-4", className)} id={id}>
      {title ? (
        <div className="space-y-2">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">
            {title}
          </h2>
          {description ? (
            <p className="max-w-3xl text-sm text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
