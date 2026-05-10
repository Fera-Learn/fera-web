export const content = String.raw`## Principle

A moving clock is measured to run slow compared with a clock at rest with the events.

## Notation

<Notation
  items={[
    { symbol: "\\Delta\\tau", meaning: "proper time between events", unit: "s" },
    { symbol: "\\Delta t", meaning: "time interval measured in another inertial frame", unit: "s" },
    { symbol: "v", meaning: "relative speed", unit: "m s^{-1}" },
    { symbol: "\\beta", meaning: "\\(v/c\\)", unit: "" },
    { symbol: "\\gamma", meaning: "Lorentz factor", unit: "" },
    { symbol: "L", meaning: "light-clock rest height", unit: "m" },
    { symbol: "c", meaning: "speed of light", unit: "m s^{-1}" },
  ]}
/>

## Method

### Derivation 1: Identify proper time

Proper time is measured by a single clock present at both events. That means the events occur at the same place in that clock's frame.

<PhysicsDerivation
  items={[
    {
      label: "Proper-time condition",
      tex: "\\Delta x'=0",
      note: "The clock does not move in its own rest frame, so the spatial separation between the two ticks is zero.",
    },
    {
      label: "Proper time",
      tex: "\\Delta\\tau=\\frac{2L}{c}",
      note: "Light travels up and back down the light clock in proper time.",
    },
  ]}
/>

### Derivation 2: Light-clock geometry

In the moving frame, light travels a longer diagonal path because the clock moves sideways while light travels upward. The diagonal distance is \(c\Delta t\) and the sideways displacement is \(v\Delta t\).

<PhysicsDerivation
  items={[
    {
      label: "Vertical leg distance",
      tex: "L=c\\frac{\\Delta\\tau}{2}",
    },
    {
      label: "Diagonal geometry",
      tex: "\\left(c\\frac{\\Delta t}{2}\\right)^2=\\left(v\\frac{\\Delta t}{2}\\right)^2+L^2",
      note: "The diagonal hypotenuse is c times half the dilated interval; the horizontal leg is v times half the dilated interval.",
    },
    {
      label: "Solve for L^2",
      tex: "L^2=\\frac{c^2(\\Delta t)^2}{4}-\\frac{v^2(\\Delta t)^2}{4}",
    },
    {
      label: "Combine with vertical leg",
      tex: "L^2=\\frac{c^2(\\Delta\\tau)^2}{4}",
    },
    {
      label: "Set equal and simplify",
      tex: "\\frac{c^2(\\Delta t)^2}{4}-\\frac{v^2(\\Delta t)^2}{4}=\\frac{c^2(\\Delta\\tau)^2}{4}",
    },
    {
      label: "Collect terms",
      tex: "c^2(\\Delta t)^2\\left(1-\\frac{v^2}{c^2}\\right)=c^2(\\Delta\\tau)^2",
    },
    {
      label: "Solve for time ratio",
      tex: "\\Delta t=\\frac{\\Delta\\tau}{\\sqrt{1-v^2/c^2}}",
    },
  ]}
/>

### Derivation 3: Lorentz factor form

The dilated interval is larger than proper time by the Lorentz factor.

<PhysicsDerivation
  items={[
    {
      label: "Lorentz factor definition",
      tex: "\\gamma=\\frac{1}{\\sqrt{1-v^2/c^2}}=\\frac{1}{\\sqrt{1-\\beta^2}}",
    },
    {
      label: "Time dilation result",
      tex: "\\Delta t=\\gamma\\Delta\\tau",
      note: "The moving clock ticks slower: one tick of the moving clock takes longer in the lab frame.",
    },
  ]}
/>

### Derivation 4: Use lifetime and distance consistently

For an unstable moving particle, the laboratory sees a longer lifetime. Distance traveled in the lab is \(v\\Delta t\\), not \(v\Delta\\tau\).

<PhysicsDerivation
  items={[
    {
      label: "Lab distance",
      tex: "d=v\\Delta t=v\\gamma\\Delta\\tau",
      note: "Always use the dilated time interval when calculating distance traveled in the lab frame.",
    },
  ]}
/>

## Rules

<Equation label="Time dilation" tex="\Delta t=\gamma\Delta\tau" />

<Equation label="Lorentz factor" tex="\gamma=\frac{1}{\sqrt{1-\beta^2}}" />

<Equation label="Proper time" tex="\Delta\tau=\frac{\Delta t}{\gamma}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A clock moving at \(0.800c\) ticks every \(1.00\,\mu\mathrm s\) in its own frame. What interval is measured in the lab?",
      answer: "\[\gamma=\frac{1}{\sqrt{1-0.800^2}}=1.67\]\[\\Delta t=\gamma\Delta\tau=1.67\,\mu\mathrm s\]",
    },
    {
      title: "Example 2",
      question: "A muon has proper lifetime \(2.20\,\mu\mathrm s\) and moves at \(0.995c\). Find its mean laboratory lifetime.",
      answer: "\[\gamma=\frac{1}{\sqrt{1-0.995^2}}=10.0\]\[\\Delta t=\gamma\Delta\tau=22.0\,\mu\mathrm s\]",
    },
  ]}
/>

## Checks

- The proper time is the smallest time interval between the same two events.
- The clock is never slow in its own rest frame.
- Do not mix the particle's proper lifetime with a laboratory distance unless you transform the interval.
- For \(v\ll c\), \(\gamma\approx1\) and the effect is tiny.`;