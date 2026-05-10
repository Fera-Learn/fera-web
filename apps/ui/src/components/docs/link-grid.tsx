import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Badge } from "@repo/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@repo/ui/card";
import { cn } from "@repo/ui/lib/utils";

type DocsLinkGridItem = {
  title: string;
  description: string;
  href: string;
  badge?: string;
  eyebrow?: string;
};

type DocsLinkGridProps = {
  items: DocsLinkGridItem[];
  columns?: 2 | 3;
  className?: string;
};

export function DocsLinkGrid({
  items,
  columns = 3,
  className,
}: DocsLinkGridProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "grid gap-4",
        columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3",
        className,
      )}
    >
      {items.map((item) => (
        <Link href={item.href} key={item.href}>
          <Card className="h-full rounded-[1.75rem] border-border/80 transition-transform hover:-translate-y-1">
            <CardHeader className="gap-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {item.eyebrow ?? "Docs"}
                </div>
                {item.badge ? <Badge variant="outline">{item.badge}</Badge> : null}
              </div>
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm leading-6">
                    {item.description}
                  </CardDescription>
                </div>
                <ArrowRightIcon className="mt-1 size-4 shrink-0 text-muted-foreground" />
              </div>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}
