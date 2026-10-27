export const content = String.raw`## Principle

Magnetic field lines cross a material boundary without ending, although a sheet current can change the field that lies along the surface.

Magnetic boundary conditions reflect the absence of magnetic monopoles and the role of free surface current. The normal component of \\(\vec B\\) is continuous, while a free sheet current produces a signed jump in the tangential component of \\(\vec H\\).

## Notation

<Notation
  items={[
    { symbol: "\\hat n", meaning: "unit normal directed from medium 1 into medium 2" },
    { symbol: "\\hat t", meaning: "an arbitrary unit tangent to the interface" },
    { symbol: "\\vec B_1,\\vec B_2", meaning: "magnetic flux densities immediately beside the interface", unit: "T" },
    { symbol: "\\vec H_1,\\vec H_2", meaning: "auxiliary magnetic fields immediately beside the interface", unit: "A m^{-1}" },
    { symbol: "B_{1n},B_{2n}", meaning: "signed magnetic-flux-density components along the chosen normal", unit: "T" },
    { symbol: "H_{1n},H_{2n}", meaning: "signed auxiliary-field components along the chosen normal", unit: "A m^{-1}" },
    { symbol: "\\vec H_{1t},\\vec H_{2t}", meaning: "auxiliary-field components tangent to the interface", unit: "A m^{-1}" },
    { symbol: "\\vec K_{\\mathrm f},\\vec K_{\\mathrm b}", meaning: "free and bound surface current densities", unit: "A m^{-1}" },
    { symbol: "\\vec M_1,\\vec M_2", meaning: "magnetisations in the two media", unit: "A m^{-1}" },
    { symbol: "\\mu_0,\\mu_1,\\mu_2", meaning: "vacuum permeability and material permeabilities", unit: "H m^{-1}" },
    { symbol: "\\vec J_{\\mathrm f},\\vec D,t,A,l,h", meaning: "free current density, electric displacement, time, pillbox area, loop length, and loop height", unit: "A m^{-2}, C m^{-2}, s, m^{2}, m, m" },
  ]}
/>

## The Core Method

Choose \\(\hat n\\) from medium 1 to medium 2. Apply \\(\nabla\cdot\vec B=0\\) to a pillbox of face area \\(A\\). As its height tends to zero, side flux vanishes and the oppositely oriented faces give

<PhysicsDiagram slug="magnetic-interface-boundary-geometry" />

The pillbox isolates the normal \\(B\\)-component, while the narrow rectangle compares the tangential \\(H\\)-components. In the illustrated current-free example \\(\mu_2=2\mu_1\\), normal \\(B\\) is unchanged and tangential \\(H\\) is unchanged, so tangential \\(B\\) doubles in medium 2.

\\[
(\vec B_2\cdot\hat n)A
-(\vec B_1\cdot\hat n)A=0.
\tag*{[1]}
\\]

After cancelling \\(A\\),

\\[
\boxed{\hat n\cdot(\vec B_2-\vec B_1)=0},
\qquad
\boxed{B_{2n}=B_{1n}}.
\tag*{[2]}
\\]

No surface source appears in [2] because magnetic monopoles have not been observed. In linear isotropic media, \\(\vec B_j=\mu_j\vec H_j\\), so the equivalent normal condition is

\\[
\mu_2H_{2n}=\mu_1H_{1n}.
\tag*{[3]}
\\]

For the tangential condition, apply the Ampere-Maxwell law to a narrow rectangular loop crossing the interface:

\\[
\oint\vec H\cdot d\vec l
=\int\vec J_{\mathrm f}\cdot d\vec A
+\frac{\partial}{\partial t}\int\vec D\cdot d\vec A.
\tag*{[4]}
\\]

Let its long sides have length \\(l\\) and height \\(h\\). The displacement-flux term and short-side contributions vanish as \\(h\to0\\), while the free sheet current remains finite. With the loop orientation fixed by \\(\hat n\\),

\\[
\big[\hat n\times(\vec H_2-\vec H_1)\big]\cdot\hat t\,l
=\vec K_{\mathrm f}\cdot\hat t\,l.
\tag*{[5]}
\\]

Because [5] holds for every interface tangent,

\\[
\boxed{\hat n\times(\vec H_2-\vec H_1)=\vec K_{\mathrm f}}.
\tag*{[6]}
\\]

An equivalent form makes the tangential jump explicit:

\\[
\boxed{\vec H_{2t}-\vec H_{1t}=\vec K_{\mathrm f}\times\hat n}.
\tag*{[7]}
\\]

The order of the cross products in [6] and [7] fixes the sign. Reversing \\(\hat n\\) also exchanges the labels of the two sides, so the physical result is unchanged.

Bound current is already absorbed into \\(\vec H=\vec B/\mu_0-\vec M\\). If the same interface is described using \\(\vec B\\), the net bound sheet current is

\\[
\vec K_{\mathrm b}
=\vec M_1\times\hat n+\vec M_2\times(-\hat n)
=(\vec M_1-\vec M_2)\times\hat n.
\tag*{[8]}
\\]

Substituting \\(\vec B=\mu_0(\vec H+\vec M)\\) into [6] then gives the total-current form

\\[
\boxed{\hat n\times(\vec B_2-\vec B_1)
=\mu_0(\vec K_{\mathrm f}+\vec K_{\mathrm b})}.
\tag*{[9]}
\\]

When \\(\vec K_{\mathrm f}=\vec0\\), \\(\vec H_t\\) is continuous. For linear media this means \\(\vec B_{2t}/\mu_2=\vec B_{1t}/\mu_1\\), whereas \\(\vec B_t\\) itself can jump.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Two permeable media without free sheet current",
      question: "A boundary has \\(\\mu_1=\\mu_0\\), \\(\\mu_2=4\\mu_0\\), and no free surface current. In medium 1, \\(\\vec B_1=(2.0\\hat n+0.50\\hat t)\\,\\mathrm{mT}\\). Find \\(\\vec B_2\\).",
      answer: "Equation [2] keeps the normal component unchanged: \\[B_{2n}=B_{1n}=2.0\\,\\mathrm{mT}.\\] With \\(\\vec K_{\\mathrm f}=\\vec0\\), equation [6] makes the tangential \\(H\\)-field continuous. Therefore \\[\\frac{B_{2t}}{\\mu_2}=\\frac{B_{1t}}{\\mu_1},\\qquad B_{2t}=\\frac{\\mu_2}{\\mu_1}B_{1t}=4(0.50)=2.0\\,\\mathrm{mT}.\\] **Final result:** \\(\\vec B_2=(2.0\\hat n+2.0\\hat t)\\,\\mathrm{mT}\\). The normal \\(B\\)-component is continuous, but the tangential \\(B\\)-component changes with permeability.",
    },
    {
      title: "Checking the sign of a free surface current",
      question: "Let \\(\\hat n=\\hat z\\), \\(\\vec K_{\\mathrm f}=4.0\\hat x\\,\\mathrm{A\\,m^{-1}}\\), and \\(\\vec H_{1t}=1.0\\hat y\\,\\mathrm{A\\,m^{-1}}\\). Find \\(\\vec H_{2t}\\) and verify the cross-product sign.",
      answer: "Use the explicit jump [7]. Since \\(\\hat x\\times\\hat z=-\\hat y\\), \\[\\vec H_{2t}-\\vec H_{1t}=\\vec K_{\\mathrm f}\\times\\hat n=(4.0\\hat x)\\times\\hat z=-4.0\\hat y\\,\\mathrm{A\\,m^{-1}}.\\] Hence \\[\\vec H_{2t}=1.0\\hat y-4.0\\hat y=-3.0\\hat y\\,\\mathrm{A\\,m^{-1}}.\\] Check with [6]: \\[\\hat z\\times(-4.0\\hat y)=+4.0\\hat x\\,\\mathrm{A\\,m^{-1}}=\\vec K_{\\mathrm f}.\\] **Final result:** \\(\\vec H_{2t}=-3.0\\hat y\\,\\mathrm{A\\,m^{-1}}\\). Swapping either cross-product order would give the wrong jump sign.",
    },
  ]}
/>
`;
