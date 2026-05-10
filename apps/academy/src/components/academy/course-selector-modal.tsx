"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  AtomIcon,
  BookOpenIcon,
  CalculatorIcon,
  SigmaIcon,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@repo/ui/select";

import {
  academyCourses,
  resolveSidebarScopeFromPath,
  type AcademySidebarScope,
} from "@/lib/docs/pages";

type CourseScope = Exclude<AcademySidebarScope, "academy">;

const COURSE_ICONS = {
  "level-1-math-i-physics": CalculatorIcon,
  "level-1-math-ii-physics": SigmaIcon,
  "level-1-physics": AtomIcon,
} satisfies Record<CourseScope, typeof BookOpenIcon>;

function getDestinationPath(scope: CourseScope) {
  return academyCourses.find((course) => course.scope === scope)?.href ?? "/";
}

export function CourseSelector() {
  const pathname = usePathname() ?? "/";
  const router = useRouter();

  const selectedScope = useMemo(() => {
    return resolveSidebarScopeFromPath(pathname);
  }, [pathname]);
  const selectedCourse =
    selectedScope === "academy"
      ? undefined
      : academyCourses.find((course) => course.scope === selectedScope);
  const SelectedIcon = selectedCourse
    ? COURSE_ICONS[selectedCourse.scope]
    : BookOpenIcon;

  return (
    <Select
      onValueChange={(nextScope) => {
        const destination = getDestinationPath(nextScope as CourseScope);

        if (destination !== pathname) {
          router.push(destination);
        }
      }}
      value={selectedScope === "academy" ? undefined : selectedScope}
    >
      <SelectTrigger
        className="h-10 w-full justify-between rounded-xl border-sidebar-border/70 bg-sidebar-accent/25 px-3 text-sidebar-foreground shadow-none hover:bg-sidebar-accent/42"
        size="default"
      >
        <span className="flex min-w-0 items-center gap-2 text-left">
          <SelectedIcon className="size-4 shrink-0" />
          <span className="truncate">
            {selectedCourse?.label ?? "Choose a course"}
          </span>
        </span>
      </SelectTrigger>
      <SelectContent
        align="start"
        className="w-[var(--radix-select-trigger-width)] min-w-[var(--radix-select-trigger-width)] rounded-xl border border-border/70 bg-popover p-1 text-popover-foreground shadow-xl shadow-black/10"
        position="popper"
        sideOffset={6}
      >
        {academyCourses.map((option) => {
          const Icon = COURSE_ICONS[option.scope];

          return (
            <SelectItem
              className="rounded-lg !text-popover-foreground hover:!text-popover-foreground focus:!bg-muted/80 focus:!text-popover-foreground focus:[&_*]:!text-popover-foreground data-[highlighted]:!bg-muted/80 data-[highlighted]:!text-popover-foreground data-[highlighted]:[&_*]:!text-popover-foreground [&_svg]:!text-muted-foreground"
              key={option.scope}
              value={option.scope}
            >
              <Icon className="size-4 text-muted-foreground" />
              <span className="truncate">{option.label}</span>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
