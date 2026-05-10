import Image from "next/image";
import Link from "next/link";

import { Button } from "@repo/ui/button";

import { brandAssets } from "@/lib/brand-assets";
import { productLinks } from "@/lib/marketing-data";

const navItems = [
  { href: "/courses", label: "Courses" },
  { href: "/question-bank", label: "Question Bank" },
  { href: "/exam-papers", label: "Exam Papers" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link className="flex min-w-0 items-center gap-3" href="/">
          <span className="grid size-9 shrink-0 place-items-center overflow-hidden rounded-lg border border-border bg-subtle-surface">
            <Image
              alt=""
              className="size-full object-cover"
              height={36}
              priority
              src={brandAssets.roundedIcon}
              width={36}
            />
          </span>
          <span className="min-w-0 leading-none">
            <span className="block truncate text-sm font-semibold tracking-tight">
              Fera Academy
            </span>
            <span className="block truncate text-xs text-muted-foreground">
              Physics and maths study
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild>
            <Link href={productLinks.root}>Start learning</Link>
          </Button>
        </div>

        <details className="group relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium marker:hidden focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-64 rounded-xl border border-border bg-popover p-3 text-popover-foreground shadow-2xl">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-2 w-full">
                <Link href={productLinks.root}>Start learning</Link>
              </Button>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
