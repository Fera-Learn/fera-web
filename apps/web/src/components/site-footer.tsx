import Image from "next/image";
import Link from "next/link";

import { Button } from "@repo/ui/button";

import { brandAssets } from "@/lib/brand-assets";
import { productLinks } from "@/lib/marketing-data";

const siteLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/question-bank", label: "Question Bank" },
  { href: "/exam-papers", label: "Exam Papers" },
  { href: "/about", label: "About" },
];

const productNavigation = [
  { href: productLinks.root, label: "Start Learning" },
  { href: productLinks.level1Physics, label: "Level 1 Physics" },
  { href: productLinks.questionBank, label: "Practice Questions" },
  { href: productLinks.examPapers, label: "Exam Papers" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-subtle-surface/70 text-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <Link className="inline-flex items-center gap-3" href="/">
            <span className="grid size-9 place-items-center overflow-hidden rounded-lg border border-border bg-background">
              <Image
                alt=""
                className="size-full object-cover"
                height={36}
                src={brandAssets.roundedIcon}
                width={36}
              />
            </span>
            <span className="text-base font-semibold tracking-tight">
              Fera Academy
            </span>
          </Link>
          <p className="max-w-md text-sm leading-6 text-foreground/75">
            Fera Academy helps university students study physics and maths through structured courses, targeted practice questions, and exam preparation.
          </p>
          <Button asChild variant="outline">
            <Link href={productLinks.root}>Open courses.fera.academy</Link>
          </Button>
        </div>

        <FooterLinkGroup links={siteLinks} title="Site" />
        <FooterLinkGroup links={productNavigation} title="Learning app" />
      </div>
      <div className="border-t border-border/70 px-4 py-5 text-center text-xs text-foreground/70">
        Course content and practice tools live at courses.fera.academy.
      </div>
    </footer>
  );
}

function FooterLinkGroup({
  links,
  title,
}: {
  links: Array<{ href: string; label: string }>;
  title: string;
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold">{title}</h2>
      <ul className="mt-4 grid gap-3 text-sm text-foreground/75">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="transition-colors hover:text-foreground" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
