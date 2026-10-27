export const content = String.raw`## Principle

Thermodynamic stability identifies the equilibrium phase but does not specify how quickly that phase forms. A metastable phase has a higher molar chemical potential than the stable phase yet persists because conversion requires nucleation or another activated rearrangement. Quenching changes pressure or temperature faster than that conversion can proceed.

## Notation

<Notation
  items={[
    { symbol: "\\mu_{m,\\mathrm{meta}},\\mu_{m,\\mathrm{stab}}", meaning: "molar chemical potentials of metastable and stable phases", unit: "J mol^{-1}, J mol^{-1}" },
    { symbol: "\\Delta\\mu_m", meaning: "molar thermodynamic driving force for conversion", unit: "J mol^{-1}" },
    { symbol: "\\Delta G^{\\ddagger}", meaning: "activation free-energy barrier for the rate-limiting event", unit: "J" },
    { symbol: "k_{\\mathrm B}", meaning: "Boltzmann constant", unit: "J K^{-1}" },
    { symbol: "T", meaning: "absolute temperature", unit: "K" },
    { symbol: "\\tau,\\tau_0,\\tau_q", meaning: "conversion time, microscopic time scale, and quench time", unit: "s, s, s" },
  ]}
/>

## The Core Method

At fixed pressure and temperature, define the molar driving force toward the stable phase by

\\[
\Delta\mu_m
=\mu_{m,\mathrm{meta}}-\mu_{m,\mathrm{stab}}>0.
\tag*{[1]}
\\]

The positive value means conversion lowers total Gibbs free energy. It does not mean conversion is immediate. If formation of a critical nucleus or collective rearrangement requires an activation barrier, a simple activated time scale is

\\[
\tau\sim\tau_0
\exp\!\left(\frac{\Delta G^{\ddagger}}{k_{\mathrm B}T}\right).
\tag*{[2]}
\\]

Cooling usually increases this time strongly because the exponent grows and molecular mobility falls. A quench can retain the high-temperature or high-pressure structure when

\\[
\tau_q\ll\tau.
\tag*{[3]}
\\]

Equation [3] is kinetic, whereas equation [1] is thermodynamic. Confusing the two leads to the incorrect claim that every higher-Gibbs phase must disappear promptly. Diamond at ordinary conditions is a familiar example: graphite is thermodynamically favoured over much of the phase diagram, but the reconstructive conversion barrier is large.

<PhysicsExamples collapsible
  items={[
    {
      title: "Estimating an activated conversion time",
      question: "A rearrangement has \\(\\tau_0=10^{-12}\\,\\mathrm s\\) and \\(\\Delta G^{\\ddagger}/(k_{\\mathrm B}T)=40\\). Estimate \\(\\tau\\) and compare it with a \\(1.0\\,\\mathrm s\\) quench.",
      answer: "Use equation \\([2]\\): \\[\\tau\\sim10^{-12}\\exp(40)\\,\\mathrm s=10^{-12}(2.35\\times10^{17})\\,\\mathrm s=2.35\\times10^5\\,\\mathrm s.\\] Since \\(\\tau_q=1.0\\,\\mathrm s\\ll\\tau\\), equation \\([3]\\) is well satisfied. **Final result:** \\(\\tau\\approx2.4\\times10^5\\,\\mathrm s\\), so the one-second quench can retain the metastable structure.",
    },
    {
      title: "Why diamond can persist",
      question: "If graphite has the lower molar chemical potential at ambient conditions, why does a diamond not immediately transform into graphite?",
      answer: "Equation \\([1]\\) supplies a thermodynamic driving force toward graphite, but carbon atoms must reconstruct their bonding network. The associated \\(\\Delta G^{\\ddagger}\\) makes equation \\([2]\\) predict an extremely long conversion time at ambient temperature. **Final result:** diamond is metastable: graphite is favoured thermodynamically, while a large kinetic barrier suppresses the conversion rate.",
    },
  ]}
/>
`;
