import { evaluate } from "@mdx-js/mdx";
import Link from "next/link";
import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";

import { Card, CardContent } from "@repo/ui/card";
import { CartesianGrid, Curve, Annotation, DashedLine, Point } from "@repo/ui/diagrams";

import type { DocPage } from "../core/types";
import {
  DocsEquation,
  DocsNotation,
  DocsPhysicsDerivation,
  DocsPhysicsExamples,
  DocsPhysicsAside,
} from "../components/docs-equation";
import { DocsExampleBlock } from "../components/docs-example-block";
import { DocsProse } from "../components/docs-prose";
import { prepareMdxBody } from "./prepare-mdx-body";

type DemoProps = {
  id: string;
};

type RenderDocBodyOptions = {
  suppressExamplesSection?: boolean;
};

export async function renderDocBody(
  page: DocPage,
  options: RenderDocBodyOptions = {},
) {
  const { suppressExamplesSection = false } = options;

  const { default: Content } = await evaluate(prepareMdxBody(page.body), {
    ...runtime,
    format: "mdx",
    remarkPlugins: [remarkGfm],
  });

  const components = {
    a: ({
      href,
      children,
      ...props
    }: AnchorHTMLAttributes<HTMLAnchorElement> & { children?: ReactNode }) => {
      if (!href) {
        return <a {...props}>{children}</a>;
      }

      if (href.startsWith("/")) {
        return (
          <Link className={props.className} href={href}>
            {children}
          </Link>
        );
      }

      return (
        <a href={href} rel="noreferrer" target="_blank" {...props}>
          {children}
        </a>
      );
    },
    Equation: DocsEquation,
    Notation: DocsNotation,
    CartesianGrid,
    Curve,
    Annotation,
    DashedLine,
    Point,
    PhysicsAside: DocsPhysicsAside,
    PhysicsDerivation: DocsPhysicsDerivation,
    PhysicsExamples: DocsPhysicsExamples,
    h2: ({ id, children, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
      if (suppressExamplesSection && id === "examples") {
        return null;
      }

      return (
        <h2 id={id} {...props}>
          {children}
        </h2>
      );
    },
    Demo: ({ id }: DemoProps) => {
      if (suppressExamplesSection) {
        return null;
      }

      const demo = page.demos.find((entry) => entry.id === id);

      if (!demo) {
        return (
          <Card className="border-dashed">
            <CardContent className="text-sm text-muted-foreground">
              Missing demo for <code>{id}</code>.
            </CardContent>
          </Card>
        );
      }

      const ExampleComponent = demo.component;

      return (
        <DocsExampleBlock
          title={demo.title}
          description={demo.description}
          code={demo.code}
        >
          <ExampleComponent />
        </DocsExampleBlock>
      );
    },
  };

  return (
    <DocsProse>
      <Content components={components} />
    </DocsProse>
  );
}
