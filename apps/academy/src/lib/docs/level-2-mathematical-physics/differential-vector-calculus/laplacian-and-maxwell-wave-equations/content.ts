export const content = String.raw`## Principle

Electric and magnetic fields appear as coupled first-order equations in Maxwell's laws, yet each field also travels as a wave. Vector identities reveal that hidden second-order wave equation.

The same Laplacian measures the curvature of a scalar potential in electrostatics and acts component by component on vector fields.

Objective: use del identities to derive Laplace's equation and the free-space electromagnetic wave equations.

Prerequisite: familiarity with divergence, curl, the Laplacian, and time partial derivatives.

## Notation

<Notation
  items={[
    { symbol: "\\phi", meaning: "electrostatic scalar potential", unit: "V" },
    { symbol: "\\mathbf E", meaning: "electric field", unit: "V m^{-1}" },
    { symbol: "\\mathbf B", meaning: "magnetic flux density", unit: "T" },
    { symbol: "\\epsilon_0", meaning: "vacuum permittivity", unit: "F m^{-1}" },
    { symbol: "\\mu_0", meaning: "vacuum permeability", unit: "H m^{-1}" },
    { symbol: "c", meaning: "electromagnetic wave speed in vacuum", unit: "m s^{-1}" },
    { symbol: "\\mathbf F", meaning: "generic field used to identify the standard wave-equation form" },
  ]}
/>

## The Core Method

In Cartesian coordinates, the scalar Laplacian is

\[
\nabla^2\phi
=\frac{\partial^2\phi}{\partial x^2}
+\frac{\partial^2\phi}{\partial y^2}
+\frac{\partial^2\phi}{\partial z^2}.
\tag*{[1]}
\]

In charge-free electrostatics, \(\mathbf E=-\nabla\phi\) and \(\nabla\cdot\mathbf E=0\). Therefore

\[
0=\nabla\cdot\mathbf E
=-\nabla\cdot(\nabla\phi)
=-\nabla^2\phi,
\tag*{[2]}
\]

so the potential obeys Laplace's equation \(\nabla^2\phi=0\). It is the Laplacian of the scalar potential—not the divergence of a scalar—that vanishes.

In source-free vacuum, Maxwell's equations are

\[
\nabla\cdot\mathbf E=0,
\qquad
\nabla\times\mathbf E=-\frac{\partial\mathbf B}{\partial t},
\tag*{[3]}
\]

\[
\nabla\cdot\mathbf B=0,
\qquad
\nabla\times\mathbf B=\mu_0\epsilon_0
\frac{\partial\mathbf E}{\partial t}.
\tag*{[4]}
\]

Apply curl to Faraday's law and commute space and time derivatives:

\[
\nabla\times(\nabla\times\mathbf E)
=-\frac{\partial}{\partial t}(\nabla\times\mathbf B)
=-\mu_0\epsilon_0\frac{\partial^2\mathbf E}{\partial t^2}.
\tag*{[5]}
\]

The curl-curl identity and \(\nabla\cdot\mathbf E=0\) make the left side \(-\nabla^2\mathbf E\). Cancelling the minus signs gives

\[
\nabla^2\mathbf E
=\mu_0\epsilon_0\frac{\partial^2\mathbf E}{\partial t^2}.
\tag*{[6]}
\]

Applying the same procedure to the Ampère-Maxwell law gives

\[
\nabla^2\mathbf B
=\mu_0\epsilon_0\frac{\partial^2\mathbf B}{\partial t^2}.
\tag*{[7]}
\]

Comparing equations \([6]\) and \([7]\) with \(\nabla^2\mathbf F=c^{-2}\partial_t^2\mathbf F\) identifies

\[
c=\frac1{\sqrt{\mu_0\epsilon_0}}.
\tag*{[8]}
\]

The derivation depends on the source-free divergence equations. With charge or current present, additional source terms remain.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Test a charge-free potential",
      question: "Show that \\(\\phi(x,y)=V_0(x^2-y^2)/L^2\\) satisfies Laplace's equation and find \\(\\mathbf E\\).",
      answer: "Take the two nonzero second derivatives: \\[\\frac{\\partial^2\\phi}{\\partial x^2}=\\frac{2V_0}{L^2},\\qquad \\frac{\\partial^2\\phi}{\\partial y^2}=-\\frac{2V_0}{L^2}.\\tag*{[9]}\\] Their sum is zero, so \\(\\nabla^2\\phi=0\\). The field is \\[\\mathbf E=-\\nabla\\phi=-\\frac{2V_0x}{L^2}\\mathbf i+\\frac{2V_0y}{L^2}\\mathbf j.\\tag*{[10]}\\] **Final result:** the potential is harmonic and its electric field has zero divergence in the region.",
    },
    {
      title: "Dispersion of a plane electromagnetic wave",
      question: "An electric-field component is \\(E_y=E_0\\cos(kx-\\omega t)\\), where \\(E_0\\) is its amplitude, \\(k\\) its wavenumber, and \\(\\omega\\) its angular frequency. Use the wave equation to relate \\(\\omega\\) and \\(k\\).",
      answer: "Differentiate the same phase twice: \\[\\frac{\\partial^2E_y}{\\partial x^2}=-k^2E_y,\\qquad \\frac{\\partial^2E_y}{\\partial t^2}=-\\omega^2E_y.\\tag*{[11]}\\] Substitute into equation \\([6]\\): \\(-k^2E_y=-\\mu_0\\epsilon_0\\omega^2E_y\\). For a nonzero field, \\[\\omega^2=\\frac{k^2}{\\mu_0\\epsilon_0}=c^2k^2.\\tag*{[12]}\\] **Final result:** \\(\\omega=ck\\) for a positive-frequency wave. Its phase speed \\(\\omega/k\\) equals \\(c\\).",
    },
  ]}
/>
`;
