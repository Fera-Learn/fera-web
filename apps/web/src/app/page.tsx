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
          <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="max-w-2xl">
              <Badge variant="secondary">Fera Academy</Badge>
              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.055em] sm:text-6xl sm:tracking-[-0.065em] lg:text-7xl">
                University physics and maths, structured from first principles to
                exam practice.
              </h1>
              <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Fera connects course explanations, topic practice, and exam
                papers so students can study technical subjects without jumping
                between disconnected resources.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={productLinks.level1Physics}>
                    Start Level 1 Physics
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/courses">Browse course structure</Link>
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
            eyebrow="Study method"
            title="A course-led route from explanation to exam judgement."
          >
            Technical subjects are easier to revise when the topic sequence,
            practice questions, and papers all refer back to the same structure.
          </SectionHeading>
          <div className="mt-10">
            <WorkflowRows steps={studyWorkflow} />
          </div>
        </Section>

        <Section className="fera-section-rule">
          <SectionHeading
            eyebrow="Course coverage"
            title="Curricula built around topic progression, not isolated resources."
          >
            Each course keeps topic areas, practice questions, and exam
            preparation tied to the same subject map.
          </SectionHeading>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {stats.courses.map((course) => (
              <CourseCard course={course} key={course.slug} />
            ))}
          </div>
        </Section>

        <Section className="fera-section-rule">
          <SectionHeading
            eyebrow="Evidence"
            title="Coverage students can use while they study."
          >
            Fera uses live learning-app counts and course-linked resources so
            the public site reflects the material available inside the study
            workspace.
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
              title="Use Fera when technical study needs a route through the material."
            >
              The platform is designed for students who need structure before
              revision: topic order, deliberate practice, and exam preparation
              in one place.
            </SectionHeading>

            <div>
              <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
                {studentUseCases.map((useCase) => (
                  <div
                    className="border-t border-border pt-5"
                    key={useCase.title}
                  >
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

        <ClosingCta
          ctaLabel="Start Level 1 Physics"
          href={productLinks.level1Physics}
        />
      </MarketingShell>
      <SiteFooter />
    </>
  );
}
