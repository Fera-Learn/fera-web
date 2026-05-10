export const content = String.raw`## Principle

Angular momentum is conserved when net external torque about the chosen axis is zero.

## Notation

<Notation
  items={[
    { symbol: "L_i,L_f", meaning: "initial and final angular momentum", unit: "kg m^{2} s^{-1}" },
    { symbol: "I_i,I_f", meaning: "initial and final moment of inertia", unit: "kg m^{2}" },
    { symbol: "\\omega_i,\\omega_f", meaning: "initial and final angular velocity", unit: "rad s^{-1}" },
    { symbol: "\\tau_{\\mathrm{ext}}", meaning: "net external torque", unit: "N m" },
    { symbol: "K", meaning: "kinetic energy", unit: "J" },
  ]}
/>

## Method

### Derivation 1: Start from the torque law

Conservation is not a separate rule; it is the zero-external-torque case of the angular momentum law.

<PhysicsDerivation
  items={[
    {
      label: "Torque law",
      tex: "\\sum\\tau_{\\mathrm{ext}}=\\frac{dL}{dt}",
    },
    {
      label: "Zero external torque",
      tex: "\\sum\\tau_{\\mathrm{ext}}=0\\Rightarrow\\frac{dL}{dt}=0",
    },
    {
      label: "Conservation statement",
      tex: "L_i=L_f",
    },
  ]}
/>

### Derivation 2: Use the fixed-axis form when valid

For a rigid body about one fixed axis, angular momentum is \\(I\omega\\), so changing mass distribution changes angular speed.

<PhysicsDerivation
  items={[
    {
      label: "Initial angular momentum",
      tex: "L_i=I_i\\omega_i",
    },
    {
      label: "Final angular momentum",
      tex: "L_f=I_f\\omega_f",
    },
    {
      label: "Fixed-axis conservation",
      tex: "I_i\\omega_i=I_f\\omega_f",
    },
  ]}
/>

The graph shows the trade-off: if \\(L=I\omega\\) is fixed, reducing \\(I\\) increases \\(\omega\\).

<CartesianPhysicsGraph
  title="I and omega trade off"
  caption="With L fixed, angular speed is inversely proportional to moment of inertia."
  width={460}
  height={260}
  xRange={{ min: 0, max: 5, step: 1, label: "I / kg m^2" }}
  yRange={{ min: 0, max: 10, step: 2, label: "omega / rad s^-1" }}
  curves={[
    {
      label: "I\\omega=constant",
      smooth: true,
      points: [
        { x: 1, y: 8 },
        { x: 1.5, y: 5.3 },
        { x: 2, y: 4 },
        { x: 3, y: 2.7 },
        { x: 4, y: 2 },
      ],
    },
  ]}
  points={[
    { x: 4, y: 2, label: "arms out" },
    { x: 2, y: 4, label: "arms in" },
  ]}
/>

### Derivation 3: Do not assume energy conservation

Internal work can change kinetic energy even while angular momentum is conserved.

<PhysicsDerivation
  items={[
    {
      label: "Rotational kinetic energy",
      tex: "K=\\frac12I\\omega^2",
    },
    {
      label: "Energy warning",
      tex: "K_f-K_i\\ne0\\ \\text{in general}",
    },
  ]}
/>

## Rules

These are the compact results from the method above.

<Equation label="Conservation condition" tex="\tau_{\mathrm{ext}}=0\Rightarrow L_i=L_f" />

<Equation label="Fixed axis form" tex="I_i\omega_i=I_f\omega_f" />

<Equation label="Particle capture" tex="mvr+I_i\omega_i=I_f\omega_f" />

<Equation label="Energy warning" tex="K_f-K_i\ne0\ \text{in general}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A skater changes from \\(I_i=4.0\\,\\mathrm{kg\\,m^2}\\) to \\(I_f=2.0\\,\\mathrm{kg\\,m^2}\\) while spinning at \\(3.0\\,\\mathrm{rad\\,s^{-1}}\\). Find \\(\\omega_f\\).",
      answer: "Use \\[I_i\\omega_i=I_f\\omega_f\\] so \\[\\omega_f=\\frac{4.0}{2.0}(3.0)=6.0\\,\\mathrm{rad\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "A disk with \\(I=0.50\\,\\mathrm{kg\\,m^2}\\) spins at \\(8.0\\,\\mathrm{rad\\,s^{-1}}\\). A ring sticks and the final inertia is \\(0.80\\,\\mathrm{kg\\,m^2}\\). Find \\(\\omega_f\\).",
      answer: "No external torque about the axle: \\[0.50(8.0)=0.80\\omega_f\\] so \\[\\omega_f=5.0\\,\\mathrm{rad\\,s^{-1}}\\]",
    },
  ]}
/>

## Checks

- Conservation needs zero external torque about the chosen axis.
- Angular momentum may be conserved while kinetic energy changes.
- Internal forces can redistribute \\(I\\).
- Use the same axis before and after.`;
