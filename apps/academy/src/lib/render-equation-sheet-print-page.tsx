import { notFound } from "next/navigation";

import { EquationSheetPrintDocument } from "@/components/academy/equation-sheet";
import {
  level1PhysicsEquationSheet,
  level1PhysicsEquationSheetFilename,
  level1PhysicsEquationSheetHref,
} from "@/lib/docs/level-1-physics/equation-sheet";

type EquationSheetPrintPageData = {
  backHref: string;
  filename: string;
  title: string;
};

export function getEquationSheetPrintPageData(
  slug: string[],
): EquationSheetPrintPageData | null {
  const [courseSlug, equationSheetSlug, printSlug] = slug;

  if (
    slug.length !== 3 ||
    courseSlug !== "level-1-physics" ||
    equationSheetSlug !== "equation-sheet" ||
    printSlug !== "print"
  ) {
    return null;
  }

  return {
    backHref: level1PhysicsEquationSheetHref,
    filename: level1PhysicsEquationSheetFilename,
    title: level1PhysicsEquationSheet.title,
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
      sheet={level1PhysicsEquationSheet}
    />
  );
}
