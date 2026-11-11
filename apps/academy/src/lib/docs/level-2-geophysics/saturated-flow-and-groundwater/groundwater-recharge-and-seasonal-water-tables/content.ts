export const content = String.raw`## The Field Problem

Durham received substantial summer rain, yet a monitored water table continued to fall until October. Rainfall becomes recharge only after evapotranspiration and dry soil storage have been satisfied.

## What Changes Underground

**Groundwater recharge** is water that drains below the root zone and reaches the water table. In summer, leaves are active, evapotranspiration is high, and rain first replaces water removed from dry soil. In winter, low evapotranspiration allows soil to remain near field capacity; further water can then drain downward.

This seasonal storage threshold explains why UK recharge occurs mainly from October to March even when individual summer months are wet.

## How We Detect It

Compare rainfall and evapotranspiration with root-zone moisture, drainage, and borehole water level over months. Rain is measured directly; recharge is derived from drainage or a water balance, and water-table rise is an aquifer response rather than recharge itself.

Use a borehole screened in the target aquifer and account for pumping, river exchange, and delayed travel through the unsaturated zone.

## What the Evidence Means

A falling water table during rain does not mean none of the rain entered soil. Water may refill the root-zone deficit while discharge and pumping continue to exceed recharge. A later rise may combine delayed recharge with reduced abstraction.

Seasonal correlation supports the recharge model, but a quantified estimate needs storage, ET, and boundary-flow evidence at matching scales.

<PhysicsExamples collapsible
  items={[
    {
      title: "Explain delayed winter recharge",
      question: "Autumn rain begins in September, but the water table starts rising only in November. What sequence explains the delay?",
      answer: "**Strategy:** follow water through the storage thresholds. Early rain first replaces the summer root-zone deficit; once soil returns to field capacity and ET is low, drainage moves below roots and eventually reaches the aquifer. **Interpretation:** the lag is consistent with recharge travel and storage, but pumping records should be checked before assigning the full rise to rainfall.",
    },
    {
      title: "Interpret a wet summer decline",
      question: "From June to September, 344 mm of rain falls but the monitored water table keeps falling. What can and cannot be concluded?",
      answer: "**Strategy:** compare rainfall with ET, soil deficit, and groundwater outflow rather than rainfall alone. Plants can use much of the water and the remainder can refill dry soil without deep drainage. **Interpretation:** little immediate recharge is supported, but its exact amount remains unresolved without ET, soil-moisture, pumping, and drainage data.",
    },
  ]}
/>
`;
