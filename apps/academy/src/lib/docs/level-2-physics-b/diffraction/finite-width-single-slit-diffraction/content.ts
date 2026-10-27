export const content = String.raw`## Principle

A finite-width slit is a continuum of coherent sources. In the Fraunhofer regime their phases vary linearly across the slit, producing a sinc field and a sinc-squared intensity. Narrowing the slit broadens the angular pattern.

## Notation

<Notation
  items={[
    { symbol: "x'", meaning: "coordinate across the slit in the aperture plane", unit: "m" },
    { symbol: "x,z", meaning: "transverse observation coordinate and propagation distance", unit: "m, m" },
    { symbol: "a", meaning: "slit width in x'", unit: "m" },
    { symbol: "g(x')=\\operatorname{rect}(x'/a)", meaning: "single-slit aperture function" },
    { symbol: "G(u)", meaning: "unnormalised single-slit Fourier transform", unit: "m" },
    { symbol: "u=x/(\\lambda z)", meaning: "observation spatial frequency", unit: "m^{-1}" },
    { symbol: "\\theta", meaning: "small observation angle, \\theta\\approx x/z", unit: "rad" },
    { symbol: "\\lambda,k", meaning: "wavelength and wavenumber k=2\\pi/\\lambda", unit: "m, m^{-1}" },
    { symbol: "\\operatorname{sinc}(q)", meaning: "unnormalised sinc function sin(q)/q" },
    { symbol: "I(0),I(x)", meaning: "on-axis and position-dependent intensities", unit: "W m^{-2}, W m^{-2}" },
    { symbol: "m", meaning: "nonzero integer diffraction order" },
    { symbol: "W", meaning: "full central-lobe width", unit: "m" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

The slit geometry and its pattern are reciprocal: a finite width in the aperture produces a sinc-squared spread, with the central lobe bounded by the first pair of zeros.

<PhysicsDiagram slug="single-slit-fraunhofer-pattern" />

For a slit centred at the origin,

\\[
g(x')=\operatorname{rect}\!\left(\frac{x'}{a}\right)
=\begin{cases}1,&|x'|\leq a/2,\\0,&|x'|>a/2.\end{cases}
\tag*{[1]}
\\]

The one-dimensional Fraunhofer amplitude factor is its unnormalised Fourier transform:

\\[
G(u)=\int_{-a/2}^{a/2}e^{-i2\pi ux'}dx'.
\tag*{[2]}
\\]

Integrate the exponential and evaluate both limits:

\\[
G(u)=\left[\frac{e^{-i2\pi ux'}}{-i2\pi u}\right]_{-a/2}^{a/2}
=\frac{e^{-i\pi au}-e^{i\pi au}}{-i2\pi u}.
\tag*{[3]}
\\]

Using \\(e^{iq}-e^{-iq}=2i\sin q\\) gives

\\[
G(u)=\frac{\sin(\pi au)}{\pi u}
=a\operatorname{sinc}(\pi au).
\tag*{[4]}
\\]

Since \\(G(0)=a\\), normalising intensity to its central value avoids the nonphysical infinite-length slit prefactor:

\\[
\frac{I(x)}{I(0)}
=\left|\frac{G(x/(\lambda z))}{G(0)}\right|^2
=\operatorname{sinc}^2\!\left(\frac{\pi ax}{\lambda z}\right).
\tag*{[5]}
\\]

Zeros occur when the sine numerator vanishes while its argument is nonzero:

\\[
x_m=\frac{m\lambda z}{a},
\qquad
\sin\theta_m\approx\theta_m=\frac{m\lambda}{a},
\qquad m=\pm1,\pm2,\ldots
\tag*{[6]}
\\]

The angular half-width from the axis to the first zero is \\(\lambda/a\\); the full central-lobe width between first zeros is \\(2\lambda z/a\\). Confusing these two width definitions introduces a factor-of-two error.

<PhysicsExamples collapsible
  items={[
    {
      title: "Single-slit central-lobe width",
      question: "Light of wavelength \\(\\lambda=600\\,\\mathrm{nm}\\) passes through a slit of width \\(a=0.20\\,\\mathrm{mm}\\) and reaches a screen at \\(z=2.0\\,\\mathrm{m}\\). Find the first-zero positions and full central-lobe width.",
      answer: "Equation \\([6]\\) with \\(m=\\pm1\\) gives \\[x_{\\pm1}=\\pm\\frac{(600\\times10^{-9}\\,\\mathrm m)(2.0\\,\\mathrm m)}{0.20\\times10^{-3}\\,\\mathrm m}=\\pm6.0\\times10^{-3}\\,\\mathrm m.\\] The full width is the separation between these zeros: \\[W=x_{+1}-x_{-1}=12\\times10^{-3}\\,\\mathrm m.\\] **Final result:** the first zeros are at \\(x=\\pm6.0\\,\\mathrm{mm}\\), and the full central-lobe width is \\(12\\,\\mathrm{mm}\\).",
    },
    {
      title: "Intensity halfway to the first zero",
      question: "Find \\(\\frac{I(x)}{I(0)}\\) at \\(x=\\frac{\\lambda z}{2a}\\).",
      answer: "Substitution into equation \\([5]\\) gives the argument \\(\\pi ax/(\\lambda z)=\\pi/2\\). Therefore \\[\\frac{I}{I(0)}=\\left(\\frac{\\sin(\\pi/2)}{\\pi/2}\\right)^2=\\frac{4}{\\pi^2}=0.405.\\] This point is halfway in position, not at half maximum. **Final result:** \\(I/I(0)=4/\\pi^2\\approx0.405\\).",
    },
  ]}
/>
`;
