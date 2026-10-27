export const content = String.raw`## Principle

An ideal gas neglects molecular size and intermolecular forces. Real gases depart most strongly from ideal behaviour at high density or low temperature. The van der Waals model represents attractions with a pressure correction and finite molecular size with an excluded molar volume.

## Notation

<Notation
  items={[
    { symbol: "p,T", meaning: "pressure and absolute temperature", unit: "Pa, K" },
    { symbol: "V_m", meaning: "molar volume", unit: "m^{3} mol^{-1}" },
    { symbol: "R", meaning: "molar gas constant", unit: "J mol^{-1} K^{-1}" },
    { symbol: "a", meaning: "van der Waals attraction parameter", unit: "Pa m^{6} mol^{-2}" },
    { symbol: "b", meaning: "van der Waals excluded-volume parameter", unit: "m^{3} mol^{-1}" },
    { symbol: "p_c,T_c,V_{m,c}", meaning: "critical pressure, temperature, and molar volume predicted by the model", unit: "Pa, K, m^{3} mol^{-1}" },
  ]}
/>

## The Core Method

Above the critical temperature the isotherms are monotonic. At and below the critical temperature their shape changes, signalling the onset of liquid-vapour coexistence.

<PhysicsDiagram slug="van-der-waals-isotherms" />

Written consistently in molar variables, the van der Waals equation is

\\[
\left(p+\frac{a}{V_m^2}\right)(V_m-b)=RT,
\qquad V_m>b.
\tag*{[1]}
\\]

Solving for pressure separates the repulsive and attractive corrections:

\\[
p=\frac{RT}{V_m-b}-\frac{a}{V_m^2}.
\tag*{[2]}
\\]

The first term exceeds the ideal value because the available molar volume is \\(V_m-b\\). The second term lowers the pressure because attractions reduce momentum transfer to the walls. A minus sign on the attraction correction inside the pressure bracket would reverse that physical correction and is not used.

At the model's critical point, the critical isotherm has a horizontal inflection:

\\[
\left(\frac{\partial p}{\partial V_m}\right)_{T_c}=0,
\qquad
\left(\frac{\partial^2p}{\partial V_m^2}\right)_{T_c}=0.
\tag*{[3]}
\\]

Applying equation [3] to equation [2] gives

\\[
RT_c=\frac{2a(V_{m,c}-b)^2}{V_{m,c}^3},
\qquad
RT_c=\frac{3a(V_{m,c}-b)^3}{V_{m,c}^4}.
\tag*{[4]}
\\]

Equating the right-hand sides in equation [4] and cancelling their common nonzero factors gives \\(2V_{m,c}=3(V_{m,c}-b)\\), hence \\(V_{m,c}=3b\\). Substitution into either expression for \\(RT_c\\) and then equation [2] gives

\\[
V_{m,c}=3b,
\qquad
T_c=\frac{8a}{27Rb},
\qquad
p_c=\frac{a}{27b^2}.
\tag*{[5]}
\\]

The model captures a critical point and qualitative condensation behaviour, but its oscillating subcritical isotherm is not a stable homogeneous path; real liquid-vapour coexistence replaces that segment.

<PhysicsExamples collapsible
  items={[
    {
      title: "Pressure predicted for a real gas",
      question: "For carbon dioxide, take \\(a=0.366\\,\\mathrm{Pa\\,m^6\\,mol^{-2}}\\), \\(b=4.29\\times10^{-5}\\,\\mathrm{m^3\\,mol^{-1}}\\), \\(T=300\\,\\mathrm K\\), and \\(V_m=1.00\\times10^{-3}\\,\\mathrm{m^3\\,mol^{-1}}\\). Use \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\) to find \\(p\\).",
      answer: "Use equation \\([2]\\). The repulsive term is \\(RT/(V_m-b)=(8.314)(300)/(9.571\\times10^{-4})=2.606\\times10^6\\,\\mathrm{Pa}\\). The attraction term is \\(a/V_m^2=0.366/(1.00\\times10^{-3})^2=3.66\\times10^5\\,\\mathrm{Pa}\\). Subtraction gives \\[p=2.606\\times10^6-3.66\\times10^5=2.24\\times10^6\\,\\mathrm{Pa}.\\] **Final result:** \\(p\\simeq2.24\\,\\mathrm{MPa}\\).",
    },
    {
      title: "Recovering ideal-gas behaviour",
      question: "Show how the van der Waals equation approaches the ideal-gas equation at low density.",
      answer: "At low density, \\(V_m\\gg b\\), so \\(V_m-b\\simeq V_m\\). The attraction correction also becomes negligible because \\(a/V_m^2\\to0\\). Equation \\([2]\\) then reduces to \\(p\\simeq RT/V_m\\), or \\(pV_m\\simeq RT\\). **Final result:** the molar ideal-gas equation is recovered when \\(b/V_m\\ll1\\) and \\(a/(pV_m^2)\\ll1\\).",
    },
  ]}
/>
`;
