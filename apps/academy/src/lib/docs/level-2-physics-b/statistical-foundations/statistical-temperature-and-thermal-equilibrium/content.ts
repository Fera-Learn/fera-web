export const content = String.raw`## Principle

Statistical temperature measures how rapidly an isolated system's multiplicity grows with energy. When two weakly coupled systems can exchange energy, the most probable division of their fixed total energy occurs when these growth rates, and therefore their temperatures, are equal.

## Notation

<Notation
  items={[
    { symbol: "E,E_1,E_2", meaning: "fixed total energy and subsystem energies", unit: "J, J, J" },
    { symbol: "E_0", meaning: "fixed reference energy used to form dimensionless multiplicities", unit: "J" },
    { symbol: "\\Omega,\\Omega_1,\\Omega_2", meaning: "total and subsystem microcanonical multiplicities", unit: "1" },
    { symbol: "S", meaning: "entropy", unit: "J K^{-1}" },
    { symbol: "S_{\\mathrm{tot}}", meaning: "total entropy of the combined isolated system", unit: "J K^{-1}" },
    { symbol: "T,T_1,T_2", meaning: "absolute temperatures", unit: "K, K, K" },
    { symbol: "k_{\\mathrm B}", meaning: "Boltzmann constant", unit: "J K^{-1}" },
    { symbol: "\\beta", meaning: "inverse thermal energy, 1/(k_B T)", unit: "J^{-1}" },
  ]}
/>

## The Core Method

Take two weakly interacting systems inside an isolated boundary. Their interaction energy is negligible, so

\\[
E=E_1+E_2,
\qquad dE_2=-dE_1,
\qquad \Omega(E_1)=\Omega_1(E_1)\Omega_2(E-E_1).
\tag*{[1]}
\\]

The equilibrium energy division maximises \\(\Omega\\), equivalently \\(\ln\Omega\\). Differentiating equation [1] gives

\\[
\frac{d\ln\Omega}{dE_1}
=\frac{\partial\ln\Omega_1}{\partial E_1}
-\frac{\partial\ln\Omega_2}{\partial E_2}=0.
\tag*{[2]}
\\]

The common intensive quantity motivates the microcanonical definition

\\[
\beta
\equiv\left(\frac{\partial\ln\Omega}{\partial E}\right)_{V,N}
=\frac{1}{k_{\mathrm B}T}.
\tag*{[3]}
\\]

Thus equation [2] becomes \\(\beta_1=\beta_2\\), or \\(T_1=T_2\\) for positive temperatures. The same result follows from \\(S=k_{\mathrm B}\ln\Omega\\):

\\[
\left(\frac{\partial S}{\partial E}\right)_{V,N}
=k_{\mathrm B}\left(\frac{\partial\ln\Omega}{\partial E}\right)_{V,N}
=\frac{1}{T}.
\tag*{[4]}
\\]

The derivative holds volume and particle number fixed and uses an equilibrium microcanonical entropy. If \\(\ln\Omega\\) is not smooth for a small system, a finite energy window or finite differences replace the derivative. A maximum also requires negative second derivative of the total entropy; equality of first derivatives alone identifies only a stationary point.

<PhysicsExamples collapsible
  items={[
    {
      title: "Share energy between two model solids",
      question: "Two weakly coupled systems have multiplicities \\(\\Omega_1=(E_1/E_0)^2\\) and \\(\\Omega_2=(E_2/E_0)^3\\), where \\(E_0\\) is fixed and the total energy is \\(E\\). Find the equilibrium energy split.",
      answer: "The reference energy makes each multiplicity dimensionless and disappears from logarithmic derivatives. Equation \\([2]\\) gives \\[\\frac{2}{E_1}=\\frac{3}{E_2}.\\] Hence \\(2E_2=3E_1\\). Combining this with equation \\([1]\\), \\(E_1+E_2=E\\), gives \\[E_1+\\frac{3}{2}E_1=E,\\qquad E_1=\\frac{2E}{5},\\qquad E_2=\\frac{3E}{5}.\\] Both logarithms are concave, so the stationary point is a maximum. **Final result:** equilibrium has \\(E_1=2E/5\\) and \\(E_2=3E/5\\).",
    },
    {
      title: "Predict the direction of energy flow",
      question: "Initially \\(\\beta_1\\gt \\beta_2\\gt 0\\). Which subsystem gains energy during spontaneous equilibration?",
      answer: "For positive temperature, equation \\([3]\\) shows that larger \\(\\beta\\) means lower \\(T\\), so system 1 is colder. For a small transfer \\(dE_1\\), the total entropy change from equation \\([4]\\) is \\(dS_{\\mathrm{tot}}=k_{\\mathrm B}(\\beta_1-\\beta_2)dE_1\\). Since the coefficient is positive, entropy rises when \\(dE_1\\gt 0\\). **Final result:** energy flows from system 2 to system 1 until \\(\\beta_1=\\beta_2\\).",
    },
  ]}
/>
`;
