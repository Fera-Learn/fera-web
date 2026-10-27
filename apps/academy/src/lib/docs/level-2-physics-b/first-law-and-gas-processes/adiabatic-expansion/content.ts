export const content = String.raw`## Principle

An adiabatic process transfers no heat across the system boundary. During an adiabatic expansion against a positive external pressure, the gas does work at the expense of its internal energy. Adiabatic does not mean reversible: free expansion is adiabatic and irreversible.

## Notation

<Notation
  items={[
    { symbol: "Q,W", meaning: "finite heat into the gas and work done by the gas", unit: "J" },
    { symbol: "U,\\Delta U", meaning: "internal energy and its finite change", unit: "J" },
    { symbol: "n", meaning: "amount of ideal gas", unit: "mol" },
    { symbol: "C_V", meaning: "molar heat capacity at constant volume", unit: "J mol^{-1} K^{-1}" },
    { symbol: "T_i,T_f", meaning: "initial and final equilibrium temperatures", unit: "K" },
    { symbol: "p_{\\mathrm{ext}}", meaning: "external pressure at the moving boundary", unit: "Pa" },
    { symbol: "V_i,V_f,dV", meaning: "initial and final gas volumes and exact infinitesimal volume change", unit: "m^{3}, m^{3}, m^{3}" },
  ]}
/>

## The Core Method

An adiabatic boundary permits no heat transfer, so

\\[
Q=0.
\tag*{[1]}
\\]

The finite first-law balance becomes

\\[
\Delta U=Q-W=-W.
\tag*{[2]}
\\]

For a fixed amount of ideal gas with constant molar heat capacity,

\\[
\Delta U=nC_V(T_f-T_i).
\tag*{[3]}
\\]

Combining equations \\([2]\\) and \\([3]\\) gives

\\[
W=nC_V(T_i-T_f).
\tag*{[4]}
\\]

An expansion against \\(p_{\mathrm{ext}}>0\\) has \\(W>0\\), so equation \\([4]\\) requires \\(T_f<T_i\\) for an ideal gas. This cooling follows from work output, not from expansion alone.

For adiabatic free expansion into vacuum,

\\[
W=\int_{V_i}^{V_f}p_{\mathrm{ext}}\,dV=0
\quad\Longrightarrow\quad
\Delta U=0.
\tag*{[5]}
\\]

Thus an ideal gas has no temperature change in adiabatic free expansion. A thermally insulating wall, sometimes called an adiathermal wall, enforces \\(Q=0\\) but does not enforce reversibility.

<PhysicsExamples collapsible
  items={[
    {
      title: "Work from the temperature drop",
      question: "A sample of \\(n=0.0200\\,\\mathrm{mol}\\) ideal argon has \\(C_V=12.47\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\). It expands adiabatically from \\(T_i=298.15\\,\\mathrm K\\) to \\(T_f=188.15\\,\\mathrm K\\). Find the work done by the gas.",
      answer: "Equation \\([4]\\) gives \\[W=(0.0200)(12.47)(298.15-188.15)\\,\\mathrm J=27.434\\,\\mathrm J.\\] The positive sign is required because the expanding gas does work on the surroundings. **Final result:** \\(W=+27.4\\,\\mathrm J\\) to three significant figures.",
    },
    {
      title: "Adiabatic expansion without cooling",
      question: "An ideal gas freely expands into vacuum inside an insulated rigid vessel. Must its temperature fall because its volume increases?",
      answer: "No. The vacuum gives \\(p_{\\mathrm{ext}}=0\\), so equation \\([5]\\) gives \\(W=0\\). With \\(Q=0\\), equation \\([2]\\) gives \\(\\Delta U=0\\), and ideal-gas internal energy depends only on temperature. **Final result:** \\(T_f=T_i\\); this adiabatic expansion does not cool the ideal gas.",
    },
  ]}
/>
`;
