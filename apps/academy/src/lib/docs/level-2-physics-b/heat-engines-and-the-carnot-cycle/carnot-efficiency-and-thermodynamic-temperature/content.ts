export const content = String.raw`## Principle

For an ideal-gas Carnot engine, the reservoir heat ratio follows directly from the four reversible stages. Carnot's theorem then establishes that every reversible engine between the same reservoirs has the same efficiency, extending the result to arbitrary reversible working substances and providing a thermodynamic definition of temperature ratios.

## Notation

<Notation
  items={[
    { symbol: "T_H,T_C", meaning: "absolute temperatures of the hot and cold reservoirs, with T_H\\gt T_C", unit: "K, K" },
    { symbol: "Q_H", meaning: "positive heat magnitude absorbed from the hot reservoir", unit: "J" },
    { symbol: "Q_C", meaning: "positive heat magnitude rejected to the cold reservoir", unit: "J" },
    { symbol: "W_{\\mathrm{out}}", meaning: "positive net work delivered by the engine", unit: "J" },
    { symbol: "\\eta_{\\mathrm C}", meaning: "Carnot heat-engine efficiency", unit: "1" },
    { symbol: "n", meaning: "amount of ideal gas used to demonstrate the result", unit: "mol" },
    { symbol: "R", meaning: "molar gas constant", unit: "J mol^{-1} K^{-1}" },
    { symbol: "V_A,V_B,V_C,V_D", meaning: "ideal-gas volumes at successive Carnot states", unit: "m^{3}, m^{3}, m^{3}, m^{3}" },
  ]}
/>

## The Core Method

For the reversible isothermal expansion and compression of an ideal gas,

\\[
Q_H=nRT_H\ln\!\left(\frac{V_B}{V_A}\right),
\qquad
Q_C=nRT_C\ln\!\left(\frac{V_C}{V_D}\right).
\tag*{[1]}
\\]

The two reversible adiabats connecting the isotherms imply equal volume ratios:

\\[
\frac{V_B}{V_A}=\frac{V_C}{V_D}.
\tag*{[2]}
\\]

Divide the two expressions in equation [1]. Equation [2] makes the logarithms equal, and the common amount and gas constant also cancel:

\\[
\frac{Q_H}{Q_C}
=\frac{nRT_H\ln(V_B/V_A)}{nRT_C\ln(V_C/V_D)}
=\frac{T_H}{T_C}.
\tag*{[3]}
\\]

Equation [3] has been derived using an ideal-gas working substance. Carnot's theorem states that all reversible engines operating between the same two reservoirs have the same efficiency, independent of working substance. Since efficiency equals \\(1-Q_C/Q_H\\), the theorem extends equation [3] to any reversible working substance; the ideal-gas derivation alone does not prove that universality. The equation uses positive heat magnitudes, while the signed heats received by the working substance are \\(+Q_H\\) and \\(-Q_C\\).

The engine energy balance and efficiency definition are

\\[
W_{\mathrm{out}}=Q_H-Q_C,
\qquad
\eta_{\mathrm C}=\frac{W_{\mathrm{out}}}{Q_H}
=1-\frac{Q_C}{Q_H}.
\tag*{[4]}
\\]

Invert equation [3] and substitute into equation [4]:

\\[
\frac{Q_C}{Q_H}=\frac{T_C}{T_H},
\qquad
\eta_{\mathrm C}=1-\frac{T_C}{T_H}.
\tag*{[5]}
\\]

Temperatures in equation [5] must be in kelvin. The result approaches one only as \\(T_C\\) approaches absolute zero; a finite-temperature cold reservoir requires heat rejection and prevents complete conversion of heat into work.

<PhysicsExamples collapsible
  items={[
    {
      title: "Maximum efficiency between two reservoirs",
      question: "A reversible engine operates between reservoirs at \\(T_H=600\\,\\mathrm K\\) and \\(T_C=300\\,\\mathrm K\\), absorbing \\(Q_H=2.40\\,\\mathrm{kJ}\\) per cycle. Find its efficiency, rejected heat, and work output.",
      answer: "Equation \\([5]\\) gives \\[\\eta_{\\mathrm C}=1-\\frac{300}{600}=0.500.\\] Equation \\([3]\\) gives the cold-side heat magnitude: \\[Q_C=Q_H\\frac{T_C}{T_H}=(2.40\\,\\mathrm{kJ})\\frac{300}{600}=1.20\\,\\mathrm{kJ}.\\] Equation \\([4]\\) then gives \\[W_{\\mathrm{out}}=2.40\\,\\mathrm{kJ}-1.20\\,\\mathrm{kJ}=1.20\\,\\mathrm{kJ}.\\] **Final result:** \\(\\eta_{\\mathrm C}=0.500\\), \\(Q_C=1.20\\,\\mathrm{kJ}\\), and \\(W_{\\mathrm{out}}=1.20\\,\\mathrm{kJ}\\) per cycle.",
    },
    {
      title: "A thermodynamic temperature ratio",
      question: "A reversible engine exchanges \\(Q_H=900\\,\\mathrm J\\) with a hot reservoir and \\(Q_C=300\\,\\mathrm J\\) with a cold reservoir at \\(T_C=250\\,\\mathrm K\\). Determine \\(T_H\\).",
      answer: "Apply the reversible heat-temperature relation in equation \\([3]\\): \\[\\frac{900\\,\\mathrm J}{300\\,\\mathrm J}=\\frac{T_H}{250\\,\\mathrm K}.\\] Multiply both sides by \\(250\\,\\mathrm K\\): \\[T_H=3(250\\,\\mathrm K)=750\\,\\mathrm K.\\] The joule units cancel, leaving a dimensionless ratio as required. **Final result:** the hot-reservoir temperature is \\(T_H=750\\,\\mathrm K\\).",
    },
  ]}
/>
`;
