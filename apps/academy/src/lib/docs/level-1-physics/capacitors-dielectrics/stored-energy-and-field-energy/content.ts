export const content = String.raw`## Principle

A capacitor stores work done to move charge across an increasing potential difference.

## Notation

<Notation
  items={[
    { symbol: "U", meaning: "energy stored in the capacitor", unit: "J" },
    { symbol: "q", meaning: "charge already moved during charging", unit: "C" },
    { symbol: "Q", meaning: "final charge magnitude", unit: "C" },
    { symbol: "V", meaning: "final voltage", unit: "V" },
    { symbol: "C", meaning: "capacitance", unit: "F" },
    { symbol: "u_E", meaning: "electric field energy density", unit: "J m^{-3}" },
  ]}
/>

## Method

### Derivation 1: Integrate the charging work

During charging, the voltage is not constant. When charge \\(q\\) is already on the capacitor, the voltage is \\(q/C\\).

<PhysicsDerivation
  items={[
    {
      label: "Instantaneous voltage",
      tex: "v(q)=\\frac{q}{C}",
    },
    {
      label: "Small work",
      tex: "dW=v(q)\\,dq=\\frac{q}{C}\\,dq",
    },
    {
      label: "Stored energy",
      tex: "U=\\int_0^Q\\frac{q}{C}\\,dq=\\frac{Q^2}{2C}",
    },
  ]}
/>

### Derivation 2: Rewrite the same energy

Use \\(Q=CV\\) to express the energy with whichever pair of variables is known.

<PhysicsDerivation
  items={[
    {
      label: "Charge form",
      tex: "U=\\frac{Q^2}{2C}",
    },
    {
      label: "Voltage form",
      tex: "U=\\frac{1}{2}CV^2",
    },
    {
      label: "Mixed form",
      tex: "U=\\frac{1}{2}QV",
    },
  ]}
/>

### Derivation 3: Field energy density

For a parallel-plate capacitor, write the stored energy as energy in the space between the plates.

<PhysicsDerivation
  items={[
    {
      label: "Capacitor energy",
      tex: "U=\\frac{1}{2}CV^2",
    },
    {
      label: "Plate substitutions",
      tex: "C=\\epsilon_0\\frac{A}{d},\\quad V=Ed",
    },
    {
      label: "Field energy",
      tex: "U=\\frac{1}{2}\\epsilon_0E^2(Ad)",
    },
    {
      label: "Energy density",
      tex: "u_E=\\frac{U}{Ad}=\\frac{1}{2}\\epsilon_0E^2",
    },
  ]}
/>

## Rules

These are equivalent forms of the stored energy.

<Equation label="Charge form" tex="U=\frac{Q^2}{2C}" />

<Equation label="Voltage form" tex="U=\frac{1}{2}CV^2" />

<Equation label="Mixed form" tex="U=\frac{1}{2}QV" />

<Equation label="Field density" tex="u_E=\frac{1}{2}\epsilon_0E^2" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the energy stored in a \\(10\\,\\mu\\mathrm{F}\\) capacitor charged to \\(12\\,\\mathrm{V}\\).",
      answer: "\\[U=\\frac{1}{2}CV^2=\\frac{1}{2}(10\\times10^{-6})(12^2)=7.2\\times10^{-4}\\,\\mathrm{J}\\]",
    },
    {
      title: "Example 2",
      question: "A vacuum field has magnitude \\(2.0\\times10^5\\,\\mathrm{V\\,m^{-1}}\\). Estimate its energy density.",
      answer: "\\[u_E=\\frac{1}{2}\\epsilon_0E^2=\\frac{1}{2}(8.85\\times10^{-12})(2.0\\times10^5)^2=0.177\\,\\mathrm{J\\,m^{-3}}\\]",
    },
  ]}
/>

## Checks

- Use the energy form that matches the fixed quantity: fixed \\(Q\\) or fixed \\(V\\).
- Stored energy is never negative.
- The factor \\(1/2\\) appears because the voltage rises from zero during charging.
- Field energy density scales as \\(E^2\\), so reversing field direction does not change it.`;
