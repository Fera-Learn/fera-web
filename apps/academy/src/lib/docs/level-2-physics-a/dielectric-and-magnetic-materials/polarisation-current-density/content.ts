export const content = String.raw`## Principle

When the tiny bound-charge displacements inside an insulator change, charge is genuinely moving for that interval of time.

Time-dependent polarisation moves bound charge and therefore constitutes an electric current. The local polarisation current density is the time derivative of the polarisation, and it must not be confused with free conduction current.

## Notation

<Notation
  items={[
    { symbol: "\\vec P", meaning: "polarisation", unit: "C m^{-2}" },
    { symbol: "\\vec J_{\\mathrm p}", meaning: "polarisation current density", unit: "A m^{-2}" },
    { symbol: "\\vec J_{\\mathrm f}", meaning: "free current density; conductive in the model below", unit: "A m^{-2}" },
    { symbol: "\\rho_{\\mathrm b}", meaning: "bound volume charge density", unit: "C m^{-3}" },
    { symbol: "Q_{\\mathrm b},I_{\\mathrm p}", meaning: "transported bound charge and polarisation current", unit: "C, A" },
    { symbol: "d\\vec A,dV", meaning: "outward area vector and volume element", unit: "m^{2}, m^{3}" },
    { symbol: "\\omega,t", meaning: "angular frequency and time", unit: "rad s^{-1}, s" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
  ]}
/>

## The Core Method

Let the dipole displacements change during a short interval \\(dt\\). The bound charge crossing a small oriented area \\(d\vec A\\) equals the change in polarisation flux through that area.

\\[
dQ_{\mathrm b}
=\left(\frac{\partial\vec P}{\partial t}\cdot d\vec A\right)dt.
\tag*{[1]}
\\]

Dividing by time and using the definition of current density gives

\\[
\frac{dQ_{\mathrm b}}{dt}
=\frac{\partial\vec P}{\partial t}\cdot d\vec A
=\vec J_{\mathrm p}\cdot d\vec A.
\tag*{[2]}
\\]

Because the area and its orientation are arbitrary, the vectors must agree locally:

\\[
\boxed{\vec J_{\mathrm p}=\frac{\partial\vec P}{\partial t}}.
\tag*{[3]}
\\]

The same result is consistent with charge conservation. Bound charge obeys the continuity equation and satisfies \\(\rho_{\mathrm b}=-\nabla\cdot\vec P\\).

\\[
\frac{\partial\rho_{\mathrm b}}{\partial t}
+\nabla\cdot\vec J_{\mathrm p}=0.
\tag*{[4]}
\\]

Substitution of the bound-charge relation gives

\\[
-\nabla\cdot\frac{\partial\vec P}{\partial t}
+\nabla\cdot\vec J_{\mathrm p}=0,
\tag*{[5]}
\\]

which is satisfied point by point by equation [3]. Integrating over any volume gives the corresponding balance between changing bound charge and outward current.

\\[
\frac{d}{dt}\int_V\rho_{\mathrm b}\,dV
=-\oint_{\partial V}\vec J_{\mathrm p}\cdot d\vec A.
\tag*{[6]}
\\]

For sinusoidal fields, adopt the complex convention \\(\widetilde{\vec P}=\vec P_0e^{-i\omega t}\\), with the physical field given by its real part. A time derivative then multiplies the amplitude by \\(-i\omega\\).

\\[
\widetilde{\vec J}_{\mathrm p}
=-i\omega\widetilde{\vec P}.
\tag*{[7]}
\\]

In a dielectric that also conducts, assume there is no impressed free-current source, so the free current is entirely conductive. The free-plus-polarisation contribution to Ampere-Maxwell's law is then

\\[
\vec J_{\mathrm{electric}}
=\vec J_{\mathrm f}+\vec J_{\mathrm p}.
\tag*{[8]}
\\]

The distinction is physical: \\(\vec J_{\mathrm f}\\) transports mobile charge through the material, whereas \\(\vec J_{\mathrm p}\\) records small displacements or rotations of bound charges. A spatially uniform \\(\vec P(t)\\) can therefore produce nonzero current density even though \\(\rho_{\mathrm b}=-\nabla\cdot\vec P=0\\) in the bulk; charge then accumulates at the material surfaces.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Current while a dielectric polarises",
      question: "Uniform polarisation in a dielectric rises from zero to \\(4.0\\times10^{-3}\\,\\mathrm{C\\,m^{-2}}\\) in \\(2.0\\,\\mu\\mathrm s\\). If it changes at a constant rate normal to an electrode of area \\(5.0\\,\\mathrm{cm^2}\\), find the polarisation current density, current, and transported bound charge.",
      answer: "Equation [3] gives \\[J_{\\mathrm p}=\\frac{\\Delta P}{\\Delta t}=\\frac{4.0\\times10^{-3}}{2.0\\times10^{-6}}=2.0\\times10^3\\,\\mathrm{A\\,m^{-2}}.\\] The area is \\(5.0\\times10^{-4}\\,\\mathrm{m^2}\\), so \\[I_{\\mathrm p}=J_{\\mathrm p}A=(2.0\\times10^3)(5.0\\times10^{-4})=1.0\\,\\mathrm A.\\] Finally, \\[\\Delta Q_{\\mathrm b}=I_{\\mathrm p}\\Delta t=(1.0)(2.0\\times10^{-6})=2.0\\times10^{-6}\\,\\mathrm C,\\] equal to \\(A\\Delta P\\). **Final result:** \\(J_{\\mathrm p}=2.0\\times10^3\\,\\mathrm{A\\,m^{-2}}\\), \\(I_{\\mathrm p}=1.0\\,\\mathrm A\\), and \\(\\Delta Q_{\\mathrm b}=2.0\\,\\mu\\mathrm C\\).",
    },
    {
      title: "Phase of a sinusoidal polarisation current",
      question: "If \\(\\vec P(t)=P_0\\cos(\\omega t)\\hat x\\), when does the polarisation current vanish, and how is its phase related to the polarisation?",
      answer: "Differentiation gives \\(\\vec J_{\\mathrm p}(t)=-\\omega P_0\\sin(\\omega t)\\hat x\\). It vanishes whenever the polarisation is at a positive or negative maximum and has maximum magnitude whenever the polarisation passes through zero. **Final result:** the current leads the polarisation by one quarter-cycle; in the \\(e^{-i\\omega t}\\) convention this is the factor \\(-i\\omega\\) in equation [7].",
    },
  ]}
/>
`;
