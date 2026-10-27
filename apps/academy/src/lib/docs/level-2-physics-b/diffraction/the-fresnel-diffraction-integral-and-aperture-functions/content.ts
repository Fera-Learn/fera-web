export const content = String.raw`## Principle

The Fresnel diffraction integral propagates a complex field between two parallel planes while retaining the quadratic path phase. An aperture function belongs to the input plane: it multiplies the incident field before propagation and may describe both attenuation and phase delay.

## Notation

<Notation
  items={[
    { symbol: "x',y',\\rho'", meaning: "aperture coordinates and radius \\rho'=\\sqrt{x'^2+y'^2}", unit: "m, m, m" },
    { symbol: "x,y,\\rho", meaning: "observation coordinates and radius \\rho=\\sqrt{x^2+y^2}", unit: "m, m, m" },
    { symbol: "z", meaning: "distance from aperture plane to observation plane", unit: "m" },
    { symbol: "r", meaning: "exact source-to-observation distance", unit: "m" },
    { symbol: "s", meaning: "transverse source-observation separation in the path check", unit: "m" },
    { symbol: "\\epsilon", meaning: "dimensionless binomial-expansion parameter" },
    { symbol: "\\Delta r_2,\\Delta r_4", meaning: "quadratic path correction and next omitted correction", unit: "m, m" },
    { symbol: "U_{\\mathrm{in}},U_A,U", meaning: "incident, post-aperture, and propagated complex fields" },
    { symbol: "t(x',y')", meaning: "complex amplitude transmission function" },
    { symbol: "\\lambda,k", meaning: "wavelength and wavenumber k=2\\pi/\\lambda", unit: "m, m^{-1}" },
    { symbol: "\\omega,t", meaning: "angular frequency and time", unit: "rad s^{-1}, s" },
    { symbol: "I", meaning: "intensity proportional to |U|^2", unit: "W m^{-2}" },
    { symbol: "i", meaning: "imaginary unit, i^2=-1" },
  ]}
/>

## The Core Method

Choose one point in the aperture and one point in the observation plane. Their transverse separation and axial distance determine the optical path whose phase appears in the propagation kernel.

<PhysicsDiagram slug="fresnel-aperture-propagation" />

Use \\(e^{i(kz-\omega t)}\\), put the aperture in \\(z=0\\), and reserve primed coordinates for that plane. The post-aperture field is

\\[
U_A(x',y')=t(x',y')U_{\mathrm{in}}(x',y').
\tag*{[1]}
\\]

For an observation point \\((x,y,z)\\), geometry gives

\\[
r=\sqrt{z^2+(x-x')^2+(y-y')^2}
=z\sqrt{1+\frac{(x-x')^2+(y-y')^2}{z^2}}.
\tag*{[2]}
\\]

In the paraxial regime, the transverse separation is much smaller than \\(z\\). Expanding \\(\sqrt{1+\epsilon}\approx1+\epsilon/2\\) gives

\\[
r\approx z+\frac{(x-x')^2+(y-y')^2}{2z},
\qquad
\frac{1}{r}\approx\frac{1}{z}.
\tag*{[3]}
\\]

Substitution into the Huygens-Fresnel propagation law, with the plane-wave normalisation fixed by propagation through an infinite open plane, produces

\\[
U(x,y;z)=\frac{e^{ikz}}{i\lambda z}
\iint_{-\infty}^{\infty}U_A(x',y')
\exp\!\left[\frac{ik}{2z}\left((x-x')^2+(y-y')^2\right)\right]dx'\,dy'.
\tag*{[4]}
\\]

Expanding the squares separates observation-only, mixed, and aperture-only phases:

\\[
U(x,y;z)=\frac{e^{ikz}e^{ik(x^2+y^2)/(2z)}}{i\lambda z}
\iint U_A(x',y')e^{ik(x'^2+y'^2)/(2z)}
e^{-i2\pi(xx'+yy')/(\lambda z)}dx'\,dy'.
\tag*{[5]}
\\]

Equation [4] is the Fresnel integral; equation [5] displays its structure. A clear opening has \\(t=1\\), an opaque region has \\(t=0\\), and a phase mask can have \\(|t|=1\\) but nonzero argument. Dropping the input-coordinate quadratic phase in [5] is an additional Fraunhofer approximation, not part of the Fresnel approximation itself.

<PhysicsExamples collapsible
  items={[
    {
      title: "Check the Fresnel path approximation",
      question: "An aperture point is \\(2.0\\,\\mathrm{mm}\\) from the projection of an observation point, with propagation distance \\(z=0.50\\,\\mathrm{m}\\). Find the quadratic path correction and compare it with the next binomial term.",
      answer: "Let \\(s=2.0\\times10^{-3}\\,\\mathrm m\\). Equation \\([3]\\) gives \\[\\Delta r_2=\\frac{s^2}{2z}=\\frac{(2.0\\times10^{-3})^2}{2(0.50)}=4.0\\times10^{-6}\\,\\mathrm m.\\] The next term from \\(\\sqrt{1+\\epsilon}=1+\\epsilon/2-\\epsilon^2/8+\\cdots\\) has magnitude \\[\\Delta r_4=\\frac{s^4}{8z^3}=\\frac{(2.0\\times10^{-3})^4}{8(0.50)^3}=1.6\\times10^{-11}\\,\\mathrm m.\\] **Final result:** the retained correction is \\(4.0\\,\\mathrm{\\mu m}\\), while the omitted term is only \\(16\\,\\mathrm{pm}\\), a relative size of \\(4.0\\times10^{-6}\\).",
    },
    {
      title: "Amplitude mask versus phase mask",
      question: "Compare \\(t=\\frac{1}{2}\\) and \\(t=\\mathrm{e}^{i\\frac{\\pi}{2}}\\) at one aperture point for the same incident field.",
      answer: "Equation \\([1]\\) gives \\(U_A=U_{\\mathrm{in}}/2\\) for the amplitude mask, so the local transmitted intensity is \\(|t|^2=1/4\\) of the incident value. For the phase mask, \\(|t|=1\\), so the local intensity is unchanged, but the field gains phase \\(\\pi/2\\). That phase alters interference after equation \\([4]\\) sums all points. **Final result:** \\(t=1/2\\) transmits one quarter of the local intensity, whereas \\(t=e^{i\\pi/2}\\) transmits full local intensity with a quarter-cycle phase delay.",
    },
  ]}
/>
`;
