export const content = String.raw`## Principle

A refrigerator or heat pump is a cyclic device driven in the opposite energy-flow direction from a heat engine. Work supplied from outside enables the device to extract heat from a cold region and deliver a larger amount of heat to a hot region. A refrigerator values the cold-side extraction; a heat pump values the hot-side delivery.

## Notation

<Notation
  items={[
    { symbol: "U", meaning: "internal energy of the cyclic working substance", unit: "J" },
    { symbol: "Q_C", meaning: "positive heat magnitude extracted from the cold reservoir per cycle", unit: "J" },
    { symbol: "Q_H", meaning: "positive heat magnitude delivered to the hot reservoir per cycle", unit: "J" },
    { symbol: "Q_{\\mathrm{sys}}", meaning: "signed net heat transferred into the working substance per cycle", unit: "J" },
    { symbol: "W_{\\mathrm{in}}", meaning: "positive work magnitude supplied to the device per cycle", unit: "J" },
    { symbol: "W_{\\mathrm{sys}}", meaning: "signed work done by the working substance per cycle", unit: "J" },
    { symbol: "\\Delta U_{\\mathrm{cycle}}", meaning: "internal-energy change over one complete cycle", unit: "J" },
    { symbol: "\\dot Q_C,\\dot Q_H", meaning: "positive cold-side extraction and hot-side delivery rates", unit: "W, W" },
    { symbol: "P_{\\mathrm{in}}", meaning: "positive input power", unit: "W" },
  ]}
/>

## The Core Method

A refrigerator reverses the spontaneous heat-flow direction by accepting work. Energy conservation requires the heat delivered to the hot side to equal the extracted heat plus the work input.

<PhysicsDiagram slug="refrigerator-heat-pump-flow" />

Place the system boundary around the cyclic working substance. Heat extracted from the cold reservoir enters the system, whereas heat delivered to the hot reservoir leaves it:

\\[
Q_{\mathrm{sys}}=(+Q_C)+(-Q_H)=Q_C-Q_H.
\tag*{[1]}
\\]

Work is done on the device, so the signed work done by the system is negative:

\\[
W_{\mathrm{sys}}=-W_{\mathrm{in}}.
\tag*{[2]}
\\]

Apply the Academy first-law convention \\(\Delta U=Q-W\\) over a complete cycle. Since the working substance returns to its initial state,

\\[
0=\Delta U_{\mathrm{cycle}}
=Q_{\mathrm{sys}}-W_{\mathrm{sys}}
=(Q_C-Q_H)-(-W_{\mathrm{in}}).
\tag*{[3]}
\\]

Rearranging one step at a time gives the device energy balance

\\[
Q_C-Q_H+W_{\mathrm{in}}=0,
\qquad
Q_H=Q_C+W_{\mathrm{in}}.
\tag*{[4]}
\\]

For continuous operation, divide each energy per cycle by the cycle time:

\\[
\dot Q_H=\dot Q_C+P_{\mathrm{in}}.
\tag*{[5]}
\\]

The distinction between refrigerator and heat pump is the desired effect, not a different first-law balance. The hot-side heat exceeds the extracted cold-side heat because it also contains the supplied work.

<PhysicsExamples collapsible
  items={[
    {
      title: "Heat rejected by a refrigerator",
      question: "A refrigerator removes heat from its cold compartment at \\(\\dot Q_C=6.0\\,\\mathrm{kW}\\) while consuming \\(P_{\\mathrm{in}}=2.0\\,\\mathrm{kW}\\). Find the rate of heat delivery to the room.",
      answer: "Use the rate balance in equation \\([5]\\): \\[\\dot Q_H=\\dot Q_C+P_{\\mathrm{in}}=6.0\\,\\mathrm{kW}+2.0\\,\\mathrm{kW}=8.0\\,\\mathrm{kW}.\\] The electrical input does not disappear; it joins the extracted cold-side heat in the room. **Final result:** the refrigerator delivers heat to the room at \\(\\dot Q_H=8.0\\,\\mathrm{kW}\\).",
    },
    {
      title: "One device, two purposes",
      question: "A reversible cyclic device extracts \\(12\\,\\mathrm{MJ}\\) from outside soil and receives \\(4\\,\\mathrm{MJ}\\) of electrical work during one operating interval. Describe it as a heat pump and determine the useful heat supplied indoors.",
      answer: "For heating, the desired transfer is the hot-side delivery. Equation \\([4]\\) gives \\[Q_H=Q_C+W_{\\mathrm{in}}=12\\,\\mathrm{MJ}+4\\,\\mathrm{MJ}=16\\,\\mathrm{MJ}.\\] Calling the same device a refrigerator would instead focus on the \\(12\\,\\mathrm{MJ}\\) removed from the cold side. **Final result:** as a heat pump, the device supplies \\(16\\,\\mathrm{MJ}\\) indoors during the interval.",
    },
  ]}
/>
`;
