export const content = String.raw`## Principle

Residual entropy is the nonzero entropy that remains in the zero-temperature limit when more than one microscopic configuration is still available. It can arise from genuine ground-state degeneracy or from disorder frozen before equilibrium is reached.

## Notation

<Notation
  items={[
    { symbol: "S,S_{\\mathrm{res}}", meaning: "entropy and residual entropy", unit: "J K^{-1}, J K^{-1}" },
    { symbol: "\\Omega_0", meaning: "number of accessible or frozen zero-temperature configurations", unit: "1" },
    { symbol: "g", meaning: "number of equally weighted local ground-state choices", unit: "1" },
    { symbol: "N,n", meaning: "number of microscopic units and amount of substance", unit: "1, mol" },
    { symbol: "k_{\\mathrm B},R,N_{\\mathrm A}", meaning: "Boltzmann constant, molar gas constant, and Avogadro constant", unit: "J K^{-1}, J mol^{-1} K^{-1}, mol^{-1}" },
    { symbol: "p_i", meaning: "probability of zero-temperature configuration i", unit: "1" },
    { symbol: "i", meaning: "configuration index", unit: "1" },
  ]}
/>

## The Core Method

Ice can satisfy its local bonding rules in many distinct proton arrangements. If those arrangements remain frozen in at low temperature, the non-unique ground configuration leaves residual entropy.

<PhysicsDiagram slug="ice-residual-entropy" />

For \\(\Omega_0\\) equally likely zero-temperature configurations, Boltzmann's entropy gives

\\[
S_{\mathrm{res}}=k_{\mathrm B}\ln\Omega_0.
\tag*{[1]}
\\]

If \\(N\\) independent microscopic units each have \\(g\\) equally weighted arrangements, their multiplicities multiply:

\\[
\Omega_0=g^N.
\tag*{[2]}
\\]

Substitute equation [2] into [1] and use \\(\ln(g^N)=N\ln g\\):

\\[
S_{\mathrm{res}}=Nk_{\mathrm B}\ln g.
\tag*{[3]}
\\]

For \\(n\\) moles, \\(N=nN_{\mathrm A}\\) and \\(R=N_{\mathrm A}k_{\mathrm B}\\), so

\\[
S_{\mathrm{res}}=nR\ln g.
\tag*{[4]}
\\]

Equal probabilities are not required. For configurations with normalized probabilities \\(p_i\\),

\\[
S_{\mathrm{res}}=-k_{\mathrm B}\sum_i p_i\ln p_i,
\qquad
\sum_i p_i=1.
\tag*{[5]}
\\]

Equation [5] reduces to equation [1] when every probability is \\(1/\Omega_0\\). The physical origin must still be stated. Equilibrium degeneracy means distinct ground states have the same minimum energy and remain thermodynamically available. Frozen disorder, as in a glass or orientationally disordered crystal, is a nonequilibrium memory of configurations that could not rearrange during cooling.

Planck's zero-entropy statement applies to an equilibrium perfect crystal with a unique ground state. A degenerate ground state violates uniqueness, while frozen disorder violates equilibrium or perfect order. Residual entropy is therefore an exception to the unqualified slogan \\(S(0)=0\\), not a contradiction of the qualified third law.

<PhysicsExamples collapsible
  items={[
    {
      title: "Binary orientational disorder",
      question: "One mole of molecules is frozen with two equally likely independent orientations per molecule. Calculate the residual molar entropy using \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\).",
      answer: "There are \\(g=2\\) choices for each molecule. Equation \\([4]\\) with \\(n=1.00\\,\\mathrm{mol}\\) gives \\[S_{\\mathrm{res}}=(1.00\\,\\mathrm{mol})(8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}})\\ln2=5.76\\,\\mathrm{J\\,K^{-1}}.\\] Dividing by one mole gives the same numerical value as a molar entropy. **Final result:** the residual molar entropy is \\(5.76\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\).",
    },
    {
      title: "Degeneracy versus frozen disorder",
      question: "Why can both a frustrated magnetic ground state and a glass have residual entropy even though their physical origins differ?",
      answer: "For a frustrated magnet, many configurations can remain equal-energy ground states, so \\(\\Omega_0\\gt 1\\) in equation \\([1]\\) even in equilibrium. For a glass, configurations are trapped because relaxation becomes too slow; equation \\([5]\\) describes the frozen distribution, but the state is not internal equilibrium. **Final result:** ground-state degeneracy produces equilibrium multiplicity, whereas a glass retains nonequilibrium configurational disorder; either can give nonzero residual entropy.",
    },
  ]}
/>
`;
