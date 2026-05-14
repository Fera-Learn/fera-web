export const content = String.raw`## Principle

Equilibrium means the vector sum of external forces on the chosen particle is zero.

## Notation

<Notation
  items={[
    { symbol: "\\sum\\vec F", meaning: "resultant external force", unit: "N" },
    { symbol: "F_x,F_y", meaning: "force components", unit: "N" },
    { symbol: "T", meaning: "tension magnitude", unit: "N" },
    { symbol: "N", meaning: "normal reaction magnitude", unit: "N" },
    { symbol: "W", meaning: "weight magnitude", unit: "N" },
    { symbol: "\\theta", meaning: "angle from the chosen horizontal axis", unit: "rad or deg" },
  ]}
/>

## Method

### Derivation 1: Start from Newton's second law

Equilibrium is the zero-acceleration case of the particle model. The forces may be nonzero, but their resultant must vanish.

<PhysicsDerivation
  items={[
    {
      label: "Second law",
      tex: "\\sum\\vec F=m\\vec a",
    },
    {
      label: "Equilibrium condition",
      tex: "\\vec a=\\vec 0\\Rightarrow\\sum\\vec F=\\vec 0",
    },
    {
      label: "Component form",
      tex: "\\sum F_x=0,\\qquad \\sum F_y=0",
      note: "In three dimensions, add \\(\\sum F_z=0\\).",
    },
  ]}
/>

### Derivation 2: Resolve angled forces

Once axes are chosen, each angled force contributes a signed component to each balance equation.

<PhysicsDerivation
  items={[
    {
      label: "Resolve a force",
      tex: "F_x=F\\cos\\theta,\\qquad F_y=F\\sin\\theta",
    },
    {
      label: "Insert signed components",
      tex: "\\sum F_x=F_{1x}+F_{2x}+\\cdots=0",
    },
    {
      label: "Interpret signs",
      tex: "F_{\\mathrm{solved}}<0\\Rightarrow\\text{assumed direction was opposite}",
    },
  ]}
/>

The free-body diagram should contain only forces acting on the particle. The two tensions pull along their strings, and weight acts downward.

<ForceDiagram
  title="Particle equilibrium"
  caption="The force arrows do not vanish; their vector sum does."
  bodyLabel="P"
  bodyShape="point"
  forces={[
    { label: "T_1", angle: 140 },
    { label: "T_2", angle: 40, color: "var(--chart-3)" },
    { label: "W", angle: 270, color: "var(--chart-5)" },
  ]}
/>

Use the diagram to decide signs before solving. A force pointing left contributes a negative x-component if right is positive; a force pointing downward contributes a negative y-component if upward is positive.

## Rules

These are the compact results from the method above.

<Equation label="Vector equilibrium" tex="\sum \vec F=\vec 0" />

<Equation label="Horizontal balance" tex="\sum F_x=0" />

<Equation label="Vertical balance" tex="\sum F_y=0" />

<Equation label="Weight" tex="W=mg" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(120\\,\\mathrm{N}\\) sign hangs from two identical ropes, each \\(40^\\circ\\) above horizontal. Find the rope tension.",
      answer: "The horizontal components cancel by symmetry. Vertical balance gives \\[2T\\sin40^\\circ=120\\] so \\[T=\\frac{120}{2\\sin40^\\circ}=93.3\\,\\mathrm{N}\\]",
    },
    {
      title: "Example 2",
      question: "A \\(5.0\\,\\mathrm{kg}\\) block rests on a frictionless \\(25^\\circ\\) slope, held by a rope along the slope. Find \\(T\\) and \\(N\\).",
      answer: "Choose axes parallel and perpendicular to the slope. Along the slope, \\[T=mg\\sin25^\\circ=20.7\\,\\mathrm{N}\\] Perpendicular to the slope, \\[N=mg\\cos25^\\circ=44.4\\,\\mathrm{N}\\]",
    },
  ]}
/>

## Checks

- Equilibrium is a vector statement, not just vertical balance.
- Components must use one sign convention throughout.
- A normal reaction is perpendicular to the contact surface.
- Tension pulls away from the object along the rope.
- A negative solved force means the assumed direction was reversed.`;
