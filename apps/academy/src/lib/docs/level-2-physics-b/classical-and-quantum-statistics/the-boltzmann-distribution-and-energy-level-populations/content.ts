export const content = String.raw`## Principle

The canonical Boltzmann distribution gives probabilities for whole-system microstates when a system has fixed particle number and volume and is in thermal contact with a reservoir. For a one-particle energy level, degeneracy multiplies its Boltzmann weight because every degenerate state is a separate microstate.

## Notation

<Notation
  items={[
    { symbol: "T", meaning: "reservoir temperature", unit: "K" },
    { symbol: "k_{\\mathrm B},\\beta", meaning: "Boltzmann constant and inverse thermal energy, 1/(k_B T)", unit: "J K^{-1}, J^{-1}" },
    { symbol: "r,E_r,p_r", meaning: "whole-system microstate label, energy, and canonical probability", unit: "1, J, 1" },
    { symbol: "Z_N", meaning: "canonical partition function for the complete N-particle system", unit: "1" },
    { symbol: "i,\\epsilon_i,g_i", meaning: "one-particle energy-level label, energy, and degeneracy", unit: "1, J, 1" },
    { symbol: "z_1,P_i", meaning: "one-particle partition function and probability of level i", unit: "1, 1" },
    { symbol: "\\Delta", meaning: "excited-level energy above the ground level", unit: "J" },
    { symbol: "\\overline n_i", meaning: "mean population of level i for N independent classical particles", unit: "1" },
  ]}
/>

## The Core Method

At low temperature most particles occupy the lowest accessible levels. Raising the temperature makes higher-level Boltzmann factors less strongly suppressed and spreads the population upward.

<PhysicsDiagram slug="boltzmann-level-populations" />

For the canonical ensemble, a complete \\(N\\)-particle microstate \\(r\\) has probability

\\[
p_r=\frac{e^{-\beta E_r}}{Z_N},
\qquad
Z_N=\sum_r e^{-\beta E_r},
\qquad
\beta=\frac{1}{k_{\mathrm B}T}.
\tag*{[1]}
\\]

For a single particle, suppose level \\(i\\) has energy \\(\epsilon_i\\) and contains \\(g_i\\) distinct states. Summing over states gives

\\[
z_1=\sum_i g_i e^{-\beta\epsilon_i},
\qquad
P_i=\frac{g_i e^{-\beta\epsilon_i}}{z_1}.
\tag*{[2]}
\\]

Degeneracy belongs in equation [2]. Omitting \\(g_i\\) undercounts a level with several states. The ratio of two level populations is independent of normalization:

\\[
\frac{P_j}{P_i}
=\frac{g_j}{g_i}e^{-\beta(\epsilon_j-\epsilon_i)}.
\tag*{[3]}
\\]

Only for \\(N\\) noninteracting particles in the classical independent-particle regime may the mean level population be written

\\[
\overline n_i=NP_i
=N\frac{g_i e^{-\beta\epsilon_i}}{z_1},
\qquad
\sum_i\overline n_i=N.
\tag*{[4]}
\\]

Equations [1] and [2] answer different questions: \\(p_r\\) is a probability for a whole-system microstate and \\(P_i\\) is a one-particle level probability. Neither is a Bose-Einstein or Fermi-Dirac mean occupation.

<PhysicsExamples collapsible
  items={[
    {
      title: "Include level degeneracy",
      question: "A particle has a nondegenerate ground level at zero energy and an excited level of energy \\(\\Delta\\) with degeneracy 3. At \\(k_{\\mathrm B}T=\\Delta\\), find the probability of the excited level.",
      answer: "Equation \\([2]\\) gives \\(z_1=1+3e^{-1}\\). The excited-level probability includes all three states: \\[P_1=\\frac{3e^{-1}}{1+3e^{-1}}=0.525.\\] The result exceeds one half because the excited level has three times the state count, despite its energy cost. The two probabilities sum to one. **Final result:** the excited-level probability is \\(P_1=0.525\\).",
    },
    {
      title: "Compare two level populations",
      question: "Two one-particle levels have \\(g_0=2\\), \\(g_1=4\\), and \\(\\epsilon_1-\\epsilon_0=2k_{\\mathrm B}T\\). Find \\(P_1/P_0\\).",
      answer: "Use equation \\([3]\\), which avoids calculating \\(z_1\\): \\[\\frac{P_1}{P_0}=\\frac{4}{2}e^{-2}=2e^{-2}=0.271.\\] Degeneracy doubles the ratio relative to two nondegenerate levels, but the Boltzmann suppression still makes the upper level less populated. **Final result:** \\(P_1/P_0=0.271\\).",
    },
  ]}
/>
`;
