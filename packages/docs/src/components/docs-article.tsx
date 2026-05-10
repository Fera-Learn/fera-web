import type { ReactNode } from "react";

import { Badge } from "@repo/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/card";

import type { DocPage, DocPageNeighbors } from "../core/types";
import { DocsBreadcrumbs, type DocsBreadcrumbItem } from "./docs-breadcrumbs";
import { DocsCodeSnippet } from "./docs-code-snippet";
import { DocsExampleBlock } from "./docs-example-block";
import { DocsPager } from "./docs-pager";
import { DocsSection } from "./docs-section";

type DocsArticleProps = {
  afterContent?: ReactNode;
  actions?: ReactNode;
  beforeContent?: ReactNode;
  children: ReactNode;
  neighbors: DocPageNeighbors;
  page: DocPage;
};

function buildBreadcrumbs(page: DocPage): DocsBreadcrumbItem[] {
  if (page.slug.length === 0) {
    return [];
  }

  if (page.kind === "component") {
    return [
      { title: "Home", href: "/" },
      { title: "Components", href: "/components" },
      { title: page.category },
    ];
  }

  return [{ title: "Home", href: "/" }];
}

export function DocsArticle({
  afterContent,
  actions,
  beforeContent,
  children,
  neighbors,
  page,
}: DocsArticleProps) {
  const metadataBadges = Array.from(
    new Set([
      page.kind === "component" ? page.category : page.section,
      ...(page.badges ?? []),
    ]),
  );

  return (
    <article className="space-y-8">
      <div className="space-y-4">
        <DocsBreadcrumbs currentTitle={page.title} items={buildBreadcrumbs(page)} />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {metadataBadges.map((badge) => (
              <Badge key={badge} variant="outline">
                {badge}
              </Badge>
            ))}
            {page.status ? <Badge>{page.status}</Badge> : null}
          </div>
          {actions ? <div className="shrink-0">{actions}</div> : null}
        </div>
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            {page.kind === "component" ? "Component reference" : page.section}
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {page.title}
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">{page.description}</p>
        </div>
      </div>

      {page.demos.length ? (
        <DocsSection id="examples" title="Examples">
          <div className="space-y-4">
            {page.demos.map((demo) => {
              const ExampleComponent = demo.component;

              return (
                <DocsExampleBlock
                  key={demo.id}
                  code={demo.code}
                  description={demo.description}
                  title={demo.title}
                >
                  <ExampleComponent />
                </DocsExampleBlock>
              );
            })}
          </div>
        </DocsSection>
      ) : null}

      {page.modulePath ? (
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <DocsCodeSnippet
            code={page.modulePath}
            description="Import the pieces you need from the shared UI package."
            title="Module path"
          />
          <Card className="rounded-3xl">
            <CardHeader className="gap-1">
              <CardTitle>Source file</CardTitle>
              <CardDescription>
                The generated docs stay tied to the real implementation path in the monorepo.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="overflow-x-auto rounded-3xl border border-border/80 bg-subtle-surface px-4 py-4 text-sm leading-6 text-foreground">
                <code>{page.sourcePath}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      ) : null}

      {beforeContent}
      <DocsSection>{children}</DocsSection>
      {afterContent}
      <DocsPager neighbors={neighbors} />
    </article>
  );
}
