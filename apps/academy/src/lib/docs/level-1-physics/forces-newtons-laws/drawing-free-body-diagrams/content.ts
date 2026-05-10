export const content = String.raw`## Principle

A free-body diagram records only external forces acting directly on the isolated body.

## Notation

<Notation
  items={[
    { symbol: "\\vec{W}", meaning: "weight", unit: "N" },
    { symbol: "\\vec{N}", meaning: "normal reaction", unit: "N" },
    { symbol: "\\vec{T}", meaning: "tension", unit: "N" },
    { symbol: "\\vec{f}", meaning: "friction", unit: "N" },
    { symbol: "\\vec{F}_{\\mathrm{app}}", meaning: "applied force", unit: "N" },
    { symbol: "\\theta", meaning: "incline angle", unit: "rad or deg" },
  ]}
/>

## Method

A free-body diagram is a force inventory before it is an equation.

<PhysicsDerivation
  items={[
    {
      label: "Isolate body",
      tex: "\\text{draw one boundary around the chosen object}",
    },
    {
      label: "Add field force",
      tex: "\\vec{W}=m\\vec{g}",
    },
    {
      label: "Add contacts",
      tex: "\\vec{N}\\perp\\text{surface},\\quad \\vec{f}\\parallel\\text{surface},\\quad \\vec{T}\\parallel\\text{string}",
    },
    {
      label: "Resolve incline weight",
      tex: "W_{\\parallel}=mg\\sin\\theta,\\qquad W_{\\perp}=mg\\cos\\theta",
    },
  ]}
/>

The free-body diagram below shows only forces acting on the block, not forces the block exerts.

<FreeBodyDiagram
  title="Typical block free-body diagram"
  caption="Only forces acting on the block appear; acceleration and forces by the block are omitted."
  bodyLabel="m"
  surface="horizontal"
  forces={[
    { label: "N", angle: 90 },
    { label: "W", angle: 270 },
    { label: "T", angle: 0, color: "var(--chart-3)" },
    { label: "f", angle: 180, color: "var(--chart-5)" },
  ]}
/>

After the inventory is complete, choose axes and write component equations from the listed forces.

## Rules

These are the compact direction and component rules used while drawing.

<Equation label="Weight" tex="\vec{W}=m\vec{g}" />

<Equation label="Normal direction" tex="\vec{N}\perp\text{surface}" />

<Equation label="Tension direction" tex="\vec{T}\parallel\text{string}" />

<Equation label="Incline components" tex="W_{\parallel}=mg\sin\theta,\qquad W_{\perp}=mg\cos\theta" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A block rests on a horizontal table and is pulled by a horizontal string. Name the forces on the block.",
      answer: "The block has \\(W\\) downward, \\(N\\) upward, and \\(T\\) along the string. The table's normal force is not the block's weight.",
    },
    {
      title: "Example 2",
      question: "A block sits on a frictionless incline of angle \\(\\theta\\). Resolve its weight.",
      answer: "Use axes parallel and perpendicular to the plane. \\[W_{\\parallel}=mg\\sin\\theta\\] \\[W_{\\perp}=mg\\cos\\theta\\]",
    },
  ]}
/>

## Checks

- Do not draw forces exerted by the chosen body.
- Do not draw acceleration as a force.
- Normal force is perpendicular to the contact surface.
- For inclines, parallel and perpendicular axes usually make the equations shortest.`;
