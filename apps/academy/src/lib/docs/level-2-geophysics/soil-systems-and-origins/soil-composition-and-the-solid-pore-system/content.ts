export const content = String.raw`## The Field Problem

Two soils can occupy the same volume yet transmit water, heat, and electrical current very differently. To explain that contrast, first separate what forms the solid framework from what occupies the spaces inside it.

## What Changes Underground

Soil is an unconsolidated mixture of mineral grains, organic matter, water, and air. Minerals and organic matter form the **solid phase**. The gaps between them are **pores**, filled partly or completely by water and air.

The useful ground model is therefore not “solid soil” but a solid–pore system. Grain size and arrangement control pore size and connection; wetting replaces pore air with water. Those changes affect storage, flow, chemistry, and the physical properties sensed by geophysical measurements.

## How We Detect It

At sample scale, a core preserves a known soil volume for mass, water-content, and porosity measurements. At profile scale, exposed faces and boreholes show mineral, organic, and pore-related changes with depth. Field geophysics covers a larger volume but usually responds to bulk properties influenced by several components at once.

Match evidence to scale: a handful describes one point, a core one small volume, and a geophysical cell a much larger support volume.

## What the Evidence Means

A bulk contrast does not identify one component uniquely. A wetter pore system, a clay-rich mineral framework, or more dissolved ions can all increase electrical conductivity. Organic-rich soil may also combine low solid density with high water storage.

Use direct samples to establish composition and pore filling, then use spatial measurements to test how far those conditions extend. The defensible interpretation names both the observed bulk contrast and the sampled cause.

<PhysicsExamples collapsible
  items={[
    {
      title: "Separate solids from pores",
      question: "A shallow core contains quartz grains, decayed organic matter, water and trapped air. Classify each component and state the interface relevant to a wetting survey.",
      answer: "**Strategy:** divide the sample into the solid framework and pore contents before interpreting a change. Quartz and organic matter belong to the solid phase; water and air occupy the pores. Rain moves the important interface as water replaces air within connected pores. **Interpretation:** a survey may track changing pore filling, but the mineral and organic framework remains part of the measured bulk response.",
    },
    {
      title: "A non-unique conductive soil",
      question: "A field-scale image shows a conductive zone 12 m wide in the upper metre of soil. Why can the image not show whether the cause is wet pores or clay-rich solids?",
      answer: "**Strategy:** list the components that can change the same bulk property, then choose evidence at matching depth. Connected pore water carries ionic current, while clay surfaces can also conduct. Take moisture and texture samples across the 12 m zone and compare them with the image support volume. **Interpretation:** the image establishes a bulk electrical contrast; only the paired samples can attribute that contrast to pore water, clay, or both.",
    },
  ]}
/>
`;
