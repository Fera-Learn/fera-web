export const content = String.raw`## Principle

The first law is energy conservation for a thermodynamic system. Using heat into the system as positive and work done by the system as positive, internal energy increases through heat input and decreases through work output.

## Notation

<Notation
  items={[
    { symbol: "U", meaning: "internal energy of the system", unit: "J" },
    { symbol: "dU,\\Delta U,\\Delta U_{\\mathrm{cycle}}", meaning: "exact infinitesimal, finite, and cycle internal-energy changes", unit: "J, J, J" },
    { symbol: "\\delta Q,Q", meaning: "inexact infinitesimal heat and finite heat transferred into the system", unit: "J" },
    { symbol: "\\delta W,W", meaning: "inexact infinitesimal work and finite work done by the system", unit: "J" },
    { symbol: "Q_{\\mathrm{cycle}},W_{\\mathrm{cycle}}", meaning: "net heat into the system and net work done by it over one cycle", unit: "J, J" },
  ]}
/>

## The Core Method

For an infinitesimal process in a closed system, the Academy sign convention gives

\\[
dU=\delta Q-\delta W.
\tag*{[1]}
\\]

Integrating along the process gives the finite balance

\\[
\Delta U=Q-W.
\tag*{[2]}
\\]

The left-hand side is fixed by the initial and final states, but \\(Q\\) and \\(W\\) separately depend on the path. A reliable calculation first fixes the system boundary, then assigns signs from transfer directions, and only then substitutes values.

For an adiabatic process, no heat crosses the boundary, so

\\[
Q=0,
\qquad
\Delta U=-W.
\tag*{[3]}
\\]

For a complete cycle, the state returns to its initial value. Therefore

\\[
\Delta U_{\mathrm{cycle}}=0,
\qquad
Q_{\mathrm{cycle}}=W_{\mathrm{cycle}}.
\tag*{[4]}
\\]

The first law applies to reversible and irreversible processes alike. It constrains the energy balance but does not by itself decide whether a proposed process can occur.

<PhysicsExamples collapsible
  items={[
    {
      title: "Adiabatic stirring",
      question: "An insulated fluid is stirred by a paddle. The surroundings do \\(650\\,\\mathrm J\\) of work on the fluid. Find \\(Q\\), \\(W\\), and \\(\\Delta U\\) for the fluid system.",
      answer: "Insulation gives \\(Q=0\\). Work done on the system means that work done by the system is \\(W=-650\\,\\mathrm J\\). Equation \\([3]\\) then gives \\[\\Delta U=-W=-(-650\\,\\mathrm J)=+650\\,\\mathrm J.\\] **Final result:** \\(Q=0\\), \\(W=-650\\,\\mathrm J\\), and \\(\\Delta U=+650\\,\\mathrm J\\).",
    },
    {
      title: "Energy balance over a cycle",
      question: "During one cycle, a device receives a net heat transfer of \\(1.20\\,\\mathrm{kJ}\\). What net work does the device do?",
      answer: "A cycle has no net internal-energy change. Equation \\([4]\\) therefore requires \\[W_{\\mathrm{cycle}}=Q_{\\mathrm{cycle}}=1.20\\,\\mathrm{kJ}.\\] Positive work is delivered by the device to its surroundings. **Final result:** the device does \\(W_{\\mathrm{cycle}}=+1.20\\,\\mathrm{kJ}\\) of net work per cycle.",
    },
  ]}
/>
`;
