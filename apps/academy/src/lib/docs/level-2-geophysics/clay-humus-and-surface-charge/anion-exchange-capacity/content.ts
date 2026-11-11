export const content = String.raw`## The Field Problem

Most soil discussions emphasise negative surfaces that hold cations, but very acidic soils can develop positive sites that retain some anions while others still leach readily.

## What Changes Underground

**Anion exchange capacity**, AEC, is the total charge of anions held on positively charged surfaces, in \\(\mathrm{cmol_c\,kg^{-1}}\\). Iron and aluminium oxides, kaolinite edges, and allophane can become positively charged, especially at low pH.

AEC increases as pH falls and can exceed CEC in very acidic tropical soils. Binding is selective: nitrate and chloride are held weakly and tend to wash out, whereas phosphate and sulphate can bind directly to surfaces.

## How We Detect It

Measure pH, oxide and clay mineralogy, and retained or leached anions. Laboratory exchange tests quantify total positive surface charge, while field drainage samples reveal which anions remain mobile.

Match sampling to the horizon because oxide-rich subsoil and organic topsoil may have opposite charge behaviour.

## What the Evidence Means

Positive charge does not imply that every anion is retained equally. Low nitrate in drainage could also reflect plant uptake or dilution rather than AEC, while phosphate retention may involve specific surface binding.

Use input–output chemistry, mineral evidence, and pH to discriminate retention from biological loss or dilution.

<PhysicsExamples collapsible
  items={[
    {
      title: "Predict charge in an acid oxide soil",
      question: "An iron-oxide-rich soil becomes more acidic. How should its AEC tend to change?",
      answer: "**Strategy:** apply the pH dependence of oxide surface charge. As pH falls, more surface sites become positive, so AEC tends to increase. **Interpretation:** greater anion retention is possible, but the effect must be measured because mineral abundance and competing ions also matter.",
    },
    {
      title: "Compare nitrate and phosphate",
      question: "After fertiliser application, nitrate appears quickly in drainage while phosphate remains in an acidic oxide-rich horizon. What interpretation is supported?",
      answer: "**Strategy:** compare the known binding strengths and alternative losses. Nitrate is weakly held and can leach; phosphate can bind directly to positive oxide surfaces. Check plant uptake, redox conditions, and mass balance. **Interpretation:** selective anion retention is supported, but missing phosphate should not be assigned to AEC without those checks.",
    },
  ]}
/>
`;
