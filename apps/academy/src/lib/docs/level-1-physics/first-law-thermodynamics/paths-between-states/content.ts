export const content = String.raw`## Principle

Thermodynamic state changes can share endpoints while transferring different heat and work.

## Notation

<Notation
  items={[
    { symbol: "A,B", meaning: "initial and final equilibrium states", unit: "" },
    { symbol: "\\Delta U", meaning: "change in internal energy", unit: "J" },
    { symbol: "Q", meaning: "heat transferred to the system", unit: "J" },
    { symbol: "W", meaning: "work done by the system", unit: "J" },
    { symbol: "p", meaning: "pressure", unit: "Pa" },
    { symbol: "V", meaning: "volume", unit: "m^{3}" },
  ]}
/>

## Method

### Derivation 1: Separate state and path quantities

Internal energy is a state function: its change depends only on the endpoints. Heat and work are path quantities: they depend on how the process is carried out.

<PhysicsDerivation
  items={[
    {
      label: "State-function change",
      tex: "\\Delta U=U_B-U_A",
    },
    {
      label: "Work path",
      tex: "W=\\int_A^B p\\,dV",
    },
    {
      label: "Different paths",
      tex: "W_1\\ne W_2\\quad\\text{can occur for the same }A\\to B",
    },
  ]}
/>

### Derivation 2: Use cycles as a check

A cyclic process returns to its initial state, so every state function returns to its initial value even though heat and work may be nonzero.

<PhysicsDerivation
  items={[
    {
      label: "Cycle endpoint",
      tex: "A\\to A",
    },
    {
      label: "Internal-energy change",
      tex: "\\Delta U_{\\mathrm{cycle}}=0",
    },
    {
      label: "Net transfer relation",
      tex: "Q_{\\mathrm{cycle}}=W_{\\mathrm{cycle}}",
    },
  ]}
/>

## Rules

These relations distinguish endpoint information from path information.

<Equation label="State function" tex="\Delta U=U_B-U_A" />

<Equation label="Path work" tex="W=\int_A^B p\,dV" />

<Equation label="Cycle energy" tex="\Delta U_{\mathrm{cycle}}=0" />

<Equation label="Cycle transfers" tex="Q_{\mathrm{cycle}}=W_{\mathrm{cycle}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A gas goes from state \\(A\\) to state \\(B\\) by two different paths. Path 1 has \\(W=300\\,\\mathrm{J}\\); path 2 has \\(W=120\\,\\mathrm{J}\\). If \\(\\Delta U=80\\,\\mathrm{J}\\), find \\(Q\\) for each path.",
      answer: "Using \\(\\Delta U=Q-W\\), \\(Q=\\Delta U+W\\). Path 1: \\(Q=80+300=380\\,\\mathrm{J}\\). Path 2: \\(Q=80+120=200\\,\\mathrm{J}\\).",
    },
  ]}
/>

## Checks

- Same endpoints mean the same \\(\\Delta U\\), not the same \\(Q\\) or \\(W\\).
- A cycle can transfer net heat and net work even though \\(\\Delta U=0\\).
- On a \\(p\\)-\\(V\\) graph, work depends on the area under the path.
- Do not write \\(\\Delta Q\\) or \\(\\Delta W\\) for path transfers.`;
