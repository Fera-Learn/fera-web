export const content = String.raw`## The Field Problem

Heavy rain after fertiliser application does not wash every ion through soil equally. Charged surfaces prefer some cations, while many anions remain weakly held.

## What Changes Underground

**Cation selectivity** is the tendency for surfaces to hold some ions more tightly than others. Higher charge generally binds more strongly. For equal charge, a smaller hydrated ion is favoured. The lecture order is

\\[
\mathrm{Al^{3+}>Ca^{2+}>Mg^{2+}>K^+=NH_4^+>Na^+}.
\\]

Mica and vermiculite can trap potassium and ammonium between layers. Sodium has a thick water shell and is held weakly, so leaching removes sodium and potassium before calcium, while acid soils can become dominated by aluminium.

## How We Detect It

Measure the input, exchangeable cations, and drainage chemistry through a wetting period. Compare concentrations as charge as well as mass, and measure weakly retained anions such as nitrate in the leachate.

Profile sampling shows whether ions remain near the surface or move below the root zone.

## What the Evidence Means

Selectivity is not absolute: a sufficiently high concentration of a weakly preferred ion can drive reversible exchange. Water flow and biological uptake also control leaching.

For potassium nitrate fertiliser, nitrate commonly leaches first while much potassium remains exchange-bound; displaced calcium can accompany nitrate to maintain solution charge. A mass balance is needed to quantify each pathway.

<PhysicsExamples collapsible
  items={[
    {
      title: "Rank exchange strength",
      question: "For Ca2+, K+, and Na+, state the expected order of retention on a typical negatively charged colloid.",
      answer: "**Strategy:** compare charge first, then hydrated size for ions with equal charge. Ca2+ is held more strongly than the monovalent ions; K+ is held more strongly than Na+. **Interpretation:** retention decreases from Ca2+ to K+ to Na+, although high solution concentration can shift the exchange balance.",
    },
    {
      title: "Track potassium nitrate after rain",
      question: "A clay loam receives KNO3 before a wet month. Which ion is expected to leach readily, and why may Ca2+ appear with it?",
      answer: "**Strategy:** separate cation exchange from anion mobility. Nitrate is weakly retained and moves with drainage, while much K+ can remain on clay. Exchangeable K+ can displace Ca2+ into solution, supplying counter-charge. **Interpretation:** nitrate with calcium in drainage is plausible, but uptake and initial exchange composition must be measured.",
    },
  ]}
/>
`;
