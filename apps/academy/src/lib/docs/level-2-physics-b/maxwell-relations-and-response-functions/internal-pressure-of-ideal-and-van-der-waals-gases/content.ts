export const content = String.raw`## Principle

Internal pressure measures how internal energy changes with volume at fixed temperature. It vanishes for an ideal gas but is positive for a van der Waals gas with attractive interactions, so isothermal expansion raises the latter's internal energy.

## Notation

<Notation
  items={[
    { symbol: "\\pi_T", meaning: "molar internal pressure", unit: "Pa" },
    { symbol: "U_m,V_m", meaning: "molar internal energy and molar volume", unit: "J mol^{-1}, m^{3} mol^{-1}" },
    { symbol: "T,p,R", meaning: "absolute temperature, pressure, and molar gas constant", unit: "K, Pa, J mol^{-1} K^{-1}" },
    { symbol: "a,b", meaning: "van der Waals attraction and excluded-volume constants", unit: "Pa m^{6} mol^{-2}, m^{3} mol^{-1}" },
    { symbol: "V_{m,1},V_{m,2},\\Delta U_m", meaning: "initial and final molar volume and molar internal-energy change", unit: "m^{3} mol^{-1}, m^{3} mol^{-1}, J mol^{-1}" },
  ]}
/>

## The Core Method

The molar internal pressure is defined and evaluated through the first energy equation:

\\[
\pi_T=\left(\frac{\partial U_m}{\partial V_m}\right)_T
=T\left(\frac{\partial p}{\partial T}\right)_{V_m}-p.
\tag*{[1]}
\\]

For an ideal gas, \\(p=RT/V_m\\), so

\\[
\pi_T=T\left(\frac{R}{V_m}\right)-\frac{RT}{V_m}=0.
\tag*{[2]}
\\]

For one mole of a van der Waals gas,

\\[
p=\frac{RT}{V_m-b}-\frac{a}{V_m^2},
\qquad
\left(\frac{\partial p}{\partial T}\right)_{V_m}=\frac{R}{V_m-b}.
\tag*{[3]}
\\]

Substitute equation [3] into equation [1]:

\\[
\pi_T=\frac{TR}{V_m-b}-\left(\frac{RT}{V_m-b}-\frac{a}{V_m^2}\right)
=\frac{a}{V_m^2}>0.
\tag*{[4]}
\\]

At constant temperature, integration gives

\\[
\Delta U_m=\int_{V_{m,1}}^{V_{m,2}}\frac{a}{V_m^2}\,dV_m
=a\left(\frac{1}{V_{m,1}}-\frac{1}{V_{m,2}}\right).
\tag*{[5]}
\\]

For expansion, \\(V_{m,2}>V_{m,1}\\), so \\(\Delta U_m>0\\). Energy must be supplied to separate attracting particles while holding temperature fixed; this is the opposite of the ideal-gas result.

<PhysicsExamples collapsible
  items={[
    {
      title: "Calculate a van der Waals internal pressure",
      question: "A gas has \\(a=0.364\\,\\mathrm{Pa\\,m^6\\,mol^{-2}}\\) and \\(V_m=1.00\\times10^{-2}\\,\\mathrm{m^3\\,mol^{-1}}\\). Find \\(\\pi_T\\).",
      answer: "Use equation \\([4]\\): \\[\\pi_T=\\frac{0.364}{(1.00\\times10^{-2})^2}=3.64\\times10^3\\,\\mathrm{Pa}.\\] The positive value reflects the attractive-interaction term; the excluded-volume parameter \\(b\\) cancels from the energy equation. **Final result:** \\(\\pi_T=3.64\\,\\mathrm{kPa}\\).",
    },
    {
      title: "Compare isothermal expansion of real and ideal gases",
      question: "For the same \\(a=0.364\\,\\mathrm{Pa\\,m^6\\,mol^{-2}}\\), find \\(\\Delta U_m\\) when a van der Waals gas expands isothermally from \\(0.0100\\) to \\(0.0200\\,\\mathrm{m^3\\,mol^{-1}}\\), and compare with an ideal gas.",
      answer: "Equation \\([5]\\) gives \\[\\Delta U_m=0.364\\left(\\frac{1}{0.0100}-\\frac{1}{0.0200}\\right)=18.2\\,\\mathrm{J\\,mol^{-1}}.\\] Equation \\([2]\\) gives zero for an ideal gas under the same isothermal volume change. **Final result:** the van der Waals gas gains \\(18.2\\,\\mathrm{J\\,mol^{-1}}\\), whereas the ideal gas has \\(\\Delta U_m=0\\).",
    },
  ]}
/>
`;
