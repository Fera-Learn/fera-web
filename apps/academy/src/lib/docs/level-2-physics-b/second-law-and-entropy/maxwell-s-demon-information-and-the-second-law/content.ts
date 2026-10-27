export const content = String.raw`## Principle

Maxwell's demon is a thought experiment in which a controller sorts molecules to create a pressure or temperature difference without apparent mechanical work. The trap is to omit the controller's memory from the thermodynamic boundary. A complete cyclic account includes information processing and prevents a second-law violation.

## Notation

<Notation
  items={[
    { symbol: "k_{\\mathrm B}", meaning: "Boltzmann constant", unit: "J K^{-1}" },
    { symbol: "T_M", meaning: "absolute temperature of the memory's thermal environment", unit: "K" },
    { symbol: "N", meaning: "number of independent unbiased binary memory bits reset without usable side information", unit: "1" },
    { symbol: "Q_{\\mathrm{erase,min}}", meaning: "minimum heat rejected during logically irreversible memory erasure", unit: "J" },
    { symbol: "\\Delta S_{\\mathrm{env,min}}", meaning: "minimum entropy increase of the erasure environment", unit: "J K^{-1}" },
    { symbol: "\\Delta S_{\\mathrm{gas}}", meaning: "entropy change of the sorted gas", unit: "J K^{-1}" },
    { symbol: "\\Delta S_{\\mathrm{controller+memory+environment}}", meaning: "combined entropy change of the controller, memory, and environment", unit: "J K^{-1}" },
    { symbol: "\\Delta S_{\\mathrm{total}}", meaning: "entropy change of gas, controller, memory, and environment", unit: "J K^{-1}" },
    { symbol: "W_{\\mathrm{mech}}", meaning: "mechanical work done by the sorting gate", unit: "J" },
  ]}
/>

## The Core Method

Imagine a partition with a gate between two gas compartments. A controller measures approaching molecules and opens the gate selectively, apparently concentrating particles or separating fast from slow molecules. The gas entropy can decrease while the gate performs negligible mechanical work:

\\[
W_{\mathrm{mech}}\approx0,
\qquad
\Delta S_{\mathrm{gas}}<0.
\tag*{[1]}
\\]

Equation \\([1]\\) does not describe an isolated cyclic device. The controller must acquire and store information. To return the controller to its initial state for repeated operation, its finite memory must eventually be reset. For one unknown, unbiased binary bit with no usable side information, Landauer's principle gives the minimum heat rejected when the bit is erased in an environment at \\(T_M\\):

\\[
Q_{\mathrm{erase,min}}=k_{\mathrm B}T_M\ln2.
\tag*{[2]}
\\]

The corresponding minimum environmental entropy increase is

\\[
\Delta S_{\mathrm{env,min}}
=\frac{Q_{\mathrm{erase,min}}}{T_M}
=k_{\mathrm B}\ln2.
\tag*{[3]}
\\]

Resetting \\(N\\) independent, unbiased unknown bits with no usable side information therefore requires at least

\\[
Q_{\mathrm{erase,min}}=Nk_{\mathrm B}T_M\ln2,
\qquad
\Delta S_{\mathrm{env,min}}=Nk_{\mathrm B}\ln2.
\tag*{[4]}
\\]

The complete entropy balance must include every part of the apparatus:

\\[
\Delta S_{\mathrm{total}}
=\Delta S_{\mathrm{gas}}
+\Delta S_{\mathrm{controller+memory+environment}}
\geq0.
\tag*{[5]}
\\]

Measurement need not itself dissipate the Landauer minimum in every implementation; the unavoidable cost applies to logically irreversible reset when memory is restored for a cycle. Information is physical because storing and erasing it require physical states. The demon fails not because the gate must do large mechanical work, but because omitting the information-bearing apparatus gives an incomplete system boundary.

<PhysicsExamples collapsible
  items={[
    {
      title: "Minimum cost of resetting memory",
      question: "A demon resets \\(N=1000\\) independent, unbiased unknown bits with no usable side information in an environment at \\(T_M=300\\,\\mathrm{K}\\). Using \\(k_{\\mathrm B}=1.381\\times10^{-23}\\,\\mathrm{J\\,K^{-1}}\\), find the minimum rejected heat and environmental entropy increase.",
      answer: "Equation \\([4]\\) gives \\[Q_{\\mathrm{erase,min}}=(1000)(1.381\\times10^{-23}\\,\\mathrm{J\\,K^{-1}})(300\\,\\mathrm{K})\\ln2=2.87\\times10^{-18}\\,\\mathrm{J}.\\] The entropy increase is \\[\\Delta S_{\\mathrm{env,min}}=(1000)(1.381\\times10^{-23}\\,\\mathrm{J\\,K^{-1}})\\ln2=9.57\\times10^{-21}\\,\\mathrm{J\\,K^{-1}},\\] consistent with equation \\([3]\\). **Final result:** at least \\(2.87\\times10^{-18}\\,\\mathrm{J}\\) is rejected and \\(9.57\\times10^{-21}\\,\\mathrm{J\\,K^{-1}}\\) is added to the environment.",
    },
    {
      title: "Audit the thermodynamic boundary",
      question: "A sorting operation decreases the gas entropy by \\(8k_{\\mathrm B}\\ln2\\). The controller stores and then erases eight independent, unbiased unknown bits with no usable side information at the same temperature. Can the complete cycle have negative total entropy change?",
      answer: "The gas contribution is \\(\\Delta S_{\\mathrm{gas}}=-8k_{\\mathrm B}\\ln2\\). Equation \\([4]\\) requires the erasure environment to gain at least \\(+8k_{\\mathrm B}\\ln2\\). Equation \\([5]\\) therefore gives \\[\\Delta S_{\\mathrm{total}}\\geq-8k_{\\mathrm B}\\ln2+8k_{\\mathrm B}\\ln2=0.\\] Any additional irreversibility makes the total positive. **Final result:** no; the complete cyclic process has \\(\\Delta S_{\\mathrm{total}}\\geq0\\).",
    },
  ]}
/>
`;
