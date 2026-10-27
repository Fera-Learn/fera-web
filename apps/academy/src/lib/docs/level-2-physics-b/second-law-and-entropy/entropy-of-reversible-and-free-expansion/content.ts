export const content = String.raw`## Principle

An ideal gas can reach the same expanded equilibrium state by reversible isothermal expansion or by irreversible free expansion. Its entropy change is the same because entropy is a state function, but the heat, work, surroundings entropy, and entropy generation depend on the path.

## Notation

<Notation
  items={[
    { symbol: "n", meaning: "amount of ideal gas", unit: "mol" },
    { symbol: "R", meaning: "molar gas constant", unit: "J mol^{-1} K^{-1}" },
    { symbol: "T", meaning: "constant absolute gas temperature", unit: "K" },
    { symbol: "p,V", meaning: "equilibrium gas pressure and total volume", unit: "Pa, m^{3}" },
    { symbol: "V_i,V_f", meaning: "initial and final gas volumes", unit: "m^{3}, m^{3}" },
    { symbol: "Q,W", meaning: "heat transferred into the gas and work done by the gas", unit: "J, J" },
    { symbol: "Q_{\\mathrm{rev}},W_{\\mathrm{rev}}", meaning: "heat transferred into the gas and work done by the gas along the reversible comparison path", unit: "J, J" },
    { symbol: "\\Delta U", meaning: "change in gas internal energy", unit: "J" },
    { symbol: "\\Delta S_{\\mathrm{gas}},\\Delta S_{\\mathrm{surr}},\\Delta S_{\\mathrm{univ}}", meaning: "entropy changes of gas, surroundings, and gas plus surroundings", unit: "J K^{-1}, J K^{-1}, J K^{-1}" },
    { symbol: "S_{\\mathrm{gen}}", meaning: "entropy generated in the chosen composite", unit: "J K^{-1}" },
  ]}
/>

## The Core Method

For a reversible isothermal expansion of an ideal gas, \\(\Delta U=0\\) because ideal-gas internal energy depends only on temperature. The first law \\(\Delta U=Q-W\\) gives \\(Q=W\\). Mechanical equilibrium and the ideal-gas equation give

\\[
p=\frac{nRT}{V}.
\tag*{[1]}
\\]

The reversible work is

\\[
W_{\mathrm{rev}}
=\int_{V_i}^{V_f}p\,dV
=\int_{V_i}^{V_f}\frac{nRT}{V}\,dV
=nRT\ln\!\left(\frac{V_f}{V_i}\right).
\tag*{[2]}
\\]

Since \\(Q_{\mathrm{rev}}=W_{\mathrm{rev}}\\), the gas entropy change is

\\[
\Delta S_{\mathrm{gas}}
=\frac{Q_{\mathrm{rev}}}{T}
=nR\ln\!\left(\frac{V_f}{V_i}\right).
\tag*{[3]}
\\]

The reservoir supplying reversible heat at the same temperature has

\\[
\Delta S_{\mathrm{surr}}
=-\frac{Q_{\mathrm{rev}}}{T}
=-nR\ln\!\left(\frac{V_f}{V_i}\right),
\qquad
\Delta S_{\mathrm{univ}}=0.
\tag*{[4]}
\\]

In free expansion into a vacuum inside an adiabatic rigid container, \\(Q=0\\) and \\(W=0\\), so

\\[
\Delta U=Q-W=0.
\tag*{[5]}
\\]

For an ideal gas, the final temperature equals the initial temperature. The endpoints therefore match those of the reversible isothermal comparison path, and equation \\([3]\\) still gives the gas entropy change. However, \\(\Delta S_{\mathrm{surr}}=0\\), so

\\[
\Delta S_{\mathrm{univ}}
=S_{\mathrm{gen}}
=nR\ln\!\left(\frac{V_f}{V_i}\right)>0.
\tag*{[6]}
\\]

The irreversible free-expansion path has no sequence of equilibrium pressures, so \\(p\,dV\\) must not be integrated along that actual path.

<PhysicsExamples collapsible
  items={[
    {
      title: "Reversible doubling of volume",
      question: "One mole of ideal gas expands reversibly and isothermally at \\(300\\,\\mathrm{K}\\) from \\(V_i\\) to \\(2V_i\\). Find the gas entropy change, heat input, work output, and universe entropy change.",
      answer: "Equation \\([3]\\) gives \\[\\Delta S_{\\mathrm{gas}}=R\\ln2=(8.314\\,\\mathrm{J\\,mol^{-1}K^{-1}})\\ln2=5.76\\,\\mathrm{J\\,K^{-1}}.\\] Equation \\([2]\\) gives \\[W_{\\mathrm{rev}}=(300\\,\\mathrm{K})(5.76\\,\\mathrm{J\\,K^{-1}})=1.73\\times10^3\\,\\mathrm{J}.\\] Since \\(\\Delta U=0\\), \\(Q=W=1.73\\,\\mathrm{kJ}\\). Equation \\([4]\\) gives an equal negative surroundings change and zero universe change. **Final result:** \\(\\Delta S_{\\mathrm{gas}}=5.76\\,\\mathrm{J\\,K^{-1}}\\), \\(Q=W=1.73\\,\\mathrm{kJ}\\), and \\(\\Delta S_{\\mathrm{univ}}=0\\).",
    },
    {
      title: "Free expansion to twice the volume",
      question: "The same one mole of ideal gas freely expands from \\(V_i\\) to \\(2V_i\\) in an adiabatic rigid container. Find \\(Q\\), \\(W\\), the gas entropy change, and entropy generation.",
      answer: "The process conditions give \\(Q=0\\) and \\(W=0\\), so equation \\([5]\\) gives \\(\\Delta U=0\\). The endpoint states are the same as for the reversible comparison path, so equation \\([3]\\) gives \\(\\Delta S_{\\mathrm{gas}}=R\\ln2=5.76\\,\\mathrm{J\\,K^{-1}}\\). The surroundings exchange no heat, and equation \\([6]\\) therefore gives \\(S_{\\mathrm{gen}}=5.76\\,\\mathrm{J\\,K^{-1}}\\). **Final result:** \\(Q=W=0\\), while \\(\\Delta S_{\\mathrm{gas}}=S_{\\mathrm{gen}}=5.76\\,\\mathrm{J\\,K^{-1}}\\).",
    },
  ]}
/>
`;
