export const content = String.raw`## Principle

A phase describes a macroscopically uniform form of matter. A pressure-temperature phase diagram identifies the stable phase, the conditions where two phases coexist, the triple point where three phases coexist, and the critical point where the liquid-gas boundary ends.

## Notation

<Notation
  items={[
    { symbol: "p,T", meaning: "pressure and absolute temperature", unit: "Pa, K" },
    { symbol: "p_{\\mathrm t},T_{\\mathrm t}", meaning: "triple-point pressure and temperature", unit: "Pa, K" },
    { symbol: "p_{\\mathrm c},T_{\\mathrm c}", meaning: "critical pressure and temperature", unit: "Pa, K" },
    { symbol: "T_{\\mathrm{melt}},T_{\\mathrm{boil}}", meaning: "melting and boiling temperatures at a specified pressure", unit: "K, K" },
    { symbol: "L", meaning: "latent heat per unit mass for a phase change", unit: "J kg^{-1}" },
    { symbol: "v_{\\mathrm s},v_{\\mathrm l},\\Delta v", meaning: "solid and liquid specific volumes, and final-minus-initial specific-volume change", unit: "m^{3} kg^{-1}, m^{3} kg^{-1}, m^{3} kg^{-1}" },
  ]}
/>

## The Core Method

Read temperature along the horizontal axis and pressure along the vertical axis. A point inside a region represents one stable phase. A point on a boundary represents equilibrium coexistence of the two adjoining phases; crossing that boundary changes phase.

<PhysicsDiagram slug="water-phase-diagram" />

The unusual feature is the ice-water boundary: it leans toward lower temperature as pressure rises. The Clapeyron relation below explains that slope from water's volume change on melting.

For water, the triple point is accurately fixed by

\\[
(T_{\mathrm t},p_{\mathrm t})
=(273.16\,\mathrm K,611.657\,\mathrm{Pa}).
\tag*{[1]}
\\]

All three boundaries meet there. Below \\(p_{\mathrm t}\\), liquid water is not an equilibrium phase, so heating ice at constant pressure crosses the solid-gas boundary and causes sublimation.

The liquid-gas boundary ends at the critical point,

\\[
(T_{\mathrm c},p_{\mathrm c})
=(647.096\,\mathrm K,22.064\,\mathrm{MPa}).
\tag*{[2]}
\\]

Above both critical coordinates, water is a supercritical fluid: liquid and gas are no longer separated by a phase boundary. This does not mean that every state with only one coordinate above its critical value is supercritical.

At standard atmospheric pressure, approximately \\(1.013\times10^5\,\mathrm{Pa}\\), the familiar boundary crossings are

\\[
T_{\mathrm{melt}}\simeq273.15\,\mathrm K,
\qquad
T_{\mathrm{boil}}\simeq373.15\,\mathrm K.
\tag*{[3]}
\\]

These temperatures depend on pressure and are not universal definitions of melting and boiling.

The slope of any equilibrium phase boundary is governed by the Clapeyron relation,

\\[
\frac{dp}{dT}=\frac{L}{T\Delta v}.
\tag*{[4]}
\\]

For melting ordinary ice, \\(\Delta v=v_{\mathrm l}-v_{\mathrm s}<0\\) because liquid water is denser than ice, while \\(L>0\\). Equation [4] therefore gives a negative solid-liquid boundary slope. Increasing pressure near the ordinary melting point lowers the melting temperature. The vaporisation and sublimation curves have positive slopes because their volume changes are positive.

<PhysicsExamples collapsible
  items={[
    {
      title: "Slope of the ice-water boundary",
      question: "Near \\(T=273\\,\\mathrm K\\), take the latent heat of fusion as \\(L=3.33\\times10^5\\,\\mathrm{J\\,kg^{-1}}\\) and the specific-volume change on melting as \\(\\Delta v=-9.1\\times10^{-5}\\,\\mathrm{m^3\\,kg^{-1}}\\). Estimate \\(dp/dT\\).",
      answer: "Apply equation \\([4]\\) with the sign of the final-minus-initial volume change retained: \\[\\frac{dp}{dT}=\\frac{3.33\\times10^5}{(273)(-9.1\\times10^{-5})}\\,\\mathrm{Pa\\,K^{-1}}=-1.34\\times10^7\\,\\mathrm{Pa\\,K^{-1}}.\\] Thus a pressure increase of about \\(13.4\\,\\mathrm{MPa}\\) corresponds locally to a melting-temperature decrease of about \\(1\\,\\mathrm K\\). **Final result:** \\(dp/dT\\simeq-1.34\\times10^7\\,\\mathrm{Pa\\,K^{-1}}\\); the negative sign is the distinctive ordinary-ice result.",
    },
    {
      title: "Heating water along two constant-pressure paths",
      question: "Compare heating ice at \\(500\\,\\mathrm{Pa}\\) with heating ice at standard atmospheric pressure. Which phase boundaries are crossed?",
      answer: "The pressure \\(500\\,\\mathrm{Pa}\\) is below \\(p_{\\mathrm t}=611.657\\,\\mathrm{Pa}\\), so no equilibrium liquid region lies on that constant-pressure path; the path crosses the solid-gas boundary. Standard atmospheric pressure is above the triple-point pressure, so heating crosses first the solid-liquid boundary and then the liquid-gas boundary. **Final result:** at \\(500\\,\\mathrm{Pa}\\), ice sublimes directly to vapour; at standard atmospheric pressure, it melts and then boils.",
    },
  ]}
/>
`;
