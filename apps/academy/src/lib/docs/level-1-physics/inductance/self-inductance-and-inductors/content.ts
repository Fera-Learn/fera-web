export const content = String.raw`## Principle

An inductor opposes changes in its own current by producing a self-induced emf.

## Notation

<Notation
  items={[
    { symbol: "L", meaning: "self-inductance", unit: "H" },
    { symbol: "I", meaning: "current through the inductor", unit: "A" },
    { symbol: "N\\Phi_B", meaning: "magnetic flux linkage of the coil", unit: "Wb" },
    { symbol: "\\mathcal E_L", meaning: "self-induced emf", unit: "V" },
    { symbol: "V_L", meaning: "passive-sign voltage across an inductor", unit: "V" },
    { symbol: "l", meaning: "solenoid length", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Define self-inductance

Current in a coil creates magnetic flux through the same coil. In a linear magnetic system, flux linkage is proportional to current.

<PhysicsDerivation
  items={[
    {
      label: "Flux linkage",
      tex: "N\\Phi_B=LI",
    },
    {
      label: "Self-inductance",
      tex: "L=\\frac{N\\Phi_B}{I}",
    },
  ]}
/>

### Derivation 2: Self-induced emf

Faraday's law applied to the coil's own flux linkage gives the back emf.

<PhysicsDerivation
  items={[
    {
      label: "Faraday's law",
      tex: "\\mathcal E_L=-\\frac{d}{dt}(N\\Phi_B)",
    },
    {
      label: "Linear inductor",
      tex: "\\mathcal E_L=-L\\frac{dI}{dt}",
    },
    {
      label: "Passive sign convention",
      tex: "V_L=L\\frac{dI}{dt}",
    },
  ]}
/>

### Derivation 3: Long-solenoid inductance

For a long solenoid, combine the interior field with the coil's flux linkage.

<PhysicsDerivation
  items={[
    {
      label: "Field",
      tex: "B=\\mu\\frac{N}{l}I",
    },
    {
      label: "Flux linkage",
      tex: "N\\Phi_B=NBA=\\mu\\frac{N^2A}{l}I",
    },
    {
      label: "Inductance",
      tex: "L=\\mu\\frac{N^2A}{l}",
    },
  ]}
/>

## Rules

<Equation label="Self-inductance" tex="\displaystyle L=\frac{N\Phi_B}{I}" />

<Equation label="Self-induced emf" tex="\displaystyle \mathcal E_L=-L\frac{dI}{dt}" />

<Equation label="Inductor voltage" tex="\displaystyle V_L=L\frac{dI}{dt}" />

<Equation label="Solenoid inductance" tex="\displaystyle L=\mu\frac{N^2A}{l}" />

<Equation label="Henry" tex="1\,\mathrm{H}=1\,\mathrm{V\,s\,A^{-1}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "An inductor has \\(L=0.40\\,\\mathrm{H}\\) and current increasing at \\(3.0\\,\\mathrm{A\\,s^{-1}}\\). Find \\(|\\mathcal E_L|\\).",
      answer: "\\[|\\mathcal E_L|=L\\left|\\frac{dI}{dt}\\right|=(0.40)(3.0)=1.2\\,\\mathrm{V}\\]",
    },
    {
      title: "Example 2",
      question: "A long air-core solenoid has \\(N=500\\), \\(A=2.0\\times10^{-4}\\,\\mathrm{m^2}\\), and \\(l=0.10\\,\\mathrm{m}\\). Estimate \\(L\\).",
      answer: "\\[L=\\mu_0\\frac{N^2A}{l}=(4\\pi\\times10^{-7})\\frac{(500)^2(2.0\\times10^{-4})}{0.10}=6.3\\times10^{-4}\\,\\mathrm{H}\\]",
    },
  ]}
/>

## Checks

- Inductors resist changes in current, not current itself.
- Larger turn count strongly increases inductance because \\(L\\propto N^2\\).
- The sign of self-induced emf is a Lenz-law direction statement.`;
