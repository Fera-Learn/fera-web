export const content = String.raw`## Principle

An ideal thin lens changes a wave mainly by imposing a transverse quadratic phase. With the convention \\(e^{i\vec k\cdot\vec r}e^{-i\omega t}\\), a positive converging lens contributes a negative quadratic phase.

## Notation

<Notation
  items={[
    { symbol: "\\rho=(x^2+y^2)^{1/2}", meaning: "radial coordinate in the lens plane", unit: "m" },
    { symbol: "z", meaning: "longitudinal optical-axis coordinate", unit: "m" },
    { symbol: "t(\\rho),t_0", meaning: "local and on-axis lens thickness", unit: "m, m" },
    { symbol: "R_L", meaning: "positive radius of the convex surface", unit: "m" },
    { symbol: "n,k", meaning: "lens refractive index and vacuum wavenumber", unit: "1, m^{-1}" },
    { symbol: "\\vec k,\\vec r,\\omega,t", meaning: "wavevector, position, angular frequency, and time", unit: "m^{-1}, m, rad s^{-1}, s" },
    { symbol: "\\lambda,\\Delta\\phi", meaning: "vacuum wavelength and lens phase relative to the axis", unit: "m, rad" },
    { symbol: "f", meaning: "positive focal length of the converging lens", unit: "m" },
    { symbol: "\\widetilde U_{\\mathrm{in}},\\widetilde U_{\\mathrm{out}}", meaning: "complex fields immediately before and after the lens", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "T_L,i", meaning: "lens transmission factor and imaginary unit" },
  ]}
/>

## The Core Method

Plane incident fronts reach different lens thicknesses at different transverse positions. The resulting optical-path difference bends the outgoing equal-phase surfaces into fronts converging at the focus.

<PhysicsDiagram slug="thin-lens-wavefront-transformation" />

For a plano-convex lens whose plane face is normal to \\(+z\\), geometry gives the thickness at radius \\(\rho\\):

\\[
t(\rho)=\sqrt{R_L^2-\rho^2}-(R_L-t_0)
=R_L\sqrt{1-\frac{\rho^2}{R_L^2}}-(R_L-t_0).
\tag*{[1]}
\\]

In the thin, paraxial region \\(\rho/R_L\ll1\\), expand the square root:

\\[
\begin{aligned}
t(\rho)
&\simeq R_L\left(1-\frac12\frac{\rho^2}{R_L^2}\right)-(R_L-t_0)\\
&=t_0-\frac{\rho^2}{2R_L}.
\end{aligned}
\tag*{[2]}
\\]

Relative to the same geometrical thickness of vacuum, replacing a distance \\(t\\) by refractive index \\(n\\) adds optical phase \\(k(n-1)t\\). The lens transmission factor is therefore

\\[
T_L(\rho)=e^{ik(n-1)t(\rho)}
\simeq e^{ik(n-1)t_0}
\exp\left[-i\frac{k(n-1)\rho^2}{2R_L}\right].
\tag*{[3]}
\\]

The first factor in [3] is constant across the lens and changes only global phase. Define

\\[
f=\frac{R_L}{n-1}.
\tag*{[4]}
\\]

After dropping the physically irrelevant common phase, the ideal thin-lens rule becomes

\\[
\widetilde U_{\mathrm{out}}(x,y)
=\widetilde U_{\mathrm{in}}(x,y)
\exp\left[-i\frac{k(x^2+y^2)}{2f}\right].
\tag*{[5]}
\\]

A converging spherical wave approaching a focus at distance \\(f\\) has phase \\(-k\rho^2/(2f)\\) in the lens plane, matching [5]. The thin-element approximation retains the optical-path phase \\(k(n-1)t(\rho)\\), but replaces the finite lens by one transverse plane: it neglects diffraction and other internal field evolution between the surfaces, and neglects their axial separation in subsequent propagation. The ideal model also neglects multiple reflections, finite aperture, and aberrations.

<PhysicsExamples collapsible
  items={[
    {
      title: "Focal length and edge phase",
      question: "A thin plano-convex glass lens has \\(R_L=0.120\\,\\mathrm m\\), \\(n=1.50\\), clear radius \\(5.00\\,\\mathrm{mm}\\), and is used at \\(\\lambda=600\\,\\mathrm{nm}\\). Find \\(f\\) and the quadratic phase at the edge relative to the axis.",
      answer: "Equation \\([4]\\) gives \\(f=0.120/(1.50-1)=0.240\\,\\mathrm m\\). The edge phase from equation \\([5]\\) is \\(\\Delta\\phi=-k\\rho^2/(2f)=-\\pi\\rho^2/(\\lambda f)\\). Substitution gives \\(\\Delta\\phi=-\\pi(5.00\\times10^{-3})^2/[(600\\times10^{-9})(0.240)]=-545\\,\\mathrm{rad}\\). **Final result:** \\(f=0.240\\,\\mathrm m\\) and the lens-edge phase relative to the axis is \\(-545\\,\\mathrm{rad}\\), modulo \\(2\\pi\\).",
    },
    {
      title: "Why a common lens phase is omitted",
      question: "What observable focusing effect comes from the factor \\(e^{ik(n-1)t_0}\\) in equation \\([3]\\)?",
      answer: "The factor is independent of \\(x\\) and \\(y\\), so it rotates every point of the transmitted field by the same phasor angle. Focusing depends on transverse phase differences, which come only from the quadratic factor. The common phase could matter relative to a separate reference beam, but it does not change this lens's focal curvature or intensity by itself. **Final result:** the constant factor produces no focusing effect and may be omitted from the thin-lens transfer function.",
    },
  ]}
/>
`;
