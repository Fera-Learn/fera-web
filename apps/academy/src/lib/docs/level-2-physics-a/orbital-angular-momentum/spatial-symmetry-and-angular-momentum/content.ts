export const content = String.raw`## Principle

A perfectly spherical wave has no preferred direction and no angular pattern to rotate.

Orbital angular momentum measures angular variation of a wavefunction rather than its radial extent. A spherically symmetric state has no angular variation and therefore has zero orbital angular momentum.

## Notation

<Notation
  items={[
    { symbol: "r", meaning: "radial distance from the chosen origin", unit: "m" },
    { symbol: "x,y,z", meaning: "Cartesian coordinates", unit: "m" },
    { symbol: "\\psi(r)", meaning: "spherically symmetric position-space wavefunction", unit: "m^{-3/2}" },
    { symbol: "\\hat L_x,\\hat L_y,\\hat L_z", meaning: "Cartesian orbital angular-momentum operators", unit: "J s" },
    { symbol: "\\hat L^2", meaning: "total squared orbital angular-momentum operator", unit: "J^{2} s^{2}" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "a,A", meaning: "positive length scale and constant amplitude", unit: "m, varies" },
    { symbol: "i", meaning: "imaginary unit", unit: "1" },
  ]}
/>

## The Core Method

For a spherical radius, \\(r^2=x^2+y^2+z^2\\). Differentiate with the other coordinates held fixed.

\\[
2r\frac{\partial r}{\partial x}=2x,
\qquad
\frac{\partial r}{\partial x}=\frac{x}{r},
\qquad
\frac{\partial r}{\partial y}=\frac{y}{r},
\qquad
\frac{\partial r}{\partial z}=\frac{z}{r}.
\tag*{[1]}
\\]

Apply \\(\hat L_z=-i\hbar(x\partial_y-y\partial_x)\\) to a function that depends only on \\(r\\). The chain rule gives

\\[
\hat L_z\psi(r)
=-i\hbar\left(x\frac{\partial r}{\partial y}-y\frac{\partial r}{\partial x}\right)\frac{d\psi}{dr}.
\tag*{[2]}
\\]

Substitution from [1] makes the two terms cancel.

\\[
\hat L_z\psi(r)
=-i\hbar\left(\frac{xy}{r}-\frac{yx}{r}\right)\frac{d\psi}{dr}
=0.
\tag*{[3]}
\\]

The same cyclic calculation applies to the other components.

\\[
\hat L_x\psi(r)=\hat L_y\psi(r)=\hat L_z\psi(r)=0.
\tag*{[4]}
\\]

Using the definition of total squared angular momentum then gives

\\[
\hat L^2\psi(r)
=(\hat L_x^2+\hat L_y^2+\hat L_z^2)\psi(r)
=0.
\tag*{[5]}
\\]

Thus a spherical state has the orbital quantum numbers \\(l=0\\) and \\(m=0\\). By contrast, angular structure can carry nonzero orbital angular momentum. For example,

\\[
\hat L_z(x+iy)
=-i\hbar\left[x(i)-y(1)\right]
=\hbar(x+iy).
\tag*{[6]}
\\]

The factors \\(x+iy\\) and \\(x-iy\\) wind in opposite senses around the z-axis and have opposite \\(L_z\\) eigenvalues. Multiplying either by an arbitrary radial function changes the radial profile but not this z-component eigenvalue.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Test a radial exponential",
      question: "For \\(\\psi(r)=Ae^{-r/a}\\), calculate the action of all three angular-momentum components and of \\(\\hat L^2\\).",
      answer: "The derivative is \\(d\\psi/dr=-(A/a)e^{-r/a}\\), but only the cancellation of coordinate factors matters. Equation [3] gives \\[\\hat L_z\\psi=-i\\hbar\\left(\\frac{xy-yx}{r}\\right)\\left(-\\frac{A}{a}e^{-r/a}\\right)=0.\\] Cyclic permutation gives \\(\\hat L_x\\psi=0\\) and \\(\\hat L_y\\psi=0\\). Equation [5] then gives \\(\\hat L^2\\psi=0\\). **Final result:** all three components and total squared orbital angular momentum have eigenvalue zero for this radial state.",
    },
    {
      title: "Reverse the angular winding",
      question: "What \\(L_z\\) value is sharp for a wavefunction proportional to \\(x-iy\\)?",
      answer: "Apply the operator directly: \\[\\hat L_z(x-iy)=-i\\hbar[x(-i)-y(1)]=-\\hbar(x-iy).\\] The sign is opposite to equation [6] because the complex angular winding is reversed. **Final result:** \\(x-iy\\) is an \\(\\hat L_z\\) eigenfunction with eigenvalue \\(-\\hbar\\).",
    },
  ]}
/>
`;
