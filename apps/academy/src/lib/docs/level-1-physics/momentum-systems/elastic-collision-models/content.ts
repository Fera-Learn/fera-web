export const content = String.raw`## Principle

An elastic collision conserves both total momentum and total kinetic energy.

## Notation

<Notation
  items={[
    { symbol: "m_1,m_2", meaning: "masses", unit: "kg" },
    { symbol: "u_1,u_2", meaning: "initial velocities", unit: "m s^{-1}" },
    { symbol: "v_1,v_2", meaning: "final velocities", unit: "m s^{-1}" },
    { symbol: "K", meaning: "kinetic energy", unit: "J" },
    { symbol: "e", meaning: "coefficient of restitution", unit: "1" },
  ]}
/>

## Method

The useful one-dimensional elastic shortcut comes from combining momentum conservation with kinetic-energy conservation.

<PhysicsDerivation
  items={[
    {
      label: "Momentum",
      tex: "m_1(u_1-v_1)=m_2(v_2-u_2)",
    },
    {
      label: "Energy",
      tex: "m_1(u_1^2-v_1^2)=m_2(v_2^2-u_2^2)",
    },
    {
      label: "Divide equations",
      tex: "u_1+v_1=v_2+u_2",
      note: "This step assumes the relative velocity changes during the collision.",
    },
    {
      label: "Relative speed",
      tex: "v_2-v_1=u_1-u_2",
    },
  ]}
/>

The graph shows the equal-mass limiting case: one cart gives its velocity to the other.

<CartesianDiagram
  title="Velocity exchange"
  caption="For equal masses in a 1D elastic collision, the moving cart transfers its velocity to the initially stationary cart."
  width={520}
  height={220}
  xRange={{ min: 0, max: 1, step: 1, label: "stage" }}
  yRange={{ min: 0, max: 5, step: 1, label: "v / m s^-1" }}
  curves={[
    {
      label: "v_1",
      points: [
        { x: 0, y: 4 },
        { x: 1, y: 0 },
      ],
    },
    {
      label: "v_2",
      points: [
        { x: 0, y: 0 },
        { x: 1, y: 4 },
      ],
    },
  ]}
/>

For unequal masses, use the same two equations; the velocity-exchange picture is only the symmetric case.

## Rules

These are the compact one-dimensional elastic collision results.

<Equation label="Momentum conserved" tex="m_1u_1+m_2u_2=m_1v_1+m_2v_2" />

<Equation label="Kinetic conserved" tex="\frac12m_1u_1^2+\frac12m_2u_2^2=\frac12m_1v_1^2+\frac12m_2v_2^2" />

<Equation label="Relative speed" tex="v_2-v_1=u_1-u_2" />

<Equation label="Rest target" tex="v_1=\frac{m_1-m_2}{m_1+m_2}u_1,\quad v_2=\frac{2m_1}{m_1+m_2}u_1" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(2.0\\,\\mathrm{kg}\\) cart moving at \\(3.0\\,\\mathrm{m\\,s^{-1}}\\) elastically hits a \\(4.0\\,\\mathrm{kg}\\) cart at rest. Find final velocities.",
      answer: "Use the rest-target formulas. \\[v_1=\\frac{2.0-4.0}{6.0}(3.0)=-1.0\\,\\mathrm{m\\,s^{-1}}\\] \\[v_2=\\frac{2(2.0)}{6.0}(3.0)=2.0\\,\\mathrm{m\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "Two identical carts collide elastically in one dimension. Cart A enters at \\(2.5\\,\\mathrm{m\\,s^{-1}}\\); cart B enters at \\(-0.50\\,\\mathrm{m\\,s^{-1}}\\). Find final velocities.",
      answer: "Identical masses exchange velocities: \\[v_A=-0.50\\,\\mathrm{m\\,s^{-1}}\\] \\[v_B=2.5\\,\\mathrm{m\\,s^{-1}}\\]",
    },
  ]}
/>

## Checks

- Momentum and kinetic energy must both match before and after.
- Identical masses exchange velocities in a 1D elastic collision.
- Relative speed of separation equals relative speed of approach.
- Signs are more reliable than direction words.`;
