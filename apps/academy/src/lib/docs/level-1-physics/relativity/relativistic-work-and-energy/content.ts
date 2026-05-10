export const content = String.raw`## Principle

Relativistic work changes total energy, while rest energy remains \\(mc^2\\).

## Notation

<Notation
  items={[
    { symbol: "E", meaning: "total relativistic energy", unit: "J" },
    { symbol: "E_0", meaning: "rest energy", unit: "J" },
    { symbol: "K", meaning: "kinetic energy", unit: "J" },
    { symbol: "m", meaning: "rest mass", unit: "kg" },
    { symbol: "p", meaning: "relativistic momentum magnitude", unit: "kg m s^{-1}" },
    { symbol: "\\gamma", meaning: "Lorentz factor", unit: "" },
  ]}
/>

## Method

### Derivation 1: Split total energy

A particle has rest energy even when its momentum is zero. Kinetic energy is the excess above rest energy.

<PhysicsDerivation
  items={[
    {
      label: "Total energy",
      tex: "E=\\gamma mc^2",
    },
    {
      label: "Rest energy",
      tex: "E_0=mc^2",
    },
    {
      label: "Kinetic energy",
      tex: "K=E-E_0=(\\gamma-1)mc^2",
    },
  ]}
/>

### Derivation 2: Relate energy and momentum

The invariant energy-momentum relation works in every inertial frame.

<PhysicsDerivation
  items={[
    {
      label: "Invariant relation",
      tex: "E^2=(pc)^2+(mc^2)^2",
    },
    {
      label: "Massless limit",
      tex: "m=0\\Rightarrow E=pc",
    },
  ]}
/>

### Derivation 3: Interpret work

Net work increases kinetic energy. At high speed, extra work mainly increases \\(\gamma\\), not speed toward or beyond \\(c\\).

## Rules

<Equation label="Total energy" tex="E=\gamma mc^2" />

<Equation label="Rest energy" tex="E_0=mc^2" />

<Equation label="Kinetic energy" tex="K=(\gamma-1)mc^2" />

<Equation label="Energy momentum" tex="E^2=(pc)^2+(mc^2)^2" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "An electron with rest energy \\(0.511\\,\\mathrm{MeV}\\) has \\(\\gamma=3.00\\). Find its kinetic energy.",
      answer: "\\[K=(\\gamma-1)mc^2=(3.00-1)(0.511)=1.02\\,\\mathrm{MeV}\\]",
    },
    {
      title: "Example 2",
      question: "A particle has \\(pc=4.00\\,\\mathrm{GeV}\\) and rest energy \\(3.00\\,\\mathrm{GeV}\\). Find its total energy.",
      answer: "\\[E=\\sqrt{(pc)^2+(mc^2)^2}=\\sqrt{4.00^2+3.00^2}=5.00\\,\\mathrm{GeV}\\]",
    },
  ]}
/>

## Checks

- Rest energy is not kinetic energy.
- Use \\(K=(\gamma-1)mc^2\\), not \\(\frac12mv^2\\), at high speed.
- Energy and momentum conservation must be applied together in relativistic collisions.
- For photons, \\(m=0\\) and \\(E=pc\\).`;
