import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@repo/ui/button";

import {
  ClosingCta,
  MarketingShell,
  PageHero,
  ProofStrip,
  SampleQuestionCard,
  Section,
  SectionHeading,
  WorkflowRows,
} from "@/components/marketing-components";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  productLinks,
  sampleQuestionPreview,
  studyWorkflow,
} from "@/lib/marketing-data";
import { getMarketingStats } from "@/lib/marketing-stats";

export const metadata: Metadata = {
  description:
    "Practise Fera Academy course-linked physics and maths questions with worked answers.",
  title: "Question Bank",
};

export default async function QuestionBankPage() {
  const stats = await getMarketingStats();

  return (
    <>
      <SiteHeader />
      <MarketingShell>
        <PageHero
          ctaHref={productLinks.questionBank}
          ctaLabel="Start practice"
          eyebrow="Question Bank"
          title="Targeted practice when reading is not enough."
        >
          Use course-linked questions to test understanding, strengthen weak topics, and build the problem-solving fluency needed for exams.
        </PageHero>

        <Section className="pt-0">
          <ProofStrip stats={stats} />
        </Section>

        <Section className="fera-section-rule">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Practice system"
              title="Questions stay attached to the course context."
            >
              Fera is designed so practice reinforces the topic you are studying instead of becoming a disconnected pile of exercises.
            </SectionHeading>

            <SampleQuestionCard preview={sampleQuestionPreview} />
          </div>

          <div className="mt-10">
            <WorkflowRows steps={studyWorkflow} />
          </div>

          <Button asChild className="mt-10" size="lg">
            <Link href={productLinks.questionBank}>Open practice questions</Link>
          </Button>
        </Section>

        <ClosingCta href={productLinks.questionBank} />
      </MarketingShell>
      <SiteFooter />
    </>
  );
}
