export const content = String.raw`## Principle

Nonconservative forces change mechanical energy rather than storing it in a recoverable potential energy function.

## Notation

<Notation
  items={[
    { symbol: "W_{nc}", meaning: "work by nonconservative forces", unit: "J" },
    { symbol: "E", meaning: "mechanical energy", unit: "J" },
    { symbol: "f_k", meaning: "kinetic friction force", unit: "N" },
    { symbol: "d", meaning: "path length", unit: "m" },
  ]}
/>

## Rules

<Equation label="Mechanical energy change" tex="W_{nc}=\Delta K+\Delta U" />

<Equation label="Energy accounting" tex="K_i+U_i+W_{nc}=K_f+U_f" />

<Equation label="Kinetic friction work" tex="W_f=-f_k d" />

## Method

<PhysicsDerivation
  items={[
    {
      label: "Start with energy",
      tex: "K_i+U_i+W_{nc}=K_f+U_f",
    },
    {
      label: "Insert losses",
      tex: "W_f=-f_kd",
    },
    {
      label: "Solve remaining quantity",
      tex: "\\Delta E_{mech}=W_{nc}",
    },
  ]}
/>

<FreeBodyDiagram
  title="Friction removes mechanical energy"
  bodyLabel="block"
  surface="horizontal"
  caption="Kinetic friction does negative work when it points opposite the displacement."
  forces={[
    { label: "N", angle: 90, length: 56 },
    { label: "mg", angle: -90, length: 56 },
    { label: "f_k", angle: 180, length: 64 },
    { label: "d", angle: 0, dashed: true, length: 72 },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A block slides \\(d\\) on a rough horizontal surface with kinetic friction \\(f_k\\). Find the mechanical energy change.",
      answer: "\\(W_f=-f_kd\\), so \\(\\Delta E_{mech}=-f_kd\\). Mechanical energy is transferred away from the block-surface mechanical system.",
    },
    {
      title: "Example 2",
      question: "A cart descends a hill but arrives slower than predicted by \\(mgh=\\frac{1}{2}mv^2\\). What does that imply?",
      answer: "Some nonconservative work is negative. The energy equation is \\(mgh+W_{nc}=\\frac{1}{2}mv^2\\), with \\(W_{nc}<0\\).",
    },
  ]}
/>

## Checks

- Friction work depends on path length.
- Nonconservative work changes mechanical energy.
- Negative nonconservative work removes mechanical energy.
- Positive applied work can add mechanical energy.`;
