import { notFound } from "next/navigation";

import { EquationSheetPrintDocument } from "@/components/academy/equation-sheet";
import {
  level1PhysicsEquationSheet,
  level1PhysicsEquationSheetFilename,
  level1PhysicsEquationSheetHref,
} from "@/lib/docs/level-1-physics/equation-sheet";
import type { Level1PhysicsEquationSheet } from "@/lib/docs/level-1-physics/equation-sheet";
import {
  level1MathIPhysicsEquationSheet,
  level1MathIPhysicsEquationSheetFilename,
  level1MathIPhysicsEquationSheetHref,
} from "@/lib/docs/level-1-math-i-physics/equation-sheet";

type EquationSheetPrintPageData = {
  backHref: string;
  filename: string;
  sheet: Level1PhysicsEquationSheet;
  title: string;
};

const equationSheetPrintConfigs = {
  "level-1-math-i-physics": {
    backHref: level1MathIPhysicsEquationSheetHref,
    filename: level1MathIPhysicsEquationSheetFilename,
    sheet: level1MathIPhysicsEquationSheet,
  },
  "level-1-physics": {
    backHref: level1PhysicsEquationSheetHref,
    filename: level1PhysicsEquationSheetFilename,
    sheet: level1PhysicsEquationSheet,
  },
};

export function getEquationSheetPrintPageData(
  slug: string[],
): EquationSheetPrintPageData | null {
  const [courseSlug, equationSheetSlug, printSlug] = slug;

  if (slug.length !== 3 || equationSheetSlug !== "equation-sheet" || printSlug !== "print") {
    return null;
  }

  const config =
    equationSheetPrintConfigs[
      courseSlug as keyof typeof equationSheetPrintConfigs
    ];

  if (!config) {
    return null;
  }

  return {
    backHref: config.backHref,
    filename: config.filename,
    sheet: config.sheet,
    title: config.sheet.title,
  };
}

export function RenderEquationSheetPrintPage({ slug }: { slug: string[] }) {
  const data = getEquationSheetPrintPageData(slug);

  if (!data) {
    notFound();
  }

  return (
    <EquationSheetPrintDocument
      backHref={data.backHref}
      filename={data.filename}
      sheet={data.sheet}
    />
  );
}
