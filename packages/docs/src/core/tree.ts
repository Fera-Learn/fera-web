import type {
  DocNavNode,
  DocPage,
  DocPageNeighbors,
  DocSearchEntry,
  DocSectionMeta,
} from "./types";
import { slugKey } from "./utils";

function buildNode(
  section: DocSectionMeta,
  pagesBySlug: Map<string, DocPage>,
): DocNavNode | null {
  const children: DocNavNode[] = [];

  for (const slug of section.slugs ?? []) {
    const page = pagesBySlug.get(slugKey(slug));

    if (!page) {
      continue;
    }

    children.push({
      id: page.href,
      type: "page",
      title: page.navLabel,
      description: page.description,
      href: page.href,
      slug: page.slug,
    });
  }

  for (const child of section.children ?? []) {
    const node = buildNode(child, pagesBySlug);

    if (node) {
      children.push(node);
    }
  }

  if (children.length === 0) {
    return null;
  }

  return {
    id: section.id,
    type: "group",
    title: section.title,
    description: section.description,
    defaultOpen: section.defaultOpen,
    children,
  };
}

export function createDocsTree(
  sections: DocSectionMeta[],
  pages: DocPage[],
): DocNavNode[] {
  const pagesBySlug = new Map(pages.map((page) => [slugKey(page.slug), page]));

  return sections
    .map((section) => buildNode(section, pagesBySlug))
    .filter((node): node is DocNavNode => node !== null);
}

export function flattenDocsTree(nodes: DocNavNode[]) {
  const pages: Extract<DocNavNode, { type: "page" }>[] = [];

  const visit = (node: DocNavNode) => {
    if (node.type === "page") {
      pages.push(node);
      return;
    }

    for (const child of node.children) {
      visit(child);
    }
  };

  for (const node of nodes) {
    visit(node);
  }

  return pages;
}

export function getDocBySlug(pages: DocPage[], slug: string[]) {
  const key = slugKey(slug);

  return pages.find((page) => slugKey(page.slug) === key);
}

export function getPrevNextDoc(
  tree: DocNavNode[],
  currentHref: string,
): DocPageNeighbors {
  const pages = flattenDocsTree(tree);
  const currentIndex = pages.findIndex((page) => page.href === currentHref);

  if (currentIndex === -1) {
    return {};
  }

  const previous = pages[currentIndex - 1];
  const next = pages[currentIndex + 1];

  return {
    previous: previous
      ? {
          title: previous.title,
          href: previous.href,
          description: previous.description ?? "",
        }
      : undefined,
    next: next
      ? {
          title: next.title,
          href: next.href,
          description: next.description ?? "",
        }
      : undefined,
  };
}

export function buildSearchIndex(pages: DocPage[]): DocSearchEntry[] {
  return pages.map((page) => ({
    title: page.title,
    description: page.description,
    href: page.href,
    slug: page.slug,
    headings: page.headings.map((heading) => heading.title),
    category: page.category,
    kind: page.kind,
  }));
}
