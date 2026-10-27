export const content = String.raw`## Principle

Circular polarisation requires equal transverse component magnitudes and a relative phase of exactly \\(\pm\pi/2\\). Use \\(+z\\) propagation and \\(e^{i(kz-\omega t)}\\). An observer looking toward the source along \\(-z\\) calls rotation from \\(+\hat e_1\\) toward \\(+\hat e_2\\) left-circular and the reverse rotation right-circular.

## Notation

<Notation
  items={[
    { symbol: "\\hat e_1,\\hat e_2,\\hat z", meaning: "right-handed transverse basis and propagation direction" },
    { symbol: "\\vec E_{0L},\\vec E_{0R}", meaning: "left- and right-circular complex amplitudes", unit: "V m^{-1}" },
    { symbol: "E_0", meaning: "total electric-field amplitude", unit: "V m^{-1}" },
    { symbol: "k,\\omega,z,t", meaning: "wavenumber, angular frequency, position, and time", unit: "m^{-1}, rad s^{-1}, m, s" },
    { symbol: "a_1,a_2", meaning: "normalised linear-basis coefficients" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

The normalized circular states in the linear basis are

\\[
\vec E_{0L}=\frac{E_0}{\sqrt2}(\hat e_1+i\hat e_2),
\qquad
\vec E_{0R}=\frac{E_0}{\sqrt2}(\hat e_1-i\hat e_2).
\tag*{[1]}
\\]

For the plus sign at fixed \\(z=0\\), take the real part explicitly:

\\[
\vec E_L(0,t)=\frac{E_0}{\sqrt2}
\operatorname{Re}\!\left\{(\hat e_1+i\hat e_2)e^{-i\omega t}\right\}
=\frac{E_0}{\sqrt2}(\hat e_1\cos\omega t+\hat e_2\sin\omega t).
\tag*{[2]}
\\]

Its magnitude is constant:

\\[
|\vec E_L|^2=\frac{E_0^2}{2}(\cos^2\omega t+\sin^2\omega t)=\frac{E_0^2}{2}.
\tag*{[3]}
\\]

Changing \\(i\\) to \\(-i\\) reverses the \\(\hat e_2\\) term and hence the rotation. Handedness must always be quoted with propagation, time, and viewing conventions because changing a convention can swap the labels.

<PhysicsExamples collapsible
  items={[
    {
      title: "Testing a candidate circular state",
      question: "Classify \\(\\vec E_0=(6\\hat e_1-6i\\hat e_2)\\,\\mathrm{V\\,m^{-1}}\\) and find its total amplitude scale.",
      answer: "The component magnitudes are equal and their relative phase is \\(-\\pi/2\\). From \\([1]\\), this is the right-circular sign. The amplitude scale obeys \\[E_0=\\sqrt{|6|^2+|-6i|^2}=\\sqrt{72}=6\\sqrt2\\,\\mathrm{V\\,m^{-1}}.\\] **Final result:** the state is right-circular with \\(E_0=6\\sqrt2\\,\\mathrm{V\\,m^{-1}}\\).",
    },
    {
      title: "Separating phase from handedness",
      question: "Does multiplying the left-circular state in \\([1]\\) by \\(-1\\) make it right-circular?",
      answer: "Multiplication by \\(-1=e^{i\\pi}\\) adds the same phase to both components. Their ratio remains \\(a_2/a_1=i\\), so \\([2]\\) is shifted by half a period but still rotates from \\(+\\hat e_1\\) toward \\(+\\hat e_2\\). **Final result:** no; the state remains left-circular.",
    },
  ]}
/>
`;
