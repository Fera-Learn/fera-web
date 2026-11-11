export const content = String.raw`## Principle

A vector field can spread outward from a point, circulate around it, do both, or do neither. Divergence measures local source-like expansion, while curl measures local rotational tendency.

Both operations use the del operator, but their outputs differ: divergence is a scalar and curl is a vector. Keeping that type information visible prevents many invalid manipulations.

Objective: compute divergence and curl and apply the main product and compound-operator identities.

Prerequisite: familiarity with partial derivatives and dot and cross products.

## Notation

<Notation
  items={[
    { symbol: "\\mathbf a=(a_x,a_y,a_z)", meaning: "differentiable vector field in Cartesian coordinates" },
    { symbol: "\\mathbf b", meaning: "second differentiable vector field used in product identities" },
    { symbol: "\\phi,\\psi", meaning: "differentiable scalar fields" },
    { symbol: "\\nabla\\cdot\\mathbf a", meaning: "scalar divergence of \\(\\mathbf a\\)" },
    { symbol: "\\nabla\\times\\mathbf a", meaning: "vector curl of \\(\\mathbf a\\)" },
    { symbol: "\\nabla^2", meaning: "Laplacian differential operator" },
  ]}
/>

## The Core Method

Take the derivative of each component in its matching coordinate and add to obtain divergence:

\[
\nabla\cdot\mathbf a
=\frac{\partial a_x}{\partial x}
+\frac{\partial a_y}{\partial y}
+\frac{\partial a_z}{\partial z}.
\tag*{[1]}
\]

A positive value indicates local net outflow, a negative value indicates local net inflow, and zero identifies a **solenoidal** field. This is a local statement; it does not by itself describe the field's value.

Curl combines cross-coordinate derivatives:

\[
\nabla\times\mathbf a=
\begin{pmatrix}
\partial a_z/\partial y-\partial a_y/\partial z\\
\partial a_x/\partial z-\partial a_z/\partial x\\
\partial a_y/\partial x-\partial a_x/\partial y
\end{pmatrix}.
\tag*{[2]}
\]

Its direction gives the local rotation axis by the right-hand rule. A field with zero curl is **irrotational** on the region considered.

The operator order matters. The scalar \(\nabla\cdot\mathbf a\) is not the directional differential operator

\[
\mathbf a\cdot\nabla
=a_x\frac{\partial}{\partial x}
+a_y\frac{\partial}{\partial y}
+a_z\frac{\partial}{\partial z}.
\tag*{[3]}
\]

Likewise, \(\nabla\times\mathbf a\) is a vector field, whereas \(\mathbf a\times\nabla\) is an operator waiting to act on something to its right.

Useful product rules include

\[
\begin{aligned}
\nabla(\phi\psi)&=\psi\nabla\phi+\phi\nabla\psi,\\
\nabla\cdot(\phi\mathbf a)&=\nabla\phi\cdot\mathbf a+\phi\nabla\cdot\mathbf a,\\
\nabla\times(\phi\mathbf a)&=\nabla\phi\times\mathbf a+\phi\nabla\times\mathbf a,\\
\nabla\cdot(\mathbf a\times\mathbf b)
&=\mathbf b\cdot(\nabla\times\mathbf a)
-\mathbf a\cdot(\nabla\times\mathbf b).
\end{aligned}
\tag*{[4]}
\]

For fields with continuous second partial derivatives, mixed derivatives commute. That assumption gives

\[
\nabla\times(\nabla\phi)=\mathbf0,
\qquad
\nabla\cdot(\nabla\times\mathbf a)=0.
\tag*{[5]}
\]

Two further compound identities define the scalar Laplacian and simplify a curl of a curl:

\[
\nabla\cdot(\nabla\phi)=\nabla^2\phi,
\qquad
\nabla\times(\nabla\times\mathbf a)
=\nabla(\nabla\cdot\mathbf a)-\nabla^2\mathbf a.
\tag*{[6]}
\]

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Source and rotation in one field",
      question: "For \\(\\mathbf a=(x^2,xy,yz)\\), calculate \\(\\nabla\\cdot\\mathbf a\\) and \\(\\nabla\\times\\mathbf a\\).",
      answer: "Apply matching derivatives for divergence: \\[\\nabla\\cdot\\mathbf a=\\frac{\\partial x^2}{\\partial x}+\\frac{\\partial(xy)}{\\partial y}+\\frac{\\partial(yz)}{\\partial z}=2x+x+y=3x+y.\\tag*{[7]}\\] For curl, use the cross-coordinate pairs: \\[\\nabla\\times\\mathbf a=(z-0,\\,0-0,\\,y-0)=(z,0,y).\\tag*{[8]}\\] **Final result:** the field is generally neither solenoidal nor irrotational. At a particular point, substitute its coordinates only after calculating the derivative fields.",
    },
    {
      title: "Verify a curl-gradient identity",
      question: "Let \\(\\phi=x^2y+yz^3\\). Compute \\(\\nabla\\times(\\nabla\\phi)\\) explicitly.",
      answer: "First calculate \\[\\nabla\\phi=(2xy,\\,x^2+z^3,\\,3yz^2).\\tag*{[9]}\\] The curl components are \\(\\partial_y(3yz^2)-\\partial_z(x^2+z^3)=3z^2-3z^2=0\\), \\(\\partial_z(2xy)-\\partial_x(3yz^2)=0\\), and \\(\\partial_x(x^2+z^3)-\\partial_y(2xy)=2x-2x=0\\). **Final result:** \\(\\nabla\\times(\\nabla\\phi)=\\mathbf0\\). The cancellation occurs because the relevant mixed second derivatives commute.",
    },
  ]}
/>
`;
