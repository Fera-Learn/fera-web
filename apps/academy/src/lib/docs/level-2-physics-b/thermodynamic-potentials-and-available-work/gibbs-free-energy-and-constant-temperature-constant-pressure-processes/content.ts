export const content = String.raw`## Principle

Gibbs free energy is the potential for a closed system held at constant temperature and pressure. Under those constraints, its decrease bounds the non-expansion work that the system can deliver; ordinary pressure-volume work is excluded from that useful-work bound.

## Notation

<Notation
  items={[
    { symbol: "G,H,U,S,T,p,V", meaning: "Gibbs free energy, enthalpy, internal energy, entropy, absolute temperature, pressure, and total volume", unit: "J, J, J, J K^{-1}, K, Pa, m^{3}" },
    { symbol: "\\delta Q,\\delta W_{\\mathrm{non}},\\delta W", meaning: "heat into the system, non-expansion work by the system, and total work by the system", unit: "J, J, J" },
    { symbol: "\\Delta G,\\Delta H,\\Delta S,W_{\\mathrm{non,max}}", meaning: "finite Gibbs, enthalpy, and entropy changes and maximum non-expansion work", unit: "J, J, J K^{-1}, J" },
    { symbol: "\\Delta G_m,\\Delta H_m,\\Delta S_m", meaning: "molar Gibbs, enthalpy, and entropy changes", unit: "J mol^{-1}, J mol^{-1}, J mol^{-1} K^{-1}" },
  ]}
/>

## The Core Method

The definition and fixed-composition differential are

\\[
G=H-TS=U+pV-TS,
\qquad
dG=-S\,dT+V\,dp.
\tag*{[1]}
\\]

Separate total work into pressure-volume and non-expansion parts. In quasistatic mechanical equilibrium at external pressure \\(p\\),

\\[
\delta W=p\,dV+\delta W_{\mathrm{non}},
\qquad
dU=\delta Q-p\,dV-\delta W_{\mathrm{non}}.
\tag*{[2]}
\\]

For a process at fixed reservoir temperature and pressure, use \\(\delta Q\le T\,dS\\):

\\[
\begin{aligned}
dG&=dU+p\,dV-T\,dS\\
&=\delta Q-\delta W_{\mathrm{non}}-T\,dS\\
&\le-\delta W_{\mathrm{non}}.
\end{aligned}
\tag*{[3]}
\\]

Integration between equilibrium states gives

\\[
W_{\mathrm{non}}\le-\Delta G,
\qquad
W_{\mathrm{non,max}}=-\Delta G
\quad\text{for a reversible process}.
\tag*{[4]}
\\]

If no non-expansion work is extracted or supplied, spontaneous change at fixed \\(T,p\\) obeys \\(dG\le0\\). At equilibrium \\(G\\) is stationary, and stable equilibrium is a constrained minimum. For changes evaluated at one temperature,

\\[
\Delta G=\Delta H-T\Delta S.
\tag*{[5]}
\\]

<PhysicsExamples collapsible
  items={[
    {
      title: "Gibbs change for forming liquid water",
      question: "At \\(298\\,\\mathrm{K}\\), the reaction \\(\\mathrm{H_2(g)}+\\tfrac12\\mathrm{O_2(g)}\\to\\mathrm{H_2O(l)}\\) has \\(\\Delta H_m=-285.83\\,\\mathrm{kJ\\,mol^{-1}}\\) and \\(\\Delta S_m=-163.4\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\). Find \\(\\Delta G_m\\).",
      answer: "Convert entropy units before using the molar form of equation \\([5]\\): \\(\\Delta S_m=-0.1634\\,\\mathrm{kJ\\,mol^{-1}\\,K^{-1}}\\). Then \\[\\Delta G_m=-285.83-(298)(-0.1634)=-237.14\\,\\mathrm{kJ\\,mol^{-1}}.\\] The negative value means the stated direction is thermodynamically spontaneous at constant \\(T,p\\). **Final result:** \\(\\Delta G_m=-237.1\\,\\mathrm{kJ\\,mol^{-1}}\\).",
    },
    {
      title: "Separate expansion work from useful work",
      question: "A reversible constant-\\(T,p\\) process has \\(\\Delta G=-120\\,\\mathrm{kJ}\\). What maximum electrical work can it deliver?",
      answer: "Electrical work is non-expansion work. Equation \\([4]\\) gives \\(W_{\\mathrm{non,max}}=-\\Delta G=120\\,\\mathrm{kJ}\\). Pressure-volume work is already accounted for through enthalpy and must not be added to this result. **Final result:** the maximum electrical work output is \\(120\\,\\mathrm{kJ}\\).",
    },
  ]}
/>
`;
