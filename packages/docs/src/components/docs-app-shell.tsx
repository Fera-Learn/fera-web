"use client";

import { useState, type ReactNode } from "react";

import {
  Sidebar,
  SidebarInset,
  SidebarRail,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@repo/ui/sidebar";
import { ScrollArea } from "@repo/ui/scroll-area";

import type { DocHeading, DocNavNode, DocSearchEntry } from "../core/types";
import { DocsHeader } from "./docs-header";
import { DocsSearchDialog } from "./docs-search-dialog";
import type { DocsSidebarBrand } from "./docs-sidebar";
import { DocsSidebar } from "./docs-sidebar";
import { DocsToc } from "./docs-toc";

export type DocsShellSidebarConfig = {
  brand?: DocsSidebarBrand;
  footer?: ReactNode;
  showFooterControls?: boolean;
  showSearch?: boolean;
  topContent?: ReactNode;
};

export type DocsShellHeaderConfig = {
  enabled?: boolean;
};

export type DocsShellContentLayout = "article" | "workspace";

export type DocsAppShellProps = {
  children: ReactNode;
  contentLayout?: DocsShellContentLayout;
  currentPath: string;
  header?: DocsShellHeaderConfig;
  headings: DocHeading[];
  searchIndex: DocSearchEntry[];
  tree: DocNavNode[];
  sidebar?: DocsShellSidebarConfig;
};

type DocsFloatingControlsProps = {
  enabled: boolean;
  searchIndex: DocSearchEntry[];
};

function DocsFloatingControls({
  enabled,
  searchIndex,
}: DocsFloatingControlsProps) {
  const { open } = useSidebar();

  if (!enabled || open) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed left-4 top-6 z-50 hidden md:block">
      <div className="pointer-events-auto flex items-center rounded-lg p-[1px] border border-border/50 bg-background/72 shadow-lg shadow-black/10 backdrop-blur-xl dark:shadow-black/20">
        <SidebarTrigger className="rounded-md hover:bg-muted" />
        <DocsSearchDialog
          className="rounded-md hover:bg-muted"
          label="Search docs"
          searchIndex={searchIndex}
          trigger="icon"
        />
      </div>
    </div>
  );
}

type DocsAppShellBodyProps = {
  children: ReactNode;
  hasToc: boolean;
  headings: DocHeading[];
  contentLayout: DocsShellContentLayout;
  onToggleToc: () => void;
  searchIndex: DocSearchEntry[];
  showHeader: boolean;
  showToc: boolean;
  tocOpen: boolean;
};

function DocsAppShellBody({
  children,
  hasToc,
  headings,
  contentLayout,
  onToggleToc,
  searchIndex,
  showHeader,
  showToc,
  tocOpen,
}: DocsAppShellBodyProps) {
  const { open } = useSidebar();
  const isWorkspaceLayout = contentLayout === "workspace";
  const content = (
    <div
      className={
        isWorkspaceLayout
          ? "flex h-full min-h-0 px-3 pb-3 pt-3 lg:px-4"
          : "px-4 pb-12 pt-6 lg:px-8"
      }
    >
      <div
        className={[
          isWorkspaceLayout
            ? "flex h-full min-h-0 w-full"
            : "mx-auto grid max-w-7xl gap-8",
          showToc && !isWorkspaceLayout
            ? "xl:grid-cols-[minmax(0,1fr)_240px]"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div
          className={
            isWorkspaceLayout
              ? "h-full min-h-0 min-w-0 flex-1"
              : "min-w-0 mt-12"
          }
        >
          {children}
        </div>
        <div className={showToc ? "hidden xl:block" : "hidden"}>
          <DocsToc headings={headings} />
        </div>
      </div>
    </div>
  );

  return (
    <SidebarInset className="h-full min-h-0 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(77,47,30,0.08),_transparent_40%),linear-gradient(180deg,_rgba(255,255,255,0.18),_transparent_32%)] dark:bg-[radial-gradient(circle_at_top,_rgba(212,180,131,0.12),_transparent_40%),linear-gradient(180deg,_rgba(0,0,0,0.16),_transparent_32%)]">
      {showHeader ? (
        <DocsHeader
          hasToc={hasToc}
          onToggleToc={onToggleToc}
          searchIndex={searchIndex}
          tocOpen={tocOpen}
        />
      ) : (
        <div className="sticky top-0 z-40 flex h-14 items-center bg-background/78 px-4 backdrop-blur-xl md:hidden">
          <SidebarTrigger className="rounded-xl border border-border/70 bg-background/60 hover:bg-muted" />
          <DocsSearchDialog
            className="ml-2 rounded-xl border-border/70 bg-background/60 hover:bg-muted"
            label="Search docs"
            searchIndex={searchIndex}
            trigger="icon"
          />
        </div>
      )}
      {isWorkspaceLayout ? (
        <div
          className={`min-h-0 flex-1 overflow-hidden transition-[margin] duration-200 ${open ? "md:ml-4" : "md:ml-14"}`}
        >
          {content}
        </div>
      ) : (
        <ScrollArea
          className={`min-h-0 flex-1 transition-[margin] duration-200 ${open ? "md:ml-4" : "md:ml-14"}`}
        >
          {content}
        </ScrollArea>
      )}
    </SidebarInset>
  );
}

export function DocsAppShell({
  children,
  contentLayout = "article",
  currentPath,
  header,
  headings,
  searchIndex,
  sidebar,
  tree,
}: DocsAppShellProps) {
  const [tocOpen, setTocOpen] = useState(true);
  const hasToc = headings.length > 0;
  const showToc = hasToc && tocOpen;
  const showHeader = header?.enabled ?? true;

  return (
    <SidebarProvider className="h-svh overflow-hidden" defaultOpen>
      <Sidebar
        className="border-r-0 bg-sidebar"
        collapsible="offcanvas"
        variant="sidebar"
      >
        <DocsSidebar
          brand={sidebar?.brand}
          currentPath={currentPath}
          footer={sidebar?.footer}
          hasToc={hasToc}
          onToggleToc={() => setTocOpen((current) => !current)}
          searchIndex={searchIndex}
          showFooterControls={sidebar?.showFooterControls}
          showSidebarTrigger={!showHeader}
          showSearch={sidebar?.showSearch}
          tocOpen={tocOpen}
          topContent={sidebar?.topContent}
          tree={tree}
        />
        <SidebarRail />
      </Sidebar>
      <DocsAppShellBody
        contentLayout={contentLayout}
        hasToc={hasToc}
        headings={headings}
        onToggleToc={() => setTocOpen((current) => !current)}
        searchIndex={searchIndex}
        showHeader={showHeader}
        showToc={showToc}
        tocOpen={tocOpen}
      >
        {children}
      </DocsAppShellBody>
      <DocsFloatingControls enabled={!showHeader} searchIndex={searchIndex} />
    </SidebarProvider>
  );
}
