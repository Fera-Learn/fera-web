export const content = String.raw`## Principle

The canonical partition function contains the equilibrium thermodynamics of a complete system with fixed particle number. Derivatives with respect to inverse temperature produce energy moments, while the logarithm produces the Helmholtz free energy.

## Notation

<Notation
  items={[
    { symbol: "N,V,T", meaning: "fixed particle number, volume, and reservoir temperature", unit: "1, m^{3}, K" },
    { symbol: "k_{\\mathrm B},\\beta", meaning: "Boltzmann constant and inverse thermal energy", unit: "J K^{-1}, J^{-1}" },
    { symbol: "r,E_r,p_r,Z_N", meaning: "system microstate label, energy, probability, and canonical partition function", unit: "1, J, 1, 1" },
    { symbol: "U,F,S", meaning: "internal energy, Helmholtz free energy, and entropy", unit: "J, J, J K^{-1}" },
    { symbol: "C_{V,\\mathrm{tot}}", meaning: "total canonical-system heat capacity at constant volume", unit: "J K^{-1}" },
    { symbol: "\\langle E\\rangle,\\langle E^2\\rangle", meaning: "first and second canonical energy moments", unit: "J, J^{2}" },
    { symbol: "E_0,\\Delta", meaning: "reference energy and energy gap", unit: "J, J" },
  ]}
/>

## The Core Method

For the canonical ensemble at fixed \\(N,V,T\\),

\\[
Z_N=\sum_r e^{-\beta E_r},
\qquad
p_r=\frac{e^{-\beta E_r}}{Z_N}.
\tag*{[1]}
\\]

Differentiate the state sum at fixed \\(N,V\\):

\\[
\frac{\partial Z_N}{\partial\beta}
=-\sum_rE_re^{-\beta E_r},
\qquad
U=\sum_rp_rE_r
=-\frac{1}{Z_N}\frac{\partial Z_N}{\partial\beta}
=-\frac{\partial\ln Z_N}{\partial\beta}.
\tag*{[2]}
\\]

The canonical probabilities inserted into Gibbs entropy give

\\[
S=-k_{\mathrm B}\sum_rp_r\ln p_r
=k_{\mathrm B}(\ln Z_N+\beta U),
\qquad
F=U-TS=-k_{\mathrm B}T\ln Z_N.
\tag*{[3]}
\\]

For heat capacity, first differentiate the mean energy:

\\[
\frac{\partial U}{\partial\beta}
=\frac{\partial}{\partial\beta}
\left(\frac{\sum_rE_re^{-\beta E_r}}{Z_N}\right)
=-\frac{\sum_rE_r^2e^{-\beta E_r}}{Z_N}
+\frac{\left(\sum_rE_re^{-\beta E_r}\right)^2}{Z_N^2}
=-\langle E^2\rangle+\langle E\rangle^2,
\qquad
\frac{d\beta}{dT}=-\frac{1}{k_{\mathrm B}T^2}.
\tag*{[4]}
\\]

The chain rule then gives the fluctuation formula

\\[
C_{V,\mathrm{tot}}=\left(\frac{\partial U}{\partial T}\right)_{V,N}
=\frac{\langle E^2\rangle-\langle E\rangle^2}{k_{\mathrm B}T^2}
=k_{\mathrm B}\beta^2\left(\langle E^2\rangle-\langle E\rangle^2\right)\ge0.
\tag*{[5]}
\\]

These formulas require the complete \\(N\\)-particle \\(Z_N\\). Replacing it by \\(z_1\\) gives one-particle quantities unless a justified factorization and particle-count conversion are supplied.

<PhysicsExamples collapsible
  items={[
    {
      title: "Extract energy from a partition function",
      question: "A fixed-\\(N\\) system has \\(Z_N=e^{-\\beta E_0}(1+e^{-\\beta\\Delta})\\). Find its internal energy.",
      answer: "Take the logarithm before differentiating: \\[\\ln Z_N=-\\beta E_0+\\ln(1+e^{-\\beta\\Delta}).\\] Equation \\([2]\\) gives \\[U=-\\frac{\\partial\\ln Z_N}{\\partial\\beta}=E_0-\\frac{-\\Delta e^{-\\beta\\Delta}}{1+e^{-\\beta\\Delta}}=E_0+\\frac{\\Delta}{e^{\\beta\\Delta}+1}.\\] As \\(T\\to0\\), the second term vanishes; as \\(T\\to\\infty\\), it approaches \\(\\Delta/2\\), providing an endpoint check. **Final result:** \\(U=E_0+\\Delta/(e^{\\beta\\Delta}+1)\\).",
    },
    {
      title: "Interpret zero energy fluctuations",
      question: "A canonical system has exactly one populated energy value, so \\(\\langle E^2\\rangle=\\langle E\\rangle^2\\). What is its heat capacity within this model?",
      answer: "Substitution into equation \\([5]\\) makes the variance zero: \\[C_{V,\\mathrm{tot}}=k_{\\mathrm B}\\beta^2(\\langle E^2\\rangle-\\langle E\\rangle^2)=0.\\] With no thermal energy fluctuations, changing temperature cannot redistribute probability among different energies in the stated model. **Final result:** the total canonical-system heat capacity is \\(C_{V,\\mathrm{tot}}=0\\).",
    },
  ]}
/>
`;
