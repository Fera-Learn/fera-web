export const content = String.raw`## Principle

Uncertainty states measurement resolution, not a mistake to hide.

## Notation

<Notation
  items={[
    { symbol: "x", meaning: "measured quantity", unit: "varies" },
    { symbol: "x_{\\mathrm{best}}", meaning: "best estimate", unit: "same as x" },
    { symbol: "\\Delta x", meaning: "absolute uncertainty", unit: "same as x" },
    { symbol: "\\Delta x/|x|", meaning: "fractional uncertainty", unit: "none" },
    { symbol: "q", meaning: "calculated quantity", unit: "varies" },
  ]}
/>

## Method

An uncertainty interval marks the values the measurement cannot distinguish.

<PhysicsDerivation
  items={[
    {
      label: "Report interval",
      tex: "x=x_{\\mathrm{best}}\\pm\\Delta x",
    },
    {
      label: "Lower end",
      tex: "x_{\\min}=x_{\\mathrm{best}}-\\Delta x",
    },
    {
      label: "Upper end",
      tex: "x_{\\max}=x_{\\mathrm{best}}+\\Delta x",
    },
    {
      label: "Fractional scale",
      tex: "\\text{fractional}=\\frac{\\Delta x}{|x_{\\mathrm{best}}|}",
    },
    {
      label: "Product spread",
      tex: "q=ab\\Rightarrow \\frac{\\Delta q}{|q|}\\approx\\frac{\\Delta a}{|a|}+\\frac{\\Delta b}{|b|}",
    },
  ]}
/>

## Rules

<Equation label="Reported value" tex="x=x_{\mathrm{best}}\pm\Delta x" />

<Equation label="Fractional form" tex="\mathrm{fractional}=\frac{\Delta x}{|x_{\mathrm{best}}|}" />

<Equation label="Product estimate" tex="\frac{\Delta q}{|q|}\approx\frac{\Delta a}{|a|}+\frac{\Delta b}{|b|}" />

<Equation label="Power estimate" tex="\frac{\Delta q}{|q|}\approx |n|\frac{\Delta a}{|a|}\quad(q=a^n)" />

## Checks

- Absolute uncertainty carries units.
- Fractional uncertainty has no unit.
- Relative uncertainty grows near zero.
- Do not report more precision than the interval supports.`;
