import {
  DocsAppShell,
  DocsArticle,
  getPrevNextDoc,
  renderDocBody,
} from "@repo/docs";
import { notFound } from "next/navigation";

import { DocsPageEnhancements } from "@/components/docs/page-enhancements";
import { docsTree, resolveDocPage, searchIndex } from "@/lib/docs/pages";
import { docsSidebarConfig } from "@/lib/docs/shell";

type RenderDocsPageProps = {
  slug: string[];
};

export async function RenderDocsPage({ slug }: RenderDocsPageProps) {
  const page = resolveDocPage(slug);

  if (!page) {
    notFound();
  }

  const body = await renderDocBody(page, {
    suppressExamplesSection: page.demos.length > 0,
  });
  const neighbors = getPrevNextDoc(docsTree, page.href);

  return (
    <DocsAppShell
      currentPath={page.href}
      headings={page.headings}
      searchIndex={searchIndex}
      sidebar={docsSidebarConfig}
      tree={docsTree}
    >
      <DocsArticle
        afterContent={<DocsPageEnhancements page={page} placement="after" />}
        beforeContent={<DocsPageEnhancements page={page} placement="before" />}
        neighbors={neighbors}
        page={page}
      >
        {body}
      </DocsArticle>
    </DocsAppShell>
  );
}
