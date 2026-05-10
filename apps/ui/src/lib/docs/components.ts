import type { ComponentDocEntry, DocHeading, DocPage } from "@repo/docs";

import { getDemos } from "./demos";
import { namespaceFromSlug, slugToHref, titleFromSlug } from "./utils";

type ComponentGroupDefinition = {
  group: string;
  slugs: string[];
};

export type ComponentCatalogGroup = {
  group: string;
  description: string;
  slugs: string[][];
  entries: ComponentDocEntry[];
};

type FeaturedComponentDefinition = {
  body: string;
  headings: DocHeading[];
  demoIds?: string[];
  status?: "stable" | "beta";
  badges?: string[];
};

const componentGroupDefinitions: ComponentGroupDefinition[] = [
  {
    group: "Actions",
    slugs: ["button", "button-group", "toggle", "toggle-group"],
  },
  {
    group: "Forms",
    slugs: [
      "calendar",
      "checkbox",
      "combobox",
      "field",
      "input",
      "input-group",
      "input-otp",
      "label",
      "native-select",
      "radio-group",
      "select",
      "slider",
      "switch",
      "textarea",
    ],
  },
  {
    group: "Navigation",
    slugs: [
      "accordion",
      "breadcrumb",
      "command",
      "menubar",
      "navigation-menu",
      "pagination",
      "sidebar",
      "tabs",
    ],
  },
  {
    group: "Overlays",
    slugs: [
      "alert-dialog",
      "context-menu",
      "dialog",
      "drawer",
      "dropdown-menu",
      "hover-card",
      "popover",
      "sheet",
      "tooltip",
    ],
  },
  {
    group: "Layout",
    slugs: [
      "aspect-ratio",
      "card",
      "carousel",
      "collapsible",
      "direction",
      "empty",
      "item",
      "resizable",
      "scroll-area",
      "separator",
    ],
  },
  {
    group: "Feedback",
    slugs: ["alert", "badge", "progress", "skeleton", "sonner", "spinner"],
  },
  {
    group: "Data Display",
    slugs: ["avatar", "chart", "kbd", "table"],
  },
];

const descriptionOverrides: Record<string, string> = {
  "alert-dialog": "A focused confirmation dialog for destructive or high-stakes actions.",
  alert: "Inline status callout for informative, warning, and destructive messaging.",
  avatar: "Circular identity surface for people, teams, and grouped presence.",
  badge: "Small metadata accent for status, labels, and compact categorization.",
  breadcrumb: "Compact wayfinding for nested content and longer information paths.",
  checkbox: "Compact multi-select control for checklists and form rows.",
  chart: "Shared chart wrappers and theme-aware helpers for data-rich views.",
  command: "Command surface primitives for searchable action menus and keyboard-first flows.",
  direction: "Directional layout helpers for switching UI flow cleanly across contexts.",
  empty: "Empty-state scaffolding for first-use, no-results, and post-action states.",
  field: "Composable field wrapper pieces for labels, hints, and validation messaging.",
  item: "A small composition primitive for icon-and-copy rows and compact content groupings.",
  kbd: "Inline keyboard hint styling for shortcuts and command affordances.",
  pagination: "Page navigation controls for stepping through longer result sets.",
  popover: "Lightweight anchored surface for secondary details and short actions.",
  progress: "Progress indicator for long-running or multi-step work.",
  "radio-group": "Single-choice selection group for mutually exclusive options.",
  select: "Token-aware select menu for choosing one option from a list.",
  separator: "Subtle divider for grouping related content.",
  sheet: "Sliding side surface for secondary flows and mobile-friendly tasks.",
  slider: "Range input for adjusting numeric values inline.",
  sonner: "Theme-aware toast notifications wired to the shared token system.",
  switch: "Binary toggle for immediate on and off settings.",
  textarea: "Multi-line text field for longer notes, summaries, and feedback.",
  tooltip: "Hover or focus hint for controls and dense interfaces.",
};

const componentDemoIds: Record<string, string[]> = {
  accordion: ["accordion-overview"],
  alert: ["alert-inline"],
  "alert-dialog": ["alert-dialog-confirm"],
  "aspect-ratio": ["aspect-ratio-media"],
  avatar: ["avatar-group"],
  badge: ["badge-tones"],
  breadcrumb: ["breadcrumb-trail"],
  button: ["button-pair"],
  "button-group": ["button-group-actions"],
  calendar: ["calendar-picker"],
  card: ["card-layout"],
  carousel: ["carousel-gallery"],
  chart: ["chart-revenue"],
  checkbox: ["checkbox-list"],
  collapsible: ["collapsible-details"],
  combobox: ["combobox-owner"],
  command: ["command-palette"],
  "context-menu": ["context-menu-actions"],
  direction: ["direction-rtl"],
  dialog: ["dialog-flow"],
  drawer: ["drawer-mobile"],
  "dropdown-menu": ["dropdown-actions"],
  empty: ["empty-state"],
  field: ["field-feedback"],
  "hover-card": ["hover-card-profile"],
  input: ["input-states"],
  "input-group": ["input-group-url"],
  "input-otp": ["input-otp-code"],
  item: ["item-summary"],
  kbd: ["kbd-shortcut"],
  label: ["label-pairing"],
  menubar: ["menubar-tools"],
  "native-select": ["native-select-country"],
  "navigation-menu": ["navigation-menu-preview"],
  pagination: ["pagination-basic"],
  popover: ["popover-quickview"],
  progress: ["progress-status"],
  "radio-group": ["radio-preference"],
  resizable: ["resizable-panels"],
  "scroll-area": ["scroll-area-log"],
  select: ["select-plan"],
  separator: ["separator-content"],
  sheet: ["sheet-panel"],
  sidebar: ["sidebar-layout"],
  slider: ["slider-volume"],
  skeleton: ["skeleton-loading"],
  sonner: ["sonner-mounted"],
  spinner: ["spinner-inline"],
  switch: ["switch-settings"],
  table: ["table-summary"],
  tabs: ["tabs-preview"],
  textarea: ["textarea-feedback"],
  toggle: ["toggle-states"],
  "toggle-group": ["toggle-group-view"],
  tooltip: ["tooltip-hint"],
};

const featuredComponents: Record<string, FeaturedComponentDefinition> = {
  button: {
    headings: [
      { id: "overview", title: "Overview", level: 2 },
      { id: "module-path", title: "Module path", level: 2 },
      { id: "examples", title: "Examples", level: 2 },
      { id: "guidance", title: "Guidance", level: 2 },
    ],
    demoIds: ["button-pair"],
    body: `<h2 id="overview">Overview</h2>

Buttons carry primary and secondary actions through the system, with a consistent rounded silhouette and token-driven variants.

Use them as the final step in a flow, not as general layout decoration.

<h2 id="module-path">Module path</h2>

\`\`\`tsx
import { Button } from "@repo/ui/button"
\`\`\`

<h2 id="examples">Examples</h2>

<Demo id="button-pair" />

<h2 id="guidance">Guidance</h2>

- Reserve the default variant for the single strongest action in the current context.
- Use outline and secondary variants to keep supporting actions visible without stealing hierarchy.
- Keep button copy specific and verb-first when possible.`,
  },
  card: {
    headings: [
      { id: "overview", title: "Overview", level: 2 },
      { id: "module-path", title: "Module path", level: 2 },
      { id: "examples", title: "Examples", level: 2 },
      { id: "guidance", title: "Guidance", level: 2 },
    ],
    demoIds: ["card-layout"],
    body: `<h2 id="overview">Overview</h2>

Cards provide a flexible surface for grouping related information, controls, and metadata without inventing a one-off container every time.

<h2 id="module-path">Module path</h2>

\`\`\`tsx
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/card"
\`\`\`

<h2 id="examples">Examples</h2>

<Demo id="card-layout" />

<h2 id="guidance">Guidance</h2>

- Keep the card itself structural and let inner content carry the meaning.
- Reach for header, content, and footer slots before adding custom wrappers.
- Pair cards with consistent spacing so lists of them scan as a system.`,
  },
  input: {
    headings: [
      { id: "overview", title: "Overview", level: 2 },
      { id: "module-path", title: "Module path", level: 2 },
      { id: "examples", title: "Examples", level: 2 },
      { id: "guidance", title: "Guidance", level: 2 },
    ],
    demoIds: ["input-states"],
    body: `<h2 id="overview">Overview</h2>

Inputs provide the shared text-entry treatment for forms across the monorepo, including rounded geometry, focus rings, and token-aware color states.

<h2 id="module-path">Module path</h2>

\`\`\`tsx
import { Input } from "@repo/ui/input"
import { Label } from "@repo/ui/label"
\`\`\`

<h2 id="examples">Examples</h2>

<Demo id="input-states" />

<h2 id="guidance">Guidance</h2>

- Pair inputs with labels and keep helper text close to the field.
- Avoid app-specific border and radius overrides inside shared forms.
- Prefer the shared field primitives when a form needs validation copy or grouped messaging.`,
  },
  "input-group": {
    headings: [
      { id: "overview", title: "Overview", level: 2 },
      { id: "module-path", title: "Module path", level: 2 },
      { id: "examples", title: "Examples", level: 2 },
      { id: "guidance", title: "Guidance", level: 2 },
    ],
    demoIds: ["input-group-url"],
    body: `<h2 id="overview">Overview</h2>

Input groups compose a shared field surface from one control plus optional leading and trailing add-ons.

Use add-ons for prefixes, suffixes, compact actions, and small inline affordances that should stay visually attached to the field.

<h2 id="module-path">Module path</h2>

\`\`\`tsx
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@repo/ui/input-group"
\`\`\`

<h2 id="examples">Examples</h2>

<Demo id="input-group-url" />

<h2 id="guidance">Guidance</h2>

- Wrap prefixes and suffixes in \`InputGroupAddon\` so spacing and alignment stay consistent.
- Keep trailing actions compact enough that the field remains the dominant element.
- Reach for plain \`Input\` when the field does not need attached controls or text.`,
  },
  dialog: {
    headings: [
      { id: "overview", title: "Overview", level: 2 },
      { id: "module-path", title: "Module path", level: 2 },
      { id: "examples", title: "Examples", level: 2 },
      { id: "guidance", title: "Guidance", level: 2 },
    ],
    demoIds: ["dialog-flow"],
    body: `<h2 id="overview">Overview</h2>

Dialogs interrupt the current flow to focus someone on a high-priority task, confirmation, or form.

Use them when the action cannot be handled as lightweight inline UI.

<h2 id="module-path">Module path</h2>

\`\`\`tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/dialog"
\`\`\`

<h2 id="examples">Examples</h2>

<Demo id="dialog-flow" />

<h2 id="guidance">Guidance</h2>

- Keep dialog flows short and outcome-focused.
- Prefer one strong action and one clear escape hatch.
- Move long, multi-step workflows to dedicated pages when they outgrow a modal.`,
  },
  accordion: {
    headings: [
      { id: "overview", title: "Overview", level: 2 },
      { id: "module-path", title: "Module path", level: 2 },
      { id: "examples", title: "Examples", level: 2 },
      { id: "guidance", title: "Guidance", level: 2 },
    ],
    demoIds: ["accordion-overview"],
    body: `<h2 id="overview">Overview</h2>

Accordions keep long or repeatable guidance scannable by revealing detail only when someone asks for it.

<h2 id="module-path">Module path</h2>

\`\`\`tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/accordion"
\`\`\`

<h2 id="examples">Examples</h2>

<Demo id="accordion-overview" />

<h2 id="guidance">Guidance</h2>

- Use clear, question-like trigger copy so people can predict the hidden content.
- Keep each item focused on one topic or decision.
- Avoid hiding must-see actions or critical alerts behind disclosure.`,
  },
  tabs: {
    headings: [
      { id: "overview", title: "Overview", level: 2 },
      { id: "module-path", title: "Module path", level: 2 },
      { id: "examples", title: "Examples", level: 2 },
      { id: "guidance", title: "Guidance", level: 2 },
    ],
    demoIds: ["tabs-preview"],
    body: `<h2 id="overview">Overview</h2>

Tabs switch between peer views without forcing a route change, which makes them useful for dense tools, inspectors, and embedded references.

<h2 id="module-path">Module path</h2>

\`\`\`tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/tabs"
\`\`\`

<h2 id="examples">Examples</h2>

<Demo id="tabs-preview" />

<h2 id="guidance">Guidance</h2>

- Keep the number of tabs modest so labels remain legible.
- Use them for sibling views, not step-by-step flows.
- Preserve the shared context across tabs so switching feels lightweight.`,
  },
  table: {
    headings: [
      { id: "overview", title: "Overview", level: 2 },
      { id: "module-path", title: "Module path", level: 2 },
      { id: "examples", title: "Examples", level: 2 },
      { id: "guidance", title: "Guidance", level: 2 },
    ],
    demoIds: ["table-summary"],
    body: `<h2 id="overview">Overview</h2>

Tables are best for structured comparisons and operational views where alignment matters more than narrative reading.

<h2 id="module-path">Module path</h2>

\`\`\`tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/table"
\`\`\`

<h2 id="examples">Examples</h2>

<Demo id="table-summary" />

<h2 id="guidance">Guidance</h2>

- Keep column labels short and unambiguous.
- Avoid putting long paragraphs in cells; tables scan best with concise values.
- Consider cards or lists instead when the layout needs to collapse heavily on mobile.`,
  },
  sidebar: {
    headings: [
      { id: "overview", title: "Overview", level: 2 },
      { id: "module-path", title: "Module path", level: 2 },
      { id: "examples", title: "Examples", level: 2 },
      { id: "composition", title: "Composition", level: 2 },
      { id: "guidance", title: "Guidance", level: 2 },
    ],
    demoIds: ["sidebar-layout"],
    badges: ["Responsive"],
    body: `<h2 id="overview">Overview</h2>

Sidebar primitives give shared apps a responsive navigation shell with desktop persistence, mobile sheet behavior, and a consistent set of menu building blocks.

<h2 id="module-path">Module path</h2>

\`\`\`tsx
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@repo/ui/sidebar"
\`\`\`

<h2 id="examples">Examples</h2>

<Demo id="sidebar-layout" />

<h2 id="composition">Composition</h2>

The docs shell in \`@repo/docs\` is built directly on top of these pieces. That keeps the docs layout dogfooding the same primitives the rest of the monorepo can reuse.

<h2 id="guidance">Guidance</h2>

- Keep high-level sections stable so muscle memory can form.
- Use the desktop sidebar for persistent wayfinding and let the mobile sheet stay concise.
- Prefer nested labels and groups over ad-hoc indentation rules.`,
  },
  sonner: {
    headings: [
      { id: "overview", title: "Overview", level: 2 },
      { id: "module-path", title: "Module path", level: 2 },
      { id: "examples", title: "Examples", level: 2 },
      { id: "mounting", title: "Mounting", level: 2 },
      { id: "guidance", title: "Guidance", level: 2 },
    ],
    demoIds: ["sonner-mounted"],
    badges: ["Client"],
    body: `<h2 id="overview">Overview</h2>

Sonner provides the shared toast surface for short-lived feedback like publishes, review requests, and background job updates.

The wrapper in \`@repo/ui\` keeps the notifications aligned to the same color tokens, radius scale, and theme mode as the rest of the system.

<h2 id="module-path">Module path</h2>

\`\`\`tsx
import { Toaster, toast } from "@repo/ui/sonner"
\`\`\`

<h2 id="examples">Examples</h2>

<Demo id="sonner-mounted" />

<h2 id="mounting">Mounting</h2>

Mount one \`<Toaster />\` near the app root, then call \`toast(...)\` from client components.

\`\`\`tsx
"use client"

import type { ReactNode } from "react"
import { Toaster } from "@repo/ui/sonner"

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Toaster position="bottom-right" />
    </>
  )
}
\`\`\`

If the app is hosted through \`@repo/docs\`, the shared \`DocsProvider\` already mounts the toaster once for you.

<h2 id="guidance">Guidance</h2>

- Mount exactly one toaster per app shell so notifications do not duplicate.
- Fire toasts from client interactions or async client flows, not from server-rendered page bodies.
- Keep copy short, specific, and outcome-focused so the message can be scanned quickly.`,
  },
};

const groupDescriptionTemplates: Record<string, string> = {
  Actions: "Action primitives for primary flows, supporting controls, and toggled states.",
  Forms: "Form inputs and field-building primitives for collecting and validating data.",
  Navigation: "Navigation patterns for moving through dense interfaces and information architecture.",
  Overlays: "Layered UI for focused tasks, contextual menus, and temporary surfaces.",
  Layout: "Layout helpers for surfaces, spacing, responsive containers, and composition.",
  Feedback: "Feedback states for messaging, progress, notifications, and loading.",
  "Data Display": "Display primitives for status, data, keyboard hints, and structured information.",
};

function defaultHeadings(hasExamples: boolean): DocHeading[] {
  return hasExamples
    ? [
        { id: "overview", title: "Overview", level: 2 },
        { id: "module-path", title: "Module path", level: 2 },
        { id: "examples", title: "Examples", level: 2 },
        { id: "guidance", title: "Guidance", level: 2 },
      ]
    : [
        { id: "overview", title: "Overview", level: 2 },
        { id: "module-path", title: "Module path", level: 2 },
        { id: "guidance", title: "Guidance", level: 2 },
      ];
}

function genericDescription(group: string, title: string) {
  const base = groupDescriptionTemplates[group];

  if (base) {
    return `${title}. ${base}`;
  }

  return `${title} exported from the shared UI package.`;
}

function genericBody(
  slug: string,
  title: string,
  description: string,
  demoIds: string[] = [],
) {
  const exampleSection =
    demoIds.length > 0
      ? `\n\n<h2 id="examples">Examples</h2>\n\n${demoIds
          .map((demoId) => `<Demo id="${demoId}" />`)
          .join("\n\n")}`
      : "";

  return `<h2 id="overview">Overview</h2>

${description}

This module lives in the shared \`@repo/ui\` package so apps can compose it without forking the primitive or restyling it from scratch.

<h2 id="module-path">Module path</h2>

\`\`\`tsx
import * as ${namespaceFromSlug(slug)}Module from "@repo/ui/${slug}"
\`\`\`
${exampleSection}

<h2 id="guidance">Guidance</h2>

- Keep product-specific data and business logic outside the shared module.
- Prefer composing the exports from \`@repo/ui/${slug}\` instead of copying them into app space.
- Reach for the shared token layer before introducing one-off visual overrides.`;
}

export const componentCatalog: ComponentDocEntry[] = componentGroupDefinitions.flatMap(
  ({ group, slugs }, groupIndex) =>
    slugs.map((slug, index) => {
      const title = titleFromSlug(slug);
      const featured = featuredComponents[slug];
      const demoIds = featured?.demoIds ?? componentDemoIds[slug] ?? [];
      const description =
        descriptionOverrides[slug] ?? genericDescription(group, title);

      return {
        slug,
        title,
        description,
        group,
        modulePath: `@repo/ui/${slug}`,
        sourcePath: `packages/ui/src/${slug}.tsx`,
        headings:
          featured?.headings ?? defaultHeadings(Boolean(demoIds.length)),
        body: featured?.body ?? genericBody(slug, title, description, demoIds),
        demos: getDemos(demoIds),
        status: featured?.status ?? "stable",
        badges: featured?.badges ?? [],
        order: groupIndex * 100 + index,
      };
    }),
);

export const componentGroups = componentGroupDefinitions.map((definition) => ({
  group: definition.group,
  description: groupDescriptionTemplates[definition.group] ?? "",
  slugs: definition.slugs.map((slug) => ["components", slug]),
}));

export function getComponentCatalogByGroup(
  entries: ComponentDocEntry[] = componentCatalog,
): ComponentCatalogGroup[] {
  return componentGroups.map((group) => ({
    group: group.group,
    description: group.description,
    slugs: group.slugs,
    entries: entries.filter((entry) => entry.group === group.group),
  }));
}

export function buildComponentDocs(entries: ComponentDocEntry[] = componentCatalog): DocPage[] {
  return entries.map((entry) => ({
    slug: ["components", entry.slug],
    href: slugToHref(["components", entry.slug]),
    title: entry.title,
    description: entry.description,
    navLabel: entry.title,
    section: "Components",
    category: entry.group,
    headings: entry.headings,
    kind: "component",
    order: entry.order ?? 0,
    status: entry.status,
    badges: entry.badges ?? [],
    body: entry.body,
    demos: entry.demos,
    modulePath: entry.modulePath,
    sourcePath: entry.sourcePath,
  }));
}
