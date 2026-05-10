export const content = String.raw`## Principle

An ideal gas needs more heat at constant pressure than at constant volume.

## Notation

<Notation
  items={[
    { symbol: "C_V", meaning: "molar heat capacity at constant volume", unit: "J mol^{-1} K^{-1}" },
    { symbol: "C_P", meaning: "molar heat capacity at constant pressure", unit: "J mol^{-1} K^{-1}" },
    { symbol: "\\gamma", meaning: "heat-capacity ratio", unit: "1" },
    { symbol: "n", meaning: "amount of gas", unit: "mol" },
    { symbol: "R", meaning: "molar gas constant", unit: "J mol^{-1} K^{-1}" },
    { symbol: "\\Delta T", meaning: "temperature change", unit: "K" },
  ]}
/>

## Method

### Derivation 1: Compare constant volume and constant pressure

At constant volume, no volume work is done. At constant pressure, heating also supplies expansion work.

<PhysicsDerivation
  items={[
    {
      label: "Constant volume",
      tex: "Q_V=\\Delta U=nC_V\\Delta T",
    },
    {
      label: "Constant pressure work",
      tex: "W=p\\Delta V=nR\\Delta T",
    },
    {
      label: "First law at constant pressure",
      tex: "Q_P=\\Delta U+W",
    },
    {
      label: "Mayer relation",
      tex: "nC_P\\Delta T=nC_V\\Delta T+nR\\Delta T",
    },
  ]}
/>

### Derivation 2: Define the ratio

The ratio \\(\\gamma\\) appears in adiabatic ideal-gas processes and compares the two heat capacities.

<PhysicsDerivation
  items={[
    {
      label: "Heat-capacity difference",
      tex: "C_P-C_V=R",
    },
    {
      label: "Ratio",
      tex: "\\gamma=\\frac{C_P}{C_V}",
    },
    {
      label: "Monatomic values",
      tex: "C_V=\\frac32R,\\qquad C_P=\\frac52R,\\qquad \\gamma=\\frac53",
    },
  ]}
/>

## Rules

These are the ideal-gas heat-capacity relations.

<Equation label="Constant volume heat" tex="Q_V=nC_V\Delta T" />

<Equation label="Constant pressure heat" tex="Q_P=nC_P\Delta T" />

<Equation label="Mayer relation" tex="C_P-C_V=R" />

<Equation label="Heat-capacity ratio" tex="\gamma=\frac{C_P}{C_V}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A gas has \\(C_V=20.8\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\). Find \\(C_P\\) and \\(\\gamma\\).",
      answer: "\\[C_P=C_V+R=20.8+8.31=29.1\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\] \\[\\gamma=C_P/C_V=29.1/20.8=1.40\\]",
    },
  ]}
/>

## Checks

- \\(C_P\\) is larger because the gas can expand and do work.
- Molar heat capacities multiply by moles, not mass.
- \\(C_P-C_V=R\\) applies to ideal gases.
- \\(\\gamma\\) is dimensionless.`;
