export const content = String.raw`## Principle

Gas liquefaction combines compression, heat rejection, regenerative precooling, and a final expansion that places part of the stream inside the liquid-vapour coexistence region. Evaporative cooling then removes heat because molecules entering the vapour require molar latent heat; lowering the vapour pressure also lowers the saturation temperature.

## Notation

<Notation
  items={[
    { symbol: "p,T", meaning: "pressure and absolute temperature", unit: "Pa, K" },
    { symbol: "H_m", meaning: "molar enthalpy of a flowing gas or liquid", unit: "J mol^{-1}" },
    { symbol: "\\mu_{JT}", meaning: "Joule-Thomson coefficient", unit: "K Pa^{-1}" },
    { symbol: "n_{\\mathrm{evap}}", meaning: "amount of liquid evaporated", unit: "mol" },
    { symbol: "L_m", meaning: "molar latent heat of vaporisation", unit: "J mol^{-1}" },
    { symbol: "Q_{\\mathrm{load}}", meaning: "heat removed from the cooled load", unit: "J" },
    { symbol: "\\Delta V_m", meaning: "vapour-minus-liquid molar volume", unit: "m^{3} mol^{-1}" },
  ]}
/>

## The Core Method

In a Linde-type liquefier, compressed gas first rejects compression heat to the surroundings. A counterflow heat exchanger then cools the incoming high-pressure stream with the returning low-pressure gas. The precooled stream passes through a throttle, for which

\\[
H_{m,\mathrm{in}}=H_{m,\mathrm{out}}.
\tag*{[1]}
\\]

The throttle must be entered in a region with \\(\mu_{JT}>0\\), because \\(dp<0\\) then produces \\(dT<0\\). If the outlet state crosses into the coexistence region, a liquid fraction forms. Returning cold vapour precools the next cycle, so regeneration progressively lowers the inlet temperature.

For an evaporating liquid bath, the load supplies the molar latent heat. Neglecting heat leaks and changes in the container,

\\[
Q_{\mathrm{load}}=n_{\mathrm{evap}}L_m.
\tag*{[2]}
\\]

Pumping away vapour lowers the equilibrium pressure. The molar Clapeyron relation,

\\[
\frac{dp}{dT}=\frac{L_m}{T\Delta V_m}>0,
\tag*{[3]}
\\]

then shows that a lower saturation pressure corresponds to a lower boiling temperature for ordinary vaporisation, where \\(L_m>0\\) and \\(\Delta V_m>0\\). Liquefaction by throttling and cooling by evaporation are linked in cryogenic systems but are physically distinct steps.

<PhysicsExamples collapsible
  items={[
    {
      title: "Heat removed by helium evaporation",
      question: "A liquid-helium bath evaporates \\(0.50\\,\\mathrm{mol}\\). Taking \\(L_m=83\\,\\mathrm{J\\,mol^{-1}}\\) near its normal boiling point, estimate the heat removed.",
      answer: "Use the molar energy balance in equation \\([2]\\): \\[Q_{\\mathrm{load}}=(0.50\\,\\mathrm{mol})(83\\,\\mathrm{J\\,mol^{-1}})=41.5\\,\\mathrm J.\\] The calculation uses molar latent heat with amount in moles; substituting a mass-specific latent heat would require mass instead. **Final result:** \\(Q_{\\mathrm{load}}=41.5\\,\\mathrm J\\).",
    },
    {
      title: "Why regeneration aids liquefaction",
      question: "Explain why a single room-temperature throttle may fail to liquefy a gas even when repeated regenerative throttling succeeds.",
      answer: "A useful pressure drop requires the inlet state to have \\(\\mu_{JT}\\gt 0\\), and one drop may not reach the coexistence region. In a regenerative arrangement, cold outlet vapour precools the next high-pressure stream before equation \\([1]\\) is applied again. Successive outlet states become colder until part of the flow condenses. **Final result:** regeneration recovers cold from the exhaust and can move the throttled outlet into the liquid-vapour coexistence region.",
    },
  ]}
/>
`;
