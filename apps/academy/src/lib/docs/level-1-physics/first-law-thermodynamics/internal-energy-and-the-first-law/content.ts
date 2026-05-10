export const content = String.raw`## Principle

The first law is energy conservation applied to a thermodynamic system.

## Notation

<Notation
  items={[
    { symbol: "U", meaning: "internal energy", unit: "J" },
    { symbol: "\\Delta U", meaning: "change in internal energy", unit: "J" },
    { symbol: "Q", meaning: "heat transferred to the system", unit: "J" },
    { symbol: "W", meaning: "work done by the system", unit: "J" },
    { symbol: "W_{\\mathrm{on}}", meaning: "work done on the system", unit: "J" },
  ]}
/>

## Method

### Derivation 1: Account for energy crossing the boundary

Heat added raises the system energy if nothing else happens. Work done by the system lowers the system energy because energy leaves mechanically.

<PhysicsDerivation
  items={[
    {
      label: "Heat input",
      tex: "Q>0\\Rightarrow U\\ \\text{tends to increase}",
    },
    {
      label: "Work output",
      tex: "W>0\\Rightarrow U\\ \\text{tends to decrease}",
    },
    {
      label: "First law",
      tex: "\\Delta U=Q-W",
    },
  ]}
/>

### Derivation 2: Convert sign conventions

Some problems give work done on the system instead. That is the negative of work done by the system.

<PhysicsDerivation
  items={[
    {
      label: "Work sign conversion",
      tex: "W_{\\mathrm{on}}=-W",
    },
    {
      label: "On-system form",
      tex: "\\Delta U=Q+W_{\\mathrm{on}}",
    },
    {
      label: "Adiabatic case",
      tex: "Q=0\\Rightarrow \\Delta U=-W",
    },
  ]}
/>

## Rules

These are the first-law forms used in this course.

<Equation label="First law" tex="\Delta U=Q-W" />

<Equation label="Work on system" tex="\Delta U=Q+W_{\mathrm{on}}" />

<Equation label="Adiabatic transfer" tex="Q=0\Rightarrow\Delta U=-W" />

<Equation label="Cyclic transfer" tex="\Delta U=0\Rightarrow Q=W" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A gas absorbs \\(650\\,\\mathrm{J}\\) of heat and does \\(240\\,\\mathrm{J}\\) of work. Find \\(\\Delta U\\).",
      answer: "\\[\\Delta U=Q-W=650-240=410\\,\\mathrm{J}\\]",
    },
    {
      title: "Example 2",
      question: "A gas is compressed adiabatically, and \\(180\\,\\mathrm{J}\\) of work is done on it. Find \\(\\Delta U\\).",
      answer: "Here \\(Q=0\\) and \\(W_{\\mathrm{on}}=180\\,\\mathrm{J}\\), so \\[\\Delta U=Q+W_{\\mathrm{on}}=180\\,\\mathrm{J}\\]",
    },
  ]}
/>

## Checks

- State the work sign convention before substituting numbers.
- \\(Q>0\\) means heat enters the system.
- \\(W>0\\) means the system does work on the surroundings.
- Internal energy is a state function; heat and work are not.`;
