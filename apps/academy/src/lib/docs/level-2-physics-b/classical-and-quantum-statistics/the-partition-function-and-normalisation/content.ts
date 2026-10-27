export const content = String.raw`## Principle

A partition function is the normalization sum for a specified ensemble and system. One-particle, fixed-particle-number canonical, and variable-particle-number grand-canonical sums must not be interchanged because they normalize different sets of states.

## Notation

<Notation
  items={[
    { symbol: "\\beta,T,k_{\\mathrm B}", meaning: "inverse thermal energy, temperature, and Boltzmann constant", unit: "J^{-1}, K, J K^{-1}" },
    { symbol: "i,\\epsilon_i,g_i", meaning: "one-particle level label, energy, and degeneracy", unit: "1, J, 1" },
    { symbol: "z_1", meaning: "one-particle partition function", unit: "1" },
    { symbol: "N,r,E_r,Z_N", meaning: "particle number, N-particle microstate label, energy, and canonical partition function", unit: "1, 1, J, 1" },
    { symbol: "\\mu,\\Xi", meaning: "particle chemical potential and grand partition function", unit: "J, 1" },
    { symbol: "p_r,P_{N,r}", meaning: "canonical and grand-canonical whole-system probabilities", unit: "1, 1" },
    { symbol: "V", meaning: "system volume", unit: "m^{3}" },
    { symbol: "\\Delta", meaning: "energy above the ground-state energy", unit: "J" },
    { symbol: "P(E=\\Delta)", meaning: "probability that the system energy equals Delta", unit: "1" },
  ]}
/>

## The Core Method

For one particle with level degeneracy included, define

\\[
z_1=\sum_i g_i e^{-\beta\epsilon_i}.
\tag*{[1]}
\\]

For a complete system with fixed \\(N,V,T\\), sum once over its allowed \\(N\\)-particle microstates:

\\[
Z_N=\sum_r e^{-\beta E_r},
\qquad
p_r=\frac{e^{-\beta E_r}}{Z_N},
\qquad
\sum_rp_r=1.
\tag*{[2]}
\\]

If the particles are distinguishable and noninteracting, their energies add and the state sums factorize, giving \\(Z_N=z_1^N\\). In the dilute Maxwell-Boltzmann approximation for identical particles, correcting the overcount of particle labels gives

\\[
Z_N\simeq\frac{z_1^N}{N!}.
\tag*{[3]}
\\]

For a system exchanging both energy and particles with a reservoir, \\(T,V,\mu\\) are fixed and \\(N\\) fluctuates. The grand partition function and normalized probability are

\\[
\Xi=\sum_{N=0}^{\infty}e^{\beta\mu N}Z_N,
\qquad
P_{N,r}=\frac{e^{-\beta(E_r-\mu N)}}{\Xi},
\qquad
\sum_{N,r}P_{N,r}=1.
\tag*{[4]}
\\]

The microstate sum inside \\(Z_N\\) already contains energy-level degeneracy. A separate factor \\(g_i\\) is needed only when states have first been grouped into levels. Equation [3] is not the exact quantum partition function for arbitrary identical bosons or fermions.

<PhysicsExamples collapsible
  items={[
    {
      title: "Normalize a canonical system",
      question: "A complete fixed-\\(N\\) system has microstate energies \\(0\\), \\(\\Delta\\), and \\(\\Delta\\). Find \\(Z_N\\) and the probability of energy \\(\\Delta\\).",
      answer: "The two microstates at \\(\\Delta\\) are distinct and must both appear in equation \\([2]\\): \\[Z_N=1+e^{-\\beta\\Delta}+e^{-\\beta\\Delta}=1+2e^{-\\beta\\Delta}.\\] The probability of the energy level is the sum of its two microstate probabilities: \\[P(E=\\Delta)=\\frac{2e^{-\\beta\\Delta}}{1+2e^{-\\beta\\Delta}}.\\] Adding this to the ground-state probability gives one. **Final result:** \\(Z_N=1+2e^{-\\beta\\Delta}\\) and \\(P(E=\\Delta)=2e^{-\\beta\\Delta}/(1+2e^{-\\beta\\Delta})\\).",
    },
    {
      title: "Choose the correct partition function",
      question: "A cavity exchanges photons and energy with its walls at fixed temperature. Which normalization, \\(z_1\\), \\(Z_N\\), or \\(\\Xi\\), describes the full cavity field?",
      answer: "Photon number is not fixed, so a fixed-\\(N\\) canonical function cannot normalize the full field. Equation \\([4]\\) supplies the variable-particle-number normalization \\(\\Xi\\). For photons in equilibrium, the chemical potential is \\(\\mu=0\\) because photon number is not conserved. A one-photon \\(z_1\\) is only a building block, not the full-system normalization. **Final result:** use the grand partition function \\(\\Xi\\) with \\(\\mu=0\\).",
    },
  ]}
/>
`;
