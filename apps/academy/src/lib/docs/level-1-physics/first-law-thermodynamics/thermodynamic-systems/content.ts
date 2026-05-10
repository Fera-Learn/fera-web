export const content = String.raw`## Principle

A thermodynamic system is the chosen matter or region whose energy transfers are tracked.

## Notation

<Notation
  items={[
    { symbol: "p", meaning: "pressure", unit: "Pa" },
    { symbol: "V", meaning: "volume", unit: "m^{3}" },
    { symbol: "T", meaning: "absolute temperature", unit: "K" },
    { symbol: "n", meaning: "amount of gas", unit: "mol" },
    { symbol: "Q", meaning: "heat transferred to the system", unit: "J" },
    { symbol: "W", meaning: "work done by the system", unit: "J" },
  ]}
/>

## Method

### Derivation 1: Choose the boundary

Energy accounting starts by deciding what is inside the system. Everything outside is the surroundings, and transfers cross the boundary.

<PhysicsDerivation
  items={[
    {
      label: "Energy crossing",
      tex: "\\text{system}\\ \\longleftrightarrow\\ \\text{surroundings}",
    },
    {
      label: "Heat sign",
      tex: "Q>0\\quad\\text{when energy enters by heating}",
    },
    {
      label: "Work sign",
      tex: "W>0\\quad\\text{when the system does work on surroundings}",
    },
  ]}
/>

### Derivation 2: Describe a state

A thermodynamic state is specified by macroscopic variables after the system has settled enough for those variables to be meaningful.

<PhysicsDerivation
  items={[
    {
      label: "State variables",
      tex: "(p,V,T,n)",
    },
    {
      label: "Ideal-gas state",
      tex: "pV=nRT",
      note: "This is a model relation for dilute gases in equilibrium.",
    },
    {
      label: "Process",
      tex: "\\text{process}=\\text{path through states}",
    },
  ]}
/>

## Rules

These are the system choices used throughout the First Law section.

<Equation label="Ideal gas state" tex="pV=nRT" />

<Equation label="Heat sign" tex="Q>0\quad\text{into the system}" />

<Equation label="Work sign" tex="W>0\quad\text{done by the system}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A gas in a cylinder is compressed by an external piston while heat leaves through the cylinder wall. Identify the signs of \\(Q\\) and \\(W\\) for the gas as system.",
      answer: "Heat leaves the gas, so \\(Q<0\\). Compression means the surroundings do work on the gas, so work done by the gas is negative: \\(W<0\\).",
    },
  ]}
/>

## Checks

- Always name the system before assigning signs.
- Heat and work are transfers across the boundary, not stored properties.
- State variables describe equilibrium states, not arbitrary nonequilibrium details.
- The ideal-gas equation uses absolute temperature.`;
