export const content = String.raw`## Principle

A curved surface cannot be covered by one constant normal vector. A two-parameter description supplies two tangent directions at every point; their cross product gives both the local area scale and a chosen orientation.

Surface integrals then add a scalar quantity over area or measure the flux of a vector field through the oriented surface.

Objective: construct scalar and vector area elements from a parametrisation and evaluate surface integrals with a consistent orientation.

Prerequisite: familiarity with partial derivatives, cross products, double integrals, and parametric curves.

## Notation

<Notation
  items={[
    { symbol: "S", meaning: "smooth orientable surface" },
    { symbol: "\\mathbf r(u,v)", meaning: "two-parameter position on \\(S\\)" },
    { symbol: "\\mathbf r_u,\\mathbf r_v", meaning: "surface tangent vectors \\(\\partial\\mathbf r/\\partial u\\) and \\(\\partial\\mathbf r/\\partial v\\)" },
    { symbol: "d\\mathbf S", meaning: "oriented vector area element" },
    { symbol: "dS", meaning: "non-negative scalar area element" },
    { symbol: "\\mathbf a,\\phi", meaning: "vector field and scalar field evaluated on the surface" },
  ]}
/>

## The Core Method

Describe a surface patch by

\[
\mathbf r(u,v)=x(u,v)\mathbf i+y(u,v)\mathbf j+z(u,v)\mathbf k.
\tag*{[1]}
\]

Holding one parameter fixed while varying the other gives two tangent vectors. Their cross product is normal to the patch:

\[
d\mathbf S=(\mathbf r_u\times\mathbf r_v)\,du\,dv.
\tag*{[2]}
\]

The corresponding scalar area element is its magnitude,

\[
dS=|\mathbf r_u\times\mathbf r_v|\,du\,dv.
\tag*{[3]}
\]

Swapping \(u\) and \(v\) reverses the cross product and therefore the orientation of \(d\mathbf S\), but it does not change \(dS\). For a closed surface, the standard orientation is outward.

A vector flux integral uses the oriented element:

\[
\iint_S\mathbf a\cdot d\mathbf S
=\iint_D\mathbf a(\mathbf r(u,v))\cdot
(\mathbf r_u\times\mathbf r_v)\,du\,dv.
\tag*{[4]}
\]

A scalar surface integral uses area only:

\[
\iint_S\phi\,dS
=\iint_D\phi(\mathbf r(u,v))
|\mathbf r_u\times\mathbf r_v|\,du\,dv.
\tag*{[5]}
\]

Here \(D\) is the parameter domain. The workflow is to differentiate the parametrisation, form the correctly ordered cross product, substitute the field, determine parameter limits, and then integrate.

For a sphere of radius \(a\), a useful parametrisation is

\[
\mathbf r(\theta,\varphi)=a(
\sin\theta\cos\varphi,
\sin\theta\sin\varphi,
\cos\theta),
\tag*{[6]}
\]

with scalar area element

\[
dS=a^2\sin\theta\,d\theta\,d\varphi.
\tag*{[7]}
\]

The factor \(\sin\theta\) accounts for the shrinking circles near the poles; omitting it overweights those regions.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Flux through a half-cylinder",
      question: "Evaluate \\(\\iint_S\\mathbf a\\cdot d\\mathbf S\\) for \\(\\mathbf r(u,v)=(2\\cos u,2\\sin u,v)\\), \\(0\\le u\\le\\pi\\), \\(-1\\le v\\le2\\), with \\(\\mathbf a=(0,z,xy)\\). Use the orientation from \\(\\mathbf r_u\\times\\mathbf r_v\\).",
      answer: "The tangent vectors are \\(\\mathbf r_u=(-2\\sin u,2\\cos u,0)\\) and \\(\\mathbf r_v=(0,0,1)\\), so \\(\\mathbf r_u\\times\\mathbf r_v=(2\\cos u,2\\sin u,0)\\), which points radially outward. On the surface, \\(\\mathbf a=(0,v,4\\cos u\\sin u)\\). Thus \\[\\mathbf a\\cdot(\\mathbf r_u\\times\\mathbf r_v)=2v\\sin u.\\tag*{[8]}\\] Integrating gives \\[\\int_{-1}^2\\int_0^\\pi2v\\sin u\\,du\\,dv=6.\\tag*{[9]}\\] **Final result:** the outward flux through the curved half-cylinder is \\(6\\). Reversing the cross-product order would give \\(-6\\).",
    },
    {
      title: "Scalar integral over a hemisphere",
      question: "For the upper hemisphere \\(x^2+y^2+z^2=a^2\\), evaluate \\(\\iint_S z^2\\,dS\\).",
      answer: "Use equation \\([6]\\) with \\(0\\le\\theta\\le\\pi/2\\) and \\(0\\le\\varphi\\le2\\pi\\). Here \\(z=a\\cos\\theta\\) and \\(dS=a^2\\sin\\theta\\,d\\theta\\,d\\varphi\\). Therefore \\[\\iint_Sz^2dS=a^4\\int_0^{2\\pi}d\\varphi\\int_0^{\\pi/2}\\cos^2\\theta\\sin\\theta\\,d\\theta=\\frac{2\\pi a^4}{3}.\\tag*{[10]}\\] **Final result:** \\(2\\pi a^4/3\\). Orientation does not affect this scalar integral because it uses \\(dS\\), not \\(d\\mathbf S\\).",
    },
  ]}
/>
`;
