export const content = String.raw`## Principle

Angular momentum measures rotational motion about a chosen point or axis.

## Notation

<Notation
  items={[
    { symbol: "\\vec L", meaning: "angular momentum", unit: "kg m^{2} s^{-1}" },
    { symbol: "\\vec r", meaning: "position from chosen origin", unit: "m" },
    { symbol: "\\vec p", meaning: "linear momentum", unit: "kg m s^{-1}" },
    { symbol: "I", meaning: "moment of inertia about a fixed axis", unit: "kg m^{2}" },
    { symbol: "\\omega", meaning: "angular velocity", unit: "rad s^{-1}" },
    { symbol: "\\vec\\tau_{\\mathrm{ext}}", meaning: "net external torque", unit: "N m" },
  ]}
/>

## Method

### Derivation 1: Define angular momentum for a particle

The origin matters. The same particle can have different angular momentum about different points because \\(\vec r\\) changes.

<PhysicsDerivation
  items={[
    {
      label: "Linear momentum",
      tex: "\\vec p=m\\vec v",
    },
    {
      label: "Angular momentum",
      tex: "\\vec L=\\vec r\\times\\vec p",
    },
    {
      label: "Magnitude",
      tex: "L=mrv\\sin\\phi",
    },
  ]}
/>

### Derivation 2: Reduce to fixed-axis rigid-body rotation

For a rigid body rotating about a fixed principal axis, all mass elements share the same angular speed.

<PhysicsDerivation
  items={[
    {
      label: "Element contribution",
      tex: "dL=r_\\perp^2\\omega\\,dm",
    },
    {
      label: "Integrate over body",
      tex: "L=\\left(\\int r_\\perp^2\\,dm\\right)\\omega",
    },
    {
      label: "Fixed-axis form",
      tex: "L=I\\omega",
    },
  ]}
/>

### Derivation 3: Connect torque to angular momentum change

Torque is the rate of change of angular momentum. It can change magnitude, direction, or both.

<PhysicsDerivation
  items={[
    {
      label: "Torque law",
      tex: "\\vec\\tau_{\\mathrm{ext}}=\\frac{d\\vec L}{dt}",
    },
    {
      label: "Zero external torque",
      tex: "\\vec\\tau_{\\mathrm{ext}}=\\vec0\\Rightarrow\\vec L\\ \\text{is constant}",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Particle angular momentum" tex="\vec L=\vec r\times\vec p" />

<Equation label="Particle magnitude" tex="L=mrv\sin\phi" />

<Equation label="Rigid fixed axis" tex="L=I\omega" />

<Equation label="Torque law" tex="\vec\tau_{\mathrm{ext}}=\frac{d\vec L}{dt}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(0.50\\,\\mathrm{kg}\\) particle moves at \\(6.0\\,\\mathrm{m\\,s^{-1}}\\) perpendicular to a radius \\(0.80\\,\\mathrm{m}\\). Find \\(L\\).",
      answer: "Use \\[L=mrv=0.50(0.80)(6.0)=2.4\\,\\mathrm{kg\\,m^2\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "A disk has \\(I=0.30\\,\\mathrm{kg\\,m^2}\\) and \\(\\omega=12\\,\\mathrm{rad\\,s^{-1}}\\). Find \\(L\\).",
      answer: "For a fixed axis, \\[L=I\\omega=0.30(12)=3.6\\,\\mathrm{kg\\,m^2\\,s^{-1}}\\]",
    },
  ]}
/>

## Checks

- Angular momentum depends on the chosen origin.
- Direction follows the right-hand rule.
- \\(L=I\\omega\\) is not valid for every moving body.
- Torque changes angular momentum, not necessarily speed.`;
