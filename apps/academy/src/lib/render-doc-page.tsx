import {
  DocsAppShell,
  DocsArticle,
  getPrevNextDoc,
  renderDocBody,
} from "@repo/docs";
import { Button } from "@repo/ui/button";
import { ListChecksIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CourseCatalog } from "@/components/academy/course-catalog";
import { EquationSheetPage } from "@/components/academy/equation-sheet";
import { ExamPapersIndex } from "@/components/academy/exam-papers-index";
import { ExamPapersWorkspace } from "@/components/academy/exam-papers-workspace";
import { FlashcardsWorkspace } from "@/components/academy/flashcards-workspace";
import { QuestionsWorkspace } from "@/components/academy/questions-workspace";
import { RandomQuestionsWorkspace } from "@/components/academy/random-questions-workspace";
import {
  level1PhysicsEquationSheet,
  level1PhysicsEquationSheetPrintHref,
} from "@/lib/docs/level-1-physics/equation-sheet";
import {
  level1PhysicsExamSets,
  getLevel1PhysicsExamPaper,
} from "@/lib/docs/level-1-physics/exams";
import {
  getCourseBySlug,
  getCourseExamPapersHref,
  getCourseQuestionHref,
  getCourseQuestionTopicOptions,
  getDocsTreeForScope,
  isCourseExamPaperPage,
  isCourseExamPapersPage,
  isCourseFlashcardsPage,
  isCourseQuestionsPage,
  isCourseTopicPage,
  isLevel1PhysicsEquationSheetPage,
  resolveDocPage,
  resolveSidebarScopeFromSlug,
  searchIndex,
} from "@/lib/docs/pages";
import { docsSidebarConfig } from "@/lib/docs/shell";
import { getPapers, getQuestions } from "@/lib/question-bank";

type RenderDocsPageProps = {
  showQuestions?: boolean;
  slug: string[];
};

const level1PhysicsPaperTopics = [
  {
    label: "Paper 1",
    description:
      "Mechanics; waves and optics; oscillations and collisions, conservation, and fields.",
    timeAllowed: "2 hours",
    totalMarks: 60,
  },
  {
    label: "Paper 2",
    description: "Electromagnetism; relativity and quantum mechanics.",
    timeAllowed: "2 hours",
    totalMarks: 60,
  },
];

function getPaperFilterOptions(courseId: string) {
  const papers = getPapers({ courseId }) ?? [];

  return Array.from(
    new Map(
      papers.map((paper) => [
        paper.paperId,
        {
          label: paper.label,
          value: paper.paperId,
        },
      ]),
    ).values(),
  );
}

function ratingSortValue(value: string) {
  const stars = value.match(/\*/g)?.length ?? 0;
  const plus = value.includes("+") ? 0.5 : 0;

  return stars + plus;
}

function getDifficultyFilterOptions(courseId: string) {
  const questions = getQuestions({ courseId, source: "topic" }) ?? [];
  const ratings = Array.from(
    new Set(
      questions
        .map((question) => question.rating)
        .filter((rating): rating is string => Boolean(rating)),
    ),
  ).sort((left, right) => {
    const valueDifference = ratingSortValue(left) - ratingSortValue(right);

    return valueDifference === 0 ? left.localeCompare(right) : valueDifference;
  });

  return ratings.map((rating) => ({
    label: rating,
    value: rating,
  }));
}

function getExamPaperPrintHref({
  mode,
  paperId,
  setId,
}: {
  mode: "answers" | "questions";
  paperId: string;
  setId: string;
}) {
  return `/level-1-physics/exam-papers/${setId}/${paperId}/print/${mode}`;
}

export async function RenderDocsPage({
  showQuestions = false,
  slug,
}: RenderDocsPageProps) {
  const page = resolveDocPage(slug);

  if (!page) {
    notFound();
  }

  const sidebarScope = resolveSidebarScopeFromSlug(page.slug);
  const docsTree = getDocsTreeForScope(sidebarScope);
  const course = getCourseBySlug(page.slug);
  const isQuestionMode = showQuestions && isCourseTopicPage(page);
  const isExamPapersMode = isCourseExamPapersPage(page);
  const isExamPaperMode = isCourseExamPaperPage(page);
  const isQuestionsPage = isCourseQuestionsPage(page);
  const isFlashcardsPage = isCourseFlashcardsPage(page);
  const isEquationSheetPage = isLevel1PhysicsEquationSheetPage(page);

  if (isEquationSheetPage) {
    const neighbors = getPrevNextDoc(docsTree, page.href);

    return (
      <DocsAppShell
        currentPath={page.href}
        header={{ enabled: false }}
        headings={page.headings}
        searchIndex={searchIndex}
        sidebar={docsSidebarConfig}
        tree={docsTree}
      >
        <DocsArticle neighbors={neighbors} page={page}>
          <EquationSheetPage
            printHref={level1PhysicsEquationSheetPrintHref}
            sheet={level1PhysicsEquationSheet}
          />
        </DocsArticle>
      </DocsAppShell>
    );
  }

  if (isQuestionsPage) {
    if (!course) {
      notFound();
    }

    return (
      <DocsAppShell
        contentLayout="workspace"
        currentPath={page.href}
        header={{ enabled: false }}
        headings={[]}
        searchIndex={searchIndex}
        sidebar={docsSidebarConfig}
        tree={docsTree}
      >
        <RandomQuestionsWorkspace
          courseId={course.scope}
          difficultyOptions={getDifficultyFilterOptions(course.scope)}
          paperOptions={getPaperFilterOptions(course.scope)}
          topicOptions={getCourseQuestionTopicOptions(course.scope)}
        />
      </DocsAppShell>
    );
  }

  if (isFlashcardsPage) {
    if (!course) {
      notFound();
    }

    return (
      <DocsAppShell
        contentLayout="workspace"
        currentPath={page.href}
        header={{ enabled: false }}
        headings={[]}
        searchIndex={searchIndex}
        sidebar={docsSidebarConfig}
        tree={docsTree}
      >
        <FlashcardsWorkspace
          courseId={course.scope}
          difficultyOptions={getDifficultyFilterOptions(course.scope)}
          paperOptions={getPaperFilterOptions(course.scope)}
          topicOptions={getCourseQuestionTopicOptions(course.scope)}
        />
      </DocsAppShell>
    );
  }

  if (isExamPapersMode) {
    const sets =
      course?.scope === "level-1-physics"
        ? level1PhysicsExamSets.map((set) => ({
            ...set,
            papers: set.papers.map((paper) => ({
              ...paper,
              answerPdfHref: getExamPaperPrintHref({
                mode: "answers",
                paperId: paper.id,
                setId: set.id,
              }),
              href: `/level-1-physics/exam-papers/${set.id}/${paper.id}`,
              questionPdfHref: getExamPaperPrintHref({
                mode: "questions",
                paperId: paper.id,
                setId: set.id,
              }),
            })),
          }))
        : [];
    const neighbors = getPrevNextDoc(docsTree, page.href);

    return (
      <DocsAppShell
        currentPath={page.href}
        header={{ enabled: false }}
        headings={page.headings}
        searchIndex={searchIndex}
        sidebar={docsSidebarConfig}
        tree={docsTree}
      >
        <DocsArticle neighbors={neighbors} page={page}>
          <ExamPapersIndex
            courseLabel={course?.label ?? page.title}
            paperTopics={
              course?.scope === "level-1-physics"
                ? level1PhysicsPaperTopics
                : []
            }
            sets={sets}
          />
        </DocsArticle>
      </DocsAppShell>
    );
  }

  if (isExamPaperMode) {
    const [, , setId, paperId] = page.slug;
    const paper =
      course?.scope === "level-1-physics" && setId && paperId
        ? getLevel1PhysicsExamPaper(setId, paperId)
        : undefined;

    if (!course || !paper || !setId || !paperId) {
      notFound();
    }

    return (
      <DocsAppShell
        contentLayout="workspace"
        currentPath={getCourseExamPapersHref(course)}
        header={{ enabled: false }}
        headings={[]}
        searchIndex={searchIndex}
        sidebar={docsSidebarConfig}
        tree={docsTree}
      >
        <ExamPapersWorkspace
          backHref={getCourseExamPapersHref(course)}
          courseLabel={course.label}
          exportHrefs={{
            answers: getExamPaperPrintHref({
              mode: "answers",
              paperId,
              setId,
            }),
            questions: getExamPaperPrintHref({
              mode: "questions",
              paperId,
              setId,
            }),
          }}
          papers={[paper]}
        />
      </DocsAppShell>
    );
  }

  if (isQuestionMode) {
    if (!course) {
      notFound();
    }

    const content =
      page.body.trim().length > 0 ? await renderDocBody(page) : null;
    const questions =
      getQuestions({
        courseId: course.scope,
        source: "topic",
        topic: page.slug[2],
      }) ?? [];

    return (
      <DocsAppShell
        contentLayout="workspace"
        currentPath={page.href}
        header={{ enabled: false }}
        headings={[]}
        searchIndex={searchIndex}
        sidebar={docsSidebarConfig}
        tree={docsTree}
      >
        <QuestionsWorkspace
          content={content}
          contentHref={page.href}
          questions={questions.map((question) => ({
            answer: question.answer,
            id: question.id,
            prompt: question.prompt,
            rating: question.rating ?? "",
          }))}
        />
      </DocsAppShell>
    );
  }

  const body = await renderDocBody(page);
  const neighbors = getPrevNextDoc(docsTree, page.href);
  const beforeContent = page.slug.length === 0 ? <CourseCatalog /> : undefined;
  const actions = isCourseTopicPage(page) ? (
    <Button asChild size="sm" variant="outline">
      <Link href={getCourseQuestionHref(page)}>
        <ListChecksIcon className="size-4" />
        Questions
      </Link>
    </Button>
  ) : undefined;

  return (
    <DocsAppShell
      currentPath={page.href}
      header={{ enabled: false }}
      headings={page.headings}
      searchIndex={searchIndex}
      sidebar={docsSidebarConfig}
      tree={docsTree}
    >
      <DocsArticle
        actions={actions}
        beforeContent={beforeContent}
        neighbors={neighbors}
        page={page}
      >
        {body}
      </DocsArticle>
    </DocsAppShell>
  );
}
