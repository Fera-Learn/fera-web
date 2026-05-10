import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Badge } from "@repo/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@repo/ui/card";

import type { ComponentCatalogGroup } from "@/lib/docs/components";

type DocsComponentCatalogProps = {
  groups: ComponentCatalogGroup[];
};

export function DocsComponentCatalog({ groups }: DocsComponentCatalogProps) {
  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <section className="space-y-4" key={group.group}>
          <div className="space-y-2">
            <h3 className="font-heading text-2xl font-semibold tracking-tight">
              {group.group}
            </h3>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
              {group.description}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {group.entries.map((entry) => (
              <Link href={`/components/${entry.slug}`} key={entry.slug}>
                <Card className="h-full rounded-[1.75rem] border-border/80 transition-transform hover:-translate-y-1">
                  <CardHeader className="gap-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <Badge variant="outline">{entry.group}</Badge>
                      <Badge>{entry.status ?? "stable"}</Badge>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{entry.title}</CardTitle>
                        <CardDescription className="text-sm leading-6">
                          {entry.description}
                        </CardDescription>
                      </div>
                      <ArrowRightIcon className="mt-1 size-4 shrink-0 text-muted-foreground" />
                    </div>
                    <p className="font-mono text-xs text-muted-foreground">
                      {entry.modulePath}
                    </p>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
