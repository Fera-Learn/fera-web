export const content = String.raw`## Principle

For an ideal gas, internal energy depends only on temperature.

## Notation

<Notation
  items={[
    { symbol: "U", meaning: "internal energy", unit: "J" },
    { symbol: "n", meaning: "amount of gas", unit: "mol" },
    { symbol: "C_V", meaning: "molar heat capacity at constant volume", unit: "J mol^{-1} K^{-1}" },
    { symbol: "T", meaning: "absolute temperature", unit: "K" },
    { symbol: "R", meaning: "molar gas constant", unit: "J mol^{-1} K^{-1}" },
    { symbol: "f", meaning: "active quadratic degrees of freedom", unit: "1" },
  ]}
/>

## Method

### Derivation 1: Link energy to temperature

In the ideal-gas model, microscopic kinetic energy sets temperature. Changing volume at fixed temperature does not change internal energy.

<PhysicsDerivation
  items={[
    {
      label: "Temperature dependence",
      tex: "U=U(T)",
    },
    {
      label: "Heat-capacity definition",
      tex: "dU=nC_V\\,dT",
    },
    {
      label: "Finite change",
      tex: "\\Delta U=nC_V\\Delta T",
    },
  ]}
/>

### Derivation 2: Use the monatomic model

For a monatomic ideal gas, the three translational degrees of freedom give the internal energy.

<PhysicsDerivation
  items={[
    {
      label: "Equipartition form",
      tex: "U=\\frac{f}{2}nRT",
    },
    {
      label: "Monatomic gas",
      tex: "f=3",
    },
    {
      label: "Monatomic energy",
      tex: "U=\\frac{3}{2}nRT",
    },
  ]}
/>

## Rules

These are the ideal-gas internal-energy relations.

<Equation label="Ideal-gas change" tex="\Delta U=nC_V\Delta T" />

<Equation label="Equipartition model" tex="U=\frac{f}{2}nRT" />

<Equation label="Monatomic gas" tex="U=\frac{3}{2}nRT" />

<Equation label="Monatomic change" tex="\Delta U=\frac{3}{2}nR\Delta T" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find \\(\\Delta U\\) for \\(2.0\\,\\mathrm{mol}\\) of monatomic ideal gas warmed by \\(40\\,\\mathrm{K}\\).",
      answer: "\\[\\Delta U=\\frac{3}{2}nR\\Delta T=\\frac{3}{2}(2.0)(8.31)(40)=1.0\\times10^3\\,\\mathrm{J}\\]",
    },
  ]}
/>

## Checks

- Use Kelvin temperature changes.
- For an ideal gas, \\(\\Delta U\\) depends on \\(\\Delta T\\), not directly on \\(\\Delta V\\).
- Monatomic ideal gas means \\(C_V=3R/2\\).
- If \\(T\\) is unchanged, \\(\\Delta U=0\\) for an ideal gas.`;
