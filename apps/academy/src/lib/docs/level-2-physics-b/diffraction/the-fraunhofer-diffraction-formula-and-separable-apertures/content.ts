export const content = String.raw`## Principle

Fraunhofer diffraction maps transverse position in the observation plane to spatial frequency in the aperture plane. A Cartesian-separable aperture produces a product field and a product intensity, so each aperture dimension controls diffraction in its corresponding observation direction.

## Notation

<Notation
  items={[
    { symbol: "x',y'", meaning: "aperture-plane coordinates", unit: "m, m" },
    { symbol: "x,y,z", meaning: "observation coordinates and effective propagation distance", unit: "m, m, m" },
    { symbol: "U_A=A_0g(x')h(y'),U_F", meaning: "separable aperture-plane field and Fraunhofer field" },
    { symbol: "u=x/(\\lambda z),v=y/(\\lambda z)", meaning: "observation spatial frequencies", unit: "m^{-1}, m^{-1}" },
    { symbol: "G,H", meaning: "one-dimensional unnormalised Fourier transforms of g and h", unit: "m, m" },
    { symbol: "a,b", meaning: "example aperture widths along x' and y'", unit: "m, m" },
    { symbol: "q", meaning: "dimensionless sinc-function argument" },
    { symbol: "\\lambda,k", meaning: "wavelength and wavenumber k=2\\pi/\\lambda", unit: "m, m^{-1}" },
    { symbol: "I,I_0", meaning: "observed intensity and incident intensity |A_0|^2", unit: "W m^{-2}, W m^{-2}" },
    { symbol: "f", meaning: "lens focal length when observing in a back focal plane", unit: "m" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

The rectangular example makes separability visible: the two aperture dimensions control two independent far-field widths.

<PhysicsDiagram slug="rectangular-aperture-transform" />

For either free-space far-field propagation or a lens focal plane, use \\(z\\) as the effective transform distance, replacing \\(z\\) by \\(f\\) in the lens case. The field is

\\[
U_F(x,y;z)=\frac{e^{ikz}e^{ik(x^2+y^2)/(2z)}}{i\lambda z}
\iint U_A(x',y')e^{-i2\pi(ux'+vy')}dx'\,dy'.
\tag*{[1]}
\\]

With \\(U_A=A_0g(x')h(y')\\), split the exponential and regroup the integrals:

\\[
U_F=\frac{A_0e^{ikz}e^{ik(x^2+y^2)/(2z)}}{i\lambda z}
\left[\int g(x')e^{-i2\pi ux'}dx'\right]
\left[\int h(y')e^{-i2\pi vy'}dy'\right].
\tag*{[2]}
\\]

Define the section-wide unnormalised one-dimensional transforms

\\[
G(u)=\int_{-\infty}^{\infty}g(x')e^{-i2\pi ux'}dx',
\qquad
H(v)=\int_{-\infty}^{\infty}h(y')e^{-i2\pi vy'}dy'.
\tag*{[3]}
\\]

Then the field and intensity are

\\[
U_F=\frac{A_0e^{ikz}e^{ik(x^2+y^2)/(2z)}}{i\lambda z}G(u)H(v),
\tag*{[4]}
\\]

\\[
I(x,y;z)=\frac{I_0}{(\lambda z)^2}
|G(x/(\lambda z))|^2|H(y/(\lambda z))|^2.
\tag*{[5]}
\\]

Equation [5] applies to finite two-dimensional apertures. An ideal slit infinite in \\(y'\\) gives a delta distribution in \\(v\\), so quoting a finite two-dimensional power prefactor for it is inappropriate; its physically relevant cross-section is instead normalised to its on-axis value. Separability concerns the complex aperture-plane field, not only the outline of the stop.

<PhysicsExamples collapsible
  items={[
    {
      title: "Predict independent first-zero scales",
      question: "A separable aperture has \\(G(u)=a\\,\\operatorname{sinc}(\\pi a u)\\) and \\(H(v)=b\\,\\operatorname{sinc}(\\pi b v)\\). Find the first positive zero positions in an observation plane at propagation distance \\(z\\).",
      answer: "Using \\(\\operatorname{sinc}(q)=\\sin q/q\\), the first zero of \\(G\\) obeys \\(\\pi a u=\\pi\\), so \\(u=1/a\\). Since \\(u=x/(\\lambda z)\\), \\[x_1=\\frac{\\lambda z}{a}.\\] Likewise, \\(v=1/b\\) and \\[y_1=\\frac{\\lambda z}{b}.\\] **Final result:** the first positive zeros are \\(x_1=\\lambda z/a\\) and \\(y_1=\\lambda z/b\\); each aperture width controls the same coordinate in the pattern.",
    },
    {
      title: "Rotate versus widen a separable aperture",
      question: "A rectangular aperture is wider in \\(x'\\) than in \\(y'\\). Which direction has the narrower central diffraction feature, and why?",
      answer: "Equation \\([5]\\) separates the two directions. A wider \\(x'\\) factor has a transform \\(G(u)\\) compressed in \\(u\\), whereas the narrower \\(y'\\) factor has a broader \\(H(v)\\). Since \\(x=\\lambda z u\\) and \\(y=\\lambda z v\\), the same inverse scaling appears in the observation plane. **Final result:** the diffraction feature is narrower along \\(x\\), the direction corresponding to the wider aperture dimension \\(x'\\).",
    },
  ]}
/>
`;
