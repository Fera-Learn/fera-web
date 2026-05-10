import type { Metadata } from "next";

import {
  ClosingCta,
  MarketingShell,
  PageHero,
  Section,
  SectionHeading,
  WorkflowRows,
} from "@/components/marketing-components";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  productLinks,
  studentUseCases,
  studyWorkflow,
} from "@/lib/marketing-data";

export const metadata: Metadata = {
  description:
    "Learn about Fera Academy's structured approach to university physics and maths study.",
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <MarketingShell>
        <PageHero
          ctaHref={productLinks.root}
          ctaLabel="Start learning"
          eyebrow="About Fera"
          title="Built for students who learn by doing."
        >
          Fera Academy is built around a simple idea: technical subjects become clearer when explanations, practice, and exam preparation are connected.
        </PageHero>

        <Section className="pt-0">
          <SectionHeading
            eyebrow="Method"
            title="Fera is organised around the way technical subjects are mastered."
          >
            Students need a clear path from topic sequence to deliberate practice and then exam readiness.
          </SectionHeading>

          <div className="mt-10">
            <WorkflowRows steps={studyWorkflow} />
          </div>
        </Section>

        <Section className="fera-section-rule">
          <div className="grid gap-6 md:grid-cols-3">
            {studentUseCases.map((useCase) => (
              <div className="border-t border-border pt-5" key={useCase.title}>
                <h2 className="text-lg font-semibold tracking-[-0.025em]">
                  {useCase.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {useCase.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <ClosingCta href={productLinks.root} />
      </MarketingShell>
      <SiteFooter />
    </>
  );
}
