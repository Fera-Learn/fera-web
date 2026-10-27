export const content = String.raw`## Principle

A response function measures the change of a thermodynamic coordinate caused by its driving variable while specified quantities are held fixed. Thermal expansivity and compressibility turn small temperature and pressure changes into measurable fractional volume changes.

## Notation

<Notation
  items={[
    { symbol: "\\alpha_p,\\alpha_S", meaning: "isobaric and isentropic volume expansivity", unit: "K^{-1}, K^{-1}" },
    { symbol: "\\kappa_T,\\kappa_S", meaning: "isothermal and isentropic compressibility", unit: "Pa^{-1}, Pa^{-1}" },
    { symbol: "V,T,p,S", meaning: "total volume, absolute temperature, pressure, and entropy", unit: "m^{3}, K, Pa, J K^{-1}" },
    { symbol: "x,X,\\chi_X", meaning: "generalised coordinate, conjugate driving variable, and susceptibility at stated constraints; their units depend on the physical system" },
    { symbol: "\\Delta V,\\Delta T,\\Delta p", meaning: "small volume, temperature, and pressure changes", unit: "m^{3}, K, Pa" },
  ]}
/>

## The Core Method

The required response functions are defined with their constraints shown explicitly:

\\[
\alpha_p=\frac{1}{V}\left(\frac{\partial V}{\partial T}\right)_p,
\qquad
\kappa_T=-\frac{1}{V}\left(\frac{\partial V}{\partial p}\right)_T.
\tag*{[1]}
\\]

The minus sign makes \\(\kappa_T\\) positive for ordinary stable matter, whose volume decreases when pressure rises. Analogous isentropic responses are

\\[
\alpha_S=\frac{1}{V}\left(\frac{\partial V}{\partial T}\right)_S,
\qquad
\kappa_S=-\frac{1}{V}\left(\frac{\partial V}{\partial p}\right)_S.
\tag*{[2]}
\\]

Writing \\(V=V(T,p)\\) gives

\\[
dV=\left(\frac{\partial V}{\partial T}\right)_p dT
+\left(\frac{\partial V}{\partial p}\right)_T dp
=V\alpha_p\,dT-V\kappa_T\,dp.
\tag*{[3]}
\\]

For sufficiently small changes over which the response functions are approximately constant,

\\[
\frac{\Delta V}{V}\simeq\alpha_p\Delta T-\kappa_T\Delta p.
\tag*{[4]}
\\]

More generally, a susceptibility has the form

\\[
\chi_X=\left(\frac{\partial x}{\partial X}\right)_{\text{stated constraints}}.
\tag*{[5]}
\\]

The constraints and sign convention are part of the definition. A numerical derivative without them is not a complete thermodynamic response function.

<PhysicsExamples collapsible
  items={[
    {
      title: "Combine heating and compression",
      question: "A material has \\(V=2.00\\times10^{-3}\\,\\mathrm{m^3}\\), \\(\\alpha_p=3.0\\times10^{-4}\\,\\mathrm{K^{-1}}\\), and \\(\\kappa_T=5.0\\times10^{-10}\\,\\mathrm{Pa^{-1}}\\). Estimate \\(\\Delta V\\) for \\(\\Delta T=20\\,\\mathrm{K}\\) and \\(\\Delta p=4.0\\times10^6\\,\\mathrm{Pa}\\).",
      answer: "Equation \\([4]\\) gives \\[\\frac{\\Delta V}{V}=(3.0\\times10^{-4})(20)-(5.0\\times10^{-10})(4.0\\times10^6)=0.0060-0.0020=0.0040.\\] Therefore \\(\\Delta V=(2.00\\times10^{-3})(0.0040)=8.0\\times10^{-6}\\,\\mathrm{m^3}\\). The positive thermal contribution exceeds the negative pressure contribution. **Final result:** \\(\\Delta V=+8.0\\times10^{-6}\\,\\mathrm{m^3}\\).",
    },
    {
      title: "Interpret negative thermal expansion",
      question: "A solid has \\(\\alpha_p\\lt 0\\) over a temperature interval. What happens when it is heated at constant pressure?",
      answer: "Set \\(dp=0\\) in equation \\([3]\\), giving \\(dV/V=\\alpha_p\\,dT\\). For heating, \\(dT\\gt 0\\); therefore a negative \\(\\alpha_p\\) gives \\(dV\\lt 0\\). This unusual response does not require negative compressibility. **Final result:** the solid contracts on heating at constant pressure in that interval.",
    },
  ]}
/>
`;
