"use client";

import { type ReactNode, useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { PanelRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@repo/ui/button";
import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarTrigger,
} from "@repo/ui/sidebar";

import type { DocNavNode, DocSearchEntry } from "../core/types";
import { DocsNavTree } from "./docs-nav-tree";
import { DocsSearchDialog } from "./docs-search-dialog";
import { ThemeToggle } from "./theme-toggle";

export type DocsSidebarBrand = {
  title: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
};

type DocsSidebarProps = {
  currentPath: string;
  tree: DocNavNode[];
  brand?: DocsSidebarBrand;
  footer?: ReactNode;
  hasToc?: boolean;
  onToggleToc?: () => void;
  searchIndex?: DocSearchEntry[];
  showFooterControls?: boolean;
  showSidebarTrigger?: boolean;
  showSearch?: boolean;
  tocOpen?: boolean;
  topContent?: ReactNode;
};

const SIDEBAR_SCROLL_STORAGE_KEY = "fera-docs-sidebar-scroll-top";

const DEFAULT_BRAND: DocsSidebarBrand = {
  title: "Fera UI",
  href: "/",
  imageSrc: "/icon.png",
  imageAlt: "Fera UI",
};

function getSavedSidebarScrollTop() {
  try {
    const saved = sessionStorage.getItem(SIDEBAR_SCROLL_STORAGE_KEY);
    if (saved === null) {
      return null;
    }

    const nextScrollTop = Number(saved);
    return Number.isFinite(nextScrollTop) ? nextScrollTop : null;
  } catch {
    return null;
  }
}

function persistSidebarScrollTop(scrollTop: number) {
  try {
    sessionStorage.setItem(SIDEBAR_SCROLL_STORAGE_KEY, String(scrollTop));
  } catch {
    // Ignore storage errors and keep default in-memory behavior.
  }
}

export function DocsSidebar({
  currentPath,
  tree,
  brand,
  footer,
  hasToc,
  onToggleToc,
  searchIndex,
  showFooterControls,
  showSidebarTrigger,
  showSearch,
  tocOpen,
  topContent,
}: DocsSidebarProps) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const resolvedBrand = {
    ...DEFAULT_BRAND,
    ...brand,
  };
  const showSearchInput = Boolean(showSearch && searchIndex && searchIndex.length > 0);
  const showOnPageControl = Boolean(hasToc && onToggleToc);
  const showFooter = Boolean(showFooterControls || footer);

  const restoreScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) {
      return;
    }

    const saved = getSavedSidebarScrollTop();
    if (saved === null) {
      return;
    }

    container.scrollTop = saved;
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) {
      return;
    }

    const handleScroll = () => {
      persistSidebarScrollTop(container.scrollTop);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      persistSidebarScrollTop(container.scrollTop);
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    restoreScroll();
    const raf = requestAnimationFrame(restoreScroll);

    return () => {
      cancelAnimationFrame(raf);
    };
  }, [currentPath, restoreScroll]);

  return (
    <>
      <SidebarHeader className="bg-sidebar px-4 py-3">
        <div className="flex items-center gap-2">
          <Link
            className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl transition-colors hover:text-sidebar-primary"
            href={resolvedBrand.href ?? "/"}
          >
            {resolvedBrand.imageSrc ? (
              <Image
                alt={resolvedBrand.imageAlt ?? resolvedBrand.title}
                className="size-7 rounded-xl border border-sidebar-border/70 bg-sidebar object-cover"
                height={32}
                src={resolvedBrand.imageSrc}
                width={32}
              />
            ) : null}
            <span className="truncate text-sm font-semibold text-sidebar-foreground">
              {resolvedBrand.title}
            </span>
          </Link>
          {showSidebarTrigger ? (
            <SidebarTrigger className="rounded-xl bg-sidebar/70 hover:bg-sidebar-accent/60" />
          ) : null}
        </div>
      </SidebarHeader>
      <SidebarContent className="min-h-0 overflow-hidden bg-sidebar">
        {showSearchInput || topContent ? (
          <div className="bg-sidebar px-3 pb-3 md:px-4">
            {showSearchInput ? (
              <DocsSearchDialog
                className="h-10 min-w-0 w-full justify-between rounded-xl border-sidebar-border/70 bg-sidebar-accent/25 px-3 text-sidebar-foreground hover:bg-sidebar-accent/42"
                label="Search"
                searchIndex={searchIndex ?? []}
              />
            ) : null}
            {topContent ? (
              <div className={showSearchInput ? "pt-2" : undefined}>
                {topContent}
              </div>
            ) : null}
          </div>
        ) : null}
        <div
          className="min-h-0 flex-1 overflow-y-auto"
          ref={scrollContainerRef}
        >
          <div className="space-y-6 px-3 pb-8 pt-5 md:px-4 md:pt-6">
            {tree.map((node) => {
              if (node.type === "page") {
                return (
                  <SidebarGroup className="p-0" key={node.href}>
                    <DocsNavTree currentPath={currentPath} nodes={[node]} />
                  </SidebarGroup>
                );
              }

              return (
                <SidebarGroup className="gap-2 p-0" key={node.id}>
                  <SidebarGroupLabel>{node.title}</SidebarGroupLabel>
                  <DocsNavTree
                    currentPath={currentPath}
                    nodes={node.children}
                  />
                </SidebarGroup>
              );
            })}
          </div>
        </div>
        {showFooter ? (
          <SidebarFooter className="gap-3 bg-sidebar px-4 py-3 text-sidebar-foreground/80">
            {showFooterControls ? (
              <div className="flex justify-end w-full gap-2">
                {showOnPageControl ? (
                  <Button
                    aria-label={
                      tocOpen ? "Hide on this page" : "Show on this page"
                    }
                    className="h-8 w-8 rounded-lg border-sidebar-border/70 bg-sidebar-accent/24 px-2.5 text-xs hover:bg-sidebar-accent/42"
                    onClick={onToggleToc}
                    size="sm"
                    variant="outline"
                  >
                    <PanelRightIcon className="size-3.5" />
                  </Button>
                ) : null}
                <ThemeToggle />
              </div>
            ) : null}
            {footer ? <div>{footer}</div> : null}
          </SidebarFooter>
        ) : null}
      </SidebarContent>
    </>
  );
}
