export const content = String.raw`## Principle

Steady flow follows mass conservation from one cross-section of a streamtube to another.

## Notation

<Notation
  items={[
    { symbol: "Q", meaning: "volume flow rate", unit: "m^{3} s^{-1}" },
    { symbol: "\\dot m", meaning: "mass flow rate", unit: "kg s^{-1}" },
    { symbol: "A", meaning: "cross-sectional area", unit: "m^{2}" },
    { symbol: "v", meaning: "flow speed through the section", unit: "m s^{-1}" },
    { symbol: "\\rho", meaning: "fluid density", unit: "kg m^{-3}" },
    { symbol: "\\Delta t", meaning: "time interval", unit: "s" },
  ]}
/>

## Method

In steady flow, the mass entering one section in a given time must equal the mass leaving another section.

<PhysicsDerivation
  items={[
    {
      label: "Volume passed",
      tex: "\\Delta V=Av\\Delta t",
    },
    {
      label: "Mass passed",
      tex: "\\Delta m=\\rho Av\\Delta t",
    },
    {
      label: "Mass conservation",
      tex: "\\rho_1A_1v_1=\\rho_2A_2v_2",
    },
    {
      label: "Incompressible flow",
      tex: "A_1v_1=A_2v_2",
      note: "This follows when the density is effectively constant.",
    },
  ]}
/>

The key model choice is whether the fluid can be treated as incompressible over the change in pressure and speed.

## Rules

These are the compact steady-flow relations.

<Equation label="Volume flow rate" tex="Q=Av" />

<Equation label="Mass flow rate" tex="\dot m=\rho Av" />

<Equation label="Steady continuity" tex="\rho_1A_1v_1=\rho_2A_2v_2" />

<Equation label="Incompressible continuity" tex="A_1v_1=A_2v_2" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Water flows from a pipe of area \\(6.0\\times10^{-4}\\,\\mathrm{m^2}\\) into a nozzle of area \\(2.0\\times10^{-4}\\,\\mathrm{m^2}\\). If the pipe speed is \\(1.5\\,\\mathrm{m\\,s^{-1}}\\), find the nozzle speed.",
      answer: "For incompressible flow, \\[A_1v_1=A_2v_2\\] so \\[v_2=\\frac{A_1}{A_2}v_1=\\frac{6.0\\times10^{-4}}{2.0\\times10^{-4}}(1.5)=4.5\\,\\mathrm{m\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "Oil of density \\(850\\,\\mathrm{kg\\,m^{-3}}\\) flows in a pipe of radius \\(1.5\\,\\mathrm{cm}\\) at speed \\(2.0\\,\\mathrm{m\\,s^{-1}}\\). Find the mass flow rate.",
      answer: "First find area: \\[A=\\pi r^2=\\pi(0.015)^2=7.07\\times10^{-4}\\,\\mathrm{m^2}\\] Then \\[\\dot m=\\rho Av=850(7.07\\times10^{-4})(2.0)=1.20\\,\\mathrm{kg\\,s^{-1}}\\]",
    },
  ]}
/>

## Checks

- \\(Q\\) has units of cubic metres per second; \\(\\dot m\\) has units of kilograms per second.
- The incompressible form \\(Av\\) constant needs nearly constant density.
- A smaller cross-section gives a larger speed in the same streamtube.
- Continuity compares sections of the same steady flow.`;
