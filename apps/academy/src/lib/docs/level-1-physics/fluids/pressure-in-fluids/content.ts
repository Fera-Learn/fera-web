export const content = String.raw`## Principle

Fluid pressure acts normal to surfaces and increases with depth in a static fluid.

## Notation

<Notation
  items={[
    { symbol: "p", meaning: "pressure", unit: "Pa" },
    { symbol: "F_\\perp", meaning: "normal force on area", unit: "N" },
    { symbol: "A", meaning: "surface area", unit: "m^{2}" },
    { symbol: "\\rho", meaning: "fluid density", unit: "kg m^{-3}" },
    { symbol: "h", meaning: "depth below a reference level", unit: "m" },
    { symbol: "p_0", meaning: "pressure at the reference level", unit: "Pa" },
  ]}
/>

## Method

Pressure is force per area, and in a static fluid the deeper level must support the weight of fluid above it.

<PhysicsDerivation
  items={[
    {
      label: "Pressure definition",
      tex: "p=\\frac{F_\\perp}{A}",
    },
    {
      label: "Column equilibrium",
      tex: "pA-p_0A-\\rho ghA=0",
      note: "Take a fluid column of area \\(A\\) and height \\(h\\).",
    },
    {
      label: "Hydrostatic result",
      tex: "p=p_0+\\rho gh",
    },
    {
      label: "Pressure force",
      tex: "F_\\perp=pA",
    },
  ]}
/>

The graph shows the linear hydrostatic increase when density is constant.

<CartesianPhysicsGraph
  title="Pressure increases with depth"
  caption="In a static fluid of constant density, pressure rises linearly with depth below the reference level."
  xRange={{ min: 0, max: 4, step: 1, label: "h / m" }}
  yRange={{ min: 100, max: 140, step: 10, label: "p / kPa" }}
  curves={[
    {
      label: "p(h)",
      points: [
        { x: 0, y: 101 },
        { x: 4, y: 140 },
      ],
    },
  ]}
/>

The slope of the line is \\(\\rho g\\), so denser fluids produce larger pressure changes per metre.

## Rules

These are the compact pressure relations for static fluids.

<Equation label="Pressure" tex="p=\frac{F_\perp}{A}" />

<Equation label="Hydrostatic pressure" tex="p=p_0+\rho gh" />

<Equation label="Pressure change" tex="\Delta p=\rho gh" />

<Equation label="Pressure force" tex="F_\perp=pA" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the gauge pressure \\(3.0\\,\\mathrm{m}\\) below the surface of water \\((\\rho=1000\\,\\mathrm{kg\\,m^{-3}})\\).",
      answer: "\\[\\Delta p=\\rho gh=1000(9.8)(3.0)=2.94\\times10^4\\,\\mathrm{Pa}\\]",
    },
    {
      title: "Example 2",
      question: "A submerged hatch of area \\(0.40\\,\\mathrm{m^2}\\) is \\(5.0\\,\\mathrm{m}\\) below a water surface. Find the net force due to gauge pressure.",
      answer: "\\[\\Delta p=1000(9.8)(5.0)=4.90\\times10^4\\,\\mathrm{Pa}\\] \\[F=\\Delta pA=(4.90\\times10^4)(0.40)=1.96\\times10^4\\,\\mathrm{N}\\]",
    },
  ]}
/>

## Checks

- Pressure is a scalar, even though the force it produces has direction.
- In the formula used here, \\(h\\) is measured downward from the reference level.
- Gauge pressure ignores atmospheric pressure; absolute pressure includes it.
- Pressure force is perpendicular to the surface it acts on.`;
