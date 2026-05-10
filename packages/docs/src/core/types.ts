import type { ComponentType } from "react";

export type DocKind = "editorial" | "component";

export type DocHeading = {
  id: string;
  title: string;
  level: 2 | 3;
};

export type DocSectionMeta = {
  id: string;
  title: string;
  description?: string;
  slugs?: string[][];
  children?: DocSectionMeta[];
  defaultOpen?: boolean;
};

export type DocNavNode =
  | {
      id: string;
      type: "group";
      title: string;
      description?: string;
      defaultOpen?: boolean;
      children: DocNavNode[];
    }
  | {
      id: string;
      type: "page";
      title: string;
      description?: string;
      href: string;
      slug: string[];
    };

export type DocSearchEntry = {
  title: string;
  description: string;
  href: string;
  slug: string[];
  headings: string[];
  category: string;
  kind: DocKind;
};

export type InlineDemoEntry = {
  id: string;
  title: string;
  description?: string;
  code: string;
  component: ComponentType;
};

export type ComponentDocEntry = {
  slug: string;
  title: string;
  description: string;
  group: string;
  modulePath: string;
  sourcePath: string;
  headings: DocHeading[];
  body: string;
  demos: InlineDemoEntry[];
  status?: "stable" | "beta";
  badges?: string[];
  order?: number;
};

export type DocPageMeta = {
  slug: string[];
  href: string;
  title: string;
  description: string;
  navLabel: string;
  section: string;
  category: string;
  headings: DocHeading[];
  kind: DocKind;
  order: number;
  status?: "stable" | "beta";
  badges: string[];
};

export type DocPage = DocPageMeta & {
  body: string;
  demos: InlineDemoEntry[];
  modulePath?: string;
  sourcePath?: string;
};

export type DocLink = {
  title: string;
  href: string;
  description: string;
};

export type DocPageNeighbors = {
  previous?: DocLink;
  next?: DocLink;
};
