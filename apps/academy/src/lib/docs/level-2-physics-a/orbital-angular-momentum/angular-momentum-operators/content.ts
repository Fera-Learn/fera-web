export const content = String.raw`## Principle

A planet orbiting a star and a mass moving past an origin both carry rotational motion measured about that origin.

Orbital angular momentum describes rotational motion about a chosen origin. In quantum mechanics its Cartesian components are differential operators obtained from the classical cross product of position and linear momentum.

## Notation

<Notation
  items={[
    { symbol: "\\vec r", meaning: "position vector from the chosen origin", unit: "m" },
    { symbol: "\\vec p,\\hat{\\vec p}", meaning: "linear momentum and its operator", unit: "kg m s^{-1}" },
    { symbol: "x,y,z", meaning: "Cartesian coordinates", unit: "m" },
    { symbol: "p_x,p_y,p_z", meaning: "Cartesian momentum components", unit: "kg m s^{-1}" },
    { symbol: "\\hat{\\vec L},\\hat L_x,\\hat L_y,\\hat L_z", meaning: "orbital angular-momentum operator and its components", unit: "J s" },
    { symbol: "\\nabla", meaning: "spatial gradient operator", unit: "m^{-1}" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "\\psi", meaning: "position-space wavefunction", unit: "m^{-3/2}" },
    { symbol: "i", meaning: "imaginary unit", unit: "1" },
  ]}
/>

## The Core Method

Classically, orbital angular momentum is the cross product of position with linear momentum. Expanding the cross product fixes the cyclic order and therefore the signs of all three components.

\\[
\vec L=\vec r\times\vec p,
\qquad
L_x=yp_z-zp_y,
\quad
L_y=zp_x-xp_z,
\quad
L_z=xp_y-yp_x.
\tag*{[1]}
\\]

In the position representation, each momentum component is replaced by the derivative along the same axis.

\\[
\hat{\vec p}=-i\hbar\nabla,
\qquad
\hat p_x=-i\hbar\frac{\partial}{\partial x},
\quad
\hat p_y=-i\hbar\frac{\partial}{\partial y},
\quad
\hat p_z=-i\hbar\frac{\partial}{\partial z}.
\tag*{[2]}
\\]

Substituting [2] into [1] gives the orbital operator in compact vector form.

\\[
\hat{\vec L}=\vec r\times\hat{\vec p}
=-i\hbar(\vec r\times\nabla).
\tag*{[3]}
\\]

The Cartesian components are therefore

\\[
\hat L_x=-i\hbar\left(y\frac{\partial}{\partial z}-z\frac{\partial}{\partial y}\right),
\qquad
\hat L_y=-i\hbar\left(z\frac{\partial}{\partial x}-x\frac{\partial}{\partial z}\right),
\qquad
\hat L_z=-i\hbar\left(x\frac{\partial}{\partial y}-y\frac{\partial}{\partial x}\right).
\tag*{[4]}
\\]

The sign check is direct: the positive \\(\hat L_z\\) term is \\(x\hat p_y\\), while the negative term is \\(y\hat p_x\\). Position along one axis commutes with momentum along a different axis. For example, acting on an arbitrary differentiable \\(\psi\\),

\\[
[x,\hat p_y]\psi
=-i\hbar x\frac{\partial\psi}{\partial y}
+i\hbar\frac{\partial(x\psi)}{\partial y}
=0.
\tag*{[5]}
\\]

With wavefunctions that obey the usual vanishing or periodic boundary conditions, each component in [4] is Hermitian. Its eigenvalues are consequently real measurement outcomes. Orbital angular momentum has dimensions of action, \\(\mathrm{J\,s}\\), and depends on the chosen origin through \\(\vec r\\).

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Test a Cartesian angular eigenfunction",
      question: "Show that \\(\\psi(x,y,z)=A(x+iy)f(z)\\), where \\(A\\) is a constant and \\(f\\) is differentiable, is an eigenfunction of \\(\\hat L_z\\).",
      answer: "Use equation [4]. Since \\(f(z)\\) is unaffected by the \\(x\\)- and \\(y\\)-derivatives, \\[\\hat L_z\\psi=-i\\hbar A\\left[x\\frac{\\partial(x+iy)}{\\partial y}-y\\frac{\\partial(x+iy)}{\\partial x}\\right]f(z)=-i\\hbar A(ix-y)f(z).\\] Because \\(-i(ix-y)=x+iy\\), this becomes \\[\\hat L_z\\psi=\\hbar A(x+iy)f(z)=\\hbar\\psi.\\] **Final result:** the state is an eigenfunction of \\(\\hat L_z\\) with measurement outcome \\(+\\hbar\\).",
    },
    {
      title: "Identify the operator about a chosen axis",
      question: "A calculation needs orbital angular momentum about the \\(x\\)-axis. Which position and momentum components enter, and with what signs?",
      answer: "Read the first cyclic component of equation [1]: \\[\\hat L_x=y\\hat p_z-z\\hat p_y=-i\\hbar\\left(y\\frac{\\partial}{\\partial z}-z\\frac{\\partial}{\\partial y}\\right).\\] The positive term pairs position \\(y\\) with momentum \\(p_z\\); the negative term pairs position \\(z\\) with momentum \\(p_y\\). **Final result:** \\(\\hat L_x=y\\hat p_z-z\\hat p_y\\), not the sign-reversed ordering.",
    },
  ]}
/>
`;
