export const content = String.raw`## Principle

The Fraunhofer transform of a uniformly illuminated circular aperture is a jinc field. Its squared magnitude is the Airy pattern, whose first dark ring and central width are fixed by zeros and half-maximum points of the first-order Bessel function.

## Notation

<Notation
  items={[
    { symbol: "\\rho',\\phi'", meaning: "polar coordinates in the aperture plane", unit: "m, rad" },
    { symbol: "\\rho,z", meaning: "observation-plane radius and propagation distance", unit: "m, m" },
    { symbol: "R,D=2R", meaning: "aperture radius and diameter", unit: "m, m" },
    { symbol: "w=\\sqrt{u^2+v^2}=\\rho/(\\lambda z)", meaning: "radial spatial frequency", unit: "m^{-1}" },
    { symbol: "q=\\pi Dw", meaning: "dimensionless Airy argument" },
    { symbol: "s", meaning: "dimensionless radial integration variable" },
    { symbol: "J_0,J_1", meaning: "Bessel functions of the first kind of orders zero and one" },
    { symbol: "f_A,F_A", meaning: "circular-aperture function and its unnormalised transform", unit: "1, m^{2}" },
    { symbol: "q_1,\\rho_1,\\theta_1", meaning: "first positive J_1 zero and first dark-ring radial and angular positions", unit: "1, m, rad" },
    { symbol: "\\lambda", meaning: "wavelength", unit: "m" },
    { symbol: "I(0),I(\\rho)", meaning: "central and radial intensities", unit: "W m^{-2}, W m^{-2}" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

The circular opening produces a bright central disc surrounded by progressively weaker rings. The first dark ring provides the cleanest diffraction scale.

<PhysicsDiagram slug="airy-pattern-resolution" />

For a clear disk, \\(f_A=1\\) for \\(0\leq\rho'\leq R\\). Choose the Fourier polar axis along the vector \\((u,v)\\), so the transform is

\\[
F_A(w)=\int_0^R\int_0^{2\pi}
e^{-i2\pi w\rho'\cos\phi'}\rho'\,d\phi'\,d\rho'.
\tag*{[1]}
\\]

Use the angular identity \\(\int_0^{2\pi}e^{-is\cos\phi'}d\phi'=2\pi J_0(s)\\):

\\[
F_A(w)=2\pi\int_0^R J_0(2\pi w\rho')\rho'\,d\rho'.
\tag*{[2]}
\\]

Set \\(s=2\pi w\rho'\\), so \\(\rho'd\rho'=sds/(2\pi w)^2\\), and use \\(\int_0^q sJ_0(s)ds=qJ_1(q)\\):

\\[
F_A(w)=\frac{2\pi}{(2\pi w)^2}
\int_0^{2\pi wR}sJ_0(s)ds
=\frac{R}{w}J_1(2\pi wR).
\tag*{[3]}
\\]

Since \\(D=2R\\), \\(q=\pi Dw\\), and the aperture area is \\(\pi D^2/4\\), equation [3] becomes

\\[
F_A(w)=\frac{\pi D^2}{4}\frac{2J_1(q)}{q}.
\tag*{[4]}
\\]

Normalising by \\(F_A(0)=\pi D^2/4\\) gives the Airy pattern

\\[
\frac{I(\rho)}{I(0)}
=\left[\frac{2J_1(q)}{q}\right]^2,
\qquad
q=\frac{\pi D\rho}{\lambda z}.
\tag*{[5]}
\\]

The first positive zero of \\(J_1\\) is \\(q_1=3.8317\\), so

\\[
\rho_1=\frac{3.8317}{\pi}\frac{\lambda z}{D}
=1.22\frac{\lambda z}{D},
\qquad
\theta_1=1.22\frac{\lambda}{D}.
\tag*{[6]}
\\]

The Airy-disk diameter between opposite first zeros is \\(2.44\lambda z/D\\). Solving [5] at half maximum gives radius \\(0.514\lambda z/D\\), hence intensity FWHM \\(1.03\lambda z/D\\). These constants describe different widths and must not be interchanged.

<PhysicsExamples collapsible
  items={[
    {
      title: "Airy disk in a focal plane",
      question: "A lens has clear diameter \\(D=20\\,\\mathrm{mm}\\), focal length \\(f=0.50\\,\\mathrm{m}\\), and wavelength \\(\\lambda=550\\,\\mathrm{nm}\\). Find the first-dark-ring radius and Airy-disk diameter in its focal plane.",
      answer: "Use equation \\([6]\\) with \\(z=f\\): \\[\\rho_1=1.22\\frac{(550\\times10^{-9})(0.50)}{20\\times10^{-3}}=1.68\\times10^{-5}\\,\\mathrm m.\\] The Airy-disk diameter is twice this value: \\[2\\rho_1=3.36\\times10^{-5}\\,\\mathrm m.\\] **Final result:** the first dark ring is at \\(16.8\\,\\mathrm{\\mu m}\\), and the Airy-disk diameter is \\(33.6\\,\\mathrm{\\mu m}\\).",
    },
    {
      title: "Distinguishing Airy width conventions",
      question: "State the full first-zero diameter and intensity FWHM for the same circular aperture and explain which is larger.",
      answer: "The derivation gives full first-zero diameter \\(2.44\\lambda z/D\\). The half-maximum points give full width \\(1.03\\lambda z/D\\). Their ratio is \\(2.44/1.03\\approx2.37\\), because half maximum occurs well inside the first dark ring. **Final result:** the first-zero diameter is \\(2.44\\lambda z/D\\), while the intensity FWHM is about \\(1.03\\lambda z/D\\); the former is 2.37 times larger.",
    },
  ]}
/>
`;
