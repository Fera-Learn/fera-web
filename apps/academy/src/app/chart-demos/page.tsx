import type { Metadata } from "next";
import type { ReactNode } from "react";

import {
  AreaDiagram,
  ArgandDiagram,
  CartesianDiagram,
  CollisionDiagram,
  CurveDiagram,
  ForceDiagram,
  IntervalAreaDiagram,
  PolarDiagram,
  RigidBodyDiagram,
  StateDiagram,
  VectorFieldDiagram,
} from "@repo/ui/diagrams";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/card";

export const metadata: Metadata = {
  title: "Lesson Diagram Demos | Fera Academy",
  description: "Standalone previews for reusable lesson diagram components.",
  robots: {
    follow: false,
    index: false,
  },
};

function DemoCard({
  children,
  description,
  title,
}: {
  children: ReactNode;
  description: string;
  title: string;
}) {
  return (
    <Card className="bg-background/80 shadow-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="overflow-x-auto">{children}</CardContent>
    </Card>
  );
}

export default function ChartDemosPage() {
  return (
    <main className="h-svh overflow-y-auto bg-muted/30 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <header className="max-w-3xl space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Generic lesson diagrams
          </p>
          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Topic diagram demos
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            Course-agnostic examples showing how shared diagram components can
            explain relationships, regions, directions, and staged changes.
          </p>
        </header>

        <section className="grid gap-6 xl:grid-cols-2">
          <DemoCard
            title="CartesianDiagram"
            description="Shows a measured relationship with labelled features and a callout."
          >
            <CartesianDiagram
              annotations={[{ label: "turning point", offset: { x: -58, y: -22 }, point: { x: 1, y: 2.8 } }]}
              caption="Use this when a topic needs students to identify a feature on a curve before applying an equation or rule."
              curves={[
                {
                  label: "model",
                  points: [
                    { x: -3, y: 2 },
                    { x: -1, y: 0.5 },
                    { x: 1, y: 2.5 },
                    { x: 3, y: 1 },
                  ],
                  smooth: true,
                },
              ]}
              points={[{ label: "sample", x: 2, y: 2 }]}
              title="Reading a curve"
              vectors={[{ from: { x: -2, y: -1 }, label: "change", to: { x: 1, y: 1 } }]}
              xRange={{ label: "x", max: 4, min: -4, step: 2 }}
              yRange={{ label: "y", max: 4, min: -2, step: 2 }}
            />
          </DemoCard>

          <DemoCard
            title="AreaDiagram"
            description="Highlights accumulated contribution under a changing quantity."
          >
            <AreaDiagram
              annotations={[{ label: "largest contribution", offset: { x: 34, y: -28 }, point: { x: 3, y: 3 } }]}
              caption="The shaded region is labelled in-place, so the visual carries its own meaning inside a lesson page."
              curves={[
                {
                  id: "curve",
                  label: "rate",
                  points: [
                    { x: 0, y: 0.5 },
                    { x: 1, y: 2 },
                    { x: 2, y: 1.4 },
                    { x: 3, y: 3 },
                    { x: 4, y: 1.8 },
                  ],
                  smooth: true,
                },
              ]}
              regions={[{ baseline: 0, curve: "curve", label: "accumulated total" }]}
              title="Accumulation from a rate"
              xRange={{ label: "time", max: 4, min: 0, step: 1 }}
              yRange={{ label: "rate", max: 4, min: 0, step: 1 }}
            />
          </DemoCard>

          <DemoCard
            title="IntervalAreaDiagram"
            description="Compares how separate intervals contribute to a total."
          >
            <IntervalAreaDiagram
              caption="Separate intervals make it clear which part of a process contributes more before students calculate totals."
              intervals={[
                {
                  id: "first",
                  label: "early",
                  points: [
                    { x: 0, y: 0 },
                    { x: 1, y: 1.4 },
                    { x: 2, y: 0.8 },
                  ],
                },
                {
                  id: "second",
                  label: "later",
                  points: [
                    { x: 2, y: 0.8 },
                    { x: 3, y: 2.2 },
                    { x: 4, y: 1.1 },
                  ],
                },
              ]}
              title="Comparing intervals"
              xRange={{ label: "time", max: 4, min: 0, step: 1 }}
              yRange={{ label: "contribution", max: 3, min: 0, step: 1 }}
            />
          </DemoCard>

          <DemoCard
            title="ArgandDiagram"
            description="Displays magnitude and direction for a point in a plane."
          >
            <ArgandDiagram
              argumentArcs={[{ angle: 35, label: "argument" }]}
              caption="Magnitude rings and argument callouts support topics where position is described by size and angle."
              modulusRings={[2]}
              points={[{ imaginary: 1.6, label: "z", real: 2.4 }]}
              title="Magnitude and argument"
              vectors={[{ label: "modulus", to: { imaginary: 1.6, real: 2.4 } }]}
            />
          </DemoCard>

          <DemoCard
            title="PolarDiagram"
            description="Shows how radius varies with angle."
          >
            <PolarDiagram
              caption="A polar trace can reveal symmetry or directional dependence more directly than a rectangular graph."
              curves={[
                {
                  points: [
                    { angle: 0, radius: 1.2 },
                    { angle: 45, radius: 2.2 },
                    { angle: 90, radius: 1.6 },
                    { angle: 135, radius: 2.6 },
                    { angle: 180, radius: 1.8 },
                  ],
                },
              ]}
              maxRadius={3}
              title="Directional profile"
              vectors={[{ angle: 45, label: "selected radius", radius: 2.4 }]}
            />
          </DemoCard>

          <DemoCard
            title="ForceDiagram"
            description="Arranges labelled directional quantities around a central object."
          >
            <ForceDiagram
              bodyLabel="object"
              caption="The body, surface, and labelled arrows keep the diagram readable when the lesson is about balancing directions."
              forces={[
                { angle: -90, label: "weight", length: 54 },
                { angle: 0, label: "push", length: 46 },
                { angle: 135, label: "contact", length: 42 },
              ]}
              surface="horizontal"
              title="Balancing directions"
            />
          </DemoCard>

          <DemoCard
            title="RigidBodyDiagram"
            description="Places supports, loads, and turning effects along a span."
          >
            <RigidBodyDiagram
              beamLength={10}
              caption="This layout helps a learner connect distances, supports, downward loads, and rotations before writing equations."
              loads={[
                { label: "load A", x: 3 },
                { angle: -70, label: "load B", x: 7 },
              ]}
              supports={[
                { label: "left", type: "pin", x: 0 },
                { label: "right", type: "roller", x: 10 },
              ]}
              title="Beam layout"
              torques={[{ direction: "clockwise", label: "turning effect", x: 5 }]}
            />
          </DemoCard>

          <DemoCard
            title="CurveDiagram"
            description="Draws a path with local direction and feature labels."
          >
            <CurveDiagram
              caption="A path diagram can mark local direction without requiring a full coordinate treatment."
              labels={[{ label: "change in direction", x: 2, y: 2.2 }]}
              path={[
                { x: 0, y: 0 },
                { x: 1, y: 1.8 },
                { x: 2, y: 2.2 },
                { x: 3, y: 1.2 },
                { x: 4, y: 2.6 },
              ]}
              title="Path and direction"
              vectors={[{ from: { x: 2, y: 2.2 }, label: "local direction", to: { x: 3, y: 1.2 } }]}
            />
          </DemoCard>

          <DemoCard
            title="CollisionDiagram"
            description="Compares object positions and directions across stages."
          >
            <CollisionDiagram
              caption="Side-by-side stages make before/after reasoning explicit without needing an animation."
              stages={[
                {
                  id: "before",
                  label: "Before",
                  objects: [
                    { id: "a", label: "A", position: { x: -1, y: 0 }, vector: { to: { x: 1, y: 0 } } },
                    { id: "b", label: "B", position: { x: 1.5, y: 0 } },
                  ],
                },
                {
                  id: "after",
                  label: "After",
                  objects: [
                    { id: "a", label: "A", position: { x: -0.6, y: 0 }, vector: { to: { x: -0.7, y: 0.3 } } },
                    { id: "b", label: "B", position: { x: 0.8, y: 0 }, vector: { to: { x: 0.8, y: 0.2 } } },
                  ],
                },
              ]}
              title="Before and after"
            />
          </DemoCard>

          <DemoCard
            title="VectorFieldDiagram"
            description="Samples local direction and strength across a space."
          >
            <VectorFieldDiagram
              caption="A sparse field is useful when the concept is local direction rather than exact numeric values everywhere."
              field={[
                { from: { x: -2, y: -1 }, magnitude: 0.35, to: { x: -1.4, y: -0.6 } },
                { from: { x: 0, y: -1 }, magnitude: 0.55, to: { x: 0.5, y: -0.3 } },
                { from: { x: 2, y: -1 }, magnitude: 0.75, to: { x: 2.5, y: -0.1 } },
                { from: { x: -2, y: 1 }, magnitude: 0.75, to: { x: -1.3, y: 1.4 } },
                { from: { x: 0, y: 1 }, magnitude: 0.45, to: { x: 0.3, y: 1.7 } },
                { from: { x: 2, y: 1 }, magnitude: 0.35, to: { x: 2.4, y: 1.3 } },
              ]}
              title="Local direction field"
              xRange={{ label: "x", max: 3, min: -3, step: 1 }}
              yRange={{ label: "y", max: 2, min: -2, step: 1 }}
            />
          </DemoCard>

          <DemoCard
            title="StateDiagram"
            description="Shows levels, transitions, and a path between states."
          >
            <StateDiagram
              caption="Levels and transitions make threshold or state-change topics easier to scan before the algebra appears."
              curve={{
                dashed: true,
                label: "path",
                points: [
                  { x: 0, y: 0.5 },
                  { x: 1, y: 1.3 },
                  { x: 2, y: 2.7 },
                  { x: 3, y: 1.8 },
                ],
              }}
              levels={[
                { label: "low", value: 1 },
                { label: "mid", value: 2 },
                { label: "high", value: 3 },
              ]}
              title="State change"
              transitions={[{ from: 1, label: "transition", to: 3, x: 1.5 }]}
              xRange={{ label: "index", max: 3, min: 0, step: 1 }}
              yRange={{ label: "state", max: 4, min: 0, step: 1 }}
            />
          </DemoCard>
        </section>
      </div>
    </main>
  );
}
