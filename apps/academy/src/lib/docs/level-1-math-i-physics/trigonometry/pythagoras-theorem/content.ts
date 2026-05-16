export const content = String.raw`## Principle

Pythagoras' theorem connects the side lengths of a right triangle. In trigonometry it becomes the reason that sine and cosine are linked: a point on the unit circle always has distance 1 from the origin.

The same idea appears in physics whenever perpendicular components combine, such as horizontal and vertical displacement, rectangular vector components, or orthogonal oscillations.

## Notation

<Notation
  items={[
    { symbol: "a,b", meaning: "the two perpendicular side lengths of a right triangle" },
    { symbol: "c", meaning: "the hypotenuse, opposite the right angle" },
    { symbol: "\\theta", meaning: "an angle measured in radians unless stated otherwise" },
    { symbol: "\\sin\\theta", meaning: "opposite side divided by hypotenuse, or y-coordinate on the unit circle" },
    { symbol: "\\cos\\theta", meaning: "adjacent side divided by hypotenuse, or x-coordinate on the unit circle" },
    { symbol: "\\tan\\theta", meaning: "\\sin\\theta/\\cos\\theta where \\cos\\theta\\ne0" },
    { symbol: "\\sec\\theta", meaning: "1/\\cos\\theta where \\cos\\theta\\ne0" },
    { symbol: "\\csc\\theta", meaning: "1/\\sin\\theta where \\sin\\theta\\ne0" },
    { symbol: "\\cot\\theta", meaning: "\\cos\\theta/\\sin\\theta where \\sin\\theta\\ne0" },
  ]}
/>

## The Core Method

Start with a right triangle:

<Equation label="Pythagoras theorem" tex="a^2+b^2=c^2" />

On the unit circle, the point at angle \(\theta\) has coordinates \((\cos\theta,\sin\theta)\) and radius 1. Substituting the horizontal leg \(\cos\theta\), the vertical leg \(\sin\theta\), and hypotenuse \(1\) into Pythagoras gives the fundamental identity:

<Equation label="Unit-circle identity" tex="\sin^2\theta+\cos^2\theta=1" />

Divide this identity by \(\cos^2\theta\) when \(\cos\theta\ne0\):

<Equation label="Tangent identity" tex="1+\tan^2\theta=\sec^2\theta" />

Divide it by \(\sin^2\theta\) when \(\sin\theta\ne0\):

<Equation label="Cotangent identity" tex="1+\cot^2\theta=\csc^2\theta" />

## Worked Cases

<PhysicsExamples
  items={[
    {
      title: "Find a missing side",
      question: "A right triangle has perpendicular sides \\(5\\) and \\(12\\). Find the hypotenuse.",
      answer: "Use Pythagoras: \\(a^2+b^2=c^2\\). Substitute \\(a=5\\) and \\(b=12\\): \\(5^2+12^2=c^2\\). This gives \\(25+144=169=c^2\\), so \\(c=13\\). The hypotenuse is \\(13\\).",
    },
    {
      title: "Derive the trig identity",
      question: "Explain why \\(\\sin^2\\theta+\\cos^2\\theta=1\\) on the unit circle.",
      answer: "The point at angle \\(\\theta\\) on the unit circle is \\((\\cos\\theta,\\sin\\theta)\\). Its distance from the origin is \\(1\\), so Pythagoras gives \\(\\cos^2\\theta+\\sin^2\\theta=1^2\\). Therefore \\(\\sin^2\\theta+\\cos^2\\theta=1\\).",
    },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Simplify an expression",
      question: "Simplify \\(\\sin^2\\theta+\\cos^2\\theta+\\tan^2\\theta\\).",
      answer: "Use \\(\\sin^2\\theta+\\cos^2\\theta=1\\). The expression becomes \\(1+\\tan^2\\theta\\). Then use \\(1+\\tan^2\\theta=\\sec^2\\theta\\). So the simplified expression is \\(\\sec^2\\theta\\).",
    },
    {
      title: "Choose the possible cosine values",
      question: "If \\(\\sin^2\\theta=3/4\\), what are the possible values of \\(\\cos\\theta\\)?",
      answer: "Start with \\(\\sin^2\\theta+\\cos^2\\theta=1\\). Substitute \\(\\sin^2\\theta=3/4\\): \\(3/4+\\cos^2\\theta=1\\). Hence \\(\\cos^2\\theta=1/4\\), so \\(\\cos\\theta=\\pm1/2\\). The sign depends on the quadrant of \\(\\theta\\).",
    },
  ]}
/>

## Mistake Filter

- Mistake: Treating \(a^2+b^2=c^2\) as valid for every triangle. Correction: it only applies to right triangles, where \(c\) is the hypotenuse.
- Mistake: Dropping the square on \(\sin^2\theta+\cos^2\theta=1\). Correction: the identity is about squared values, not \(\sin\theta+\cos\theta\).
- Mistake: Using \(1+\tan^2\theta=\sec^2\theta\) when \(\cos\theta=0\). Correction: tangent and secant are undefined there.
- Mistake: Forgetting the \(\pm\) sign after solving \(\cos^2\theta=k\). Correction: use quadrant information to decide the sign.

## Fast Summary

Pythagoras gives \(a^2+b^2=c^2\) for right triangles. On the unit circle this becomes \(\sin^2\theta+\cos^2\theta=1\), and dividing by \(\cos^2\theta\) or \(\sin^2\theta\) gives the tangent/secant and cotangent/cosecant identities.`;
