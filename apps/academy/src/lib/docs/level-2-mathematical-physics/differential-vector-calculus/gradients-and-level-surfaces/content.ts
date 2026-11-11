export const content = String.raw`## Principle

On a landscape, height may change rapidly in one direction and barely change in another. A scalar field behaves in the same way: its value varies with position, and the gradient packages the three coordinate rates into the direction of fastest increase.

Surfaces on which the field has one fixed value are level surfaces. Moving along one does not change the field, so the gradient must point normally through it.

Objective: calculate gradients and use them to identify steepest change and normals to level surfaces.

Prerequisite: familiarity with partial derivatives, dot products, and Cartesian vectors.

## Notation

<Notation
  items={[
    { symbol: "x,y,z", meaning: "Cartesian coordinates" },
    { symbol: "\\phi(x,y,z)", meaning: "differentiable scalar field" },
    { symbol: "\\nabla", meaning: "del differential operator" },
    { symbol: "d\\mathbf r", meaning: "infinitesimal displacement \\(dx\\,\\mathbf i+dy\\,\\mathbf j+dz\\,\\mathbf k\\)" },
    { symbol: "\\mathbf r,r", meaning: "position vector and its magnitude \\(r=|\\mathbf r|\\)" },
    { symbol: "\\hat{\\mathbf n}", meaning: "chosen unit normal to a level surface" },
    { symbol: "G", meaning: "gravitational constant used in the radial-potential example", unit: "m^3 kg^{-1} s^{-2}" },
    { symbol: "M", meaning: "point-source mass used in the radial-potential example", unit: "kg" },
  ]}
/>

## The Core Method

In Cartesian coordinates the del operator is

\[
\nabla=\mathbf i\frac{\partial}{\partial x}
+\mathbf j\frac{\partial}{\partial y}
+\mathbf k\frac{\partial}{\partial z}.
\tag*{[1]}
\]

Acting on a scalar field produces its gradient vector:

\[
\nabla\phi=
\frac{\partial\phi}{\partial x}\mathbf i
+\frac{\partial\phi}{\partial y}\mathbf j
+\frac{\partial\phi}{\partial z}\mathbf k.
\tag*{[2]}
\]

The total differential connects this vector to a small displacement:

\[
d\phi=\frac{\partial\phi}{\partial x}dx
+\frac{\partial\phi}{\partial y}dy
+\frac{\partial\phi}{\partial z}dz
=\nabla\phi\cdot d\mathbf r.
\tag*{[3]}
\]

For a unit direction \(\hat{\mathbf u}\), the directional rate is \(\nabla\phi\cdot\hat{\mathbf u}\). The dot product is largest when \(\hat{\mathbf u}\) is parallel to \(\nabla\phi\), so the gradient gives steepest increase; its negative gives steepest decrease.

On the level surface \(\phi=c\), a tangent displacement leaves \(\phi\) unchanged. Equation \([3]\) then gives

\[
0=d\phi=\nabla\phi\cdot d\mathbf r_{\rm tangent}.
\tag*{[4]}
\]

Thus \(\nabla\phi\) is normal to the surface wherever it is nonzero. A corresponding unit normal is

\[
\hat{\mathbf n}=\pm\frac{\nabla\phi}{|\nabla\phi|}.
\tag*{[5]}
\]

For a radial field \(\phi=\phi(r)\), the chain rule gives a useful special case. Since

\[
\nabla r=\frac{\mathbf r}{r}=\hat{\mathbf r},
\tag*{[6]}
\]

the gradient is

\[
\nabla\phi(r)=\frac{d\phi}{dr}\hat{\mathbf r}.
\tag*{[7]}
\]

The sign of \(d\phi/dr\) decides whether the gradient points outward or inward. At a stationary point \(\nabla\phi=\mathbf0\), the direction of steepest change is not determined by the gradient alone.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Normal to an ellipsoidal level surface",
      question: "For \\(\\phi=x^2+2y^2+3z^2\\), find the direction of steepest increase at \\(P=(1,-1,1)\\) and a unit normal to the level surface through \\(P\\).",
      answer: "Differentiate each coordinate component: \\[\\nabla\\phi=(2x,4y,6z).\\tag*{[8]}\\] At \\(P\\), \\(\\nabla\\phi(P)=(2,-4,6)\\). Its magnitude is \\(\\sqrt{4+16+36}=2\\sqrt{14}\\). **Final result:** the steepest-increase direction is \\(\\nabla\\phi(P)\\), and an outward unit normal is \\[\\hat{\\mathbf n}=\\frac{(1,-2,3)}{\\sqrt{14}}.\\tag*{[9]}\\] The opposite vector is the equally valid inward normal.",
    },
    {
      title: "Gradient of a radial potential",
      question: "The gravitational potential outside a point mass is \\(\\phi(r)=-GM/r\\). Calculate its gradient and the field \\(\\mathbf g=-\\nabla\\phi\\).",
      answer: "Use the radial rule rather than differentiating three Cartesian fractions. Since \\(d(-GM/r)/dr=GM/r^2\\), \\[\\nabla\\phi=\\frac{GM}{r^2}\\hat{\\mathbf r}=\\frac{GM}{r^3}\\mathbf r.\\tag*{[10]}\\] The gravitational field is the negative gradient: \\[\\mathbf g=-\\frac{GM}{r^2}\\hat{\\mathbf r}.\\tag*{[11]}\\] **Final result:** the potential increases outward, while \\(\\mathbf g\\) points inward toward the mass. The formula applies only for \\(r\\ne0\\), where the potential is differentiable.",
    },
  ]}
/>
`;
