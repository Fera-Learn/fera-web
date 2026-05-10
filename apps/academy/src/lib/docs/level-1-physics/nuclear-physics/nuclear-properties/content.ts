export const content = String.raw`## Principle

Nuclear properties are organized by proton number, neutron number, mass defect, radius, and charge.

## Notation

<Notation
  items={[
    { symbol: "Z", meaning: "proton number", unit: "1" },
    { symbol: "N", meaning: "neutron number", unit: "1" },
    { symbol: "A", meaning: "nucleon number", unit: "1" },
    { symbol: "R", meaning: "nuclear radius", unit: "m" },
    { symbol: "u", meaning: "atomic mass unit", unit: "kg" },
    { symbol: "e", meaning: "elementary charge", unit: "C" },
  ]}
/>

## Method

### Derivation 1: Nuclide bookkeeping

The nuclide symbol stores composition.

<PhysicsDerivation
  items={[
    {
      label: "Mass number",
      tex: "A=Z+N",
    },
    {
      label: "Neutron number",
      tex: "N=A-Z",
    },
    {
      label: "Nuclear charge",
      tex: "q=+Ze",
    },
  ]}
/>

### Derivation 2: Nuclear size

Nearly constant nuclear density gives a radius proportional to the cube root of nucleon number.

<PhysicsDerivation
  items={[
    {
      label: "Volume scaling",
      tex: "\\frac{4}{3}\\pi R^3\\propto A",
    },
    {
      label: "Radius law",
      tex: "R=R_0A^{1/3}",
    },
  ]}
/>

### Derivation 3: Density scale

Using \\(m_{\mathrm N}\approx u\\) gives the nuclear density scale.

<PhysicsDerivation
  items={[
    {
      label: "Mass estimate",
      tex: "M\\approx Au",
    },
    {
      label: "Density estimate",
      tex: "\\rho\\approx\\frac{Au}{(4/3)\\pi R_0^3A}=\\frac{3u}{4\\pi R_0^3}",
    },
  ]}
/>

## Rules

<Equation label="Nucleon count" tex="A=Z+N" />

<Equation label="Nuclear radius" tex="R=R_0A^{1/3}" />

<Equation label="Nuclear density" tex="\rho\approx\frac{3u}{4\pi R_0^3}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find \\(N\\) for \\(^{238}_{92}\\mathrm U\\).",
      answer: "\\(N=A-Z=238-92=146\\).",
    },
    {
      title: "Example 2",
      question: "If \\(A\\) increases by a factor of \\(8\\), how does \\(R\\) change?",
      answer: "Because \\(R\\propto A^{1/3}\\), the radius doubles.",
    },
  ]}
/>

## Checks

- Isotopes have the same \\(Z\\) and different \\(N\\).
- Nuclear charge depends on \\(Z\\), not \\(A\\).
- Nuclear mass is close to \\(Au\\), but binding energy changes it.
- Radius grows slowly because it scales as \\(A^{1/3}\\).`;
