"use client";

import Link from "next/link";
import {
  startTransition,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ArrowRightIcon, SearchIcon } from "lucide-react";

import { Badge } from "@repo/ui/badge";
import { Button } from "@repo/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@repo/ui/dialog";
import { Input } from "@repo/ui/input";
import { Kbd, KbdGroup } from "@repo/ui/kbd";
import { ScrollArea } from "@repo/ui/scroll-area";
import { cn } from "@repo/ui/lib/utils";

import type { DocSearchEntry } from "../core/types";

const MAX_RESULTS = 10;

function scoreEntry(entry: DocSearchEntry, query: string) {
  if (!query) {
    return 1;
  }

  const value = query.toLowerCase();
  let score = 0;

  if (entry.title.toLowerCase().includes(value)) {
    score += 6;
  }

  if (entry.category.toLowerCase().includes(value)) {
    score += 3;
  }

  if (entry.description.toLowerCase().includes(value)) {
    score += 2;
  }

  if (entry.headings.some((heading) => heading.toLowerCase().includes(value))) {
    score += 1;
  }

  return score;
}

function filterEntries(index: DocSearchEntry[], query: string) {
  return index
    .map((entry) => ({
      entry,
      score: scoreEntry(entry, query),
    }))
    .filter((item) => item.score > 0)
    .sort(
      (left, right) =>
        right.score - left.score ||
        left.entry.title.localeCompare(right.entry.title),
    )
    .slice(0, MAX_RESULTS)
    .map((item) => item.entry);
}

type DocsSearchDialogProps = {
  searchIndex: DocSearchEntry[];
  className?: string;
  label?: string;
  showShortcut?: boolean;
  trigger?: "default" | "icon";
};

export function DocsSearchDialog({
  searchIndex,
  className,
  label = "Search docs",
  showShortcut = true,
  trigger = "default",
}: DocsSearchDialogProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [results, setResults] = useState<DocSearchEntry[]>(() =>
    searchIndex.slice(0, MAX_RESULTS),
  );

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };

    window.addEventListener("keydown", handleShortcut);

    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  useEffect(() => {
    startTransition(() => {
      setResults(filterEntries(searchIndex, deferredQuery));
    });
  }, [deferredQuery, searchIndex]);

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  const emptyState = useMemo(
    () =>
      deferredQuery
        ? "No docs matched that search yet."
        : "Start typing to search guides, components, and section headings.",
    [deferredQuery],
  );

  return (
    <>
      <Button
        className={cn(
          trigger === "icon"
            ? "rounded-xl bg-background/70 hover:bg-muted"
            : "min-w-[10rem] justify-between gap-3",
          className,
        )}
        onClick={() => setOpen(true)}
        size={trigger === "icon" ? "icon-sm" : "sm"}
        variant={trigger === "icon" ? "ghost" : "outline"}
      >
        {trigger === "icon" ? (
          <>
            <SearchIcon className="size-4 text-muted-foreground hover:text-foreground" />
            <span className="sr-only">{label}</span>
          </>
        ) : (
          <>
            <span className="flex items-center gap-2 text-muted-foreground">
              <SearchIcon className="size-4" />
              <span className="hidden sm:inline">{label}</span>
            </span>
            {showShortcut ? (
              <KbdGroup className="hidden sm:inline-flex">
                <Kbd>Ctrl</Kbd>
                <Kbd>K</Kbd>
              </KbdGroup>
            ) : null}
          </>
        )}
      </Button>
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogContent
          className="overflow-hidden p-0 sm:max-w-2xl"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">Search docs</DialogTitle>
          <DialogDescription className="sr-only">
            Search component docs, guides, and section headings.
          </DialogDescription>
          <div className="border-b border-border/70 p-4">
            <Input
              autoFocus
              className="h-11 bg-background"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title, description, or section heading..."
              value={query}
            />
          </div>
          <ScrollArea className="max-h-[60vh]">
            <div className="space-y-2 p-3">
              {results.length > 0 ? (
                results.map((entry) => (
                  <DialogClose asChild key={entry.href}>
                    <Link
                      className="flex items-start justify-between gap-4 rounded-2xl border border-transparent px-4 py-3 transition-colors hover:border-border hover:bg-muted/70"
                      href={entry.href}
                    >
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-medium text-foreground">
                            {entry.title}
                          </span>
                          <Badge variant="outline">{entry.category}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {entry.description}
                        </p>
                      </div>
                      <ArrowRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                    </Link>
                  </DialogClose>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-border/80 px-4 py-6 text-sm text-muted-foreground">
                  {emptyState}
                </div>
              )}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
