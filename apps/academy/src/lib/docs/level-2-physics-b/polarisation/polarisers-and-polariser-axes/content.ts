export const content = String.raw`## Principle

An ideal linear polariser projects the incident electric field onto its transmission axis and removes the orthogonal component. The transmission axis names the passed electric-field direction; it need not coincide with a device's molecular chains, wires, or crystal optic axis.

## Notation

<Notation
  items={[
    { symbol: "\\hat p,\\hat p_\\perp", meaning: "unit transmission axis and orthogonal rejected axis" },
    { symbol: "\\hat e_1,\\hat e_2", meaning: "orthonormal transverse basis vectors" },
    { symbol: "\\alpha", meaning: "axis angle from the transverse basis direction 1", unit: "rad" },
    { symbol: "\\vec E_{0i},\\vec E_{0t}", meaning: "incident and transmitted complex field amplitudes", unit: "V m^{-1}" },
    { symbol: "P(\\alpha)", meaning: "ideal linear-polariser projection matrix" },
    { symbol: "a_1,a_2,a_{1t},a_{2t}", meaning: "incident and transmitted linear-basis coefficients" },
    { symbol: "E_0", meaning: "incident field-amplitude scale", unit: "V m^{-1}" },
  ]}
/>

## The Core Method

For a transverse right-handed basis, the polariser axes are

\\[
\hat p=\cos\alpha\,\hat e_1+\sin\alpha\,\hat e_2,
\qquad
\hat p_\perp=-\sin\alpha\,\hat e_1+\cos\alpha\,\hat e_2.
\tag*{[1]}
\\]

Resolve the incident amplitude into these orthogonal directions and retain only the parallel projection:

\\[
\vec E_{0i}=(\hat p\cdot\vec E_{0i})\hat p
+(\hat p_\perp\cdot\vec E_{0i})\hat p_\perp,
\qquad
\vec E_{0t}=(\hat p\cdot\vec E_{0i})\hat p.
\tag*{[2]}
\\]

In the \\((\hat e_1,\hat e_2)\\) basis this is

\\[
\begin{pmatrix}a_{1t}\\a_{2t}\end{pmatrix}
=P(\alpha)\begin{pmatrix}a_1\\a_2\end{pmatrix},
\qquad
P(\alpha)=
\begin{pmatrix}
\cos^2\alpha&\sin\alpha\cos\alpha\\
\sin\alpha\cos\alpha&\sin^2\alpha
\end{pmatrix}.
\tag*{[3]}
\\]

Because \\(P^2=P\\), a second aligned ideal polariser makes no further change. Real devices have finite loss and finite extinction, so [2] is an ideal limit.

<PhysicsExamples collapsible
  items={[
    {
      title: "Projecting a field onto an axis",
      question: "An incident field is \\(\\vec E_{0i}=E_0\\hat e_1\\). Find the output of an ideal polariser at \\(\\alpha=30^\\circ\\).",
      answer: "Equation \\([2]\\) gives \\(\\hat p\\cdot\\vec E_{0i}=E_0\\cos30^\\circ=\\sqrt3E_0/2\\). Therefore \\[\\vec E_{0t}=\\frac{\\sqrt3E_0}{2}\\left(\\frac{\\sqrt3}{2}\\hat e_1+\\frac12\\hat e_2\\right)=E_0\\left(\\frac34\\hat e_1+\\frac{\\sqrt3}{4}\\hat e_2\\right).\\] **Final result:** the transmitted amplitude is \\(\\sqrt3E_0/2\\) along the \\(30^\\circ\\) transmission axis.",
    },
    {
      title: "Distinguishing physical axes",
      question: "A wire-grid polariser has horizontal wires. Which direction is its transmission axis for the usual operating regime?",
      answer: "The electric field parallel to the wires drives currents and is strongly reflected or absorbed. The orthogonal field drives little longitudinal current and passes. **Final result:** the transmission axis is vertical, perpendicular to the horizontal wires.",
    },
  ]}
/>
`;
