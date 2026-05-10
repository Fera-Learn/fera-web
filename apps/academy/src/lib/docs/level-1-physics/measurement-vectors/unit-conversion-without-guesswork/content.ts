export const content = String.raw`## Principle

A conversion factor multiplies by one while changing the unit label.

## Notation

<Notation
  items={[
    { symbol: "q", meaning: "physical quantity", unit: "varies" },
    { symbol: "u_1", meaning: "starting unit", unit: "varies" },
    { symbol: "u_2", meaning: "target unit", unit: "varies" },
    { symbol: "c", meaning: "conversion factor equal to one", unit: "none" },
  ]}
/>

## Method

The numerator is chosen to keep the target unit; the denominator is chosen to cancel the unwanted unit.

<PhysicsDerivation
  items={[
    {
      label: "Start",
      tex: "q=N u_1",
    },
    {
      label: "Insert one",
      tex: "q=N u_1\\left(\\frac{u_2}{u_1}\\right)",
      note: "The fraction equals one because numerator and denominator represent the same physical size.",
    },
    {
      label: "Cancel",
      tex: "u_1\\left(\\frac{u_2}{u_1}\\right)=u_2",
    },
    {
      label: "Powers",
      tex: "(c u)^n=c^n u^n",
    },
  ]}
/>

## Rules

<Equation label="Factor identity" tex="1=\frac{\text{same quantity in }u_2}{\text{same quantity in }u_1}" />

<Equation label="Convert quantity" tex="q_{u_2}=q_{u_1}c" />

<Equation label="Power units" tex="(cu)^n=c^n u^n" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Convert \\(18\\,\\mathrm{m\\,s^{-1}}\\) to \\(\\mathrm{km\\,h^{-1}}\\).",
      answer: "\\[18\\frac{\\mathrm{m}}{\\mathrm{s}}\\left(\\frac{1\\,\\mathrm{km}}{1000\\,\\mathrm{m}}\\right)\\left(\\frac{3600\\,\\mathrm{s}}{1\\,\\mathrm{h}}\\right)=64.8\\,\\mathrm{km\\,h^{-1}}\\]",
    },
  ]}
/>

## Checks

- Every unwanted unit cancels.
- The physical quantity does not change.
- Square and cubic units need powered factors.
- Larger target units usually give smaller numbers.`;
