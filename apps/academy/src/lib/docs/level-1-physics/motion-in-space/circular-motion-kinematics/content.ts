export const content = String.raw`## Principle

Circular motion is constrained two-dimensional motion: the radius is fixed, but the useful direction axes move with the particle.

Earlier pages already introduced position, velocity, acceleration, and Cartesian components. This page adds the radial-tangential basis used for motion on a circle.

## Notation

<Notation
  items={[
    { symbol: "R", meaning: "fixed circle radius", unit: "m" },
    { symbol: "\\theta", meaning: "angle measured from the positive x-axis", unit: "rad" },
    { symbol: "\\omega=d\\theta/dt", meaning: "angular velocity", unit: "rad s^{-1}" },
    { symbol: "\\alpha=d\\omega/dt", meaning: "angular acceleration", unit: "rad s^{-2}" },
    { symbol: "\\hat e_r", meaning: "unit vector from the center to the particle", unit: "1" },
    { symbol: "\\hat e_\\theta", meaning: "unit vector tangent to increasing \\(\\theta\\)", unit: "1" },
  ]}
/>

## Method

### Derivation 1: Build the radial direction

Place the circle's center at the origin. A point on the circle is reached by moving a distance \\(R\\) at angle \\(\\theta\\). The x- and y-components are the two projections of that radius.

<PhysicsDerivation
  items={[
    {
      label: "Project the radius",
      tex: "x=R\\cos\\theta,\\qquad y=R\\sin\\theta",
    },
    {
      label: "Write position",
      tex: "\\vec r=x\\hat{\\imath}+y\\hat{\\jmath}=R\\cos\\theta\\,\\hat{\\imath}+R\\sin\\theta\\,\\hat{\\jmath}",
    },
    {
      label: "Divide by the radius",
      tex: "\\hat e_r=\\frac{\\vec r}{R}=\\cos\\theta\\,\\hat{\\imath}+\\sin\\theta\\,\\hat{\\jmath}",
      note: "This is why \\(\\hat e_r\\) points outward from the center.",
    },
  ]}
/>

### Derivation 2: Build the tangent direction

The tangent direction is what the radial direction becomes when the angle increases a little. Differentiate the radial unit vector with respect to angle.

<PhysicsDerivation
  items={[
    {
      label: "Differentiate with respect to angle",
      tex: "\\frac{d\\hat e_r}{d\\theta}=-\\sin\\theta\\,\\hat{\\imath}+\\cos\\theta\\,\\hat{\\jmath}",
    },
    {
      label: "Check its length",
      tex: "\\left|\\frac{d\\hat e_r}{d\\theta}\\right|=\\sqrt{\\sin^2\\theta+\\cos^2\\theta}=1",
    },
    {
      label: "Name the tangent unit vector",
      tex: "\\hat e_\\theta=\\frac{d\\hat e_r}{d\\theta}=-\\sin\\theta\\,\\hat{\\imath}+\\cos\\theta\\,\\hat{\\jmath}",
      note: "It is perpendicular to \\(\\hat e_r\\) and points in the direction of increasing angle.",
    },
  ]}
/>

### Derivation 3: Differentiate position

Now use the chain rule. The radius \\(R\\) is constant, but the direction \\(\\hat e_r\\) changes because the angle changes.

<PhysicsDerivation
  items={[
    {
      label: "Start with constrained position",
      tex: "\\vec r=R\\hat e_r",
    },
    {
      label: "Apply the chain rule",
      tex: "\\frac{d\\hat e_r}{dt}=\\frac{d\\hat e_r}{d\\theta}\\frac{d\\theta}{dt}=\\omega\\hat e_\\theta",
    },
    {
      label: "Velocity is tangent",
      tex: "\\vec v=\\frac{d\\vec r}{dt}=R\\omega\\hat e_\\theta",
    },
  ]}
/>

### Derivation 4: Differentiate velocity

Acceleration has two pieces because both the angular speed and the tangent direction can change.

<PhysicsDerivation
  items={[
    {
      label: "Use the product rule",
      tex: "\\vec a=R\\frac{d\\omega}{dt}\\hat e_\\theta+R\\omega\\frac{d\\hat e_\\theta}{dt}",
    },
    {
      label: "Differentiate the tangent basis",
      tex: "\\frac{d\\hat e_\\theta}{dt}=-\\omega\\hat e_r",
    },
    {
      label: "Collect radial and tangent parts",
      tex: "\\vec a=-R\\omega^2\\hat e_r+R\\alpha\\hat e_\\theta",
      note: "The radial term is inward. The tangent term changes speed.",
    },
  ]}
/>

The sketch below is only an instantaneous direction map. It is not a graph of position against time.

<PolarPhysicsGraph
  title="Instantaneous circular-motion directions"
  caption="At one point on the circle, the radial and tangent directions are perpendicular."
  maxRadius={4.5}
  rings={[3.2]}
  spokes={[0, 45, 90, 135, 180, 225, 270, 315]}
  curves={[
    {
      points: [
        { radius: 3.2, angle: 0 },
        { radius: 3.2, angle: 90 },
        { radius: 3.2, angle: 180 },
        { radius: 3.2, angle: 270 },
        { radius: 3.2, angle: 360 },
      ],
    },
  ]}
  vectors={[
    { label: "\\vec r", radius: 3.2, angle: 40 },
    {
      label: "\\vec v",
      fromRadius: 3.2,
      fromAngle: 40,
      radius: 3.55,
      angle: 65,
      color: "var(--chart-3)",
    },
    {
      label: "\\vec a_c",
      fromRadius: 3.2,
      fromAngle: 40,
      radius: 0,
      angle: 40,
      color: "var(--chart-5)",
    },
  ]}
/>

<PhysicsAside title="Uniform versus non-uniform">
Uniform circular motion has constant angular speed, so the tangent acceleration term is zero. Non-uniform circular motion keeps the inward term and adds a tangent term.
</PhysicsAside>

## Rules

These are the compact results from the derivations above.

<Equation label="Position" tex="\vec r=R\hat e_r=R\cos\theta\,\hat{\imath}+R\sin\theta\,\hat{\jmath}" />

<Equation label="Radial direction" tex="\hat e_r=\cos\theta\,\hat{\imath}+\sin\theta\,\hat{\jmath}" />

<Equation label="Tangent direction" tex="\hat e_\theta=-\sin\theta\,\hat{\imath}+\cos\theta\,\hat{\jmath}" />

<Equation label="Velocity" tex="\vec v=R\omega\hat e_\theta" />

<Equation label="Acceleration" tex="\vec a=-R\omega^2\hat e_r+R\alpha\hat e_\theta" />

<Equation label="Uniform speed case" tex="v=R|\omega|,\qquad a_c=R\omega^2=\frac{v^2}{R}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A sensor moves on a circular track with \\(R=1.8\\,\\mathrm{m}\\) and constant angular speed \\(\\omega=4.0\\,\\mathrm{rad\\,s^{-1}}\\). Find the speed and acceleration magnitude.",
      answer: "The speed is tangential: \\[v=R\\omega=1.8(4.0)=7.2\\,\\mathrm{m\\,s^{-1}}\\] Since the speed is constant, acceleration is only centripetal: \\[a_c=R\\omega^2=1.8(4.0)^2=28.8\\,\\mathrm{m\\,s^{-2}}\\] directed inward.",
    },
    {
      title: "Example 2",
      question: "At one instant a particle has \\(R=0.50\\,\\mathrm{m}\\), \\(\\omega=6.0\\,\\mathrm{rad\\,s^{-1}}\\), and \\(\\alpha=-2.0\\,\\mathrm{rad\\,s^{-2}}\\). Find the radial and tangential acceleration components.",
      answer: "Use the radial-tangential split: \\[a_r=-R\\omega^2=-0.50(6.0)^2=-18\\,\\mathrm{m\\,s^{-2}}\\] \\[a_\\theta=R\\alpha=0.50(-2.0)=-1.0\\,\\mathrm{m\\,s^{-2}}\\] The radial component is inward. The tangential component is opposite the positive tangent direction, so the angular speed is decreasing when \\(\\omega>0\\).",
    },
  ]}
/>

## Checks

- Radians are required in angular equations.
- Constant speed means zero tangent acceleration, not zero acceleration.
- The inward term appears because the tangent direction itself turns as the particle moves.
- If \\(R\\) is very large over a small arc, the inward acceleration becomes small and the motion locally resembles straight-line motion.`;
