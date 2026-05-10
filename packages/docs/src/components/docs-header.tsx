"use client";

import { PanelRightIcon } from "lucide-react";

import { Button } from "@repo/ui/button";
import { SidebarTrigger } from "@repo/ui/sidebar";

import type { DocSearchEntry } from "../core/types";
import { DocsSearchDialog } from "./docs-search-dialog";
import { ThemeToggle } from "./theme-toggle";

type DocsHeaderProps = {
  hasToc: boolean;
  onToggleToc: () => void;
  searchIndex: DocSearchEntry[];
  tocOpen: boolean;
};

export function DocsHeader({
  hasToc,
  onToggleToc,
  searchIndex,
  tocOpen,
}: DocsHeaderProps) {
  return (
    <header className="z-40 shrink-0 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 lg:px-8">
        <SidebarTrigger className="rounded-xl border border-border/70 bg-background/60 hover:bg-muted" />
        <div className="ml-auto flex items-center gap-2">
          <DocsSearchDialog searchIndex={searchIndex} />
          <ThemeToggle />
          {hasToc ? (
            <Button
              aria-label={tocOpen ? "Hide on this page" : "Show on this page"}
              className="hidden xl:inline-flex"
              onClick={onToggleToc}
              size="icon-sm"
              variant="outline"
            >
              <PanelRightIcon />
              <span className="sr-only">
                {tocOpen ? "Hide on this page" : "Show on this page"}
              </span>
            </Button>
          ) : null}
        </div>
      </div>
    </header>
  );
}
