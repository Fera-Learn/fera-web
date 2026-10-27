export const content = String.raw`## Principle

A thin lens creates Fraunhofer diffraction at its back focal plane without requiring a physically large propagation distance. The lens quadratic phase cancels the aperture-coordinate quadratic phase of Fresnel propagation, leaving a scaled Fourier transform of the field immediately before the lens.

## Notation

<Notation
  items={[
    { symbol: "x',y',\\rho'", meaning: "lens-plane coordinates and radius \\rho'=\\sqrt{x'^2+y'^2}", unit: "m, m, m" },
    { symbol: "x_f,y_f,\\rho_f", meaning: "back-focal-plane coordinates and radius", unit: "m, m, m" },
    { symbol: "f", meaning: "positive focal length of the thin lens", unit: "m" },
    { symbol: "U_A,U_L,U_f", meaning: "fields before the lens, after the lens, and in the focal plane" },
    { symbol: "t_L", meaning: "ideal thin-lens amplitude transmission" },
    { symbol: "\\widetilde U_A,\\mathcal F", meaning: "unnormalised transform of U_A and Fourier-transform operation" },
    { symbol: "\\lambda,k", meaning: "wavelength and wavenumber k=2\\pi/\\lambda", unit: "m, m^{-1}" },
    { symbol: "u=x_f/(\\lambda f),v=y_f/(\\lambda f)", meaning: "focal-plane spatial frequencies", unit: "m^{-1}, m^{-1}" },
    { symbol: "I_f", meaning: "focal-plane intensity", unit: "W m^{-2}" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

Suppress the common time factor. Apart from a constant phase, an ideal thin lens multiplies the incident field by

\\[
t_L(x',y')=\exp\!\left[-\frac{ik}{2f}(x'^2+y'^2)\right],
\qquad
U_L=U_A t_L.
\tag*{[1]}
\\]

Propagate \\(U_L\\) by distance \\(f\\) with the Fresnel integral:

\\[
U_f(x_f,y_f)=\frac{e^{ikf}}{i\lambda f}
\iint U_A(x',y')e^{-ik(x'^2+y'^2)/(2f)}
e^{ik[(x_f-x')^2+(y_f-y')^2]/(2f)}dx'\,dy'.
\tag*{[2]}
\\]

Expand the propagation phase explicitly:

\\[
(x_f-x')^2+(y_f-y')^2
=x_f^2+y_f^2+x'^2+y'^2-2x_fx'-2y_fy'.
\tag*{[3]}
\\]

The \\(+(ik/2f)(x'^2+y'^2)\\) term from [3] cancels the negative lens phase in [2]. The remaining field is

\\[
U_f(x_f,y_f)=\frac{e^{ikf}e^{ik(x_f^2+y_f^2)/(2f)}}{i\lambda f}
\iint U_A(x',y')e^{-i2\pi(ux'+vy')}dx'\,dy'.
\tag*{[4]}
\\]

Fix the section-wide unnormalised Fourier convention as

\\[
\widetilde U_A(u,v)=\mathcal F\{U_A\}(u,v)
=\iint_{-\infty}^{\infty}U_A(x',y')e^{-i2\pi(ux'+vy')}dx'\,dy'.
\tag*{[5]}
\\]

Therefore the measurable focal-plane intensity is

\\[
I_f(x_f,y_f)=\frac{1}{(\lambda f)^2}
\left|\widetilde U_A\!\left(\frac{x_f}{\lambda f},\frac{y_f}{\lambda f}\right)\right|^2
\tag*{[6]}
\\]

when the field units are chosen so that intensity is \\(|U|^2\\). The prefactor phase in [4] affects the complex field but not [6]. This focal-plane result follows from phase cancellation within the thin-lens and Fresnel approximations; it does not require \\(f\\) to exceed the free-space far-field distance.

<PhysicsExamples collapsible
  items={[
    {
      title: "Map spatial frequency to focal-plane position",
      question: "A lens has focal length \\(f=0.20\\,\\mathrm{m}\\) and is illuminated at wavelength \\(\\lambda=500\\,\\mathrm{nm}\\). Where does the spatial-frequency component \\(u=2.0\\times10^{4}\\,\\mathrm{m}^{-1}\\) appear in its back focal plane?",
      answer: "From the definition below equation \\([4]\\), \\(u=x_f/(\\lambda f)\\). Rearranging and substituting gives \\[x_f=\\lambda f u=(500\\times10^{-9}\\,\\mathrm m)(0.20\\,\\mathrm m)(2.0\\times10^4\\,\\mathrm{m^{-1}})=2.0\\times10^{-3}\\,\\mathrm m.\\] **Final result:** the component appears at \\(x_f=2.0\\,\\mathrm{mm}\\) from the optical axis.",
    },
    {
      title: "Why the focal-plane pattern can be close to the lens",
      question: "A lens focal length is shorter than the aperture's free-space Rayleigh distance. Can its back focal plane still display the Fraunhofer pattern?",
      answer: "Yes. In free space the input-coordinate quadratic phase must become negligible. With a lens, equations \\([1]\\)-\\([4]\\) show that the lens supplies the opposite quadratic phase, and cancellation occurs exactly at propagation distance \\(f\\) within the paraxial thin-lens model. **Final result:** the back focal plane displays the scaled Fraunhofer transform even when \\(f\\) is not a free-space far-field distance.",
    },
  ]}
/>
`;
