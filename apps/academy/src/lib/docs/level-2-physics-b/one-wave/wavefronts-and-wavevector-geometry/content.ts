export const content = String.raw`## Principle

A wavefront is a surface of equal phase at one instant. The local wavevector is normal to that surface and points toward increasing spatial phase.

## Notation

<Notation
  items={[
    { symbol: "\\Phi(\\vec r,t),\\Phi_c", meaning: "wave phase and a chosen constant phase", unit: "rad, rad" },
    { symbol: "\\vec r,t", meaning: "position and time", unit: "m, s" },
    { symbol: "\\vec k(\\vec r),k", meaning: "local wavevector and its magnitude", unit: "m^{-1}, m^{-1}" },
    { symbol: "\\hat{\\vec n},\\hat{\\vec e}", meaning: "wavefront normal and chosen measurement direction" },
    { symbol: "\\lambda,d,\\theta", meaning: "wavelength, directional wavefront spacing, and angle between directions", unit: "m, m, rad" },
    { symbol: "\\nabla,\\widetilde{\\nu}_{\\hat e}", meaning: "spatial gradient and signed directional spatial frequency", unit: "m^{-1}, m^{-1}" },
    { symbol: "s,m,\\omega,\\phi_0", meaning: "distance along a chosen direction, integer wavefront number, angular frequency, and phase offset", unit: "m, 1, rad s^{-1}, rad" },
  ]}
/>

## The Core Method

The upper panels contrast parallel plane fronts with concentric spherical fronts. In both cases the wavevector is normal to a front; the lower construction shows the small angle used in paraxial optics.

<PhysicsDiagram slug="wavefronts-and-paraxial-geometry" />

At fixed time, a wavefront consists of positions that satisfy

\\[
\Phi(\vec r,t)=\Phi_c,
\tag*{[1]}
\\]

where \\(\Phi_c\\) is one constant phase. A small displacement \\(d\vec r\\) tangent to this surface causes no first-order phase change:

\\[
d\Phi=\nabla\Phi\cdot d\vec r=0.
\tag*{[2]}
\\]

Therefore \\(\nabla\Phi\\) is perpendicular to every tangent displacement. Define the local wavevector by

\\[
\vec k(\vec r)=\nabla\Phi,
\qquad
\hat{\vec n}=\frac{\vec k}{k}.
\tag*{[3]}
\\]

For a plane-wave phase \\(\Phi=\vec k\cdot\vec r-\omega t+\phi_0\\), the gradient is the same vector everywhere, so the wavefronts are parallel planes. Adjacent equal-phase wavefronts differ by \\(2\pi\\). Along the normal,

\\[
k\lambda=2\pi
\quad\Longrightarrow\quad
\lambda=\frac{2\pi}{k}.
\tag*{[4]}
\\]

Along a direction \\(\hat{\vec e}\\) making angle \\(\theta\\) with \\(\vec k\\), the phase rate, signed directional spatial frequency, and positive equal-phase spacing are

\\[
\frac{d\Phi}{ds}=\vec k\cdot\hat{\vec e}=k\cos\theta,
\qquad
\widetilde\nu_{\hat e}=\frac{\vec k\cdot\hat{\vec e}}{2\pi}
=\frac{\cos\theta}{\lambda},
\qquad
|\widetilde\nu_{\hat e}|=\frac{1}{d},
\qquad
d=\frac{2\pi}{|k\cos\theta|}=\frac{\lambda}{|\cos\theta|}.
\tag*{[5]}
\\]

The sign of \\(\widetilde\nu_{\hat e}\\) records whether phase increases or decreases along \\(\hat{\vec e}\\), while \\(d\\) remains positive. When \\(\theta=\pi/2\\), the chosen direction lies within a wavefront, the phase does not vary along it, and the directional spacing is infinite.

<PhysicsExamples collapsible
  items={[
    {
      title: "Spacing along an oblique axis",
      question: "Plane-wave fronts have normal spacing \\(500\\,\\mathrm{nm}\\). Find their spacing along a line at \\(60^\\circ\\) to the wavevector.",
      answer: "The normal spacing is the wavelength, \\(\\lambda=500\\,\\mathrm{nm}\\). Equation \\([5]\\) gives \\[d=\\frac{500\\,\\mathrm{nm}}{|\\cos60^\\circ|}=\\frac{500\\,\\mathrm{nm}}{0.5}=1000\\,\\mathrm{nm}.\\] The larger spacing is geometrically consistent with cutting parallel planes obliquely. **Final result:** \\(d=1.00\\,\\mathrm{\\mu m}\\).",
    },
    {
      title: "Normals to spherical wavefronts",
      question: "For phase \\(\\Phi=kr-\\omega t\\), where \\(r=|\\vec r|\\), determine the direction of the local wavevector.",
      answer: "Use equation \\([3]\\). Since \\(\\nabla r=\\hat{\\vec r}\\), the spatial gradient is \\(\\vec k(\\vec r)=\\nabla(kr)=k\\hat{\\vec r}\\). The vector is radial and therefore normal to the spherical surfaces \\(r=\\text{constant}\\). **Final result:** the local wavevector points radially outward, \\(\\vec k=k\\hat{\\vec r}\\).",
    },
  ]}
/>
`;
