export const content = String.raw`## The Field Problem

Weathering can either dissolve a rock completely into groundwater or release some ions while leaving new clay behind. That distinction links water chemistry to the solid material found in a soil profile.

## What Changes Underground

Root and microbial carbon dioxide makes soil water a weak acid. Dolomite weathers **congruently**, meaning all constituent material becomes dissolved species:

\\[
\mathrm{CaMg(CO_3)_2(s)+2CO_2(g)+2H_2O(l)\rightarrow Ca^{2+}(aq)+Mg^{2+}(aq)+4HCO_3^-(aq)}.
\\]

Calcium feldspar weathers **incongruently**, leaving kaolinite while releasing dissolved calcium and bicarbonate:

\\[
\mathrm{CaAl_2Si_2O_8(s)+2CO_2(g)+3H_2O(l)\rightarrow Al_2Si_2O_5(OH)_4(s)+Ca^{2+}(aq)+2HCO_3^-(aq)}.
\\]

## How We Detect It

Analyse both phases across a weathering front: identify primary and secondary minerals in the solid and measure dissolved ions in pore water or groundwater. Carbonate dissolution should leave no clay product from the carbonate itself; silicate alteration should pair released solutes with a secondary solid.

Spatial electrical data can follow changed water or clay properties but does not identify the reaction directly.

## What the Evidence Means

Calcium and bicarbonate alone are not unique to one mineral, and transported kaolinite need not have formed in the sampled profile. Reaction interpretation requires mineral continuity, solution chemistry, and a plausible source rock.

Congruent versus incongruent describes products of the reaction, not whether weathering is fast or complete across an entire field site.

<PhysicsExamples collapsible
  items={[
    {
      title: "Classify dolomite dissolution",
      question: "Dolomite disappears while calcium, magnesium, and bicarbonate enter solution, with no secondary clay left. Is the reaction congruent or incongruent?",
      answer: "**Strategy:** check whether any constituent remains as a new solid. All listed products are dissolved ions and no residual secondary mineral is formed. **Interpretation:** the reaction is congruent dissolution; water chemistry should be checked against the dolomite source and possible mixing.",
    },
    {
      title: "Link feldspar to kaolinite",
      question: "A weathered granite profile contains less feldspar, more kaolinite, and calcium-rich pore water. What added evidence is needed before assigning incongruent weathering?",
      answer: "**Strategy:** test whether the solid loss and products belong to one in-place sequence. Compare mineral changes across the front, bicarbonate chemistry, and the contact with unweathered parent rock. **Interpretation:** the combined pattern supports incongruent feldspar weathering only if transported clay and external calcium sources are excluded.",
    },
  ]}
/>
`;
