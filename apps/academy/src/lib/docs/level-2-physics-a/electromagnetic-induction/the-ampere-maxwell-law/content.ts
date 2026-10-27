export const content = String.raw`## Principle

One loop drawn around a charging capacitor must predict the same magnetic field whichever spanning surface we imagine across it.

Magnetostatic Ampere's law fails for a charging capacitor because the same closed path can bound a surface that cuts the wire or one that passes through the gap. Maxwell's displacement-current term removes this surface dependence and makes magnetic circulation consistent with charge conservation.

## Notation

<Notation
  items={[
    { symbol: "\\vec B,B", meaning: "magnetic field and its magnitude", unit: "T, T" },
    { symbol: "\\vec E", meaning: "electric field", unit: "N C^{-1}" },
    { symbol: "\\Phi_E", meaning: "electric flux through a surface", unit: "N m^{2} C^{-1}" },
    { symbol: "I_{\\mathrm c},I_{\\mathrm{disp}},I", meaning: "conduction current, displacement current, and charging current", unit: "A, A, A" },
    { symbol: "\\vec J", meaning: "conduction current density", unit: "A m^{-2}" },
    { symbol: "\\rho,q", meaning: "electric charge density and charge on a capacitor plate", unit: "C m^{-3}, C" },
    { symbol: "d\\vec l", meaning: "directed line element along closed path \\(\\mathcal C\\)", unit: "m" },
    { symbol: "d\\vec A", meaning: "oriented area element on spanning surface S", unit: "m^{2}" },
    { symbol: "\\epsilon_0,\\mu_0", meaning: "permittivity and permeability of free space", unit: "F m^{-1}, N A^{-2}" },
    { symbol: "\\nabla,r,t", meaning: "del operator, circular-path radius, and time", unit: "m^{-1}, m, s" },
  ]}
/>

## The Core Method

Choose a closed path \\(\mathcal C\\) around a wire that is charging a capacitor. One spanning surface can cut the wire, while another can bow between the plates without cutting the wire. The magnetostatic form of Ampere's law would be

<PhysicsDiagram slug="ampere-maxwell-capacitor-surfaces" />

Path A is pierced by the conduction current in the wire, whereas the surface carried through volume D to path B crosses the capacitor gap. The same charging circuit and magnetic circulation must remain consistent even though no charge carriers cross that gap.

\\[
\oint_{\mathcal C}\vec B\cdot d\vec l=\mu_0 I_{\mathrm c}\tag*{[1]}
\\]

If the wire carries current \\(I\\), the conduction currents through the two surfaces are different.

\\[
\left.I_{\mathrm c}\right|_{\text{wire surface}}=I,\qquad \left.I_{\mathrm c}\right|_{\text{gap surface}}=0\tag*{[2]}
\\]

Equation [1] would therefore assign two values to the same line integral around the same boundary.

\\[
\left.\oint_{\mathcal C}\vec B\cdot d\vec l\right|_{\text{wire surface}}=\mu_0 I,\qquad \left.\oint_{\mathcal C}\vec B\cdot d\vec l\right|_{\text{gap surface}}=0\tag*{[3]}
\\]

The magnetic field along \\(\mathcal C\\) cannot depend on which imaginary spanning surface is chosen, so equation [3] is an inconsistency, not two possible physical answers. For the gap surface \\(S\\), Gauss's law relates electric flux to the charge \\(q\\) on a plate.

\\[
\Phi_E=\int_S\vec E\cdot d\vec A=\frac{q}{\epsilon_0}\tag*{[4]}
\\]

Differentiate equation [4] and use the charging-current relation \\(I=dq/dt\\).

\\[
\epsilon_0\frac{d\Phi_E}{dt}=\frac{dq}{dt}=I\tag*{[5]}
\\]

The quantity on the left is the displacement current through the gap. Adding it to the conduction current gives the Ampere-Maxwell law in integral form.

\\[
\oint_{\mathcal C}\vec B\cdot d\vec l=\mu_0\left(I_{\mathrm c}+I_{\mathrm{disp}}\right)=\mu_0 I_{\mathrm c}+\mu_0\epsilon_0\frac{d\Phi_E}{dt}\tag*{[6]}
\\]

For the wire-cutting surface, the contribution is the conduction current \\(I\\); for the gap surface, no conduction current crosses the vacuum gap but the displacement current is \\(I\\). These are alternative surfaces, so the two equal contributions must not be added as though both crossed one surface.

To obtain the local law, first replace the conduction current by its surface integral.

\\[
I_{\mathrm c}=\int_S\vec J\cdot d\vec A\tag*{[7]}
\\]

Write the electric flux through the same oriented surface explicitly.

\\[
\Phi_E=\int_S\vec E\cdot d\vec A\tag*{[8]}
\\]

Stokes' theorem converts the circulation around the boundary into a surface integral of the curl. The path direction and surface normal are related by the right-hand rule.

\\[
\oint_{\mathcal C}\vec B\cdot d\vec l=\int_S(\nabla\times\vec B)\cdot d\vec A\tag*{[9]}
\\]

Substitute equations [7], [8], and [9] into equation [6].

\\[
\int_S(\nabla\times\vec B)\cdot d\vec A=\mu_0\int_S\vec J\cdot d\vec A+\mu_0\epsilon_0\frac{d}{dt}\int_S\vec E\cdot d\vec A\tag*{[10]}
\\]

For a fixed surface, first move the time derivative inside the electric-flux integral. Then collect all terms under one surface integral.

\\[
\begin{aligned}
\frac{d}{dt}\int_S\vec E\cdot d\vec A
&=\int_S\frac{\partial\vec E}{\partial t}\cdot d\vec A,\\
0&=\int_S\left(\nabla\times\vec B-\mu_0\vec J-\mu_0\epsilon_0\frac{\partial\vec E}{\partial t}\right)\cdot d\vec A
\end{aligned}\tag*{[11]}
\\]

Because equation [11] holds for every open surface, its integrand must vanish at each point.

\\[
\nabla\times\vec B=\mu_0\vec J+\mu_0\epsilon_0\frac{\partial\vec E}{\partial t}\tag*{[12]}
\\]

The displacement term also makes the law consistent with charge conservation. Take the divergence of equation [12].

\\[
\nabla\cdot(\nabla\times\vec B)=\mu_0\nabla\cdot\vec J+\mu_0\epsilon_0\frac{\partial}{\partial t}(\nabla\cdot\vec E)\tag*{[13]}
\\]

The divergence of any curl is zero, while the local form of Gauss's law is

\\[
\nabla\cdot\vec E=\frac{\rho}{\epsilon_0}\tag*{[14]}
\\]

Substitute equation [14] into equation [13]. The left side is zero because the divergence of a curl vanishes; cancel \\(\epsilon_0\\), factor out \\(\mu_0\\), and then divide by nonzero \\(\mu_0\\).

\\[
\begin{aligned}
0&=\mu_0\nabla\cdot\vec J+\mu_0\epsilon_0\frac{\partial}{\partial t}\left(\frac{\rho}{\epsilon_0}\right)\\
&=\mu_0\left(\nabla\cdot\vec J+\frac{\partial\rho}{\partial t}\right),\\
0&=\nabla\cdot\vec J+\frac{\partial\rho}{\partial t}
\end{aligned}\tag*{[15]}
\\]

This says that positive outward current from a small region must reduce the charge stored there. Without Maxwell's term, taking the divergence would incorrectly require \\(\nabla\cdot\vec J=0\\) even while charge accumulates on a capacitor plate.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Magnetic field around a changing-flux region",
      question: "A circular path of radius \\(3.0\\,\\mathrm{cm}\\) surrounds a vacuum region where the electric flux increases at \\(2.0\\times10^5\\,\\mathrm{N\\,m^{2}\\,C^{-1}\\,s^{-1}}\\). No conduction current crosses the chosen surface. Assuming circular symmetry, find the displacement current and magnetic-field magnitude on the path.",
      answer: "With no conduction current, equation [6] uses only the changing-flux term. Use \\(1\\,\\mathrm{N\\,C^{-1}}=1\\,\\mathrm{V\\,m^{-1}}\\) to write the given flux rate in \\(\\mathrm{V\\,m\\,s^{-1}}\\), then find the displacement current using \\(\\epsilon_0=8.85\\times10^{-12}\\,\\mathrm{F\\,m^{-1}}\\). \\[I_{\\mathrm{disp}}=\\epsilon_0\\frac{d\\Phi_E}{dt}=(8.85\\times10^{-12}\\,\\mathrm{F\\,m^{-1}})(2.0\\times10^5\\,\\mathrm{V\\,m\\,s^{-1}})=1.77\\times10^{-6}\\,\\mathrm A.\\] Circular symmetry makes \\(B\\) constant and tangent around the path, so the left side of equation [6] is \\(B(2\\pi r)\\). Convert \\(r=3.0\\times10^{-2}\\,\\mathrm m\\), use \\(\\mu_0=4\\pi\\times10^{-7}\\,\\mathrm{N\\,A^{-2}}\\), and solve without rounding the intermediate current. \\[B=\\frac{\\mu_0I_{\\mathrm{disp}}}{2\\pi r}=\\frac{(4\\pi\\times10^{-7}\\,\\mathrm{N\\,A^{-2}})(1.77\\times10^{-6}\\,\\mathrm A)}{2\\pi(3.0\\times10^{-2}\\,\\mathrm m)}=1.2\\times10^{-11}\\,\\mathrm T.\\] **Final result:** \\(I_{\\mathrm{disp}}=1.8\\times10^{-6}\\,\\mathrm A\\) and \\(B=1.2\\times10^{-11}\\,\\mathrm T\\). Including an additional conduction current would be wrong because the stated surface is not crossed by one.",
    },
    {
      title: "One capacitor path, two spanning surfaces",
      question: "A closed path surrounds the lead of a charging capacitor. Why do a wire-cutting surface and a gap-crossing surface predict the same magnetic circulation, and why is the result not proportional to twice the charging current?",
      answer: "Let the charging current be \\(I\\). The wire-cutting surface has \\(I_{\\mathrm c}=I\\) and, in the idealised choice, no changing electric flux contribution. The gap-crossing surface has \\(I_{\\mathrm c}=0\\), but equation [5] gives \\(I_{\\mathrm{disp}}=I\\). Equation [6] therefore gives the same result for either surface: \\[\\oint_{\\mathcal C}\\vec B\\cdot d\\vec l=\\mu_0 I.\\] The result is not \\(2\\mu_0I\\) because the conduction and displacement contributions described here belong to two alternative spanning surfaces, not two currents crossing the same selected surface.",
    },
  ]}
/>
`;
