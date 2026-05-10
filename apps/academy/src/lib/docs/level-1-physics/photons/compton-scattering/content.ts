export const content = String.raw`## Principle

Compton scattering shows that photons carry momentum. A photon scattered by an electron loses energy, its wavelength increases, and the electron recoils.

The wavelength shift depends only on the scattering angle for a free electron initially at rest.

## Notation

<Notation
  items={[
    { symbol: "\\lambda", meaning: "incident photon wavelength", unit: "m" },
    { symbol: "\\lambda'", meaning: "scattered photon wavelength", unit: "m" },
    { symbol: "\\Delta\\lambda", meaning: "Compton wavelength shift", unit: "m" },
    { symbol: "\\theta", meaning: "photon scattering angle", unit: "rad" },
    { symbol: "m_e", meaning: "electron rest mass", unit: "kg" },
    { symbol: "\\lambda_C", meaning: "electron Compton wavelength", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Assign photon energy and momentum

The photon is massless but carries energy and momentum.

<PhysicsDerivation
  items={[
    {
      label: "Photon energy",
      tex: "E=hf=\\frac{hc}{\\lambda}",
    },
    {
      label: "Photon momentum",
      tex: "p=\\frac{E}{c}=\\frac{h}{\\lambda}",
    },
  ]}
/>

### Derivation 2: Apply relativistic conservation

Energy and momentum are conserved in the photon-electron collision. Eliminating the recoil electron variables gives the wavelength shift.

<PhysicsDerivation
  items={[
    {
      label: "Compton shift",
      tex: "\\Delta\\lambda=\\lambda'-\\lambda=\\frac{h}{m_ec}(1-\\cos\\theta)",
    },
    {
      label: "Electron Compton wavelength",
      tex: "\\lambda_C=\\frac{h}{m_ec}",
    },
  ]}
/>

### Derivation 3: Interpret angle limits

Forward scattering has no wavelength change. Backscattering gives the largest shift.

<PhysicsDerivation
  items={[
    {
      label: "Forward scattering",
      tex: "\\theta=0\\Rightarrow\\Delta\\lambda=0",
    },
    {
      label: "Backscattering",
      tex: "\\theta=180^\\circ\\Rightarrow\\Delta\\lambda=2\\lambda_C",
    },
  ]}
/>

## Rules

<Equation label="Photon momentum" tex="p=\frac{h}{\lambda}" />

<Equation label="Compton shift" tex="\lambda'-\lambda=\frac{h}{m_ec}(1-\cos\theta)" />

<Equation label="Electron Compton wavelength" tex="\lambda_C=\frac{h}{m_ec}=2.43\times10^{-12}\,\mathrm{m}" />

<Equation label="Photon energy" tex="E=\frac{hc}{\lambda}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "An x-ray photon scatters through \\(90^\\circ\\). Find the wavelength shift.",
      answer: "\\[\\Delta\\lambda=\\lambda_C(1-\\cos90^\\circ)=2.43\\times10^{-12}\\,\\mathrm{m}\\]",
    },
    {
      title: "Example 2",
      question: "What is the maximum possible Compton shift?",
      answer: "The maximum shift occurs for \\(\\theta=180^\\circ\\): \\[\\Delta\\lambda=2\\lambda_C=4.86\\times10^{-12}\\,\\mathrm{m}\\]",
    },
  ]}
/>

## Checks

- The scattered photon wavelength is never shorter than the incident wavelength in ordinary Compton scattering from an electron at rest.
- The shift depends on angle, not on the incident wavelength.
- Energy lost by the photon becomes electron kinetic energy.
- The effect is easier to observe for x-rays and gamma rays than for visible light.`;
