import { notFound } from "next/navigation";

import {
  ExamPaperPrintDocument,
  type ExamPrintMode,
} from "@/components/academy/exam-paper-print-document";
import {
  getLevel1PhysicsExamPaper,
  level1PhysicsExamSets,
} from "@/lib/docs/level-1-physics/exams";

type ExamPrintPageData = {
  backHref: string;
  courseLabel: string;
  filename: string;
  mode: ExamPrintMode;
  paperId: string;
  paperTitle: string;
  setId: string;
  setLabel: string;
};

const LEVEL_1_PHYSICS_LABEL = "Level 1 - Physics";

function getMode(value: string | undefined): ExamPrintMode | null {
  if (value === "questions" || value === "answers") {
    return value;
  }

  return null;
}

function filenameFor({
  mode,
  paperId,
  setId,
}: {
  mode: ExamPrintMode;
  paperId: string;
  setId: string;
}) {
  return `level-1-physics-${setId}-${paperId}-${mode}.pdf`;
}

export function getExamPrintPageData(slug: string[]): ExamPrintPageData | null {
  const [courseSlug, examPapersSlug, setId, paperId, printSlug, modeSlug] =
    slug;
  const mode = getMode(modeSlug);

  if (
    slug.length !== 6 ||
    courseSlug !== "level-1-physics" ||
    examPapersSlug !== "exam-papers" ||
    printSlug !== "print" ||
    !setId ||
    !paperId ||
    !mode
  ) {
    return null;
  }

  const set = level1PhysicsExamSets.find((entry) => entry.id === setId);
  const paper = set?.papers.find((entry) => entry.id === paperId);

  if (!set || !paper) {
    return null;
  }

  return {
    backHref: `/level-1-physics/exam-papers/${setId}/${paperId}`,
    courseLabel: LEVEL_1_PHYSICS_LABEL,
    filename: filenameFor({ mode, paperId, setId }),
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

  const paper = getLevel1PhysicsExamPaper(data.setId, data.paperId);

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
