export const content = String.raw`## Principle

Carnot's theorem states that no cyclic heat engine operating between two fixed reservoir temperatures can be more efficient than a reversible engine between those temperatures. It also implies that every reversible engine between the same reservoirs has the same efficiency, independent of working substance.

## Notation

<Notation
  items={[
    { symbol: "T_H,T_C", meaning: "fixed hot- and cold-reservoir temperatures, with T_H\\gt T_C", unit: "K, K" },
    { symbol: "Q_H,Q_C", meaning: "positive heat magnitudes absorbed and rejected by a reversible engine", unit: "J, J" },
    { symbol: "Q'_H,Q'_C", meaning: "positive heat magnitudes absorbed and rejected by a hypothetical engine", unit: "J, J" },
    { symbol: "W", meaning: "common positive work magnitude after the devices are scaled", unit: "J" },
    { symbol: "\\eta_{\\mathrm{rev}},\\eta_E", meaning: "efficiencies of the reversible and hypothetical engines", unit: "1, 1" },
    { symbol: "\\Delta U", meaning: "change in a cyclic device's internal energy", unit: "J" },
  ]}
/>

## The Core Method

For each cyclic engine, \\(\Delta U=0\\). Scale a hypothetical engine \\(E\\) and a reversible engine so that each exchanges the same work magnitude \\(W\\) per cycle:

\\[
W=Q'_H-Q'_C=Q_H-Q_C.
\tag*{[1]}
\\]

Assume for contradiction that \\(E\\) is more efficient than the reversible engine:

\\[
\eta_E=\frac{W}{Q'_H}
>
\eta_{\mathrm{rev}}=\frac{W}{Q_H}.
\tag*{[2]}
\\]

Because \\(W>0\\), equation \\([2]\\) implies

\\[
Q'_H<Q_H.
\tag*{[3]}
\\]

Subtracting \\(W\\) from both sides and using equation \\([1]\\) gives

\\[
Q'_C=Q'_H-W<Q_H-W=Q_C.
\tag*{[4]}
\\]

Now use \\(E\\)'s work to run the reversible engine backward as a refrigerator. The work transfers cancel. The cold reservoir loses \\(Q_C\\) to the reversed engine and gains \\(Q'_C\\) from \\(E\\), so its net loss is \\(Q_C-Q'_C>0\\). The hot reservoir gains

\\[
Q_H-Q'_H
=(Q_C+W)-(Q'_C+W)
=Q_C-Q'_C>0.
\tag*{[5]}
\\]

The sole result would be equal heat transfer from cold to hot, contradicting the Clausius statement. Therefore \\(\eta_E\leq\eta_{\mathrm{rev}}\\). If two reversible engines had unequal efficiencies, the less efficient one could be reversed in the same argument, so all reversible engines between \\(T_H\\) and \\(T_C\\) have equal efficiency.

<PhysicsExamples collapsible
  items={[
    {
      title: "Expose a claimed superior engine",
      question: "A reversible engine delivers \\(300\\,\\mathrm{J}\\) while absorbing \\(750\\,\\mathrm{J}\\). A claimed engine delivers the same work while absorbing \\(700\\,\\mathrm{J}\\). Find the net reservoir transfers when the claimed engine drives the reversible engine backward.",
      answer: "Equation \\([1]\\) gives \\(Q_C=750\\,\\mathrm{J}-300\\,\\mathrm{J}=450\\,\\mathrm{J}\\) and \\(Q'_C=700\\,\\mathrm{J}-300\\,\\mathrm{J}=400\\,\\mathrm{J}\\). The work transfers cancel. By equation \\([5]\\), the hot reservoir gains \\(750-700=50\\,\\mathrm{J}\\), while the cold reservoir loses \\(450-400=50\\,\\mathrm{J}\\). **Final result:** the combination transfers \\(50\\,\\mathrm{J}\\) from cold to hot with no work input, so the claimed engine is impossible.",
    },
    {
      title: "Compare an actual engine with the reversible limit",
      question: "Between two fixed reservoirs, a reversible engine has efficiency \\(0.40\\). Can an actual engine absorb \\(1.20\\,\\mathrm{kJ}\\) and deliver \\(0.54\\,\\mathrm{kJ}\\) per cycle?",
      answer: "The actual efficiency from equation \\([2]\\) is \\[\\eta_E=\\frac{0.54\\,\\mathrm{kJ}}{1.20\\,\\mathrm{kJ}}=0.45.\\] Carnot's theorem requires \\(\\eta_E\\leq\\eta_{\\mathrm{rev}}=0.40\\). The claimed \\(0.45\\) exceeds that limit; energy conservation alone would not reveal the problem. **Final result:** the stated engine cannot operate cyclically between those two reservoirs.",
    },
  ]}
/>
`;
