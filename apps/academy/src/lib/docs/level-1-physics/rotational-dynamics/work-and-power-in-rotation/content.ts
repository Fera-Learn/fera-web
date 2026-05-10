export const content = String.raw`## Principle

Rotational work is torque accumulated over angular displacement.

## Notation

<Notation
  items={[
    { symbol: "W", meaning: "rotational work", unit: "J" },
    { symbol: "\\tau", meaning: "torque along the rotation axis", unit: "N m" },
    { symbol: "\\theta", meaning: "angular position or displacement", unit: "rad" },
    { symbol: "P", meaning: "power", unit: "W" },
    { symbol: "\\omega", meaning: "angular velocity", unit: "rad s^{-1}" },
    { symbol: "K_{\\mathrm{rot}}", meaning: "rotational kinetic energy", unit: "J" },
  ]}
/>

## Method

### Derivation 1: Build work from torque and angle

Linear work uses force times displacement. Rotational work uses torque times angular displacement, with angle measured in radians.

<PhysicsDerivation
  items={[
    {
      label: "Small angular work",
      tex: "dW=\\tau\\,d\\theta",
    },
    {
      label: "Total work",
      tex: "W=\\int_{\\theta_i}^{\\theta_f}\\tau(\\theta)\\,d\\theta",
    },
    {
      label: "Constant torque",
      tex: "W=\\tau\\Delta\\theta",
    },
  ]}
/>

The graph shows the interpretation of the integral: area under a torque-angle graph is rotational work.

<CartesianPhysicsGraph
  title="Rotational work"
  caption="Area under a torque-angle graph gives the work done."
  width={460}
  height={260}
  xRange={{ min: 0, max: 6, step: 1, label: "theta / rad" }}
  yRange={{ min: 0, max: 12, step: 3, label: "tau / N m" }}
  curves={[
    {
      label: "\\tau(\\theta)",
      points: [
        { x: 0, y: 4 },
        { x: 2, y: 8 },
        { x: 4, y: 8 },
        { x: 6, y: 3 },
      ],
    },
  ]}
/>

### Derivation 2: Connect work, energy, and power

Net rotational work changes rotational kinetic energy. Power is the time rate of doing that work.

<PhysicsDerivation
  items={[
    {
      label: "Work-energy theorem",
      tex: "W_{\\mathrm{net}}=\\Delta K_{\\mathrm{rot}}",
    },
    {
      label: "Rotational kinetic energy",
      tex: "K_{\\mathrm{rot}}=\\frac12I\\omega^2",
    },
    {
      label: "Power",
      tex: "P=\\frac{dW}{dt}=\\tau\\frac{d\\theta}{dt}=\\tau\\omega",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Rotational work" tex="W=\int_{\theta_i}^{\theta_f}\tau\,d\theta" />

<Equation label="Constant torque" tex="W=\tau\Delta\theta" />

<Equation label="Rotational energy" tex="K_{\mathrm{rot}}=\frac12I\omega^2" />

<Equation label="Rotational power" tex="P=\tau\omega" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A constant \\(6.0\\,\\mathrm{N\\,m}\\) torque turns a wheel through \\(5.0\\,\\mathrm{rad}\\). Find the work.",
      answer: "Use \\[W=\\tau\\Delta\\theta=6.0(5.0)=30\\,\\mathrm{J}\\]",
    },
    {
      title: "Example 2",
      question: "A motor supplies \\(12\\,\\mathrm{N\\,m}\\) at \\(20\\,\\mathrm{rad\\,s^{-1}}\\). Find its power.",
      answer: "Use \\[P=\\tau\\omega=12(20)=240\\,\\mathrm{W}\\]",
    },
  ]}
/>

## Checks

- Use radians in \\(W=\\tau\\theta\\).
- Positive torque over positive angular displacement does positive work.
- Power depends on instantaneous \\(\omega\\), not total angular displacement.
- A resisting torque has negative work for forward rotation.`;
