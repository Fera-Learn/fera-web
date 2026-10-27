export const content = String.raw`## Principle

A charging capacitor has current in its wires even though no charge crosses the insulating gap between its plates.

When a capacitor charges, conduction current reaches its plates but no charge crosses the vacuum gap. The changing electric flux in that gap nevertheless acts as a displacement current and produces the same magnetic effect around the circuit.

## Notation

<Notation
  items={[
    { symbol: "q,I_{\\mathrm c}", meaning: "charge on a capacitor plate and conduction current", unit: "C, A" },
    { symbol: "\\vec E,E", meaning: "electric field and its magnitude", unit: "N C^{-1}, N C^{-1}" },
    { symbol: "\\Phi_E", meaning: "electric flux through the chosen surface", unit: "N m^{2} C^{-1}" },
    { symbol: "\\epsilon_0", meaning: "permittivity of free space", unit: "F m^{-1}" },
    { symbol: "d\\vec A,A", meaning: "oriented area element and surface area", unit: "m^{2}, m^{2}" },
    { symbol: "I_{\\mathrm{disp}}", meaning: "displacement current through a surface", unit: "A" },
    { symbol: "\\vec J_{\\mathrm{disp}},J_{\\mathrm{disp}}", meaning: "displacement current density and its magnitude", unit: "A m^{-2}, A m^{-2}" },
    { symbol: "\\vec D,\\vec P", meaning: "electric displacement and polarisation", unit: "C m^{-2}, C m^{-2}" },
    { symbol: "t", meaning: "time", unit: "s" },
  ]}
/>

## The Core Method

Consider an ideal parallel-plate capacitor being charged through wires. Charge arrives at one plate and leaves the other, but the vacuum gap contains no mobile charge carriers, so its conduction current is zero. Let the closed Gaussian pillbox surface \\(G\\) enclose the positive plate. Gauss's law gives

\\[
\oint_G\vec E\cdot d\vec A=\frac{q}{\epsilon_0}\tag*{[1]}
\\]

Inside the conductor the electric field is zero, and the side of a thin pillbox contributes no flux. Ignoring edge fringing, only the face \\(S\\) in the gap contributes, so the electric flux through the gap is

\\[
\Phi_E=\int_S\vec E\cdot d\vec A=\frac{q}{\epsilon_0}\tag*{[2]}
\\]

The conduction current in the wire is the rate at which charge builds up on the plate.

\\[
I_{\mathrm c}=\frac{dq}{dt}\tag*{[3]}
\\]

Differentiate equation [2] with respect to time, then use equation [3].

\\[
\frac{d\Phi_E}{dt}=\frac{1}{\epsilon_0}\frac{dq}{dt}=\frac{I_{\mathrm c}}{\epsilon_0}\tag*{[4]}
\\]

This motivates the vacuum displacement current through a surface.

\\[
I_{\mathrm{disp}}=\epsilon_0\frac{d\Phi_E}{dt}\tag*{[5]}
\\]

For the ideal charging capacitor, equations [4] and [5] show that the displacement current across the gap matches the conduction current in the wire.

\\[
I_{\mathrm{disp}}=I_{\mathrm c}\tag*{[6]}
\\]

No charge has crossed the vacuum gap: equation [6] equates two current values, not two charge-transport mechanisms. At each point in vacuum, the corresponding displacement current density is

\\[
\vec J_{\mathrm{disp}}=\epsilon_0\frac{\partial\vec E}{\partial t}\tag*{[7]}
\\]

Current density is local and is measured per unit area. The displacement current is the signed surface integral of that density, so \\(I_{\mathrm{disp}}\\) and \\(\vec J_{\mathrm{disp}}\\) must not be used interchangeably.

\\[
I_{\mathrm{disp}}=\int_S\vec J_{\mathrm{disp}}\cdot d\vec A\tag*{[8]}
\\]

The vacuum definition is not the complete material description. In polarised matter, the electric displacement includes both the vacuum-field contribution and the material polarisation.

\\[
\vec D=\epsilon_0\vec E+\vec P\tag*{[9]}
\\]

The material displacement current density is therefore the time derivative of \\(\vec D\\).

\\[
\vec J_{\mathrm{disp}}=\frac{\partial\vec D}{\partial t}=\epsilon_0\frac{\partial\vec E}{\partial t}+\frac{\partial\vec P}{\partial t}\tag*{[10]}
\\]

The second term is the contribution from changing polarisation. It can be nonzero even when the vacuum-field term alone does not describe the material response. The current through a chosen material surface is still found by integrating the density, not by treating the density itself as a current.

\\[
I_{\mathrm{disp}}=\int_S\frac{\partial\vec D}{\partial t}\cdot d\vec A\tag*{[11]}
\\]

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Displacement current in a vacuum capacitor",
      question: "A vacuum parallel-plate capacitor has plate area \\(2.0\\times10^{-2}\\,\\mathrm{m^{2}}\\). Its uniform electric field increases at \\(3.0\\times10^5\\,\\mathrm{N\\,C^{-1}\\,s^{-1}}\\). Find the displacement current density and the displacement current, taking the surface normal along the field.",
      answer: "Use the vacuum density in equation [7]. Since \\(1\\,\\mathrm{N\\,C^{-1}}=1\\,\\mathrm{V\\,m^{-1}}\\), substitute \\(\\epsilon_0=8.85\\times10^{-12}\\,\\mathrm{F\\,m^{-1}}\\): \\[J_{\\mathrm{disp}}=\\epsilon_0\\frac{dE}{dt}=(8.85\\times10^{-12}\\,\\mathrm{F\\,m^{-1}})(3.0\\times10^5\\,\\mathrm{V\\,m^{-1}\\,s^{-1}})=2.655\\times10^{-6}\\,\\mathrm{A\\,m^{-2}}.\\] The field and density are uniform and perpendicular to the plate, so integrate over the plate area without rounding the intermediate value. \\[I_{\\mathrm{disp}}=J_{\\mathrm{disp}}A=(2.655\\times10^{-6}\\,\\mathrm{A\\,m^{-2}})(2.0\\times10^{-2}\\,\\mathrm{m^{2}})=5.3\\times10^{-8}\\,\\mathrm A.\\] **Final result:** the density is \\(2.7\\times10^{-6}\\,\\mathrm{A\\,m^{-2}}\\), while the current is \\(5.3\\times10^{-8}\\,\\mathrm A\\). Their different units are a useful check that they have not been conflated.",
    },
    {
      title: "Two surfaces across a charging circuit",
      question: "A capacitor is charging at \\(0.40\\,\\mathrm A\\). One surface bounded by a loop cuts the connecting wire, while another surface with the same boundary bows between the capacitor plates. What crosses each surface?",
      answer: "The wire-cutting surface is crossed by \\(0.40\\,\\mathrm A\\) of conduction current carried by charges. The gap surface is crossed by no conduction current because no charge travels through the vacuum. Instead, the plate charge changes at \\(dq/dt=0.40\\,\\mathrm A\\), so equations [4] and [5] give \\[I_{\\mathrm{disp}}=\\epsilon_0\\frac{d\\Phi_E}{dt}=\\frac{dq}{dt}=0.40\\,\\mathrm A.\\] **Final result:** the two surfaces have equal current contributions of different kinds. Displacement current preserves the magnetic effect without claiming that charge crosses the gap.",
    },
  ]}
/>
`;
