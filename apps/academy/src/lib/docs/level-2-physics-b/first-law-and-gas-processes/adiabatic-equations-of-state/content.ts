export const content = String.raw`## Principle

For a reversible adiabatic process in an ideal gas, energy conservation, quasistatic pressure-volume work, and the ideal-gas equation combine to give fixed relations among pressure, volume, and temperature. These relations do not apply to an arbitrary irreversible adiabatic process.

## Notation

<Notation
  items={[
    { symbol: "p,V,T", meaning: "equilibrium gas pressure, total volume, and absolute temperature", unit: "Pa, m^{3}, K" },
    { symbol: "dV,dT", meaning: "exact infinitesimal volume and temperature changes", unit: "m^{3}, K" },
    { symbol: "p_i,p_f", meaning: "initial and final equilibrium pressures", unit: "Pa" },
    { symbol: "V_i,V_f", meaning: "initial and final volumes", unit: "m^{3}" },
    { symbol: "T_i,T_f", meaning: "initial and final absolute temperatures", unit: "K" },
    { symbol: "n", meaning: "amount of ideal gas", unit: "mol" },
    { symbol: "C_V,C_P", meaning: "constant molar heat capacities at constant volume and pressure", unit: "J mol^{-1} K^{-1}" },
    { symbol: "R", meaning: "molar gas constant", unit: "J mol^{-1} K^{-1}" },
    { symbol: "\\gamma=C_P/C_V", meaning: "heat-capacity ratio", unit: "1" },
    { symbol: "\\delta Q,\\delta W,dU", meaning: "inexact infinitesimal heat and work, and exact infinitesimal internal-energy change", unit: "J, J, J" },
  ]}
/>

## The Core Method

For a reversible adiabatic change, \\(\delta Q=0\\) and quasistatic mechanical equilibrium gives \\(\delta W=p\,dV\\). The first law is therefore

\\[
dU=-p\,dV.
\tag*{[1]}
\\]

For an ideal gas with constant molar \\(C_V\\),

\\[
nC_V\,dT=-p\,dV.
\tag*{[2]}
\\]

Using the ideal-gas equation,

\\[
pV=nRT
\quad\Longrightarrow\quad
p=\frac{nRT}{V},
\tag*{[3]}
\\]

equation \\([2]\\) becomes

\\[
C_V\frac{dT}{T}=-R\frac{dV}{V}.
\tag*{[4]}
\\]

Integrating between equilibrium endpoints gives

\\[
C_V\ln\!\left(\frac{T_f}{T_i}\right)
=-R\ln\!\left(\frac{V_f}{V_i}\right).
\tag*{[5]}
\\]

The Mayer relation \\(C_P-C_V=R\\) and \\(\gamma=C_P/C_V\\) imply

\\[
\frac{R}{C_V}=\gamma-1.
\tag*{[6]}
\\]

Substitution of equation \\([6]\\) into equation \\([5]\\) gives

\\[
\ln\!\left(\frac{T_f}{T_i}\right)
=-(\gamma-1)\ln\!\left(\frac{V_f}{V_i}\right),
\qquad
\ln\!\left[\frac{T_f}{T_i}
\left(\frac{V_f}{V_i}\right)^{\gamma-1}\right]=0.
\tag*{[7]}
\\]

Exponentiating equation \\([7]\\) gives

\\[
TV^{\gamma-1}=\text{constant},
\qquad
T_iV_i^{\gamma-1}=T_fV_f^{\gamma-1}.
\tag*{[8]}
\\]

Eliminating temperature with equation \\([3]\\) gives the pressure-volume form

\\[
pV^\gamma=\text{constant},
\qquad
p_iV_i^\gamma=p_fV_f^\gamma.
\tag*{[9]}
\\]

Both equations require an ideal gas, reversibility, and heat capacities treated as constant over the temperature range.

<PhysicsExamples collapsible
  items={[
    {
      title: "Reversible adiabatic doubling of volume",
      question: "A monatomic ideal gas with \\(\\gamma=5/3\\) expands reversibly and adiabatically from \\(T_i=300\\,\\mathrm K\\) to twice its initial volume. Find \\(T_f\\) and \\(p_f/p_i\\).",
      answer: "Equation \\([8]\\) gives \\[T_f=T_i\\left(\\frac{V_i}{V_f}\\right)^{\\gamma-1}=(300\\,\\mathrm K)\\left(\\frac12\\right)^{2/3}=189\\,\\mathrm K.\\] Equation \\([9]\\) gives \\[\\frac{p_f}{p_i}=\\left(\\frac{V_i}{V_f}\\right)^\\gamma=\\left(\\frac12\\right)^{5/3}=0.315.\\] **Final result:** \\(T_f=189\\,\\mathrm K\\) and \\(p_f=0.315p_i\\).",
    },
    {
      title: "Why an adiabat is steeper than an isotherm",
      question: "At the same point on a \\(p\\)-\\(V\\) diagram, compare the slopes of an ideal-gas reversible adiabat and an isotherm.",
      answer: "Differentiate equation \\([9]\\): \\[pV^\\gamma=\\text{constant}\\quad\\Longrightarrow\\quad\\left(\\frac{dp}{dV}\\right)_{\\mathrm{ad}}=-\\gamma\\frac{p}{V}.\\] For an isotherm, \\(pV=\\text{constant}\\), so \\[\\left(\\frac{dp}{dV}\\right)_{T}=-\\frac{p}{V}.\\] Since \\(\\gamma\\gt 1\\), the adiabatic slope has greater magnitude. **Final result:** \\(dp/dV=-\\gamma p/V\\) adiabatically versus \\(-p/V\\) isothermally, so the adiabat is steeper.",
    },
  ]}
/>
`;
