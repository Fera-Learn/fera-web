export const content = String.raw`## Principle

Boltzmann entropy counts equiprobable accessible microstates of a macrostate. Gibbs entropy allows unequal probabilities, but its sum is over mutually exclusive microstates of the whole system. Confusing those microstates with coarse macrostates loses information and generally gives a different entropy.

## Notation

<Notation
  items={[
    { symbol: "S_{\\mathrm B},S_{\\mathrm G}", meaning: "Boltzmann and Gibbs entropies", unit: "J K^{-1}, J K^{-1}" },
    { symbol: "k_{\\mathrm B}", meaning: "Boltzmann constant", unit: "J K^{-1}" },
    { symbol: "\\Omega", meaning: "number of accessible microstates in a microcanonical macrostate", unit: "1" },
    { symbol: "r", meaning: "whole-system microstate label", unit: "1" },
    { symbol: "p_r", meaning: "probability of whole-system microstate r", unit: "1" },
    { symbol: "a,P_a", meaning: "coarse macrostate label and its probability", unit: "1, 1" },
    { symbol: "\\ln", meaning: "natural logarithm" },
  ]}
/>

## The Core Method

For an equilibrium microcanonical ensemble with \\(\Omega\\) accessible microstates, the equal-a-priori-probability assumption gives

\\[
p_r=\frac{1}{\Omega},
\qquad r=1,2,\ldots,\Omega.
\tag*{[1]}
\\]

Boltzmann's entropy of that macrostate is

\\[
S_{\mathrm B}=k_{\mathrm B}\ln\Omega.
\tag*{[2]}
\\]

For a normalized distribution over whole-system microstates, Gibbs entropy is

\\[
S_{\mathrm G}=-k_{\mathrm B}\sum_r p_r\ln p_r,
\qquad \sum_r p_r=1.
\tag*{[3]}
\\]

Substituting equation [1] into equation [3] shows the reduction explicitly:

\\[
S_{\mathrm G}
=-k_{\mathrm B}\sum_{r=1}^{\Omega}\frac{1}{\Omega}
\ln\left(\frac{1}{\Omega}\right)
=-k_{\mathrm B}\ln\left(\frac{1}{\Omega}\right)
=k_{\mathrm B}\ln\Omega
=S_{\mathrm B}.
\tag*{[4]}
\\]

The convention \\(0\ln0=0\\) follows by continuity. If microstates are grouped into macrostates with probabilities \\(P_a\\), the expression \\(-k_{\mathrm B}\sum_aP_a\ln P_a\\) is a coarse-grained entropy and is not automatically the full Gibbs entropy in equation [3].

<PhysicsExamples collapsible
  items={[
    {
      title: "Evaluate a non-uniform Gibbs entropy",
      question: "A system has three microstates with probabilities \\(1/2\\), \\(1/4\\), and \\(1/4\\). Find its Gibbs entropy.",
      answer: "The probabilities sum to one, so equation \\([3]\\) applies. Substitute each microstate probability: \\[S_{\\mathrm G}=-k_{\\mathrm B}\\left[\\frac12\\ln\\frac12+\\frac14\\ln\\frac14+\\frac14\\ln\\frac14\\right].\\] Since \\(\\ln(1/2)=-\\ln2\\) and \\(\\ln(1/4)=-2\\ln2\\), \\[S_{\\mathrm G}=k_{\\mathrm B}\\left(\\frac12+\\frac12+\\frac12\\right)\\ln2=\\frac32k_{\\mathrm B}\\ln2.\\] This is below \\(k_{\\mathrm B}\\ln3\\), the entropy of three equal probabilities. **Final result:** \\(S_{\\mathrm G}=(3/2)k_{\\mathrm B}\\ln2\\).",
    },
    {
      title: "Recover Boltzmann entropy",
      question: "An isolated equilibrium macrostate contains 100 accessible, equiprobable microstates. Compare its Boltzmann and Gibbs entropies.",
      answer: "Equation \\([1]\\) assigns \\(p_r=1/100\\) to each microstate. Equation \\([2]\\) gives \\(S_{\\mathrm B}=k_{\\mathrm B}\\ln100\\). The calculation in equation \\([4]\\) applies to any equal distribution, so \\(S_{\\mathrm G}=k_{\\mathrm B}\\ln100\\) as well. Numerically, \\(\\ln100=4.605\\). **Final result:** both definitions give \\(S=4.605k_{\\mathrm B}\\) under the stated microcanonical assumptions.",
    },
  ]}
/>
`;
