import { buildSearchIndex, createDocsTree, getDocBySlug } from "@repo/docs";
import type { DocSectionMeta } from "@repo/docs";

import { buildComponentDocs, componentGroups } from "./components";
import { editorialDocs } from "./editorial-pages";

export const componentDocs = buildComponentDocs();

export const docsPages = [...editorialDocs, ...componentDocs];

export const docsSections: DocSectionMeta[] = [
  {
    id: "start-here",
    title: "Start Here",
    defaultOpen: true,
    slugs: [[], ["installation"], ["theming"], ["patterns"]],
  },
  {
    id: "components",
    title: "Components",
    defaultOpen: true,
    slugs: [["components"]],
    children: componentGroups.map(({ group, slugs }) => ({
      id: group.toLowerCase().replace(/\s+/g, "-"),
      title: group,
      slugs,
    })),
  },
];

export const docsTree = createDocsTree(docsSections, docsPages);

export const searchIndex = buildSearchIndex(docsPages);

export function resolveDocPage(slug: string[]) {
  return getDocBySlug(docsPages, slug);
}
