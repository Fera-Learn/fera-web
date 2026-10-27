export const content = String.raw`## Principle

A changing magnetic field can drive charges around a closed path even where no battery is connected.

A changing magnetic flux creates an electric field that circulates around the changing flux. Faraday's integral law measures that circulation around a loop, while Stokes' theorem turns the same statement into Maxwell's local curl equation.

## Notation

<Notation
  items={[
    { symbol: "\\vec E,\\vec B,B", meaning: "electric field, magnetic field, and magnetic-field magnitude", unit: "V m^{-1}, T, T" },
    { symbol: "\\Phi_B", meaning: "signed magnetic flux through a surface", unit: "Wb" },
    { symbol: "\\mathcal C,S", meaning: "fixed closed contour and an oriented surface bounded by it" },
    { symbol: "d\\vec l,d\\vec A", meaning: "directed line element and oriented area element", unit: "m, m^{2}" },
    { symbol: "\\nabla,\\nabla\\times", meaning: "gradient and curl operators", unit: "m^{-1}, m^{-1}" },
    { symbol: "a,r", meaning: "solenoid radius and circular-path radius", unit: "m, m" },
    { symbol: "E_\\phi", meaning: "signed tangential component of the induced electric field", unit: "V m^{-1}" },
    { symbol: "t", meaning: "time", unit: "s" },
    { symbol: "V", meaning: "electrostatic potential", unit: "V" },
  ]}
/>

## The Core Method

Choose the direction of \\(d\vec A\\) first. The positive direction around its boundary \\(\mathcal C\\) is then fixed by the right-hand rule: point the right thumb along \\(d\vec A\\), and the curled fingers give positive \\(d\vec l\\). For a fixed contour and surface, the signed integral form of Faraday's law is

\\[
\oint_{\mathcal C}\vec E\cdot d\vec l=-\frac{d\Phi_B}{dt}\tag*{[1]}
\\]

The magnetic flux is signed because it is a dot product with the chosen area orientation.

\\[
\Phi_B=\int_S\vec B\cdot d\vec A\tag*{[2]}
\\]

Stokes' theorem relates circulation around the boundary to curl through the surface, using the same right-hand-linked orientations.

\\[
\oint_{\mathcal C}\vec E\cdot d\vec l=\int_S(\nabla\times\vec E)\cdot d\vec A\tag*{[3]}
\\]

Substitute equations [2] and [3] directly into equation [1].

\\[
\int_S(\nabla\times\vec E)\cdot d\vec A=-\frac{d}{dt}\int_S\vec B\cdot d\vec A\tag*{[4]}
\\]

The surface is fixed, so its shape and area elements do not change with time. The time derivative can therefore be moved inside the surface integral.

\\[
\frac{d}{dt}\int_S\vec B\cdot d\vec A=\int_S\frac{\partial\vec B}{\partial t}\cdot d\vec A\tag*{[5]}
\\]

Using equation [5] in equation [4] places both terms in one integral over the same surface.

\\[
\int_S\left(\nabla\times\vec E+\frac{\partial\vec B}{\partial t}\right)\cdot d\vec A=0\tag*{[6]}
\\]

Equation [6] holds for every arbitrary fixed surface, including an arbitrarily small patch with any orientation. Its integrand must therefore vanish at each point.

\\[
\nabla\times\vec E=-\frac{\partial\vec B}{\partial t}\tag*{[7]}
\\]

The minus sign is Lenz's-law information, not an optional convention. Reversing \\(d\vec A\\) also reverses the positive boundary direction, so both signed integrals reverse together and equation [7] is unchanged.

The physical effect is especially clear outside a long solenoid. Let the solenoid have radius \\(a\\), let its nearly uniform internal field be \\(B(t)\\) along the chosen positive area direction, and choose a circular path of radius \\(r>a\\). Although the magnetic field can be negligible at the path itself, the path encloses changing flux.

\\[
\Phi_B=\pi a^2B(t)\tag*{[8]}
\\]

Circular symmetry makes the induced field tangent to the path with one signed component \\(E_\phi(r)\\), so the circulation is

\\[
\oint_{\mathcal C}\vec E\cdot d\vec l=E_\phi(r)(2\pi r)\tag*{[9]}
\\]

Substituting equations [8] and [9] into Faraday's law gives the full intermediate equation.

\\[
E_\phi(r)(2\pi r)=-\pi a^2\frac{dB}{dt}\tag*{[10]}
\\]

Dividing both sides by \\(2\pi r\\) gives the circulating electric field outside the solenoid.

\\[
E_\phi(r)=-\frac{a^2}{2r}\frac{dB}{dt}\tag*{[11]}
\\]

Thus \\(\vec B\\) need not be nonzero at the wire or observation point: it is the changing magnetic flux through a spanning surface that creates the circulation there. If \\(dB/dt\\) is positive in the chosen area direction, equation [11] is negative, so the electric field circulates opposite to the positive boundary direction.

For an electrostatic, time-independent field, a scalar potential can describe the electric field.

\\[
\vec E=-\nabla V\tag*{[12]}
\\]

The curl of any scalar gradient is zero, so equation [12] implies

\\[
\nabla\times\vec E=-\nabla\times(\nabla V)=\vec 0\tag*{[13]}
\\]

Equation [7] shows the limitation: where the magnetic field changes with time, the induced electric field generally has nonzero curl and cannot be represented by \\(-\nabla V\\) alone. Treating the induced field as electrostatic would erase the very circulation Faraday's law predicts.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Field outside a changing solenoid",
      question: "A long solenoid of radius \\(2.0\\,\\mathrm{cm}\\) has an internal magnetic field increasing out of the page at \\(0.50\\,\\mathrm{T\\,s^{-1}}\\). Find the induced electric field \\(5.0\\,\\mathrm{cm}\\) from its axis and state its direction.",
      answer: "Take out of the page as the positive area direction, so the positive boundary direction is anticlockwise. Convert the radii: \\(a=2.0\\times10^{-2}\\,\\mathrm m\\) and \\(r=5.0\\times10^{-2}\\,\\mathrm m\\). The enclosed flux changes at the rate \\[\\frac{d\\Phi_B}{dt}=\\pi a^2\\frac{dB}{dt}.\\] Circular symmetry gives \\[\\oint_{\\mathcal C}\\vec E\\cdot d\\vec l=E_\\phi(2\\pi r).\\] Faraday's law equates these signed quantities: \\[E_\\phi(2\\pi r)=-\\pi a^2\\frac{dB}{dt}.\\] Divide by \\(2\\pi r\\), then substitute the data: \\[E_\\phi=-\\frac{a^2}{2r}\\frac{dB}{dt}=-\\frac{(2.0\\times10^{-2})^2}{2(5.0\\times10^{-2})}(0.50)=-2.0\\times10^{-3}\\,\\mathrm{V\\,m^{-1}}.\\] **Final result:** the magnitude is \\(2.0\\times10^{-3}\\,\\mathrm{V\\,m^{-1}}\\). The negative sign means clockwise circulation, opposing the increasing outward flux.",
    },
    {
      title: "A field where the local magnetic field is zero",
      question: "An ideal long solenoid has a magnetic field confined to its interior. Its current changes with time, and a stationary wire loop surrounds it outside. How can the wire experience an induced electric field when the magnetic field at the wire is zero?",
      answer: "The statement that the local magnetic field at the wire is zero does not say that the magnetic flux through the loop is zero. A surface spanning the loop cuts through the solenoid, where the internal magnetic field changes, so \\[\\frac{d\\Phi_B}{dt}\\ne0.\\] Faraday's law then requires \\[\\oint_{\\mathcal C}\\vec E\\cdot d\\vec l=-\\frac{d\\Phi_B}{dt}\\ne0.\\] **Final result:** the changing enclosed field creates a circulating electric field outside the solenoid. The wire merely provides charges that respond to that field; the induced electric field exists in the surrounding space even without the wire. The trap is to inspect only \\(\\vec B\\) at the wire instead of the flux through the whole bounded surface.",
    },
  ]}
/>
`;
