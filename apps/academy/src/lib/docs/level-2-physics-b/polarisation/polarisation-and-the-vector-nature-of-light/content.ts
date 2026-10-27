export const content = String.raw`## Principle

Polarisation is the path traced by the electric-field vector in the plane transverse to propagation. Throughout this section, a monochromatic plane wave propagates along \\(+z\\), \\((\hat e_1,\hat e_2,\hat z)\\) is right-handed, and the physical field is the real part of a complex field with harmonic factor \\(e^{i(kz-\omega t)}\\). The observer looks toward the source, along \\(-z\\). In that view, rotation from \\(+\hat e_1\\) toward \\(+\hat e_2\\) is called left-circular.

## Notation

<Notation
  items={[
    { symbol: "\\vec E,\\vec E_0,E_0", meaning: "physical field, complex transverse amplitude, and amplitude scale", unit: "V m^{-1}, V m^{-1}, V m^{-1}" },
    { symbol: "\\hat e_1,\\hat e_2,\\hat z", meaning: "right-handed orthonormal basis with propagation along positive z" },
    { symbol: "a_1,a_2", meaning: "complex linear-basis coefficients" },
    { symbol: "k,\\omega,z,t", meaning: "wavenumber, angular frequency, position, and time", unit: "m^{-1}, rad s^{-1}, m, s" },
    { symbol: "\\vec k", meaning: "wavevector, equal to k times the positive-z unit vector", unit: "m^{-1}" },
    { symbol: "i", meaning: "imaginary unit" },
  ]}
/>

## The Core Method

The transverse plane is the plane perpendicular to propagation. The diagram shows how two orthogonal basis directions span that plane, so any electric-field direction can be resolved into two components.

<PhysicsDiagram slug="polarisation-basis-geometry" />

Write the measurable field as the real part of its complex representation:

\\[
\vec E(z,t)=\operatorname{Re}\!\left\{\vec E_0e^{i(kz-\omega t)}\right\},
\qquad \vec E_0=E_0(a_1\hat e_1+a_2\hat e_2).
\tag*{[1]}
\\]

Maxwell's transverse condition gives

\\[
\vec k\cdot\vec E_0=k\hat z\cdot\vec E_0=0,
\tag*{[2]}
\\]

so only two independent coefficients are required. Separate overall amplitude and phase from polarisation by normalising them:

\\[
|a_1|^2+|a_2|^2=1.
\tag*{[3]}
\\]

At fixed \\(z\\), equal coefficient phases give a line, equal magnitudes with relative phase \\(+\pi/2\\) give left-circular rotation, relative phase \\(-\pi/2\\) gives right-circular rotation, and the general fixed pair gives an ellipse. An overall phase multiplies both coefficients and changes the oscillation timing, not the polarisation ellipse.

<PhysicsExamples collapsible
  items={[
    {
      title: "Recovering the physical field",
      question: "For \\(\\vec E_0=E_0(\\hat e_1+i\\hat e_2)/\\sqrt2\\), find the physical field at \\(z=0\\) and classify its rotation.",
      answer: "Insert the amplitude into \\([1]\\): \\[\\vec E(0,t)=\\frac{E_0}{\\sqrt2}\\operatorname{Re}\\{(\\hat e_1+i\\hat e_2)(\\cos\\omega t-i\\sin\\omega t)\\}.\\] Taking real parts component by component gives \\[\\vec E(0,t)=\\frac{E_0}{\\sqrt2}(\\hat e_1\\cos\\omega t+\\hat e_2\\sin\\omega t).\\] Its magnitude is constant, and just after \\(t=0\\) the vector turns from \\(+\\hat e_1\\) toward \\(+\\hat e_2\\). **Final result:** the field is left-circular in the declared observer convention.",
    },
    {
      title: "Why one scalar is insufficient",
      question: "Can a scalar amplitude distinguish fields polarised along \\(\\hat e_1\\) and \\(\\hat e_2\\) when both have amplitude \\(E_0\\)?",
      answer: "A scalar records only one magnitude and phase. The two vector amplitudes are \\(E_0\\hat e_1\\) and \\(E_0\\hat e_2\\); both have the same magnitude but satisfy different analyser projections. Their normalized coefficient pairs are \\((1,0)\\) and \\((0,1)\\). **Final result:** no; two transverse vector coefficients are necessary to distinguish the states.",
    },
  ]}
/>
`;
