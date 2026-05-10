import type { Metadata } from "next";

import { RenderDocsPage } from "@/lib/render-doc-page";
import { docsPages, resolveDocPage } from "@/lib/docs/pages";

type DocsRouteProps = {
  params: Promise<{ slug?: string[] }>;
};

export async function generateMetadata({
  params,
}: DocsRouteProps): Promise<Metadata> {
  const { slug = [] } = await params;
  const page = resolveDocPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} | Fera UI`,
    description: page.description,
  };
}

export async function generateStaticParams() {
  return docsPages
    .filter((page) => page.slug.length > 0)
    .map((page) => ({ slug: page.slug }));
}

export default async function DocsRoutePage({ params }: DocsRouteProps) {
  const { slug = [] } = await params;

  return <RenderDocsPage slug={slug} />;
}
