export const content = String.raw`## Principle

A heat engine repeats a cycle while exchanging energy with its surroundings. Its working substance returns to its initial thermodynamic state after each cycle, so it cannot supply work by steadily losing internal energy. Instead, it absorbs heat from a hot reservoir, converts part of that energy to work, and rejects the remainder to a cold reservoir.

## Notation

<Notation
  items={[
    { symbol: "U", meaning: "internal energy of the working substance", unit: "J" },
    { symbol: "Q_H", meaning: "positive heat magnitude absorbed from the hot reservoir per cycle", unit: "J" },
    { symbol: "Q_C", meaning: "positive heat magnitude rejected to the cold reservoir per cycle", unit: "J" },
    { symbol: "Q_{\\mathrm{sys}}", meaning: "signed net heat transferred into the working substance per cycle", unit: "J" },
    { symbol: "W_{\\mathrm{out}}", meaning: "positive net work magnitude delivered by the engine per cycle", unit: "J" },
    { symbol: "\\Delta U_{\\mathrm{cycle}}", meaning: "internal-energy change over one complete cycle", unit: "J" },
    { symbol: "\\dot Q_H,\\dot Q_C", meaning: "positive hot-side and cold-side heat-transfer rates", unit: "W, W" },
    { symbol: "P_{\\mathrm{out}}", meaning: "positive output power", unit: "W" },
  ]}
/>

## The Core Method

Track energy over one complete cycle: the working substance receives heat from the hot reservoir, exports work, and rejects the remaining heat to the cold reservoir.

<PhysicsDiagram slug="heat-engine-energy-flow" />

Use the system boundary around the working substance. With heat into the system positive and work done by the system positive, the first law for one complete cycle is

\\[
\Delta U_{\mathrm{cycle}}=Q_{\mathrm{sys}}-W_{\mathrm{out}}.
\tag*{[1]}
\\]

The working substance absorbs the positive magnitude \\(Q_H\\), but heat rejection is a negative system heat. Therefore

\\[
Q_{\mathrm{sys}}=(+Q_H)+(-Q_C)=Q_H-Q_C.
\tag*{[2]}
\\]

Internal energy is a state function. Returning to the initial state gives \\(\Delta U_{\mathrm{cycle}}=0\\). Substituting equation [2] into equation [1] gives

\\[
0=Q_H-Q_C-W_{\mathrm{out}},
\qquad
Q_H=W_{\mathrm{out}}+Q_C.
\tag*{[3]}
\\]

Equation [3] is an energy balance, not a statement that all absorbed heat becomes work. It requires \\(W_{\mathrm{out}}=Q_H-Q_C\\). The same balance applies to steady rates when many cycles occur:

\\[
\dot Q_H=P_{\mathrm{out}}+\dot Q_C.
\tag*{[4]}
\\]

All three quantities in equations [3] and [4] are positive magnitudes. Writing the cold-side system heat as \\(+Q_C\\) would incorrectly count rejected energy as entering the engine.

<PhysicsExamples collapsible
  items={[
    {
      title: "Energy balance for one engine cycle",
      question: "An engine absorbs \\(Q_H=20\\,\\mathrm{kJ}\\) and rejects \\(Q_C=15\\,\\mathrm{kJ}\\) in each cycle. Find the net work output and signed net heat received by the working substance.",
      answer: "Apply equation \\([3]\\) using positive reservoir-transfer magnitudes: \\[W_{\\mathrm{out}}=Q_H-Q_C=20\\,\\mathrm{kJ}-15\\,\\mathrm{kJ}=5\\,\\mathrm{kJ}.\\] Equation \\([2]\\) gives the signed net system heat: \\[Q_{\\mathrm{sys}}=(+20\\,\\mathrm{kJ})+(-15\\,\\mathrm{kJ})=5\\,\\mathrm{kJ}.\\] Equation \\([1]\\) then verifies \\(\\Delta U_{\\mathrm{cycle}}=5\\,\\mathrm{kJ}-5\\,\\mathrm{kJ}=0\\). **Final result:** the engine delivers \\(W_{\\mathrm{out}}=5\\,\\mathrm{kJ}\\) per cycle, and its signed net heat input is \\(Q_{\\mathrm{sys}}=+5\\,\\mathrm{kJ}\\).",
    },
    {
      title: "Auditing a power-flow claim",
      question: "A cyclic engine is claimed to absorb heat at \\(80\\,\\mathrm{kW}\\), reject heat at \\(50\\,\\mathrm{kW}\\), and deliver \\(40\\,\\mathrm{kW}\\) of power. Is the claim consistent with energy conservation?",
      answer: "Equation \\([4]\\) requires the output power to equal the difference between the heat-transfer rates: \\[P_{\\mathrm{out}}=\\dot Q_H-\\dot Q_C=80\\,\\mathrm{kW}-50\\,\\mathrm{kW}=30\\,\\mathrm{kW}.\\] The claimed flows would account for \\(50\\,\\mathrm{kW}+40\\,\\mathrm{kW}=90\\,\\mathrm{kW}\\) leaving while only \\(80\\,\\mathrm{kW}\\) enters. **Final result:** the claim is inconsistent; a cyclic engine with those heat flows can deliver only \\(30\\,\\mathrm{kW}\\).",
    },
  ]}
/>
`;
