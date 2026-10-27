export const content = String.raw`## Principle

Natural optical activity is circular birefringence arising from material chirality. It is reciprocal: propagation through a sample rotates linear polarisation, but retracing the same path undoes that rotation when compared in fixed laboratory transverse axes.

## Notation

<Notation
  items={[
    { symbol: "\\rho", meaning: "signed natural rotatory power", unit: "rad m^{-1}" },
    { symbol: "l", meaning: "sample length", unit: "m" },
    { symbol: "\\beta_f,\\beta_b", meaning: "forward and backward rotations in fixed laboratory axes", unit: "rad" },
    { symbol: "R(\\beta)", meaning: "two-dimensional linear-polarisation rotation matrix" },
    { symbol: "\\vec a", meaning: "linear Jones coefficient column" },
    { symbol: "I", meaning: "two-dimensional identity matrix" },
  ]}
/>

## The Core Method

A linear field can be decomposed into opposite circular components. Different phase accumulation rotates the recombined line, but retracing the path reverses that natural optical rotation.

<PhysicsDiagram slug="natural-optical-activity" />

For a forward pass, define the material rotatory power by

\\[
\beta_f=\rho l,
\qquad
R(\beta)=
\begin{pmatrix}
\cos\beta&-\sin\beta\\
\sin\beta&\cos\beta
\end{pmatrix}.
\tag*{[1]}
\\]

Reciprocity means that interchanging source and detector reverses the fixed-laboratory rotation:

\\[
\beta_b=-\beta_f,
\qquad
\vec a_b=R(-\beta_f)R(\beta_f)\vec a.
\tag*{[2]}
\\]

Multiply the matrices explicitly:

\\[
R(-\beta)R(\beta)=
\begin{pmatrix}
\cos^2\beta+\sin^2\beta&0\\
0&\cos^2\beta+\sin^2\beta
\end{pmatrix}
=I.
\tag*{[3]}
\\]

Thus a round trip has zero net natural rotation. Chiral enantiomers have opposite \\(\rho\\), and solution rotation is often proportional to concentration in a specified dilute regime, but wavelength and temperature must also be specified.

<PhysicsExamples collapsible
  items={[
    {
      title: "Forward and return optical activity",
      question: "A chiral sample has \\(\\rho=12.0\\,\\mathrm{rad\\,m^{-1}}\\) and \\(l=2.50\\,\\mathrm{cm}\\). Find the forward and round-trip rotations.",
      answer: "Convert \\(l=2.50\\times10^{-2}\\,\\mathrm m\\). Equation \\([1]\\) gives \\(\\beta_f=12.0(0.0250)=0.300\\,\\mathrm{rad}\\). By \\([2]\\), \\(\\beta_b=-0.300\\,\\mathrm{rad}\\). Their fixed-axis sum is zero. **Final result:** forward rotation \\(+0.300\\,\\mathrm{rad}\\); round-trip natural rotation \\(0\\,\\mathrm{rad}\\).",
    },
    {
      title: "Testing reciprocity",
      question: "Can an ideal reciprocal optically active sample alone provide optical isolation?",
      answer: "An isolator requires return light to acquire additional rotation relative to the input polariser. Equations \\([2]\\) and \\([3]\\) show that the return pass instead cancels the forward rotation. **Final result:** no; reciprocal optical activity alone cannot isolate because its round-trip rotation is zero.",
    },
  ]}
/>
`;
