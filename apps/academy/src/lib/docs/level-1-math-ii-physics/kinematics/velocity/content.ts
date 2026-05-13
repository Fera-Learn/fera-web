export const content = String.raw`## Principle

Velocity measures how fast position changes and in which direction that change occurs. Average velocity compares two positions over a finite time interval. Instantaneous velocity is the derivative of position with respect to time.

Speed is the magnitude of velocity. Speed is a scalar, while velocity is a vector.

## Notation

<Notation
  items={[
    { symbol: "\\mathbf r(t)", meaning: "position vector", unit: "m" },
    { symbol: "\\Delta t", meaning: "elapsed time", unit: "s" },
    { symbol: "\\mathbf v_{\\text{avg}}", meaning: "average velocity over a time interval", unit: "m s^{-1}" },
    { symbol: "\\mathbf v(t)", meaning: "instantaneous velocity", unit: "m s^{-1}" },
    { symbol: "|\\mathbf v|", meaning: "speed, the magnitude of velocity", unit: "m s^{-1}" },
    { symbol: "\\dot x, \\dot y, \\dot z", meaning: "time derivatives of the Cartesian position components", unit: "m s^{-1}" },
  ]}
/>

## Method

### Step 1: Compute average velocity over an interval

Subtract positions and divide by elapsed time:

<Equation label="Average velocity" tex="\mathbf v_{\text{avg}}=\frac{\Delta\mathbf r}{\Delta t}" />

### Step 2: Take the instantaneous limit

When the time interval shrinks to zero, the average velocity becomes the derivative:

<Equation label="Instantaneous velocity" tex="\mathbf v=\frac{d\mathbf r}{dt}" />

### Step 3: Differentiate components

If \(\mathbf r(t)=x(t)\mathbf i+y(t)\mathbf j+z(t)\mathbf k\), differentiate each component with respect to time.

<PhysicsDerivation
  items={[
    { label: "Start with position", tex: "\\mathbf r(t)=x(t)\\mathbf i+y(t)\\mathbf j+z(t)\\mathbf k" },
    { label: "Differentiate with fixed Cartesian basis", tex: "\\frac{d\\mathbf r}{dt}=\\frac{dx}{dt}\\mathbf i+\\frac{dy}{dt}\\mathbf j+\\frac{dz}{dt}\\mathbf k" },
    { label: "Use dot notation", tex: "\\mathbf v=\\dot x\\mathbf i+\\dot y\\mathbf j+\\dot z\\mathbf k" },
  ]}
/>

## Rules

<Equation label="Component velocity" tex="\mathbf v=\dot x\mathbf i+\dot y\mathbf j+\dot z\mathbf k" />

<Equation label="Speed" tex="\text{speed}=|\mathbf v|" />

<Equation label="Cartesian speed" tex="|\mathbf v|=\sqrt{\dot x^2+\dot y^2+\dot z^2}" />

- Velocity has direction; speed does not.
- Average velocity depends only on net displacement and elapsed time.
- Instantaneous velocity is tangent to a smooth trajectory.
- The sign of a one-dimensional velocity records direction along the chosen axis.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A particle moves from \\(\\mathbf r_1=2\\mathbf i\\) m to \\(\\mathbf r_2=8\\mathbf i\\) m in \\(3\\) s. Find the average velocity.",
      answer: "The displacement is \\(\\Delta\\mathbf r=6\\mathbf i\\) m. Divide by \\(\\Delta t=3\\) s to get \\(\\mathbf v_{\\text{avg}}=2\\mathbf i\\,m s^{-1}\\).",
    },
    {
      title: "Example 2",
      question: "For \\(\\mathbf r(t)=t^2\\mathbf i+3t\\mathbf j\\) m, find \\(\\mathbf v(t)\\).",
      answer: "Differentiate each component: \\(d(t^2)/dt=2t\\) and \\(d(3t)/dt=3\\). Therefore \\(\\mathbf v(t)=2t\\mathbf i+3\\mathbf j\\) \\(m s^{-1}\\).",
    },
    {
      title: "Example 3",
      question: "If \\(\\mathbf v=3\\mathbf i+4\\mathbf j\\) \\(m s^{-1}\\), what is the speed?",
      answer: "Speed is magnitude: \\(|\\mathbf v|=\\sqrt{3^2+4^2}=5\\) \\(m s^{-1}\\). The velocity still has direction, but the speed is just \\(5\\) \\(m s^{-1}\\).",
    },
  ]}
/>

## Checks

- Do not use distance travelled when calculating average velocity; use displacement.
- Do not call a negative one-dimensional velocity a negative speed. Speed is non-negative.
- Include direction or components when reporting velocity.
- Check units after differentiating: metres divided by seconds gives \(m s^{-1}\).`;
