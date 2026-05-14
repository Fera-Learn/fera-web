import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { docsPages, resolveDocPage } from "@/lib/docs/pages";
import {
  getEquationSheetPrintPageData,
  RenderEquationSheetPrintPage,
} from "@/lib/render-equation-sheet-print-page";
import {
  getExamPrintPageData,
  RenderExamPrintPage,
} from "@/lib/render-exam-print-page";
import { RenderDocsPage } from "@/lib/render-doc-page";

const siteName = "Fera Academy";

function getPageTitle(title: string) {
  return `${title} | ${siteName}`;
}

function getMathPhysicsEquationSheetRedirect(slug: string[]) {
  const [courseSlug, equationSheetSlug, printSlug] = slug;
  const isLegacyMathCourse =
    courseSlug === "level-1-math-i-physics" ||
    courseSlug === "level-1-math-ii-physics";

  if (!isLegacyMathCourse || equationSheetSlug !== "equation-sheet") {
    return null;
  }

  if (slug.length === 2) {
    return "/level-1-math-physics/equation-sheet";
  }

  if (slug.length === 3 && printSlug === "print") {
    return "/level-1-math-physics/equation-sheet/print";
  }

  return null;
}

type DocsRouteProps = {
  params: Promise<{ slug: string[] }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  params,
}: DocsRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const examPrintPage = getExamPrintPageData(slug);
  const equationSheetPrintPage = getEquationSheetPrintPageData(slug);

  if (examPrintPage) {
    const modeLabel =
      examPrintPage.mode === "answers" ? "Answers PDF" : "Question PDF";

    return {
      title: getPageTitle(`${examPrintPage.paperTitle} ${modeLabel}`),
      description: `${modeLabel} export for ${examPrintPage.paperTitle}.`,
      robots: {
        follow: false,
        index: false,
      },
    };
  }

  if (equationSheetPrintPage) {
    return {
      title: getPageTitle(`${equationSheetPrintPage.title} PDF`),
      description: `PDF view for ${equationSheetPrintPage.title}.`,
      robots: {
        follow: false,
        index: false,
      },
    };
  }

  const page = resolveDocPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: getPageTitle(page.title),
    description: page.description,
    alternates: {
      canonical: page.href,
    },
    openGraph: {
      description: page.description,
      siteName,
      title: getPageTitle(page.title),
      type: "website",
      url: page.href,
    },
    robots: {
      follow: true,
      index: true,
    },
  };
}

export async function generateStaticParams() {
  return docsPages
    .filter((page) => page.slug.length > 0)
    .map((page) => ({ slug: page.slug }));
}

export default async function DocsSlugPage({
  params,
  searchParams,
}: DocsRouteProps) {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};

  if (slug[0] === "advanced-physics") {
    const redirectPath = ["level-1-physics", ...slug.slice(1)].join("/");
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(resolvedSearchParams)) {
      if (Array.isArray(value)) {
        value.forEach((entry) => params.append(key, entry));
      } else if (value !== undefined) {
        params.set(key, value);
      }
    }

    const query = params.toString();

    redirect(`/${redirectPath}${query ? `?${query}` : ""}`);
  }

  const mathPhysicsEquationSheetRedirect =
    getMathPhysicsEquationSheetRedirect(slug);

  if (mathPhysicsEquationSheetRedirect) {
    redirect(mathPhysicsEquationSheetRedirect);
  }

  const questionsParam = resolvedSearchParams.questions;
  const showQuestions =
    questionsParam === "1" ||
    questionsParam === "true" ||
    (Array.isArray(questionsParam) &&
      (questionsParam.includes("1") || questionsParam.includes("true")));

  const examPrintPage = getExamPrintPageData(slug);
  const equationSheetPrintPage = getEquationSheetPrintPageData(slug);

  if (examPrintPage) {
    return <RenderExamPrintPage slug={slug} />;
  }

  if (equationSheetPrintPage) {
    return <RenderEquationSheetPrintPage slug={slug} />;
  }

  return <RenderDocsPage showQuestions={showQuestions} slug={slug} />;
}
