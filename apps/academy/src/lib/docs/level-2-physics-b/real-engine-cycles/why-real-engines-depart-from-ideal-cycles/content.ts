export const content = String.raw`## Principle

Ideal cycles use reversible stages to set performance limits and expose the main energy transfers. Real engines deliver finite power and therefore operate with friction, pressure drops, heat transfer across finite temperature differences, combustion, exhaust flow, and other irreversibilities. These effects increase rejected energy and reduce useful work for given reservoirs.

## Notation

<Notation
  items={[
    { symbol: "Q_H", meaning: "positive heat magnitude supplied to an engine", unit: "J" },
    { symbol: "Q_C", meaning: "positive total heat magnitude rejected by an engine", unit: "J" },
    { symbol: "W_{\\mathrm{out}}", meaning: "positive useful work output", unit: "J" },
    { symbol: "W_{\\mathrm{rev}}", meaning: "reversible work output for the same Q_H per cycle, cycle size, and reservoir temperatures as the real engine", unit: "J" },
    { symbol: "W_{\\mathrm{loss}}", meaning: "work potential destroyed by irreversibility", unit: "J" },
    { symbol: "\\eta_{\\mathrm{real}}", meaning: "real-engine efficiency", unit: "1" },
    { symbol: "\\eta_{\\mathrm C}", meaning: "Carnot efficiency between the same reservoir temperatures", unit: "1" },
    { symbol: "T_H,T_C", meaning: "absolute hot- and cold-reservoir temperatures", unit: "K, K" },
  ]}
/>

## The Core Method

The first law remains exact for every cyclic engine, ideal or real:

\\[
Q_H=W_{\mathrm{out}}+Q_C.
\tag*{[1]}
\\]

Real departures should therefore not be represented by an unexplained missing-energy term. Frictional dissipation, unwanted heat leaks, incomplete expansion, pumping work, and pressure drops ultimately reduce useful work or increase heat rejection while equation [1] still balances.

For fixed reservoir temperatures, no real engine can exceed the reversible Carnot efficiency:

\\[
\eta_{\mathrm{real}}=\frac{W_{\mathrm{out}}}{Q_H}
\leq \eta_{\mathrm C}
=1-\frac{T_C}{T_H}.
\tag*{[2]}
\\]

For a meaningful work comparison, the reversible reference uses the same heat input \\(Q_H\\) per cycle, the same cycle size, and the same reservoir temperatures as the real engine. A useful work-potential ledger is

\\[
W_{\mathrm{loss}}=W_{\mathrm{rev}}-W_{\mathrm{out}}\geq0.
\tag*{[3]}
\\]

The equality case requires a reversible cycle. Finite temperature differences are needed for finite-rate heat transfer, finite pressure differences drive intake and exhaust flow, and mechanical contact produces friction, so practical finite-power engines have \\(W_{\mathrm{loss}}>0\\).

Real engines can also differ in system architecture. Internal-combustion engines burn fuel inside the engine boundary and commonly replace the working fluid through intake and exhaust. External-combustion engines transfer energy from an external source to a working fluid. Phase-change cycles can reduce compression work by condensing a vapour and pumping the resulting liquid; the advantage is not that vapour is easier to compress than liquid.

<PhysicsExamples collapsible
  items={[
    {
      title: "Real performance against the Carnot limit",
      question: "An engine operating between \\(T_H=900\\,\\mathrm K\\) and \\(T_C=300\\,\\mathrm K\\) absorbs \\(Q_H=1.20\\,\\mathrm{MJ}\\) and rejects \\(Q_C=0.72\\,\\mathrm{MJ}\\) per cycle. Find its work output, efficiency, reversible work limit, and lost work potential.",
      answer: "Equation \\([1]\\) gives \\[W_{\\mathrm{out}}=Q_H-Q_C=1.20\\,\\mathrm{MJ}-0.72\\,\\mathrm{MJ}=0.48\\,\\mathrm{MJ}.\\] Its efficiency is \\[\\eta_{\\mathrm{real}}=\\frac{0.48}{1.20}=0.400.\\] Equation \\([2]\\) gives \\(\\eta_{\\mathrm C}=1-300/900=0.667\\), so \\[W_{\\mathrm{rev}}=\\eta_{\\mathrm C}Q_H=(0.667)(1.20\\,\\mathrm{MJ})=0.80\\,\\mathrm{MJ}.\\] Equation \\([3]\\) then gives \\(W_{\\mathrm{loss}}=0.80-0.48=0.32\\,\\mathrm{MJ}\\). **Final result:** \\(W_{\\mathrm{out}}=0.48\\,\\mathrm{MJ}\\), \\(\\eta_{\\mathrm{real}}=0.400\\), and the lost work potential is \\(0.32\\,\\mathrm{MJ}\\) per cycle.",
    },
    {
      title: "Tracing an apparent energy loss",
      question: "A designer says that bearing friction makes energy disappear from a cyclic engine. Explain how friction changes the energy balance and performance.",
      answer: "Friction converts organised mechanical energy into internal energy. That energy must ultimately leave through cooling or the exhaust if the engine is to return to its initial state, so it contributes to the rejected magnitude \\(Q_C\\) rather than disappearing. By equation \\([1]\\), increasing \\(Q_C\\) at fixed \\(Q_H\\) decreases \\(W_{\\mathrm{out}}\\); equation \\([3]\\) records the corresponding increase in lost work potential. **Final result:** friction conserves energy but degrades its work-producing value, increasing rejection and lowering useful output.",
    },
  ]}
/>
`;
