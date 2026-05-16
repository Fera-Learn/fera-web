import type { Metadata } from "next";

import { CapacitorChargingDiagram, CapacitorDischargingDiagram } from "@repo/diagrams/physics";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/card";

export const metadata: Metadata = {
  title: "Lesson Diagram Demos | Fera Academy",
  description: "Standalone previews for subject-specific diagram components.",
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
  children: React.ReactNode;
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
            Lesson diagrams
          </p>
          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Topic diagram demos
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            Subject-specific previews and reusable component examples for lesson pages.
          </p>
        </header>

        <section className="space-y-4">
          <div className="max-w-3xl space-y-2">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Physics diagrams
            </p>
            <h2 className="font-heading text-2xl font-semibold tracking-tight">
              RC circuit diagrams
            </h2>
            <p className="text-muted-foreground">
              Charging and discharging curves for a capacitor through a resistor, using the new CartesianGrid component system.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <DemoCard
              description="Exponential charging curve with τ = RC time constant marker at 63%."
              title="Capacitor Charging"
            >
              <CapacitorChargingDiagram showCaption={false} />
            </DemoCard>

            <DemoCard
              description="Exponential discharging curve with τ = RC time constant marker at 37%."
              title="Capacitor Discharging"
            >
              <CapacitorDischargingDiagram showCaption={false} />
            </DemoCard>
          </div>
        </section>
      </div>
    </main>
  );
}
