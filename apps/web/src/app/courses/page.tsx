import type { Metadata } from "next";

import {
  ClosingCta,
  CourseCard,
  MarketingShell,
  PageHero,
  ProductPreview,
  ProofStrip,
  Section,
  SectionHeading,
} from "@/components/marketing-components";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { productLinks } from "@/lib/marketing-data";
import { getMarketingStats } from "@/lib/marketing-stats";

export const metadata: Metadata = {
  description:
    "Browse Fera Academy physics and maths courses for university-level study.",
  title: "Courses",
};

export default async function CoursesPage() {
  const stats = await getMarketingStats();

  return (
    <>
      <SiteHeader />
      <MarketingShell>
        <PageHero
          ctaHref={productLinks.root}
          ctaLabel="Start learning"
          eyebrow="Courses"
          title="Courses built for technical study."
        >
          Choose a structured path through the maths and physics foundations
          behind university-level problem solving.
        </PageHero>

        <Section className="pt-0">
          <ProofStrip stats={stats} />
        </Section>

        <Section className="fera-section-rule">
          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Catalogue"
              title="Course structure before practice volume."
            >
              Each course connects explanations, topic practice, and exam
              preparation so progress stays practical.
            </SectionHeading>

            <ProductPreview stats={stats} />
          </div>
        </Section>

        <Section className="fera-section-rule">
          <SectionHeading
            eyebrow="Courses"
            title="Start where your study needs structure."
          >
            Browse the live course catalogue and choose the subject context that
            matches your study plan.
          </SectionHeading>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {stats.courses.map((course) => (
              <CourseCard course={course} key={course.slug} />
            ))}
          </div>
        </Section>

        <ClosingCta href={productLinks.root} />
      </MarketingShell>
      <SiteFooter />
    </>
  );
}
