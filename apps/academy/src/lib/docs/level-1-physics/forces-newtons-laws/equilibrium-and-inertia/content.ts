export const content = String.raw`## Principle

In an inertial frame, zero resultant force means zero acceleration, not necessarily rest.

## Notation

<Notation
  items={[
    { symbol: "\\sum\\vec{F}", meaning: "resultant external force", unit: "N" },
    { symbol: "\\vec{a}", meaning: "acceleration", unit: "m s^{-2}" },
    { symbol: "\\vec{v}", meaning: "velocity", unit: "m s^{-1}" },
    { symbol: "T", meaning: "tension magnitude", unit: "N" },
    { symbol: "N", meaning: "normal reaction magnitude", unit: "N" },
    { symbol: "W", meaning: "weight magnitude", unit: "N" },
  ]}
/>

## Method

Equilibrium is the zero-acceleration case of the force model, so each component sum must vanish.

<PhysicsDerivation
  items={[
    {
      label: "Start from dynamics",
      tex: "\\sum\\vec{F}=m\\vec{a}",
    },
    {
      label: "Set acceleration",
      tex: "\\vec{a}=\\vec{0}",
      note: "Rest and constant velocity both satisfy this.",
    },
    {
      label: "Balance axes",
      tex: "\\sum F_x=0,\\qquad \\sum F_y=0",
    },
    {
      label: "Solve support forces",
      tex: "F_{\\mathrm{unknown}}\\ \\text{makes the relevant component sum zero}",
    },
  ]}
/>

The free-body diagram below shows a body at rest with two nonzero forces whose vertical components cancel.

<FreeBodyDiagram
  title="Balanced vertical forces"
  caption="The forces are nonzero, but their resultant is zero."
  bodyLabel="lamp"
  bodyShape="point"
  forces={[
    { label: "T", angle: 90 },
    { label: "W", angle: 270, color: "var(--chart-5)" },
  ]}
/>

The diagram is not force-free; it is resultant-free.

## Rules

These are the compact equilibrium statements for an inertial frame.

<Equation label="First law" tex="\sum\vec{F}=\vec{0}\Rightarrow\vec{a}=\vec{0}" />

<Equation label="Component balance" tex="\sum F_x=0,\qquad \sum F_y=0" />

<Equation label="Constant velocity" tex="\vec{v}=\text{constant}" />

<Equation label="Rest case" tex="\vec{v}=\vec{0}\ \text{is one equilibrium case}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(6.0\\,\\mathrm{kg}\\) lamp hangs motionless from one vertical cable. Find the cable tension using \\(g=9.8\\,\\mathrm{m\\,s^{-2}}\\).",
      answer: "Vertical equilibrium gives \\[\\sum F_y=T-mg=0\\] so \\[T=mg=6.0(9.8)=58.8\\,\\mathrm{N}\\]",
    },
    {
      title: "Example 2",
      question: "A block is pulled right by \\(12\\,\\mathrm{N}\\) and remains at rest. Find the horizontal friction force.",
      answer: "The block is in horizontal equilibrium: \\[\\sum F_x=12-f_s=0\\] so \\[f_s=12\\,\\mathrm{N}\\] left.",
    },
  ]}
/>

## Checks

- Zero resultant force means constant velocity, including rest.
- Balance each component separately.
- Support forces are found from force balance; they are not automatically equal to weight.
- Static friction adjusts to the value required for equilibrium until its limit is reached.`;
