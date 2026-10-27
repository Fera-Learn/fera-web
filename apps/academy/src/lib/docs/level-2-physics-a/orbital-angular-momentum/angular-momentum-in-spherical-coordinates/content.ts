export const content = String.raw`## Principle

Changing only the azimuthal angle moves around an axis without changing distance from the origin.

Spherical coordinates separate radial motion from angular motion. In this representation the z-component is a single azimuthal derivative, while total squared orbital angular momentum is the angular part of the Laplacian.

## Notation

<Notation
  items={[
    { symbol: "r,\\theta,\\phi", meaning: "radius, polar angle, and azimuthal angle with stated ranges", unit: "m, rad, rad" },
    { symbol: "x,y,z", meaning: "Cartesian coordinates", unit: "m" },
    { symbol: "\\hat L_x,\\hat L_y,\\hat L_z", meaning: "Cartesian orbital angular-momentum operators", unit: "J s" },
    { symbol: "\\hat L^2", meaning: "total squared orbital angular-momentum operator", unit: "J^{2} s^{2}" },
    { symbol: "\\nabla^2", meaning: "three-dimensional Laplacian", unit: "m^{-2}" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "\\hat H", meaning: "Hamiltonian operator", unit: "J" },
    { symbol: "V(r)", meaning: "spherically symmetric potential energy", unit: "J" },
    { symbol: "M", meaning: "particle mass", unit: "kg" },
    { symbol: "I", meaning: "moment of inertia of a rigid rotor", unit: "kg m^{2}" },
    { symbol: "i", meaning: "imaginary unit", unit: "1" },
  ]}
/>

## The Core Method

Use the convention \\(r\geq0\\), \\(0\leq\theta\leq\pi\\), and \\(0\leq\phi<2\pi\\), with the polar angle measured down from the positive z-axis.

\\[
x=r\sin\theta\cos\phi,
\qquad
y=r\sin\theta\sin\phi,
\qquad
z=r\cos\theta.
\tag*{[1]}
\\]

The azimuthal derivatives needed for \\(\hat L_z=-i\hbar(x\partial_y-y\partial_x)\\) are

\\[
\frac{\partial\phi}{\partial x}=-\frac{y}{x^2+y^2},
\qquad
\frac{\partial\phi}{\partial y}=\frac{x}{x^2+y^2}.
\tag*{[2]}
\\]

When \\(x\partial_y-y\partial_x\\) acts on a function of \\((r,\theta,\phi)\\), its radial and polar terms cancel. The remaining coefficient of \\(\partial_\phi\\) is

\\[
x\frac{\partial\phi}{\partial y}-y\frac{\partial\phi}{\partial x}
=\frac{x^2+y^2}{x^2+y^2}=1,
\qquad
\hat L_z=-i\hbar\frac{\partial}{\partial\phi}.
\tag*{[3]}
\\]

Repeated chain-rule transformation gives all three components with signs consistent with the Cartesian cross product.

\\[
\hat L_x=i\hbar\left(\sin\phi\frac{\partial}{\partial\theta}+\cot\theta\cos\phi\frac{\partial}{\partial\phi}\right),
\quad
\hat L_y=-i\hbar\left(\cos\phi\frac{\partial}{\partial\theta}-\cot\theta\sin\phi\frac{\partial}{\partial\phi}\right),
\quad
\hat L_z=-i\hbar\frac{\partial}{\partial\phi}.
\tag*{[4]}
\\]

Squaring and adding the components produces the angular operator

\\[
\hat L^2=-\hbar^2\left[
\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}
\left(\sin\theta\frac{\partial}{\partial\theta}\right)
+\frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\phi^2}
\right].
\tag*{[5]}
\\]

The spherical Laplacian separates into radial and angular pieces.

\\[
\nabla^2
=\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial}{\partial r}\right)
-\frac{\hat L^2}{\hbar^2r^2}.
\tag*{[6]}
\\]

For a central potential, substitution of [6] into the Hamiltonian isolates angular kinetic energy.

\\[
\hat H
=-\frac{\hbar^2}{2M}\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial}{\partial r}\right)
+\frac{\hat L^2}{2Mr^2}+V(r).
\tag*{[7]}
\\]

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Apply the azimuthal operator",
      question: "Find the \\(L_z\\) eigenvalue of the angular factor \\(F(\\theta,\\phi)=\\sin^2\\theta\\,e^{2i\\phi}\\).",
      answer: "Only the azimuthal exponential is differentiated by equation [3]: \\[\\hat L_zF=-i\\hbar\\sin^2\\theta\\frac{\\partial}{\\partial\\phi}e^{2i\\phi}=-i\\hbar(2i)F=2\\hbar F.\\] **Final result:** \\(F\\) is an \\(L_z\\) eigenfunction with eigenvalue \\(2\\hbar\\).",
    },
    {
      title: "Angular energy of a rigid rotor",
      question: "A rigid rotor has fixed radius and moment of inertia \\(I\\). If its angular state has \\(\\hat L^2\\) eigenvalue \\(6\\hbar^2\\), what is its rotational kinetic energy?",
      answer: "At fixed radius the radial derivative and potential terms are absent, so equation [7] reduces to \\(\\hat H=\\hat L^2/(2I)\\). Therefore \\[E_{\\mathrm{rot}}=\\frac{6\\hbar^2}{2I}=\\frac{3\\hbar^2}{I}.\\] **Final result:** the rotational kinetic energy is \\(3\\hbar^2/I\\).",
    },
  ]}
/>
`;
