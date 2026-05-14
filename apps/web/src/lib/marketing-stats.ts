import { academyUrl } from "./academy-links";
import { marketingCourses, type MarketingCourse } from "./marketing-data";

type CountResponse = {
  courseId: string;
  total: number;
};

export type CourseMarketingStats = MarketingCourse & {
  paperCount: number;
  paperCountSource: "fallback" | "live";
  questionCount: number;
  questionCountSource: "fallback" | "live";
  topicCount: number;
};

export type MarketingStats = {
  courseCount: number;
  courses: CourseMarketingStats[];
  paperCount: number;
  questionCount: number;
};

async function fetchCount(path: string) {
  try {
    const response = await fetch(academyUrl(path), {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(2500),
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as Partial<CountResponse>;

    return typeof data.total === "number" ? data.total : null;
  } catch {
    return null;
  }
}

async function getStatsForCourse(course: MarketingCourse) {
  const [questionCount, paperCount] = await Promise.all([
    fetchCount(`/api/courses/${course.slug}/questions/count`),
    fetchCount(`/api/courses/${course.slug}/papers/count`),
  ]);

  return {
    audience: course.audience,
    description: course.description,
    examHref: course.examHref,
    fallbackPaperCount: course.fallbackPaperCount,
    fallbackQuestionCount: course.fallbackQuestionCount,
    href: course.href,
    paperCount: paperCount ?? course.fallbackPaperCount,
    paperCountSource: paperCount === null ? "fallback" : "live",
    questionHref: course.questionHref,
    questionCount: questionCount ?? course.fallbackQuestionCount,
    questionCountSource: questionCount === null ? "fallback" : "live",
    shortTitle: course.shortTitle,
    slug: course.slug,
    title: course.title,
    topicCount: course.topicCount ?? course.topics.length,
    topics: course.topics,
  } satisfies CourseMarketingStats;
}

export async function getMarketingStats(): Promise<MarketingStats> {
  const courses = await Promise.all(marketingCourses.map(getStatsForCourse));

  return {
    courseCount: courses.length,
    courses,
    paperCount: courses.reduce((total, course) => total + course.paperCount, 0),
    questionCount: courses.reduce(
      (total, course) => total + course.questionCount,
      0,
    ),
  };
}
