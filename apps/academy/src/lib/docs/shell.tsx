import type { DocsShellSidebarConfig } from "@repo/docs";
import { CourseSelector } from "@/components/academy/course-selector-modal";

export const docsSidebarConfig: DocsShellSidebarConfig = {
  brand: {
    title: "Fera Academy",
    href: "/",
    imageSrc: "/icon.png",
    imageAlt: "Fera Academy icon",
  },
  showFooterControls: true,
  showSearch: true,
  topContent: <CourseSelector />,
};
