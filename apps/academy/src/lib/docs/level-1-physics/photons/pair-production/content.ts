export const content = String.raw`## Principle

Pair production converts photon energy into a particle-antiparticle pair. For an electron-positron pair, the photon must supply at least two electron rest energies.

Momentum conservation requires a nearby nucleus or another particle to recoil.

## Notation

<Notation
  items={[
    { symbol: "E_\\gamma", meaning: "incident photon energy", unit: "J, MeV" },
    { symbol: "m_e c^2", meaning: "electron rest energy", unit: "MeV" },
    { symbol: "K_{\\mathrm{tot}}", meaning: "total kinetic energy after production", unit: "J, MeV" },
    { symbol: "E_{\\mathrm{th}}", meaning: "threshold photon energy", unit: "J, MeV" },
    { symbol: "\\lambda_{\\max}", meaning: "largest photon wavelength that can produce the pair", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Use rest energy

Creating a particle requires creating its rest energy. An electron and positron have equal rest mass.

<PhysicsDerivation
  items={[
    {
      label: "Electron rest energy",
      tex: "m_ec^2=0.511\\,\\mathrm{MeV}",
    },
    {
      label: "Pair threshold",
      tex: "E_{\\mathrm{th}}=2m_ec^2=1.022\\,\\mathrm{MeV}",
    },
  ]}
/>

### Derivation 2: Apply energy conservation

Above threshold, extra photon energy becomes kinetic energy and small recoil energy.

<PhysicsDerivation
  items={[
    {
      label: "Energy balance",
      tex: "E_\\gamma=2m_ec^2+K_{\\mathrm{tot}}+K_{\\mathrm{recoil}}",
    },
    {
      label: "Negligible recoil estimate",
      tex: "K_{\\mathrm{tot}}\\approx E_\\gamma-1.022\\,\\mathrm{MeV}",
    },
  ]}
/>

### Derivation 3: Link threshold to wavelength

A photon must have short enough wavelength to reach the threshold energy.

<PhysicsDerivation
  items={[
    {
      label: "Photon energy",
      tex: "E_\\gamma=\\frac{hc}{\\lambda}",
    },
    {
      label: "Threshold wavelength",
      tex: "\\lambda_{\\max}=\\frac{hc}{2m_ec^2}",
    },
  ]}
/>

## Rules

<Equation label="Pair threshold" tex="E_{\mathrm{th}}=2m_ec^2=1.022\,\mathrm{MeV}" />

<Equation label="Energy balance" tex="E_\gamma=2m_ec^2+K_{\mathrm{tot}}+K_{\mathrm{recoil}}" />

<Equation label="Photon energy" tex="E_\gamma=\frac{hc}{\lambda}" />

<Equation label="Annihilation photons" tex="e^-+e^+\rightarrow2\gamma" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Can a \\(0.900\\,\\mathrm{MeV}\\) photon produce an electron-positron pair?",
      answer: "No. The threshold is \\(1.022\\,\\mathrm{MeV}\\), so the photon energy is too small.",
    },
    {
      title: "Example 2",
      question: "Estimate the total kinetic energy available from a \\(2.50\\,\\mathrm{MeV}\\) photon, ignoring recoil.",
      answer: "\\[K_{\\mathrm{tot}}\\approx2.50-1.022=1.48\\,\\mathrm{MeV}\\]",
    },
  ]}
/>

## Checks

- Pair production cannot occur in empty space with a single photon because momentum cannot be conserved.
- Threshold energy supplies rest energy, not kinetic energy.
- Extra energy appears as kinetic energy and recoil.
- Pair annihilation is the reverse process.`;
