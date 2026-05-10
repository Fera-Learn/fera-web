export const content = String.raw`## Principle

Parallel currents exert magnetic forces on each other. Currents in the same direction attract; currents in opposite directions repel.

## Notation

<Notation
  items={[
    { symbol: "I_1, I_2", meaning: "currents in the two wires", unit: "A" },
    { symbol: "d", meaning: "separation between the wires", unit: "m" },
    { symbol: "L", meaning: "length of wire considered", unit: "m" },
    { symbol: "F", meaning: "magnetic force", unit: "N" },
    { symbol: "\\mu_0", meaning: "permeability of free space", unit: "N A^{-2}" },
  ]}
/>

## Method

### Derivation 1: Find the field from one wire

Wire 1 produces a magnetic field at wire 2.

<PhysicsDerivation
  items={[
    {
      label: "Field from wire 1 at wire 2",
      tex: "B_1=\\frac{\\mu_0 I_1}{2\\pi d}",
    },
    {
      label: "Force on a current length",
      tex: "F_2=I_2LB_1",
    },
  ]}
/>

### Derivation 2: Combine the equations

Substituting the straight-wire field into the conductor-force equation gives the force per unit length.

<PhysicsDerivation
  items={[
    {
      label: "Force per length",
      tex: "\\frac{F}{L}=\\frac{\\mu_0 I_1I_2}{2\\pi d}",
    },
  ]}
/>

### Derivation 3: Decide attraction or repulsion

Use the right-hand rule for the field from one wire and \\(\vec F=I\vec L\times\vec B\\) for the other. Same-direction currents pull together; opposite-direction currents push apart.

## Rules

<Equation label="Parallel wire force per length" tex="\frac{F}{L}=\frac{\mu_0 I_1I_2}{2\pi d}" />

<Equation label="Same direction" tex="I_1\parallel I_2\Rightarrow \text{attraction}" />

<Equation label="Opposite direction" tex="I_1\text{ antiparallel to }I_2\Rightarrow \text{repulsion}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Two long parallel wires carry currents in the same direction. Do they attract or repel?",
      answer: "They attract. Each wire lies in the magnetic field produced by the other, and the right-hand rule gives a force toward the other wire.",
    },
    {
      title: "Example 2",
      question: "Two wires carry \\(3.0\\,\\mathrm A\\) and \\(5.0\\,\\mathrm A\\), separated by \\(0.20\\,\\mathrm m\\). Find \\(F/L\\).",
      answer: "\\[\\frac{F}{L}=\\frac{(4\\pi\\times10^{-7})(3.0)(5.0)}{2\\pi(0.20)}=1.5\\times10^{-5}\\,\\mathrm{N\\,m^{-1}}\\]",
    },
  ]}
/>

## Checks

- The force is mutual: each wire feels the same force magnitude per length.
- The result assumes long straight parallel wires.
- The direction depends on current direction, not on charge-carrier drift direction.
- The force weakens as separation increases.`;
