export const content = String.raw`## Principle

Localized sources produce curved wavefronts. Geometric spreading makes a spherical-wave amplitude fall as the inverse distance and a cylindrical-wave amplitude fall as the inverse square root of distance.

## Notation

<Notation
  items={[
    { symbol: "U_s,U_c", meaning: "real scalar spherical and cylindrical fields", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "E_s,E_c", meaning: "constant spherical and cylindrical amplitude scales", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "r,\\rho", meaning: "distance from a point source and perpendicular distance from a line source", unit: "m, m" },
    { symbol: "k,\\omega,t,\\phi_0", meaning: "wavenumber, angular frequency, time, and phase offset", unit: "m^{-1}, rad s^{-1}, s, rad" },
    { symbol: "I,P,L", meaning: "intensity, conserved power, and illuminated line-source length", unit: "W m^{-2}, W, m" },
    { symbol: "\\lambda,i,\\operatorname{Re}", meaning: "wavelength, imaginary unit, and real-part operation", unit: "m, 1, 1" },
  ]}
/>

## The Core Method

For an outgoing scalar spherical wave outside its source, use the harmonic convention

\\[
U_s(r,t)=\operatorname{Re}\left\{\frac{E_s}{ikr}e^{i(kr-\omega t+\phi_0)}\right\},
\qquad r\gg\lambda.
\tag*{[1]}
\\]

The factor \\(1/i=e^{-i\pi/2}\\) is a constant phase choice, and \\(1/k\\) keeps \\(E_s\\) and \\(U_s\\) in the same units. The radial factor follows from conservation of power. A sphere has area \\(4\pi r^2\\), so

\\[
P=4\pi r^2I(r)=\text{constant}
\quad\Longrightarrow\quad
I(r)\propto\frac{1}{r^2}.
\tag*{[2]}
\\]

Since intensity is proportional to amplitude squared,

\\[
|U_s|\propto\sqrt{I}\propto\frac{1}{r}.
\tag*{[3]}
\\]

An ideal line source has cylindrical wavefronts. A cylinder of length \\(L\\) has lateral area \\(2\pi\rho L\\), so

\\[
P=2\pi\rho L I(\rho)=\text{constant}
\quad\Longrightarrow\quad
I(\rho)\propto\frac{1}{\rho},
\qquad
|U_c|\propto\frac{1}{\sqrt{\rho}}.
\tag*{[4]}
\\]

Far from the line source, an outgoing cylindrical wave can therefore be written in asymptotic form as

\\[
U_c(\rho,t)\simeq
\operatorname{Re}\left\{\frac{E_c}{\sqrt{k\rho}}
e^{i(k\rho-\omega t-\pi/4+\phi_0)}\right\},
\qquad \rho\gg\lambda.
\tag*{[5]}
\\]

The spherical scalar field is not a globally exact vector electromagnetic field because a nonzero transverse vector cannot remain spherically symmetric everywhere. These scalar forms are accurate wave-optics models away from sources and singular axes when polarisation changes are negligible.

<PhysicsExamples collapsible
  items={[
    {
      title: "Spherical spreading",
      question: "A point source produces intensity \\(80\\,\\mathrm{W\\,m^{-2}}\\) at \\(r=2.0\\,\\mathrm m\\). Find the intensity and amplitude ratio at \\(r=5.0\\,\\mathrm m\\).",
      answer: "Equation \\([2]\\) gives \\(I_2/I_1=(r_1/r_2)^2\\). Thus \\(I_2=80(2.0/5.0)^2=12.8\\,\\mathrm{W\\,m^{-2}}\\). Equation \\([3]\\) gives the field-amplitude ratio directly: \\(|U_2|/|U_1|=r_1/r_2=0.40\\). **Final result:** \\(I(5.0\\,\\mathrm m)=12.8\\,\\mathrm{W\\,m^{-2}}\\) and the amplitude is \\(0.40\\) of its value at \\(2.0\\,\\mathrm m\\).",
    },
    {
      title: "Comparing cylindrical and spherical spreading",
      question: "If distance from a source doubles, how do spherical- and cylindrical-wave intensities change?",
      answer: "For spherical spreading, equation \\([2]\\) gives \\(I(2r)/I(r)=r^2/(2r)^2=1/4\\). For cylindrical spreading, equation \\([4]\\) gives \\(I(2\\rho)/I(\\rho)=\\rho/(2\\rho)=1/2\\). The cylindrical wave spreads over an area growing linearly rather than quadratically with distance. **Final result:** doubling distance reduces spherical intensity to one quarter and cylindrical intensity to one half.",
    },
  ]}
/>
`;
