export const content = String.raw`## Principle

In the paraxial region, the distance from a source point to an observation point is an axial distance plus a quadratic transverse correction. Keeping that correction in phase produces the Fresnel spherical-wave form.

## Notation

<Notation
  items={[
    { symbol: "(x',y',0),(x,y,z)", meaning: "source-plane and observation-point coordinates", unit: "m, m" },
    { symbol: "\\rho", meaning: "transverse source-to-observation separation", unit: "m" },
    { symbol: "r,r_p", meaning: "exact and paraxial propagation distances", unit: "m, m" },
    { symbol: "E_s,\\widetilde U", meaning: "constant amplitude scale and complex spatial field", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "k,\\lambda,z", meaning: "wavenumber, wavelength, and positive axial distance", unit: "m^{-1}, m, m" },
    { symbol: "\\Delta\\phi", meaning: "phase error", unit: "rad" },
    { symbol: "i,u", meaning: "imaginary unit and dimensionless binomial-expansion variable" },
  ]}
/>

## The Core Method

The transverse and exact source-to-observation distances are

\\[
\rho^2=(x-x')^2+(y-y')^2,
\qquad
r=\sqrt{z^2+\rho^2}=z\sqrt{1+\frac{\rho^2}{z^2}}.
\tag*{[1]}
\\]

For \\(\rho/z\ll1\\), use \\((1+u)^{1/2}=1+u/2-u^2/8+\cdots\\):

\\[
r=z+\frac{\rho^2}{2z}-\frac{\rho^4}{8z^3}+\cdots
\simeq z+\frac{\rho^2}{2z}
\equiv r_p.
\tag*{[2]}
\\]

An outgoing scalar spherical wave has spatial factor \\(E_s(ikr)^{-1}e^{ikr}\\). Amplitude varies slowly, so set \\(1/r\simeq1/z\\), but phase varies on the wavelength scale, so retain the quadratic term in \\(kr_p\\):

\\[
\widetilde U(x,y,z)
\simeq\frac{E_s}{ikz}e^{ikr_p}
=\frac{E_s}{ikz}e^{ikz}
\exp\left(i\frac{k\rho^2}{2z}\right).
\tag*{[3]}
\\]

The relative amplitude correction from replacing \\(r_p\\) by \\(z\\) follows from expanding the reciprocal:

\\[
\frac{1}{r_p}
=\frac{1}{z}\left(1+\frac{\rho^2}{2z^2}\right)^{-1}
\simeq\frac{1}{z}\left(1-\frac{\rho^2}{2z^2}\right).
\tag*{[4]}
\\]

By contrast, dropping the quadratic distance from phase would create

\\[
\Delta\phi=k(r_p-z)=\frac{k\rho^2}{2z}
=\frac{\pi\rho^2}{\lambda z}.
\tag*{[5]}
\\]

Because \\(z\gg\lambda\\) in optical propagation, the phase correction can be significant even when the relative amplitude correction \\(\rho^2/(2z^2)\\) is tiny. The first omitted distance term gives phase magnitude \\(k\rho^4/(8z^3)\\); Fresnel accuracy requires that quantity to be much less than one radian over the region used.

<PhysicsExamples collapsible
  items={[
    {
      title: "Fresnel path and phase correction",
      question: "For \\(z=1.00\\,\\mathrm m\\), transverse separation \\(\\rho=2.00\\,\\mathrm{mm}\\), and wavelength \\(500\\,\\mathrm{nm}\\), find \\(r_p-z\\) and the associated phase correction.",
      answer: "Equation \\([2]\\) gives \\(r_p-z=\\rho^2/(2z)=(2.00\\times10^{-3})^2/[2(1.00)]=2.00\\times10^{-6}\\,\\mathrm m\\). Equation \\([5]\\) then gives \\(\\Delta\\phi=2\\pi(r_p-z)/\\lambda=2\\pi(2.00\\times10^{-6})/(5.00\\times10^{-7})=8\\pi\\,\\mathrm{rad}\\). **Final result:** the path correction is \\(2.00\\,\\mathrm{\\mu m}\\) and the phase correction is \\(8\\pi\\,\\mathrm{rad}\\), despite \\(\\rho/z=0.002\\).",
    },
    {
      title: "Why amplitude and phase use different truncations",
      question: "Using the geometry above, compare the relative amplitude correction with the phase measured in cycles.",
      answer: "Equation \\([4]\\) gives relative amplitude correction \\(\\rho^2/(2z^2)=(2.00\\times10^{-3})^2/2=2.00\\times10^{-6}\\). Equation \\([5]\\) gives phase cycles \\(\\Delta\\phi/(2\\pi)=\\rho^2/(2\\lambda z)=4.00\\). The same distance correction is negligible relative to the metre-scale amplitude denominator but not relative to a sub-micrometre wavelength. **Final result:** the amplitude correction is \\(2.0\\times10^{-6}\\), while the retained phase correction is \\(4.0\\) full cycles.",
    },
  ]}
/>
`;
