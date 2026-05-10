export const content = String.raw`## Principle

Calorimetry uses energy conservation to track heat exchanged between parts of an isolated system.

When a phase change occurs, energy can enter or leave a material without changing its temperature.

## Notation

<Notation
  items={[
    { symbol: "Q_i", meaning: "heat transferred to part i of a system", unit: "J" },
    { symbol: "m", meaning: "mass", unit: "kg" },
    { symbol: "c", meaning: "specific heat capacity", unit: "J kg^{-1} K^{-1}" },
    { symbol: "L_f", meaning: "latent heat of fusion", unit: "J kg^{-1}" },
    { symbol: "L_v", meaning: "latent heat of vaporization", unit: "J kg^{-1}" },
    { symbol: "T_f", meaning: "final equilibrium temperature", unit: "K" },
  ]}
/>

## Method

The system is split into pieces that exchange energy. Each piece may warm, cool, melt, freeze, vaporize, or condense. The heat terms are then added with signs.

<PhysicsDerivation
  items={[
    {
      label: "Isolated exchange",
      tex: "\\sum_i Q_i=0",
      note: "Energy lost by one part is gained by another.",
    },
    {
      label: "Temperature change",
      tex: "Q=mc(T_f-T_i)",
    },
    {
      label: "Melting or vaporizing",
      tex: "Q=+mL",
    },
    {
      label: "Freezing or condensing",
      tex: "Q=-mL",
    },
  ]}
/>

A phase change must be checked rather than assumed. First calculate whether there is enough energy to reach the phase-change temperature. Then compare the remaining energy with the latent-heat requirement.

<PhysicsDerivation
  items={[
    {
      label: "Energy to reach phase temperature",
      tex: "Q_{\\mathrm{warm/cool}}=mc(T_{\\mathrm{phase}}-T_i)",
    },
    {
      label: "Energy for complete phase change",
      tex: "Q_{\\mathrm{phase}}=mL",
    },
    {
      label: "Partial fraction",
      tex: "f=\\frac{|Q_{\\mathrm{available}}|}{mL}",
      note: "If \\(0<f<1\\), only part of the material changes phase.",
    },
  ]}
/>

## Rules

These are the compact calorimetry relations.

<Equation label="Isolated system" tex="\sum_i Q_i=0" />

<Equation label="Temperature change" tex="Q=mc\Delta T" />

<Equation label="Phase change" tex="Q=\pm mL" />

<Equation label="Melted fraction" tex="f=\frac{Q_{\mathrm{melt}}}{mL_f}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Mix \\(0.25\\,\\mathrm{kg}\\) of water at \\(80\\,\\mathrm{^\\circ C}\\) with \\(0.40\\,\\mathrm{kg}\\) of water at \\(20\\,\\mathrm{^\\circ C}\\). Find the final temperature, ignoring the container and surroundings.",
      answer: "Both parts are water, so the same \\(c\\) cancels. \\[(0.25)c(T_f-80)+(0.40)c(T_f-20)=0\\] \\[0.65T_f=28\\] \\[T_f=43.1\\,\\mathrm{^\\circ C}\\]",
    },
    {
      title: "Example 2",
      question: "Ice of mass \\(0.050\\,\\mathrm{kg}\\) at \\(0\\,\\mathrm{^\\circ C}\\) is added to \\(0.30\\,\\mathrm{kg}\\) of water at \\(25\\,\\mathrm{^\\circ C}\\). Use \\(c_w=4190\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\) and \\(L_f=3.34\\times10^5\\,\\mathrm{J\\,kg^{-1}}\\). Does all the ice melt, and what is the final temperature?",
      answer: "Cooling the warm water to \\(0\\,\\mathrm{^\\circ C}\\) can release \\[Q_w=(0.30)(4190)(25)=3.14\\times10^4\\,\\mathrm{J}\\] Melting all the ice requires \\[Q_m=(0.050)(3.34\\times10^5)=1.67\\times10^4\\,\\mathrm{J}\\] Since \\(Q_w>Q_m\\), all the ice melts. The remaining energy warms \\(0.35\\,\\mathrm{kg}\\) of water: \\[\\Delta T=\\frac{3.14\\times10^4-1.67\\times10^4}{(0.35)(4190)}=10.0\\,\\mathrm{K}\\] so \\(T_f\\approx10.0\\,\\mathrm{^\\circ C}\\).",
    },
  ]}
/>

## Checks

- Use one final equilibrium temperature for objects that remain in thermal contact.
- During a phase change of a pure substance at fixed pressure, temperature stays constant.
- Latent heats have units of joules per kilogram, not joules per kilogram per kelvin.
- If an assumed final state gives an impossible temperature, redo the energy balance with a different phase state.`;
