export const content = String.raw`## Principle

A physical pendulum oscillates by gravitational torque about a pivot.

This extends the simple pendulum from a point mass on a light string to an extended rigid body.

## Notation

<Notation
  items={[
    { symbol: "\\theta", meaning: "angular displacement from equilibrium", unit: "rad" },
    { symbol: "I", meaning: "moment of inertia about pivot", unit: "kg m^{2}" },
    { symbol: "m", meaning: "body mass", unit: "kg" },
    { symbol: "d", meaning: "pivot-to-center-of-gravity distance", unit: "m" },
    { symbol: "g", meaning: "gravitational field strength", unit: "m s^{-2}" },
    { symbol: "T", meaning: "small-angle period", unit: "s" },
  ]}
/>

## Method

### Derivation 1: Build the torque model

The center of gravity is where the weight acts. Its lever arm about the pivot gives the restoring torque.

<PhysicsDerivation
  items={[
    {
      label: "Weight torque",
      tex: "\\tau=-mgd\\sin\\theta",
    },
    {
      label: "Rotational dynamics",
      tex: "I\\frac{d^2\\theta}{dt^2}=\\tau",
    },
    {
      label: "Angular equation",
      tex: "I\\frac{d^2\\theta}{dt^2}=-mgd\\sin\\theta",
    },
  ]}
/>

### Derivation 2: Take the small-angle limit

The physical pendulum becomes harmonic when the angular displacement is small enough for the sine approximation.

<PhysicsDerivation
  items={[
    {
      label: "Approximate sine",
      tex: "\\sin\\theta\\approx\\theta",
    },
    {
      label: "SHM equation",
      tex: "\\frac{d^2\\theta}{dt^2}=-\\frac{mgd}{I}\\theta",
    },
    {
      label: "Angular frequency",
      tex: "\\omega=\\sqrt{\\frac{mgd}{I}}",
    },
    {
      label: "Period",
      tex: "T=2\\pi\\sqrt{\\frac{I}{mgd}}",
    },
  ]}
/>

### Derivation 3: Check the point-mass limit

A point mass at distance \\(L\\) from the pivot must reduce to the simple-pendulum result.

<PhysicsDerivation
  items={[
    {
      label: "Point-mass inertia",
      tex: "I=mL^2",
    },
    {
      label: "Center distance",
      tex: "d=L",
    },
    {
      label: "Limit period",
      tex: "T=2\\pi\\sqrt{\\frac{mL^2}{mgL}}=2\\pi\\sqrt{\\frac{L}{g}}",
    },
  ]}
/>

## Rules

These are the compact results from the derivations above.

<Equation label="Gravity torque" tex="\tau=-mgd\sin\theta" />

<Equation label="Small-angle equation" tex="\frac{d^2\theta}{dt^2}=-\frac{mgd}{I}\theta" />

<Equation label="Physical-pendulum period" tex="T=2\pi\sqrt{\frac{I}{mgd}}" />

<Equation label="Point-mass limit" tex="T=2\pi\sqrt{\frac{L}{g}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A uniform rod of length \\(L\\) pivots about one end. Use \\(I=\\frac{1}{3}mL^2\\) and \\(d=L/2\\) to find \\(T\\).",
      answer: "\\[T=2\\pi\\sqrt{\\frac{I}{mgd}}=2\\pi\\sqrt{\\frac{(1/3)mL^2}{mg(L/2)}}=2\\pi\\sqrt{\\frac{2L}{3g}}\\]",
    },
  ]}
/>

## Checks

- Use moment of inertia about the pivot.
- Use center-of-gravity distance for torque.
- Small-angle approximation is still required.
- The pivot force has zero torque about the pivot.`;
