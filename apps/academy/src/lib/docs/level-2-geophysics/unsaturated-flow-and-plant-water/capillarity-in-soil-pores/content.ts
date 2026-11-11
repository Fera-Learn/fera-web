export const content = String.raw`## The Field Problem

Water can rise farther above the water table in fine pores than in wide pores. That creates a capillary fringe and explains why fine soil can remain wet while coarser material drains.

## What Changes Underground

Capillarity results from adhesion to pore walls and surface tension at the air–water interface. For a clean cylindrical tube, let \\(r\\) be radius in centimetres and \\(h\\) be capillary rise in centimetres. The lecture approximation is

\\[
h=\frac{0.15\,\mathrm{cm^2}}{r}.
\\]

Rise is inversely proportional to radius: narrower pores lift water higher and retain it more strongly. Real soil pores are irregular and connected, so the tube model shows the controlling trend rather than an exact field prediction.

## How We Detect It

Observe moisture above a measured water table or measure a retention curve on an undisturbed sample. Grain size and structure constrain likely pore sizes, while repeated moisture profiles show how far the capillary effect extends through time.

A field sensor averages many pores; it does not measure one capillary radius directly.

## What the Evidence Means

The model assumes a clean tube and ignores mixed pore shapes, trapped air, and changing surface chemistry. Layering can also interrupt or redirect capillary connection.

Use the equation to compare pore scales. Use measured profiles to locate the actual wet fringe, and do not infer a unique pore radius from one moisture value.

<PhysicsExamples collapsible
  items={[
    {
      title: "Calculate rise in a narrow pore",
      question: "Estimate capillary rise for a clean pore of radius 0.001 cm.",
      answer: "**Strategy:** substitute the radius into the inverse-radius model with consistent centimetre units. Rise is 0.15 cm² / 0.001 cm = 150 cm, or 1.5 m. **Interpretation:** the ideal pore can support a much taller water column than a wide pore; the value is a scale estimate, not an exact soil-fringe thickness.",
    },
    {
      title: "Apply the model to layered soil",
      question: "A fine layer overlies coarse sand, but measured wetness above the water table is patchy. Why may the tube calculation overpredict a continuous fringe?",
      answer: "**Strategy:** check the model's connectivity assumption. Real pores vary in shape, the coarse–fine interface may break water continuity, and trapped air or cracks can create bypasses. Map moisture with depth and log the layer boundary. **Interpretation:** small pores favour greater rise, but continuity and layering determine whether that potential becomes a field-scale wet fringe.",
    },
  ]}
/>
`;
