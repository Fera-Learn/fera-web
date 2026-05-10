export const content = String.raw`## Principle

Along a streamline, steady incompressible flow trades pressure, speed, and height.

## Notation

<Notation
  items={[
    { symbol: "p", meaning: "fluid pressure", unit: "Pa" },
    { symbol: "\\rho", meaning: "fluid density", unit: "kg m^{-3}" },
    { symbol: "v", meaning: "flow speed", unit: "m s^{-1}" },
    { symbol: "y", meaning: "vertical position", unit: "m" },
    { symbol: "g", meaning: "gravitational field strength", unit: "m s^{-2}" },
  ]}
/>

## Method

Bernoulli's equation is a work-energy statement for a moving fluid element along one streamline.

<PhysicsDerivation
  items={[
    {
      label: "Pressure work",
      tex: "p_1\\Delta V-p_2\\Delta V",
    },
    {
      label: "Kinetic change",
      tex: "\\Delta K=\\frac{1}{2}\\rho\\Delta V\\left(v_2^2-v_1^2\\right)",
    },
    {
      label: "Potential change",
      tex: "\\Delta U=\\rho g\\Delta V\\left(y_2-y_1\\right)",
    },
    {
      label: "Bernoulli result",
      tex: "p_1+\\frac{1}{2}\\rho v_1^2+\\rho gy_1=p_2+\\frac{1}{2}\\rho v_2^2+\\rho gy_2",
    },
  ]}
/>

At the same height, a higher speed must come with a lower pressure if the model assumptions hold.

## Rules

These are the compact Bernoulli forms for steady incompressible nonviscous flow.

<Equation label="Bernoulli equation" tex="p+\frac{1}{2}\rho v^2+\rho gy=\text{constant}" />

<Equation label="Two-point form" tex="p_1+\frac{1}{2}\rho v_1^2+\rho gy_1=p_2+\frac{1}{2}\rho v_2^2+\rho gy_2" />

<Equation label="Horizontal flow" tex="p+\frac{1}{2}\rho v^2=\text{constant}" />

<Equation label="Efflux speed" tex="v=\sqrt{2gh}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Water flows horizontally from a wide section at \\(v_1=1.5\\,\\mathrm{m\\,s^{-1}}\\) into a narrow section where continuity gives \\(v_2=6.0\\,\\mathrm{m\\,s^{-1}}\\). Find \\(p_1-p_2\\).",
      answer: "At the same height, \\[p_1+\\frac{1}{2}\\rho v_1^2=p_2+\\frac{1}{2}\\rho v_2^2\\] so \\[p_1-p_2=\\frac{1}{2}\\rho\\left(v_2^2-v_1^2\\right)=\\frac{1}{2}(1000)(36-2.25)=1.69\\times10^4\\,\\mathrm{Pa}\\]",
    },
    {
      title: "Example 2",
      question: "A large tank has a small hole \\(1.2\\,\\mathrm{m}\\) below the water surface. Find the speed of water leaving the hole.",
      answer: "Use the reservoir limit of Bernoulli: \\[v=\\sqrt{2gh}=\\sqrt{2(9.8)(1.2)}=4.85\\,\\mathrm{m\\,s^{-1}}\\]",
    },
  ]}
/>

## Checks

- Bernoulli applies along a streamline for steady incompressible flow with negligible viscous loss.
- At the same height, higher speed means lower pressure.
- Use the same pressure reference on both sides of the equation.
- Pumps, turbulence, and large viscous losses break the simple model.`;
