import Link from "next/link";

import { Badge } from "@repo/ui/badge";
import { Button } from "@repo/ui/button";

import {
  ClosingCta,
  CourseCard,
  ExamPaperCard,
  MarketingShell,
  ProductPreview,
  ProofStrip,
  SampleQuestionCard,
  Section,
  SectionHeading,
  WorkflowRows,
} from "@/components/marketing-components";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  examPaperPreview,
  platformProofPoints,
  productLinks,
  sampleQuestionPreview,
  studentUseCases,
  studyWorkflow,
} from "@/lib/marketing-data";
import { getMarketingStats } from "@/lib/marketing-stats";

export default async function Home() {
  const stats = await getMarketingStats();

  return (
    <>
      <SiteHeader />
      <MarketingShell>
        <Section className="pt-12 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="max-w-2xl">
              <Badge variant="secondary">Fera Academy</Badge>
              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.055em] sm:text-6xl sm:tracking-[-0.065em] lg:text-7xl">
                Technical study, connected from course to exam paper.
              </h1>
              <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Fera gives physics and maths students one serious workspace for structured course study, targeted question practice, and full exam preparation.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={productLinks.root}>Start learning</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/courses">Browse courses</Link>
                </Button>
              </div>
            </div>

            <ProductPreview stats={stats} />
          </div>
        </Section>

        <Section className="fera-section-rule py-10 lg:py-12">
          <ProofStrip stats={stats} />
        </Section>

        <Section className="fera-section-rule">
          <SectionHeading
            eyebrow="Study workflow"
            title="One course context across the whole study loop."
          >
            Learn the topic, practise the method, then test exam readiness without moving between disconnected resources.
          </SectionHeading>
          <div className="mt-10">
            <WorkflowRows steps={studyWorkflow} />
          </div>
        </Section>

        <Section className="fera-section-rule">
          <SectionHeading
            eyebrow="Courses"
            title="Structured courses for university-level technical subjects."
          >
            Start with a course path that keeps explanations, topics, questions, and papers connected around the same subject context.
          </SectionHeading>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {stats.courses.map((course) => (
              <CourseCard course={course} key={course.slug} />
            ))}
          </div>
        </Section>

        <Section className="fera-section-rule">
          <SectionHeading
            eyebrow="Product evidence"
            title="Practice and papers are part of the same learning system."
          >
            Question practice and exam preparation sit alongside the course material, so students can move from explanation to evidence of understanding.
          </SectionHeading>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <SampleQuestionCard preview={sampleQuestionPreview} />
            <ExamPaperCard preview={examPaperPreview} />
          </div>
        </Section>

        <Section className="fera-section-rule">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="For students"
              title="Use Fera when technical study needs structure."
            >
              The platform is built for students who need more than generic revision: clear course sequence, deliberate practice, and exam preparation in one place.
            </SectionHeading>

            <div>
              <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
                {studentUseCases.map((useCase) => (
                  <div className="border-t border-border pt-5" key={useCase.title}>
                    <h3 className="text-lg font-semibold tracking-[-0.025em]">
                      {useCase.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {useCase.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {platformProofPoints.map((proofPoint) => (
                  <span
                    className="max-w-full rounded-4xl bg-secondary px-2 py-1 text-xs font-medium leading-5 text-secondary-foreground"
                    key={proofPoint}
                  >
                    {proofPoint}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <ClosingCta href={productLinks.root} />
      </MarketingShell>
      <SiteFooter />
    </>
  );
}
