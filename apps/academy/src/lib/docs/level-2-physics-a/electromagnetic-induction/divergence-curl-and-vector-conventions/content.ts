export const content = String.raw`## Principle

Water can spread away from a point or swirl around it, and a vector field can show the same two local patterns.

Divergence and curl describe two different local behaviours of a vector field. Divergence measures net spreading from a point, while curl measures oriented circulation around a point; the divergence and Stokes theorems connect those local measurements to flux through a boundary and circulation around an edge.

## Notation

<Notation
  items={[
    { symbol: "\\vec A,A,A_x,A_y,A_z", meaning: "generic vector field, its magnitude, and its Cartesian components" },
    { symbol: "\\nabla\\cdot,\\nabla\\times", meaning: "divergence and curl operators; their dimensions are inverse length" },
    { symbol: "d\\vec A,dA", meaning: "oriented area element and its scalar area", unit: "m^{2}, m^{2}" },
    { symbol: "d\\vec l,dl", meaning: "directed line element and its scalar length", unit: "m, m" },
    { symbol: "V,\\partial V", meaning: "volume and its closed boundary surface" },
    { symbol: "S,\\mathcal C=\\partial S", meaning: "oriented open surface and its boundary contour" },
    { symbol: "x,y,z;\\hat{\\imath},\\hat{\\jmath},\\hat k", meaning: "right-handed Cartesian coordinates and unit vectors" },
    { symbol: "\\hat n,\\hat t", meaning: "unit surface normal and unit path tangent", unit: "1" },
    { symbol: "\\theta_A,\\theta_l", meaning: "angles from the field to the surface normal and path tangent", unit: "rad, rad" },
    { symbol: "\\vec a,\\vec b,\\vec c,\\theta", meaning: "vectors and rotation angle in the right-hand-rule diagram, with \\(\\vec c=\\vec a\\times\\vec b\\)", unit: "rad for \\(\\theta\\)" },
    { symbol: "\\Delta V,\\Delta S", meaning: "shrinking test volume and shrinking test surface area", unit: "m^{3}, m^{2}" },
    { symbol: "\\vec u,\\vec v", meaning: "temporary vectors used to state cross-product order" },
  ]}
/>

## The Core Method

Orientation enters before differentiation. A surface element points along its chosen unit normal, while a line element points along the chosen direction of travel.

\\[
d\vec A=\hat n\,dA,\qquad d\vec l=\hat t\,dl\tag*{[1]}
\\]

Write \\(A=|\vec A|\\). If the angles from \\(\vec A\\) to \\(\hat n\\) and \\(\hat t\\) are temporarily called \\(\theta_A\\) and \\(\theta_l\\), the dot products select the signed normal and tangential components.

\\[
\vec A\cdot d\vec A=A\cos\theta_A\,dA,\qquad \vec A\cdot d\vec l=A\cos\theta_l\,dl\tag*{[2]}
\\]

The first expression contributes to flux: it is positive where the field crosses in the normal direction and negative where it crosses oppositely. The second contributes to circulation: it is positive where the field follows the path and negative where it opposes the path.

To define divergence at a point, surround it by a small volume \\(\Delta V\\) and use the outward orientation on its closed boundary. Net outward flux per unit volume approaches the divergence as the volume shrinks.

\\[
\nabla\cdot\vec A=\lim_{\Delta V\to0}\frac{1}{\Delta V}\oint_{\partial(\Delta V)}\vec A\cdot d\vec A\tag*{[3]}
\\]

Positive divergence means local spreading, negative divergence means local convergence, and zero divergence means no net local source or sink. Zero divergence does not require a zero or uniform field: inward and outward contributions can cancel. The divergence theorem adds these local contributions throughout a finite volume.

\\[
\int_V(\nabla\cdot\vec A)\,dV=\oint_{\partial V}\vec A\cdot d\vec A\tag*{[4]}
\\]

In Cartesian coordinates, the useful calculation rule is the sum of each component's change along its own coordinate direction.

\\[
\nabla\cdot\vec A=\frac{\partial A_x}{\partial x}+\frac{\partial A_y}{\partial y}+\frac{\partial A_z}{\partial z}\tag*{[5]}
\\]

Curl begins with a small open surface patch \\(\Delta S\\). Choose its normal \\(\hat n\\); the right-hand rule then fixes the positive direction around its boundary. The circulation per unit area gives the component of curl along that normal.

\\[
\hat n\cdot(\nabla\times\vec A)=\lim_{\Delta S\to0}\frac{1}{\Delta S}\oint_{\partial(\Delta S)}\vec A\cdot d\vec l\tag*{[6]}
\\]

The curl is a vector because different surface orientations probe different circulation components. Its direction is the right-hand axis of the local circulation, and its magnitude measures the circulation strength per unit area. Stokes' theorem adds those local components across a finite oriented surface.

\\[
\int_S(\nabla\times\vec A)\cdot d\vec A=\oint_{\mathcal C}\vec A\cdot d\vec l\tag*{[7]}
\\]

The boundary direction in equation [7] is not independent of the surface normal. Curl the fingers of the right hand around \\(\mathcal C\\); the thumb must point along the chosen positive normal. Reversing the normal requires reversing the path direction too.

<PhysicsDiagram slug="right-hand-vector-conventions" />

In the left construction, curling from \\(\vec a\\) towards \\(\vec b\\) through \\(\theta\\) makes the thumb point along \\(\vec c=\vec a\times\vec b\\). In the right construction, the circulation direction of \\(\vec A\\) fixes the axial direction of \\(\nabla\times\vec A\\).

For calculations in a right-handed Cartesian system, only the component form below is normally needed.

\\[
\nabla\times\vec A=\left(\frac{\partial A_z}{\partial y}-\frac{\partial A_y}{\partial z}\right)\hat{\imath}+\left(\frac{\partial A_x}{\partial z}-\frac{\partial A_z}{\partial x}\right)\hat{\jmath}+\left(\frac{\partial A_y}{\partial x}-\frac{\partial A_x}{\partial y}\right)\hat{k}\tag*{[8]}
\\]

Equation [5] produces a scalar, so divergence has no direction. Equation [8] produces a vector whose direction records the axis and handedness of circulation. These physical results are coordinate-independent even though their component formulas change when a different coordinate system is used.

The same ordering rule controls any cross product. For two temporary vectors \\(\vec u\\) and \\(\vec v\\), curl the right-hand fingers from the first vector towards the second; the thumb gives \\(\vec u\times\vec v\\). Swapping the order reverses the result.

\\[
\vec u\times\vec v=-\vec v\times\vec u\tag*{[9]}
\\]

A useful identity follows directly from equation [8]. Taking its divergence gives

\\[
\nabla\cdot(\nabla\times\vec A)=\frac{\partial}{\partial x}\left(\frac{\partial A_z}{\partial y}-\frac{\partial A_y}{\partial z}\right)+\frac{\partial}{\partial y}\left(\frac{\partial A_x}{\partial z}-\frac{\partial A_z}{\partial x}\right)+\frac{\partial}{\partial z}\left(\frac{\partial A_y}{\partial x}-\frac{\partial A_x}{\partial y}\right)\tag*{[10]}
\\]

For a smooth field, expand the derivatives and group the mixed second derivatives in equal pairs.

\\[
\begin{aligned}
\nabla\cdot(\nabla\times\vec A)
&=\frac{\partial^2 A_z}{\partial x\,\partial y}-\frac{\partial^2 A_y}{\partial x\,\partial z}
+\frac{\partial^2 A_x}{\partial y\,\partial z}-\frac{\partial^2 A_z}{\partial y\,\partial x}
+\frac{\partial^2 A_y}{\partial z\,\partial x}-\frac{\partial^2 A_x}{\partial z\,\partial y}\\
&=\left(\frac{\partial^2 A_z}{\partial x\,\partial y}-\frac{\partial^2 A_z}{\partial y\,\partial x}\right)
+\left(\frac{\partial^2 A_y}{\partial z\,\partial x}-\frac{\partial^2 A_y}{\partial x\,\partial z}\right)
+\left(\frac{\partial^2 A_x}{\partial y\,\partial z}-\frac{\partial^2 A_x}{\partial z\,\partial y}\right)=0
\end{aligned}\tag*{[11]}
\\]

This identity is geometric, not a special feature of Cartesian coordinates: the net flux of a curl through any closed surface is zero because a closed surface has no boundary on which a net Stokes circulation could remain.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Uniform and nonuniform fields",
      question: "Using dimensionless coordinates and field components, classify the uniform field \\(\\vec G=(3,-1,2)\\) and the nonuniform field \\(\\vec F=(2x,-2y,0)\\) by calculating their divergence and curl.",
      answer: "All quantities in this abstract mathematical example are dimensionless. For the uniform field, every component is constant, so every spatial derivative is zero. Therefore \\[\\nabla\\cdot\\vec G=0,\\qquad \\nabla\\times\\vec G=\\vec0.\\] For the nonuniform field, calculate divergence from matching component-coordinate derivatives: \\[\\nabla\\cdot\\vec F=\\frac{\\partial(2x)}{\\partial x}+\\frac{\\partial(-2y)}{\\partial y}+\\frac{\\partial0}{\\partial z}=2-2+0=0.\\] For its curl, each required cross-derivative is zero: \\[\\nabla\\times\\vec F=\\left(0-0,\\;0-0,\\;\\frac{\\partial(-2y)}{\\partial x}-\\frac{\\partial(2x)}{\\partial y}\\right)=\\vec0.\\] **Final result:** both fields have zero divergence and zero curl, but only \\(\\vec G\\) is uniform. The components of \\(\\vec F\\) vary with position; zero divergence says its local outward and inward spreading cancel, not that the field is constant.",
    },
    {
      title: "Matching a boundary to its normal",
      question: "Using dimensionless coordinates and field components, take \\(\\vec A=(-y/2,x/2,0)\\) on the unit square in the \\(xy\\)-plane and choose the surface normal \\(+\\hat k\\). Verify Stokes' theorem and explain what changes if the orientation is reversed.",
      answer: "The normal \\(+\\hat k\\) makes the positive boundary direction anticlockwise when viewed from positive \\(z\\). First calculate the curl: \\[\\nabla\\times\\vec A=\\left(0,0,\\frac{\\partial(x/2)}{\\partial x}-\\frac{\\partial(-y/2)}{\\partial y}\\right)=(0,0,1).\\] The square has unit area, so the surface integral is \\[\\int_S(\\nabla\\times\\vec A)\\cdot d\\vec A=1.\\] Parameterise each anticlockwise edge. The four line integrals are \\[\\begin{aligned}\\int_{\\text{bottom}}\\vec A\\cdot d\\vec l&=\\int_0^1 0\\,dx=0,\\\\\\int_{\\text{right}}\\vec A\\cdot d\\vec l&=\\int_0^1\\frac12\\,dy=\\frac12,\\\\\\int_{\\text{top}}\\vec A\\cdot d\\vec l&=\\int_1^0-\\frac12\\,dx=\\frac12,\\\\\\int_{\\text{left}}\\vec A\\cdot d\\vec l&=\\int_1^0 0\\,dy=0.\\end{aligned}\\] Hence \\[\\oint_{\\mathcal C}\\vec A\\cdot d\\vec l=0+\\frac12+\\frac12+0=1,\\] agreeing with Stokes' theorem. **Final result:** the two oriented integrals are both \\(+1\\). If the normal is changed to \\(-\\hat k\\), the right-hand convention requires a clockwise boundary; both integrals then become \\(-1\\). Reversing only the normal or only the path is the orientation trap because it makes the two sides use inconsistent conventions.",
    },
  ]}
/>
`;
