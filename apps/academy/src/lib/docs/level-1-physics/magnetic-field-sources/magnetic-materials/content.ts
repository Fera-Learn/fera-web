export const content = String.raw`## Principle

Magnetic materials change the magnetic field because their atoms contain tiny magnetic dipoles. The response can be weak and linear, or strong and history-dependent.

## Notation

<Notation
  items={[
    { symbol: "\\vec B", meaning: "magnetic field", unit: "T" },
    { symbol: "\\vec H", meaning: "magnetizing field", unit: "A m^{-1}" },
    { symbol: "\\vec M", meaning: "magnetization, magnetic dipole moment per volume", unit: "A m^{-1}" },
    { symbol: "\\mu", meaning: "permeability of a material", unit: "N A^{-2}" },
    { symbol: "\\mu_r", meaning: "relative permeability", unit: "" },
    { symbol: "\\chi_m", meaning: "magnetic susceptibility", unit: "" },
  ]}
/>

## Method

### Derivation 1: Separate free-current field from material response

The field inside matter is described using \\(\vec H\\) for the field produced by free currents and \\(\vec M\\) for the material's magnetization.

<PhysicsDerivation
  items={[
    {
      label: "Material relation",
      tex: "\\vec B=\\mu_0(\\vec H+\\vec M)",
    },
    {
      label: "Linear material",
      tex: "\\vec M=\\chi_m\\vec H",
    },
    {
      label: "Permeability form",
      tex: "\\vec B=\\mu\\vec H=\\mu_0\\mu_r\\vec H",
    },
  ]}
/>

### Derivation 2: Classify the response

Diamagnetic materials weakly oppose an applied field. Paramagnetic materials weakly align with it. Ferromagnetic materials can align strongly through domains and can remain magnetized after the external field changes.

### Derivation 3: Recognize hysteresis

In a ferromagnet, \\(\vec B\\) does not depend only on the current value of \\(\vec H\\). It also depends on magnetic history, producing a hysteresis loop.

## Rules

<Equation label="General material field" tex="\vec B=\mu_0(\vec H+\vec M)" />

<Equation label="Linear magnetic material" tex="\vec B=\mu_0(1+\chi_m)\vec H=\mu_0\mu_r\vec H" />

<Equation label="Relative permeability" tex="\mu_r=1+\chi_m" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A material has \\(\\mu_r=500\\). If the same free current would produce \\(B_0=2.0\\times10^{-4}\\,\\mathrm T\\) in vacuum, estimate \\(B\\) in a linear-core model.",
      answer: "For a linear material with the same geometry, \\(B=\\mu_rB_0\\). Thus \\(B=500(2.0\\times10^{-4})=0.10\\,\\mathrm T\\).",
    },
    {
      title: "Example 2",
      question: "Why can a ferromagnetic core keep some magnetization after the current in a coil is switched off?",
      answer: "Ferromagnetic domains can remain partly aligned after the applied magnetizing field is removed. This remanent magnetization is a hysteresis effect.",
    },
  ]}
/>

## Checks

- Vacuum has \\(\mu_r=1\\).
- Diamagnetic response is weakly opposing; paramagnetic response is weakly aligning.
- Ferromagnetic response is strong and often nonlinear.
- Hysteresis means the present field depends on magnetic history, not only the present current.`;
