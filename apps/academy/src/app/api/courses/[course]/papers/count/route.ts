import { NextResponse } from "next/server";

import { getCanonicalCourseId, getPaperCount } from "@/lib/question-bank";

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

  return NextResponse.json({
    courseId: canonicalCourseId,
    total: getPaperCount({ courseId: course }) ?? 0,
  });
}
