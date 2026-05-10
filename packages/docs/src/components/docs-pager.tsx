import Link from "next/link";

import { Card, CardHeader, CardTitle } from "@repo/ui/card";
import type { DocPageNeighbors } from "../core/types";

type DocsPagerProps = {
  neighbors: DocPageNeighbors;
};

export function DocsPager({ neighbors }: DocsPagerProps) {
  if (!neighbors.previous && !neighbors.next) {
    return null;
  }

  return (
    <div className="grid gap-4 pt-4 md:grid-cols-2">
      {neighbors.previous ? (
        <Link href={neighbors.previous.href}>
          <Card className="h-full rounded-3xl transition-transform hover:-translate-y-0.5">
            <CardHeader className="gap-2">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Previous
              </p>
              <CardTitle className="text-base">{neighbors.previous.title}</CardTitle>
            </CardHeader>
          </Card>
        </Link>
      ) : (
        <div />
      )}
      {neighbors.next ? (
        <Link href={neighbors.next.href}>
          <Card className="h-full rounded-3xl text-right transition-transform hover:-translate-y-0.5">
            <CardHeader className="gap-2">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Next
              </p>
              <CardTitle className="text-base">{neighbors.next.title}</CardTitle>
            </CardHeader>
          </Card>
        </Link>
      ) : null}
    </div>
  );
}
