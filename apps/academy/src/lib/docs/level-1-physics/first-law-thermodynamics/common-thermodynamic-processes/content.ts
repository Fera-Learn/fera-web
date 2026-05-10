export const content = String.raw`## Principle

Named thermodynamic processes impose constraints that simplify the first law.

## Notation

<Notation
  items={[
    { symbol: "p", meaning: "pressure", unit: "Pa" },
    { symbol: "V", meaning: "volume", unit: "m^{3}" },
    { symbol: "T", meaning: "absolute temperature", unit: "K" },
    { symbol: "Q", meaning: "heat transferred to the system", unit: "J" },
    { symbol: "W", meaning: "work done by the system", unit: "J" },
    { symbol: "\\Delta U", meaning: "change in internal energy", unit: "J" },
  ]}
/>

## Method

### Derivation 1: Apply one constraint at a time

Each named process fixes one variable or one transfer. The first law then tells which remaining energy transfer is required.

<PhysicsDerivation
  items={[
    {
      label: "Isochoric",
      tex: "V=\\text{constant}\\Rightarrow W=0",
    },
    {
      label: "Isobaric",
      tex: "p=\\text{constant}\\Rightarrow W=p\\Delta V",
    },
    {
      label: "Adiabatic",
      tex: "Q=0\\Rightarrow \\Delta U=-W",
    },
    {
      label: "Cyclic",
      tex: "\\Delta U=0\\Rightarrow Q=W",
    },
  ]}
/>

### Derivation 2: Add the ideal-gas isothermal case

For an ideal gas, internal energy depends only on temperature. Isothermal ideal-gas processes therefore have \\(\\Delta U=0\\).

<PhysicsDerivation
  items={[
    {
      label: "Ideal-gas internal energy",
      tex: "U=U(T)",
    },
    {
      label: "Isothermal ideal gas",
      tex: "\\Delta T=0\\Rightarrow \\Delta U=0",
    },
    {
      label: "First-law result",
      tex: "Q=W",
    },
  ]}
/>

## Rules

These process constraints are used repeatedly in thermal problems.

<Equation label="Isochoric" tex="V=\mathrm{constant},\quad W=0" />

<Equation label="Isobaric" tex="p=\mathrm{constant},\quad W=p\Delta V" />

<Equation label="Isothermal ideal gas" tex="T=\mathrm{constant},\quad \Delta U=0" />

<Equation label="Adiabatic" tex="Q=0" />

<Equation label="Cyclic" tex="\Delta U=0" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A gas is heated at constant volume, receiving \\(500\\,\\mathrm{J}\\). Find \\(W\\) and \\(\\Delta U\\).",
      answer: "At constant volume, \\(W=0\\). The first law gives \\(\\Delta U=Q-W=500\\,\\mathrm{J}\\).",
    },
  ]}
/>

## Checks

- Isochoric means no volume work, not no heat.
- Isothermal does not always mean no heat.
- Adiabatic means no heat transfer, not constant temperature.
- A cyclic process returns all state variables to their starting values.`;
