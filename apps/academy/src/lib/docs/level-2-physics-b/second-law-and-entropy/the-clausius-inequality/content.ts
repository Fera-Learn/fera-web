export const content = String.raw`## Principle

The Clausius inequality is a statement about a complete thermodynamic cycle. It compares each signed heat transfer into the system with the absolute boundary temperature at which that transfer occurs. Equality identifies a reversible cycle; a strict negative value identifies an irreversible cycle.

## Notation

<Notation
  items={[
    { symbol: "\\delta Q", meaning: "inexact infinitesimal heat transferred into the system", unit: "J" },
    { symbol: "T_b", meaning: "absolute system-boundary temperature where heat crosses", unit: "K" },
    { symbol: "Q_j", meaning: "signed heat transferred into the system at boundary segment j", unit: "J" },
    { symbol: "T_j", meaning: "constant absolute boundary temperature for heat transfer Q_j", unit: "K" },
    { symbol: "S_{\\mathrm{gen}}", meaning: "entropy generated inside the system during one cycle", unit: "J K^{-1}" },
    { symbol: "S", meaning: "system entropy", unit: "J K^{-1}" },
    { symbol: "\\Delta S_{\\mathrm{cycle}}", meaning: "system entropy change over one complete cycle", unit: "J K^{-1}" },
  ]}
/>

## The Core Method

For any closed cycle,

\\[
\oint\frac{\delta Q}{T_b}\leq0.
\tag*{[1]}
\\]

The integral is cyclic: equation \\([1]\\) must not be written as a general inequality for an arbitrary open path. If heat is exchanged in discrete amounts at constant boundary temperatures, it becomes

\\[
\sum_j\frac{Q_j}{T_j}\leq0,
\tag*{[2]}
\\]

where heat entering the system is positive and heat leaving is negative. Entropy accounting for a real process is

\\[
dS=\frac{\delta Q}{T_b}+dS_{\mathrm{gen}},
\qquad dS_{\mathrm{gen}}\geq0.
\tag*{[3]}
\\]

Integrate equation \\([3]\\) around a complete cycle. Entropy is a state function, so the system returns to its initial entropy:

\\[
\Delta S_{\mathrm{cycle}}
=\oint dS
=0.
\tag*{[4]}
\\]

Therefore

\\[
0=\oint\frac{\delta Q}{T_b}+S_{\mathrm{gen}},
\qquad
\oint\frac{\delta Q}{T_b}=-S_{\mathrm{gen}}\leq0.
\tag*{[5]}
\\]

A reversible cycle has \\(S_{\mathrm{gen}}=0\\) and equality in equation \\([1]\\). An irreversible cycle has \\(S_{\mathrm{gen}}>0\\) and a strict inequality. Using reservoir temperature instead of \\(T_b\\) is valid only where the boundary is at that reservoir temperature; a finite temperature jump is itself irreversible.

<PhysicsExamples collapsible
  items={[
    {
      title: "Entropy generation in a cyclic engine",
      question: "A cyclic engine absorbs \\(600\\,\\mathrm{J}\\) at \\(500\\,\\mathrm{K}\\) and rejects \\(390\\,\\mathrm{J}\\) at \\(300\\,\\mathrm{K}\\). Evaluate the Clausius integral and entropy generation per cycle.",
      answer: "With heat into the engine positive, equation \\([2]\\) gives \\[\\oint\\frac{\\delta Q}{T_b}=\\frac{600\\,\\mathrm{J}}{500\\,\\mathrm{K}}+\\frac{-390\\,\\mathrm{J}}{300\\,\\mathrm{K}}=1.20-1.30=-0.10\\,\\mathrm{J\\,K^{-1}}.\\] Equation \\([5]\\) then gives \\(S_{\\mathrm{gen}}=0.10\\,\\mathrm{J\\,K^{-1}}\\). The negative integral and positive generation consistently identify irreversibility. **Final result:** the Clausius integral is \\(-0.10\\,\\mathrm{J\\,K^{-1}}\\) and \\(S_{\\mathrm{gen}}=0.10\\,\\mathrm{J\\,K^{-1}}\\) per cycle.",
    },
    {
      title: "Test a proposed cycle",
      question: "A proposed cyclic device has \\(Q_1=240\\,\\mathrm{J}\\) at \\(T_1=400\\,\\mathrm{K}\\) and \\(Q_2=-150\\,\\mathrm{J}\\) at \\(T_2=300\\,\\mathrm{K}\\). Can it operate as stated?",
      answer: "Equation \\([2]\\) gives \\[\\sum_j\\frac{Q_j}{T_j}=\\frac{240}{400}-\\frac{150}{300}=0.60-0.50=+0.10\\,\\mathrm{J\\,K^{-1}}.\\] This is positive and contradicts the cycle-scoped bound in equation \\([1]\\). Equivalently, equation \\([5]\\) would require negative entropy generation. **Final result:** the proposed cycle is impossible because its Clausius sum is \\(+0.10\\,\\mathrm{J\\,K^{-1}}\\).",
    },
  ]}
/>
`;
