import Link from "next/link";
import type { ReactNode } from "react";

import { Badge } from "@repo/ui/badge";
import { Button } from "@repo/ui/button";
import { Card, CardContent, CardHeader } from "@repo/ui/card";
import { cn } from "@repo/ui/lib/utils";

import type {
  CourseMarketingStats,
  MarketingStats,
} from "@/lib/marketing-stats";

export function MarketingShell({ children }: { children: ReactNode }) {
  return <main className="fera-page-background min-w-0">{children}</main>;
}

export function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("px-4 py-14 sm:px-6 lg:px-8 lg:py-20", className)}>
      <div className="mx-auto min-w-0 w-full max-w-7xl">{children}</div>
    </section>
  );
}

export function PageHero({
  ctaHref,
  ctaLabel,
  eyebrow,
  title,
  children,
}: {
  children: ReactNode;
  ctaHref: string;
  ctaLabel: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <Section className="pt-14 lg:pt-18">
      <div className="max-w-3xl animate-fade-up">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-5 text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl sm:tracking-[-0.055em] lg:text-6xl">
          {title}
        </h1>
        <div className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {children}
        </div>
        <Button asChild className="mt-8" size="lg">
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </div>
    </Section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  children: ReactNode;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
        {title}
      </h2>
      <div className="mt-4 text-base leading-7 text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

export function LiveStats({ stats }: { stats: MarketingStats }) {
  return <ProofStrip stats={stats} />;
}

export function ProofStrip({ stats }: { stats: MarketingStats }) {
  const items = [
    { label: "Courses", value: stats.courseCount.toLocaleString() },
    {
      label: "Practice questions",
      value: stats.questionCount.toLocaleString(),
    },
    { label: "Exam papers", value: stats.paperCount.toLocaleString() },
  ];

  return (
    <dl className="grid divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {items.map((item, index) => (
        <div
          className="animate-fade-up flex flex-col px-0 py-6 sm:px-6"
          key={item.label}
          style={{ animationDelay: `${index * 90}ms` }}
        >
          <dt className="order-2 mt-1 text-sm text-muted-foreground">
            {item.label}
          </dt>
          <dd className="order-1 text-3xl font-semibold tracking-[-0.045em]">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ProductPreview({ stats }: { stats: MarketingStats }) {
  const course =
    stats.courses.find((item) => item.slug === "level-1-physics") ??
    stats.courses[0];

  return (
    <div className="fera-product-frame min-w-0 w-full border border-border bg-background">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="size-2 rounded-full bg-border" />
          <span className="size-2 rounded-full bg-border" />
          <span className="size-2 rounded-full bg-border" />
        </div>
        <span className="min-w-0 truncate text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Fera study workspace
        </span>
      </div>
      <div className="grid min-h-[360px] lg:grid-cols-[280px_1fr]">
        <aside className="border-b border-border p-4 lg:border-b-0 lg:border-r">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Courses
          </p>
          <ul aria-label="Available courses" className="mt-4 space-y-2">
            {stats.courses.slice(0, 4).map((item) => {
              const isActive = item.slug === course?.slug;

              return (
                <li
                  className={cn(
                    "border border-border px-3 py-3 text-sm",
                    isActive
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground",
                  )}
                  key={item.slug}
                >
                  <div className="font-medium">{item.shortTitle}</div>
                  <div className="mt-1 text-xs">
                    {item.questionCount.toLocaleString()} questions
                  </div>
                </li>
              );
            })}
          </ul>
        </aside>
        <div className="p-5 sm:p-6 lg:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-5">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Course detail
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                {course?.title ?? "Course library"}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                {course?.description ??
                  "Structured course material, practice questions, and exam papers in one workspace."}
              </p>
            </div>
            {course ? (
              <p className="mt-3 max-w-xl text-xs leading-5 text-muted-foreground">
                For: {course.audience}
              </p>
            ) : null}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <ProductMetric label="Topics" value={course?.topics.length ?? 0} />
            <ProductMetric
              label="Questions"
              value={course?.questionCount ?? stats.questionCount}
            />
            <ProductMetric
              label="Papers"
              value={course?.paperCount ?? stats.paperCount}
            />
          </div>
          <div className="mt-6 border border-border p-4">
            <p className="text-sm font-medium">Active topics</p>
            <ul className="mt-3 grid gap-2 sm:flex sm:flex-wrap">
              {(course?.topics ?? []).map((topic) => (
                <li
                  className="w-fit max-w-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                  key={topic}
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductMetric({ label, value }: { label: string; value: number }) {
  return (
    <div className="border border-border p-4">
      <div className="text-2xl font-semibold tracking-[-0.04em]">
        {value.toLocaleString()}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function WorkflowRows({
  steps,
}: {
  steps: { label: string; body: string }[];
}) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {steps.map((step, index) => (
        <div
          className="grid gap-3 py-5 sm:grid-cols-[120px_1fr] sm:gap-6"
          key={step.label}
        >
          <div className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Step {index + 1}
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-[-0.025em]">
              {step.label}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {step.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function SampleQuestionCard({
  preview,
}: {
  preview: {
    answer: string;
    course: string;
    marks: number;
    prompt: string;
    topic: string;
  };
}) {
  return (
    <Card className="rounded-2xl border-border shadow-none">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="secondary">{preview.topic}</Badge>
          <span className="text-sm text-muted-foreground">
            {preview.marks} marks
          </span>
        </div>
        <p className="text-sm font-medium text-accent">{preview.course}</p>
      </CardHeader>
      <CardContent className="space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Question
          </p>
          <p className="mt-2 text-base leading-7">{preview.prompt}</p>
        </div>
        <div className="border-t border-border pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Answer approach
          </p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {preview.answer}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export function ExamPaperCard({
  preview,
}: {
  preview: {
    course: string;
    duration: string;
    marks: number;
    sections: string[];
    title: string;
  };
}) {
  return (
    <Card className="rounded-2xl border-border shadow-none">
      <CardHeader>
        <p className="text-sm font-medium text-accent">{preview.course}</p>
        <h3 className="text-2xl font-semibold tracking-[-0.04em]">
          {preview.title}
        </h3>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 border-y border-border py-4 text-sm">
          <div>
            <span className="block text-muted-foreground">Duration</span>
            <strong className="mt-1 block font-semibold">
              {preview.duration}
            </strong>
          </div>
          <div>
            <span className="block text-muted-foreground">Marks</span>
            <strong className="mt-1 block font-semibold">
              {preview.marks}
            </strong>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Sections
          </p>
          <ul className="mt-3 divide-y divide-border border-y border-border">
            {preview.sections.map((section) => (
              <li className="py-3 text-sm" key={section}>
                {section}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

export function CourseCard({ course }: { course: CourseMarketingStats }) {
  return (
    <Card className="rounded-2xl border-border bg-background transition-colors hover:border-accent/50">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-accent">
              {course.shortTitle}
            </p>
            <h3 className="mt-2 text-2xl font-semibold leading-none tracking-[-0.04em]">
              {course.title}
            </h3>
          </div>
          <Badge variant="secondary">{course.paperCount} papers</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="text-sm leading-6 text-muted-foreground">
          {course.description}
        </p>
        <ul className="flex flex-wrap gap-2">
          {course.topics.map((topic) => (
            <li
              className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
              key={topic}
            >
              {topic}
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl border border-border p-4">
            <strong className="block text-xl tracking-[-0.03em]">
              {course.questionCount.toLocaleString()}
            </strong>
            <span className="text-muted-foreground">questions</span>
          </div>
          <div className="rounded-2xl border border-border p-4">
            <strong className="block text-xl tracking-[-0.03em]">
              {course.paperCount.toLocaleString()}
            </strong>
            <span className="text-muted-foreground">papers</span>
          </div>
        </div>
        <Button asChild className="w-full">
          <Link href={course.href}>Open course</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export function FeaturePanel({
  ctaHref,
  ctaLabel,
  description,
  facts,
  title,
}: {
  ctaHref: string;
  ctaLabel: string;
  description: string;
  facts: string[];
  title: string;
}) {
  return (
    <div className="fera-institutional-panel grid gap-8 border border-border p-6 lg:grid-cols-[1fr_0.9fr] lg:p-10">
      <div>
        <h2 className="text-3xl font-semibold tracking-[-0.045em]">{title}</h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
          {description}
        </p>
        <Button asChild className="mt-8">
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </div>
      <ul className="grid gap-3">
        {facts.map((fact) => (
          <li
            className="rounded-2xl border border-border bg-background p-4 text-sm font-medium"
            key={fact}
          >
            {fact}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ClosingCta({ href }: { href: string }) {
  return (
    <Section className="fera-section-rule">
      <div className="grid gap-6 border-y border-border py-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
            Start with the course, practise the topic, then test the paper.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            Fera is designed around the way technical subjects are actually
            mastered: structure first, deliberate practice second, exam
            preparation last.
          </p>
        </div>
        <Button asChild size="lg">
          <Link href={href}>Start learning</Link>
        </Button>
      </div>
    </Section>
  );
}
