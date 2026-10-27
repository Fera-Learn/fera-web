export const content = String.raw`## Principle

Elliptical polarisation is the general fully polarised state: two orthogonal linear components have a fixed relative phase but need not rise and fall together. Use \\(+z\\) propagation, \\(e^{i(kz-\omega t)}\\), and the fixed transverse basis \\((\hat e_1,\hat e_2)\\).

## Notation

<Notation
  items={[
    { symbol: "a_1,a_2", meaning: "normalised complex linear-basis coefficients" },
    { symbol: "\\hat e_1,\\hat e_2", meaning: "fixed orthonormal transverse basis vectors" },
    { symbol: "\\gamma", meaning: "component-mixing angle with range zero to pi over two", unit: "rad" },
    { symbol: "\\delta", meaning: "phase of component 2 relative to component 1", unit: "rad" },
    { symbol: "X,Y", meaning: "physical field components divided by the amplitude scale" },
    { symbol: "\\theta", meaning: "local harmonic phase kz minus omega t", unit: "rad" },
    { symbol: "k,\\omega,z,t", meaning: "wavenumber, angular frequency, position, and time", unit: "m^{-1}, rad s^{-1}, m, s" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

Watch the electric-field tip at one fixed point in space. A zero or half-cycle component phase difference confines it to a line, equal quadrature components trace a circle, and unequal quadrature components trace an ellipse.

<PhysicsDiagram slug="polarisation-state-evolution" />

Remove a common phase and parameterise every normalized state as

\\[
(a_1,a_2)=(\cos\gamma,e^{i\delta}\sin\gamma),
\qquad |a_1|^2+|a_2|^2=1.
\tag*{[1]}
\\]

Taking real parts with \\(\theta=kz-\omega t\\) gives

\\[
X=\cos\gamma\cos\theta,
\qquad
Y=\sin\gamma\cos(\theta+\delta)
=\sin\gamma(\cos\theta\cos\delta-\sin\theta\sin\delta).
\tag*{[2]}
\\]

Eliminate \\(\theta\\). From [2], \\(\cos\theta=X/\cos\gamma\\) and

\\[
\sin\theta=\frac{X\cos\delta/\cos\gamma-Y/\sin\gamma}{\sin\delta}.
\tag*{[3]}
\\]

Substitution into \\(\cos^2\theta+\sin^2\theta=1\\) gives the polarisation ellipse

\\[
\frac{X^2}{\cos^2\gamma}+\frac{Y^2}{\sin^2\gamma}
-\frac{2XY\cos\delta}{\sin\gamma\cos\gamma}=\sin^2\delta.
\tag*{[4]}
\\]

The degenerate cases \\(\delta=0,\pi\\) are linear. Equal magnitudes, \\(\gamma=\pi/4\\), with \\(\delta=\pm\pi/2\\) are circular. All other nonzero two-component cases are elliptical.

<PhysicsExamples collapsible
  items={[
    {
      title: "Finding a polarisation ellipse",
      question: "For \\((a_1,a_2)=(\\sqrt3/2,i/2)\\), find the component equation and classify the state.",
      answer: "Comparison with \\([1]\\) gives \\(\\gamma=\\pi/6\\) and \\(\\delta=\\pi/2\\). Then \\(\\cos\\delta=0\\) and \\(\\sin^2\\delta=1\\), so \\([4]\\) becomes \\[\\frac{X^2}{3/4}+\\frac{Y^2}{1/4}=1,\\] or \\[(2X/\\sqrt3)^2+(2Y)^2=1.\\] **Final result:** the state is an axis-aligned ellipse with semiaxes \\(\\sqrt3/2\\) and \\(1/2\\); it is not circular because the component magnitudes differ.",
    },
    {
      title: "Using relative phase correctly",
      question: "Classify the normalized coefficients \\((a_1,a_2)=(1/\\sqrt2,e^{i\\pi/3}/\\sqrt2)\\).",
      answer: "The magnitudes are equal, but the relative phase is \\(\\pi/3\\), not \\(0\\), \\(\\pi\\), or \\(\\pm\\pi/2\\). Equation \\([4]\\) therefore describes a nondegenerate tilted ellipse rather than a line or circle. **Final result:** the state is left-handed elliptical under the declared time and viewing convention.",
    },
  ]}
/>
`;
