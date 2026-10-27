export const content = String.raw`## Principle

A quarter-wave plate produces a slow-minus-fast retardance of \\(\pi/2\\) modulo \\(2\pi\\). Equal fast- and slow-axis input magnitudes then convert linear polarisation to circular, while circular input converts to linear.

## Notation

<Notation
  items={[
    { symbol: "\\hat e_f,\\hat e_s", meaning: "fast- and slow-axis unit vectors" },
    { symbol: "n_f,n_s", meaning: "fast- and slow-axis phase indices" },
    { symbol: "l,\\lambda_0", meaning: "plate thickness and vacuum wavelength", unit: "m, m" },
    { symbol: "\\delta", meaning: "slow-minus-fast retardance", unit: "rad" },
    { symbol: "\\alpha", meaning: "input linear angle from the fast axis", unit: "rad" },
    { symbol: "E_f,E_s,E_f',E_s'", meaning: "input and output fast- and slow-axis coefficients" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

The first-order quarter-wave condition is

\\[
\delta=\frac{2\pi(n_s-n_f)l}{\lambda_0}=\frac{\pi}{2}
\pmod{2\pi}.
\tag*{[1]}
\\]

After removal of common phase, the Jones action is

\\[
\begin{pmatrix}E_f'\\E_s'\end{pmatrix}
=\begin{pmatrix}1&0\\0&i\end{pmatrix}
\begin{pmatrix}E_f\\E_s\end{pmatrix}.
\tag*{[2]}
\\]

For linear input,

\\[
\cos\alpha\,\hat e_f+\sin\alpha\,\hat e_s
\longmapsto
\cos\alpha\,\hat e_f+i\sin\alpha\,\hat e_s.
\tag*{[3]}
\\]

At \\(\alpha=+\pi/4\\), [3] is left-circular; at \\(\alpha=-\pi/4\\), it is right-circular. Conversely,

\\[
\frac{\hat e_f+i\hat e_s}{\sqrt2}
\longmapsto
\frac{\hat e_f-\hat e_s}{\sqrt2},
\qquad
\frac{\hat e_f-i\hat e_s}{\sqrt2}
\longmapsto
\frac{\hat e_f+\hat e_s}{\sqrt2}.
\tag*{[4]}
\\]

Input at any other non-axis angle is generally elliptical, not circular.

<PhysicsExamples collapsible
  items={[
    {
      title: "Choosing quarter-wave thickness",
      question: "Find the minimum positive thickness for \\(n_s-n_f=0.0090\\) at \\(\\lambda_0=540\\,\\mathrm{nm}\\).",
      answer: "Set \\([1]\\) equal to \\(\\pi/2\\): \\[\\frac{2\\pi(n_s-n_f)l}{\\lambda_0}=\\frac{\\pi}{2}.\\] Cancel \\(\\pi\\), then solve: \\[l=\\frac{\\lambda_0}{4(n_s-n_f)}=\\frac{540\\times10^{-9}}{4(0.0090)}=1.50\\times10^{-5}\\,\\mathrm m.\\] **Final result:** \\(l=15.0\\,\\mathrm{\\mu m}\\).",
    },
    {
      title: "Linear-to-circular conversion",
      question: "A linear field enters at \\(+45^\\circ\\) to the fast axis. What exits an ideal positive quarter-wave plate?",
      answer: "The input coefficients are \\((1,1)/\\sqrt2\\). Equation \\([2]\\) changes them to \\((1,i)/\\sqrt2\\), equal magnitudes with slow-axis phase \\(+\\pi/2\\). **Final result:** the output is left-circular in the declared convention.",
    },
  ]}
/>
`;
