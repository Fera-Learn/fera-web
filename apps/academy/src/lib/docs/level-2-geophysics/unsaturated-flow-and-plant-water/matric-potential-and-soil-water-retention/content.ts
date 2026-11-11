export const content = String.raw`## The Field Problem

Two soils can contain the same water volume while making that water very different in accessibility to roots. Water content measures quantity; water potential measures how strongly the soil holds it and where it can move.

## What Changes Underground

**Matric potential**, \\(\psi_m\\) in kilopascals, is the pressure effect of adhesion and surface tension in soil pores. It is zero at saturation and becomes more negative as soil dries. Sand loses much of its water at small suction; clay retains more water to strongly negative \\(\psi_m\\).

Total soil-water potential \\(\psi\\), also in kilopascals, combines gravity \\(\psi_g\\), matric \\(\psi_m\\), and osmotic \\(\psi_o\\), plus hydrostatic \\(\psi_h\\) below the water table:

\\[
\psi=\psi_g+\psi_m+\psi_o\quad\text{with }\psi_h\text{ added below the water table}.
\\]

Water moves from higher to lower potential.

## How We Detect It

A tensiometer uses a water-filled tube and porous tip. Soil draws water through the tip until the gauge records \\(\psi_m\\); the useful range extends to about \\(-85\,\mathrm{kPa}\\). Pair potential readings with water-content measurements to build a retention relation.

State the reference height and compare sensors at matching depths because gravity also changes total potential.

## What the Evidence Means

Potential values are state measurements, while a retention curve relating potential to content is material-specific and can differ with texture and structure. Tensiometers cannot reach the permanent-wilting range near \\(-1500\,\mathrm{kPa}\\).

Salts make osmotic potential more negative, so equal matric potential does not guarantee equal plant access in saline soil. Chemistry is needed to separate those effects.

<PhysicsExamples collapsible
  items={[
    {
      title: "Choose the direction of movement",
      question: "Adjacent soil volumes have total water potentials of -20 kPa and -60 kPa at the same elevation. Which way does water tend to move?",
      answer: "**Strategy:** compare total potential using the rule that water moves from higher to lower values. -20 kPa is higher than -60 kPa, so water tends to move towards the -60 kPa soil. **Interpretation:** the drier or more strongly bound region draws water, provided a connected pathway exists.",
    },
    {
      title: "Separate matric and osmotic effects",
      question: "Two soils have the same water content, but a saline soil supplies less water to roots. Why is water content alone insufficient?",
      answer: "**Strategy:** include all relevant potential components. Dissolved salts lower osmotic potential even if pore geometry gives similar matric potential and water content. Measure matric potential and salinity at the root depth. **Interpretation:** poorer access can result from osmotic binding, so the shared water content does not imply equal total potential.",
    },
  ]}
/>
`;
