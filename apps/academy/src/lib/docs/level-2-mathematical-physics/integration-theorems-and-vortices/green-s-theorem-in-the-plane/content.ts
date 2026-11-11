export const content = String.raw`## Principle

A closed walk around a planar region records information about everything inside it. Green's theorem converts that boundary integral into an area integral of local rotation—or, in a second form, local divergence.

The orientation is part of the theorem: a positive boundary is traversed anticlockwise so that the region remains on the left.

Objective: convert between closed line integrals and double integrals and use Green's theorem to calculate planar areas.

Prerequisite: familiarity with partial derivatives, double integrals, and oriented line integrals.

## Notation

<Notation
  items={[
    { symbol: "R", meaning: "bounded planar region" },
    { symbol: "C=\\partial R", meaning: "positively oriented, piecewise-smooth boundary of \\(R\\)" },
    { symbol: "P(x,y),Q(x,y)", meaning: "continuously differentiable scalar component functions" },
    { symbol: "\\mathbf F=(P,Q)", meaning: "planar vector field" },
    { symbol: "d\\mathbf r=(dx,dy)", meaning: "oriented boundary displacement" },
    { symbol: "d\\mathbf S", meaning: "outward in-plane normal element in the divergence form" },
  ]}
/>

## The Core Method

Green's circulation theorem is

\[
\oint_C(P\,dx+Q\,dy)
=\iint_R\left(
\frac{\partial Q}{\partial x}
-\frac{\partial P}{\partial y}
\right)dx\,dy.
\tag*{[1]}
\]

Use it when the derivative combination is easier to integrate over the region than the original field is around each boundary segment. If the given path is clockwise, reverse the sign before applying equation \([1]\).

A rotated choice of components gives the two-dimensional divergence form,

\[
\iint_R\nabla\cdot\mathbf F\,dA
=\oint_C\mathbf F\cdot d\mathbf S.
\tag*{[2]}
\]

It is the planar analogue of the divergence theorem: local expansion over area equals outward flux across the boundary.

Green's theorem also provides area formulas. Choose \(P,Q\) so that

\[
\frac{\partial Q}{\partial x}
-\frac{\partial P}{\partial y}=1.
\tag*{[3]}
\]

Then equation \([1]\) becomes an area integral of one. Three common choices are

\[
A=\frac12\oint_C(x\,dy-y\,dx)
=\oint_Cx\,dy
=-\oint_Cy\,dx.
\tag*{[4]}
\]

The symmetric first form is often most convenient for a parametric closed curve. These formulas inherit the positive-orientation requirement; clockwise traversal returns the negative of the geometric area.

For a multiply connected region, apply the theorem to all boundary components with the region on the left: the outer boundary is anticlockwise and boundaries around holes are clockwise.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Convert a triangular boundary integral",
      question: "Evaluate \\(I=\\oint_C[(y-\\sin x)dx+\\cos x\\,dy]\\), where \\(C\\) is the anticlockwise boundary of the triangle with vertices \\((0,0)\\), \\((1,0)\\), and \\((1,2)\\).",
      answer: "Here \\(P=y-\\sin x\\) and \\(Q=\\cos x\\), so \\(Q_x-P_y=-\\sin x-1\\). The triangle can be written as \\(0\\le x\\le1\\), \\(0\\le y\\le2x\\). Therefore \\[I=\\int_0^1\\int_0^{2x}(-\\sin x-1)\\,dy\\,dx=-2\\int_0^1x(\\sin x+1)\\,dx.\\tag*{[5]}\\] Since \\(\\int_0^1x\\sin x\\,dx=-\\cos1+\\sin1\\), \\[I=2\\cos1-2\\sin1-1.\\tag*{[6]}\\] **Final result:** \\(I=2\\cos1-2\\sin1-1\\). The area route avoids three separate line integrals.",
    },
    {
      title: "Area enclosed by an ellipse",
      question: "Use Green's area formula to find the area of \\(x=a\\cos\\varphi\\), \\(y=b\\sin\\varphi\\), traversed for \\(0\\le\\varphi\\le2\\pi\\), with \\(a,b\\gt0\\).",
      answer: "The parametrisation is anticlockwise. Differentiate to get \\(dx=-a\\sin\\varphi\\,d\\varphi\\) and \\(dy=b\\cos\\varphi\\,d\\varphi\\). Then \\[x\\,dy-y\\,dx=ab(\\cos^2\\varphi+\\sin^2\\varphi)d\\varphi=ab\\,d\\varphi.\\tag*{[7]}\\] Equation \\[4\\] gives \\[A=\\frac12\\int_0^{2\\pi}ab\\,d\\varphi=\\pi ab.\\tag*{[8]}\\] **Final result:** the ellipse area is \\(\\pi ab\\). Reversing the parameter interval would produce \\(-\\pi ab\\), whose magnitude is the geometric area.",
    },
  ]}
/>
`;
