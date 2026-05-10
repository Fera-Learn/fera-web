"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@repo/ui/collapsible";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@repo/ui/sidebar";
import { cn } from "@repo/ui/lib/utils";

import type { DocNavNode } from "../core/types";

type DocsNavTreeProps = {
  currentPath: string;
  nodes: DocNavNode[];
  depth?: number;
};

type DocsNavGroupProps = {
  currentPath: string;
  depth: number;
  hasActivePeer: boolean;
  node: Extract<DocNavNode, { type: "group" }>;
};

function hasActiveChild(node: DocNavNode, currentPath: string): boolean {
  if (node.type === "page") {
    return node.href === currentPath;
  }

  return node.children.some((child) => hasActiveChild(child, currentPath));
}

function DocsNavGroup({
  currentPath,
  depth,
  hasActivePeer,
  node,
}: DocsNavGroupProps) {
  const active = hasActiveChild(node, currentPath);
  const [open, setOpen] = useState(Boolean(node.defaultOpen || active));
  const Item = depth === 0 ? SidebarMenuItem : SidebarMenuSubItem;

  useEffect(() => {
    if (active) {
      setOpen(true);
      return;
    }

    if (hasActivePeer) {
      setOpen(false);
    }
  }, [active, hasActivePeer]);

  return (
    <Item className="space-y-1" key={node.id}>
      <Collapsible className="space-y-1" onOpenChange={setOpen} open={open}>
        <CollapsibleTrigger
          className={cn(
            "group/collapsible flex w-full items-center gap-2 border border-transparent text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-sidebar-ring/50",
            depth === 0
              ? "min-h-9 rounded-xl px-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-sidebar-foreground/56 hover:border-sidebar-border/50 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              : "min-h-8 rounded-lg px-2 text-[12px] font-medium text-sidebar-foreground/60 hover:bg-sidebar-accent/45 hover:text-sidebar-foreground",
            active &&
              "border-sidebar-primary/15 bg-sidebar-primary/8 text-sidebar-foreground",
          )}
        >
          <span className="min-w-0 flex-1 truncate">{node.title}</span>
          <ChevronRightIcon className="size-3.5 shrink-0 transition-transform group-data-[state=open]/collapsible:rotate-90" />
        </CollapsibleTrigger>
        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <DocsNavTree
            currentPath={currentPath}
            depth={depth + 1}
            nodes={node.children}
          />
        </CollapsibleContent>
      </Collapsible>
    </Item>
  );
}

export function DocsNavTree({
  currentPath,
  nodes,
  depth = 0,
}: DocsNavTreeProps) {
  const hasActiveNode = nodes.some((node) => hasActiveChild(node, currentPath));

  if (depth === 0) {
    return (
      <SidebarMenu>
        {nodes.map((node) => {
          if (node.type === "page") {
            return (
              <SidebarMenuItem key={node.href}>
                <SidebarMenuButton
                  asChild
                  className="h-10 rounded-2xl border border-transparent px-3.5 text-[15px] font-medium text-sidebar-foreground/84 hover:border-sidebar-border/60 hover:bg-sidebar-accent/70 hover:text-sidebar-foreground data-[active=true]:border-sidebar-primary/20 data-[active=true]:bg-sidebar-primary/12 data-[active=true]:text-sidebar-primary"
                  isActive={node.href === currentPath}
                >
                  <Link href={node.href} title={node.title}>
                    <span className="truncate">{node.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          }

          return (
            <DocsNavGroup
              currentPath={currentPath}
              depth={depth}
              hasActivePeer={hasActiveNode}
              key={node.id}
              node={node}
            />
          );
        })}
      </SidebarMenu>
    );
  }

  return (
    <SidebarMenuSub>
      {nodes.map((node) => {
        if (node.type === "page") {
          return (
            <SidebarMenuSubItem key={node.href}>
              <SidebarMenuSubButton
                asChild
                className="min-h-9 rounded-xl border border-transparent px-3 text-[14px] text-sidebar-foreground/76 hover:border-sidebar-border/50 hover:bg-sidebar-accent/55 hover:text-sidebar-foreground data-[active=true]:border-sidebar-primary/15 data-[active=true]:bg-sidebar-primary/10 data-[active=true]:text-sidebar-primary"
                isActive={node.href === currentPath}
              >
                <Link href={node.href} title={node.title}>
                  <span className="truncate">{node.title}</span>
                </Link>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          );
        }

        return (
          <DocsNavGroup
            currentPath={currentPath}
            depth={depth}
            hasActivePeer={hasActiveNode}
            key={node.id}
            node={node}
          />
        );
      })}
    </SidebarMenuSub>
  );
}
