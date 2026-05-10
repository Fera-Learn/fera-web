export const content = String.raw`## Principle

Viscosity transfers momentum between fluid layers, and large Reynolds number promotes turbulence.

## Notation

<Notation
  items={[
    { symbol: "\\eta", meaning: "dynamic viscosity", unit: "Pa s" },
    { symbol: "\\tau", meaning: "shear stress", unit: "Pa" },
    { symbol: "F", meaning: "shear force", unit: "N" },
    { symbol: "A", meaning: "area of the sheared layer", unit: "m^{2}" },
    { symbol: "\\frac{dv}{dy}", meaning: "velocity gradient across layers", unit: "s^{-1}" },
    { symbol: "\\mathrm{Re}", meaning: "Reynolds number", unit: "1" },
  ]}
/>

## Method

Viscosity resists relative sliding of neighboring fluid layers, while turbulence appears when inertial effects dominate over viscous smoothing.

<PhysicsDerivation
  items={[
    {
      label: "Stress definition",
      tex: "\\tau=\\frac{F}{A}",
    },
    {
      label: "Newtonian fluid",
      tex: "\\tau=\\eta\\frac{dv}{dy}",
    },
    {
      label: "Layer force",
      tex: "F=\\eta A\\frac{dv}{dy}",
    },
    {
      label: "Flow regime ratio",
      tex: "\\mathrm{Re}=\\frac{\\rho vL}{\\eta}",
      note: "Low Reynolds number favors laminar flow; large Reynolds number favors turbulence.",
    },
  ]}
/>

Laminar flow keeps smooth neighboring layers, while turbulence introduces eddies, mixing, and extra energy loss.

## Rules

These are the compact viscosity and flow-regime relations.

<Equation label="Shear stress" tex="\tau=\frac{F}{A}" />

<Equation label="Viscous law" tex="\tau=\eta\frac{dv}{dy}" />

<Equation label="Layer force" tex="F=\eta A\frac{dv}{dy}" />

<Equation label="Reynolds number" tex="\mathrm{Re}=\frac{\rho vL}{\eta}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Oil with viscosity \\(0.90\\,\\mathrm{Pa\\,s}\\) fills a gap of \\(3.0\\,\\mathrm{mm}\\) between plates of area \\(0.20\\,\\mathrm{m^2}\\). If the top plate moves at \\(0.60\\,\\mathrm{m\\,s^{-1}}\\), find the shear force.",
      answer: "Assume a linear velocity profile, so \\[\\frac{dv}{dy}=\\frac{0.60}{3.0\\times10^{-3}}=200\\,\\mathrm{s^{-1}}\\] Then \\[F=\\eta A\\frac{dv}{dy}=0.90(0.20)(200)=36\\,\\mathrm{N}\\]",
    },
    {
      title: "Example 2",
      question: "Water flows with \\(\\rho=1000\\,\\mathrm{kg\\,m^{-3}}\\), speed \\(2.0\\,\\mathrm{m\\,s^{-1}}\\), characteristic length \\(0.050\\,\\mathrm{m}\\), and viscosity \\(1.0\\times10^{-3}\\,\\mathrm{Pa\\,s}\\). Estimate the Reynolds number.",
      answer: "\\[\\mathrm{Re}=\\frac{\\rho vL}{\\eta}=\\frac{1000(2.0)(0.050)}{1.0\\times10^{-3}}=1.0\\times10^5\\] This is large, so turbulence is likely.",
    },
  ]}
/>

## Checks

- Viscosity units are pascal-seconds, equivalent to newton-seconds per square metre.
- Larger viscosity lowers Reynolds number for the same \\(\\rho\\), \\(v\\), and \\(L\\).
- Turbulent flow usually produces larger losses than the ideal Bernoulli model predicts.
- Shear force acts parallel to the layer, not perpendicular to it.`;
