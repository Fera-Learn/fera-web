export const content = String.raw`## Principle

Air-standard analysis replaces a chemically reacting, open gas engine with a closed ideal-gas cycle. The simplification preserves the intended compression, heat-addition, expansion, and heat-rejection pattern while removing combustion chemistry, intake, and exhaust from the thermodynamic calculation.

## Notation

<Notation
  items={[
    { symbol: "p", meaning: "pressure of the model air", unit: "Pa" },
    { symbol: "V", meaning: "total volume of the model air", unit: "m^{3}" },
    { symbol: "n", meaning: "amount of model air", unit: "mol" },
    { symbol: "R", meaning: "molar gas constant", unit: "J mol^{-1} K^{-1}" },
    { symbol: "T", meaning: "absolute temperature of the model air", unit: "K" },
    { symbol: "T_1,T_2", meaning: "absolute temperatures at the endpoints of a process", unit: "K, K" },
    { symbol: "U", meaning: "internal energy of the model air", unit: "J" },
    { symbol: "\\Delta U,\\Delta U_{\\mathrm{cycle}}", meaning: "finite internal-energy change over a process and over one complete cycle", unit: "J, J" },
    { symbol: "C_V", meaning: "constant-volume molar heat capacity of ideal-gas air", unit: "J mol^{-1} K^{-1}" },
    { symbol: "Q_H", meaning: "positive external heat-addition magnitude per model cycle", unit: "J" },
    { symbol: "Q_C", meaning: "positive external heat-rejection magnitude per model cycle", unit: "J" },
    { symbol: "W_{\\mathrm{net}}", meaning: "positive net work output per model cycle", unit: "J" },
  ]}
/>

## The Core Method

The air-standard assumptions are: air circulates in a closed loop; it behaves as an ideal gas; each process is internally reversible; combustion is replaced by heat addition from an external source; and exhaust is replaced by heat rejection that restores the initial state.

The ideal-gas equation closes the pressure-volume-temperature description:

\\[
pV=nRT.
\tag*{[1]}
\\]

For ideal-gas air, internal energy depends only on temperature. If \\(C_V\\) is treated as constant over the relevant range, then

\\[
\Delta U=nC_V(T_2-T_1).
\tag*{[2]}
\\]

Internal reversibility allows quasistatic ideal-process relations to be used within the model. It does not claim that actual combustion, heat exchange, intake, or exhaust is reversible.

Because the model air returns to its starting state, its cycle internal-energy change vanishes:

\\[
\Delta U_{\mathrm{cycle}}=0.
\tag*{[3]}
\\]

Apply the first law with \\(+Q_H\\) entering, \\(-Q_C\\) leaving, and positive net work done by the model air:

\\[
0=Q_H-Q_C-W_{\mathrm{net}},
\qquad
W_{\mathrm{net}}=Q_H-Q_C.
\tag*{[4]}
\\]

Air-standard analysis is therefore a comparison model, not a literal account of matter flow or chemical energy release. Results should be interpreted within these assumptions.

<PhysicsExamples collapsible
  items={[
    {
      title: "Closing an air-standard cycle",
      question: "An air-standard model receives \\(Q_H=900\\,\\mathrm{kJ}\\) and rejects \\(Q_C=520\\,\\mathrm{kJ}\\) per cycle. Find the net work and verify the model air's cycle internal-energy change.",
      answer: "Equation \\([4]\\) gives \\[W_{\\mathrm{net}}=Q_H-Q_C=900\\,\\mathrm{kJ}-520\\,\\mathrm{kJ}=380\\,\\mathrm{kJ}.\\] Substitution into the first-law form of the same equation gives \\[\\Delta U_{\\mathrm{cycle}}=900\\,\\mathrm{kJ}-520\\,\\mathrm{kJ}-380\\,\\mathrm{kJ}=0.\\] This agrees with equation \\([3]\\), as required for a closed cycle. **Final result:** the net work output is \\(380\\,\\mathrm{kJ}\\) per cycle and \\(\\Delta U_{\\mathrm{cycle}}=0\\).",
    },
    {
      title: "Translating a petrol engine into the model",
      question: "State how air-standard analysis represents fuel combustion and the expulsion of combustion products in a real petrol engine.",
      answer: "The model keeps the same ideal-gas air circulating rather than replacing burned gases. Fuel combustion is represented by external heat addition \\(+Q_H\\), while expulsion of combustion products and intake of fresh charge are replaced by heat rejection \\(-Q_C\\) that returns the air to its initial state. Equation \\([4]\\) then supplies the model cycle balance. **Final result:** combustion becomes external heat addition, exhaust and intake become heat rejection, and no mass crosses the model boundary.",
    },
  ]}
/>
`;
