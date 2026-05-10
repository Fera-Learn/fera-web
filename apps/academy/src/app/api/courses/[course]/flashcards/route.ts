import { NextResponse, type NextRequest } from "next/server";

import { getFlashcards, type FlashcardSourceFilter } from "@/lib/flashcards";
import { getCanonicalCourseId } from "@/lib/question-bank";

type RouteContext = {
  params: Promise<{
    course: string;
  }>;
};

function getSource(value: string | null): FlashcardSourceFilter | undefined {
  return value === "all" || value === "question" || value === "equation"
    ? value
    : undefined;
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
  const flashcards = getFlashcards({
    courseId: course,
    paper: searchParams.get("paper") ?? undefined,
    rating: searchParams.get("rating") ?? undefined,
    ratings: getStringList(searchParams, "rating"),
    section: searchParams.get("section") ?? undefined,
    sections: getStringList(searchParams, "section"),
    source: getSource(searchParams.get("source")),
    topic: searchParams.get("topic") ?? undefined,
    topics: getStringList(searchParams, "topic"),
  });

  return NextResponse.json({
    courseId: canonicalCourseId,
    flashcards: flashcards ?? [],
    total: flashcards?.length ?? 0,
  });
}
