export const content = String.raw`## Principle

Joule-Thomson throttling is a steady-flow pressure drop through a porous plug, valve, or restriction. For an adiabatic device with no shaft work and negligible kinetic and potential energy changes, molar enthalpy is conserved. Cooling on pressure reduction occurs only where the Joule-Thomson coefficient is positive.

## Notation

<Notation
  items={[
    { symbol: "p,\\Delta p,T,\\Delta T,V_m", meaning: "pressure and its finite change, absolute temperature and its finite change, and molar volume", unit: "Pa, Pa, K, K, m^{3} mol^{-1}" },
    { symbol: "H,H_m", meaning: "total and molar enthalpy", unit: "J, J mol^{-1}" },
    { symbol: "C_P", meaning: "molar heat capacity at constant pressure", unit: "J mol^{-1} K^{-1}" },
    { symbol: "\\mu_{JT}", meaning: "Joule-Thomson coefficient at constant enthalpy and fixed amount", unit: "K Pa^{-1}" },
    { symbol: "\\alpha_p", meaning: "isobaric volumetric expansion coefficient", unit: "K^{-1}" },
    { symbol: "a,b,R", meaning: "van der Waals attraction parameter, excluded molar volume, and molar gas constant", unit: "Pa m^{6} mol^{-2}, m^{3} mol^{-1}, J mol^{-1} K^{-1}" },
    { symbol: "T_i", meaning: "inversion temperature in the low-pressure approximation", unit: "K" },
  ]}
/>

## The Core Method

A porous plug maintains a pressure drop without shaft work, giving a constant-enthalpy process. The inversion curve separates inlet conditions that cool on throttling from those that warm.

<PhysicsDiagram slug="joule-kelvin-inversion" />

The steady-flow energy balance across the stated throttling device reduces to

\\[
H_{m,1}=H_{m,2}.
\tag*{[1]}
\\]

Thus throttling is isenthalpic, not isothermal and not a constant-internal-energy free expansion. Its coefficient is

\\[
\mu_{JT}=\left(\frac{\partial T}{\partial p}\right)_H.
\tag*{[2]}
\\]

Using \\(dH_m=T\,dS_m+V_m\,dp\\), a Maxwell relation, and \\(C_P=(\partial H_m/\partial T)_p\\) gives

\\[
\mu_{JT}
=\frac{1}{C_P}
\left[T\left(\frac{\partial V_m}{\partial T}\right)_p-V_m\right]
=\frac{V_m}{C_P}(\alpha_pT-1).
\tag*{[3]}
\\]

Across a small pressure drop, \\(dT=\mu_{JT}dp\\). Since throttling has \\(dp<0\\), the sign rule is

\\[
\mu_{JT}>0\Rightarrow dT<0,
\qquad
\mu_{JT}<0\Rightarrow dT>0.
\tag*{[4]}
\\]

The inversion curve is defined by \\(\mu_{JT}=0\\), equivalently \\(\alpha_pT=1\\). Below that curve in the usual cooling region, \\(\mu_{JT}>0\\). An ideal gas has \\(\alpha_p=1/T\\) and hence \\(\mu_{JT}=0\\). For a van der Waals gas at low pressure,

\\[
\mu_{JT}\simeq\frac{1}{C_P}
\left(\frac{2a}{RT}-b\right),
\qquad
T_i\simeq\frac{2a}{Rb}.
\tag*{[5]}
\\]

The approximate \\(T_i\\) is the zero-pressure limit, not a pressure-independent exact inversion temperature.

<PhysicsExamples collapsible
  items={[
    {
      title: "Temperature change through a throttle",
      question: "A gas with \\(\\mu_{JT}=2.5\\times10^{-6}\\,\\mathrm{K\\,Pa^{-1}}\\) undergoes an isenthalpic pressure change of \\(\\Delta p=-4.0\\times10^6\\,\\mathrm{Pa}\\). Estimate \\(\\Delta T\\) while treating the coefficient as constant.",
      answer: "Use the local form following equation \\([4]\\): \\[\\Delta T\\simeq\\mu_{JT}\\Delta p=(2.5\\times10^{-6})(-4.0\\times10^6)\\,\\mathrm K=-10\\,\\mathrm K.\\] The pressure falls and the positive coefficient gives cooling, exactly as the inversion sign rule requires. **Final result:** \\(\\Delta T\\simeq-10\\,\\mathrm K\\).",
    },
    {
      title: "Throttling above the inversion curve",
      question: "A real gas is throttled from high to low pressure at a state where \\(\\mu_{JT}\\lt 0\\). Does it cool?",
      answer: "The device still obeys the isenthalpic condition in equation \\([1]\\). However, \\(dp\\lt 0\\) and \\(\\mu_{JT}\\lt 0\\), so equation \\([4]\\) gives \\(dT\\gt 0\\). The gas must first be precooled into its positive-coefficient region if throttling is to cool it. **Final result:** the gas warms during the pressure drop when \\(\\mu_{JT}\\lt 0\\).",
    },
  ]}
/>
`;
