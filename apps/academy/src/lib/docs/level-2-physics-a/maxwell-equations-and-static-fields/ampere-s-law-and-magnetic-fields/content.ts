export const content = String.raw`## Principle

Two nearby wires carrying current in the same direction pull towards one another.

A steady electric current creates a magnetic field that circles the current. Ampere's law turns that circulation into a practical field calculation when the current and geometry have enough symmetry.

## Notation

<Notation
  items={[
    { symbol: "\\vec F,q,\\vec v", meaning: "magnetic force, carrier charge, and carrier velocity", unit: "N, C, m s^{-1}" },
    { symbol: "\\vec B", meaning: "magnetic field", unit: "T" },
    { symbol: "I,I_{\\mathrm{enc}}", meaning: "current and signed current enclosed by an Amperian path", unit: "A, A" },
    { symbol: "d\\vec l", meaning: "small vector along the chosen path direction", unit: "m" },
    { symbol: "\\mathcal C", meaning: "closed Amperian path" },
    { symbol: "\\mu_0", meaning: "permeability of free space", unit: "N A^{-2}" },
    { symbol: "\\epsilon_0", meaning: "permittivity of free space", unit: "F m^{-1}" },
    { symbol: "\\Phi_E", meaning: "electric flux through a surface bounded by the path", unit: "N m^{2} C^{-1}" },
  ]}
/>

## The Core Method

A magnetic field acts on a moving charge through the magnetic part of the Lorentz force. The ordered cross product fixes a force perpendicular to both the carrier velocity and the field.

\\[
\vec F=q\vec v\times\vec B\tag*{[1]}
\\]

In a wire, the forces on many carriers transfer to the lattice. For carrier number density \\(n\\), wire cross-sectional area \\(A\\), and drift-speed magnitude \\(v_{\mathrm d}\\), the current magnitude is \\(I=n|q|Av_{\mathrm d}\\). For a straight wire segment whose length vector \\(\vec\ell\\) points in the conventional-current direction, adding the carrier forces gives the magnetic force on the segment.

\\[
\vec F_{\mathrm{wire}}=I\vec\ell\times\vec B\tag*{[2]}
\\]

For a long straight wire, cylindrical symmetry makes the field azimuthal: it has the same magnitude at every point a distance \\(r\\) from the wire and points along the local azimuthal unit vector \\(\hat\phi\\). The right-hand grip rule sets the sign of \\(\hat\phi\\).

\\[
\vec B(r)=\frac{\mu_0 I}{2\pi r}\hat\phi\tag*{[3]}
\\]

Ampere's circuital law relates the field around any closed path \\(\mathcal C\\) to the net current piercing a surface bounded by that path. Curl the fingers of the right hand along the chosen path direction; the thumb defines positive enclosed current, so current in the opposite direction counts negatively.

\\[
\oint_{\mathcal C}\vec B\cdot d\vec l=\mu_0 I_{\mathrm{enc}}\tag*{[4]}
\\]

Choose a circular path of radius \\(r\\) centred on one long straight wire. Symmetry makes \\(\vec B\\) tangent to every path element and makes \\(B(r)\\) constant around the circle, whose circumference is \\(2\pi r\\).

\\[
\oint_{\mathcal C}\vec B\cdot d\vec l=B(r)\oint_{\mathcal C}dl=B(r)(2\pi r)\tag*{[5]}
\\]

The circle encloses the wire's current \\(I\\), so substituting equation [5] into equation [4] and dividing by \\(2\pi r\\) recovers the straight-wire field magnitude.

\\[
B(r)(2\pi r)=\mu_0 I\quad\Longrightarrow\quad B(r)=\frac{\mu_0 I}{2\pi r}\tag*{[6]}
\\]

For two long parallel wires separated by distance \\(d\\), let currents \\(I_1\\) and \\(I_2\\) flow in the same direction and let \\(L\\) be a length of the second wire. The field of the first wire and equation [2] give a force toward the first wire; reversing either current reverses the force.

\\[
\frac{F}{L}=I_2B_1=\frac{\mu_0 I_1I_2}{2\pi d}\tag*{[7]}
\\]

Equation [4] is the magnetostatic circuital law for steady currents. When electric flux changes with time, the complete Maxwell-Ampere law contains an additional term.

\\[
\oint_{\mathcal C}\vec B\cdot d\vec l=\mu_0 I_{\mathrm{enc}}+\mu_0\epsilon_0\frac{d\Phi_E}{dt}\tag*{[8]}
\\]

The first term describes conduction current through the path. The second describes a changing electric field, so equation [4] is valid only when \\(d\Phi_E/dt=0\\).

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Field beside a long wire",
      question: "A long straight wire carries a steady current of \\(5.0\\,\\mathrm A\\). Find the magnetic-field magnitude \\(4.0\\,\\mathrm{cm}\\) from the wire.",
      answer: "The wire has cylindrical symmetry, so use the straight-wire result. Convert the distance first: \\(r=4.0\\,\\mathrm{cm}=4.0\\times10^{-2}\\,\\mathrm m\\). Then \\[B=\\frac{\\mu_0 I}{2\\pi r}=\\frac{(4\\pi\\times10^{-7})(5.0)}{2\\pi(4.0\\times10^{-2})}=2.5\\times10^{-5}\\,\\mathrm T.\\] **Final result:** the field magnitude is \\(2.5\\times10^{-5}\\,\\mathrm T\\), tangent to a circle centred on the wire. As a check, the inverse dependence on \\(r\\) means that doubling the distance would halve this value.",
    },
    {
      title: "Direction and attraction of parallel currents",
      question: "Two vertical parallel wires carry current upward. Use symmetry and right-hand rules to determine the field of the left wire at the right wire and the resulting force on the right wire.",
      answer: "Cylindrical symmetry makes the left wire's field tangent to a circle around that wire. At a point to its right, the right-hand grip rule gives a field into the page. For the right wire, the current-length vector points upward, so \\[\\vec F_2=I_2\\vec\\ell\\times\\vec B_1\\] points left, toward the first wire. **Final result:** the wires attract. Reversing one current would reverse the force and make the wires repel.",
    },
  ]}
/>
`;
