export const content = String.raw`## Principle

Rocket speed changes because expelled mass carries momentum opposite the rocket's gain.

## Notation

<Notation
  items={[
    { symbol: "m", meaning: "instantaneous rocket mass", unit: "kg" },
    { symbol: "v", meaning: "rocket speed", unit: "m s^{-1}" },
    { symbol: "v_e", meaning: "exhaust speed relative to rocket", unit: "m s^{-1}" },
    { symbol: "\\alpha", meaning: "positive mass flow rate", unit: "kg s^{-1}" },
    { symbol: "T", meaning: "thrust", unit: "N" },
    { symbol: "F_{\\mathrm{ext}}", meaning: "external force along motion", unit: "N" },
  ]}
/>

## Method

With no external impulse, the rocket-exhaust system keeps total momentum while the rocket mass decreases.

<PhysicsDerivation
  items={[
    {
      label: "Mass sign",
      tex: "dm<0,\\qquad \\alpha=-\\frac{dm}{dt}>0",
    },
    {
      label: "Momentum balance",
      tex: "m\\,dv=-v_e\\,dm",
      note: "The expelled mass has velocity opposite the rocket's speed gain in the rocket frame.",
    },
    {
      label: "Integrate mass",
      tex: "\\Delta v=v_e\\int_{m_f}^{m_0}\\frac{dm}{m}=v_e\\ln\\left(\\frac{m_0}{m_f}\\right)",
    },
    {
      label: "Include forces",
      tex: "m\\frac{dv}{dt}=\\alpha v_e+F_{\\mathrm{ext}}",
    },
  ]}
/>

The free-body diagram separates thrust from external forces such as weight.

<FreeBodyDiagram
  title="Rocket thrust model"
  bodyLabel="rocket"
  bodyShape="circle"
  caption="Thrust points opposite the expelled exhaust. Gravity or drag enters separately as an external force."
  width={280}
  height={220}
  forces={[
    { label: "T", angle: 90, length: 64 },
    { label: "mg", angle: -90, length: 58 },
  ]}
/>

In vertical flight, gravity enters through \\(F_\{\\mathrm\{ext\}}\\); it is not part of the ideal rocket equation.

## Rules

These are the compact ideal and forced rocket relations.

<Equation label="Thrust" tex="T=\alpha v_e" />

<Equation label="Rocket equation" tex="\Delta v=v_e\ln\left(\frac{m_0}{m_f}\right)" />

<Equation label="With external force" tex="m\frac{dv}{dt}=T+F_{\mathrm{ext}}" />

<Equation label="Mass ratio" tex="\frac{m_0}{m_f}=e^{\Delta v/v_e}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A deep-space rocket has \\(v_e=3000\\,\\mathrm{m\\,s^{-1}}\\) and mass ratio \\(m_0/m_f=2.5\\). Find ideal \\(\\Delta v\\).",
      answer: "\\[\\Delta v=3000\\ln2.5=2.75\\times10^3\\,\\mathrm{m\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "A rocket expels propellant at \\(12\\,\\mathrm{kg\\,s^{-1}}\\) with \\(v_e=2600\\,\\mathrm{m\\,s^{-1}}\\). Find thrust.",
      answer: "\\[T=\\alpha v_e=12(2600)=3.12\\times10^4\\,\\mathrm{N}\\]",
    },
  ]}
/>

## Checks

- Rocket mass decreases during burn.
- Exhaust speed is measured relative to the rocket.
- Constant exhaust speed gives a logarithmic speed gain.
- Gravity or drag requires the external-force term.`;
