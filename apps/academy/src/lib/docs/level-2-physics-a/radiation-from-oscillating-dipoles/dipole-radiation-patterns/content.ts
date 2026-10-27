export const content = String.raw`## Principle

A short straight antenna radiates strongly sideways but sends no radiation directly along its own axis.

Dipole radiation is strongest perpendicular to the dipole axis and vanishes on the axis. The far-field amplitude varies as \\(\sin\theta\\), so power per unit area and power per unit solid angle vary as \\(\sin^2\theta\\).

## Notation

<Notation
  items={[
    { symbol: "\\vec p,p_0,\\ddot p", meaning: "dipole moment, its peak magnitude, and the second derivative of its z component", unit: "C m, C m, A m s^{-1}" },
    { symbol: "\\vec E_{\\mathrm{far}},E_\\theta", meaning: "far electric field and its polar component", unit: "V m^{-1}" },
    { symbol: "\\vec B_{\\mathrm{far}},B_\\phi", meaning: "far magnetic field and its azimuthal component", unit: "T" },
    { symbol: "\\vec S,\\langle\\vec S\\rangle", meaning: "instantaneous and time-averaged Poynting vectors", unit: "W m^{-2}" },
    { symbol: "r,\\theta,\\phi", meaning: "radius, polar angle from the dipole axis, and azimuth", unit: "m, rad, rad" },
    { symbol: "t_r", meaning: "retarded time equal to t-r/c", unit: "s" },
    { symbol: "\\omega", meaning: "angular frequency", unit: "rad s^{-1}" },
    { symbol: "c,\\epsilon_0,\\mu_0", meaning: "vacuum wave speed, permittivity, and permeability", unit: "m s^{-1}, F m^{-1}, H m^{-1}" },
    { symbol: "\\Omega,\\mathrm d\\Omega", meaning: "solid angle and differential solid angle", unit: "sr, sr" },
    { symbol: "\\mathrm dA", meaning: "area element normal to the radial direction", unit: "m^{2}" },
    { symbol: "\\mathrm dP/\\mathrm d\\Omega", meaning: "time-averaged power per unit solid angle", unit: "W sr^{-1}" },
    { symbol: "\\hat{\\vec r},\\hat{\\vec\\theta},\\hat{\\vec\\phi},\\hat{\\vec z}", meaning: "spherical and dipole-axis unit vectors" },
  ]}
/>

## The Core Method

For \\(\vec p(t)=p_0\cos(\omega t)\hat{\vec z}\\), the retarded acceleration is \\(\ddot p(t_r)=-\omega^2p_0\cos(\omega t_r)\\). Substitution into the far-zone fields gives

\\[
\boxed{
E_\theta
=-\frac{p_0\omega^2}{4\pi\epsilon_0c^2r}
\sin\theta\cos(\omega t_r),
\qquad
B_\phi=\frac{E_\theta}{c}
}.
\tag*{[1]}
\\]

<PhysicsDiagram slug="dipole-far-field-directions" />

On a sphere centred on the dipole, \\(\vec E\\) follows the polar direction and \\(\vec B\\) follows the azimuthal direction. Their cross product is radial, so energy crosses every far-zone sphere outwards.

The fields are in phase and transverse. Since \\(\hat{\vec\theta}\times\hat{\vec\phi}=\hat{\vec r}\\), the instantaneous Poynting vector is

\\[
\vec S=\frac{1}{\mu_0}\vec E\times\vec B
=\frac{E_\theta^2}{\mu_0c}\hat{\vec r}
=\epsilon_0cE_\theta^2\hat{\vec r}.
\tag*{[2]}
\\]

Average over one period. Because the field amplitudes are peak amplitudes, \\(\langle\cos^2(\omega t_r)\rangle=1/2\\), so

\\[
\boxed{
\langle\vec S(r,\theta)\rangle
=\frac{p_0^2\omega^4}{32\pi^2\epsilon_0c^3r^2}
\sin^2\theta\,\hat{\vec r}
}.
\tag*{[3]}
\\]

The area of a small patch on a sphere is the product of its polar and azimuthal side lengths, \\(r\,\mathrm d\theta\\) and \\(r\sin\theta\,\mathrm d\phi\\). Therefore

\\[
\mathrm dA=r^2\sin\theta\,\mathrm d\theta\,\mathrm d\phi,
\qquad
\mathrm d\Omega=\frac{\mathrm dA}{r^2}
=\sin\theta\,\mathrm d\theta\,\mathrm d\phi.
\tag*{[4]}
\\]

Multiplying equation [3] by \\(r^2\\) gives the power per unit solid angle:

\\[
\boxed{
\frac{\mathrm dP}{\mathrm d\Omega}
=r^2\langle S\rangle
=\frac{p_0^2\omega^4}{32\pi^2\epsilon_0c^3}\sin^2\theta
}.
\tag*{[5]}
\\]

The factor \\(r^2\\) cancels the inverse-square intensity, expressing conservation of outward power through larger spheres. Normalising by the broadside maximum gives

\\[
\frac{\mathrm dP/\mathrm d\Omega}
{(\mathrm dP/\mathrm d\Omega)_{\max}}
=\sin^2\theta.
\tag*{[6]}
\\]

The same normalized pattern can be read in Cartesian and polar forms.

<CartesianGrid
  className="mx-auto max-w-xl"
  height={340}
  width={560}
  title="Normalized dipole power against polar angle"
  caption="The normalized radiated power follows sin²θ: zero on the dipole axis and maximal broadside."
  xRange={{ min: 0, max: 180, step: 30, label: "polar angle θ (degrees)" }}
  yRange={{ min: 0, max: 1.2, step: 0.2, label: "normalized radiated power" }}
>
  <Curve
    color="var(--foreground)"
    points={Array.from({ length: 181 }, (_, angleDegrees) => ({
      x: angleDegrees,
      y: Math.sin((angleDegrees * Math.PI) / 180) ** 2,
    }))}
    smooth
  />
  <Annotation point={{ x: 0, y: 0 }} label="axis: zero" offset={{ x: 24, y: -18 }} />
  <Annotation point={{ x: 90, y: 1 }} label="broadside maximum" offset={{ x: 22, y: -20 }} />
  <Annotation point={{ x: 180, y: 0 }} label="axis: zero" offset={{ x: -72, y: -40 }} />
</CartesianGrid>

<PhysicsDiagram slug="dipole-polar-radiation-pattern" />

The polar curve encodes power as radial distance. Its broadside radius is \\(P_{\max}\\), while the \\(45^\circ\\) and \\(135^\circ\\) directions have half that radial value and define the half-power width in this cross-section.

The pattern is independent of \\(\phi\\): it is zero at \\(\theta=0,\pi\\), maximal at \\(\theta=\pi/2\\), and forms a torus around the dipole axis. A polar cross-section looks like two lobes, but the three-dimensional pattern is not two isolated beams.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Comparing radiation at two angles",
      question: "At fixed radius, compare the time-averaged intensity at \\(\\theta=30^\\circ\\) with the broadside intensity at \\(\\theta=90^\\circ\\).",
      answer: "All source and distance factors cancel in the ratio, leaving only equation [6]: \\[\\frac{\\langle S(30^\\circ)\\rangle}{\\langle S(90^\\circ)\\rangle}=\\frac{\\sin^2 30^\\circ}{\\sin^2 90^\\circ}=\\frac{(1/2)^2}{1^2}=\\frac14.\\] **Final result:** the intensity at \\(30^\\circ\\) is \\(0.25\\) of the broadside intensity. Using \\(\\sin\\theta\\) instead would compare field amplitudes rather than powers.",
    },
    {
      title: "Finding the half-power directions",
      question: "Find the polar angles at which the dipole's power per unit solid angle is half its maximum value.",
      answer: "Set the normalised pattern in equation [6] equal to one half: \\[\\sin^2\\theta=\\frac12.\\] For \\(0\\leq\\theta\\leq\\pi\\), \\(\\sin\\theta\\) is nonnegative, so \\[\\sin\\theta=\\frac{1}{\\sqrt2},\\qquad \\theta=\\frac{\\pi}{4},\\frac{3\\pi}{4}.\\] **Final result:** the half-power directions are \\(45^\\circ\\) and \\(135^\\circ\\) from the \\(+z\\) dipole axis. They lie \\(45^\\circ\\) on either side of the broadside direction.",
    },
  ]}
/>
`;
