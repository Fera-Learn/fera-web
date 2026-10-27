export const content = String.raw`## Principle

Linear polarisation occurs when the two orthogonal field components have relative phase zero or \\(\pi\\), so their real fields always remain in a fixed ratio. Adopt \\(+z\\) propagation, \\(e^{i(kz-\omega t)}\\), and \\(\hat e_1\times\hat e_2=\hat z\\).

## Notation

<Notation
  items={[
    { symbol: "\\hat e_1,\\hat e_2,\\hat z", meaning: "right-handed transverse basis vectors and propagation direction" },
    { symbol: "\\vec E_0,E_0", meaning: "complex amplitude and its magnitude", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "\\vec E", meaning: "real physical electric field", unit: "V m^{-1}" },
    { symbol: "E_1,E_2", meaning: "physical field components along basis directions 1 and 2", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "a_1,a_2", meaning: "normalised linear-basis coefficients" },
    { symbol: "\\alpha", meaning: "polarisation angle measured from positive basis direction 1 toward direction 2", unit: "rad" },
    { symbol: "k,\\omega,z,t", meaning: "wavenumber, angular frequency, position, and time", unit: "m^{-1}, rad s^{-1}, m, s" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

Choose an irrelevant common phase so that both coefficients are real. Normalisation then permits

\\[
a_1=\cos\alpha,
\qquad a_2=\sin\alpha,
\qquad |a_1|^2+|a_2|^2=1.
\tag*{[1]}
\\]

The complex and physical fields are therefore

\\[
\vec E_0=E_0(\cos\alpha\,\hat e_1+\sin\alpha\,\hat e_2),
\qquad
\vec E=E_0(\cos\alpha\,\hat e_1+\sin\alpha\,\hat e_2)\cos(kz-\omega t).
\tag*{[2]}
\\]

Both components contain the same oscillating factor, hence

\\[
\frac{E_2(z,t)}{E_1(z,t)}=\tan\alpha
\tag*{[3]}
\\]

whenever the denominator is nonzero. The endpoint can reverse along the same line, but it cannot leave that line. Negative coefficients are handled by the angle quadrant, not by discarding signs.

<PhysicsExamples collapsible
  items={[
    {
      title: "Finding the polarisation angle",
      question: "A normalized state has coefficients \\(a_1=1/2\\) and \\(a_2=\\sqrt3/2\\). Find its polarisation angle.",
      answer: "The coefficients are real and satisfy \\(|a_1|^2+|a_2|^2=1/4+3/4=1\\), so \\([1]\\) applies. Then \\[\\tan\\alpha=\\frac{a_2}{a_1}=\\sqrt3.\\] Both coefficients are positive, placing the direction in the first quadrant. **Final result:** \\(\\alpha=\\pi/3=60^\\circ\\) from \\(+\\hat e_1\\) toward \\(+\\hat e_2\\).",
    },
    {
      title: "Recognising antiphasic components",
      question: "Classify the normalized state \\((a_1,a_2)=(1/\\sqrt2,-1/\\sqrt2)\\).",
      answer: "The coefficient phases differ by \\(\\pi\\), but both are real after one common phase choice. Comparing with \\([1]\\) gives \\(\\cos\\alpha=1/\\sqrt2\\) and \\(\\sin\\alpha=-1/\\sqrt2\\). **Final result:** the state is linearly polarised at \\(\\alpha=-\\pi/4\\), not elliptically polarised.",
    },
  ]}
/>
`;
