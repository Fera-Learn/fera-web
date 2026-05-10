import type { DocHeading } from "@repo/docs";

import { getPaperCount, getQuestionCount } from "@/lib/question-bank";

const questionCount = getQuestionCount({ courseId: "level-1-physics" }) ?? 0;
const paperCount = getPaperCount({ courseId: "level-1-physics" }) ?? 0;

export const level1PhysicsCourseIntroHeadings: DocHeading[] = [
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

export const level1PhysicsCourseIntroBody = String.raw`<div className="not-prose grid gap-3 sm:grid-cols-2">
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

Level 1 - Physics is a calculus-based physics course for learners who want to build models, not just substitute into formulas. It treats mechanics, fields, waves, thermal physics, and modern physics as connected systems of assumptions, equations, checks, and measurable predictions.

The course focuses on quantitative reasoning, clear assumptions, derivations, and multi-step problem solving. You will use vectors, calculus, conservation laws, fields, waves, circuits, relativity, and quantum ideas to move from a physical situation to a defensible solution.

<h2 id="what-you-will-study">What You Will Study</h2>

- **Mechanics and rotation:** motion, forces, energy, momentum, circular motion, rigid-body rotation, torque, angular momentum, equilibrium, materials, fluids, and gravitation.
- **Waves, sound, and optics:** mechanical waves, sound, electromagnetic waves, geometric optics, interference, diffraction, and resolution.
- **Thermal physics:** temperature, heat, equations of state, molecular models, thermodynamic processes, entropy, and heat engines.
- **Electricity and magnetism:** charge, electric fields, Gauss's law, potential, capacitors, current, circuits, magnetic fields, induction, inductance, AC circuits, and Maxwell's equations.
- **Modern physics:** relativity, photons, matter waves, quantum wave functions, atomic structure, condensed matter, nuclear physics, particles, and cosmology.

<h2 id="how-the-course-works">How The Course Works</h2>

Each topic page introduces the core model, the equations that follow from it, and the checks that keep the reasoning physically consistent.

Question mode gives practice beside the worked answers, so you can move between the explanation, the problem, and the solution without changing context.

Exam papers are organised separately from the topic pages. They combine material across the course and are written as timed papers with complete worked solutions.

<h2 id="assessment-and-exam-practice">Assessment And Exam Practice</h2>

Use [Exam Papers](/level-1-physics/exam-papers) when you want full-paper practice rather than topic-by-topic revision.

Each exam set contains two papers. Paper 1 focuses mainly on mechanics, waves, optics, oscillations, collisions, conservation, and fields. Paper 2 focuses mainly on electromagnetism, relativity, quantum mechanics, and mathematical modelling.

<h2 id="recommended-starting-points">Recommended Starting Points</h2>

- [Foundations](/level-1-physics/measurement-vectors/how-physics-builds-models)
- [One-dimensional motion](/level-1-physics/one-dimensional-motion/position-and-time)
- [Work and energy](/level-1-physics/work-energy-power/work-by-a-force)
- [Electric fields](/level-1-physics/electric-charge-fields/electric-charge)
- [Relativity](/level-1-physics/relativity/invariance-of-physical-laws)
- [Quantum wave functions](/level-1-physics/quantum-wave-functions/wave-functions)`;
