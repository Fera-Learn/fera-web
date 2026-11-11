export const content = String.raw`## Principle

To integrate along a bent path, first describe where a moving point is at each parameter value. The parameter converts geometry in space into an ordinary one-variable integral.

Vector line integrals measure the component of a field along the directed path. Scalar line integrals weighted by arc length ignore direction and accumulate according to physical distance travelled.

Objective: parametrise a curve and evaluate scalar and vector line integrals with the correct line element and orientation.

Prerequisite: familiarity with vector-valued functions, definite integrals, dot products, and the chain rule.

## Notation

<Notation
  items={[
    { symbol: "C", meaning: "smooth oriented curve" },
    { symbol: "\\mathbf r(u)", meaning: "parametric position on \\(C\\)" },
    { symbol: "u_0,u_1", meaning: "parameter values at the initial and final endpoints" },
    { symbol: "d\\mathbf r", meaning: "oriented vector line element" },
    { symbol: "ds", meaning: "non-negative scalar arc-length element" },
    { symbol: "\\mathbf a(\\mathbf r),\\phi(\\mathbf r)", meaning: "vector field and scalar field evaluated on the curve" },
  ]}
/>

## The Core Method

Represent the curve by

\[
\mathbf r(u)=x(u)\mathbf i+y(u)\mathbf j+z(u)\mathbf k,
\qquad u_0\le u\le u_1.
\tag*{[1]}
\]

Its tangent vector and the two line elements are

\[
\frac{d\mathbf r}{du}
=\left(\frac{dx}{du},\frac{dy}{du},\frac{dz}{du}\right),
\qquad
d\mathbf r=\frac{d\mathbf r}{du}\,du,
\tag*{[2]}
\]

\[
ds=\left|\frac{d\mathbf r}{du}\right|du.
\tag*{[3]}
\]

Equation \([2]\) retains direction; equation \([3]\) retains only distance. Thus a vector line integral becomes

\[
\int_C\mathbf a\cdot d\mathbf r
=\int_{u_0}^{u_1}
\mathbf a(\mathbf r(u))\cdot\frac{d\mathbf r}{du}\,du,
\tag*{[4]}
\]

whereas a scalar line integral is

\[
\int_C\phi\,ds
=\int_{u_0}^{u_1}\phi(\mathbf r(u))
\left|\frac{d\mathbf r}{du}\right|du.
\tag*{[5]}
\]

Use this sequence:

1. Choose a parametrisation whose limits give the required endpoints and direction.
2. Differentiate \(\mathbf r(u)\).
3. Substitute the parametric coordinates into the field.
4. Use a dot product with \(d\mathbf r/du\) for equation \([4]\), or a magnitude for equation \([5]\).
5. Integrate over the parameter interval.

Reversing the orientation changes \(d\mathbf r\) to \(-d\mathbf r\), so

\[
\int_{-C}\mathbf a\cdot d\mathbf r
=-\int_C\mathbf a\cdot d\mathbf r.
\tag*{[6]}
\]

By contrast, \(ds\) stays non-negative, so a scalar arc-length integral is unchanged by reversal. A vector line integral generally depends on both endpoints and the route between them.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Two paths between the same endpoints",
      question: "For \\(\\mathbf a=(xe^y,z^2,xy)\\), evaluate \\(\\int_C\\mathbf a\\cdot d\\mathbf r\\) from \\((0,0,0)\\) to \\((1,1,1)\\) along \\(C_1:\\mathbf r=(u,u,u)\\) and \\(C_2:\\mathbf r=(u,u^2,u^3)\\), with \\(0\\le u\\le1\\).",
      answer: "On \\(C_1\\), \\(d\\mathbf r/du=(1,1,1)\\) and \\(\\mathbf a=(ue^u,u^2,u^2)\\), so \\[I_1=\\int_0^1(ue^u+2u^2)\\,du=1+\\frac23=\\frac53.\\tag*{[7]}\\] On \\(C_2\\), \\(d\\mathbf r/du=(1,2u,3u^2)\\) and \\(\\mathbf a=(ue^{u^2},u^6,u^3)\\). Therefore \\[I_2=\\int_0^1(ue^{u^2}+2u^7+3u^5)\\,du=\\frac{e-1}{2}+\\frac14+\\frac12=\\frac e2+\\frac14.\\tag*{[8]}\\] **Final result:** \\(I_1=5/3\\) and \\(I_2=e/2+1/4\\). Their difference proves that this field's line integral is path dependent.",
    },
    {
      title: "Scalar integral along a semicircle",
      question: "Let \\(C\\) be \\(\\mathbf r(u)=(a\\cos u,a\\sin u)\\), \\(0\\le u\\le\\pi\\), where \\(a\\gt0\\). Evaluate \\(\\int_C(x-y)^2\\,ds\\).",
      answer: "Differentiate the path: \\(d\\mathbf r/du=(-a\\sin u,a\\cos u)\\), whose magnitude is \\(a\\). Hence \\(ds=a\\,du\\), while \\((x-y)^2=a^2(\\cos u-\\sin u)^2\\). Then \\[\\int_C(x-y)^2ds=a^3\\int_0^\\pi(1-\\sin2u)\\,du=\\pi a^3.\\tag*{[9]}\\] **Final result:** \\(\\pi a^3\\). Reversing the semicircle would not change this value because \\(ds\\) is a scalar distance element.",
    },
  ]}
/>
`;
