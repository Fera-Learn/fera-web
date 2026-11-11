export const content = String.raw`## The Field Problem

Soil properties can change with depth inside one profile and sideways across a few metres. Survey design must distinguish those two kinds of interface because they control different sampling and mapping choices.

## What Changes Underground

A vertical profile may pass from organic-rich granular topsoil to clay-rich blocky subsoil and then massive parent material. In the lecture synthesis, porosity decreases from about 55 to 50 to 45 percent across such horizons.

Lateral interfaces arise where formation environments change: parent material, drainage, vegetation, relief, or management. Adjacent forest patches can therefore differ in organic accumulation, structure, moisture, and drainage without sharing a vertical boundary depth.

## How We Detect It

Use cores or profile logs to resolve vertical boundaries and closely spaced traverses to resolve lateral ones. Keep measurement depth consistent across a lateral survey; otherwise depth variation can masquerade as a sideways change.

Combine property measurements with horizon and landscape observations to build a three-dimensional ground model.

## What the Evidence Means

A map averages vertically over some support depth, while a core samples one narrow column. A contrast can disappear when averaged or appear shifted if the interface slopes.

Interpret property boundaries with survey geometry and support volume stated explicitly. Do not assume a vertical horizon contact is flat or a lateral boundary extends through the whole profile.

<PhysicsExamples collapsible
  items={[
    {
      title: "A vertical pore-space contrast",
      question: "Porosity falls from 55 percent in granular topsoil to 45 percent in massive parent material over 0.8 m depth. What interface and functional change are expected?",
      answer: "**Strategy:** connect the vertical property trend to horizon structure. The lower massive material contains less pore space and likely fewer connected large pores than the granular surface. **Interpretation:** the depth interval is a candidate hydraulic interface where infiltration and aeration may decline; direct permeability evidence is still required.",
    },
    {
      title: "A lateral forest contrast",
      question: "A traverse crosses from forest with dense understory to rapidly drained forest without understory. How can depth variation create a false lateral interpretation?",
      answer: "**Strategy:** hold depth and support volume constant across the traverse. If one reading samples organic topsoil and another reaches mineral subsoil, the apparent sideways contrast may actually be vertical layering. **Interpretation:** align measurements to the same horizons and add profiles before attributing the boundary to vegetation or drainage.",
    },
  ]}
/>
`;
