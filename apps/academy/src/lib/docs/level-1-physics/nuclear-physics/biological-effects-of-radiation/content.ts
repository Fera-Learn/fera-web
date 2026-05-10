export const content = String.raw`## Principle

Radiation risk depends on deposited energy per mass and the biological weighting of the radiation type.

## Notation

<Notation
  items={[
    { symbol: "D", meaning: "absorbed dose", unit: "Gy" },
    { symbol: "E", meaning: "energy deposited", unit: "J" },
    { symbol: "m", meaning: "absorbing mass", unit: "kg" },
    { symbol: "w_R", meaning: "radiation weighting factor", unit: "1" },
    { symbol: "H", meaning: "equivalent dose", unit: "Sv" },
    { symbol: "\\dot D", meaning: "absorbed dose rate", unit: "Gy s^{-1}" },
  ]}
/>

## Method

### Derivation 1: Absorbed dose

Dose measures energy deposited per kilogram of tissue or material.

<PhysicsDerivation
  items={[
    {
      label: "Dose definition",
      tex: "D=\\frac{E}{m}",
    },
    {
      label: "Gray",
      tex: "1\\,\\mathrm{Gy}=1\\,\\mathrm{J\\,kg^{-1}}",
    },
  ]}
/>

### Derivation 2: Equivalent dose

Different radiations cause different biological damage for the same absorbed dose.

<PhysicsDerivation
  items={[
    {
      label: "Equivalent dose",
      tex: "H=w_RD",
    },
    {
      label: "Sievert",
      tex: "1\\,\\mathrm{Sv}=1\\,\\mathrm{J\\,kg^{-1}}\\quad\\text{weighted}",
    },
  ]}
/>

### Derivation 3: Dose rate

Risk also depends on exposure time and rate.

<PhysicsDerivation
  items={[
    {
      label: "Dose rate",
      tex: "\\dot D=\\frac{D}{\\Delta t}",
    },
    {
      label: "Accumulated dose",
      tex: "D=\\int \\dot D\\,dt",
    },
  ]}
/>

## Rules

<Equation label="Absorbed dose" tex="D=\frac{E}{m}" />

<Equation label="Equivalent dose" tex="H=w_RD" />

<Equation label="Dose rate" tex="\dot D=\frac{D}{\Delta t}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "\\(0.020\\,\\mathrm J\\) is deposited in \\(0.50\\,\\mathrm{kg}\\). Find \\(D\\).",
      answer: "\\(D=E/m=0.020/0.50=0.040\\,\\mathrm{Gy}\\).",
    },
    {
      title: "Example 2",
      question: "If \\(D=0.040\\,\\mathrm{Gy}\\) and \\(w_R=20\\), find \\(H\\).",
      answer: "\\(H=w_RD=20(0.040)=0.80\\,\\mathrm{Sv}\\).",
    },
  ]}
/>

## Checks

- Gray measures physical energy deposition; sievert includes biological weighting.
- Alpha radiation has high weighting but low penetration.
- External and internal exposure can have very different risks.
- Shielding choice depends on radiation type and energy.`;
