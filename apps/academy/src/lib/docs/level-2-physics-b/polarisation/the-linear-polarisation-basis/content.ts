export const content = String.raw`## Principle

The linear polarisation basis resolves a transverse field along two real, orthogonal directions. Use propagation along \\(+z\\), the harmonic factor \\(e^{i(kz-\omega t)}\\), and \\(\hat e_1\times\hat e_2=\hat z\\); physical fields are real parts.

## Notation

<Notation
  items={[
    { symbol: "\\hat e_1,\\hat e_2,\\hat z,\\delta_{pq}", meaning: "orthonormal linear basis, propagation direction, and Kronecker delta for basis labels p and q" },
    { symbol: "p,q", meaning: "linear-basis labels" },
    { symbol: "\\vec E_0,E_0", meaning: "complex field amplitude and real amplitude scale", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "a_1,a_2", meaning: "normalised complex linear-basis coefficients" },
    { symbol: "A_1,A_2", meaning: "nonnegative component magnitudes", unit: "V m^{-1}" },
    { symbol: "\\delta", meaning: "phase of component 2 relative to component 1", unit: "rad" },
    { symbol: "k,\\omega,z,t,\\gamma", meaning: "wavenumber, angular frequency, position, time, and common phase", unit: "m^{-1}, rad s^{-1}, m, s, rad" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

Orthogonality and transversality are

\\[
\hat e_p\cdot\hat e_q=\delta_{pq},
\qquad \hat e_1\times\hat e_2=\hat z,
\qquad \hat z\cdot\hat e_p=0.
\tag*{[1]}
\\]

After removing one common phase, every fully polarised amplitude can be written

\\[
\vec E_0=A_1\hat e_1+A_2e^{i\delta}\hat e_2
=E_0(a_1\hat e_1+a_2\hat e_2).
\tag*{[2]}
\\]

The intensity is proportional to the squared norm, so

\\[
E_0^2=\vec E_0^{\,*}\cdot\vec E_0=A_1^2+A_2^2,
\qquad a_1=\frac{A_1}{E_0},
\qquad a_2=\frac{A_2}{E_0}e^{i\delta},
\qquad |a_1|^2+|a_2|^2=1.
\tag*{[3]}
\\]

The ratio \\(a_2/a_1\\), including its phase, fixes the polarisation. Keeping only magnitudes loses the relative phase and can confuse linear, circular, and elliptical states.

<PhysicsExamples collapsible
  items={[
    {
      title: "Normalising linear-basis coefficients",
      question: "A field has \\(A_1=3.00\\,\\mathrm{V\\,m^{-1}}\\), \\(A_2=4.00\\,\\mathrm{V\\,m^{-1}}\\), and \\(\\delta=\\pi/3\\). Find its normalized coefficients.",
      answer: "Equation \\([3]\\) gives \\[E_0=\\sqrt{(3.00)^2+(4.00)^2}=5.00\\,\\mathrm{V\\,m^{-1}}.\\] Therefore \\[a_1=\\frac35,\\qquad a_2=\\frac45e^{i\\pi/3}.\\] The check is \\(|a_1|^2+|a_2|^2=9/25+16/25=1\\). **Final result:** \\((a_1,a_2)=(3/5,(4/5)e^{i\\pi/3})\\), with relative phase \\(\\pi/3\\).",
    },
    {
      title: "Changing the common phase",
      question: "Does multiplying both coefficients by \\(e^{i\\gamma}\\) change the polarisation state?",
      answer: "The new amplitude is \\(e^{i\\gamma}\\vec E_0\\), so the physical field's common phase shifts as \\(kz-\\omega t\\mapsto kz-\\omega t+\\gamma\\). The ratio is unchanged: \\((e^{i\\gamma}a_2)/(e^{i\\gamma}a_1)=a_2/a_1\\). **Final result:** no; a common phase shifts the oscillation but leaves the polarisation path unchanged.",
    },
  ]}
/>
`;
