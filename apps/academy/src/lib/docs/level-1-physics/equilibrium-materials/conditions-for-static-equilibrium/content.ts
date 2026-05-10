export const content = String.raw`## Principle

A rigid body is static only when net force and net torque both vanish.

## Notation

<Notation
  items={[
    { symbol: "\\sum\\vec{F}", meaning: "resultant external force", unit: "N" },
    { symbol: "\\sum\\vec{\\tau}", meaning: "resultant external torque", unit: "N m" },
    { symbol: "\\vec{r}", meaning: "position vector from pivot", unit: "m" },
    { symbol: "\\vec{F}", meaning: "applied force", unit: "N" },
    { symbol: "\\theta", meaning: "angle between lever arm and force", unit: "rad or deg" },
    { symbol: "m,\\vec{a}_{\\mathrm{cm}}", meaning: "body mass and center-of-mass acceleration", unit: "kg, m s^{-2}" },
  ]}
/>

## Method

### Derivation 1: Remove translational acceleration

Static equilibrium first requires the body's center of mass to have no acceleration.

<PhysicsDerivation
  items={[
    {
      label: "Newton condition",
      tex: "\\sum\\vec{F}=m\\vec{a}_{\\mathrm{cm}}",
    },
    {
      label: "Static case",
      tex: "\\vec{a}_{\\mathrm{cm}}=\\vec{0}",
    },
    {
      label: "Force balance",
      tex: "\\sum\\vec{F}=\\vec{0}",
    },
  ]}
/>

### Derivation 2: Build the torque equation about a chosen pivot

Rotation depends on where the force acts, so the moment arm must be included.

<PhysicsDerivation
  items={[
    {
      label: "Torque vector",
      tex: "\\vec{\\tau}=\\vec{r}\\times\\vec{F}",
    },
    {
      label: "Torque size",
      tex: "\\tau=rF\\sin\\theta",
      note: "Only the component perpendicular to the lever arm contributes.",
    },
  ]}
/>

The diagram uses the left support as the pivot. Forces through that point still affect force balance, but they create no torque about that point.

<RigidBodyDiagram
  title="Force and torque balance"
  caption="Choosing the pivot at the support removes that support reaction from the torque equation."
  beamLength={4}
  supports={[
    { x: 0, type: "pin", label: "pivot" },
  ]}
  loads={[
    { x: 2, angle: -90, label: "W_b" },
    { x: 4, angle: 90, label: "T", color: "var(--chart-3)" },
  ]}
/>

### Derivation 3: Remove rotational acceleration

<PhysicsDerivation
  items={[
    {
      label: "Torque balance",
      tex: "\\sum\\vec{\\tau}=\\vec{0}",
      note: "Use one sign convention for clockwise and counterclockwise moments.",
    },
  ]}
/>

## Rules

These are the compact results from the derivations above.

<Equation label="Force balance" tex="\sum\vec{F}=\vec{0}" />

<Equation label="Torque balance" tex="\sum\vec{\tau}=\vec{0}" />

<Equation label="Torque vector" tex="\vec{\tau}=\vec{r}\times\vec{F}" />

<Equation label="Torque magnitude" tex="\tau=rF\sin\theta" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(20\\,\\mathrm{N}\\) force acts perpendicular to a \\(0.50\\,\\mathrm{m}\\) handle. Find the torque magnitude.",
      answer: "\\[\\tau=rF=0.50(20)=10\\,\\mathrm{N\\,m}\\]",
    },
    {
      title: "Example 2",
      question: "A downward \\(80\\,\\mathrm{N}\\) load acts \\(0.30\\,\\mathrm{m}\\) right of a pivot. Find the balancing counterclockwise torque.",
      answer: "The load gives \\(80(0.30)=24\\,\\mathrm{N\\,m}\\) clockwise, so equilibrium needs \\(24\\,\\mathrm{N\\,m}\\) counterclockwise.",
    },
  ]}
/>

## Checks

- Zero net force does not prevent rotation.
- A force through the pivot has zero torque.
- Torque signs need one convention.
- Equilibrium is independent of pivot choice.`;
