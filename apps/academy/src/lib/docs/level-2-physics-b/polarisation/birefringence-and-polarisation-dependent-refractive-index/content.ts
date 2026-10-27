export const content = String.raw`## Principle

Birefringence is optical anisotropy: different polarisation eigenstates acquire different phase refractive indices. A general input is resolved into those eigenstates, each propagates with its own phase, and recombination changes the polarisation.

## Notation

<Notation
  items={[
    { symbol: "\\hat u_1,\\hat u_2", meaning: "orthonormal polarisation eigenvectors" },
    { symbol: "n_1,n_2", meaning: "phase refractive indices of the eigenstates" },
    { symbol: "k_0", meaning: "vacuum wavenumber", unit: "m^{-1}" },
    { symbol: "\\lambda_0", meaning: "vacuum wavelength", unit: "m" },
    { symbol: "l", meaning: "propagation length in the medium", unit: "m" },
    { symbol: "\\delta", meaning: "phase of eigenstate 2 relative to eigenstate 1", unit: "rad" },
    { symbol: "A_1,A_2", meaning: "input eigenstate field amplitudes", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "\\vec E_0(0),\\vec E_0(l)", meaning: "complex field amplitudes before and after the medium", unit: "V m^{-1}" },
    { symbol: "z,\\omega", meaning: "propagation coordinate and angular frequency", unit: "m, rad s^{-1}" },
    { symbol: "t", meaning: "time", unit: "s" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

Resolve the incident field along the material’s fast and slow axes. The two components cross the same thickness with different phase speeds, so they leave with a relative phase delay.

<PhysicsDiagram slug="birefringent-retarder" />

With harmonic convention \\(e^{i(nk_0z-\omega t)}\\), decompose the input amplitude as

\\[
\vec E_0(0)=A_1\hat u_1+A_2\hat u_2,
\qquad k_0=\frac{2\pi}{\lambda_0}.
\tag*{[1]}
\\]

Each phase eigenstate accumulates \\(n_jk_0l\\), giving

\\[
\vec E_0(l)=A_1e^{in_1k_0l}\hat u_1+A_2e^{in_2k_0l}\hat u_2
=e^{in_1k_0l}\left(A_1\hat u_1+A_2e^{i\delta}\hat u_2\right).
\tag*{[2]}
\\]

The relative retardance is therefore

\\[
\delta=(n_2-n_1)k_0l
=\frac{2\pi(n_2-n_1)l}{\lambda_0}
\pmod{2\pi}.
\tag*{[3]}
\\]

Linear birefringence has orthogonal linear eigenstates; circular birefringence has opposite circular eigenstates. Equation [3] uses phase indices: ray direction, group speed, and absorption require separate treatment when relevant.

<PhysicsExamples collapsible
  items={[
    {
      title: "Calculating a material retardance",
      question: "A plate has \\(n_1=1.500\\), \\(n_2=1.510\\), thickness \\(l=25.0\\,\\mathrm{\\mu m}\\), and vacuum wavelength \\(\\lambda_0=500\\,\\mathrm{nm}\\). Find the relative phase modulo \\(2\\pi\\).",
      answer: "Use \\([3]\\) after converting to metres: \\[\\delta=\\frac{2\\pi(0.010)(25.0\\times10^{-6})}{500\\times10^{-9}}=\\pi.\\] No further reduction modulo \\(2\\pi\\) is needed. **Final result:** eigenstate 2 is retarded by the phasor difference \\(\\delta=\\pi\\) relative to eigenstate 1 in this convention.",
    },
    {
      title: "Input on an eigenaxis",
      question: "Does a birefringent plate change the polarisation when the input is exactly \\(\\hat u_1\\)?",
      answer: "Set \\(A_2=0\\) in \\([2]\\). The output is \\(A_1e^{in_1k_0l}\\hat u_1\\), which differs only by a common propagation phase. No second eigenstate exists with which to form a relative phase. **Final result:** the polarisation is unchanged; only its overall phase changes.",
    },
  ]}
/>
`;
