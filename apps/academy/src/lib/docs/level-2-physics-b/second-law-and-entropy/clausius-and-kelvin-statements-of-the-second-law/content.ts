export const content = String.raw`## Principle

The first law conserves energy but does not determine which energy transfers can occur. The second law supplies this directionality. The Clausius statement concerns heat transfer from cold to hot, while the standard Kelvin-Planck statement concerns the cyclic conversion of heat into work.

## Notation

<Notation
  items={[
    { symbol: "T_H,T_C", meaning: "absolute temperatures of the hot and cold reservoirs, with T_H\\gt T_C", unit: "K, K" },
    { symbol: "Q_H", meaning: "positive magnitude of heat absorbed by a cyclic device from the hot reservoir", unit: "J" },
    { symbol: "Q_C", meaning: "positive magnitude of heat rejected by a cyclic device to the cold reservoir", unit: "J" },
    { symbol: "W_{\\mathrm{out}}", meaning: "positive net work delivered by a cyclic heat engine", unit: "J" },
    { symbol: "W_{\\mathrm{in}}", meaning: "positive net work supplied to a refrigerator", unit: "J" },
    { symbol: "\\Delta U", meaning: "finite change in the device's internal energy", unit: "J" },
    { symbol: "\\eta", meaning: "thermal efficiency of a heat engine", unit: "1" },
  ]}
/>

## The Core Method

Each impossible machine removes the feature the second law requires: the Kelvin device has no rejected heat, while the Clausius device moves heat from cold to hot with no work input.

<PhysicsDiagram slug="second-law-machine-comparison" />

The **Clausius statement** says that no process is possible whose sole result is the transfer of heat from a colder body to a hotter body. A refrigerator can move heat in that direction, but only when another effect, normally work input, accompanies the transfer:

\\[
Q_H=Q_C+W_{\mathrm{in}},
\qquad W_{\mathrm{in}}>0.
\tag*{[1]}
\\]

The **Kelvin-Planck statement** says that no cyclic heat engine is possible whose sole result is the absorption of heat from a single reservoir and the complete conversion of that heat into work. For an ordinary cyclic engine, \\(\Delta U=0\\), so energy conservation gives

\\[
Q_H=W_{\mathrm{out}}+Q_C.
\tag*{[2]}
\\]

Its efficiency is therefore

\\[
\eta=\frac{W_{\mathrm{out}}}{Q_H}
=1-\frac{Q_C}{Q_H}<1,
\tag*{[3]}
\\]

because a viable cyclic engine operating between finite-temperature reservoirs must reject \\(Q_C>0\\). The phrase **sole result** matters in both statements: cold-to-hot heat transfer and heat-to-work conversion can each occur, but not without compensating changes. The Kelvin-Planck restriction is specifically about a cyclic device; a noncyclic system may convert heat into work while its own state changes.

<PhysicsExamples collapsible
  items={[
    {
      title: "Work required by a refrigerator",
      question: "A refrigerator removes \\(Q_C=600\\,\\mathrm{J}\\) from its cold compartment and rejects \\(Q_H=750\\,\\mathrm{J}\\) to the room in one cycle. Find the required work and explain why the device satisfies the Clausius statement.",
      answer: "Apply the cyclic energy balance in equation \\([1]\\): \\[W_{\\mathrm{in}}=Q_H-Q_C=750\\,\\mathrm{J}-600\\,\\mathrm{J}=150\\,\\mathrm{J}.\\] The device transfers heat from cold to hot, but that transfer is not its sole result because \\(150\\,\\mathrm{J}\\) of work is supplied. The signs and units also verify \\(750=600+150\\). **Final result:** \\(W_{\\mathrm{in}}=150\\,\\mathrm{J}\\), so the refrigerator does not violate the Clausius statement.",
    },
    {
      title: "A claimed single-reservoir engine",
      question: "A cyclic device claims to absorb \\(2.0\\,\\mathrm{kJ}\\) from one reservoir and deliver \\(2.0\\,\\mathrm{kJ}\\) of work with no other effect. Test the claim.",
      answer: "Equation \\([2]\\) would require \\(Q_C=Q_H-W_{\\mathrm{out}}=2.0\\,\\mathrm{kJ}-2.0\\,\\mathrm{kJ}=0\\). Equation \\([3]\\) would then give \\(\\eta=1\\). Energy is conserved, but the device's sole result would be complete conversion of heat from one reservoir into work, exactly what the Kelvin-Planck statement forbids. **Final result:** the claimed cyclic engine is impossible even though it obeys the first law.",
    },
  ]}
/>
`;
