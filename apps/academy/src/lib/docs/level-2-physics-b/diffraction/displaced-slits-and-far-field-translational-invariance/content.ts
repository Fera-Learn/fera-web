export const content = String.raw`## Principle

Translating an aperture in its own plane multiplies its Fraunhofer field by a position-dependent phase but leaves its intensity unchanged. This translational invariance belongs to the far-field intensity, not to the complex field and not generally to finite-distance Fresnel diffraction.

## Notation

<Notation
  items={[
    { symbol: "x'", meaning: "aperture-plane coordinate", unit: "m" },
    { symbol: "x,z", meaning: "observation coordinate and propagation distance", unit: "m, m" },
    { symbol: "a,d", meaning: "slit width and displacement of its centre", unit: "m, m" },
    { symbol: "g_0,g_d", meaning: "centred and displaced aperture functions" },
    { symbol: "G_0,G_d", meaning: "unnormalised Fourier transforms of g_0 and g_d", unit: "m, m" },
    { symbol: "u=x/(\\lambda z)", meaning: "observation spatial frequency", unit: "m^{-1}" },
    { symbol: "\\lambda,k", meaning: "wavelength and wavenumber k=2\\pi/\\lambda", unit: "m, m^{-1}" },
    { symbol: "\\phi_d", meaning: "translation-induced far-field phase", unit: "rad" },
    { symbol: "s", meaning: "shifted aperture integration coordinate", unit: "m" },
    { symbol: "I_d,I_0", meaning: "intensities from displaced and centred slits", unit: "W m^{-2}, W m^{-2}" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

Let the centred slit be \\(g_0(x')=\operatorname{rect}(x'/a)\\). A slit whose centre is shifted to \\(x'=d\\) is

\\[
g_d(x')=g_0(x'-d)=\operatorname{rect}\!\left(\frac{x'-d}{a}\right).
\tag*{[1]}
\\]

Its Fraunhofer amplitude factor is

\\[
G_d(u)=\int_{-\infty}^{\infty}g_0(x'-d)e^{-i2\pi ux'}dx'.
\tag*{[2]}
\\]

Set \\(s=x'-d\\), so \\(x'=s+d\\) and \\(dx'=ds\\). Then

\\[
G_d(u)=\int g_0(s)e^{-i2\pi u(s+d)}ds
=e^{-i2\pi ud}\int g_0(s)e^{-i2\pi us}ds.
\tag*{[3]}
\\]

Recognising the remaining integral as \\(G_0(u)\\) gives the translation property

\\[
G_d(u)=e^{-i2\pi ud}G_0(u).
\tag*{[4]}
\\]

For the finite-width slit, \\(G_0=a\operatorname{sinc}(\pi au)\\), so

\\[
G_d(u)=e^{-i2\pi ud}a\operatorname{sinc}(\pi au),
\qquad
\phi_d=-2\pi ud=-\frac{2\pi xd}{\lambda z}.
\tag*{[5]}
\\]

The exponential has unit modulus. Consequently,

\\[
I_d(x)\propto|G_d|^2
=|e^{-i2\pi ud}|^2|G_0|^2
=|G_0|^2\propto I_0(x).
\tag*{[6]}
\\]

The intensity pattern stays centred because Fraunhofer position labels outgoing angle, not an image of aperture position. The phase in [5] remains observable if this field later interferes with a reference field. In Fresnel propagation, translation changes the quadratic phase geometry and generally shifts the near-field pattern.

<PhysicsExamples collapsible
  items={[
    {
      title: "Phase from a displaced slit",
      question: "A slit is displaced by \\(d=0.50\\,\\mathrm{mm}\\). At wavelength \\(\\lambda=500\\,\\mathrm{nm}\\), propagation distance \\(z=1.0\\,\\mathrm{m}\\), and observation coordinate \\(x=1.0\\,\\mathrm{mm}\\), find the phase factor relative to a centred slit.",
      answer: "Equation \\([5]\\) gives \\[\\phi_d=-\\frac{2\\pi(1.0\\times10^{-3})(0.50\\times10^{-3})}{(500\\times10^{-9})(1.0)}=-2\\pi.\\] Therefore \\(e^{i\\phi_d}=e^{-i2\\pi}=1\\), and equation \\([6]\\) also gives unchanged intensity. **Final result:** the relative phase factor at this point is \\(1\\), corresponding to a phase of \\(-2\\pi\\), and the intensity equals that of the centred slit.",
    },
    {
      title: "Can a detector locate one displaced slit?",
      question: "An intensity-only detector records the ideal Fraunhofer pattern of one isolated slit. Can it infer the slit displacement \\(d\\) from that pattern alone?",
      answer: "Equation \\([4]\\) stores \\(d\\) only in the phase \\(e^{-i2\\pi ud}\\). Equation \\([6]\\) removes that phase when the modulus squared is taken. Without a phase reference, every displacement produces the same ideal far-field intensity. **Final result:** no; intensity-only Fraunhofer data from one isolated slit cannot determine \\(d\\), although interferometric phase data can.",
    },
  ]}
/>
`;
