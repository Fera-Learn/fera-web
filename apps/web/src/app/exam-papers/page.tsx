import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@repo/ui/button";

import {
  ClosingCta,
  ExamPaperCard,
  MarketingShell,
  PageHero,
  Section,
  SectionHeading,
  WorkflowRows,
} from "@/components/marketing-components";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  examPaperPreview,
  productLinks,
  studyWorkflow,
} from "@/lib/marketing-data";
import { getMarketingStats } from "@/lib/marketing-stats";

export const metadata: Metadata = {
  description:
    "Prepare with Fera Academy full exam paper sets, timing, marks, and worked answers.",
  title: "Exam Papers",
};

export default async function ExamPapersPage() {
  const stats = await getMarketingStats();
  const physics = stats.courses.find(
    (course) => course.slug === "level-1-physics",
  );

  return (
    <>
      <SiteHeader />
      <MarketingShell>
        <PageHero
          ctaHref={productLinks.examPapers}
          ctaLabel="View exam papers"
          eyebrow="Exam Papers"
          title="Exam practice with real structure."
        >
          Move beyond isolated questions with full paper sets, marks, timing,
          and topic coverage designed to test readiness across a course.
        </PageHero>

        <Section className="pt-0">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Paper preview"
              title="A paper should test coverage, timing, and judgement."
            >
              Full paper sets connect marks, timing, and topic coverage so exam
              practice tests readiness instead of isolated recall.
            </SectionHeading>

            <ExamPaperCard preview={examPaperPreview} />
          </div>
        </Section>

        <Section className="fera-section-rule">
          <WorkflowRows steps={studyWorkflow} />
        </Section>

        {physics ? (
          <Section className="fera-section-rule">
            <div className="fera-institutional-panel border border-border p-6 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
                <div>
                  <p className="text-sm font-medium text-accent">
                    {physics.shortTitle}
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-[-0.045em]">
                    {physics.title} exam papers
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
                    {physics.description}
                  </p>
                  <Button asChild className="mt-8">
                    <Link href={productLinks.examPapers}>
                      Open Level 1 Physics papers
                    </Link>
                  </Button>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="border border-border bg-background p-5">
                    <strong className="block text-3xl tracking-[-0.05em]">
                      {physics.paperCount.toLocaleString()}
                    </strong>
                    <span className="text-sm text-muted-foreground">
                      exam papers
                    </span>
                  </div>
                  <div className="border border-border bg-background p-5">
                    <strong className="block text-3xl tracking-[-0.05em]">
                      {physics.questionCount.toLocaleString()}
                    </strong>
                    <span className="text-sm text-muted-foreground">
                      supporting questions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        ) : null}

        <ClosingCta href={productLinks.examPapers} />
      </MarketingShell>
      <SiteFooter />
    </>
  );
}
