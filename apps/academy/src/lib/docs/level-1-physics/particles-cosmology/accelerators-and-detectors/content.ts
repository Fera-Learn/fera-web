export const content = String.raw`## Principle

Accelerators use electric fields to give charged particles energy, while detectors use ionization, curvature, timing, and deposited energy to infer particle properties.

## Notation

<Notation
  items={[
    { symbol: "q", meaning: "particle charge", unit: "C" },
    { symbol: "V", meaning: "accelerating potential difference", unit: "V" },
    { symbol: "K", meaning: "kinetic energy", unit: "J, eV" },
    { symbol: "B", meaning: "magnetic flux density", unit: "T" },
    { symbol: "r", meaning: "track radius", unit: "m" },
    { symbol: "p", meaning: "momentum", unit: "kg m s^{-1}, eV/c" },
  ]}
/>

## Method

### Derivation 1: Energy gain from voltage

An electric field does work on a charged particle when it moves through a potential difference.

<PhysicsDerivation
  items={[
    {
      label: "Work by field",
      tex: "W=qV",
    },
    {
      label: "Kinetic-energy gain",
      tex: "\\Delta K=qV",
    },
  ]}
/>

### Derivation 2: Track curvature gives momentum

A magnetic force perpendicular to velocity supplies centripetal acceleration.

<PhysicsDerivation
  items={[
    {
      label: "Magnetic force",
      tex: "F=|q|vB",
    },
    {
      label: "Centripetal force",
      tex: "|q|vB=\\frac{mv^2}{r}",
    },
    {
      label: "Momentum",
      tex: "p=|q|Br",
    },
  ]}
/>

### Derivation 3: Detector signatures

Momentum, charge sign, and energy deposition are combined because one measurement rarely identifies a particle uniquely.

<PhysicsDerivation
  items={[
    {
      label: "Curvature relation",
      tex: "r=\\frac{p}{|q|B}",
    },
    {
      label: "Speed from time of flight",
      tex: "v=\\frac{L}{\\Delta t}",
    },
  ]}
/>

## Rules

<Equation label="Energy gain" tex="\Delta K=qV" />

<Equation label="Magnetic rigidity" tex="p=|q|Br" />

<Equation label="Track radius" tex="r=\frac{p}{|q|B}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A proton is accelerated through \\(2.0\\,\\mathrm{MV}\\). Find its kinetic energy.",
      answer: "\\(K=eV=2.0\\,\\mathrm{MeV}\\).",
    },
    {
      title: "Example 2",
      question: "A singly charged particle has \\(r=0.80\\,\\mathrm m\\) in \\(0.50\\,\\mathrm T\\). Find \\(p\\).",
      answer: "\\(p=eBr=1.60\\times10^{-19}(0.50)(0.80)=6.4\\times10^{-20}\\,\\mathrm{kg\\,m\\,s^{-1}}\\).",
    },
  ]}
/>

## Checks

- Electric fields change kinetic energy.
- Magnetic fields bend charged tracks but do no work.
- Curvature direction gives charge sign.
- Momentum, energy, and lifetime evidence should be combined.`;
