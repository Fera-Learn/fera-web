import type { DocHeading, DocPage } from "@repo/docs";

import { getDemos } from "./demos";
import { slugToHref } from "./utils";

type EditorialDocDefinition = {
  slug: string[];
  title: string;
  description: string;
  navLabel?: string;
  section: string;
  category: string;
  order: number;
  headings: DocHeading[];
  body: string;
  demoIds?: string[];
  badges?: string[];
};

function createEditorialDoc({
  slug,
  title,
  description,
  navLabel,
  section,
  category,
  order,
  headings,
  body,
  demoIds,
  badges,
}: EditorialDocDefinition): DocPage {
  return {
    slug,
    href: slugToHref(slug),
    title,
    description,
    navLabel: navLabel ?? title,
    section,
    category,
    headings,
    kind: "editorial",
    order,
    badges: badges ?? [],
    body,
    demos: getDemos(demoIds),
  };
}

export const editorialDocs: DocPage[] = [
  createEditorialDoc({
    slug: [],
    title: "Fera UI",
    navLabel: "Overview",
    description:
      "A shared component library and docs framework for the Fera monorepo.",
    section: "Start Here",
    category: "Overview",
    order: 0,
    badges: ["Shared system"],
    headings: [
      { id: "why-fera-ui", title: "Why Fera UI", level: 2 },
      { id: "how-it-is-structured", title: "How it is structured", level: 2 },
      { id: "build-with-it", title: "Build with it", level: 2 },
    ],
    demoIds: ["button-pair", "card-layout"],
    body: `<h2 id="why-fera-ui">Why Fera UI</h2>

Fera UI keeps shared primitives, visual tokens, and docs infrastructure in the monorepo so teams can ship faster without each app rebuilding the same foundation.

The goal is to keep product code focused on product decisions, while the shared packages absorb component polish, docs structure, and theming rules once.

The underlying primitives are built with \`shadcn/ui\`, then themed and composed into the Fera design system.

<Demo id="button-pair" />

<h2 id="how-it-is-structured">How it is structured</h2>

- \`packages/ui\` owns the reusable primitives and theme tokens.
- \`packages/docs\` owns the reusable docs shell, layout components, and docs helpers.
- \`apps/ui\` owns the UI library's actual docs content, catalog, and routing data.

<Demo id="card-layout" />

<h2 id="build-with-it">Build with it</h2>

Use the shared modules directly from the package boundary and keep app-specific composition in the consuming app.

\`\`\`tsx
import { Button } from "@repo/ui/button"
import { DocsAppShell } from "@repo/docs"
\`\`\`

That keeps the UI library reusable while still letting each app control its own product logic and page flows.`,
  }),
  createEditorialDoc({
    slug: ["installation"],
    title: "Installation",
    description:
      "Wire the shared UI package and docs shell into an app with a single styling entrypoint.",
    section: "Start Here",
    category: "Getting Started",
    order: 10,
    headings: [
      { id: "install-packages", title: "Install packages", level: 2 },
      { id: "wire-styles", title: "Wire styles", level: 2 },
      { id: "render-components", title: "Render components", level: 2 },
    ],
    body: `<h2 id="install-packages">Install packages</h2>

The host app should depend on the shared packages, not duplicate the primitives locally.

\`\`\`bash
pnpm add @repo/ui @repo/docs
\`\`\`

<h2 id="wire-styles">Wire styles</h2>

Keep one app entry stylesheet, then import the shared UI tokens and docs-specific prose styles from there.

\`\`\`css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";
@import "../../../../packages/ui/src/styles/globals.css";
@import "../../../../packages/docs/src/styles.css";
\`\`\`

<h2 id="render-components">Render components</h2>

The app routes only need to resolve a docs page and hand it to the shared shell.

\`\`\`tsx
const page = resolveDocPage(slug)
const body = await renderDocBody(page)

return (
  <DocsAppShell
    tree={docsTree}
    searchIndex={searchIndex}
    currentPath={page.href}
    headings={page.headings}
  >
    <DocsArticle page={page}>{body}</DocsArticle>
  </DocsAppShell>
)
\`\`\``,
  }),
  createEditorialDoc({
    slug: ["theming"],
    title: "Theming",
    description:
      "Use the shared token layer from packages/ui and keep app-level styling intentionally thin.",
    section: "Start Here",
    category: "Foundations",
    order: 20,
    headings: [
      { id: "shared-tokens", title: "Shared tokens", level: 2 },
      { id: "dark-mode", title: "Dark mode", level: 2 },
      { id: "styling-boundaries", title: "Styling boundaries", level: 2 },
    ],
    demoIds: ["badge-tones", "input-states"],
    body: `<h2 id="shared-tokens">Shared tokens</h2>

The token source lives in \`packages/ui/src/styles/globals.css\`. Shared components and docs UI both read from that same palette, spacing scale, and radius system.

<Demo id="badge-tones" />

<h2 id="dark-mode">Dark mode</h2>

The docs package provides a lightweight provider based on \`next-themes\`, and the UI tokens already support the \`data-theme="dark"\` convention.

That means the host app only needs the provider once in the root layout.

<h2 id="styling-boundaries">Styling boundaries</h2>

- Shared tokens stay in \`packages/ui\`.
- Shared docs-specific prose and chrome styles stay in \`packages/docs\`.
- App styles should mostly be imports and product-specific additions.

<Demo id="input-states" />`,
  }),
  createEditorialDoc({
    slug: ["patterns"],
    title: "Patterns",
    description:
      "Composition guidelines for pairing shared primitives into consistent product flows.",
    section: "Start Here",
    category: "Patterns",
    order: 30,
    headings: [
      { id: "compose-dont-copy", title: "Compose, do not copy", level: 2 },
      { id: "pair-preview-and-code", title: "Pair preview and code", level: 2 },
      { id: "keep-routing-thin", title: "Keep routing thin", level: 2 },
    ],
    demoIds: ["tabs-preview", "accordion-overview"],
    body: `<h2 id="compose-dont-copy">Compose, do not copy</h2>

Shared primitives should stay inside \`@repo/ui\`. When a screen needs more personality, compose those pieces in the app instead of copying or forking the base module.

<Demo id="tabs-preview" />

<h2 id="pair-preview-and-code">Pair preview and code</h2>

The docs system is built to keep live examples next to copy, so engineers and designers can inspect both the rendered result and the implementation path quickly.

<h2 id="keep-routing-thin">Keep routing thin</h2>

Route files in the host app should resolve a page, render the shared shell, and stop there. Content shape, nav structure, and search data belong in the app.

<Demo id="accordion-overview" />`,
  }),
  createEditorialDoc({
    slug: ["components"],
    title: "Components",
    description:
      "Generated reference pages for the shared modules exported from @repo/ui.",
    section: "Components",
    category: "Components",
    order: 40,
    badges: ["Generated index"],
    headings: [
      { id: "component-map", title: "Component map", level: 2 },
      { id: "featured-primitives", title: "Featured primitives", level: 2 },
      { id: "workflow", title: "Workflow", level: 2 },
    ],
    demoIds: ["table-summary", "badge-tones"],
    body: `<h2 id="component-map">Component map</h2>

Every reference page under \`/components/*\` is generated from typed metadata in \`apps/ui\`. That keeps search, navigation, and page structure aligned without hand-maintaining dozens of route files.

<Demo id="table-summary" />

<h2 id="featured-primitives">Featured primitives</h2>

The most-used modules include curated examples and tighter guidance. The rest still get a generated reference page with import paths, navigation metadata, and shared guidance.

<Demo id="badge-tones" />

<h2 id="workflow">Workflow</h2>

When a shared component changes:

1. Update the primitive in \`packages/ui\`.
2. Adjust or add the matching docs metadata in \`apps/ui\`.
3. Let the generated search index and route resolver pick up the new page automatically.`,
  }),
];
