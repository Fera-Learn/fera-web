export const content = String.raw`## Principle

The Carnot cycle is an ideal reversible engine cycle between two thermal reservoirs. It consists of two isothermal stages, during which heat is transferred, joined by two adiabatic stages, during which the working substance is thermally isolated. For an ideal gas, the cycle can be followed exactly through four equilibrium states.

## Notation

<Notation
  items={[
    { symbol: "A,B,C,D", meaning: "successive equilibrium-state labels of the Carnot cycle", unit: "1" },
    { symbol: "T_H,T_C", meaning: "absolute temperatures of the hot and cold reservoirs, with T_H\\gt T_C", unit: "K, K" },
    { symbol: "V", meaning: "instantaneous working-substance volume", unit: "m^{3}" },
    { symbol: "V_A,V_B,V_C,V_D", meaning: "working-substance volumes at the four states", unit: "m^{3}, m^{3}, m^{3}, m^{3}" },
    { symbol: "n", meaning: "amount of ideal gas", unit: "mol" },
    { symbol: "R", meaning: "molar gas constant", unit: "J mol^{-1} K^{-1}" },
    { symbol: "C_V,C_P", meaning: "constant-volume and constant-pressure molar heat capacities", unit: "J mol^{-1} K^{-1}, J mol^{-1} K^{-1}" },
    { symbol: "\\gamma=C_P/C_V", meaning: "ideal-gas heat-capacity ratio", unit: "1" },
    { symbol: "Q_H", meaning: "positive heat magnitude absorbed on the hot isotherm", unit: "J" },
    { symbol: "Q_C", meaning: "positive heat magnitude rejected on the cold isotherm", unit: "J" },
    { symbol: "W_{XY}", meaning: "signed work done by the gas from state X to state Y", unit: "J" },
    { symbol: "W_{\\mathrm{out}}", meaning: "positive net work delivered per cycle", unit: "J" },
  ]}
/>

## The Core Method

The same four reversible stages appear differently on the two plots. Isothermal stages curve on the pressure-volume plane but become horizontal on the temperature-entropy plane; reversible adiabats become vertical there.

<PhysicsDiagram slug="carnot-pv-ts-cycle" />

From \\(A\\) to \\(B\\), the gas expands reversibly and isothermally at \\(T_H\\). An ideal gas has no internal-energy change during an isothermal process, so absorbed heat equals work done by the gas:

\\[
Q_H=W_{AB}
=\int_{V_A}^{V_B}\frac{nRT_H}{V}\,dV
=nRT_H\ln\!\left(\frac{V_B}{V_A}\right)>0.
\tag*{[1]}
\\]

From \\(B\\) to \\(C\\), the gas expands reversibly and adiabatically. There is no heat transfer, and its temperature falls from \\(T_H\\) to \\(T_C\\):

\\[
T_HV_B^{\gamma-1}=T_CV_C^{\gamma-1}.
\tag*{[2]}
\\]

From \\(C\\) to \\(D\\), the gas is compressed reversibly and isothermally at \\(T_C\\). The signed system heat is \\(-Q_C\\), and the signed work done by the gas is negative:

\\[
W_{CD}=nRT_C\ln\!\left(\frac{V_D}{V_C}\right)=-Q_C,
\qquad
Q_C=nRT_C\ln\!\left(\frac{V_C}{V_D}\right)>0.
\tag*{[3]}
\\]

From \\(D\\) to \\(A\\), reversible adiabatic compression raises the temperature from \\(T_C\\) to \\(T_H\\):

\\[
T_CV_D^{\gamma-1}=T_HV_A^{\gamma-1}.
\tag*{[4]}
\\]

Rearrange equations [2] and [4] to express the same temperature ratio, then take the power \\(1/(\gamma-1)\\):

\\[
\frac{T_H}{T_C}
=\left(\frac{V_C}{V_B}\right)^{\gamma-1}
=\left(\frac{V_D}{V_A}\right)^{\gamma-1},
\qquad
\frac{V_C}{V_B}=\frac{V_D}{V_A},
\qquad
\frac{V_B}{V_A}=\frac{V_C}{V_D}.
\tag*{[5]}
\\]

The gas returns to state \\(A\\), so its internal-energy change over the full cycle is zero. The net work is therefore

\\[
W_{\mathrm{out}}=Q_H-Q_C.
\tag*{[6]}
\\]

Reversibility requires quasistatic mechanical changes and heat transfer through an infinitesimal temperature difference. These requirements make the Carnot cycle a limiting model rather than a finite-power real engine.

<PhysicsExamples collapsible
  items={[
    {
      title: "Heat and work in a Carnot cycle",
      question: "One mole of ideal gas runs a Carnot cycle between \\(T_H=600\\,\\mathrm K\\) and \\(T_C=300\\,\\mathrm K\\). The hot-isotherm volume ratio is \\(V_B/V_A=2.00\\). Find \\(Q_H\\), \\(Q_C\\), and \\(W_{\\mathrm{out}}\\).",
      answer: "Equation \\([5]\\) gives \\(V_C/V_D=V_B/V_A=2.00\\). Apply equations \\([1]\\) and \\([3]\\) with \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\): \\[Q_H=(1)(8.314)(600)\\ln2=3.46\\times10^{3}\\,\\mathrm J,\\] \\[Q_C=(1)(8.314)(300)\\ln2=1.73\\times10^{3}\\,\\mathrm J.\\] Equation \\([6]\\) then gives \\[W_{\\mathrm{out}}=Q_H-Q_C=1.73\\times10^{3}\\,\\mathrm J.\\] **Final result:** \\(Q_H=3.46\\,\\mathrm{kJ}\\), \\(Q_C=1.73\\,\\mathrm{kJ}\\), and \\(W_{\\mathrm{out}}=1.73\\,\\mathrm{kJ}\\) per cycle.",
    },
    {
      title: "Identifying a Carnot stage",
      question: "During one stage of a clockwise Carnot engine, the ideal gas is thermally isolated, its volume decreases, and its temperature rises from \\(T_C\\) to \\(T_H\\). Identify the stage and determine the signs of heat and work done by the gas.",
      answer: "Thermal isolation makes the stage adiabatic, and decreasing volume makes it a compression. Equation \\([4]\\) identifies the path as \\(D\\) to \\(A\\). No heat crosses the boundary, so the stage heat is zero. Compression means the surroundings do work on the gas, so work done by the gas is negative. **Final result:** the stage is reversible adiabatic compression \\(D\\to A\\), with zero heat transfer and \\(W_{DA}\\lt 0\\).",
    },
  ]}
/>
`;
