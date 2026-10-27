export const content = String.raw`## Principle

The Poynting vector is the instantaneous electromagnetic energy flux. Optical intensity is its time-averaged component along the propagation direction, so intensity is proportional to the squared peak field amplitude.

## Notation

<Notation
  items={[
    { symbol: "\\vec E,\\vec B", meaning: "real instantaneous electric field and magnetic flux density", unit: "V m^{-1}, T" },
    { symbol: "\\widetilde{\\vec E}_0,\\widetilde{\\vec H}_0", meaning: "complex peak electric- and magnetic-field phasors", unit: "V m^{-1}, A m^{-1}" },
    { symbol: "u,\\vec S,I", meaning: "energy density, Poynting vector, and time-averaged intensity", unit: "J m^{-3}, W m^{-2}, W m^{-2}" },
    { symbol: "\\epsilon_0,\\mu_0,c,Z_0", meaning: "vacuum permittivity, permeability, wave speed, and impedance", unit: "F m^{-1}, H m^{-1}, m s^{-1}, \\Omega" },
    { symbol: "\\hat{\\vec k},T", meaning: "propagation unit vector and temporal period", unit: "1, s" },
    { symbol: "\\langle{}\\rangle,{}^*,i", meaning: "one-period time average, complex conjugation, and imaginary unit" },
    { symbol: "\\vec k,\\vec r,\\omega,t", meaning: "wavevector, position, angular frequency, and time", unit: "m^{-1}, m, rad s^{-1}, s" },
  ]}
/>

## The Core Method

Dot Faraday's law with \\(\vec B/\mu_0\\), dot Ampere-Maxwell's law with \\(\vec E\\), and subtract the first result from the second:

\\[
\vec E\cdot\left(\nabla\times\frac{\vec B}{\mu_0}\right)
-\frac{\vec B}{\mu_0}\cdot(\nabla\times\vec E)
=\epsilon_0\vec E\cdot\frac{\partial\vec E}{\partial t}
+\frac{\vec B}{\mu_0}\cdot\frac{\partial\vec B}{\partial t}.
\tag*{[1]}
\\]

Use \\(\nabla\cdot(\vec E\times\vec B)=\vec B\cdot(\nabla\times\vec E)-\vec E\cdot(\nabla\times\vec B)\\), together with \\(\vec E\cdot\partial_t\vec E=\tfrac12\partial_t(E^2)\\) and the corresponding identity for \\(\vec B\\). Equation [1] becomes Poynting's theorem:

\\[
\frac{\partial}{\partial t}
\left[\frac12\left(\epsilon_0E^2+\frac{B^2}{\mu_0}\right)\right]
+\nabla\cdot\left(\frac{1}{\mu_0}\vec E\times\vec B\right)=0.
\tag*{[2]}
\\]

Comparison with local energy conservation, \\(\partial_tu+\nabla\cdot\vec S=0\\), identifies

\\[
u=\frac12\left(\epsilon_0E^2+\frac{B^2}{\mu_0}\right),
\qquad
\vec S=\frac{1}{\mu_0}\vec E\times\vec B.
\tag*{[3]}
\\]

For a vacuum plane wave, \\(\vec B=c^{-1}\hat{\vec k}\times\vec E\\) and \\(\vec E\perp\hat{\vec k}\\). The vector triple-product identity then gives

\\[
\vec S
=\frac{1}{\mu_0c}\vec E\times(\hat{\vec k}\times\vec E)
=\epsilon_0cE^2\hat{\vec k}.
\tag*{[4]}
\\]

With \\(\vec E=\operatorname{Re}\{\widetilde{\vec E}_0e^{i\vec k\cdot\vec r}e^{-i\omega t}\}\\), averaging \\(\cos^2\\) over one period gives

\\[
I=\langle S\rangle
=\frac{1}{T}\int_0^T S\,dt
=\frac12\epsilon_0c|\widetilde E_0|^2
=\frac{|\widetilde E_0|^2}{2Z_0},
\qquad Z_0=\mu_0c.
\tag*{[5]}
\\]

Equivalently, peak phasors give \\(\langle\vec S\rangle=\tfrac12\operatorname{Re}(\widetilde{\vec E}_0\times\widetilde{\vec H}_0^*)\\). The factor \\(1/2\\) would be absent only if root-mean-square rather than peak amplitudes were used.

<PhysicsExamples collapsible
  items={[
    {
      title: "Intensity from peak electric field",
      question: "A vacuum plane wave has peak electric-field amplitude \\(120\\,\\mathrm{V\\,m^{-1}}\\). Find its average intensity using \\(Z_0=377\\,\\Omega\\).",
      answer: "The stated amplitude is a peak value, so equation \\([5]\\) includes the factor \\(1/2\\): \\[I=\\frac{|\\widetilde E_0|^2}{2Z_0}=\\frac{(120)^2}{2(377)}=19.1\\,\\mathrm{W\\,m^{-2}}.\\] Squaring the units gives \\(\\mathrm{V^2\\,m^{-2}}\\), and division by ohms produces \\(\\mathrm{W\\,m^{-2}}\\). **Final result:** \\(I=19.1\\,\\mathrm{W\\,m^{-2}}\\).",
    },
    {
      title: "Effect of doubling field amplitude",
      question: "A lossless optical system doubles a plane wave's peak electric-field amplitude without changing its impedance. By what factor does the intensity change?",
      answer: "Equation \\([5]\\) shows \\(I\\propto|\\widetilde E_0|^2\\). Replacing \\(\\widetilde E_0\\) by \\(2\\widetilde E_0\\) gives \\(I'=|2\\widetilde E_0|^2/(2Z_0)=4I\\). This is why field amplitudes, not intensities, must be added before evaluating coherent superpositions. **Final result:** the intensity increases by a factor of \\(4\\).",
    },
  ]}
/>
`;
