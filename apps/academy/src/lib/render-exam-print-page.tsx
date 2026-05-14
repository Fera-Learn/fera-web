import { notFound } from "next/navigation";

import {
  ExamPaperPrintDocument,
  type ExamPrintMode,
} from "@/components/academy/exam-paper-print-document";
import {
  getLevel1PhysicsExamPaper,
  level1PhysicsExamSets,
} from "@/lib/docs/level-1-physics/exams";
import {
  getLevel1MathIPhysicsExamPaper,
  level1MathIPhysicsExamSets,
} from "@/lib/docs/level-1-math-i-physics/exams";
import {
  getLevel1MathIIPhysicsExamPaper,
  level1MathIIPhysicsExamSets,
} from "@/lib/docs/level-1-math-ii-physics/exams";

type ExamPrintPageData = {
  backHref: string;
  courseId: string;
  courseLabel: string;
  filename: string;
  mode: ExamPrintMode;
  paperId: string;
  paperTitle: string;
  setId: string;
  setLabel: string;
};

const examCourseConfigs = {
  "level-1-math-i-physics": {
    getPaper: getLevel1MathIPhysicsExamPaper,
    label: "Level 1 - Math I (Physics)",
    sets: level1MathIPhysicsExamSets,
  },
  "level-1-math-ii-physics": {
    getPaper: getLevel1MathIIPhysicsExamPaper,
    label: "Level 1 - Math II (Physics)",
    sets: level1MathIIPhysicsExamSets,
  },
  "level-1-physics": {
    getPaper: getLevel1PhysicsExamPaper,
    label: "Level 1 - Physics",
    sets: level1PhysicsExamSets,
  },
};

function getExamCourseConfig(courseId: string) {
  return examCourseConfigs[courseId as keyof typeof examCourseConfigs] ?? null;
}

function getMode(value: string | undefined): ExamPrintMode | null {
  if (value === "questions" || value === "answers") {
    return value;
  }

  return null;
}

function filenameFor({
  courseId,
  mode,
  paperId,
  setId,
}: {
  courseId: string;
  mode: ExamPrintMode;
  paperId: string;
  setId: string;
}) {
  return `${courseId}-${setId}-${paperId}-${mode}.pdf`;
}

export function getExamPrintPageData(slug: string[]): ExamPrintPageData | null {
  const [courseSlug, examPapersSlug, setId, paperId, printSlug, modeSlug] =
    slug;
  const mode = getMode(modeSlug);
  const examConfig = courseSlug ? getExamCourseConfig(courseSlug) : null;

  if (
    slug.length !== 6 ||
    !courseSlug ||
    !examConfig ||
    examPapersSlug !== "exam-papers" ||
    printSlug !== "print" ||
    !setId ||
    !paperId ||
    !mode
  ) {
    return null;
  }

  const set = examConfig.sets.find((entry) => entry.id === setId);
  const paper = set?.papers.find((entry) => entry.id === paperId);

  if (!set || !paper) {
    return null;
  }

  return {
    backHref: `/${courseSlug}/exam-papers/${setId}/${paperId}`,
    courseId: courseSlug,
    courseLabel: examConfig.label,
    filename: filenameFor({ courseId: courseSlug, mode, paperId, setId }),
    mode,
    paperId,
    paperTitle: paper.title,
    setId,
    setLabel: set.label,
  };
}

export function RenderExamPrintPage({ slug }: { slug: string[] }) {
  const data = getExamPrintPageData(slug);

  if (!data) {
    notFound();
  }

  const examConfig = getExamCourseConfig(data.courseId);
  const paper = examConfig?.getPaper(data.setId, data.paperId);

  if (!paper) {
    notFound();
  }

  return (
    <ExamPaperPrintDocument
      backHref={data.backHref}
      courseLabel={data.courseLabel}
      filename={data.filename}
      mode={data.mode}
      paper={paper}
      setLabel={data.setLabel}
    />
  );
}
