export const content = String.raw`## Principle

Some force fields assign the same work to every path between two fixed points. In such a field, the route can be replaced by a difference of two scalar values—just as a height change replaces the details of a hiking trail.

That scalar is a potential. On a simply connected region, zero curl, existence of a potential, and path independence are three equivalent descriptions of the same behaviour.

Objective: test whether a field is conservative, construct its potential, and evaluate line integrals from endpoint values.

Prerequisite: familiarity with gradients, curl, partial integration, and vector line integrals.

## Notation

<Notation
  items={[
    { symbol: "D", meaning: "open simply connected region containing the paths under consideration" },
    { symbol: "\\mathbf a", meaning: "continuously differentiable vector field on \\(D\\)" },
    { symbol: "\\phi", meaning: "scalar potential satisfying \\(\\mathbf a=\\nabla\\phi\\)" },
    { symbol: "A,B", meaning: "initial and final endpoints of an oriented curve" },
    { symbol: "C", meaning: "smooth path from \\(A\\) to \\(B\\) inside \\(D\\)" },
  ]}
/>

## The Core Method

A simply connected region has no excluded hole around which a closed path can become trapped. For a continuously differentiable field on such a region, the following statements are equivalent:

\[
\nabla\times\mathbf a=\mathbf0,
\qquad
\mathbf a=\nabla\phi,
\qquad
\int_C\mathbf a\cdot d\mathbf r
\text{ is path independent}.
\tag*{[1]}
\]

If \(\mathbf a=\nabla\phi\), the chain rule along \(\mathbf r(u)\) gives

\[
\nabla\phi\cdot\frac{d\mathbf r}{du}
=\frac d{du}\phi(\mathbf r(u)).
\tag*{[2]}
\]

Integration immediately yields the fundamental theorem for line integrals:

\[
\int_C\mathbf a\cdot d\mathbf r
=\phi(B)-\phi(A).
\tag*{[3]}
\]

To construct \(\phi\) for \(\mathbf a=(a_x,a_y,a_z)\), begin with

\[
\frac{\partial\phi}{\partial x}=a_x.
\tag*{[4]}
\]

Integrate with respect to \(x\), but retain an unknown function of the untouched variables:

\[
\phi(x,y,z)=\int a_x\,dx+g(y,z).
\tag*{[5]}
\]

Differentiate equation \([5]\) with respect to \(y\) and compare with \(a_y\) to determine the \(y\)-dependence of \(g\). Then compare the \(z\)-derivative with \(a_z\). A final additive constant has no effect on \(\nabla\phi\) or on equation \([3]\).

The simple-connectivity assumption matters. A field can have zero curl at every point of its domain and still have nonzero circulation if the domain excludes a singularity enclosed by the path.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Construct a potential and use endpoints",
      question: "For \\(\\mathbf a=(xy^2+z,x^2y+2,x)\\), find a potential and evaluate the line integral from \\(A=(1,1,1)\\) to \\(B=(3,1/3,1)\\).",
      answer: "Integrate the first component with respect to \\(x\\): \\[\\phi=\\frac12x^2y^2+xz+g(y,z).\\tag*{[6]}\\] Comparing \\(\\partial\\phi/\\partial y=x^2y+g_y\\) with the second component gives \\(g_y=2\\), so \\(g=2y+h(z)\\). Comparing \\(\\partial\\phi/\\partial z=x+h'(z)\\) with the third component gives \\(h'=0\\). Thus \\(\\phi=x^2y^2/2+xz+2y\\). Evaluate: \\(\\phi(A)=7/2\\) and \\(\\phi(B)=25/6\\). **Final result:** \\[\\int_C\\mathbf a\\cdot d\\mathbf r=\\phi(B)-\\phi(A)=\\frac23,\\tag*{[7]}\\] independent of the chosen path inside the domain.",
    },
    {
      title: "Zero curl on a domain with a hole",
      question: "Consider \\(\\mathbf a=(-y/(x^2+y^2),x/(x^2+y^2))\\) on the plane with the origin removed. Its curl is zero there. Evaluate its circulation around the unit circle and decide whether it has a single-valued potential on the whole domain.",
      answer: "Parametrise the anticlockwise unit circle by \\(\\mathbf r(u)=(\\cos u,\\sin u)\\), \\(0\\le u\\le2\\pi\\). On the circle, \\(\\mathbf a=(-\\sin u,\\cos u)\\), which equals \\(d\\mathbf r/du\\). Therefore \\[\\oint_C\\mathbf a\\cdot d\\mathbf r=\\int_0^{2\\pi}1\\,du=2\\pi.\\tag*{[8]}\\] **Final result:** the nonzero closed-loop integral means the field is not conservative on the entire punctured plane, despite having zero curl at every allowed point. The missing origin makes the domain not simply connected.",
    },
  ]}
/>
`;
