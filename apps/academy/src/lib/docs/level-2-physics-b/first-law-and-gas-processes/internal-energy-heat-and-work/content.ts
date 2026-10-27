export const content = String.raw`## Principle

Internal energy belongs to the state of a system, whereas heat and work describe energy crossing the system boundary during a process. A system does not contain heat or work. With the Academy convention, heat into the system is positive and work done by the system is positive.

## Notation

<Notation
  items={[
    { symbol: "U,U_i,U_f", meaning: "internal energy and its initial and final values", unit: "J" },
    { symbol: "dU", meaning: "exact infinitesimal change in internal energy", unit: "J" },
    { symbol: "\\Delta U=U_f-U_i", meaning: "finite change in internal energy", unit: "J" },
    { symbol: "\\delta Q,Q", meaning: "inexact infinitesimal heat transfer and finite heat transferred into the system", unit: "J" },
    { symbol: "\\delta W,W", meaning: "inexact infinitesimal work transfer and finite work done by the system", unit: "J" },
  ]}
/>

## The Core Method

For a specified equilibrium state, internal energy has one value. Its finite change depends only on the endpoints:

\\[
\Delta U=U_f-U_i=\int_i^f dU.
\tag*{[1]}
\\]

Consequently, the internal-energy change around any closed cycle vanishes:

\\[
\oint dU=0.
\tag*{[2]}
\\]

Heat and work are transfers, not state functions. Their process totals are path integrals,

\\[
Q=\int_i^f\delta Q,
\qquad
W=\int_i^f\delta W,
\tag*{[3]}
\\]

so two paths between the same states can have different values of \\(Q\\) and \\(W\\). The inexact symbol \\(\delta\\) is therefore essential; ordinary exact-differential notation must not be used for these path transfers.

Energy conservation connects the exact state change to the two inexact transfers:

\\[
dU=\delta Q-\delta W,
\qquad
\Delta U=Q-W.
\tag*{[4]}
\\]

A positive \\(Q\\) raises the system's energy if nothing else changes. A positive \\(W\\) removes energy from the system because the system supplies that work to its surroundings.

<PhysicsExamples collapsible
  items={[
    {
      title: "Heating while doing work",
      question: "A closed system receives \\(Q=500\\,\\mathrm J\\) of heat and does \\(W=180\\,\\mathrm J\\) of work on its surroundings. Find its internal-energy change.",
      answer: "Apply equation \\([4]\\) with the stated transfer directions: \\[\\Delta U=Q-W=(500-180)\\,\\mathrm J=320\\,\\mathrm J.\\] The positive value means that the final state has greater internal energy. **Final result:** \\(\\Delta U=+320\\,\\mathrm J\\).",
    },
    {
      title: "Different paths between the same states",
      question: "Path A transfers \\(Q_A=700\\,\\mathrm J\\) into a system while the system does \\(W_A=250\\,\\mathrm J\\). Path B joins the same initial and final states and transfers \\(Q_B=520\\,\\mathrm J\\). Find \\(W_B\\).",
      answer: "Equation \\([4]\\) gives the endpoint change from path A: \\[\\Delta U=Q_A-W_A=(700-250)\\,\\mathrm J=450\\,\\mathrm J.\\] The same endpoints require the same \\(\\Delta U\\), so \\[W_B=Q_B-\\Delta U=(520-450)\\,\\mathrm J=70\\,\\mathrm J.\\] The unequal heat and work transfers demonstrate their path dependence. **Final result:** \\(W_B=+70\\,\\mathrm J\\), while both paths have \\(\\Delta U=450\\,\\mathrm J\\).",
    },
  ]}
/>
`;
