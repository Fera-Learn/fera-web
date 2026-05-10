import { NextResponse } from "next/server";

import { getCanonicalCourseId, getPapers } from "@/lib/question-bank";

type RouteContext = {
  params: Promise<{
    course: string;
  }>;
};

export async function GET(_: Request, { params }: RouteContext) {
  const { course } = await params;
  const canonicalCourseId = getCanonicalCourseId(course);

  if (!canonicalCourseId) {
    return NextResponse.json({ error: "Unknown course" }, { status: 404 });
  }

  const papers = getPapers({ courseId: course }) ?? [];

  return NextResponse.json({
    courseId: canonicalCourseId,
    papers,
    total: papers.length,
  });
}
