export const content = String.raw`## Principle

In Joule free expansion, a gas expands into an evacuated region inside a rigid, thermally insulated vessel. No heat crosses the outer boundary and no boundary work is done, so internal energy stays constant. The Joule coefficient measures the temperature response to molar-volume change at constant internal energy; it is not the Joule-Thomson coefficient.

## Notation

<Notation
  items={[
    { symbol: "T,p,V_m", meaning: "absolute temperature, pressure, and molar volume", unit: "K, Pa, m^{3} mol^{-1}" },
    { symbol: "T_1,T_2,\\Delta T", meaning: "initial and final temperatures, and their finite change", unit: "K, K, K" },
    { symbol: "U,\\Delta U,U_m,\\Delta U_m", meaning: "total and molar internal energies, and their finite changes", unit: "J, J, J mol^{-1}, J mol^{-1}" },
    { symbol: "Q,W", meaning: "heat into the gas and work done by the gas", unit: "J, J" },
    { symbol: "C_V", meaning: "molar heat capacity at constant volume", unit: "J mol^{-1} K^{-1}" },
    { symbol: "\\mu_J", meaning: "Joule coefficient at constant internal energy and fixed amount", unit: "K mol m^{-3}" },
    { symbol: "a,b,R", meaning: "van der Waals attraction parameter, excluded molar volume, and molar gas constant", unit: "Pa m^{6} mol^{-2}, m^{3} mol^{-1}, J mol^{-1} K^{-1}" },
    { symbol: "V_{m,1},V_{m,2}", meaning: "initial and final molar volumes", unit: "m^{3} mol^{-1}, m^{3} mol^{-1}" },
  ]}
/>

## The Core Method

For the closed gas and both chambers as the system, the rigid evacuated boundary gives \\(W=0\\), and thermal insulation gives \\(Q=0\\). With the Academy sign convention,

\\[
\Delta U=Q-W=0,
\qquad \Delta U_m=0.
\tag*{[1]}
\\]

The Joule coefficient is therefore defined by

\\[
\mu_J=\left(\frac{\partial T}{\partial V_m}\right)_U.
\tag*{[2]}
\\]

Using the cyclic derivative relation, \\(C_V=(\partial U_m/\partial T)_{V_m}\\), and the thermodynamic energy equation gives

\\[
\mu_J
=-\frac{1}{C_V}\left(\frac{\partial U_m}{\partial V_m}\right)_T
=-\frac{1}{C_V}
\left[T\left(\frac{\partial p}{\partial T}\right)_{V_m}-p\right].
\tag*{[3]}
\\]

For an ideal gas, \\(p=RT/V_m\\), so the bracket vanishes and \\(\mu_J=0\\). For the molar van der Waals equation \\(p=RT/(V_m-b)-a/V_m^2\\), equation [3] gives the corrected sign

\\[
\mu_J=-\frac{a}{C_VV_m^2}<0.
\tag*{[4]}
\\]

If \\(a\\) and \\(C_V\\) are treated as constant, integrating \\(dT=\mu_JdV_m\\) gives

\\[
T_2-T_1=\frac{a}{C_V}
\left(\frac{1}{V_{m,2}}-\frac{1}{V_{m,1}}\right).
\tag*{[5]}
\\]

Expansion has \\(V_{m,2}>V_{m,1}\\), so equation [5] predicts cooling even though the Joule coefficient itself is negative.

<PhysicsExamples collapsible
  items={[
    {
      title: "Van der Waals free-expansion cooling",
      question: "A gas has \\(a=0.140\\,\\mathrm{Pa\\,m^6\\,mol^{-2}}\\) and \\(C_V=20.0\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\). Estimate the temperature change when \\(V_m\\) increases from \\(1.00\\times10^{-3}\\) to \\(2.00\\times10^{-3}\\,\\mathrm{m^3\\,mol^{-1}}\\).",
      answer: "Apply equation \\([5]\\): \\[\\Delta T=\\frac{0.140}{20.0}\\left(\\frac{1}{2.00\\times10^{-3}}-\\frac{1}{1.00\\times10^{-3}}\\right)\\mathrm K=(0.00700)(-500)\\,\\mathrm K=-3.50\\,\\mathrm K.\\] The negative result is consistent with equation \\([4]\\) and \\(dV_m\\gt 0\\). **Final result:** \\(\\Delta T=-3.50\\,\\mathrm K\\).",
    },
    {
      title: "Ideal gas in an insulated free expansion",
      question: "Does an ideal gas cool when it freely expands in a rigid insulated vessel?",
      answer: "Equation \\([1]\\) fixes \\(U_m\\). For an ideal gas, internal energy depends only on temperature, and equation \\([3]\\) gives \\(\\mu_J=0\\). Therefore a finite molar-volume increase produces no temperature change. This conclusion concerns free expansion, not steady-flow throttling. **Final result:** an ideal gas has \\(\\Delta T=0\\) in Joule free expansion.",
    },
  ]}
/>
`;
