export const content = String.raw`## Principle

Stable systems become harmonic when displaced only slightly.

This page turns SHM from a spring-only model into a local model for many stable systems.

## Notation

<Notation
  items={[
    { symbol: "x_0", meaning: "equilibrium position", unit: "m" },
    { symbol: "\\eta", meaning: "small displacement from equilibrium", unit: "m" },
    { symbol: "F(x)", meaning: "force as a function of position", unit: "N" },
    { symbol: "k_{\\mathrm{eff}}", meaning: "effective spring constant", unit: "N m^{-1}" },
    { symbol: "\\omega", meaning: "small-oscillation angular frequency", unit: "rad s^{-1}" },
    { symbol: "m", meaning: "oscillating mass", unit: "kg" },
  ]}
/>

## Method

### Derivation 1: Expand the force near equilibrium

At equilibrium the net force is zero. For small displacement, the leading nonzero force term is the local slope times the displacement.

<PhysicsDerivation
  items={[
    {
      label: "Equilibrium point",
      tex: "F(x_0)=0",
    },
    {
      label: "Small displacement",
      tex: "\\eta=x-x_0",
    },
    {
      label: "Linear approximation",
      tex: "F(x_0+\\eta)\\approx F(x_0)+F'(x_0)\\eta",
    },
    {
      label: "Use equilibrium",
      tex: "F(x_0+\\eta)\\approx F'(x_0)\\eta",
    },
  ]}
/>

### Derivation 2: Identify the effective stiffness

A stable equilibrium pushes back toward the equilibrium point, so the force slope must have the restoring sign.

<PhysicsDerivation
  items={[
    {
      label: "Restoring form",
      tex: "F\\approx-k_{\\mathrm{eff}}\\eta",
    },
    {
      label: "Compare slopes",
      tex: "k_{\\mathrm{eff}}=-F'(x_0)",
    },
    {
      label: "Stable condition",
      tex: "k_{\\mathrm{eff}}>0",
    },
  ]}
/>

### Derivation 3: Convert the local model to SHM

Once the force is linear and restoring, the simple harmonic motion result applies to the displacement from equilibrium.

<PhysicsDerivation
  items={[
    {
      label: "Newton model",
      tex: "m\\frac{d^2\\eta}{dt^2}=-k_{\\mathrm{eff}}\\eta",
    },
    {
      label: "SHM frequency",
      tex: "\\omega=\\sqrt{\\frac{k_{\\mathrm{eff}}}{m}}",
    },
    {
      label: "Vertical spring shift",
      tex: "ky_0=mg",
      note: "A constant force shifts equilibrium but does not change the local stiffness.",
    },
  ]}
/>

## Rules

These are the compact results from the derivations above.

<Equation label="Equilibrium condition" tex="F(x_0)=0" />

<Equation label="Effective stiffness" tex="k_{\mathrm{eff}}=-F'(x_0)" />

<Equation label="Small-oscillation frequency" tex="\omega=\sqrt{\frac{k_{\mathrm{eff}}}{m}}" />

<Equation label="Vertical spring shift" tex="ky_0=mg" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A vertical spring stretches by \\(y_0\\) under mass \\(m\\). Find its oscillation frequency about equilibrium.",
      answer: "The static shift obeys \\(ky_0=mg\\), but oscillations about that shifted point still use the spring stiffness: \\[\\omega=\\sqrt{\\frac{k}{m}}\\]",
    },
  ]}
/>

## Checks

- Oscillation is about the shifted equilibrium.
- Stable equilibrium needs positive effective stiffness.
- The linear model fails for large displacement.
- Constant forces shift equilibrium but not stiffness.`;
