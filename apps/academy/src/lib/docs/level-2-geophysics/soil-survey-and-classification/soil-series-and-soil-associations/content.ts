export const content = String.raw`## The Field Problem

Field teams cannot dig a profile at every point, so repeated profile descriptions must be converted into mapped units that represent recurring soils and landscapes.

## What Changes Underground

A **soil series** groups soils with defined profile characteristics, including particle-size subgroup, parent material, colour, and mineralogy. England and Wales contain hundreds of recognised series.

A **soil association** is a mapped unit made from similar recurring series across a characteristic landscape, commonly named after its most widespread series. It represents a pattern of soils, not one identical profile everywhere.

## How We Detect It

Describe and classify profiles at selected locations, then test how their occurrence relates to geology, relief, drainage, and landform. Additional auger holes or geophysical traverses can trace important boundaries between observation points.

Build the mapped association from the repeated landscape pattern while retaining the individual series observations that support it.

## What the Evidence Means

A series is a profile-based class; an association is a spatial mapping unit. Finding one series does not prove that the whole polygon contains only that soil. Small inclusions and transitions are expected.

Map confidence depends on observation spacing, landscape complexity, and how sharply the controlling boundaries can be located.

<PhysicsExamples collapsible
  items={[
    {
      title: "From repeated profiles to a series",
      question: "Several profiles on the same substrate share particle-size subgroup, colour, mineralogy, and horizon arrangement. What classification step is supported?",
      answer: "**Strategy:** group like profile evidence before mapping a landscape unit. The repeated combination of defined profile characteristics supports assignment to one soil series. **Interpretation:** the series describes those observed profiles; its spatial extent still requires boundary surveying.",
    },
    {
      title: "Interpret an association polygon",
      question: "A mapped association is named after one dominant series, but a valley-bottom core contains a wetter secondary series. Is the map necessarily wrong?",
      answer: "**Strategy:** distinguish the dominant mapped pattern from local inclusions. An association can contain several related series across its landscape. Check whether the wet valley profile is an expected minor component or large enough to justify a separate unit. **Interpretation:** one different core does not invalidate the association, but it reveals within-polygon variability relevant to site decisions.",
    },
  ]}
/>
`;
