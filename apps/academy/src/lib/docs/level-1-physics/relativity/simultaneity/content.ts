export const content = String.raw`## Principle

Events simultaneous in one inertial frame are not necessarily simultaneous in another.

## Notation

<Notation
  items={[
    { symbol: "\\Delta t", meaning: "time separation in frame \\(S\\)", unit: "s" },
    { symbol: "\\Delta x", meaning: "position separation in frame \\(S\\)", unit: "m" },
    { symbol: "\\Delta t'", meaning: "time separation in frame \\(S'\\)", unit: "s" },
    { symbol: "v", meaning: "speed of \\(S'\\) relative to \\(S\\)", unit: "m s^{-1}" },
    { symbol: "\\gamma", meaning: "Lorentz factor", unit: "" },
  ]}
/>

## Method

### Derivation 1: Compare event times

The Lorentz time transformation gives the time coordinate of each event. Subtract the two event equations.

<PhysicsDerivation
  items={[
    {
      label: "Time transform",
      tex: "t'=\\gamma\\left(t-\\frac{vx}{c^2}\\right)",
    },
    {
      label: "Time separation",
      tex: "\\Delta t'=\\gamma\\left(\\Delta t-\\frac{v\\Delta x}{c^2}\\right)",
    },
  ]}
/>

### Derivation 2: Test simultaneity

If two events are simultaneous in \\(S\\), then \\(\\Delta t=0\\). For separated events, the moving frame usually assigns different times.

<PhysicsDerivation
  items={[
    {
      label: "Simultaneous in S",
      tex: "\\Delta t=0",
    },
    {
      label: "Moving-frame time gap",
      tex: "\\Delta t'=-\\gamma\\frac{v\\Delta x}{c^2}",
    },
  ]}
/>

### Derivation 3: Separate cause from ordering

Only spacelike-separated events can have their time order reversed by changing frame. Timelike cause-and-effect order is preserved.

## Rules

<Equation label="Time difference" tex="\Delta t'=\gamma\left(\Delta t-\frac{v\Delta x}{c^2}\right)" />

<Equation label="Simultaneous in S" tex="\Delta t'= -\gamma\frac{v\Delta x}{c^2}" />

<Equation label="Same place test" tex="\Delta x=0\Rightarrow \Delta t'=\gamma\Delta t" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Two flashes are simultaneous in \\(S\\), separated by \\(900\\,\\mathrm m\\). Frame \\(S'\\) moves at \\(0.600c\\). Find \\(\\Delta t'\\).",
      answer: "\\[\\gamma=1.25\\]\\[\\Delta t'=-\\gamma\\frac{v\\Delta x}{c^2}=-1.25\\frac{(0.600c)(900)}{c^2}=-2.25\\,\\mu\\mathrm s\\]",
    },
    {
      title: "Example 2",
      question: "Two events occur at the same place in \\(S\\). Can they be simultaneous in one frame and not another?",
      answer: "If \\(\\Delta x=0\\), then \\(\\Delta t'=\\gamma\\Delta t\\). If \\(\\Delta t=0\\), then \\(\\Delta t'=0\\). Same-place simultaneity is shared by inertial frames.",
    },
  ]}
/>

## Checks

- Always state which frame says the events are simultaneous.
- Use signed \\(\Delta x\\); reversing event order changes the sign.
- Relativity of simultaneity is not signal delay.
- Causal order cannot be reversed for events linked by a material object or light signal.`;
