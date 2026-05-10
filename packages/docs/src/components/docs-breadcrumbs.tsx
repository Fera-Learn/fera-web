import { Fragment } from "react";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@repo/ui/breadcrumb";

export type DocsBreadcrumbItem = {
  title: string;
  href?: string;
};

type DocsBreadcrumbsProps = {
  items: DocsBreadcrumbItem[];
  currentTitle: string;
};

export function DocsBreadcrumbs({
  items,
  currentTitle,
}: DocsBreadcrumbsProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="gap-2.5 leading-none">
        {items.map((item) => (
          <Fragment key={`${item.title}-${item.href ?? "static"}`}>
            <BreadcrumbItem className="min-h-5">
              {item.href ? (
                <BreadcrumbLink asChild className="inline-flex items-center leading-none">
                  <Link href={item.href}>{item.title}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className="inline-flex items-center leading-none">
                  {item.title}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
            <BreadcrumbSeparator className="mx-0.5" />
          </Fragment>
        ))}
        <BreadcrumbItem className="min-h-5">
          <BreadcrumbPage className="inline-flex items-center leading-none">
            {currentTitle}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
