export const content = String.raw`## Principle

For spherical mass distributions, the gravitational field depends on how much mass is enclosed by the chosen radius.

## Notation

<Notation
  items={[
    { symbol: "M", meaning: "total spherical mass", unit: "kg" },
    { symbol: "R", meaning: "sphere radius", unit: "m" },
    { symbol: "r", meaning: "distance from the center", unit: "m" },
    { symbol: "M_{\\mathrm{enc}}", meaning: "mass enclosed inside radius \\(r\\)", unit: "kg" },
    { symbol: "\\rho", meaning: "uniform mass density", unit: "kg m^{-3}" },
    { symbol: "\\vec g", meaning: "gravitational field", unit: "N kg^{-1}" },
    { symbol: "g(r)", meaning: "gravitational field magnitude at radius \\(r\\)", unit: "N kg^{-1}" },
  ]}
/>

## Method

### Derivation 1: Outside the sphere

Outside a spherically symmetric body, the entire mass acts as if it were concentrated at the center.

<PhysicsDerivation
  items={[
    {
      label: "Outside field magnitude",
      tex: "g(r)=G\\frac{M}{r^2}\\qquad(r\\ge R)",
    },
    {
      label: "Outside field vector",
      tex: "\\vec g=-G\\frac{M}{r^2}\\hat e_r",
    },
  ]}
/>

### Derivation 2: Inside a uniform sphere

At an interior point, only the mass enclosed inside radius \\(r\\) contributes to the inverse-square result. For a uniform density, the enclosed mass grows like volume.

<PhysicsDerivation
  items={[
    {
      label: "Enclosed volume",
      tex: "V_{\\mathrm{enc}}=\\frac43\\pi r^3",
    },
    {
      label: "Enclosed mass",
      tex: "M_{\\mathrm{enc}}=\\rho\\frac43\\pi r^3",
    },
    {
      label: "Inside field magnitude",
      tex: "g(r)=G\\frac{M_{\\mathrm{enc}}}{r^2}=\\frac43\\pi G\\rho r",
    },
    {
      label: "Rewrite using total mass",
      tex: "g(r)=G\\frac{M}{R^3}r\\qquad(r\\le R)",
      note: "Inside a uniform sphere, the field grows linearly with radius.",
    },
  ]}
/>

### Derivation 3: Check the surface match

The inside and outside formulas should agree at the surface.

<PhysicsDerivation
  items={[
    {
      label: "Inside at \\(r=R\\)",
      tex: "g(R)=G\\frac{M}{R^3}R=G\\frac{M}{R^2}",
    },
    {
      label: "Outside at \\(r=R\\)",
      tex: "g(R)=G\\frac{M}{R^2}",
    },
  ]}
/>

The graph shows the full piecewise behavior for a uniform sphere. The field rises linearly inside, peaks at the surface, then falls as \\(1/r^2\\) outside.

<CartesianPhysicsGraph
  title="Field of a uniform spherical mass"
  caption="The surface is where the linear interior model meets the inverse-square exterior model."
  width={520}
  height={280}
  xRange={{ min: 0, max: 6, step: 1, label: "r" }}
  yRange={{ min: 0, max: 1.1, step: 0.25, label: "relative g" }}
  curves={[
    {
      label: "inside",
      points: [
        { x: 0, y: 0 },
        { x: 1, y: 0.33 },
        { x: 2, y: 0.67 },
        { x: 3, y: 1.0 },
      ],
    },
    {
      label: "outside",
      color: "var(--chart-3)",
      smooth: true,
      points: [
        { x: 3, y: 1.0 },
        { x: 4, y: 0.56 },
        { x: 5, y: 0.36 },
        { x: 6, y: 0.25 },
      ],
    },
  ]}
  points={[{ x: 3, y: 1.0, label: "surface" }]}
/>

The change of shape at the surface matters physically: near the center of a uniform sphere the field is small because the enclosed mass is small.

## Rules

These are the compact results from the method above.

<Equation label="Outside sphere" tex="\vec g=-G\frac{M}{r^2}\hat e_r,\qquad g(r)=G\frac{M}{r^2}\quad(r\ge R)" />

<Equation label="Inside uniform sphere" tex="g(r)=G\frac{M}{R^3}r=\frac43\pi G\rho r\quad(r\le R)" />

<Equation label="Surface field" tex="g(R)=G\frac{M}{R^2}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A planet is modeled as a uniform sphere. What is the field magnitude at radius \\(R/2\\) in terms of the surface field \\(g_s=GM/R^2\\)?",
      answer: "\\[g\\left(\\frac{R}{2}\\right)=G\\frac{M}{R^3}\\left(\\frac{R}{2}\\right)=\\frac12\\frac{GM}{R^2}=\\frac12 g_s\\]",
    },
    {
      title: "Example 2",
      question: "At what fraction of the surface field is the field at radius \\(2R\\) outside the same sphere?",
      answer: "\\[g(2R)=G\\frac{M}{(2R)^2}=\\frac14\\frac{GM}{R^2}=\\frac14 g_s\\]",
    },
  ]}
/>

## Checks

- Outside a spherical mass, the field behaves exactly like a point mass at the center.
- Inside a uniform sphere, the field is zero at the center and increases linearly with radius.
- The inside and outside formulas must agree at the surface.
- The linear inside law does not apply to arbitrary non-uniform density profiles.`;
