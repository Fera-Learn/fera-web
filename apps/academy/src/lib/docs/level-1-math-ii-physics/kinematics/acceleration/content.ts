export const content = String.raw`## Principle

Acceleration measures how velocity changes with time. It can change the speed of a particle, the direction of its velocity, or both.

Instantaneous acceleration is the derivative of velocity. Since velocity is the derivative of position, acceleration is also the second derivative of position.

## Notation

<Notation
  items={[
    { symbol: "\\mathbf v(t)", meaning: "instantaneous velocity", unit: "m s^{-1}" },
    { symbol: "\\mathbf a(t)", meaning: "instantaneous acceleration", unit: "m s^{-2}" },
    { symbol: "\\Delta\\mathbf v", meaning: "change in velocity", unit: "m s^{-1}" },
    { symbol: "\\Delta t", meaning: "elapsed time", unit: "s" },
    { symbol: "\\ddot x, \\ddot y, \\ddot z", meaning: "second time derivatives of position components", unit: "m s^{-2}" },
  ]}
/>

## Method

### Step 1: Average over a time interval

Average acceleration is change in velocity divided by elapsed time:

<Equation label="Average acceleration" tex="\mathbf a_{\text{avg}}=\frac{\Delta\mathbf v}{\Delta t}" />

### Step 2: Differentiate for instantaneous acceleration

Take the time derivative of velocity:

<Equation label="Instantaneous acceleration" tex="\mathbf a=\frac{d\mathbf v}{dt}=\frac{d^2\mathbf r}{dt^2}" />

### Step 3: Work component by component

In a fixed Cartesian basis, each acceleration component is the derivative of the corresponding velocity component.

<PhysicsDerivation
  items={[
    { label: "Position components", tex: "\\mathbf r=x\\mathbf i+y\\mathbf j+z\\mathbf k" },
    { label: "Velocity components", tex: "\\mathbf v=\\dot x\\mathbf i+\\dot y\\mathbf j+\\dot z\\mathbf k" },
    { label: "Differentiate velocity", tex: "\\mathbf a=\\ddot x\\mathbf i+\\ddot y\\mathbf j+\\ddot z\\mathbf k" },
  ]}
/>

## Rules

<Equation label="Component acceleration" tex="\mathbf a=\ddot x\mathbf i+\ddot y\mathbf j+\ddot z\mathbf k" />

<Equation label="Constant acceleration velocity" tex="\mathbf v(t)=\mathbf v_0+\mathbf a t" />

<Equation label="Constant acceleration position" tex="\mathbf r(t)=\mathbf r_0+\mathbf v_0t+\frac12\mathbf a t^2" />

The constant-acceleration formulas apply only when \(\mathbf a\) is constant in time.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Velocity changes from \\(2\\mathbf i\\) \\(m s^{-1}\\) to \\(8\\mathbf i\\) \\(m s^{-1}\\) in \\(3\\) s. Find average acceleration.",
      answer: "The velocity change is \\(6\\mathbf i\\) \\(m s^{-1}\\). Divide by \\(3\\) s to get \\(\\mathbf a_{\\text{avg}}=2\\mathbf i\\) \\(m s^{-2}\\).",
    },
    {
      title: "Example 2",
      question: "For \\(\\mathbf r(t)=t^3\\mathbf i-2t^2\\mathbf j\\) m, find \\(\\mathbf a(t)\\).",
      answer: "First differentiate to get \\(\\mathbf v=3t^2\\mathbf i-4t\\mathbf j\\). Differentiate again: \\(\\mathbf a=6t\\mathbf i-4\\mathbf j\\) \\(m s^{-2}\\).",
    },
    {
      title: "Example 3",
      question: "If \\(\\mathbf a=-9.8\\mathbf j\\) \\(m s^{-2}\\), what does the sign show?",
      answer: "The negative sign means acceleration points in the \\(-\\mathbf j\\) direction. It does not mean the acceleration has negative magnitude; the magnitude is \\(9.8\\) \\(m s^{-2}\\).",
    },
  ]}
/>

## Checks

- Acceleration can be non-zero even when speed is constant, because direction may be changing.
- Use vector notation when acceleration has more than one component.
- Constant-acceleration equations are not valid for arbitrary acceleration functions.
- Check units after differentiating velocity: \(m s^{-1}\) divided by \(s\) gives \(m s^{-2}\).`;
