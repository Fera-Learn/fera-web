export const content = String.raw`## Principle

Malus' law follows because an ideal polariser projects field amplitude with one cosine, while intensity is proportional to amplitude squared. In a sequence, each polariser acts on the state produced immediately before it, not on the original direction.

## Notation

<Notation
  items={[
    { symbol: "I_0,I,I_j,I_N", meaning: "intensities before, after, and within a sequence of polarisers", unit: "W m^{-2}" },
    { symbol: "E_0,E", meaning: "field amplitudes before and after an analyser", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "\\theta", meaning: "angle between incident linear polarisation and analyser axis", unit: "rad" },
    { symbol: "\\alpha_j", meaning: "transmission-axis angle of polariser j", unit: "rad" },
    { symbol: "I_u", meaning: "incident unpolarised intensity", unit: "W m^{-2}" },
    { symbol: "N", meaning: "number of polarisers in the sequence" },
    { symbol: "\\langle\\cdot\\rangle", meaning: "average over uniformly distributed input angles" },
  ]}
/>

## The Core Method

Each polariser keeps only the field component parallel to its own axis. With several polarisers, apply that projection one plate at a time in propagation order.

<PhysicsDiagram slug="malus-multiple-polarisers" />

Projection onto an analyser axis gives

\\[
E=E_0\cos\theta.
\tag*{[1]}
\\]

Since intensity is proportional to squared amplitude,

\\[
I=I_0\frac{|E|^2}{|E_0|^2}=I_0\cos^2\theta.
\tag*{[2]}
\\]

For unpolarised light, average over uniformly distributed input angles:

\\[
I_1=I_u\langle\cos^2\theta\rangle
=I_u\frac{1}{\pi}\int_0^\pi\cos^2\theta\,d\theta
=\frac{I_u}{2}.
\tag*{[3]}
\\]

After the first polariser, a sequence of ideal polarisers obeys

\\[
I_N=I_1\prod_{j=2}^{N}\cos^2(\alpha_j-\alpha_{j-1}).
\tag*{[4]}
\\]

Crossed first and last axes do not guarantee zero transmission if intermediate axes rotate the state in smaller steps.

<PhysicsExamples collapsible
  items={[
    {
      title: "Three polarisers between crossed axes",
      question: "Unpolarised light of intensity \\(I_u=80.0\\,\\mathrm{W\\,m^{-2}}\\) meets ideal axes at \\(0^\\circ\\), \\(45^\\circ\\), and \\(90^\\circ\\). Find the output intensity.",
      answer: "Equation \\([3]\\) gives \\(I_1=80.0/2=40.0\\,\\mathrm{W\\,m^{-2}}\\). Apply \\([4]\\) to the two successive \\(45^\\circ\\) differences: \\[I_3=40.0\\cos^245^\\circ\\cos^245^\\circ=40.0\\left(\\frac12\\right)\\left(\\frac12\\right).\\] **Final result:** \\(I_3=10.0\\,\\mathrm{W\\,m^{-2}}\\).",
    },
    {
      title: "Two crossed polarisers",
      question: "Already linearly polarised light meets a second ideal polariser whose axis is \\(90^\\circ\\) from its polarisation. What is transmitted?",
      answer: "Equation \\([2]\\) applies directly with \\(\\theta=90^\\circ\\): \\(I=I_0\\cos^290^\\circ=0\\). There is no intermediate projection to rotate the state. **Final result:** an ideal crossed analyser transmits zero intensity.",
    },
  ]}
/>
`;
