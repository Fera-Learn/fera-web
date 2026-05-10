export const content = String.raw`## Principle

The photoelectric effect shows that light transfers energy in packets called photons. A metal emits electrons only when one photon has enough energy to overcome the work function.

Increasing intensity increases the number of photons, not the energy of each photon.

## Notation

<Notation
  items={[
    { symbol: "E_\\gamma", meaning: "photon energy", unit: "J, eV" },
    { symbol: "h", meaning: "Planck constant", unit: "J s" },
    { symbol: "f", meaning: "frequency", unit: "s^{-1}" },
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
    { symbol: "\\phi", meaning: "work function", unit: "J, eV" },
    { symbol: "K_{\\max}", meaning: "maximum photoelectron kinetic energy", unit: "J, eV" },
    { symbol: "V_s", meaning: "stopping potential", unit: "V" },
  ]}
/>

## Method

### Derivation 1: Photon energy

Each photon has energy set by frequency. Using \\(c=f\lambda\\), photon energy can also be written in terms of wavelength.

<PhysicsDerivation
  items={[
    {
      label: "Frequency form",
      tex: "E_\\gamma=hf",
    },
    {
      label: "Wavelength form",
      tex: "E_\\gamma=\\frac{hc}{\\lambda}",
    },
  ]}
/>

### Derivation 2: Energy balance at the surface

One photon gives its energy to one electron. The work function is the minimum energy needed to escape.

<PhysicsDerivation
  items={[
    {
      label: "Photoelectric equation",
      tex: "K_{\\max}=hf-\\phi",
    },
    {
      label: "Stopping potential",
      tex: "eV_s=K_{\\max}",
    },
  ]}
/>

### Derivation 3: Threshold condition

At threshold, emitted electrons have zero maximum kinetic energy.

<PhysicsDerivation
  items={[
    {
      label: "Threshold frequency",
      tex: "f_0=\\frac{\\phi}{h}",
    },
    {
      label: "Threshold wavelength",
      tex: "\\lambda_0=\\frac{hc}{\\phi}",
    },
  ]}
/>

## Rules

<Equation label="Photon energy" tex="E_\gamma=hf=\frac{hc}{\lambda}" />

<Equation label="Photoelectric equation" tex="K_{\max}=hf-\phi" />

<Equation label="Stopping potential" tex="eV_s=K_{\max}" />

<Equation label="Threshold frequency" tex="f_0=\frac{\phi}{h}" />

<Equation label="Threshold wavelength" tex="\lambda_0=\frac{hc}{\phi}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Light of wavelength \\(280\\,\\mathrm{nm}\\) strikes a metal with work function \\(2.20\\,\\mathrm{eV}\\). Find the photon energy using \\(hc=1240\\,\\mathrm{eV\\,nm}\\).",
      answer: "\\[E_\\gamma=\\frac{1240}{280}=4.43\\,\\mathrm{eV}\\]",
    },
    {
      title: "Example 2",
      question: "For the same metal, find the maximum kinetic energy and stopping potential.",
      answer: "\\[K_{\\max}=4.43-2.20=2.23\\,\\mathrm{eV}\\]\\[V_s=2.23\\,\\mathrm{V}\\]",
    },
  ]}
/>

## Checks

- No electrons are emitted if the photon energy is below the work function.
- A larger frequency gives larger electron kinetic energy.
- A larger intensity above threshold gives more emitted electrons.
- The stopping potential measures maximum kinetic energy per unit charge.`;
