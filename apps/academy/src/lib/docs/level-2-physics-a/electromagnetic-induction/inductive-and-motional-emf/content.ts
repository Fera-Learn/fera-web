export const content = String.raw`## Principle

A voltmeter responds both when a magnet changes near a fixed loop and when the loop itself moves through a magnetic field.

An emf can arise in two distinct ways: a changing magnetic field can induce an electric field around a stationary loop, or motion through a magnetic field can push charges along a conductor. Both mechanisms can be described through changing magnetic flux, but only motional emf requires the conductor itself to move.

## Notation

<Notation
  items={[
    { symbol: "\\vec B,B", meaning: "magnetic field and its magnitude", unit: "T, T" },
    { symbol: "\\Phi_B", meaning: "magnetic flux through a chosen surface", unit: "Wb" },
    { symbol: "\\mathcal C(t),S(t)", meaning: "possibly moving loop and a spanning surface bounded by it" },
    { symbol: "d\\vec l,d\\vec S", meaning: "directed line element and oriented area element", unit: "m, m^{2}" },
    { symbol: "\\mathcal E,V", meaning: "signed emf and voltage magnitude", unit: "V, V" },
    { symbol: "q,\\vec F", meaning: "charge and electromagnetic force on it", unit: "C, N" },
    { symbol: "\\vec u,u", meaning: "conductor velocity and its magnitude", unit: "m s^{-1}, m s^{-1}" },
    { symbol: "\\vec E,E", meaning: "electric field and its magnitude", unit: "V m^{-1}, V m^{-1}" },
    { symbol: "A,w,x", meaning: "field-filled area, conductor width, and displacement", unit: "m^{2}, m, m" },
    { symbol: "\\theta", meaning: "angle between the magnetic field and surface normal", unit: "rad" },
    { symbol: "t", meaning: "time", unit: "s" },
  ]}
/>

## The Core Method

Magnetic flux measures how much magnetic field passes through a surface \\(S\\) bounded by the loop. The area element \\(d\vec S\\) is normal to that surface, so the dot product includes both field strength and orientation.

\\[
\Phi_B=\int_S\vec B\cdot d\vec S\tag*{[1]}
\\]

For a uniform field over a flat area \\(A\\), let \\(\theta\\) be the angle between \\(\vec B\\) and the chosen surface normal. The flux is largest when the field is normal to the surface and zero when the field is parallel to it.

\\[
\Phi_B=BA\cos\theta\tag*{[2]}
\\]

For a stationary loop, choose a positive contour direction and use the right-hand rule to choose the matching surface normal. Faraday's law gives the signed inductive emf; the minus sign says that the induced effect opposes the change in signed flux.

\\[
\mathcal E=-\frac{d\Phi_B}{dt},\qquad V=|\mathcal E|\tag*{[3]}
\\]

The magnetic field does not have to be nonzero at the wire. A loop surrounding a long solenoid can lie where \\(B\\) is approximately zero, yet a changing field inside the solenoid changes the flux through the loop's spanning surface and therefore induces an emf around the stationary loop.

For motional emf, charges move with the conductor through a magnetic field. The Lorentz force includes electric and magnetic contributions.

<PhysicsDiagram slug="moving-loop-motional-emf" />

The loop moves downward at speed \\(u\\) while its width \\(w\\) cuts across the rightward magnetic field. Charges in the moving conductor therefore experience the magnetic part of the Lorentz force, and the voltmeter records the resulting charge separation.

\\[
\vec F=q\left(\vec E+\vec u\times\vec B\right)\tag*{[4]}
\\]

In an isolated moving conductor, the magnetic force initially separates positive and negative charge. Separation continues until the resulting electric force balances the magnetic force, so the net force on a nonzero charge in steady state is zero.

\\[
\begin{aligned}
\vec 0&=q(\vec E+\vec u\times\vec B)\\
\vec 0&=\vec E+\vec u\times\vec B\\
\vec E&=-\vec u\times\vec B
\end{aligned}\tag*{[5]}
\\]

If the motion and magnetic field are perpendicular, the magnitude of the cross product gives the charge-separation field.

\\[
E=|\vec u\times\vec B|=uB\sin 90^\circ=uB\tag*{[6]}
\\]

Suppose the conductor segment perpendicular to both \\(\vec u\\) and \\(\vec B\\) has width \\(w\\). The voltage magnitude across its ends is the uniform field magnitude multiplied by that width.

\\[
V=Ew=Buw\tag*{[7]}
\\]

The same result follows from the moving-loop flux rule. If the boundary of a rectangular loop moves a distance \\(x(t)\\) through a uniform field, its field-filled area is \\(A(t)=wx(t)\\); because \\(dx/dt=u\\), the area changes at rate

\\[
\frac{dA}{dt}=w\frac{dx}{dt}=wu\tag*{[8]}
\\]

For a moving circuit, the emf includes both the electric force and the magnetic force on charges moving with the conductor. The contour \\(\mathcal C(t)\\) and its spanning surface \\(S(t)\\) use right-hand-linked orientations. Applying this general flux rule to the rectangular geometry gives

\\[
\begin{aligned}
\mathcal E
&=\oint_{\mathcal C(t)}(\vec E+\vec u\times\vec B)\cdot d\vec l
=-\frac{d}{dt}\int_{S(t)}\vec B\cdot d\vec S,\\
|\mathcal E|&=B\left|\frac{dA}{dt}\right|=Buw
\end{aligned}\tag*{[9]}
\\]

Equations [7] and [9] agree in magnitude because they describe the same charge separation from two viewpoints. The sign of \\(\mathcal E\\) follows the chosen orientation, while \\(V\\) is the corresponding voltage magnitude.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Voltage across a moving conductor",
      question: "A conductor of width \\(0.25\\,\\mathrm m\\) moves at \\(3.0\\,\\mathrm{m\\,s^{-1}}\\) perpendicular to a uniform \\(0.80\\,\\mathrm T\\) magnetic field. Find the motional emf magnitude.",
      answer: "The velocity, field, and conductor width are mutually perpendicular, so the magnitude relation is \\(|\\mathcal E|=Buw\\). Substitute the values with no angular factor: \\[|\\mathcal E|=(0.80)(3.0)(0.25)=0.60\\,\\mathrm V.\\] **Final result:** the emf magnitude is \\(0.60\\,\\mathrm V\\). The unit check is \\(\\mathrm{T\\,m\\,m\\,s^{-1}}=\\mathrm V\\), and doubling the speed would double the emf.",
    },
    {
      title: "A stationary loop outside a changing solenoid field",
      question: "A stationary wire loop surrounds the middle of a long solenoid. The magnetic field is changing inside the solenoid but is approximately zero at every point on the wire. Is an emf induced in the loop?",
      answer: "Yes. Choose a surface bounded by the stationary loop that passes across the solenoid interior. Although \\(\\vec B\\approx\\vec 0\\) at the wire, the field is nonzero on part of that surface, so the linked flux is \\[\\Phi_B=\\int_S\\vec B\\cdot d\\vec S.\\] As the interior field changes, \\(d\\Phi_B/dt\\neq0\\), and equation [3] gives a nonzero inductive emf magnitude. The trap is to inspect only the field at the wire: induction depends on changing linked flux, not on the local value of \\(B\\) along the conductor.",
    },
  ]}
/>
`;
