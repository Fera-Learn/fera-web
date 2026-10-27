export const content = String.raw`## Principle

During reversible isothermal expansion of an ideal gas, temperature and internal energy remain constant. Heat entering the gas exactly replaces the energy transferred out as work, while mechanical equilibrium allows the external pressure to be replaced by the gas pressure.

## Notation

<Notation
  items={[
    { symbol: "T", meaning: "constant absolute gas temperature", unit: "K" },
    { symbol: "dT,dV", meaning: "exact infinitesimal temperature and volume changes", unit: "K, m^{3}" },
    { symbol: "U,dU", meaning: "internal energy and its exact infinitesimal change", unit: "J, J" },
    { symbol: "n", meaning: "amount of ideal gas", unit: "mol" },
    { symbol: "C_V", meaning: "molar heat capacity at constant volume", unit: "J mol^{-1} K^{-1}" },
    { symbol: "R", meaning: "molar gas constant", unit: "J mol^{-1} K^{-1}" },
    { symbol: "p,p_{\\mathrm{ext}}", meaning: "equilibrium gas pressure and external pressure", unit: "Pa, Pa" },
    { symbol: "V,V_i,V_f", meaning: "gas volume and its initial and final values", unit: "m^{3}" },
    { symbol: "\\delta Q,Q", meaning: "inexact infinitesimal heat and finite heat transferred into the gas", unit: "J" },
    { symbol: "\\delta W,W", meaning: "inexact infinitesimal work and finite work done by the gas", unit: "J" },
  ]}
/>

## The Core Method

Starting from the same state, an ideal-gas adiabat falls more steeply than an isotherm because the expanding gas cools when no heat enters.

<PhysicsDiagram slug="reversible-gas-process-paths" />

For an ideal gas, \\(U=U(T)\\). Isothermal conditions therefore give

\\[
dT=0,
\qquad
dU=nC_V\,dT=0.
\tag*{[1]}
\\]

The first law then requires

\\[
dU=\delta Q-\delta W=0
\quad\Longrightarrow\quad
\delta Q=\delta W.
\tag*{[2]}
\\]

Reversibility supplies mechanical equilibrium, while the ideal-gas equation supplies the pressure:

\\[
p_{\mathrm{ext}}\to p,
\qquad
p=\frac{nRT}{V}.
\tag*{[3]}
\\]

The work done by the gas is therefore

\\[
W=\int_{V_i}^{V_f}p\,dV
=nRT\int_{V_i}^{V_f}\frac{dV}{V}
=nRT\ln\!\left(\frac{V_f}{V_i}\right).
\tag*{[4]}
\\]

Integrating equation \\([2]\\) gives

\\[
Q=W=nRT\ln\!\left(\frac{V_f}{V_i}\right).
\tag*{[5]}
\\]

The logarithm contains the dimensionless ratio \\(V_f/V_i\\). For expansion the ratio exceeds one, so both \\(Q\\) and \\(W\\) are positive. For compression both are negative: heat leaves the gas while the surroundings do work on it.

<PhysicsExamples collapsible
  items={[
    {
      title: "Isothermal expansion of argon",
      question: "One mole of ideal argon at \\(20.0\\,{}^\\circ\\mathrm C\\) expands reversibly and isothermally from \\(10.0\\,\\mathrm{dm^3}\\) to \\(30.0\\,\\mathrm{dm^3}\\). Find the heat transfer and work. Use \\(R=8.3145\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\).",
      answer: "Convert temperature: \\(T=293.15\\,\\mathrm K\\). Equation \\([5]\\) gives \\[Q=W=(1)(8.3145)(293.15)\\ln\\left(\\frac{30.0}{10.0}\\right)\\,\\mathrm J=2.68\\times10^3\\,\\mathrm J.\\] Both signs are positive: heat enters and the gas does work. **Final result:** \\(Q=W=+2.68\\,\\mathrm{kJ}\\).",
    },
    {
      title: "Reversing the isothermal path",
      question: "The same ideal gas is reversibly compressed at the same temperature from \\(30.0\\,\\mathrm{dm^3}\\) to \\(10.0\\,\\mathrm{dm^3}\\). Determine the signs and values of \\(Q\\) and \\(W\\).",
      answer: "Reversing the volume ratio in equation \\([5]\\) changes the logarithm's sign: \\[Q=W=nRT\\ln\\left(\\frac{10.0}{30.0}\\right)=-2.68\\,\\mathrm{kJ}.\\] Negative \\(W\\) means the surroundings do \\(2.68\\,\\mathrm{kJ}\\) of work on the gas; negative \\(Q\\) means the same energy leaves as heat. **Final result:** \\(Q=W=-2.68\\,\\mathrm{kJ}\\).",
    },
  ]}
/>
`;
