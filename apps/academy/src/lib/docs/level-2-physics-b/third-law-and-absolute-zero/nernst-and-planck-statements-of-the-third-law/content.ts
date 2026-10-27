export const content = String.raw`## Principle

The third law constrains equilibrium entropy near absolute zero. Nernst's statement makes entropy differences vanish there; Planck's stronger normalization sets the limiting entropy to zero only for a perfect crystal in equilibrium with a unique ground state.

## Notation

<Notation
  items={[
    { symbol: "S,T", meaning: "thermodynamic entropy and absolute temperature", unit: "J K^{-1}, K" },
    { symbol: "x,x_1,x_2", meaning: "external thermodynamic parameter and two fixed values of it" },
    { symbol: "S_0", meaning: "limiting equilibrium entropy as temperature approaches zero", unit: "J K^{-1}" },
    { symbol: "\\Delta S", meaning: "entropy difference between two equilibrium states", unit: "J K^{-1}" },
    { symbol: "\\Omega_0,g_0", meaning: "ground-state multiplicity and ground-state degeneracy", unit: "1, 1" },
    { symbol: "k_{\\mathrm B}", meaning: "Boltzmann constant", unit: "J K^{-1}" },
    { symbol: "a_1,a_2", meaning: "low-temperature entropy coefficients for two parameter values", unit: "J K^{-4}" },
  ]}
/>

## The Core Method

The Nernst heat theorem concerns reversible isothermal changes between internal-equilibrium states. For any finite values \\(x_1\\) and \\(x_2\\),

\\[
\lim_{T\to0^+}\left[S(T,x_2)-S(T,x_1)\right]=0.
\tag*{[1]}
\\]

Equivalently, when the derivative exists and the equilibrium limit is smooth,

\\[
\lim_{T\to0^+}\left(\frac{\partial S}{\partial x}\right)_T=0.
\tag*{[2]}
\\]

Equation [1] says that all allowed equilibrium paths approach the same limiting entropy:

\\[
\lim_{T\to0^+}S(T,x)=S_0,
\qquad S_0\text{ is independent of }x.
\tag*{[3]}
\\]

Nernst's statement does not by itself choose the numerical value of \\(S_0\\). Planck's statement adds a microscopic reference: for a pure perfect crystal in internal equilibrium whose ground state is unique,

\\[
S(0)=S_0=0.
\tag*{[4]}
\\]

The assumptions in equation [4] are essential. A perfect crystal has no configurational disorder, equilibrium excludes frozen nonequilibrium arrangements, and a unique ground state means

\\[
\Omega_0=g_0=1,
\qquad
S(0)=k_{\mathrm B}\ln\Omega_0=0.
\tag*{[5]}
\\]

If the ground state is degenerate, or if disorder is kinetically frozen as in a glass, the extrapolated entropy can be nonzero. Such residual entropy does not satisfy the full assumptions behind equation [4], so it is not a contradiction of the correctly qualified Planck statement.

Absolute zero is a limiting point. The third-law unattainability statement adds that no finite physical process starting at positive temperature reaches \\(T=0\\); equations [1]-[5] describe limiting equilibrium properties, not a finite cooling recipe.

<PhysicsExamples collapsible
  items={[
    {
      title: "Testing the Nernst entropy-difference limit",
      question: "Two equilibrium states have low-temperature entropies \\(S(T,x_1)=S_0+a_1T^3\\) and \\(S(T,x_2)=S_0+a_2T^3\\), where \\(a_1=2.0\\times10^{-3}\\,\\mathrm{J\\,K^{-4}}\\) and \\(a_2=5.0\\times10^{-3}\\,\\mathrm{J\\,K^{-4}}\\). Find their entropy difference at \\(T=2.0\\,\\mathrm K\\) and its zero-temperature limit.",
      answer: "Subtracting cancels the common \\(S_0\\), as required by equation \\([3]\\): \\[\\Delta S=(a_2-a_1)T^3=(3.0\\times10^{-3}\\,\\mathrm{J\\,K^{-4}})(2.0\\,\\mathrm K)^3=2.4\\times10^{-2}\\,\\mathrm{J\\,K^{-1}}.\\] In general, \\(\\Delta S=(a_2-a_1)T^3\\), so \\(\\lim_{T\\to0^+}\\Delta S=0\\), matching equation \\([1]\\). **Final result:** \\(\\Delta S=2.4\\times10^{-2}\\,\\mathrm{J\\,K^{-1}}\\) at \\(2.0\\,\\mathrm K\\), and the difference tends to zero as \\(T\\to0^+\\).",
    },
    {
      title: "Applying Planck's assumptions",
      question: "Which of these systems is guaranteed to have zero entropy at absolute zero by Planck's statement: an equilibrium perfect crystal with one ground state, or a glass with frozen orientational disorder?",
      answer: "The equilibrium perfect crystal satisfies all three conditions attached to equation \\([4]\\). Its unique ground state has \\(\\Omega_0=1\\), so equation \\([5]\\) gives zero entropy. The glass is not in internal equilibrium and retains multiple frozen configurations, so the same conclusion cannot be applied to it. **Final result:** only the equilibrium perfect crystal with a unique ground state is assigned \\(S(0)=0\\); the glass may retain residual entropy.",
    },
  ]}
/>
`;
