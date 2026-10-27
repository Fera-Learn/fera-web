export const content = String.raw`## Principle

A single two-level particle or independent unit absorbs energy only while thermal population moves from the lower level to the upper level. Its one-unit heat capacity therefore vanishes at both low and high temperature and has a Schottky peak at an intermediate temperature set by the level gap.

## Notation

<Notation
  items={[
    { symbol: "0,\\Delta", meaning: "nondegenerate lower and upper one-particle energies", unit: "J, J" },
    { symbol: "T,k_{\\mathrm B},\\beta", meaning: "temperature, Boltzmann constant, and inverse thermal energy", unit: "K, J K^{-1}, J^{-1}" },
    { symbol: "x", meaning: "dimensionless gap, beta Delta", unit: "1" },
    { symbol: "z_1", meaning: "one-particle partition function", unit: "1" },
    { symbol: "u,C_{V,1},C_{V,1,\\mathrm{max}}", meaning: "one-particle mean energy, constant-volume heat capacity, and its maximum", unit: "J, J K^{-1}, J K^{-1}" },
    { symbol: "p_1", meaning: "upper-level probability", unit: "1" },
  ]}
/>

## The Core Method

A finite two-level system saturates at both temperature extremes. Its heat capacity therefore vanishes at low and high temperature and reaches a Schottky maximum between them.

<PhysicsDiagram slug="two-level-thermodynamic-curves" />

For two nondegenerate levels at energies \\(0\\) and \\(\Delta>0\\), define \\(x=\beta\Delta=\Delta/(k_{\mathrm B}T)\\). The one-particle canonical sum and upper-level probability are

\\[
z_1=1+e^{-x},
\qquad
p_1=\frac{e^{-x}}{1+e^{-x}}=\frac{1}{e^x+1}.
\tag*{[1]}
\\]

The one-particle mean energy follows directly:

\\[
u=0(1-p_1)+\Delta p_1
=\frac{\Delta}{e^x+1}.
\tag*{[2]}
\\]

Differentiate with \\(dx/dT=-x/T\\):

\\[
C_{V,1}=\frac{du}{dT}
=\frac{du}{dx}\frac{dx}{dT}
=\left(-\frac{\Delta e^x}{(1+e^x)^2}\right)\left(-\frac{x}{T}\right)
=k_{\mathrm B}x^2\frac{e^x}{(1+e^x)^2}
=k_{\mathrm B}\left(\frac{x}{2}\right)^2\operatorname{sech}^2\left(\frac{x}{2}\right).
\tag*{[3]}
\\]

Setting the derivative of equation [3] to zero gives

\\[
\frac{d}{dx}\ln\left(\frac{C_{V,1}}{k_{\mathrm B}}\right)
=\frac{2}{x}-\tanh\left(\frac{x}{2}\right)=0,
\qquad
x\tanh\left(\frac{x}{2}\right)=2.
\tag*{[4]}
\\]

The positive solution is \\(x=2.399\\), so the corrected peak position and height are

\\[
\frac{k_{\mathrm B}T_{\mathrm{peak}}}{\Delta}=\frac{1}{2.399}=0.4168,
\qquad
C_{V,1,\mathrm{max}}=0.4392k_{\mathrm B}.
\tag*{[5]}
\\]

For independent identical two-level units, total energy and heat capacity are the one-unit results multiplied by the number of units. Degeneracy would modify both the partition function and the peak position.

<PhysicsExamples collapsible
  items={[
    {
      title: "Locate a Schottky peak",
      question: "A nondegenerate two-level unit has \\(\\Delta/k_{\\mathrm B}=120\\,\\mathrm K\\). Find its peak temperature and peak heat capacity.",
      answer: "Equation \\([5]\\) gives \\[T_{\\mathrm{peak}}=0.4168\\frac{\\Delta}{k_{\\mathrm B}}=0.4168(120\\,\\mathrm K)=50.0\\,\\mathrm K.\\] The same equation gives \\(C_{V,1,\\mathrm{max}}=0.4392k_{\\mathrm B}\\). The temperature has the expected scale \\(k_{\\mathrm B}T\\sim\\Delta\\), and the finite peak height is below \\(k_{\\mathrm B}\\). **Final result:** \\(T_{\\mathrm{peak}}=50.0\\,\\mathrm K\\) and \\(C_{V,1,\\mathrm{max}}=0.4392k_{\\mathrm B}\\).",
    },
    {
      title: "Explain both vanishing limits",
      question: "Why does the heat capacity approach zero for both \\(k_{\\mathrm B}T\\ll\\Delta\\) and \\(k_{\\mathrm B}T\\gg\\Delta\\)?",
      answer: "At low temperature, equation \\([1]\\) gives \\(p_1\\simeq e^{-\\Delta/(k_{\\mathrm B}T)}\\), so the upper level is frozen out and energy barely changes. At high temperature, \\(p_1\\to1/2\\), so both levels are saturated equally and \\(u\\to\\Delta/2\\). In either limit \\(du/dT\\to0\\), consistent with equation \\([3]\\). **Final result:** \\(C_{V,1}\\to0\\) in both limits because the one-particle population is respectively frozen or saturated.",
    },
  ]}
/>
`;
