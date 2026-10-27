export const content = String.raw`## Principle

Neighboring microscopic current loops mostly cancel where they touch, but unmatched current can remain at an edge or where the alignment changes.

Magnetisation represents microscopic current loops. Currents on adjacent loops cancel where their magnetisations match, but spatial variation leaves a bound volume current and an exposed material boundary leaves a bound surface current.

## Notation

<Notation
  items={[
    { symbol: "\\vec M", meaning: "magnetisation", unit: "A m^{-1}" },
    { symbol: "\\vec J_{\\mathrm b}", meaning: "bound volume current density", unit: "A m^{-2}" },
    { symbol: "\\vec K_{\\mathrm b}", meaning: "bound surface current density", unit: "A m^{-1}" },
    { symbol: "\\vec J_{\\mathrm f}", meaning: "free conduction current density", unit: "A m^{-2}" },
    { symbol: "\\vec J", meaning: "total volume current density in the stated static model", unit: "A m^{-2}" },
    { symbol: "\\hat n,\\hat t", meaning: "outward unit normal and arbitrary unit tangent to the material surface" },
    { symbol: "d\\vec A,d\\vec l", meaning: "oriented area and line elements", unit: "m^{2}, m" },
    { symbol: "I_{\\mathrm b}", meaning: "bound current through a surface", unit: "A" },
    { symbol: "\\nabla\\times,\\nabla\\cdot", meaning: "curl and divergence operators", unit: "m^{-1}, m^{-1}" },
  ]}
/>

## The Core Method

Consider neighbouring magnetised cells. Their microscopic loop currents oppose one another on a shared face and cancel if \\(\vec M\\) is the same in both cells. If, for example, \\(M_z\\) varies with \\(x\\), the incomplete cancellation leaves a current in the \\(y\\)-direction.

<PhysicsDiagram slug="bound-current-cancellation" />

In the two-cell construction, the interface currents \\(I_1\\) and \\(I_2\\) oppose one another; unequal magnetisations leave the net \\(J_y\\) shown. At an outside boundary, the dashed contour has material on only one side, so its uncancelled current becomes a surface current set by \\(\vec M\\) and the outward normal.

\\[
J_{{\mathrm b},y}=-\frac{\partial M_z}{\partial x}.
\tag*{[1]}
\\]

A variation of \\(M_x\\) with \\(z\\) contributes in the opposite sense,

\\[
J_{{\mathrm b},y}=\frac{\partial M_x}{\partial z}
-\frac{\partial M_z}{\partial x}.
\tag*{[2]}
\\]

Repeating this cancellation argument for all components produces the curl:

\\[
\boxed{\vec J_{\mathrm b}=\nabla\times\vec M}.
\tag*{[3]}
\\]

At an outer boundary there is no neighbouring material loop to cancel the exposed microscopic current. To identify the resulting sheet current, integrate [3] through any surface \\(S\\) and apply Stokes's theorem.

\\[
I_{\mathrm b}
=\int_S\vec J_{\mathrm b}\cdot d\vec A
=\int_S(\nabla\times\vec M)\cdot d\vec A
=\oint_{\partial S}\vec M\cdot d\vec l.
\tag*{[4]}
\\]

Shrink a rectangular contour onto a material surface. The interior segment contributes the component of \\(\vec M\\) tangent to the contour, while the exterior segment contributes zero because \\(\vec M=\vec 0\\) outside. Let \\(\hat t\\) be any unit tangent to the surface and orient the rectangle so that its spanning normal is \\(\hat t\\). The right-hand rule then directs the interior segment along \\(\hat n\times\hat t\\), so matching the line integral to the sheet current gives

\\[
\vec K_{\mathrm b}\cdot\hat t
=\vec M\cdot(\hat n\times\hat t)
=(\vec M\times\hat n)\cdot\hat t.
\tag*{[5]}
\\]

Because this equality holds for every surface tangent \\(\hat t\\),

\\[
\boxed{\vec K_{\mathrm b}=\vec M\times\hat n}.
\tag*{[6]}
\\]

The order of the cross product in [6] matters. For \\(\vec M=M\hat z\\) and an outward normal \\(\hat n=\hat x\\), the current is \\(+M\hat y\\), since \\(\hat z\times\hat x=\hat y\\).

A useful consistency check follows because the divergence of any curl vanishes.

\\[
\nabla\cdot\vec J_{\mathrm b}
=\nabla\cdot(\nabla\times\vec M)=0.
\tag*{[7]}
\\]

The surface current closes the volume-current paths at material boundaries. For uniform magnetisation, [3] gives no bulk current, but [6] can still give a circulating surface current.

Bound currents are a representation of magnetic dipoles, not mobile free carriers. If free transport and magnetisation currents are both present, with no time-dependent electric polarisation, their contributions remain distinguishable:

\\[
\vec J
=\vec J_{\mathrm f}+\vec J_{\mathrm b}.
\tag*{[8]}
\\]

Unlike electric polarisation, this current-loop model does not imply separated electric bound charge. Its current is locally closed, as equation [7] requires.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Uniformly magnetised cylinder",
      question: "A cylinder is uniformly magnetised with \\(\\vec M=M_0\\hat z\\). Find the bound volume and surface currents on its curved side and flat end faces.",
      answer: "Uniform \\(\\vec M\\) has zero curl, so \\(\\vec J_{\\mathrm b}=\\vec 0\\). On the curved side, \\(\\hat n=\\hat r\\), and equation [6] gives \\[\\vec K_{\\mathrm b}=M_0\\hat z\\times\\hat r=M_0\\hat\\phi.\\] On either flat end, \\(\\hat n=\\pm\\hat z\\), so \\(\\vec K_{\\mathrm b}=\\vec 0\\). **Final result:** there is no bound volume current; a sheet current of magnitude \\(M_0\\) circulates azimuthally around the curved surface, like the current in a solenoid.",
    },
    {
      title: "Current from nonuniform magnetisation",
      question: "Within a slab, \\(\\vec M=(M_0x/L)\\hat z\\), where \\(M_0=6.0\\times10^4\\,\\mathrm{A\\,m^{-1}}\\) and \\(L=3.0\\,\\mathrm{cm}\\). Find the bound volume current density.",
      answer: "Only \\(\\partial M_z/\\partial x\\) is nonzero. From equation [2], \\[\\vec J_{\\mathrm b}=-\\frac{M_0}{L}\\hat y=-\\frac{6.0\\times10^4}{3.0\\times10^{-2}}\\hat y=-2.0\\times10^6\\hat y\\,\\mathrm{A\\,m^{-2}}.\\] **Final result:** \\(\\vec J_{\\mathrm b}=-2.0\\times10^6\\hat y\\,\\mathrm{A\\,m^{-2}}\\). The minus sign follows from the curl and cannot be inferred from the size of \\(M\\) alone.",
    },
  ]}
/>
`;
