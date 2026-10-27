export const content = String.raw`## Principle

A helium dilution refrigerator cools by transferring helium-3 quasiparticles from a helium-3-rich concentrated phase into a helium-3-poor dilute phase within a helium-3/helium-4 mixture. The transfer increases their partial molar enthalpy, so heat is absorbed continuously at the phase boundary when helium-3 is circulated.

## Notation

<Notation
  items={[
    { symbol: "T", meaning: "mixing-chamber absolute temperature", unit: "K" },
    { symbol: "\\dot n_3", meaning: "molar flow rate of helium-3 across the phase boundary", unit: "mol s^{-1}" },
    { symbol: "\\overline H_{3,d},\\overline H_{3,c}", meaning: "partial molar enthalpies of helium-3 in dilute and concentrated phases", unit: "J mol^{-1}, J mol^{-1}" },
    { symbol: "\\dot Q_{\\mathrm{cool}}", meaning: "cooling power at the mixing chamber", unit: "W" },
    { symbol: "K_d", meaning: "low-temperature coefficient for the partial-molar-enthalpy difference", unit: "J mol^{-1} K^{-2}" },
  ]}
/>

## The Core Method

Below about \\(0.87\,\mathrm K\\), a helium-3/helium-4 mixture separates into a concentrated phase rich in helium-3 and a dilute phase rich in helium-4. Importantly, the dilute phase retains a finite helium-3 concentration even toward very low temperature; it is not pure helium-4.

At the phase boundary in the mixing chamber, each mole of helium-3 moved into the dilute phase absorbs the partial-molar-enthalpy difference. The ideal cooling-power balance is

\\[
\dot Q_{\mathrm{cool}}
=\dot n_3\left(\overline H_{3,d}-\overline H_{3,c}\right).
\tag*{[1]}
\\]

At sufficiently low temperature, both partial molar enthalpies scale approximately as \\(T^2\\), so their difference may be represented by

\\[
\overline H_{3,d}-\overline H_{3,c}\simeq K_dT^2,
\qquad K_d\simeq84\,\mathrm{J\,mol^{-1}\,K^{-2}}.
\tag*{[2]}
\\]

Combining equations [1] and [2] gives the useful low-temperature estimate

\\[
\dot Q_{\mathrm{cool}}\simeq K_d\dot n_3T^2.
\tag*{[3]}
\\]

The circulation loop removes helium-3 from the dilute phase, pumps it through warmer stages, condenses and precools it, and returns it to the concentrated phase. Real cooling power is smaller than equation [3] after heat leaks, imperfect precooling, and viscous dissipation are included.

<PhysicsExamples collapsible
  items={[
    {
      title: "Mixing-chamber cooling power",
      question: "Estimate the ideal cooling power at \\(T=0.10\\,\\mathrm K\\) for \\(\\dot n_3=1.0\\times10^{-4}\\,\\mathrm{mol\\,s^{-1}}\\).",
      answer: "Use equation \\([3]\\): \\[\\dot Q_{\\mathrm{cool}}=(84\\,\\mathrm{J\\,mol^{-1}\\,K^{-2}})(1.0\\times10^{-4}\\,\\mathrm{mol\\,s^{-1}})(0.10\\,\\mathrm K)^2=8.4\\times10^{-5}\\,\\mathrm W.\\] Converting units gives \\(8.4\\times10^{-5}\\,\\mathrm W=84\\,\\mu\\mathrm W\\). **Final result:** \\(\\dot Q_{\\mathrm{cool}}\\simeq84\\,\\mu\\mathrm W\\) ideally.",
    },
    {
      title: "Why circulation must continue",
      question: "Why does a dilution refrigerator circulate helium-3 instead of allowing the two phases to reach a static equilibrium once?",
      answer: "A finite one-off transfer absorbs only finite heat through equation \\([1]\\). Continuous removal of helium-3 from the dilute phase and return to the concentrated phase maintains \\(\\dot n_3\\gt 0\\), so equation \\([3]\\) provides continuing cooling power. **Final result:** sustained refrigeration requires a maintained helium-3 molar flow across the concentrated-dilute phase boundary.",
    },
  ]}
/>
`;
