export const content = String.raw`## Principle

Measuring orbital rotation gives discrete total magnitudes and discrete projections along a chosen axis.

Orbital angular momentum is specified by two integer quantum numbers. The orbital quantum number fixes the total squared magnitude, while the magnetic quantum number fixes one chosen component and counts the orientations within that total-angular-momentum multiplet.

## Notation

<Notation
  items={[
    { symbol: "l", meaning: "orbital angular-momentum quantum number", unit: "1" },
    { symbol: "m", meaning: "magnetic quantum number for the chosen z-axis", unit: "1" },
    { symbol: "Y_{lm}", meaning: "normalized orbital angular eigenfunction", unit: "1" },
    { symbol: "P_l,P_l^m", meaning: "Legendre polynomial and associated Legendre function", unit: "1" },
    { symbol: "u", meaning: "dimensionless argument of a Legendre polynomial", unit: "1" },
    { symbol: "\\hat L^2,\\hat L_z", meaning: "total squared and z-component orbital angular-momentum operators", unit: "J^{2} s^{2}, J s" },
    { symbol: "L,L_z", meaning: "inferred magnitude and measured z-component", unit: "J s" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "g_l", meaning: "number of magnetic states for fixed l", unit: "1" },
  ]}
/>

## The Core Method

Single-valued azimuthal dependence requires \\(e^{im(\phi+2\pi)}=e^{im\phi}\\), so the magnetic quantum number is an integer.

\\[
e^{i2\pi m}=1
\quad\Longrightarrow\quad
m\in\mathbb Z.
\tag*{[1]}
\\]

Regular polar solutions are associated Legendre functions. For nonnegative \\(m\\), the function \\(P_l^m\\) contains the \\(m\\)th derivative of the degree-\\(l\\) polynomial \\(P_l\\), so

\\[
\frac{d^mP_l(u)}{du^m}\neq0\quad\text{only for}\quad 0\leq m\leq l,
\qquad
\frac{d^{l+1}P_l(u)}{du^{l+1}}=0.
\tag*{[2]}
\\]

The corresponding negative-\\(m\\) solutions add the opposite azimuthal windings. Finiteness at both poles and single-valuedness therefore give the complete orbital ranges

\\[
l=0,1,2,\ldots,
\qquad
m=-l,-l+1,\ldots,l-1,l.
\tag*{[3]}
\\]

The common eigenvalue equations turn these labels into measurement predictions.

\\[
\hat L^2Y_{lm}=l(l+1)\hbar^2Y_{lm},
\qquad
\hat L_zY_{lm}=m\hbar Y_{lm}.
\tag*{[4]}
\\]

Thus the inferred magnitude and chosen component are

\\[
L=\sqrt{l(l+1)}\,\hbar,
\qquad
L_z=m\hbar,
\qquad
|m|\leq l.
\tag*{[5]}
\\]

For each fixed \\(l\\), count every integer from \\(-l\\) to \\(+l\\).

\\[
g_l=l-(-l)+1=2l+1.
\tag*{[6]}
\\]

If a central Hamiltonian depends on \\(L^2\\) but not on \\(L_z\\), these \\(2l+1\\) states have the same energy and are degenerate. A preferred direction, such as an external field, can make the energy depend on \\(m\\) and split that degeneracy.

For \\(l=0\\), equation [3] allows only \\(m=0\\), and equation [5] gives \\(L=0\\). This is the unique spherical angular state. For \\(l>0\\), \\(L=\sqrt{l(l+1)}\hbar\\) is always larger than the maximum component magnitude \\(l\hbar\\); the vector cannot be interpreted as having all three Cartesian components simultaneously fixed.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Decode measured eigenvalues",
      question: "Measurements on an orbital state give \\(L^2=6\\hbar^2\\) and \\(L_z=-\\hbar\\). Determine \\(l\\), \\(m\\), the magnitude \\(L\\), and the fixed-l degeneracy.",
      answer: "Equation [4] requires \\(l(l+1)=6\\), whose allowed nonnegative integer solution is \\(l=2\\). The second measurement gives \\(m=-1\\), which satisfies \\(|m|\\leq l\\). Equations [5] and [6] then give \\[L=\\sqrt6\\,\\hbar,\\qquad g_l=2(2)+1=5.\\] **Final result:** \\(l=2\\), \\(m=-1\\), \\(L=\\sqrt6\\,\\hbar\\), and there are five allowed magnetic states for this \\(l\\).",
    },
    {
      title: "Audit a proposed quantum-number set",
      question: "For \\(l=3\\), list every allowed \\(m\\), state the possible \\(L_z\\) outcomes, and decide whether \\(m=4\\) is valid.",
      answer: "Equation [3] gives \\(m=-3,-2,-1,0,1,2,3\\). By equation [4], the corresponding outcomes are \\(L_z=-3\\hbar,-2\\hbar,-\\hbar,0,\\hbar,2\\hbar,3\\hbar\\). The value \\(m=4\\) violates \\(|m|\\leq l\\). **Final result:** there are seven allowed outcomes from \\(-3\\hbar\\) through \\(+3\\hbar\\) in steps of \\(\\hbar\\), and \\(m=4\\) is forbidden.",
    },
  ]}
/>
`;
