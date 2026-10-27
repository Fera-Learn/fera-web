export const content = String.raw`## Principle

Carbon dioxide, water, and helium illustrate how intermolecular interactions and quantum effects change phase-diagram geometry. Carbon dioxide has no equilibrium liquid at atmospheric pressure, ordinary ice has an unusual negative melting-line slope, and helium remains liquid to very low temperature at low pressure while supporting normal and superfluid liquid phases.

## Notation

<Notation
  items={[
    { symbol: "p,T", meaning: "pressure and absolute temperature", unit: "Pa, K" },
    { symbol: "p_{\\mathrm t},T_{\\mathrm t}", meaning: "triple-point pressure and temperature", unit: "Pa, K" },
    { symbol: "p_{\\mathrm c},T_{\\mathrm c}", meaning: "critical pressure and temperature", unit: "Pa, K" },
    { symbol: "L_m", meaning: "molar latent heat absorbed in the stated transition", unit: "J mol^{-1}" },
    { symbol: "\\Delta V_m", meaning: "final-minus-initial molar volume change", unit: "m^{3} mol^{-1}" },
    { symbol: "C_P", meaning: "molar heat capacity at constant pressure", unit: "J mol^{-1} K^{-1}" },
  ]}
/>

## The Core Method

The local slope of any two-phase boundary follows the molar Clapeyron equation:

\\[
\frac{dp}{dT}=\frac{L_m}{T\Delta V_m}.
\tag*{[1]}
\\]

For carbon dioxide, \\(p_{\mathrm t}\simeq5.18\times10^5\,\mathrm{Pa}\\), above atmospheric pressure. A solid heated at one atmosphere therefore crosses the solid-vapour boundary and sublimes rather than melting. Its liquid-vapour curve ends near

\\[
T_{\mathrm c}\simeq304.1\,\mathrm K,
\qquad
p_{\mathrm c}\simeq7.38\times10^6\,\mathrm{Pa}.
\tag*{[2]}
\\]

For ordinary water near its usual melting point, melting has \\(L_m>0\\) but \\(\Delta V_m=V_{m,\mathrm l}-V_{m,\mathrm s}<0\\). Equation [1] therefore gives a negative solid-liquid slope because open hydrogen-bonded ice is less dense than liquid water.

Helium-4 requires pressure to solidify even as \\(T\\) approaches zero. At low pressure it has a normal liquid phase, He-I, and a superfluid phase, He-II. Their continuous boundary is the lambda line; its name comes from the sharp, non-analytic lambda-shaped cusp in \\(C_P\\), not from a finite latent heat:

\\[
L_m=0
\qquad\text{on the He-I--He-II lambda line.}
\tag*{[3]}
\\]

<PhysicsExamples collapsible
  items={[
    {
      title: "Heating dry ice at atmospheric pressure",
      question: "Atmospheric pressure is approximately \\(1.01\\times10^5\\,\\mathrm{Pa}\\). Explain the equilibrium phase change when solid carbon dioxide is heated at this pressure.",
      answer: "The imposed pressure is below the carbon-dioxide triple-point pressure \\(p_{\\mathrm t}\\simeq5.18\\times10^5\\,\\mathrm{Pa}\\). A constant-pressure path therefore cannot enter the liquid region. It reaches the solid-vapour boundary and the solid converts directly to gas. **Final result:** at one atmosphere, solid carbon dioxide sublimes and has no equilibrium liquid stage.",
    },
    {
      title: "Comparing water and helium boundaries",
      question: "Identify the physical reason for the unusual water melting-line slope and the defining thermodynamic feature of the helium-4 lambda line.",
      answer: "For water, \\(L_m\\gt 0\\) and \\(\\Delta V_m\\lt 0\\), so equation \\([1]\\) gives \\(dp/dT\\lt 0\\). For helium-4, equation \\([3]\\) states that the He-I--He-II transition has no latent heat even though \\(C_P\\) is singular. **Final result:** water's anomaly is a negative melting slope caused by its negative molar-volume change, while helium's lambda line is continuous with \\(L_m=0\\).",
    },
  ]}
/>
`;
