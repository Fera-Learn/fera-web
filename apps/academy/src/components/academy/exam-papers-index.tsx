"use client";

import Link from "next/link";
import { DownloadIcon, FileTextIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/accordion";
import { Button } from "@repo/ui/button";

type ExamPaperTopic = {
  description: string;
  label: string;
  timeAllowed: string;
  totalMarks: number;
};

type ExamPaperLink = {
  answerPdfHref: string;
  description: string;
  href: string;
  id: string;
  label: string;
  placeholder?: string;
  questionPdfHref: string;
  timeAllowed: string;
  title: string;
  totalMarks: number;
};

type ExamSetLink = {
  description: string;
  id: string;
  label: string;
  papers: ExamPaperLink[];
};

type ExamPapersIndexProps = {
  courseLabel: string;
  paperTopics?: ExamPaperTopic[];
  sets?: ExamSetLink[];
};

function EmptyState({ courseLabel }: { courseLabel: string }) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center gap-3 px-6 py-10 text-center">
      <div className="flex size-10 items-center justify-center rounded-lg bg-muted/60 text-muted-foreground">
        <FileTextIcon className="size-4" />
      </div>
      <div className="space-y-1">
        <h2 className="text-sm font-semibold text-foreground">
          No exam sets yet
        </h2>
        <p className="max-w-sm text-sm leading-6 text-muted-foreground">
          {courseLabel} exam papers have not been written yet.
        </p>
      </div>
    </div>
  );
}

export function ExamPapersIndex({
  courseLabel,
  paperTopics = [],
  sets = [],
}: ExamPapersIndexProps) {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Paper Coverage
        </h2>
        {paperTopics.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {paperTopics.map((topic) => (
              <div className="border-b border-border/70 pb-4" key={topic.label}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-foreground">
                    {topic.label}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {topic.timeAllowed} / {topic.totalMarks} marks
                  </span>
                </div>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            Paper coverage for {courseLabel} will appear here once the first
            exam set is ready.
          </p>
        )}
      </section>

      {sets.length > 0 ? (
        <Accordion type="single" collapsible defaultValue={sets[0]?.id}>
          {sets.map((set) => (
            <AccordionItem key={set.id} value={set.id}>
              <AccordionTrigger className="items-center hover:no-underline">
                <span className="min-w-0 text-sm font-semibold text-foreground">
                  {set.label}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="divide-y divide-border/70">
                  {set.papers.map((paper) => (
                    <div
                      className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
                      key={paper.id}
                    >
                      <Link
                        className="flex min-w-0 items-center gap-3 !no-underline transition-colors hover:!no-underline hover:text-foreground"
                        href={paper.href}
                      >
                        <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted/60 text-muted-foreground">
                          <FileTextIcon className="size-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-sm font-semibold text-foreground">
                            {paper.label}
                          </span>
                        </div>
                      </Link>
                      <div className="flex flex-wrap items-center gap-2 pl-12 sm:pl-0">
                        <Button asChild size="sm" variant="outline">
                          <Link
                            href={paper.questionPdfHref}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <DownloadIcon className="size-4" />
                            Question PDF
                          </Link>
                        </Button>
                        <Button asChild size="sm" variant="outline">
                          <Link
                            href={paper.answerPdfHref}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <DownloadIcon className="size-4" />
                            Answer PDF
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <EmptyState courseLabel={courseLabel} />
      )}
    </div>
  );
}

export type { ExamPaperLink, ExamPaperTopic, ExamSetLink };
