export const content = String.raw`## Principle

A half-wave plate is a linear retarder whose slow-axis component gains a relative phase of \\(\pi\\) modulo \\(2\pi\\). It reflects a linear polarisation direction across the fast axis and reverses circular handedness, apart from an irrelevant common phase.

## Notation

<Notation
  items={[
    { symbol: "\\hat e_f,\\hat e_s", meaning: "fast- and slow-axis unit vectors" },
    { symbol: "n_f,n_s", meaning: "fast- and slow-axis phase indices" },
    { symbol: "l,\\lambda_0", meaning: "plate thickness and vacuum wavelength", unit: "m, m" },
    { symbol: "\\delta", meaning: "slow-minus-fast retardance", unit: "rad" },
    { symbol: "\\alpha", meaning: "input linear angle measured from the fast axis", unit: "rad" },
    { symbol: "E_f,E_s,E_f',E_s'", meaning: "input and output fast- and slow-axis coefficients" },
    { symbol: "m", meaning: "integer retardance order" },
    { symbol: "\\Delta\\alpha", meaning: "change in linear-polarisation angle", unit: "rad" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

The half-wave condition is

\\[
\delta=\frac{2\pi(n_s-n_f)l}{\lambda_0}=(2m+1)\pi,
\qquad m\in\mathbb Z.
\tag*{[1]}
\\]

After removing common phase, its Jones action in the fast-slow basis is

\\[
\begin{pmatrix}E_f'\\E_s'\end{pmatrix}
=\begin{pmatrix}1&0\\0&-1\end{pmatrix}
\begin{pmatrix}E_f\\E_s\end{pmatrix}.
\tag*{[2]}
\\]

For linear input at angle \\(\alpha\\),

\\[
\cos\alpha\,\hat e_f+\sin\alpha\,\hat e_s
\longmapsto
\cos\alpha\,\hat e_f-\sin\alpha\,\hat e_s
=\cos(-\alpha)\hat e_f+\sin(-\alpha)\hat e_s.
\tag*{[3]}
\\]

Thus the output angle is \\(-\alpha\\) relative to the fast axis, a rotation of \\(-2\alpha\\). Also \\((\hat e_f+i\hat e_s)/\sqrt2\mapsto(\hat e_f-i\hat e_s)/\sqrt2\\), so left- and right-circular states interchange.

<PhysicsExamples collapsible
  items={[
    {
      title: "Rotating linear polarisation",
      question: "A linear input is at \\(+25.0^\\circ\\) to the fast axis of an ideal half-wave plate. Find the output direction and net rotation.",
      answer: "Equation \\([3]\\) changes the angle from \\(\\alpha\\) to \\(-\\alpha\\). Therefore \\[\\alpha_{\\mathrm{out}}=-25.0^\\circ,\\qquad \\Delta\\alpha=-25.0^\\circ-25.0^\\circ=-50.0^\\circ.\\] **Final result:** the output lies at \\(-25.0^\\circ\\) to the fast axis, a \\(-50.0^\\circ\\) rotation of the input line.",
    },
    {
      title: "Changing circular handedness",
      question: "What does an ideal half-wave plate do to left-circular input \\((1,i)/\\sqrt2\\) in its fast-slow basis?",
      answer: "Apply \\([2]\\): \\[(1,i)/\\sqrt2\\longmapsto(1,-i)/\\sqrt2.\\] The latter is the right-circular coefficient pair in the fixed harmonic and observer convention. **Final result:** the half-wave plate converts left-circular to right-circular polarisation.",
    },
  ]}
/>
`;
