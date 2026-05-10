import { DocsSection } from "@repo/docs";
import { Badge } from "@repo/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";
import type { DocPage } from "@repo/docs";

import { DocsComponentCatalog } from "@/components/docs/component-catalog";
import { DocsLinkGrid } from "@/components/docs/link-grid";
import {
  componentCatalog,
  getComponentCatalogByGroup,
} from "@/lib/docs/components";
import { docsPages } from "@/lib/docs/pages";

type DocsPageEnhancementsProps = {
  page: DocPage;
  placement: "before" | "after";
};

function countPages(kind: "editorial" | "component") {
  return docsPages.filter((page) => page.kind === kind).length;
}

function getGuideCards() {
  return docsPages
    .filter(
      (page) =>
        page.kind === "editorial" &&
        page.slug.length > 0 &&
        page.slug[0] !== "components",
    )
    .slice(0, 3)
    .map((page) => ({
      title: page.title,
      description: page.description,
      href: page.href,
      badge: page.section,
      eyebrow: "Guide",
    }));
}

function getFeaturedComponentCards() {
  const featuredOrder = ["button", "card", "dialog", "sidebar"];

  return featuredOrder
    .map((slug) => componentCatalog.find((entry) => entry.slug === slug))
    .filter(
      (entry): entry is (typeof componentCatalog)[number] =>
        entry !== undefined,
    )
    .map((entry) => ({
      title: entry.title,
      description: entry.description,
      href: `/components/${entry.slug}`,
      badge: entry.group,
      eyebrow: "Featured component",
    }));
}

function OverviewPanels() {
  const componentCount = countPages("component");
  const guideCount = countPages("editorial");
  const demoCount = docsPages.filter((page) => page.demos.length > 0).length;

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="rounded-[1.75rem]">
          <CardHeader className="gap-3">
            <Badge variant="outline">Shared UI</Badge>
            <CardTitle className="text-3xl">{componentCount}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            Reusable shared components documented from the monorepo package
            boundary.
          </CardContent>
        </Card>
        <Card className="rounded-[1.75rem]">
          <CardHeader className="gap-3">
            <Badge variant="outline">Guides</Badge>
            <CardTitle className="text-3xl">{guideCount}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            Editorial pages that explain installation, theming, and composition
            patterns.
          </CardContent>
        </Card>
        <Card className="rounded-[1.75rem]">
          <CardHeader className="gap-3">
            <Badge variant="outline">Live demos</Badge>
            <CardTitle className="text-3xl">{demoCount}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            Interactive examples rendered through the same docs engine the app
            consumes.
          </CardContent>
        </Card>
      </div>
      <DocsSection
        description="Start with the high-signal guides that explain how the shared packages fit together."
        title="Start With These Guides"
      >
        <DocsLinkGrid columns={3} items={getGuideCards()} />
      </DocsSection>
      <DocsSection
        description="A few of the most representative primitives to explore first."
        title="Featured Components"
      >
        <DocsLinkGrid columns={2} items={getFeaturedComponentCards()} />
      </DocsSection>
    </div>
  );
}

function ComponentsIndexPanels() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="rounded-[1.75rem]">
          <CardHeader className="gap-3">
            <Badge variant="outline">Catalog</Badge>
            <CardTitle className="text-3xl">
              {componentCatalog.length}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            Shared components generated into docs pages from typed metadata.
          </CardContent>
        </Card>
        <Card className="rounded-[1.75rem]">
          <CardHeader className="gap-3">
            <Badge variant="outline">Categories</Badge>
            <CardTitle className="text-3xl">
              {getComponentCatalogByGroup().length}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            Grouped by the job they do so the library is easier to scan and
            maintain.
          </CardContent>
        </Card>
        <Card className="rounded-[1.75rem]">
          <CardHeader className="gap-3">
            <Badge variant="outline">Featured demos</Badge>
            <CardTitle className="text-3xl">
              {
                componentCatalog.filter((entry) => entry.demos.length > 0)
                  .length
              }
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            Components with curated live examples and tighter guidance beyond
            the generated baseline.
          </CardContent>
        </Card>
      </div>
      <DocsSection
        description="Browse the full shared UI package grouped by capability."
        title="Explore The Library"
      >
        <DocsComponentCatalog groups={getComponentCatalogByGroup()} />
      </DocsSection>
    </div>
  );
}

export function DocsPageEnhancements({
  page,
  placement,
}: DocsPageEnhancementsProps) {
  if (placement === "before" && page.slug.length === 0) {
    return <OverviewPanels />;
  }

  if (placement === "after" && page.href === "/components") {
    return <ComponentsIndexPanels />;
  }

  return null;
}
