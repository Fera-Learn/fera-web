export const content = String.raw`## Principle

Magnetic and electric fields select, separate, or measure charged particles by force balance.

## Notation

<Notation
  items={[
    { symbol: "E", meaning: "electric field magnitude", unit: "N C^{-1}" },
    { symbol: "B", meaning: "magnetic field magnitude", unit: "T" },
    { symbol: "v", meaning: "particle speed", unit: "m s^{-1}" },
    { symbol: "r", meaning: "magnetic-path radius", unit: "m" },
    { symbol: "m/q", meaning: "mass-to-charge ratio", unit: "kg C^{-1}" },
  ]}
/>

## Method

In crossed fields, electric and magnetic forces can oppose each other. Particles pass undeflected when the magnitudes match.

<PhysicsDerivation
  items={[
    {
      label: "Electric force",
      tex: "F_E=|q|E",
    },
    {
      label: "Magnetic force",
      tex: "F_B=|q|vB",
    },
    {
      label: "Velocity selector",
      tex: "|q|E=|q|vB",
    },
    {
      label: "Selected speed",
      tex: "v=\\frac{E}{B}",
    },
  ]}
/>

After speed selection, a magnetic analyzer can determine mass-to-charge ratio from the orbit radius.

<PhysicsDerivation
  items={[
    {
      label: "Magnetic radius",
      tex: "r=\\frac{mv}{|q|B}",
    },
    {
      label: "Mass-to-charge ratio",
      tex: "\\frac{m}{|q|}=\\frac{rB}{v}",
    },
  ]}
/>

## Rules

<Equation label="Velocity selector" tex="v=\frac{E}{B}" />

<Equation label="Magnetic analyzer" tex="\frac{m}{|q|}=\frac{rB}{v}" />

<Equation label="Momentum radius" tex="p=|q|Br" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A selector has \\(E=2.4\\times10^4\\,\\mathrm{N\\,C^{-1}}\\) and \\(B=0.12\\,\\mathrm{T}\\). Find the selected speed.",
      answer: "\\[v=\\frac{E}{B}=\\frac{2.4\\times10^4}{0.12}=2.0\\times10^5\\,\\mathrm{m\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "A singly charged ion at \\(2.0\\times10^5\\,\\mathrm{m\\,s^{-1}}\\) follows radius \\(0.30\\,\\mathrm{m}\\) in \\(0.50\\,\\mathrm{T}\\). Find its mass.",
      answer: "\\[m=\\frac{|q|Br}{v}=\\frac{(1.60\\times10^{-19})(0.50)(0.30)}{2.0\\times10^5}=1.2\\times10^{-25}\\,\\mathrm{kg}\\]",
    },
  ]}
/>

## Checks

- A velocity selector chooses speed, not mass directly.
- Opposite charge signs reverse both electric and magnetic forces, so the same speed condition applies.
- In a magnetic analyzer, larger mass-to-charge ratio gives a larger radius.`;
