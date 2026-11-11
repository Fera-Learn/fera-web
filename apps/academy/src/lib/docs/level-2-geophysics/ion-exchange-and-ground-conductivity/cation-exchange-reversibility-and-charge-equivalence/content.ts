export const content = String.raw`## The Field Problem

Road salt or seawater flooding can push one set of cations from soil surfaces into pore water. The exchange can reverse later, and every swap must balance electrical charge.

## What Changes Underground

Exchangeable cations continually swap between colloid surfaces and soil water. The reaction is reversible: increasing one dissolved cation drives it onto surfaces, while removing it allows others to return. A monovalent example is

\\[
\mathrm{colloid{-}Na^+ + H^+ \rightleftharpoons colloid{-}H^+ + Na^+}.
\\]

Exchange is charge for charge, not ion for ion. One \\(\mathrm{Ca^{2+}}\\) exchanges with two \\(\mathrm{Na^+}\\), and one \\(\mathrm{Al^{3+}}\\) with three. This is why capacity is counted in \\(\mathrm{cmol_c\,kg^{-1}}\\).

## How We Detect It

Measure dissolved and exchangeable cations before, during, and after the chemical input. A leachate pulse records ions released to water; extraction records ions remaining on surfaces.

Sample at matching depths and times because pore-water response can be rapid while exchange and flushing evolve through the profile.

## What the Evidence Means

A rise in calcium after sodium input can reflect sodium displacing calcium from exchange sites, but carbonate dissolution could also release calcium. Charge balance, alkalinity, and exchange extracts discriminate those pathways.

Exchange usually changes pore-water EC only modestly compared with a large salt input. Do not treat every EC change as direct evidence of exchange.

<PhysicsExamples collapsible
  items={[
    {
      title: "Balance sodium and calcium exchange",
      question: "How many moles of Na+ are required to replace 0.50 mol of Ca2+ from clay while conserving charge?",
      answer: "**Strategy:** balance positive charge rather than ion count. The calcium contributes 0.50 mol × 2 = 1.00 mol of charge, so 1.00 mol of Na+ is required. **Interpretation:** two sodium ions replace each calcium ion; released calcium should be sought in the pore water or leachate.",
    },
    {
      title: "Test reversible road-salt exchange",
      question: "After winter salting, exchangeable Na+ rises and Ca2+ appears in drainage. What later observation would support reversibility?",
      answer: "**Strategy:** follow both pools as sodium input falls and fresh water flushes the soil. A decline in exchangeable sodium with return of calcium to surfaces would support reverse exchange. **Interpretation:** repeated exchange and solution chemistry are needed because calcium weathering could otherwise explain the drainage signal.",
    },
  ]}
/>
`;
