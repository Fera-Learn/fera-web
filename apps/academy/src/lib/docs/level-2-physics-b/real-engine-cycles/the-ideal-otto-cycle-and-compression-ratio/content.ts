export const content = String.raw`## Principle

The ideal Otto cycle is an air-standard model of a spark-ignition petrol engine. It replaces the real intake, combustion, and exhaust events by two reversible adiabatic processes and two constant-volume heat transfers. Under the additional constant-heat-capacity approximation, its efficiency depends only on compression ratio and heat-capacity ratio.

## Notation

<Notation
  items={[
    { symbol: "1,2,3,4", meaning: "successive equilibrium-state labels of the ideal Otto cycle", unit: "1" },
    { symbol: "V_1,V_2,V_3,V_4", meaning: "model-air volumes at the four states", unit: "m^{3}, m^{3}, m^{3}, m^{3}" },
    { symbol: "T_1,T_2,T_3,T_4", meaning: "absolute temperatures at the four states", unit: "K, K, K, K" },
    { symbol: "r=V_1/V_2", meaning: "Otto compression ratio", unit: "1" },
    { symbol: "n", meaning: "amount of ideal-gas air", unit: "mol" },
    { symbol: "C_V,C_P", meaning: "constant molar heat capacities of the model air", unit: "J mol^{-1} K^{-1}, J mol^{-1} K^{-1}" },
    { symbol: "\\gamma=C_P/C_V", meaning: "heat-capacity ratio", unit: "1" },
    { symbol: "Q_H", meaning: "positive heat magnitude added at constant volume", unit: "J" },
    { symbol: "Q_C", meaning: "positive heat magnitude rejected at constant volume", unit: "J" },
    { symbol: "W_{\\mathrm{out}}", meaning: "positive net cycle work output", unit: "J" },
    { symbol: "\\eta_{\\mathrm O}", meaning: "ideal Otto-cycle efficiency", unit: "1" },
  ]}
/>

## The Core Method

The four model processes are: \\(1\to2\\) reversible adiabatic compression, \\(2\to3\\) constant-volume heat addition, \\(3\to4\\) reversible adiabatic expansion, and \\(4\to1\\) constant-volume heat rejection. Thus

\\[
V_1=V_4,
\qquad
V_2=V_3,
\qquad
r=\frac{V_1}{V_2}=\frac{V_4}{V_3}>1.
\tag*{[1]}
\\]

No boundary work occurs during either constant-volume stage. With constant \\(C_V\\), their positive heat magnitudes are

\\[
Q_H=nC_V(T_3-T_2),
\qquad
Q_C=nC_V(T_4-T_1).
\tag*{[2]}
\\]

The cycle balance and efficiency are therefore

\\[
W_{\mathrm{out}}=Q_H-Q_C,
\qquad
\eta_{\mathrm O}=1-\frac{Q_C}{Q_H}
=1-\frac{T_4-T_1}{T_3-T_2}.
\tag*{[3]}
\\]

Apply the reversible adiabatic ideal-gas relation to each adiabat and use equation [1]:

\\[
\frac{T_2}{T_1}
=\left(\frac{V_1}{V_2}\right)^{\gamma-1}
=r^{\gamma-1},
\qquad
\frac{T_3}{T_4}
=\left(\frac{V_4}{V_3}\right)^{\gamma-1}
=r^{\gamma-1}.
\tag*{[4]}
\\]

Equation [4] gives \\(T_2=r^{\gamma-1}T_1\\) and \\(T_3=r^{\gamma-1}T_4\\). Subtract the first relation from the second:

\\[
T_3-T_2=r^{\gamma-1}(T_4-T_1),
\qquad
\frac{T_4-T_1}{T_3-T_2}=\frac{1}{r^{\gamma-1}}.
\tag*{[5]}
\\]

Substitution into equation [3] yields

\\[
\eta_{\mathrm O}=1-\frac{1}{r^{\gamma-1}}
=1-r^{1-\gamma}.
\tag*{[6]}
\\]

Equation [6] predicts increasing ideal efficiency with compression ratio. Real engines are limited by autoignition, heat loss, friction, material temperatures, and non-constant heat capacities, so it is not a claim that compression ratio can be increased without limit.

<PhysicsExamples collapsible
  items={[
    {
      title: "Ideal Otto efficiency",
      question: "An ideal Otto cycle has compression ratio \\(r=8.0\\). Treat the heat-capacity ratio as constant at \\(\\gamma=1.40\\). Calculate its thermal efficiency.",
      answer: "Use equation \\([6]\\): \\[\\eta_{\\mathrm O}=1-\\frac{1}{8.0^{1.40-1}}=1-\\frac{1}{8.0^{0.40}}.\\] Evaluating the power gives \\(8.0^{0.40}=2.30\\), so \\[\\eta_{\\mathrm O}=1-\\frac{1}{2.30}=0.565.\\] The result is dimensionless and lies between zero and one. **Final result:** the constant-heat-capacity ideal Otto efficiency is \\(\\eta_{\\mathrm O}=0.565\\), or \\(56.5\\%\\).",
    },
    {
      title: "Effect of increasing compression ratio",
      question: "Within the ideal Otto model, explain what happens to efficiency when the compression ratio increases while \\(\\gamma\\gt 1\\) remains fixed, and state why the conclusion is limited for a real petrol engine.",
      answer: "In equation \\([6]\\), the exponent \\(1-\\gamma\\) is negative. Increasing \\(r\\gt 1\\) therefore decreases \\(r^{1-\\gamma}\\), so \\(1-r^{1-\\gamma}\\) increases. A real engine cannot raise \\(r\\) indefinitely because autoignition, heat transfer, friction, material limits, and temperature-dependent heat capacities violate the ideal assumptions. **Final result:** larger \\(r\\) raises ideal Otto efficiency for fixed \\(\\gamma\\gt 1\\), but real-engine constraints prevent unlimited improvement.",
    },
  ]}
/>
`;
