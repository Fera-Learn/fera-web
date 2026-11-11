export const content = String.raw`## Principle

Net flow through a closed boundary can be calculated either at the boundary or by adding every local source inside. The divergence theorem states that these two descriptions are exactly equivalent.

In electrostatics, it connects the local Maxwell equation for charge density to Gauss's flux law and also exposes why the field of a point charge requires a delta function at its singular source.

Objective: apply the divergence theorem with every boundary piece and connect differential and integral forms of Gauss's law.

Prerequisite: familiarity with divergence, volume integrals, oriented surface integrals, and electric flux.

## Notation

<Notation
  items={[
    { symbol: "V", meaning: "bounded volume" },
    { symbol: "S=\\partial V", meaning: "closed piecewise-smooth boundary of \\(V\\), oriented outward" },
    { symbol: "\\mathbf a", meaning: "continuously differentiable vector field on the relevant region" },
    { symbol: "\\mathbf E", meaning: "electric field", unit: "N C^{-1}" },
    { symbol: "\\rho,q", meaning: "volume charge density and enclosed charge", unit: "C m^{-3}; C" },
    { symbol: "\\epsilon_0", meaning: "vacuum permittivity", unit: "F m^{-1}" },
    { symbol: "\\delta^{(3)}(\\mathbf r)", meaning: "three-dimensional Dirac delta concentrated at the origin", unit: "m^{-3}" },
  ]}
/>

## The Core Method

For a regular vector field on a volume and its boundary,

\[
\iiint_V(\nabla\cdot\mathbf a)\,dV
=\oiint_{\partial V}\mathbf a\cdot d\mathbf S.
\tag*{[1]}
\]

The surface must be closed and \(d\mathbf S\) must point outward. If the boundary consists of several pieces, every piece contributes; leaving out a base or cap changes the surface and invalidates the comparison.

The calculation can proceed in either direction:

1. Compute \(\nabla\cdot\mathbf a\) and integrate over the volume, or
2. Split the closed boundary into convenient pieces and add their outward fluxes.

Choose the side with simpler geometry or algebra.

Maxwell's electrostatic equation is

\[
\nabla\cdot\mathbf E=\frac{\rho}{\epsilon_0}.
\tag*{[2]}
\]

Integrating equation \([2]\) over \(V\) and using equation \([1]\) gives

\[
\oiint_S\mathbf E\cdot d\mathbf S
=\frac1{\epsilon_0}\iiint_V\rho\,dV
=\frac{q_{\rm enc}}{\epsilon_0}.
\tag*{[3]}
\]

Thus the differential and integral Gauss laws are the same local-to-global statement when the fields and charge density are interpreted correctly.

For \(r\ne0\), direct differentiation gives \(\nabla^2(1/r)=0\). However, the outward flux of \(\nabla(1/r)=-\mathbf r/r^3\) through any sphere enclosing the origin is \(-4\pi\), independent of its radius. The singular source is represented distributionally by

\[
\nabla^2\left(\frac1r\right)
=-4\pi\delta^{(3)}(\mathbf r).
\tag*{[4]}
\]

Equation \([4]\) does not claim a nonzero ordinary Laplacian away from the origin; it records the finite integrated contribution concentrated at the excluded point.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Verify the theorem on a solid hemisphere",
      question: "Let \\(V\\) be \\(x^2+y^2+z^2\\le a^2\\), \\(z\\ge0\\), and \\(\\mathbf a=(z+a)\\mathbf k\\), with \\(a\\gt0\\). Verify the divergence theorem.",
      answer: "Since \\(\\nabla\\cdot\\mathbf a=1\\), the volume side is the hemisphere volume \\(2\\pi a^3/3\\). The boundary has a curved hemisphere and the disk \\(z=0\\). On the curved part, \\(z=a\\cos\\theta\\), \\(\\mathbf k\\cdot\\hat{\\mathbf n}=\\cos\\theta\\), and \\(dS=a^2\\sin\\theta\\,d\\theta\\,d\\varphi\\), giving \\[\\Phi_{\\rm curved}=2\\pi a^3\\int_0^{\\pi/2}(\\cos\\theta+\\cos^2\\theta)\\sin\\theta\\,d\\theta=\\frac{5\\pi a^3}{3}.\\tag*{[5]}\\] The disk's outward normal is \\(-\\mathbf k\\), so \\(\\Phi_{\\rm disk}=-a(\\pi a^2)=-\\pi a^3\\). **Final result:** total flux \\(5\\pi a^3/3-\\pi a^3=2\\pi a^3/3\\), equal to the volume integral.",
    },
    {
      title: "Recover Gauss's law for a point charge",
      question: "A point charge \\(q\\) at the origin has \\(\\mathbf E=q\\hat{\\mathbf r}/(4\\pi\\epsilon_0r^2)\\). Find its flux through an arbitrary closed surface that encloses the origin once.",
      answer: "Away from the origin, \\(\\nabla\\cdot\\mathbf E=0\\), but the singular source contributes the enclosed charge. Excise a small sphere around the origin; the divergence theorem on the regular region shows that flux through the outer surface equals flux through that small sphere with its radial outward direction from the charge. On a sphere of radius \\(R\\), \\[\\oiint\\mathbf E\\cdot d\\mathbf S=\\frac{q}{4\\pi\\epsilon_0R^2}(4\\pi R^2)=\\frac q{\\epsilon_0}.\\tag*{[6]}\\] **Final result:** every such enclosing surface has flux \\(q/\\epsilon_0\\), independent of shape. A surface not enclosing the charge has zero net flux.",
    },
  ]}
/>
`;
