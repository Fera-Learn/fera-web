export const content = String.raw`## Principle

A force is an external interaction represented by a vector on one chosen system.

## Notation

<Notation
  items={[
    { symbol: "\\vec{F}", meaning: "force vector", unit: "N" },
    { symbol: "\\sum\\vec{F}", meaning: "resultant external force", unit: "N" },
    { symbol: "F_x", meaning: "x-component of a force", unit: "N" },
    { symbol: "F_y", meaning: "y-component of a force", unit: "N" },
    { symbol: "\\hat{\\imath},\\hat{\\jmath}", meaning: "unit vectors along chosen axes" },
  ]}
/>

## Method

Force models start by deciding what object or collection is inside the system boundary.

<PhysicsDerivation
  items={[
    {
      label: "Choose system",
      tex: "\\mathrm{system}=\\text{body or collection being modeled}",
      note: "Changing the boundary changes which forces are external.",
    },
    {
      label: "Name outside agents",
      tex: "\\vec{F}_{\\text{on system by agent}}",
      note: "Forces by the system belong on another object's diagram.",
    },
    {
      label: "Resolve directions",
      tex: "\\vec{F}=F_x\\hat{\\imath}+F_y\\hat{\\jmath}",
    },
    {
      label: "Add components",
      tex: "\\sum\\vec{F}=(\\sum F_x)\\hat{\\imath}+(\\sum F_y)\\hat{\\jmath}",
    },
  ]}
/>

The graph shows tail-to-tail force vectors on the same object; the diagonal vector is their resultant.

<CartesianPhysicsGraph
  title="Adding forces on one object"
  caption="Only forces acting on the chosen object are added to form its resultant."
  xRange={{ min: -4, max: 6, step: 2, label: "F_x / N" }}
  yRange={{ min: -3, max: 5, step: 2, label: "F_y / N" }}
  vectors={[
    { to: { x: 4, y: 0 }, label: "F_1" },
    { to: { x: 0, y: 3 }, label: "F_2" },
    { to: { x: 4, y: 3 }, label: "\\sum F" },
  ]}
/>

In component form, the diagonal vector is built by adding horizontal parts together and vertical parts together.

## Rules

These are the compact results from the component construction above.

<Equation label="External sum" tex="\sum\vec{F}=\vec{F}_1+\vec{F}_2+\cdots" />

<Equation label="Component sum" tex="\sum F_x=F_{1x}+F_{2x}+\cdots,\qquad \sum F_y=F_{1y}+F_{2y}+\cdots" />

<Equation label="Vector form" tex="\sum\vec{F}=(\sum F_x)\hat{\imath}+(\sum F_y)\hat{\jmath}" />

<Equation label="Force unit" tex="1\,\mathrm{N}=1\,\mathrm{kg\,m\,s^{-2}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Two horizontal forces act on a trolley: \\(18\\,\\mathrm{N}\\) right and \\(7\\,\\mathrm{N}\\) left. Find the resultant.",
      answer: "Take right as positive. \\[\\sum F_x=18-7=11\\,\\mathrm{N}\\] The resultant force is \\(11\\,\\mathrm{N}\\) right.",
    },
    {
      title: "Example 2",
      question: "A handle pulls with \\(20\\,\\mathrm{N}\\) at \\(30^\\circ\\) above horizontal. Find the force components.",
      answer: "\\[F_x=20\\cos30^\\circ=17.3\\,\\mathrm{N}\\] \\[F_y=20\\sin30^\\circ=10.0\\,\\mathrm{N}\\]",
    },
  ]}
/>

## Checks

- Every force needs an object and an outside agent.
- Perpendicular components combine by vector addition, not scalar cancellation.
- Opposite directions on the same axis require opposite signs.
- The resultant is a single vector, not a new interaction.`;
