export const content = String.raw`## Principle

An adiabatic ideal-gas process changes temperature through work without heat transfer.

## Notation

<Notation
  items={[
    { symbol: "Q", meaning: "heat transferred to the system", unit: "J" },
    { symbol: "W", meaning: "work done by the system", unit: "J" },
    { symbol: "\\Delta U", meaning: "change in internal energy", unit: "J" },
    { symbol: "\\gamma", meaning: "heat-capacity ratio \\(C_P/C_V\\)", unit: "1" },
    { symbol: "p,V,T", meaning: "pressure, volume, absolute temperature", unit: "varies" },
    { symbol: "n", meaning: "amount of gas", unit: "mol" },
  ]}
/>

## Method

### Derivation 1: Apply the first law

Adiabatic means no heat crosses the boundary. Expansion work therefore comes from internal energy.

<PhysicsDerivation
  items={[
    {
      label: "Adiabatic condition",
      tex: "Q=0",
    },
    {
      label: "First law",
      tex: "\\Delta U=Q-W",
    },
    {
      label: "Adiabatic result",
      tex: "\\Delta U=-W",
    },
    {
      label: "Ideal-gas change",
      tex: "\\Delta U=nC_V\\Delta T",
    },
  ]}
/>

### Derivation 2: State the reversible adiabatic constraints

For a quasistatic reversible adiabatic ideal-gas process, pressure, volume, and temperature obey power-law constraints.

<PhysicsDerivation
  items={[
    {
      label: "Pressure-volume law",
      tex: "pV^\\gamma=\\text{constant}",
    },
    {
      label: "Temperature-volume law",
      tex: "TV^{\\gamma-1}=\\text{constant}",
    },
    {
      label: "Work from energy",
      tex: "W=-\\Delta U=nC_V(T_i-T_f)",
    },
  ]}
/>

## Rules

These are the reversible adiabatic ideal-gas relations.

<Equation label="No heat transfer" tex="Q=0" />

<Equation label="Energy-work link" tex="\Delta U=-W" />

<Equation label="Adiabatic curve" tex="pV^\gamma=\mathrm{constant}" />

<Equation label="Temperature-volume" tex="TV^{\gamma-1}=\mathrm{constant}" />

<Equation label="Adiabatic work" tex="W=nC_V(T_i-T_f)" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A monatomic ideal gas expands adiabatically and its temperature falls by \\(50\\,\\mathrm{K}\\). For \\(1.5\\,\\mathrm{mol}\\), find work done by the gas.",
      answer: "For monatomic gas, \\(C_V=3R/2\\). Since \\(W=-\\Delta U=nC_V(T_i-T_f)\\), \\[W=(1.5)(\\tfrac32)(8.31)(50)=9.35\\times10^2\\,\\mathrm{J}\\]",
    },
  ]}
/>

## Checks

- Adiabatic means \\(Q=0\\), not \\(\\Delta T=0\\).
- During adiabatic expansion, an ideal gas cools.
- During adiabatic compression, an ideal gas warms.
- The power laws require a reversible quasistatic ideal-gas process.`;
