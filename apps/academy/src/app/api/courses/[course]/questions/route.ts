import { NextResponse, type NextRequest } from "next/server";

import { getCanonicalCourseId, getQuestions } from "@/lib/question-bank";

type RouteContext = {
  params: Promise<{
    course: string;
  }>;
};

function getBooleanParam(value: string | null) {
  return value === "1" || value === "true";
}

function getLimit(value: string | null) {
  if (!value) {
    return undefined;
  }

  const parsed = Number.parseInt(value, 10);

  return Number.isFinite(parsed) && parsed > 0 ? parsed : undefined;
}

function getSource(value: string | null) {
  return value === "exam" || value === "topic" ? value : undefined;
}

function getStringList(searchParams: URLSearchParams, key: string) {
  const values = searchParams
    .getAll(key)
    .flatMap((value) => value.split(","))
    .map((value) => value.trim())
    .filter(Boolean);

  return values.length > 0 ? values : undefined;
}

export async function GET(request: NextRequest, { params }: RouteContext) {
  const { course } = await params;
  const canonicalCourseId = getCanonicalCourseId(course);

  if (!canonicalCourseId) {
    return NextResponse.json({ error: "Unknown course" }, { status: 404 });
  }

  const { searchParams } = request.nextUrl;
  const questions = getQuestions({
    courseId: course,
    limit: getLimit(searchParams.get("limit")),
    paper: searchParams.get("paper") ?? undefined,
    random: getBooleanParam(searchParams.get("random")),
    rating: searchParams.get("rating") ?? undefined,
    ratings: getStringList(searchParams, "rating"),
    section: searchParams.get("section") ?? undefined,
    sections: getStringList(searchParams, "section"),
    set: searchParams.get("set") ?? undefined,
    source: getSource(searchParams.get("source")),
    topic: searchParams.get("topic") ?? undefined,
    topics: getStringList(searchParams, "topic"),
  });

  return NextResponse.json({
    courseId: canonicalCourseId,
    questions: questions ?? [],
    total: questions?.length ?? 0,
  });
}
