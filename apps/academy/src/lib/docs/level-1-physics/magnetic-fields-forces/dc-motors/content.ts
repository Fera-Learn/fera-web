export const content = String.raw`## Principle

A DC motor uses magnetic torque on a current loop to produce sustained rotation.

## Notation

<Notation
  items={[
    { symbol: "\\tau", meaning: "motor torque", unit: "N m" },
    { symbol: "N", meaning: "number of coil turns", unit: "" },
    { symbol: "I", meaning: "coil current", unit: "A" },
    { symbol: "A", meaning: "coil area", unit: "m^{2}" },
    { symbol: "B", meaning: "magnetic field magnitude", unit: "T" },
    { symbol: "\\theta", meaning: "angle between magnetic moment and field", unit: "rad" },
  ]}
/>

## Method

The same loop-torque equation drives the motor. A commutator reverses current every half-turn so the torque continues in the same rotational sense.

<PhysicsDerivation
  items={[
    {
      label: "Loop torque",
      tex: "\\tau=NIAB\\sin\\theta",
    },
    {
      label: "Maximum torque",
      tex: "\\tau_{\\max}=NIAB",
    },
    {
      label: "Mechanical power",
      tex: "P_{\\mathrm{mech}}=\\tau\\omega",
    },
    {
      label: "Electrical input",
      tex: "P_{\\mathrm{elec}}=IV",
    },
  ]}
/>

Real motors also generate back emf as they spin, which reduces the current from its starting value.

## Rules

<Equation label="Motor torque" tex="\tau=NIAB\sin\theta" />

<Equation label="Maximum torque" tex="\tau_{\max}=NIAB" />

<Equation label="Mechanical power" tex="P=\tau\omega" />

<Equation label="Electrical power" tex="P=IV" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A coil has \\(N=100\\), \\(I=0.50\\,\\mathrm{A}\\), \\(A=4.0\\times10^{-3}\\,\\mathrm{m^2}\\), and \\(B=0.20\\,\\mathrm{T}\\). Find maximum torque.",
      answer: "\\[\\tau_{\\max}=NIAB=(100)(0.50)(4.0\\times10^{-3})(0.20)=4.0\\times10^{-2}\\,\\mathrm{N\\,m}\\]",
    },
    {
      title: "Example 2",
      question: "Why is a commutator needed in a simple DC motor?",
      answer: "Without current reversal, the magnetic torque would reverse after half a turn. The commutator reverses current so the torque keeps the same rotational sense.",
    },
  ]}
/>

## Checks

- More turns, current, area, or field increase ideal torque.
- Starting current can be large because back emf is initially zero.
- A motor converts electrical input power into mechanical output power plus losses.`;
