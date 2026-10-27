export const content = String.raw`## Principle

Latent heat is the reversible heat absorbed per mole when one phase converts to another at coexistence. Equality of molar chemical potentials along the boundary links this molar latent heat and the molar volume change to the boundary slope through the Clapeyron equation. The Clausius-Clapeyron form follows only after additional vapour approximations.

## Notation

<Notation
  items={[
    { symbol: "p,T", meaning: "coexistence pressure and absolute temperature", unit: "Pa, K" },
    { symbol: "\\mu_m,S_m,V_m", meaning: "molar chemical potential, molar entropy, and molar volume", unit: "J mol^{-1}, J mol^{-1} K^{-1}, m^{3} mol^{-1}" },
    { symbol: "\\Delta S_m,\\Delta V_m", meaning: "final-minus-initial molar entropy and molar volume changes", unit: "J mol^{-1} K^{-1}, m^{3} mol^{-1}" },
    { symbol: "L_m", meaning: "molar latent heat absorbed for the forward transition", unit: "J mol^{-1}" },
    { symbol: "R", meaning: "molar gas constant", unit: "J mol^{-1} K^{-1}" },
    { symbol: "p_1,p_2,T_1,T_2", meaning: "two coexistence pressures and temperatures", unit: "Pa, Pa, K, K" },
  ]}
/>

## The Core Method

For one phase of a pure substance, the molar Gibbs differential is

\\[
d\mu_m=-S_m\,dT+V_m\,dp.
\tag*{[1]}
\\]

Along coexistence, the differentials are equal in phases 1 and 2. Subtracting their forms of equation [1] gives

\\[
0=-\Delta S_m\,dT+\Delta V_m\,dp,
\qquad
\frac{dp}{dT}=\frac{\Delta S_m}{\Delta V_m}.
\tag*{[2]}
\\]

For a reversible molar phase conversion at temperature \\(T\\), \\(L_m=T\Delta S_m\\). Therefore the corrected molar Clapeyron equation is

\\[
\frac{dp}{dT}=\frac{L_m}{T\Delta V_m}.
\tag*{[3]}
\\]

For vaporisation, if the vapour is ideal, the condensed-phase volume is negligible, and \\(L_m\\) is approximately constant, then \\(\Delta V_m\simeq RT/p\\). Equation [3] becomes

\\[
\frac{d\ln p}{dT}=\frac{L_m}{RT^{2}}.
\tag*{[4]}
\\]

Integrating between two coexistence states yields

\\[
\ln\!\left(\frac{p_2}{p_1}\right)
=-\frac{L_m}{R}\left(\frac{1}{T_2}-\frac{1}{T_1}\right).
\tag*{[5]}
\\]

Mass-specific latent heat cannot be inserted into equations [3]-[5] unless the volume and gas constant are converted to the same mass-specific basis.

<PhysicsExamples collapsible
  items={[
    {
      title: "A coexistence-curve slope",
      question: "At \\(300\\,\\mathrm K\\), a transition has \\(L_m=6.0\\,\\mathrm{kJ\\,mol^{-1}}\\) and \\(\\Delta V_m=2.0\\times10^{-5}\\,\\mathrm{m^3\\,mol^{-1}}\\). Calculate \\(dp/dT\\).",
      answer: "Use equation \\([3]\\) because both quantities are molar: \\[\\frac{dp}{dT}=\\frac{6.0\\times10^3\\,\\mathrm{J\\,mol^{-1}}}{(300\\,\\mathrm K)(2.0\\times10^{-5}\\,\\mathrm{m^3\\,mol^{-1}})}=1.0\\times10^6\\,\\mathrm{Pa\\,K^{-1}}.\\] The units reduce because \\(\\mathrm J=\\mathrm{Pa\\,m^3}\\). **Final result:** \\(dp/dT=1.0\\times10^6\\,\\mathrm{Pa\\,K^{-1}}\\).",
    },
    {
      title: "Why the melting line of ordinary ice slopes backwards",
      question: "Use the Clapeyron equation to determine the sign of the solid-liquid boundary slope for ordinary ice.",
      answer: "Melting absorbs heat, so \\(L_m\\gt 0\\). Liquid water near the ordinary melting point has a smaller molar volume than ice, so \\(\\Delta V_m=V_{m,\\mathrm l}-V_{m,\\mathrm s}\\lt 0\\). Since \\(T\\gt 0\\), equation \\([3]\\) then gives a negative slope. **Final result:** \\(dp/dT\\lt 0\\), so increasing pressure lowers the melting temperature of ordinary ice locally.",
    },
  ]}
/>
`;
