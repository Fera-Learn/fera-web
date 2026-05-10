export const content = String.raw`## Principle

Reflection at a boundary is set by the condition the medium must satisfy at that boundary.

The inversion or non-inversion of the reflected wave is not a separate rule to memorize; it comes from enforcing the correct boundary condition.

## Notation

<Notation
  items={[
    { symbol: "y_i", meaning: "incident-wave displacement", unit: "m" },
    { symbol: "y_r", meaning: "reflected-wave displacement", unit: "m" },
    { symbol: "y", meaning: "total displacement", unit: "m" },
    { symbol: "x=L", meaning: "boundary position", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Apply the fixed-end condition

At a fixed end, the medium cannot move. The total displacement must therefore be zero at the boundary for all times.

<PhysicsDerivation
  items={[
    {
      label: "Fixed end",
      tex: "y(L,t)=0",
    },
    {
      label: "Add incident and reflected parts",
      tex: "y_i(L,t)+y_r(L,t)=0",
    },
    {
      label: "Reflection rule",
      tex: "y_r(L,t)=-y_i(L,t)",
      note: "The reflected pulse is inverted at the boundary.",
    },
  ]}
/>

The fixed-end reflection below shows that the reflected pulse has opposite sign so the total displacement vanishes at the wall.

<CartesianPhysicsGraph
  height={180}
  width={360}
  xRange={{ min: 0, max: 10, step: 2, label: "x" }}
  yRange={{ min: -1.2, max: 1.2, step: 0.6, label: "y" }}
  curves={[
    {
      label: "incident",
      points: [
        { x: 6.4, y: 0 },
        { x: 7.0, y: 0.25 },
        { x: 7.6, y: 0.75 },
        { x: 8.2, y: 1.0 },
        { x: 8.8, y: 0.55 },
        { x: 9.2, y: 0 },
      ],
      smooth: true,
    },
    {
      label: "reflected",
      color: "var(--chart-3)",
      points: [
        { x: 4.8, y: 0 },
        { x: 5.4, y: -0.25 },
        { x: 6.0, y: -0.75 },
        { x: 6.6, y: -1.0 },
        { x: 7.2, y: -0.55 },
        { x: 7.6, y: 0 },
      ],
      smooth: true,
    },
  ]}
  vectors={[
    {
      from: { x: 9.5, y: -1.1 },
      to: { x: 9.5, y: 1.1 },
      label: "fixed",
      color: "var(--chart-5)",
    },
  ]}
/>

### Derivation 2: Apply the free-end condition

At a free end, the boundary cannot supply a transverse force. For a string, that means the slope must vanish there.

<PhysicsDerivation
  items={[
    {
      label: "Free end",
      tex: "\\frac{\\partial y}{\\partial x}(L,t)=0",
    },
    {
      label: "Slope cancellation",
      tex: "\\frac{\\partial y_i}{\\partial x}(L,t)+\\frac{\\partial y_r}{\\partial x}(L,t)=0",
    },
    {
      label: "Reflection rule",
      tex: "y_r(L,t)=y_i(L,t)",
      note: "The reflected pulse is not inverted.",
    },
  ]}
/>

### Derivation 3: Identify what does and does not change on reflection

The reflection changes phase according to the boundary condition, but the wave speed in the same medium is unchanged.

<PhysicsDerivation
  items={[
    {
      label: "Same medium",
      tex: "v_{r}=v_i",
    },
    {
      label: "Fixed-end phase change",
      tex: "\\Delta\\phi=\\pi",
    },
    {
      label: "Free-end phase change",
      tex: "\\Delta\\phi=0",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Fixed-end condition" tex="y(L,t)=0" />

<Equation label="Fixed-end reflection" tex="y_r(L,t)=-y_i(L,t)" />

<Equation label="Free-end condition" tex="\frac{\partial y}{\partial x}(L,t)=0" />

<Equation label="Free-end reflection" tex="y_r(L,t)=y_i(L,t)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A crest pulse on a string reaches a rigid wall. What shape returns, and what happens to the wave speed?",
      answer: "The reflected pulse returns as a trough because a fixed end requires zero displacement at the wall. The speed is unchanged because the string medium is unchanged.",
    },
  ]}
/>

## Checks

- Inversion comes from the boundary condition, not from the direction of travel alone.
- A free end reflects without inversion.
- Reflection does not require the wave speed to change in the same medium.
- At a fixed end, the total displacement at the boundary is always zero.`;
