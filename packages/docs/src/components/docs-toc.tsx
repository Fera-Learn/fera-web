"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "@repo/ui/lib/utils";

import type { DocHeading } from "../core/types";

type DocsTocProps = {
  headings: DocHeading[];
};

export function DocsToc({ headings }: DocsTocProps) {
  const tocRef = useRef<HTMLElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef(new Map<string, HTMLAnchorElement>());
  const [activeId, setActiveId] = useState<string>("");
  const [indicator, setIndicator] = useState<{
    height: number;
    top: number;
    visible: boolean;
  }>({
    height: 0,
    top: 0,
    visible: false,
  });

  const headingIds = useMemo(
    () => headings.map((heading) => heading.id),
    [headings],
  );
  const setLinkRef = useCallback(
    (id: string) => (node: HTMLAnchorElement | null) => {
      if (node) {
        linkRefs.current.set(id, node);
      } else {
        linkRefs.current.delete(id);
      }
    },
    [],
  );

  useEffect(() => {
    if (!headingIds.length) {
      setActiveId("");
      return;
    }

    const headingElements = headingIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (!headingElements.length) {
      setActiveId(headingIds[0] ?? "");
      return;
    }

    const scrollArea = tocRef.current?.closest("[data-slot='scroll-area']");
    const viewport = scrollArea?.querySelector<HTMLElement>(
      "[data-slot='scroll-area-viewport']",
    );
    const scrollTarget: EventTarget = viewport ?? window;

    const updateActiveHeading = () => {
      const rootTop = viewport ? viewport.getBoundingClientRect().top : 0;
      const threshold = 112;
      let nextActiveId = headingElements[0]?.id ?? headingIds[0] ?? "";

      for (const heading of headingElements) {
        const relativeTop = heading.getBoundingClientRect().top - rootTop;
        if (relativeTop <= threshold) {
          nextActiveId = heading.id;
        } else {
          break;
        }
      }

      setActiveId(nextActiveId);
    };

    const onHashChange = () => {
      const hashId = window.location.hash.replace(/^#/, "");
      if (hashId && headingIds.includes(hashId)) {
        setActiveId(hashId);
      }
    };

    updateActiveHeading();
    const raf = requestAnimationFrame(updateActiveHeading);
    scrollTarget.addEventListener("scroll", updateActiveHeading, {
      passive: true,
    });
    window.addEventListener("hashchange", onHashChange);

    return () => {
      cancelAnimationFrame(raf);
      scrollTarget.removeEventListener("scroll", updateActiveHeading);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [headingIds]);

  useLayoutEffect(() => {
    const rail = railRef.current;
    const link = linkRefs.current.get(activeId);

    if (!rail || !link) {
      setIndicator((current) =>
        current.visible ? { ...current, visible: false } : current,
      );
      return;
    }

    const railRect = rail.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();

    const nextTop = linkRect.top - railRect.top;
    const nextHeight = linkRect.height;

    setIndicator({
      height: nextHeight,
      top: nextTop,
      visible: true,
    });
  }, [activeId, headingIds]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <aside className="sticky top-8" ref={tocRef}>
      <div className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          On This Page
        </p>
        <div className="relative border-l border-border/70 pl-4" ref={railRef}>
          <span
            aria-hidden
            className="pointer-events-none absolute top-0 left-[-1px] w-[2px] rounded-full bg-primary transition-[transform,height,opacity] duration-300 ease-out"
            style={{
              height: indicator.height,
              opacity: indicator.visible ? 1 : 0,
              transform: `translateY(${indicator.top}px)`,
            }}
          />
          {headings.map((heading) => (
            <Link
              className={cn(
                "block py-2 pl-4 text-sm transition-[color,opacity] duration-300 ease-out",
                heading.id === activeId
                  ? "font-medium text-foreground opacity-100"
                  : "text-muted-foreground opacity-72 hover:text-foreground hover:opacity-100",
              )}
              href={`#${heading.id}`}
              key={heading.id}
              onClick={() => setActiveId(heading.id)}
              ref={setLinkRef(heading.id)}
            >
              <span
                className={
                  heading.level === 3 ? "ml-4 text-[0.95em]" : undefined
                }
              >
                {heading.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
