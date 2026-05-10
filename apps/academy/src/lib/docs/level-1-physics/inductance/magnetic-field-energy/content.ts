export const content = String.raw`## Principle

Inductors store energy in the magnetic field produced by their current.

## Notation

<Notation
  items={[
    { symbol: "U_B", meaning: "magnetic energy stored", unit: "J" },
    { symbol: "L", meaning: "inductance", unit: "H" },
    { symbol: "I", meaning: "current", unit: "A" },
    { symbol: "u_B", meaning: "magnetic energy density", unit: "J m^{-3}" },
    { symbol: "B", meaning: "magnetic field magnitude", unit: "T" },
    { symbol: "\\mu", meaning: "magnetic permeability of the medium", unit: "N A^{-2}" },
  ]}
/>

## Method

### Derivation 1: Power into an inductor

Using the passive sign convention, the voltage across an inductor is \\(V_L=L\\,dI/dt\\).

<PhysicsDerivation
  items={[
    {
      label: "Electrical power",
      tex: "P=IV_L",
    },
    {
      label: "Inductor voltage",
      tex: "P=IL\\frac{dI}{dt}",
    },
    {
      label: "Energy rate",
      tex: "\\frac{dU_B}{dt}=LI\\frac{dI}{dt}",
    },
  ]}
/>

### Derivation 2: Stored energy

Integrate the power input from zero current to final current.

<PhysicsDerivation
  items={[
    {
      label: "Differential energy",
      tex: "dU_B=LI\\,dI",
    },
    {
      label: "Stored energy",
      tex: "U_B=\\int_0^I LI'\\,dI'",
    },
    {
      label: "Inductor energy",
      tex: "U_B=\\frac{1}{2}LI^2",
    },
  ]}
/>

### Derivation 3: Field energy density

For a long solenoid, combine \\(U_B=\\frac12LI^2\\), \\(L=\mu N^2A/l\\), and \\(B=\mu NI/l\\).

<PhysicsDerivation
  items={[
    {
      label: "Energy density",
      tex: "u_B=\\frac{U_B}{Al}",
    },
    {
      label: "Field form",
      tex: "u_B=\\frac{B^2}{2\\mu}",
    },
  ]}
/>

## Rules

<Equation label="Inductor energy" tex="U_B=\frac{1}{2}LI^2" />

<Equation label="Energy density" tex="\displaystyle u_B=\frac{B^2}{2\mu}" />

<Equation label="Vacuum density" tex="\displaystyle u_B=\frac{B^2}{2\mu_0}" />

<Equation label="Power into inductor" tex="\displaystyle P=LI\frac{dI}{dt}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(0.20\\,\\mathrm{H}\\) inductor carries \\(3.0\\,\\mathrm{A}\\). Find stored energy.",
      answer: "\\[U_B=\\frac12LI^2=\\frac12(0.20)(3.0)^2=0.90\\,\\mathrm{J}\\]",
    },
    {
      title: "Example 2",
      question: "Find the vacuum magnetic energy density for \\(B=0.10\\,\\mathrm{T}\\).",
      answer: "\\[u_B=\\frac{B^2}{2\\mu_0}=\\frac{(0.10)^2}{2(4\\pi\\times10^{-7})}=4.0\\times10^3\\,\\mathrm{J\\,m^{-3}}\\]",
    },
  ]}
/>

## Checks

- Stored magnetic energy is always nonnegative.
- Doubling current quadruples the stored energy.
- Energy can return to the circuit when the current decreases.`;
