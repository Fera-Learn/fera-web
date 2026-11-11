export const content = String.raw`## Principle

A rectangular coordinate box does not remain a rectangular box after a curved change of coordinates. The Jacobian measures how the new coordinate grid stretches local volume.

Once that scale factor is included, a volume integral becomes an ordinary triple integral whose limits describe the physical region.

Objective: derive volume elements from coordinate maps and evaluate cylindrical and spherical volume integrals with geometry-based limits.

Prerequisite: familiarity with triple integrals, determinants, cross products, and cylindrical and spherical coordinates.

## Notation

<Notation
  items={[
    { symbol: "V", meaning: "three-dimensional integration region" },
    { symbol: "\\mathbf r(u,v,w)", meaning: "coordinate map into physical space" },
    { symbol: "J", meaning: "Jacobian determinant \\(\\partial(x,y,z)/\\partial(u,v,w)\\)" },
    { symbol: "dV", meaning: "non-negative physical volume element" },
    { symbol: "\\rho,\\varphi,z", meaning: "cylindrical radius, azimuth, and height" },
    { symbol: "r,\\theta,\\varphi", meaning: "spherical radius, polar angle, and azimuth" },
  ]}
/>

## The Core Method

For a coordinate map \(\mathbf r(u,v,w)\), three small coordinate displacements form a local parallelepiped. Its signed scale factor is the scalar triple product

\[
J=\mathbf r_u\cdot(\mathbf r_v\times\mathbf r_w)
=\frac{\partial(x,y,z)}{\partial(u,v,w)}.
\tag*{[1]}
\]

Physical volume is non-negative, so

\[
dV=|J|\,du\,dv\,dw.
\tag*{[2]}
\]

A scalar volume integral becomes

\[
\iiint_V\phi(\mathbf r)\,dV
=\iiint_D\phi(\mathbf r(u,v,w))|J|\,du\,dv\,dw,
\tag*{[3]}
\]

where \(D\) is the parameter-space description of \(V\). Changing coordinate order can reverse the sign of \(J\), but the absolute value preserves physical volume.

For cylindrical coordinates,

\[
\mathbf r=(\rho\cos\varphi,\rho\sin\varphi,z),
\tag*{[4]}
\]

and the triple product gives

\[
dV=\rho\,d\rho\,d\varphi\,dz.
\tag*{[5]}
\]

For spherical coordinates,

\[
\mathbf r=(r\sin\theta\cos\varphi,
r\sin\theta\sin\varphi,r\cos\theta),
\tag*{[6]}
\]

and

\[
dV=r^2\sin\theta\,dr\,d\theta\,d\varphi.
\tag*{[7]}
\]

The factors \(\rho\) and \(r^2\sin\theta\) are part of the volume element, not optional additions to the integrand. Choose limits by translating each boundary of the physical region into the selected coordinates.

Consider a conical detector. Let \(n_0\) be a reference number density, \(\lambda>0\) the radial decay length, and \(\beta\) a dimensionless anisotropy parameter. The number density is

\[
n(r,\theta)=n_0e^{-r/\lambda}(1+\beta\cos\theta),
\tag*{[8]}
\]

Let \(R\) be the detector's maximum range and \(\alpha\) its conical half-angle. The observed region has \(0\le r\le R\), \(0\le\theta\le\alpha\), and \(0\le\varphi<2\pi\). The detected number is

\[
N=2\pi n_0
\left[\int_0^Rr^2e^{-r/\lambda}\,dr\right]
\left[1-\cos\alpha+\frac\beta2\sin^2\alpha\right].
\tag*{[9]}
\]

The radial factor is

\[
\int_0^Rr^2e^{-r/\lambda}\,dr
=\lambda^3\left[2-e^{-R/\lambda}
\left(\frac{R^2}{\lambda^2}+\frac{2R}{\lambda}+2\right)\right].
\tag*{[10]}
\]

For an isotropic distribution \(\beta=0\), the radial dependence cancels when the cone count is divided by the full-sphere count, leaving the solid-angle fraction \((1-\cos\alpha)/2\).

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Derive a cylindrical volume",
      question: "Use a volume integral to find the volume of a cylinder with radius \\(a\\) and height \\(h\\).",
      answer: "The region is \\(0\\le\\rho\\le a\\), \\(0\\le\\varphi\\le2\\pi\\), and \\(0\\le z\\le h\\). Include the cylindrical Jacobian from equation \\([5]\\): \\[V=\\int_0^h\\int_0^{2\\pi}\\int_0^a\\rho\\,d\\rho\\,d\\varphi\\,dz.\\tag*{[11]}\\] The three factors evaluate to \\(a^2/2\\), \\(2\\pi\\), and \\(h\\). **Final result:** \\(V=\\pi a^2h\\). Omitting \\(\\rho\\) would give the wrong dimensions and would fail to account for larger circumferences at larger radius.",
    },
    {
      title: "Particles inside an isotropic cone",
      question: "For an isotropic density \\(n(r)=n_0e^{-r/\\lambda}\\), what fraction of particles inside radius \\(R\\) lies within a cone of half-angle \\(\\alpha\\) about the positive \\(z\\)-axis?",
      answer: "The radial integral and azimuthal factor are identical for the cone and the full sphere, so only the polar-angle integrals remain. For the cone, \\(\\int_0^\\alpha\\sin\\theta\\,d\\theta=1-\\cos\\alpha\\). For the full sphere, \\(\\int_0^\\pi\\sin\\theta\\,d\\theta=2\\). Therefore \\[f=\\frac{1-\\cos\\alpha}{2}.\\tag*{[12]}\\] **Final result:** \\(f=(1-\\cos\\alpha)/2\\). It gives zero for a vanishing cone and one for \\(\\alpha=\\pi\\), which checks the limits.",
    },
  ]}
/>
`;
