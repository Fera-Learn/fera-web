export const content = String.raw`## Principle

An electric field crossing from one material into another can change its normal component abruptly while its tangential component behaves differently.

Electric boundary conditions follow by shrinking Gaussian and Faraday test surfaces onto an interface. The normal jump is set by free surface charge when written with \\(\vec D\\), while the tangential component of \\(\vec E\\) is continuous for finite fields.

## Notation

<Notation
  items={[
    { symbol: "\\hat n", meaning: "unit normal directed from medium 1 into medium 2" },
    { symbol: "\\hat t", meaning: "an arbitrary unit tangent to the interface" },
    { symbol: "\\vec E_1,\\vec E_2", meaning: "electric fields immediately beside the interface in media 1 and 2", unit: "V m^{-1}" },
    { symbol: "\\vec D_1,\\vec D_2", meaning: "electric displacement fields immediately beside the interface", unit: "C m^{-2}" },
    { symbol: "E_{1n},E_{2n}", meaning: "signed electric-field components along the chosen normal", unit: "V m^{-1}" },
    { symbol: "D_{1n},D_{2n}", meaning: "signed displacement-field components along the chosen normal", unit: "C m^{-2}" },
    { symbol: "\\vec E_{1t},\\vec E_{2t}", meaning: "electric-field components tangent to the interface", unit: "V m^{-1}" },
    { symbol: "\\vec P_1,\\vec P_2", meaning: "polarisations in the two media", unit: "C m^{-2}" },
    { symbol: "\\sigma_{\\mathrm f},\\sigma_{\\mathrm b}", meaning: "free and bound surface charge densities at the interface", unit: "C m^{-2}" },
    { symbol: "\\epsilon_0,\\epsilon_1,\\epsilon_2", meaning: "vacuum permittivity and material permittivities", unit: "F m^{-1}" },
    { symbol: "A,l,h", meaning: "pillbox-face area, loop length, and test-surface height", unit: "m^{2}, m, m" },
    { symbol: "\\vec B,t", meaning: "magnetic flux density and time", unit: "T, s" },
  ]}
/>

## The Core Method

Choose \\(\hat n\\) once, pointing from medium 1 to medium 2. A thin pillbox of face area \\(A\\) then has outward normal \\(+\hat n\\) on its medium-2 face and \\(-\hat n\\) on its medium-1 face. Gauss's law for \\(\vec D\\) gives

<PhysicsDiagram slug="electric-interface-boundary-geometry" />

The pillbox isolates the field normal to the interface, while the narrow rectangle isolates the tangential field. In the illustrated charge-free example \\(\epsilon_2=2\epsilon_1\\), the normal \\(D\\)-component is unchanged, so the normal \\(E\\)-component halves; the tangential \\(E\\)-component remains unchanged.

\\[
\oint\vec D\cdot d\vec A=\sigma_{\mathrm f}A.
\tag*{[1]}
\\]

As the pillbox height \\(h\\) tends to zero, the side flux vanishes. The two face contributions retain opposite outward orientations:

\\[
(\vec D_2\cdot\hat n)A
-(\vec D_1\cdot\hat n)A
=\sigma_{\mathrm f}A.
\tag*{[2]}
\\]

Cancel \\(A\\) to obtain the normal jump condition

\\[
\boxed{\hat n\cdot(\vec D_2-\vec D_1)=\sigma_{\mathrm f}}.
\tag*{[3]}
\\]

For linear isotropic media, \\(\vec D_j=\epsilon_j\vec E_j\\), so [3] becomes

\\[
\boxed{\epsilon_2E_{2n}-\epsilon_1E_{1n}=\sigma_{\mathrm f}}.
\tag*{[4]}
\\]

The free-source form must not be confused with the jump in \\(\vec E\\). Since \\(\vec D=\epsilon_0\vec E+\vec P\\), equation [3] gives

\\[
\epsilon_0(E_{2n}-E_{1n})
=\sigma_{\mathrm f}-\hat n\cdot(\vec P_2-\vec P_1).
\tag*{[5]}
\\]

The net bound surface charge at the shared interface is the sum calculated with each material's outward normal:

\\[
\sigma_{\mathrm b}
=\vec P_1\cdot\hat n+\vec P_2\cdot(-\hat n)
=\hat n\cdot(\vec P_1-\vec P_2).
\tag*{[6]}
\\]

Therefore [5] is exactly the total-charge boundary condition

\\[
\epsilon_0(E_{2n}-E_{1n})
=\sigma_{\mathrm f}+\sigma_{\mathrm b}.
\tag*{[7]}
\\]

For the tangential condition, place a narrow rectangular loop across the interface. Faraday's law gives

\\[
\oint\vec E\cdot d\vec l
=-\frac{\partial}{\partial t}
\int\vec B\cdot d\vec A.
\tag*{[8]}
\\]

Let its long sides have length \\(l\\) and its height tend to zero. For finite \\(\vec B\\), the right-hand side and the short-side contributions vanish with loop area, leaving

\\[
(\vec E_{1t}-\vec E_{2t})\cdot\hat t\,l=0
\quad\text{for every interface tangent }\hat t.
\tag*{[9]}
\\]

Hence

\\[
\boxed{\hat n\times(\vec E_2-\vec E_1)=\vec0},
\qquad
\boxed{\vec E_{2t}=\vec E_{1t}}.
\tag*{[10]}
\\]

With no free surface charge, \\(D_{2n}=D_{1n}\\), not generally \\(E_{2n}=E_{1n}\\). The free surface charge density \\(\sigma_{\mathrm f}\\) is a physical scalar and does not change when the orientation convention is reversed. A consistent reversal sends \\(\hat n\to-\hat n\\) and exchanges the medium labels \\(1\leftrightarrow2\\); both factors on the left of [3] reverse, so the jump and \\(\sigma_{\mathrm f}\\) remain unchanged.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Interface carrying free charge",
      question: "The normal points from medium 1 to medium 2. Let \\(\\epsilon_1=2\\epsilon_0\\), \\(\\epsilon_2=5\\epsilon_0\\), \\(E_{1n}=3.0\\times10^4\\,\\mathrm{V\\,m^{-1}}\\), and \\(\\sigma_{\\mathrm f}=4.43\\times10^{-7}\\,\\mathrm{C\\,m^{-2}}\\). Find \\(E_{2n}\\). Use \\(\\epsilon_0=8.85\\times10^{-12}\\,\\mathrm{F\\,m^{-1}}\\).",
      answer: "Use the signed normal condition [4]. First calculate the medium-1 displacement: \\[D_{1n}=\\epsilon_1E_{1n}=2(8.85\\times10^{-12})(3.0\\times10^4)=5.31\\times10^{-7}\\,\\mathrm{C\\,m^{-2}}.\\] Equation [3] gives \\[D_{2n}=D_{1n}+\\sigma_{\\mathrm f}=5.31\\times10^{-7}+4.43\\times10^{-7}=9.74\\times10^{-7}\\,\\mathrm{C\\,m^{-2}}.\\] Therefore \\[E_{2n}=\\frac{D_{2n}}{\\epsilon_2}=\\frac{9.74\\times10^{-7}}{5(8.85\\times10^{-12})}=2.20\\times10^4\\,\\mathrm{V\\,m^{-1}}.\\] **Final result:** \\(E_{2n}=2.20\\times10^4\\,\\mathrm{V\\,m^{-1}}\\) along \\(+\\hat n\\). The positive \\(\\sigma_{\\mathrm f}\\) denotes positive physical free charge and is independent of the chosen normal orientation.",
    },
    {
      title: "Charge-free dielectric boundary",
      question: "At an interface with no free surface charge, \\(\\epsilon_1=2\\epsilon_0\\), \\(\\epsilon_2=4\\epsilon_0\\), \\(E_{1n}=6.0\\times10^4\\,\\mathrm{V\\,m^{-1}}\\), and \\(\\vec E_{1t}=1.5\\times10^4\\hat x\\,\\mathrm{V\\,m^{-1}}\\). State the field components in medium 2.",
      answer: "No free surface charge makes [4] \\(\\epsilon_2E_{2n}=\\epsilon_1E_{1n}\\). Thus \\[E_{2n}=\\frac{\\epsilon_1}{\\epsilon_2}E_{1n}=\\frac{2}{4}(6.0\\times10^4)=3.0\\times10^4\\,\\mathrm{V\\,m^{-1}}.\\] Equation [10] independently gives \\[\\vec E_{2t}=\\vec E_{1t}=1.5\\times10^4\\hat x\\,\\mathrm{V\\,m^{-1}}.\\] **Final result:** the normal electric field falls to \\(3.0\\times10^4\\,\\mathrm{V\\,m^{-1}}\\), while the tangential field is unchanged. Continuity applies to \\(D_n\\) and \\(E_t\\), not to every component of either field.",
    },
  ]}
/>
`;
