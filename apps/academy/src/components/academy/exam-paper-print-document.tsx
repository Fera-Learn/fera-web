"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowLeftIcon, PrinterIcon } from "lucide-react";

import { Button } from "@repo/ui/button";

import {
  PrintZoomControls,
  usePrintZoom,
} from "@/components/academy/print-zoom-controls";

import type {
  Level1PhysicsExamPaper,
  Level1PhysicsExamPart,
  Level1PhysicsExamQuestion,
} from "@/lib/docs/level-1-physics/exams";

export type ExamPrintMode = "answers" | "questions";

type ExamPaperPrintDocumentProps = {
  backHref: string;
  courseLabel: string;
  filename: string;
  mode: ExamPrintMode;
  paper: Level1PhysicsExamPaper;
  setLabel: string;
};

type QuestionPagePart = {
  id: string;
  part: Level1PhysicsExamPart;
  question: Level1PhysicsExamQuestion;
  showQuestionIntro: boolean;
  showSection: boolean;
};

type QuestionPrintPage = {
  id: string;
  parts: QuestionPagePart[];
};

declare global {
  interface Window {
    MathJax?: {
      startup?: {
        promise?: Promise<void>;
      };
      typesetPromise?: (elements?: HTMLElement[]) => Promise<void>;
    };
  }
}

function usePrintMathJax(dependency: unknown) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    let cancelled = false;
    let retryTimeout: number | undefined;
    let frame: number | undefined;

    const typeset = () => {
      if (cancelled) {
        return;
      }

      const mathJax = window.MathJax;

      if (!mathJax?.typesetPromise) {
        retryTimeout = window.setTimeout(typeset, 60);
        return;
      }

      const runTypeset = () => {
        if (cancelled) {
          return;
        }

        frame = requestAnimationFrame(() => {
          void mathJax.typesetPromise?.([element]);
        });
      };

      const startup = mathJax.startup?.promise;

      if (startup) {
        void startup.then(runTypeset);
        return;
      }

      runTypeset();
    };

    const handleMathJaxReady = () => {
      typeset();
    };

    window.addEventListener("mathjax-ready", handleMathJaxReady);
    typeset();

    return () => {
      cancelled = true;
      window.removeEventListener("mathjax-ready", handleMathJaxReady);

      if (retryTimeout) {
        window.clearTimeout(retryTimeout);
      }

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [dependency]);

  return ref;
}

function useDocumentTitle(filename: string) {
  useEffect(() => {
    const originalTitle = document.title;

    document.title = filename.replace(/\.pdf$/u, "");

    return () => {
      document.title = originalTitle;
    };
  }, [filename]);
}

async function typesetBeforePrint(element: HTMLElement) {
  const startedAt = Date.now();
  const timeoutMs = 4000;

  while (
    !window.MathJax?.typesetPromise &&
    Date.now() - startedAt < timeoutMs
  ) {
    await new Promise((resolve) => window.setTimeout(resolve, 100));
  }

  const mathJax = window.MathJax;

  if (!mathJax?.typesetPromise) {
    return;
  }

  try {
    await mathJax.startup?.promise;
    await mathJax.typesetPromise([element]);
  } catch {
    // Printing should still be available if MathJax fails to load.
  }
}

function paperTitle(courseLabel: string, paper: Level1PhysicsExamPaper) {
  return `${courseLabel} ${paper.label}`;
}

function paperHeaderTitle(
  courseLabel: string,
  mode: ExamPrintMode,
  paper: Level1PhysicsExamPaper,
) {
  return `${paperTitle(courseLabel, paper)} ${
    mode === "answers" ? "Answers" : "Exam"
  }`;
}

function partLabel(label: string) {
  const trimmed = label.trim();
  const singleLetter = /^\(?([a-z])\)?$/iu.exec(trimmed);

  if (singleLetter) {
    return `${singleLetter[1].toLowerCase()})`;
  }

  return trimmed.replace(/^\((.+)\)$/u, "$1)");
}

function sectionTitleParts(section: string) {
  const [label, ...titleParts] = section.split(":");
  const title = titleParts.join(":").trim();

  if (!title) {
    return {
      label: section,
      title: "",
    };
  }

  return {
    label: `${label.trim()}:`,
    title,
  };
}

function uniqueSections(paper: Level1PhysicsExamPaper) {
  return Array.from(
    new Map(
      paper.questions.map((question) => [question.section, question.section]),
    ).values(),
  );
}

function PrintText({
  children,
  muted = false,
}: {
  children: string;
  muted?: boolean;
}) {
  return (
    <div
      className={
        muted
          ? "whitespace-pre-line text-[10pt] leading-6 text-neutral-600 print:text-[9pt] print:leading-[1.45]"
          : "whitespace-pre-line text-[10.25pt] leading-[1.5] text-neutral-900 print:text-[10.25pt] print:leading-[1.5]"
      }
    >
      {children}
    </div>
  );
}

function Marks({ marks }: { marks: number }) {
  return (
    <span className="exam-marks shrink-0 font-mono text-[9pt] text-neutral-600">
      [{marks} {marks === 1 ? "mark" : "marks"}]
    </span>
  );
}

function previousAnswerLineCount(marks: number) {
  if (marks <= 1) {
    return 2;
  }

  if (marks === 2) {
    return 3;
  }

  if (marks === 3) {
    return 3;
  }

  if (marks === 4) {
    return 4;
  }

  return Math.min(6, marks);
}

function answerSpaceHeightMm(marks: number) {
  const lineCount = previousAnswerLineCount(marks);
  const previousHeight = lineCount * 4 + Math.max(0, lineCount - 1) * 1.6;
  const multiplier = marks <= 3 ? 4 : 2;

  return previousHeight * multiplier;
}

function estimateTextHeightMm(text: string, charactersPerLine = 95) {
  const lines = text
    .split("\n")
    .map((line) => Math.max(1, Math.ceil(line.length / charactersPerLine)))
    .reduce((total, lineCount) => total + lineCount, 0);

  return lines * 5.4;
}

function estimateQuestionIntroHeightMm({
  question,
  showSection,
}: {
  question: Level1PhysicsExamQuestion;
  showSection: boolean;
}) {
  return (
    (showSection ? 12 : 0) +
    10 +
    (question.stem ? estimateTextHeightMm(question.stem) + 5 : 0)
  );
}

function estimatePartHeightMm(part: Level1PhysicsExamPart) {
  return (
    estimateTextHeightMm(part.prompt, 105) + answerSpaceHeightMm(part.marks) + 9
  );
}

function estimateQuestionPagePartHeightMm(entry: QuestionPagePart) {
  return (
    (entry.showQuestionIntro
      ? estimateQuestionIntroHeightMm({
          question: entry.question,
          showSection: entry.showSection,
        })
      : 0) + estimatePartHeightMm(entry.part)
  );
}

function AnswerSpace({ marks }: { marks: number }) {
  return (
    <div
      aria-label={`${marks} mark answer space`}
      className="exam-answer-space"
      style={{ minHeight: `${answerSpaceHeightMm(marks)}mm` }}
    />
  );
}

const QUESTION_PAGE_BODY_BUDGET_MM = 220;

function buildQuestionPrintPages(
  paper: Level1PhysicsExamPaper,
): QuestionPrintPage[] {
  const pages: QuestionPrintPage[] = [];
  let currentParts: QuestionPagePart[] = [];
  let currentHeight = 0;

  const pushCurrentPage = () => {
    if (currentParts.length === 0) {
      return;
    }

    pages.push({
      id: currentParts.map((entry) => entry.id).join("--"),
      parts: currentParts,
    });
    currentParts = [];
    currentHeight = 0;
  };

  paper.questions.forEach((question, questionIndex) => {
    question.parts.forEach((part, partIndex) => {
      const showQuestionIntro = partIndex === 0;
      const entry: QuestionPagePart = {
        id: part.id,
        part,
        question,
        showQuestionIntro,
        showSection:
          showQuestionIntro &&
          (questionIndex === 0 ||
            paper.questions[questionIndex - 1]?.section !== question.section),
      };
      const entryHeight = estimateQuestionPagePartHeightMm(entry);
      const shouldStartNewPage =
        currentParts.length > 0 &&
        (entry.showSection ||
          part.marks >= 4 ||
          currentHeight + entryHeight > QUESTION_PAGE_BODY_BUDGET_MM);

      if (shouldStartNewPage) {
        pushCurrentPage();
      }

      currentParts.push(entry);
      currentHeight += entryHeight;

      if (part.marks >= 4) {
        pushCurrentPage();
      }
    });
  });

  pushCurrentPage();

  return pages;
}

function CandidateBox() {
  return (
    <section className="exam-candidate-box">
      <div className="exam-candidate-row">
        <span>Candidate name</span>
        <span aria-hidden="true" />
      </div>
      <div className="exam-candidate-row">
        <span>Candidate number</span>
        <span aria-hidden="true" />
      </div>
    </section>
  );
}

function Instructions({ paper }: { paper: Level1PhysicsExamPaper }) {
  const constants = paper.constants ?? [];

  return (
    <section className="exam-instructions">
      <h2>Instructions</h2>
      <ul>
        {paper.instructions.map((instruction) => (
          <li key={instruction}>{instruction}</li>
        ))}
        {constants.length > 0 ? (
          <li>Use the constants printed in this paper where relevant.</li>
        ) : null}
        <li>Answer spaces are provided after each question part.</li>
      </ul>
    </section>
  );
}

function CoverInfoBox({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="exam-cover-info-box">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function SectionTitleText({ section }: { section: string }) {
  const { label, title } = sectionTitleParts(section);

  return (
    <>
      <strong>{label}</strong>
      {title ? <span> {title}</span> : null}
    </>
  );
}

function InformationSection({ paper }: { paper: Level1PhysicsExamPaper }) {
  const sections = uniqueSections(paper);

  if (sections.length === 0) {
    return null;
  }

  return (
    <section className="exam-information">
      <h2>Information</h2>
      <ul>
        {sections.map((section) => (
          <li key={section}>
            <SectionTitleText section={section} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function CoverPage({
  courseLabel,
  isAnswers,
  paper,
  setLabel,
}: {
  courseLabel: string;
  isAnswers: boolean;
  paper: Level1PhysicsExamPaper;
  setLabel: string;
}) {
  return (
    <section className="exam-print-page exam-cover-page">
      <header className="exam-cover-title">
        <h1>Fera Academy</h1>
        <p>{isAnswers ? `${paper.label} Answers` : paper.label}</p>
      </header>

      <div className="exam-cover-info-grid">
        <CoverInfoBox label="Time" value={paper.timeAllowed} />
        <CoverInfoBox label="Marks" value={paper.totalMarks} />
        <CoverInfoBox label="Set" value={setLabel} />
      </div>

      <div className="exam-cover-paper-box">
        <span>Paper</span>
        <strong>{paperTitle(courseLabel, paper)}</strong>
      </div>

      <InformationSection paper={paper} />

      {isAnswers ? (
        <section className="exam-marking-guidance">
          <h2>Marking Guidance</h2>
          <p>
            These worked answers show the expected method and final result.
            Equivalent correct reasoning should receive credit.
          </p>
        </section>
      ) : (
        <>
          <CandidateBox />
          <Instructions paper={paper} />
        </>
      )}
    </section>
  );
}

function ConstantsPage({ paper }: { paper: Level1PhysicsExamPaper }) {
  const constants = paper.constants ?? [];

  if (constants.length === 0) {
    return null;
  }

  return (
    <section className="exam-print-page exam-constants-page">
      <h2>Constants</h2>
      <table className="exam-constants-table">
        <tbody>
          {constants.map((constant) => (
            <tr key={constant.label}>
              <td>{constant.label}</td>
              <td>\( {constant.value} \)</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function PageHeader({
  courseLabel,
  mode,
  paper,
  setLabel,
}: {
  courseLabel: string;
  mode: ExamPrintMode;
  paper: Level1PhysicsExamPaper;
  setLabel: string;
}) {
  return (
    <header className="exam-page-header">
      <span>Fera Academy</span>
      <strong>{paperHeaderTitle(courseLabel, mode, paper)}</strong>
      <span>{setLabel}</span>
    </header>
  );
}

function NumberedPage({
  children,
  courseLabel,
  isLastPage = false,
  mode,
  pageNumber,
  paper,
  setLabel,
  totalPages,
}: {
  children: React.ReactNode;
  courseLabel: string;
  isLastPage?: boolean;
  mode: ExamPrintMode;
  pageNumber: number;
  paper: Level1PhysicsExamPaper;
  setLabel: string;
  totalPages: number;
}) {
  return (
    <section className="exam-print-page exam-body-page">
      <PageHeader
        courseLabel={courseLabel}
        mode={mode}
        paper={paper}
        setLabel={setLabel}
      />
      <main className="exam-page-body">{children}</main>
      {isLastPage ? <div className="exam-end-marker">END</div> : null}
      <footer className="exam-page-footer">
        Page {pageNumber} of {totalPages}
      </footer>
    </section>
  );
}

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="exam-section-heading">
      <SectionTitleText section={children} />
    </h2>
  );
}

function PartPrompt({
  marks,
  muted = false,
  part,
}: {
  marks: number;
  muted?: boolean;
  part: Level1PhysicsExamPart;
}) {
  return (
    <div className="exam-part-prompt-row">
      <p className={muted ? "exam-part-prompt muted" : "exam-part-prompt"}>
        <span>{partLabel(part.label)}</span> {part.prompt}
      </p>
      <Marks marks={marks} />
    </div>
  );
}

function QuestionPageContent({ page }: { page: QuestionPrintPage }) {
  return (
    <div className="exam-question-page-content">
      {page.parts.map((entry) => (
        <article className="exam-question-content" key={entry.id}>
          {entry.showSection ? (
            <SectionHeading>{entry.question.section}</SectionHeading>
          ) : null}
          {entry.showQuestionIntro ? (
            <>
              <div className="exam-question-title-row">
                <h3>
                  {entry.question.number}. {entry.question.title}
                </h3>
                <Marks marks={entry.question.marks} />
              </div>
              {entry.question.stem ? (
                <div className="exam-question-stem">
                  <PrintText>{entry.question.stem}</PrintText>
                </div>
              ) : null}
            </>
          ) : null}
          <section className="exam-print-part">
            <PartPrompt marks={entry.part.marks} part={entry.part} />
            <AnswerSpace marks={entry.part.marks} />
          </section>
        </article>
      ))}
    </div>
  );
}

function AnswerPartPageContent({
  isFirstPart,
  part,
  question,
  showSection,
}: {
  isFirstPart: boolean;
  part: Level1PhysicsExamPart;
  question: Level1PhysicsExamQuestion;
  showSection: boolean;
}) {
  return (
    <article className="exam-question-content">
      {showSection ? <SectionHeading>{question.section}</SectionHeading> : null}
      <div className="exam-question-title-row">
        <h3>
          Answer {question.number}. {question.title}
        </h3>
        <Marks marks={question.marks} />
      </div>
      {isFirstPart && question.stem ? (
        <div className="exam-answer-stem">
          <PrintText muted>{question.stem}</PrintText>
        </div>
      ) : null}
      <section className="exam-print-part">
        <PartPrompt marks={part.marks} muted part={part} />
        <div className="exam-answer-text">
          <PrintText>{part.answer}</PrintText>
        </div>
      </section>
    </article>
  );
}

function QuestionsDocument({
  courseLabel,
  mode,
  paper,
  setLabel,
}: {
  courseLabel: string;
  mode: ExamPrintMode;
  paper: Level1PhysicsExamPaper;
  setLabel: string;
}) {
  const pages = buildQuestionPrintPages(paper);
  const totalPages = pages.length;

  return (
    <>
      {pages.map((page, index) => (
        <NumberedPage
          courseLabel={courseLabel}
          isLastPage={index === pages.length - 1}
          key={page.id}
          mode={mode}
          pageNumber={index + 1}
          paper={paper}
          setLabel={setLabel}
          totalPages={totalPages}
        >
          <QuestionPageContent page={page} />
        </NumberedPage>
      ))}
    </>
  );
}

function AnswersDocument({
  courseLabel,
  mode,
  paper,
  setLabel,
}: {
  courseLabel: string;
  mode: ExamPrintMode;
  paper: Level1PhysicsExamPaper;
  setLabel: string;
}) {
  const pages = paper.questions.flatMap((question, questionIndex) =>
    question.parts.map((part, partIndex) => ({
      isFirstPart: partIndex === 0,
      pageId: `${question.id}-${part.id}`,
      part,
      question,
      questionIndex,
    })),
  );
  const totalPages = pages.length;

  return (
    <>
      {pages.map((page, index) => (
        <NumberedPage
          courseLabel={courseLabel}
          key={page.pageId}
          mode={mode}
          pageNumber={index + 1}
          paper={paper}
          setLabel={setLabel}
          totalPages={totalPages}
        >
          <AnswerPartPageContent
            isFirstPart={page.isFirstPart}
            part={page.part}
            question={page.question}
            showSection={
              page.isFirstPart &&
              (page.questionIndex === 0 ||
                paper.questions[page.questionIndex - 1]?.section !==
                  page.question.section)
            }
          />
        </NumberedPage>
      ))}
    </>
  );
}

export function ExamPaperPrintDocument({
  backHref,
  courseLabel,
  filename,
  mode,
  paper,
  setLabel,
}: ExamPaperPrintDocumentProps) {
  const ref = usePrintMathJax({ mode, paper });
  const isAnswers = mode === "answers";
  const [isPreparingPrint, setIsPreparingPrint] = useState(false);
  const printZoom = usePrintZoom();

  useDocumentTitle(filename);

  const handlePrint = async () => {
    const element = ref.current;

    setIsPreparingPrint(true);

    if (element) {
      await typesetBeforePrint(element);
    }

    setIsPreparingPrint(false);
    window.print();
  };

  return (
    <div className="exam-print-shell h-svh overflow-auto bg-neutral-200 text-neutral-950 print:h-auto print:overflow-visible print:bg-white">
      <style>{`
        .exam-print-shell {
          background: #e5e7eb !important;
        }

        .exam-print-toolbar {
          background: rgba(255, 255, 255, 0.96) !important;
          border-color: #d4d4d8 !important;
          color: #111827 !important;
        }

        .exam-print-toolbar,
        .exam-print-toolbar * {
          color: #111827 !important;
        }

        .exam-print-toolbar a,
        .exam-print-toolbar button,
        .exam-print-toolbar select {
          background: #ffffff !important;
          border-color: #d4d4d8 !important;
        }

        .exam-print-document {
          box-sizing: border-box;
          display: grid;
          gap: 18px;
          margin: 32px auto !important;
          max-width: 210mm !important;
          width: min(210mm, calc(100vw - 32px)) !important;
        }

        .exam-print-document,
        .exam-print-document * {
          color: #111827 !important;
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }

        .exam-print-page {
          background: #ffffff;
          box-sizing: border-box;
          border: 1px solid #d4d4d8;
          min-height: 297mm;
          padding: 16mm;
          width: 100%;
        }

        .exam-cover-page {
          display: flex;
          flex-direction: column;
        }

        .exam-cover-title {
          margin-bottom: 14mm;
          text-align: center;
        }

        .exam-cover-title h1 {
          font-size: 31pt !important;
          font-weight: 700;
          letter-spacing: 0 !important;
          line-height: 1.05 !important;
          margin: 0;
        }

        .exam-cover-title p {
          font-size: 17pt !important;
          font-weight: 600;
          line-height: 1.25 !important;
          margin: 4mm 0 0;
        }

        .exam-cover-info-grid {
          display: grid;
          gap: 4mm;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-bottom: 5mm;
        }

        .exam-cover-info-box,
        .exam-cover-paper-box {
          border: 1.5px solid #111827;
          padding: 5mm;
          text-align: center;
        }

        .exam-cover-info-box span,
        .exam-cover-paper-box span {
          display: block;
          font-size: 9pt !important;
          font-weight: 700;
          line-height: 1.2 !important;
          margin-bottom: 2mm;
          text-transform: uppercase;
        }

        .exam-cover-info-box strong {
          display: block;
          font-size: 13pt !important;
          line-height: 1.25 !important;
        }

        .exam-cover-paper-box {
          margin-bottom: 7mm;
        }

        .exam-cover-paper-box strong {
          display: block;
          font-size: 15pt !important;
          line-height: 1.25 !important;
        }

        .exam-information {
          margin-bottom: 7mm;
        }

        .exam-information h2 {
          font-size: 12pt !important;
          line-height: 1.25 !important;
          margin: 0 0 3mm;
        }

        .exam-information ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .exam-information li {
          font-size: 10pt !important;
          line-height: 1.55 !important;
          margin: 0;
        }

        .exam-information strong {
          font-weight: 700;
        }

        .exam-information span {
          font-weight: 400;
        }

        .exam-candidate-box {
          border: 1px solid #111827;
          display: grid;
          gap: 4mm;
          margin-top: 2mm;
          padding: 5mm;
        }

        .exam-candidate-row {
          align-items: end;
          display: flex;
          gap: 4mm;
        }

        .exam-candidate-row span:first-child {
          flex: 0 0 auto;
          font-size: 9.5pt !important;
          font-weight: 700;
          line-height: 1.2 !important;
        }

        .exam-candidate-row span:last-child {
          border-bottom: 1px solid #6b7280;
          flex: 1 1 auto;
          height: 7mm;
        }

        .exam-instructions,
        .exam-marking-guidance {
          margin-top: 7mm;
        }

        .exam-instructions h2,
        .exam-marking-guidance h2 {
          font-size: 12pt !important;
          line-height: 1.25 !important;
          margin: 0 0 3mm;
        }

        .exam-instructions ul {
          margin: 0;
          padding-left: 5mm;
        }

        .exam-instructions li,
        .exam-marking-guidance p {
          font-size: 10pt !important;
          line-height: 1.5 !important;
        }

        .exam-constants-page {
          display: block;
          padding: 24mm 22mm;
        }

        .exam-constants-page h2 {
          font-size: 15pt !important;
          font-weight: 600;
          line-height: 1.25 !important;
          margin: 0 0 7mm;
        }

        .exam-constants-table {
          border-collapse: collapse;
          table-layout: fixed;
          width: 100%;
        }

        .exam-constants-table td {
          border: 0;
          font-size: 11pt !important;
          line-height: 1.45 !important;
          padding: 0 0 4mm;
          vertical-align: baseline;
        }

        .exam-constants-table td:first-child {
          font-weight: 400;
          padding-right: 8mm;
          width: 55%;
        }

        .exam-constants-table td:last-child {
          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
          font-size: 10.5pt !important;
          font-weight: 400;
        }

        .exam-body-page {
          display: flex;
          flex-direction: column;
          padding: 9mm 13mm 7mm;
        }

        .exam-page-header {
          align-items: center;
          border-bottom: 1px solid #111827;
          display: grid;
          gap: 5mm;
          grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
          padding-bottom: 3mm;
        }

        .exam-page-header span,
        .exam-page-header strong {
          font-size: 8.5pt !important;
          line-height: 1.2 !important;
        }

        .exam-page-header span:last-child {
          text-align: right;
        }

        .exam-page-header strong {
          font-weight: 700;
          text-align: center;
          white-space: nowrap;
        }

        .exam-page-body {
          flex: 1 1 auto;
          padding: 5mm 0 4mm;
        }

        .exam-page-footer {
          font-size: 8.5pt !important;
          line-height: 1.2 !important;
          padding-top: 2mm;
          text-align: center;
        }

        .exam-end-marker {
          font-size: 10pt !important;
          font-weight: 700;
          line-height: 1.2 !important;
          padding-bottom: 3mm;
          text-align: center;
        }

        .exam-section-heading {
          font-size: 12pt !important;
          line-height: 1.25 !important;
          margin: 0 0 6mm;
          text-align: center;
          text-transform: none;
        }

        .exam-section-heading strong {
          font-weight: 700;
        }

        .exam-section-heading span {
          font-weight: 400;
        }

        .exam-question-title-row {
          align-items: start;
          display: flex;
          gap: 5mm;
          justify-content: space-between;
          margin-bottom: 4mm;
        }

        .exam-question-title-row h3 {
          font-size: 13pt !important;
          font-weight: 400;
          letter-spacing: 0 !important;
          line-height: 1.25 !important;
          margin: 0;
        }

        .exam-marks {
          font-size: 8.75pt !important;
          line-height: 1.25 !important;
        }

        .exam-question-stem {
          font-size: 10.25pt !important;
          line-height: 1.5 !important;
          margin-bottom: 5mm;
        }

        .exam-answer-stem {
          border-left: 1.5px solid #d1d5db;
          margin-bottom: 5mm;
          padding-left: 4mm;
        }

        .exam-question-page-content {
          display: grid;
          gap: 6mm;
        }

        .exam-question-parts {
          display: grid;
          gap: 5.5mm;
        }

        .exam-print-part {
          break-inside: avoid;
          page-break-inside: avoid;
        }

        .exam-part-prompt-row {
          align-items: start;
          display: flex;
          gap: 4mm;
          justify-content: space-between;
        }

        .exam-part-prompt {
          flex: 1 1 auto;
          font-size: 10.25pt !important;
          line-height: 1.5 !important;
          margin: 0;
          min-width: 0;
          white-space: pre-line;
        }

        .exam-part-prompt.muted {
          color: #525252 !important;
          font-size: 9pt !important;
          line-height: 1.45 !important;
        }

        .exam-part-prompt span {
          font-weight: 400;
        }

        .exam-answer-space {
          margin-top: 2mm;
        }

        .exam-answer-text {
          margin-top: 3mm;
        }

        @media screen {
          .exam-print-document {
            max-width: none !important;
            width: 210mm !important;
            zoom: var(--print-preview-zoom, 1);
          }

          .exam-print-page {
            box-shadow:
              0 16px 35px rgba(15, 23, 42, 0.14),
              0 1px 4px rgba(15, 23, 42, 0.1);
          }
        }

        @media print {
          @page {
            margin: 0;
            size: A4 portrait;
          }

          html,
          body {
            background: #ffffff !important;
            height: auto !important;
            overflow: visible !important;
          }

          .exam-print-shell {
            background: #ffffff !important;
            height: auto !important;
            min-height: 0 !important;
            overflow: visible !important;
          }

          .exam-print-toolbar {
            display: none !important;
          }

          .exam-print-document {
            display: block;
            margin: 0 !important;
            max-width: none !important;
            zoom: 1 !important;
            width: auto !important;
          }

          .exam-print-page {
            border: 0 !important;
            break-after: page;
            box-shadow: none !important;
            min-height: 297mm;
            page-break-after: always;
            width: 210mm;
          }

          .exam-print-page:last-child {
            break-after: auto;
            page-break-after: auto;
          }
        }
      `}</style>

      <div className="exam-print-toolbar sticky top-0 z-30 border-b border-neutral-300 bg-white/95 px-4 py-3 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3">
          <Button asChild size="sm" variant="outline">
            <Link href={backHref}>
              <ArrowLeftIcon className="size-4" />
              Back
            </Link>
          </Button>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="font-mono text-xs">{filename}</span>
            <PrintZoomControls
              canZoomIn={printZoom.canZoomIn}
              canZoomOut={printZoom.canZoomOut}
              onReset={printZoom.resetZoom}
              onZoomChange={printZoom.setZoom}
              onZoomIn={printZoom.zoomIn}
              onZoomOut={printZoom.zoomOut}
              zoom={printZoom.zoom}
              zoomLevels={printZoom.zoomLevels}
            />
            <Button
              disabled={isPreparingPrint}
              onClick={() => {
                void handlePrint();
              }}
              size="sm"
              type="button"
            >
              <PrinterIcon className="size-4" />
              {isPreparingPrint ? "Preparing" : "Print / Save PDF"}
            </Button>
          </div>
        </div>
      </div>

      <div
        className="exam-print-document"
        ref={ref}
        style={
          {
            "--print-preview-zoom": printZoom.zoomScale,
          } as CSSProperties
        }
      >
        <CoverPage
          courseLabel={courseLabel}
          isAnswers={isAnswers}
          paper={paper}
          setLabel={setLabel}
        />
        <ConstantsPage paper={paper} />
        {isAnswers ? (
          <AnswersDocument
            courseLabel={courseLabel}
            mode={mode}
            paper={paper}
            setLabel={setLabel}
          />
        ) : (
          <QuestionsDocument
            courseLabel={courseLabel}
            mode={mode}
            paper={paper}
            setLabel={setLabel}
          />
        )}
      </div>
    </div>
  );
}
