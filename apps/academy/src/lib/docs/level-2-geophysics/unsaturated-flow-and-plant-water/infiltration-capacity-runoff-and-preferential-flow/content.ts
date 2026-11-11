export const content = String.raw`## The Field Problem

During an intense storm, one field absorbs rain while a compacted neighbour ponds and produces runoff. Water may also bypass the wetting front through cracks, carrying pollutants deeper than the average soil matrix suggests.

## What Changes Underground

**Infiltration capacity** is the fastest rate at which the soil surface can accept water, in millimetres per hour. Dry soil initially draws water by matric suction as well as gravity; as the surface wets, that pull weakens and infiltration approaches saturated hydraulic conductivity, \\(K_{sat}\\).

If rainfall intensity exceeds infiltration capacity, excess water ponds and forms infiltration-excess, or Hortonian, overland flow. **Preferential flow** is rapid movement through macropores such as cracks, root channels, and worm burrows that bypasses much of the soil matrix.

## How We Detect It

Measure rainfall and infiltration rate through time, and record runoff at the same plot scale. Moisture at several depths can reveal water arriving ahead of the matrix wetting front. Bulk density and structure help explain why bare, sealed, or compacted surfaces accept water slowly.

The Pontbren case recorded infiltration 67 times faster under young trees than in grazed pasture five years after planting, alongside lower near-surface bulk density.

## What the Evidence Means

The late-time infiltration rate tends towards \\(K_{sat}\\), but swelling clay can seal as it wets and field heterogeneity can prevent a single stable value. Early water or pollutant arrival does not mean the entire profile became saturated; a small macropore network may carry it.

Separate matrix wetting from bypass flow with profiles or distributed sensors before predicting storage or contaminant travel.

<PhysicsExamples collapsible
  items={[
    {
      title: "Predict infiltration-excess runoff",
      question: "Rain falls at 8 mm/h while a compacted surface can infiltrate only 3 mm/h. Ignoring storage changes, estimate the excess rate.",
      answer: "**Strategy:** compare rainfall intensity with infiltration capacity at the same time. The excess is 8 - 3 = 5 mm/h. **Interpretation:** up to 5 mm/h can pond or become Hortonian runoff; surface storage and lateral redistribution may reduce the measured outlet flow.",
    },
    {
      title: "Interpret an early pollutant arrival",
      question: "Polluted water reaches a drain before the matrix wetting front reaches that depth. What pathway is supported and what evidence should test it?",
      answer: "**Strategy:** compare arrival time with matrix wetting. Early arrival supports preferential flow through connected cracks, roots, or burrows. Compare moisture at several depths with observed macropores. **Interpretation:** a bypass pathway is likely, but the observation does not show that all soil water or pollutant mass followed it.",
    },
  ]}
/>
`;
