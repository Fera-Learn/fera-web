export const content = String.raw`## Principle

Temporal frequency counts cycles per unit time, while spatial frequency counts cycles per unit distance. Wavenumber measures spatial phase change in radians per unit distance, and the wavevector also records direction.

## Notation

<Notation
  items={[
    { symbol: "f,\\omega", meaning: "temporal frequency and angular frequency", unit: "Hz, rad s^{-1}" },
    { symbol: "T", meaning: "temporal period", unit: "s" },
    { symbol: "\\widetilde{\\nu},\\widetilde{\\nu}_j", meaning: "spatial frequency along propagation and along coordinate direction j", unit: "m^{-1}, m^{-1}" },
    { symbol: "\\lambda", meaning: "wavelength measured along propagation", unit: "m" },
    { symbol: "\\vec k,k,\\hat{\\vec k},k_j", meaning: "wavevector, wavenumber, propagation unit vector, and component along direction j", unit: "m^{-1}, m^{-1}, 1, m^{-1}" },
    { symbol: "v,c,\\hat{\\vec e}_j,\\theta", meaning: "phase speed, vacuum wave speed, coordinate unit vector, and angle to the wavevector", unit: "m s^{-1}, m s^{-1}, 1, rad" },
    { symbol: "\\widetilde E_0,\\vec r,t,i", meaning: "complex peak amplitude, position, time, and imaginary unit", unit: "V m^{-1}, m, s, 1" },
    { symbol: "z,\\widetilde{\\nu}_z", meaning: "example coordinate and spatial frequency measured along it", unit: "m, m^{-1}" },
  ]}
/>

## The Core Method

At a fixed position, a harmonic wave repeats after one period \\(T\\). Frequency and angular frequency are therefore

\\[
f=\frac{1}{T},\qquad \omega=2\pi f=\frac{2\pi}{T}.
\tag*{[1]}
\\]

Along the propagation direction, the field repeats after one wavelength \\(\lambda\\). Spatial frequency counts cycles per metre, whereas wavenumber counts radians per metre:

\\[
\widetilde{\nu}=\frac{1}{\lambda},\qquad
k=2\pi\widetilde{\nu}=\frac{2\pi}{\lambda}.
\tag*{[2]}
\\]

The vector quantity is \\(\vec k=k\hat{\vec k}\\). Along an arbitrary coordinate direction \\(\hat{\vec e}_j\\), its component and the corresponding spatial frequency are

\\[
k_j=\vec k\cdot\hat{\vec e}_j=k\cos\theta,
\qquad
\widetilde{\nu}_j=\frac{k_j}{2\pi}=\frac{\cos\theta}{\lambda}.
\tag*{[3]}
\\]

This projection matters: \\(1/\lambda\\) is the spatial frequency only along propagation. The phase speed follows by combining one spatial cycle with one temporal cycle:

\\[
v=\frac{\lambda}{T}=f\lambda=\frac{\omega}{k}.
\tag*{[4]}
\\]

For the harmonic convention \\(\operatorname{Re}\{\widetilde E_0e^{i\vec k\cdot\vec r}e^{-i\omega t}\}\\), differentiation makes the distinction operational:

\\[
\frac{\partial}{\partial t}\longrightarrow-i\omega,
\qquad
\nabla\longrightarrow i\vec k.
\tag*{[5]}
\\]

Do not use \\(f\\), \\(\widetilde\nu\\), and \\(k\\) interchangeably: their dimensions or factors of \\(2\pi\\) differ.

<PhysicsExamples collapsible
  items={[
    {
      title: "Temporal and spatial measures of a laser wave",
      question: "A vacuum laser has wavelength \\(532\\,\\mathrm{nm}\\). Find \\(\\widetilde{\\nu}\\), \\(k\\), \\(f\\), and \\(\\omega\\).",
      answer: "Write \\(\\lambda=5.32\\times10^{-7}\\,\\mathrm m\\). Equation \\([2]\\) gives \\(\\widetilde{\\nu}=1/\\lambda=1.88\\times10^6\\,\\mathrm{m^{-1}}\\) and \\(k=2\\pi/\\lambda=1.18\\times10^7\\,\\mathrm{m^{-1}}\\). With \\(v=c=2.998\\times10^8\\,\\mathrm{m\\,s^{-1}}\\), equation \\([4]\\) gives \\(f=c/\\lambda=5.64\\times10^{14}\\,\\mathrm{Hz}\\), then \\(\\omega=2\\pi f=3.54\\times10^{15}\\,\\mathrm{rad\\,s^{-1}}\\). **Final result:** \\(\\widetilde{\\nu}=1.88\\times10^6\\,\\mathrm{m^{-1}}\\), \\(k=1.18\\times10^7\\,\\mathrm{m^{-1}}\\), \\(f=5.64\\times10^{14}\\,\\mathrm{Hz}\\), and \\(\\omega=3.54\\times10^{15}\\,\\mathrm{rad\\,s^{-1}}\\).",
    },
    {
      title: "Projected spatial frequency",
      question: "A plane wave of wavelength \\(2.0\\,\\mathrm{mm}\\) travels at \\(60^\\circ\\) to the positive \\(z\\)-axis. What spatial frequency is measured along \\(z\\)?",
      answer: "Use equation \\([3]\\), where the angle between \\(\\vec k\\) and \\(+z\\) is \\(60^\\circ\\): \\[\\widetilde{\\nu}_z=\\frac{\\cos60^\\circ}{2.0\\times10^{-3}}=\\frac{0.5}{2.0\\times10^{-3}}=250\\,\\mathrm{m^{-1}}.\\] The corresponding spacing along \\(z\\) is \\(1/\\widetilde{\\nu}_z=4.0\\,\\mathrm{mm}\\), larger than the wavelength because the wavefronts are oblique. **Final result:** \\(\\widetilde{\\nu}_z=250\\,\\mathrm{m^{-1}}\\).",
    },
  ]}
/>
`;
