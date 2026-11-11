import type { DocHeading } from "@repo/docs";

import { getPaperCount, getQuestionCount } from "@/lib/question-bank";

const questionCount = getQuestionCount({ courseId: "level-2-geophysics" }) ?? 0;
const paperCount = getPaperCount({ courseId: "level-2-geophysics" }) ?? 0;

export const level2GeophysicsCourseIntroHeadings: DocHeading[] = [
  { id: "course-purpose", level: 2, title: "Course Purpose" },
  { id: "what-you-will-study", level: 2, title: "What You Will Study" },
  { id: "how-the-course-works", level: 2, title: "How The Course Works" },
  {
    id: "assessment-and-exam-practice",
    level: 2,
    title: "Assessment And Exam Practice",
  },
  {
    id: "recommended-starting-points",
    level: 2,
    title: "Recommended Starting Points",
  },
];

export const level2GeophysicsCourseIntroBody = String.raw`<div className="not-prose grid gap-3 sm:grid-cols-2">
  <div className="rounded-lg border border-border/80 bg-muted/25 p-4">
    <p className="text-sm font-medium text-muted-foreground">Questions available</p>
    <div className="mt-3 text-5xl font-semibold leading-none text-foreground">${questionCount.toLocaleString("en-GB")}</div>
  </div>
  <div className="rounded-lg border border-border/80 bg-muted/25 p-4">
    <p className="text-sm font-medium text-muted-foreground">Exam papers available</p>
    <div className="mt-3 text-5xl font-semibold leading-none text-foreground">${paperCount.toLocaleString("en-GB")}</div>
  </div>
</div>

<h2 id="course-purpose">Course Purpose</h2>

Level 2 - Geophysics is a second-year environmental-geophysics course for learners who want to connect soil and groundwater processes to measurable physical and chemical properties. The current course foundation focuses on the near-surface environment represented by the available lectures: how soils form, how water moves through them, and why water and charged mineral surfaces affect electrical measurements.

The course is designed to move from field observations and samples to quantitative models and defensible interpretations. It establishes the environmental context needed to understand what later geophysical surveys respond to and why different subsurface materials can produce similar signals.

<h2 id="what-you-will-study">What You Will Study</h2>

- **Soils in environmental geophysics:** soil origins, weathering, horizons, interfaces, mapping, and classification.
- **Soil physical properties:** texture, mineralogy, aggregation, compaction, pore space, density, and porosity.
- **Soil and groundwater hydrology:** water content, capillarity, plant-available water, infiltration, Darcy flow, aquifers, and recharge.
- **Soil-water chemistry and electrical properties:** dissolved ions, conductivity, pH, clay and humus charge, ion exchange, and surface conduction.

<h2 id="how-the-course-works">How The Course Works</h2>

The course outline is organised into focused topic pages so each physical process, measurement, or interpretation can be studied independently. Lesson explanations, diagrams, worked examples, and topic questions will be added to these pages as the course is developed.

Question mode will place practice beside the relevant lesson and show complete worked answers. Flashcards will draw from those questions when they become available.

<h2 id="assessment-and-exam-practice">Assessment And Exam Practice</h2>

Use [Exam Papers](/level-2-geophysics/exam-papers) for course-level assessment once papers have been added. Exam papers are not yet available for this course.

<h2 id="recommended-starting-points">Recommended Starting Points</h2>

- [Environmental geophysics and soil interfaces](/level-2-geophysics/soil-systems-and-origins/environmental-geophysics-and-soil-interfaces)
- [Soil texture and particle-size classes](/level-2-geophysics/soil-texture-and-mineralogy/soil-texture-and-particle-size-classes)
- [Zones of water in the ground](/level-2-geophysics/soil-water-storage-and-measurement/zones-of-water-in-the-ground)
- [Major ions and sources of dissolved solutes](/level-2-geophysics/dissolved-solutes-and-water-measurements/major-ions-and-sources-of-dissolved-solutes)`;
