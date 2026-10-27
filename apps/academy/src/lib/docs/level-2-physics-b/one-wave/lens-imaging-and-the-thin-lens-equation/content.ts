export const content = String.raw`## Principle

Imaging occurs when the lens changes the quadratic phase of a diverging object wave into exactly the quadratic phase of a converging image wave. Matching their signed curvatures gives the thin-lens equation.

## Notation

<Notation
  items={[
    { symbol: "s_1,s_2", meaning: "positive real-object and real-image distances from the lens", unit: "m, m" },
    { symbol: "R_{\\mathrm{in}},R_{\\mathrm{out}}", meaning: "signed incident and outgoing wavefront radii at the lens; positive for diverging and negative for converging", unit: "m, m" },
    { symbol: "f", meaning: "signed focal length; positive for a converging lens", unit: "m" },
    { symbol: "\\rho=(x^2+y^2)^{1/2}", meaning: "transverse radius in the lens plane", unit: "m" },
    { symbol: "z", meaning: "longitudinal optical-axis coordinate", unit: "m" },
    { symbol: "k", meaning: "vacuum wavenumber", unit: "m^{-1}" },
    { symbol: "\\widetilde U_{\\mathrm{in}},\\widetilde U_L,\\widetilde U_{\\mathrm{img}},m", meaning: "incident, post-lens, and required image-wave fields, and transverse magnification", unit: "V m^{-1}, V m^{-1}, V m^{-1}, 1" },
    { symbol: "C_1,C_2,i", meaning: "transverse-coordinate-independent complex constants and imaginary unit", unit: "V m^{-1}, V m^{-1}, 1" },
  ]}
/>

## The Core Method

Adopt the sign convention that a wavefront diverging toward \\(+z\\) has positive radius and one converging toward a point at larger \\(z\\) has negative radius. A real object at \\(z=-s_1\\) produces, at the lens plane \\(z=0\\), the transverse phase

\\[
\widetilde U_{\mathrm{in}}(\rho)
=C_1\exp\left(i\frac{k\rho^2}{2s_1}\right),
\qquad R_{\mathrm{in}}=+s_1,
\tag*{[1]}
\\]

where \\(C_1\\) contains all phase and amplitude factors independent of \\(\rho\\). A thin converging lens multiplies [1] by its transfer phase:

\\[
\widetilde U_L(\rho)
=C_1\exp\left[i\frac{k\rho^2}{2}
\left(\frac{1}{s_1}-\frac{1}{f}\right)\right].
\tag*{[2]}
\\]

To converge to a real image at \\(z=+s_2\\), the field at the lens must have negative curvature phase:

\\[
\widetilde U_{\mathrm{img}}(\rho)
=C_2\exp\left(-i\frac{k\rho^2}{2s_2}\right),
\qquad R_{\mathrm{out}}=-s_2.
\tag*{[3]}
\\]

Continuity across the ideal lens requires the transverse phase coefficients in [2] and [3] to match for every \\(\rho\\):

\\[
\frac{1}{s_1}-\frac{1}{f}=-\frac{1}{s_2}.
\tag*{[4]}
\\]

Rearranging one term at a time gives the thin-lens equation and the equivalent signed-curvature rule:

\\[
\frac{1}{s_1}+\frac{1}{s_2}=\frac{1}{f},
\qquad
\frac{1}{R_{\mathrm{out}}}=\frac{1}{R_{\mathrm{in}}}-\frac{1}{f}.
\tag*{[5]}
\\]

For the real-object, real-image convention used in the first relation, \\(s_1\\), \\(s_2\\), and \\(f\\) are positive. The transverse magnification is \\(m=-s_2/s_1\\); the negative sign indicates inversion. Virtual objects or images are handled more safely with the signed radii in [5] rather than silently changing the positive-distance convention.

<PhysicsExamples collapsible
  items={[
    {
      title: "Real image from a converging lens",
      question: "A thin converging lens has \\(f=0.100\\,\\mathrm m\\). A real object is \\(s_1=0.300\\,\\mathrm m\\) before it. Find the real-image distance and transverse magnification.",
      answer: "From equation \\([5]\\), \\(1/s_2=1/f-1/s_1=10.0-3.333=6.667\\,\\mathrm{m^{-1}}\\). Therefore \\(s_2=1/6.667=0.150\\,\\mathrm m\\). The magnification is \\(m=-s_2/s_1=-0.150/0.300=-0.500\\). Substitution checks that \\(1/0.300+1/0.150=10.0\\,\\mathrm{m^{-1}}=1/f\\). **Final result:** the image forms \\(0.150\\,\\mathrm m\\) after the lens with magnification \\(m=-0.500\\).",
    },
    {
      title: "Object at the front focal point",
      question: "What wavefront leaves a positive thin lens when a point object is one focal length before it?",
      answer: "Set \\(s_1=f\\) in equation \\([4]\\). Then \\(1/s_1-1/f=0\\), so \\(-1/s_2=0\\) and \\(s_2\\to\\infty\\). Equivalently, equation \\([2]\\) has no transverse quadratic phase: every point across the ideal exit field has the same phase. **Final result:** the lens produces a collimated plane wave, corresponding to an image at infinity.",
    },
  ]}
/>
`;
