import Link from "next/link";

import { Button } from "@repo/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/card";

import { academyCourses } from "@/lib/docs/pages";

export function CourseCatalog() {
  return (
    <section className="grid gap-4 sm:grid-cols-2">
      {academyCourses.map((course) => (
        <Card className="rounded-lg" key={course.scope}>
          <CardHeader className="space-y-2">
            <CardTitle>{course.label}</CardTitle>
            <CardDescription>{course.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href={course.href}>Open course</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
