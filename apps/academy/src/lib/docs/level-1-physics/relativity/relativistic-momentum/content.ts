export const content = String.raw`## Principle

Relativistic momentum is \\(\gamma m\vec v\\), which keeps momentum conservation valid at high speed.

## Notation

<Notation
  items={[
    { symbol: "\\vec p", meaning: "relativistic momentum", unit: "kg m s^{-1}" },
    { symbol: "m", meaning: "rest mass", unit: "kg" },
    { symbol: "\\vec v", meaning: "particle velocity", unit: "m s^{-1}" },
    { symbol: "\\gamma", meaning: "Lorentz factor", unit: "" },
    { symbol: "E", meaning: "total energy", unit: "J" },
    { symbol: "p c", meaning: "momentum-energy product", unit: "J" },
  ]}
/>

## Method

### Derivation 1: Replace Newtonian momentum

Newtonian momentum \\(m\vec v\\) works at low speed but fails to transform consistently between inertial frames.

<PhysicsDerivation
  items={[
    {
      label: "Relativistic momentum",
      tex: "\\vec p=\\gamma m\\vec v",
    },
    {
      label: "Magnitude",
      tex: "p=\\gamma mv",
    },
  ]}
/>

### Derivation 2: Use energy units

Particle physics often reports momentum as \\(pc\\) or as \\(\mathrm\{MeV\}\\,c^\{-1\}\\).

<PhysicsDerivation
  items={[
    {
      label: "Momentum-energy form",
      tex: "pc=\\gamma mvc",
    },
    {
      label: "Using beta",
      tex: "pc=\\gamma\\beta mc^2",
    },
  ]}
/>

### Derivation 3: Connect to massless particles

For a photon, rest mass is zero but momentum is not. The energy-momentum relation gives \\(E=pc\\).

## Rules

<Equation label="Relativistic momentum" tex="\vec p=\gamma m\vec v" />

<Equation label="Momentum magnitude" tex="p=\gamma mv" />

<Equation label="Momentum energy" tex="pc=\gamma\beta mc^2" />

<Equation label="Photon momentum" tex="p=\frac{E}{c}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A particle of mass \\(m\\) moves at \\(0.800c\\). Find \\(p\\) in units of \\(mc\\).",
      answer: "\\[\\gamma=1.67\\]\\[p=\\gamma mv=(1.67)m(0.800c)=1.33mc\\]",
    },
    {
      title: "Example 2",
      question: "A proton with rest energy \\(938\\,\\mathrm{MeV}\\) moves at \\(0.600c\\). Find \\(pc\\).",
      answer: "\\[\\gamma=1.25\\]\\[pc=\\gamma\\beta mc^2=(1.25)(0.600)(938)=704\\,\\mathrm{MeV}\\]",
    },
  ]}
/>

## Checks

- Do not use \\(p=mv\\) at relativistic speeds.
- Momentum increases without bound as \\(v\\) approaches \\(c\\).
- The velocity still stays below \\(c\\) for a massive particle.
- Momentum is a vector; signs and components still matter.`;
