export const content = String.raw`## Principle

Fraunhofer diffraction is a physical Fourier transform: the complex field at each observation coordinate is proportional to one spatial-frequency component of the aperture-plane field. Intensity records the transform magnitude squared and therefore discards its phase unless an interferometric reference is supplied.

## Notation

<Notation
  items={[
    { symbol: "x',y'", meaning: "aperture-plane coordinates", unit: "m, m" },
    { symbol: "x,y,z", meaning: "observation coordinates and transform distance", unit: "m, m, m" },
    { symbol: "f", meaning: "lens focal length when the transform plane is a back focal plane", unit: "m" },
    { symbol: "U_A,U_F", meaning: "aperture-plane and Fraunhofer electric-field amplitudes", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "u,v", meaning: "cyclic spatial frequencies", unit: "m^{-1}, m^{-1}" },
    { symbol: "\\widetilde U_A", meaning: "unnormalised two-dimensional Fourier transform of U_A", unit: "V m" },
    { symbol: "\\mathcal F,\\mathcal F^{-1}", meaning: "forward and inverse Fourier-transform operators" },
    { symbol: "\\lambda,k", meaning: "wavelength and wavenumber k=2\\pi/\\lambda", unit: "m, m^{-1}" },
    { symbol: "I_F", meaning: "Fraunhofer intensity", unit: "W m^{-2}" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

Fix one transform pair throughout this section:

\\[
\widetilde U_A(u,v)=\mathcal F\{U_A\}(u,v)
=\iint U_A(x',y')e^{-i2\pi(ux'+vy')}dx'\,dy',
\tag*{[1]}
\\]

\\[
U_A(x',y')=\mathcal F^{-1}\{\widetilde U_A\}(x',y')
=\iint \widetilde U_A(u,v)e^{i2\pi(ux'+vy')}du\,dv.
\tag*{[2]}
\\]

There is no prefactor in either integral; the variables \\(u,v\\) are cycles per metre, so the exponent contains \\(2\pi\\). Fraunhofer propagation is

\\[
U_F(x,y;z)=\frac{e^{ikz}e^{ik(x^2+y^2)/(2z)}}{i\lambda z}
\iint U_A(x',y')e^{-i2\pi(xx'+yy')/(\lambda z)}dx'\,dy'.
\tag*{[3]}
\\]

Compare the exponents in [1] and [3] term by term:

\\[
u=\frac{x}{\lambda z},
\qquad
v=\frac{y}{\lambda z}.
\tag*{[4]}
\\]

Substitution into [3] yields the transform relation

\\[
U_F(x,y;z)=\frac{e^{ikz}e^{ik(x^2+y^2)/(2z)}}{i\lambda z}
\widetilde U_A\!\left(\frac{x}{\lambda z},\frac{y}{\lambda z}\right).
\tag*{[5]}
\\]

Taking the modulus squared removes the propagation and quadratic phases:

\\[
I_F(x,y;z)=\frac{1}{(\lambda z)^2}
\left|\widetilde U_A\!\left(\frac{x}{\lambda z},\frac{y}{\lambda z}\right)\right|^2.
\tag*{[6]}
\\]

For a lens back focal plane, replace \\(z\\) by \\(f\\). Equation [6] does not generally allow reconstruction of \\(U_A\\), because different transform phases can share the same magnitude. Also keep dimensions consistent: if \\(U_A\\) has field units, its two-dimensional unnormalised transform has field times area units, and the factor \\(1/(\lambda z)\\) restores field units.

<PhysicsExamples collapsible
  items={[
    {
      title: "Observation coordinate for a grating frequency",
      question: "An aperture contains a spatial-frequency component \\(u=4.0\\times10^{3}\\,\\mathrm{m}^{-1}\\). At wavelength \\(\\lambda=500\\,\\mathrm{nm}\\) and propagation distance \\(z=1.5\\,\\mathrm{m}\\), find its \\(x\\)-coordinate in the Fraunhofer plane.",
      answer: "Equation \\([4]\\) gives \\(x=\\lambda z u\\). Substitution gives \\[x=(500\\times10^{-9}\\,\\mathrm m)(1.5\\,\\mathrm m)(4.0\\times10^3\\,\\mathrm{m^{-1}})=3.0\\times10^{-3}\\,\\mathrm m.\\] **Final result:** that spatial-frequency component appears at \\(x=3.0\\,\\mathrm{mm}\\).",
    },
    {
      title: "Why intensity is not the complete transform",
      question: "Two apertures have transforms that differ only by the phase factor \\(\\exp(-i2\\pi u d)\\). Compare their Fraunhofer intensities.",
      answer: "Their transform magnitudes are equal because \\(|e^{-i2\\pi ud}|=1\\). Equation \\([6]\\) therefore gives equal intensity at every \\(x\\), although equation \\([5]\\) gives different complex fields. The factor is a phase ramp associated with aperture translation. **Final result:** the two ideal Fraunhofer intensity patterns are identical, but their transform phases and complex fields are different.",
    },
  ]}
/>
`;
