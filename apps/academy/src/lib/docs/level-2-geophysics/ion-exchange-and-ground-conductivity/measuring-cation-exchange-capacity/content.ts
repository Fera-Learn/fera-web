export const content = String.raw`## The Field Problem

A laboratory reports released cations in milligrams per litre, but soil CEC is charge per kilogram. Reaching the final value requires converting concentration to amount, amount to moles, and moles to electrical charge.

## What Changes Underground

A strong salt such as ammonium displaces exchangeable \\(\mathrm{Ca^{2+}}\\), \\(\mathrm{Mg^{2+}}\\), \\(\mathrm{K^+}\\), \\(\mathrm{Na^+}\\), \\(\mathrm{Al^{3+}}\\), and \\(\mathrm{H^+}\\) from a weighed soil. Let molar mass \\(M\\) be grams per mole. Moles equal mass divided by \\(M\\); multiply moles by ionic charge, convert to centimoles, and divide by soil mass in kilograms.

The sum of all released charge is CEC in \\(\mathrm{cmol_c\,kg^{-1}}\\).

## How We Detect It

Leach the sample completely, measure each cation concentration, and multiply by leachate volume to obtain mass. Convert each mass separately because molar mass and ionic charge differ. For calcium, \\(M=40.08\,\mathrm{g\,mol^{-1}}\\).

Incomplete displacement, missed cations, wrong leachate volume, or unrepresentative soil mass biases the derived capacity.

## What the Evidence Means

The method measures exchangeable charge under the extraction conditions, not all elemental mass in the soil. pH-dependent sites make method and pH important for comparison.

CEC identifies capacity. Exchange composition, base saturation, mineralogy, and pH are needed to infer soil condition or electrical behaviour.

<PhysicsExamples collapsible
  items={[
    {
      title: "Convert calcium mass to charge",
      question: "An extraction contains 800 mg of Ca2+ per kilogram of soil. Using molar mass 40 g/mol, calculate its CEC contribution.",
      answer: "**Strategy:** convert mass to grams, divide by molar mass, convert moles to centimoles, then count charge. 800 mg/kg = 0.800 g/kg; 0.800/40 = 0.020 mol/kg = 2.0 cmol/kg. Calcium carries two charges, so the contribution is 2.0 × 2 = 4.0 cmolc/kg. **Interpretation:** this is calcium's charge contribution; all other displaced cations must be converted and added.",
    },
    {
      title: "Use a leachate concentration",
      question: "A 0.50 L leachate contains 400 mg/L Ca2+ from 0.25 kg soil. What extra steps are required before adding calcium to CEC?",
      answer: "**Strategy:** recover total mass first. Calcium mass is 400 mg/L × 0.50 L = 200 mg = 0.200 g; amount is 0.200/40 = 0.0050 mol = 0.50 cmol. Two charges give 1.00 cmolc, and dividing by 0.25 kg gives 4.0 cmolc/kg. **Interpretation:** silently treating mg/L as mg/kg would skip volume and sample-mass scaling.",
    },
  ]}
/>
`;
