import type { DocsShellSidebarConfig } from "@repo/docs";
import Link from "next/link";

// App-level docs chrome configuration for sidebar branding and footer content.
export const docsSidebarConfig: DocsShellSidebarConfig = {
  brand: {
    title: "Fera UI",
    href: "/",
    imageSrc: "/icon.png",
    imageAlt: "Fera UI icon",
  },
  footer: (
    <div className="space-y-1">
      <p className="text-xs text-sidebar-foreground/65">
        Shared docs for @repo/ui
      </p>
      <p className="text-xs text-sidebar-foreground/65">
        Built with{" "}
        <Link
          className="text-sidebar-primary underline decoration-sidebar-primary/50 underline-offset-4 transition-colors hover:text-sidebar-primary/80"
          href="https://ui.shadcn.com"
          rel="noreferrer"
          target="_blank"
        >
          shadcn/ui
        </Link>{" "}
        primitives
      </p>
      <Link
        className="text-xs font-medium text-sidebar-primary transition-colors hover:text-sidebar-primary/80"
        href="/installation"
      >
        View setup guide
      </Link>
    </div>
  ),
};
