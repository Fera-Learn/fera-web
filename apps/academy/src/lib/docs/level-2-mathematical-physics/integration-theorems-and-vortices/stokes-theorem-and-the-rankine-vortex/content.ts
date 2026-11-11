export const content = String.raw`## Principle

Circulation around a closed boundary measures the total local rotation passing through any surface that spans it. Stokes' theorem makes that line-to-surface connection exact.

The Rankine vortex turns the theorem into a physical calculation: a uniformly rotating core supplies vorticity, while the outer flow carries the same total circulation without local curl.

Objective: apply Stokes' theorem with compatible orientation and relate Rankine-vortex circulation to integrated vorticity.

Prerequisite: familiarity with curl, oriented surface integrals, line integrals, and cylindrical coordinates.

## Notation

<Notation
  items={[
    { symbol: "S", meaning: "smooth oriented surface" },
    { symbol: "C=\\partial S", meaning: "oriented boundary compatible with the normal to \\(S\\)" },
    { symbol: "\\mathbf a", meaning: "continuously differentiable vector field near \\(S\\)" },
    { symbol: "\\mathbf v", meaning: "fluid velocity field", unit: "m s^{-1}" },
    { symbol: "\\Gamma", meaning: "circulation around a closed curve", unit: "m^2 s^{-1}" },
    { symbol: "\\boldsymbol\\omega", meaning: "vorticity \\(\\nabla\\times\\mathbf v\\)", unit: "s^{-1}" },
    { symbol: "r", meaning: "cylindrical distance from the vortex axis", unit: "m" },
    { symbol: "\\hat{\\boldsymbol\\varphi},\\hat{\\mathbf z}", meaning: "azimuthal and axial cylindrical unit vectors" },
    { symbol: "a,\\Omega", meaning: "vortex-core radius and solid-body angular speed", unit: "m; s^{-1}" },
  ]}
/>

## The Core Method

Stokes' theorem states

\[
\iint_S(\nabla\times\mathbf a)\cdot d\mathbf S
=\oint_C\mathbf a\cdot d\mathbf r.
\tag*{[1]}
\]

The boundary direction and surface normal must form a right-hand-rule pair: viewed from the tip of the chosen normal, positive traversal is anticlockwise. Reversing either orientation changes one sign; reversing both preserves the equality.

Equation \([1]\) permits any convenient spanning surface with the same boundary, provided the field is regular throughout the region connecting the choices. The practical method is:

1. State the normal and infer the compatible boundary direction.
2. Decide whether the line integral or curl-flux integral is simpler.
3. Include every boundary component if the surface has more than one edge.
4. Check the final sign against the chosen orientation.

For an axisymmetric Rankine vortex,

\[
\mathbf v=v_\varphi(r)\hat{\boldsymbol\varphi},
\qquad
v_\varphi(r)=
\begin{cases}
\Omega r,&r\le a,\\
\Omega a^2/r,&r>a.
\end{cases}
\tag*{[2]}
\]

On a circle of radius \(r\), velocity is tangent and constant in magnitude, so

\[
\Gamma(r)=\oint_C\mathbf v\cdot d\mathbf l
=2\pi r v_\varphi(r)
=\begin{cases}
2\pi\Omega r^2,&r\le a,\\
2\pi\Omega a^2,&r>a.
\end{cases}
\tag*{[3]}
\]

For this cylindrical flow, the only nonzero curl component is

\[
\omega_z=\frac1r\frac d{dr}(rv_\varphi).
\tag*{[4]}
\]

Therefore

\[
\boldsymbol\omega=
\begin{cases}
2\Omega\,\hat{\mathbf z},&r<a,\\
\mathbf0,&r>a.
\end{cases}
\tag*{[5]}
\]

The velocity is continuous at \(r=a\), while its slope and the vorticity jump. Stokes' theorem explains the constant outer circulation: every circle outside the core encloses the same total vorticity \(2\Omega\pi a^2\).

<CartesianGrid
  className="mx-auto max-w-xl"
  height={300}
  title="Normalized Rankine-vortex speed"
  caption="Speed grows linearly in the solid-body core and decays inversely outside it. The two branches meet continuously at the core radius."
  xRange={{ min: 0, max: 4, step: 0.5, label: "normalized radius r/a" }}
  yRange={{ min: 0, max: 1.1, step: 0.2, label: "normalized speed vφ/(Ωa)" }}
>
  <Curve
    color="var(--chart-1)"
    points={[
      { x: 0, y: 0 },
      { x: 0.2, y: 0.2 },
      { x: 0.4, y: 0.4 },
      { x: 0.6, y: 0.6 },
      { x: 0.8, y: 0.8 },
      { x: 1, y: 1 },
    ]}
  />
  <Curve
    color="var(--chart-1)"
    points={[
      { x: 1, y: 1 },
      { x: 1.25, y: 0.8 },
      { x: 1.5, y: 0.6667 },
      { x: 2, y: 0.5 },
      { x: 2.5, y: 0.4 },
      { x: 3, y: 0.3333 },
      { x: 3.5, y: 0.2857 },
      { x: 4, y: 0.25 },
    ]}
    smooth
  />
  <Point color="var(--chart-2)" label="core edge" x={1} y={1} />
</CartesianGrid>

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Verify Stokes' theorem on a disk",
      question: "Let \\(\\mathbf a=(-y/2,x/2,0)\\). Verify Stokes' theorem for the unit disk in the \\(xy\\)-plane with upward normal and anticlockwise boundary.",
      answer: "The curl is \\(\\nabla\\times\\mathbf a=(0,0,1)\\), so the surface side is the unit-disk area: \\[\\iint_S(\\nabla\\times\\mathbf a)\\cdot d\\mathbf S=\\iint_S1\\,dS=\\pi.\\tag*{[6]}\\] On the boundary, set \\(\\mathbf r=(\\cos u,\\sin u,0)\\), \\(0\\le u\\le2\\pi\\). Then \\(\\mathbf a=(-\\sin u/2,\\cos u/2,0)\\) and \\(d\\mathbf r=(-\\sin u,\\cos u,0)du\\), so the dot product is \\(du/2\\). Thus the line side is \\(\\int_0^{2\\pi}du/2=\\pi\\). **Final result:** both sides equal \\(\\pi\\), with the stated compatible orientations.",
    },
    {
      title: "Circulation inside and outside a Rankine core",
      question: "For the Rankine vortex, compare circulation with vorticity flux on circles of radii \\(a/2\\) and \\(2a\\).",
      answer: "At \\(r=a/2\\), equation \\([3]\\) gives \\(\\Gamma=2\\pi\\Omega(a/2)^2=\\pi\\Omega a^2/2\\). The enclosed vorticity flux is \\((2\\Omega)\\pi(a/2)^2\\), the same value. At \\(r=2a\\), equation \\([3]\\) gives \\(\\Gamma=2\\pi\\Omega a^2\\). Vorticity vanishes outside the core, but the disk still encloses the whole core, whose flux is \\((2\\Omega)\\pi a^2=2\\pi\\Omega a^2\\). **Final result:** circulation equals enclosed vorticity flux for both circles; outer zero local vorticity does not imply zero circulation around a core-containing loop.",
    },
  ]}
/>
`;
