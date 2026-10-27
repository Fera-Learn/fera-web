export const content = String.raw`## Principle

The field around an isolated point cannot prefer left over right, while the field around a long straight wire cannot prefer one position along the wire.

Symmetry determines which field components and coordinate dependences are allowed. Maxwell's differential equations then determine the spatial power law, while an integral law fixes the remaining constant from the enclosed source.

## Notation

<Notation
  items={[
    { symbol: "\\vec E,\\vec B", meaning: "electric and magnetic fields", unit: "V m^{-1}, T" },
    { symbol: "q,I", meaning: "point charge and current along positive z in an infinite straight wire", unit: "C, A" },
    { symbol: "x,y,z", meaning: "right-handed Cartesian coordinates", unit: "m, m, m" },
    { symbol: "r,s", meaning: "spherical radius and cylindrical distance from the wire axis", unit: "m, m" },
    { symbol: "\\hat r,\\hat\\phi", meaning: "radial spherical and azimuthal cylindrical unit vectors", unit: "1" },
    { symbol: "E_r(r),B_\\phi(s)", meaning: "allowed electric and magnetic field components", unit: "V m^{-1}, T" },
    { symbol: "C_E,C_B", meaning: "constants fixed by the electric charge and wire current", unit: "V m, T m" },
    { symbol: "\\epsilon_0,\\mu_0", meaning: "vacuum permittivity and permeability", unit: "F m^{-1}, H m^{-1}" },
    { symbol: "\\nabla", meaning: "spatial differential operator", unit: "m^{-1}" },
    { symbol: "d\\vec S,d\\vec\\ell", meaning: "outward area element and directed path element", unit: "m^{2}, m" },
  ]}
/>

## The Core Method

For an isolated point charge, rotations about the charge cannot change the physical configuration. No tangential direction is preferred, so the field must be radial, and equal radii must have equal magnitudes.

\\[
\vec E=E_r(r)\hat r.
\tag*{[1]}
\\]

Outside the charge, the local charge density is zero. Electric Gauss's law therefore gives \\(\nabla\cdot\vec E=0\\). The divergence of [1] in spherical coordinates is

\\[
\nabla\cdot\vec E
=\frac{1}{r^2}\frac{d}{dr}\left(r^2E_r\right)=0.
\tag*{[2]}
\\]

Multiply by \\(r^2\\), integrate with respect to \\(r\\), and divide by \\(r^2\\).

\\[
\frac{d}{dr}(r^2E_r)=0
\quad\Longrightarrow\quad
r^2E_r=C_E
\quad\Longrightarrow\quad
E_r=\frac{C_E}{r^2}.
\tag*{[3]}
\\]

The differential equation fixes the inverse-square dependence but not the constant. Apply the integral Gauss law to a sphere of radius \\(r\\), on which \\(E_r\\) is constant and parallel to \\(d\vec S\\).

\\[
\oint\vec E\cdot d\vec S
=E_r(4\pi r^2)
=4\pi C_E
=\frac{q}{\epsilon_0}
\quad\Longrightarrow\quad
\vec E=\frac{q}{4\pi\epsilon_0r^2}\hat r.
\tag*{[4]}
\\]

For an infinite straight wire along \\(z\\), translations along the wire and rotations about it leave the source unchanged. The magnetic field cannot select an axial position or azimuthal starting direction. Reflection symmetry excludes radial and axial field components, leaving an azimuthal field whose magnitude depends only on \\(s\\). The right-hand rule then fixes its direction: \\(\hat\phi\\) is the field direction for \\(I\gt0\\) along positive \\(z\\).

\\[
\vec B=B_\phi(s)\hat\phi.
\tag*{[5]}
\\]

Outside the wire, the local current density is zero and the fields are steady, so the Ampere-Maxwell law gives \\(\nabla\times\vec B=\vec0\\). For the field in [5], its only potentially nonzero curl component is

\\[
(\nabla\times\vec B)_z
=\frac{1}{s}\frac{d}{ds}\left(sB_\phi\right)=0.
\tag*{[6]}
\\]

Multiply by \\(s\\), integrate, and divide by \\(s\\).

\\[
\frac{d}{ds}(sB_\phi)=0
\quad\Longrightarrow\quad
sB_\phi=C_B
\quad\Longrightarrow\quad
B_\phi=\frac{C_B}{s}.
\tag*{[7]}
\\]

Apply Ampere's law to a circle of radius \\(s\\). The field is tangent to the circle and has constant magnitude there.

\\[
\oint\vec B\cdot d\vec\ell
=B_\phi(2\pi s)
=2\pi C_B
=\mu_0I
\quad\Longrightarrow\quad
\vec B=\frac{\mu_0I}{2\pi s}\hat\phi.
\tag*{[8]}
\\]

The same local equation can describe visibly different fields because source geometry supplies the missing directional information.

<PhysicsDiagram slug="electric-field-source-symmetries" />

Outside the charged sphere, a nonzero radial field weakens as its arrows spread over larger spherical areas. Between ideal parallel plates, the nonzero field is nearly uniform; neither source-free sample region has local spreading, so both have \\(\nabla\cdot\vec E=0\\).

Zero divergence or zero curl in a source-free region does not imply a zero field. It constrains how a nonzero field can vary. Symmetry must also be justified from the complete source geometry: a finite wire is not translationally invariant, and a nonspherical charge distribution does not permit the ansatz in [1].

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Electric field outside a point charge",
      question: "A point charge \\(q=2.00\\,\\mathrm{nC}\\) is in vacuum. Use symmetry and Gauss's law to find the electric-field magnitude at \\(r=0.250\\,\\mathrm m\\).",
      answer: "Spherical symmetry permits only \\(\\vec E=E_r(r)\\hat r\\). Equation [2] then gives the inverse-square form, and equation [4] fixes its constant. Substitute the SI values: \\[E_r=\\frac{2.00\\times10^{-9}\\,\\mathrm C}{4\\pi(8.854\\times10^{-12}\\,\\mathrm{F\\,m^{-1}})(0.250\\,\\mathrm m)^2}=2.88\\times10^2\\,\\mathrm{V\\,m^{-1}}.\\] **Final result:** \\(E_r=288\\,\\mathrm{V\\,m^{-1}}\\), directed radially outward because the charge is positive. Doubling \\(r\\) would reduce the magnitude by a factor of four, checking the inverse-square dependence.",
    },
    {
      title: "Nonzero field with zero local divergence",
      question: "Between two large oppositely charged parallel plates, the electric field is approximately uniform. How can the field be nonzero while \\(\\nabla\\cdot\\vec E=0\\) in the empty region between the plates?",
      answer: "The empty region contains no local charge, so electric Gauss's law requires zero divergence there. A uniform field satisfies this because all of its spatial derivatives vanish: \\[\\nabla\\cdot\\vec E=\\frac{\\partial E_x}{\\partial x}+\\frac{\\partial E_y}{\\partial y}+\\frac{\\partial E_z}{\\partial z}=0.\\] The field is nevertheless nonzero because its sources are the charges on the plates outside the chosen local region. **Final result:** zero local divergence means no local source or sink; it does not mean zero field.",
    },
  ]}
/>
`;
