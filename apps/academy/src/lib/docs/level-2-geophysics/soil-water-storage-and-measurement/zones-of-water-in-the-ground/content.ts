export const content = String.raw`## The Field Problem

A borehole can contain standing water while roots above it occupy soil whose pores contain both air and water. To interpret either observation, locate the water table and distinguish the zones above and below it.

## What Changes Underground

The **unsaturated**, or vadose, zone lies above the water table and contains both air and water in its pores. The root zone occupies its shallow part. Immediately above the water table, capillary forces can hold a wetter **capillary fringe**. Below the water table is the **saturated zone**, where every connected pore is water-filled.

The water table is the level to which water settles in a correctly screened well. It can move through seasons or after pumping, whereas the soil and rock layers stay fixed.

## How We Detect It

Measure standing water in a borehole screened across the target layer. A profile or core directly shows material and pore conditions at one point; a water-level record directly tracks elevation through time. Spatial geophysics samples a larger volume and may map a water-related property contrast, but it does not directly observe a water-table line.

State depth, elevation datum, screened interval, and observation date because both position and timing affect comparison.

## What the Evidence Means

Water above a low-permeability layer can form a perched saturated zone above the regional water table. A wet capillary fringe can also extend above the measured well level. Therefore, one wet core does not uniquely locate the regional water table.

Combine borehole levels with material logs and repeated measurements. The evidence can establish saturation at the screened location and time; continuity between boreholes remains interpreted.

<PhysicsExamples collapsible
  items={[
    {
      title: "Classify a vertical water profile",
      question: "A well settles at 2.4 m below ground. Soil at 0.5 m contains air and water, while pores below 2.4 m are full. Identify the zones and the measured boundary.",
      answer: "**Strategy:** use pore filling and the standing well level. The shallow soil is in the unsaturated zone; the level at 2.4 m is the measured water table; material below is saturated. A capillary fringe may occur immediately above 2.4 m. **Interpretation:** the well locates the water table at one screened point and time, not a flat boundary across the site.",
    },
    {
      title: "Test a perched water body",
      question: "A wet layer occurs at 0.8 m above dense clay, but a deeper borehole reaches the regional water table at 6 m. How can both observations be valid?",
      answer: "**Strategy:** compare the wet layer with the logged hydraulic barrier. Water can perch above low-conductivity clay while the regional saturated zone remains deeper. Install shallow and deep screened wells and repeat levels after rain. **Interpretation:** the shallow wetness supports a perched zone only if it tracks the clay and varies independently of the 6 m regional level.",
    },
  ]}
/>
`;
