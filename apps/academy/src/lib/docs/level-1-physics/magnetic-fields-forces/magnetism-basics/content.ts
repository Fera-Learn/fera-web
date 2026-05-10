export const content = String.raw`## Principle

Magnetic effects come from moving charge and act on moving charge.

## Notation

<Notation
  items={[
    { symbol: "\\vec B", meaning: "magnetic field", unit: "T" },
    { symbol: "q", meaning: "particle charge", unit: "C" },
    { symbol: "\\vec v", meaning: "particle velocity", unit: "m s^{-1}" },
    { symbol: "I", meaning: "conventional current", unit: "A" },
    { symbol: "\\vec F_B", meaning: "magnetic force", unit: "N" },
  ]}
/>

## Method

Magnetism is not a separate kind of charge. It is the interaction pattern associated with moving electric charge and magnetic dipoles.

<PhysicsDerivation
  items={[
    {
      label: "Charge source idea",
      tex: "\\text{moving charge}\\rightarrow\\vec B",
    },
    {
      label: "Force target idea",
      tex: "\\vec B+\\text{moving charge}\\rightarrow\\vec F_B",
    },
    {
      label: "No magnetic monopole",
      tex: "\\text{north and south poles occur as pairs}",
    },
  ]}
/>

Bar magnets align with an external magnetic field. A compass needle is a small magnetic dipole: its north-seeking end points along the local field direction.

## Rules

<Equation label="Field unit" tex="1\,\mathrm{T}=1\,\mathrm{N\,A^{-1}\,m^{-1}}" />

<Equation label="Moving charge condition" tex="F_B=0\quad\text{if }v=0\text{ or }\vec v\parallel\vec B" />

<Equation label="Dipole direction" tex="\vec\mu\text{ tends to align with }\vec B" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A stationary charge sits in a steady magnetic field. What magnetic force acts on it?",
      answer: "None. Magnetic force on a particle requires velocity: \\(F_B=|q|vB\\sin\\theta\\).",
    },
    {
      title: "Example 2",
      question: "A compass is moved near a current-carrying wire. Why does the needle turn?",
      answer: "The current is moving charge, so it creates a magnetic field. The compass dipole aligns with the local resultant field.",
    },
  ]}
/>

## Checks

- Magnetic fields are vector fields.
- A magnetic field can change direction of motion without doing work on a point charge.
- Isolated north or south magnetic poles are not observed in ordinary electromagnetism.`;
