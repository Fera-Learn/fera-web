export const content = String.raw`## Principle

Interference is a vector effect. The fringe term is weighted by the complex inner product of the two polarisation vectors: parallel states give full contrast, orthogonal states give no total-intensity fringes, and intermediate overlap gives partial contrast.

## Notation

<Notation
  items={[
    { symbol: "E_A,E_B", meaning: "nonnegative scalar field-amplitude magnitudes", unit: "V m^{-1}" },
    { symbol: "\\hat e_A,\\hat e_B", meaning: "normalised possibly complex polarisation vectors" },
    { symbol: "\\phi_A,\\phi_B,\\Delta\\phi", meaning: "component phases and phase B minus phase A", unit: "rad, rad, rad" },
    { symbol: "I_A,I_B,I", meaning: "individual and total intensities in common proportional units" },
    { symbol: "I_{\\max},I_{\\min}", meaning: "maximum and minimum total fringe intensities in the same units" },
    { symbol: "\\mathcal V", meaning: "fringe visibility" },
    { symbol: "\\mu,\\chi", meaning: "magnitude and phase of the complex polarisation overlap", unit: "1, rad" },
    { symbol: "\\vec E", meaning: "total complex electric field", unit: "V m^{-1}" },
    { symbol: "\\hat e_1,\\hat e_2", meaning: "dimensionless orthogonal linear basis vectors", unit: "1, 1" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

At one observation point, write

\\[
\vec E=E_Ae^{i\phi_A}\hat e_A+E_Be^{i\phi_B}\hat e_B,
\qquad \Delta\phi=\phi_B-\phi_A.
\tag*{[1]}
\\]

Form the Hermitian norm and retain both cross terms:

\\[
I=\vec E^{\,*}\cdot\vec E
=I_A+I_B+2\sqrt{I_AI_B}\,
\operatorname{Re}\!\left[(\hat e_A^{\,*}\cdot\hat e_B)e^{i\Delta\phi}\right].
\tag*{[2]}
\\]

Writing \\(\hat e_A^{\,*}\cdot\hat e_B=\mu e^{i\chi}\\) gives

\\[
I=I_A+I_B+2\mu\sqrt{I_AI_B}\cos(\Delta\phi+\chi),
\qquad 0\le\mu\le1.
\tag*{[3]}
\\]

Hence

\\[
\mathcal V=\frac{I_{\max}-I_{\min}}{I_{\max}+I_{\min}}
=\frac{2\mu\sqrt{I_AI_B}}{I_A+I_B}.
\tag*{[4]}
\\]

Orthogonal polarisations have \\(\mu=0\\), so a polarisation-insensitive detector sees no cross term. A common analyser can project both fields onto one direction and restore fringes in that selected channel.

<PhysicsExamples collapsible
  items={[
    {
      title: "Visibility with partial polarisation overlap",
      question: "Two beams have \\(I_A=9.0\\,\\mathrm{W\\,m^{-2}}\\), \\(I_B=4.0\\,\\mathrm{W\\,m^{-2}}\\), and \\(|\\hat e_A^*\\cdot\\hat e_B|=0.60\\). Find the visibility.",
      answer: "Use \\([4]\\): \\[\\mathcal V=\\frac{2(0.60)\\sqrt{(9.0)(4.0)}}{9.0+4.0}=\\frac{1.20(6.0)}{13.0}=0.554.\\] The unequal beam intensities and incomplete overlap both reduce contrast. **Final result:** \\(\\mathcal V=0.554\\).",
    },
    {
      title: "Orthogonal fields through an analyser",
      question: "Equal beams polarised along \\(\\hat e_1\\) and \\(\\hat e_2\\) show no fringes. What happens after an ideal analyser at \\(45^\\circ\\)?",
      answer: "Before the analyser, \\(\\hat e_1^*\\cdot\\hat e_2=0\\). The analyser projects each field onto \\((\\hat e_1+\\hat e_2)/\\sqrt2\\), giving each the same nonzero polarisation and an amplitude factor \\(1/\\sqrt2\\). **Final result:** full-visibility fringes are restored in the analysed output, with reduced mean intensity.",
    },
  ]}
/>
`;
