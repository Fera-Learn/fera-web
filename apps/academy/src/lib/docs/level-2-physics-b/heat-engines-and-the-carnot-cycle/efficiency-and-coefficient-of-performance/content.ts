export const content = String.raw`## Principle

Performance compares the desired energy transfer with the energy paid for. A heat engine is judged by the fraction of hot-reservoir heat converted to work. Refrigerators and heat pumps are judged by heat moved per unit of supplied work, so their coefficients of performance are not restricted to values below one.

## Notation

<Notation
  items={[
    { symbol: "Q_H", meaning: "positive hot-reservoir heat magnitude", unit: "J" },
    { symbol: "Q_C", meaning: "positive cold-reservoir heat magnitude", unit: "J" },
    { symbol: "W_{\\mathrm{out}}", meaning: "positive engine work output", unit: "J" },
    { symbol: "W_{\\mathrm{in}}", meaning: "positive work input to a refrigerator or heat pump", unit: "J" },
    { symbol: "\\eta", meaning: "heat-engine efficiency", unit: "1" },
    { symbol: "\\mathrm{COP}_R", meaning: "refrigerator coefficient of performance", unit: "1" },
    { symbol: "\\mathrm{COP}_{\\mathrm{HP}}", meaning: "heat-pump coefficient of performance", unit: "1" },
    { symbol: "\\dot Q_H,\\dot Q_C", meaning: "positive hot-side and cold-side heat-transfer rates", unit: "W, W" },
    { symbol: "P_{\\mathrm{out}},P_{\\mathrm{in}}", meaning: "positive output and input powers", unit: "W, W" },
  ]}
/>

## The Core Method

For a cyclic heat engine, energy conservation gives \\(W_{\mathrm{out}}=Q_H-Q_C\\). Divide the desired work output by the heat input:

\\[
\eta=\frac{W_{\mathrm{out}}}{Q_H}
=\frac{Q_H-Q_C}{Q_H}
=1-\frac{Q_C}{Q_H}.
\tag*{[1]}
\\]

An engine rejecting positive heat has \\(0<\eta<1\\). For a refrigerator, the desired transfer is heat extracted from the cold reservoir:

\\[
\mathrm{COP}_R=\frac{Q_C}{W_{\mathrm{in}}}
=\frac{Q_C}{Q_H-Q_C}.
\tag*{[2]}
\\]

For a heat pump, the desired transfer is heat delivered to the hot reservoir:

\\[
\mathrm{COP}_{\mathrm{HP}}=\frac{Q_H}{W_{\mathrm{in}}}
=\frac{Q_H}{Q_H-Q_C}.
\tag*{[3]}
\\]

Because \\(Q_H=Q_C+W_{\mathrm{in}}\\), divide by \\(W_{\mathrm{in}}\\) to connect the two coefficients:

\\[
\frac{Q_H}{W_{\mathrm{in}}}
=\frac{Q_C}{W_{\mathrm{in}}}+1,
\qquad
\mathrm{COP}_{\mathrm{HP}}=\mathrm{COP}_R+1.
\tag*{[4]}
\\]

The same dimensionless ratios can be formed from rates:

\\[
\eta=\frac{P_{\mathrm{out}}}{\dot Q_H},
\qquad
\mathrm{COP}_R=\frac{\dot Q_C}{P_{\mathrm{in}}},
\qquad
\mathrm{COP}_{\mathrm{HP}}=\frac{\dot Q_H}{P_{\mathrm{in}}}.
\tag*{[5]}
\\]

A coefficient of performance above one does not create energy: the output being counted is heat moved plus, for a heat pump, the supplied work. It is therefore not an engine efficiency.

<PhysicsExamples collapsible
  items={[
    {
      title: "Refrigerator performance from rates",
      question: "A refrigerator removes \\(360\\,\\mathrm{kJ\\,min^{-1}}\\) from its cold space while consuming \\(2.0\\,\\mathrm{kW}\\). Find \\(\\mathrm{COP}_R\\), the heat-rejection rate, and \\(\\mathrm{COP}_{\\mathrm{HP}}\\) for the same device.",
      answer: "Convert the input power before forming a ratio: \\[P_{\\mathrm{in}}=2.0\\,\\mathrm{kJ\\,s^{-1}}=120\\,\\mathrm{kJ\\,min^{-1}}.\\] Equation \\([2]\\) in rate form gives \\[\\mathrm{COP}_R=\\frac{360}{120}=3.0.\\] Energy conservation gives \\[\\dot Q_H=\\dot Q_C+P_{\\mathrm{in}}=360+120=480\\,\\mathrm{kJ\\,min^{-1}}.\\] Equation \\([4]\\) then gives \\(\\mathrm{COP}_{\\mathrm{HP}}=3.0+1=4.0\\). **Final result:** \\(\\mathrm{COP}_R=3.0\\), \\(\\dot Q_H=480\\,\\mathrm{kJ\\,min^{-1}}\\), and \\(\\mathrm{COP}_{\\mathrm{HP}}=4.0\\).",
    },
    {
      title: "Heating a house with a heat pump",
      question: "A house loses heat at \\(80{,}000\\,\\mathrm{kJ\\,h^{-1}}\\). A heat pump with \\(\\mathrm{COP}_{\\mathrm{HP}}=2.5\\) maintains a steady indoor temperature. Find the required input power and the heat extracted from outside per hour.",
      answer: "At steady temperature the heat pump must replace the loss, so \\(\\dot Q_H=80{,}000\\,\\mathrm{kJ\\,h^{-1}}\\). Rearranging equation \\([5]\\) gives \\[P_{\\mathrm{in}}=\\frac{\\dot Q_H}{\\mathrm{COP}_{\\mathrm{HP}}}=\\frac{80{,}000}{2.5}=32{,}000\\,\\mathrm{kJ\\,h^{-1}}=8.9\\,\\mathrm{kW}.\\] The rate balance gives \\[\\dot Q_C=\\dot Q_H-P_{\\mathrm{in}}=80{,}000-32{,}000=48{,}000\\,\\mathrm{kJ\\,h^{-1}}.\\] **Final result:** the heat pump requires \\(8.9\\,\\mathrm{kW}\\) and extracts \\(48{,}000\\,\\mathrm{kJ}\\) from outside each hour.",
    },
  ]}
/>
`;
