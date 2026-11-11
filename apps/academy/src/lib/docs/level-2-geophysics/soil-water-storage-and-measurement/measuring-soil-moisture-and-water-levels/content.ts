export const content = String.raw`## The Field Problem

Flood forecasting and crop monitoring need both continuous records at selected points and wider maps of changing wetness. No single measurement provides both fine timing and complete spatial coverage.

## What Changes Underground

As pores wet, water replaces air. Water has a dielectric constant near 81, compared with about 3–5 for minerals and 1 for air, so an electrical pulse travels more slowly beside wetter soil. Below the water table, the pressure on a submerged sensor rises with the height of water above it; approximately 1 kPa corresponds to 0.1 m of water.

These responses target different states: probes estimate water content in unsaturated soil, while a borehole transducer records hydraulic head in its screened layer.

## How We Detect It

Time-domain or capacitance probes log a few centimetres around rods placed at defined depths. Calibrate them against core water contents and avoid stones or air gaps. A submerged pressure transducer records water plus atmospheric pressure; subtract a surface barometer and check the result with a dip tape.

Point sensors can run for months. Geophysical surveys provide metre-scale lines, maps, or volumes at survey times, while cosmic-ray and satellite methods average progressively larger and shallower footprints.

## What the Evidence Means

A probe signal is converted to water content by calibration; it is not a direct field-average measurement. Geophysical resistivity, conductivity, or radar speed also responds to salt, clay, and temperature. Larger footprints cover more ground but smooth local detail.

Use cores to calibrate points and points to constrain repeated spatial images. Disturbance, sensor drift, depth mismatch, and timing remain explicit uncertainties.

<PhysicsExamples collapsible
  items={[
    {
      title: "Correct a water-level logger",
      question: "A submerged transducer reads 18 kPa above vacuum while the surface logger reads 8 kPa atmospheric pressure. Estimate the water depth above the sensor.",
      answer: "**Strategy:** subtract atmospheric pressure before converting pressure to water depth. Water pressure is 18 - 8 = 10 kPa. At about 0.1 m per kPa, the depth is about 1.0 m. **Interpretation:** this is the water column above one sensor; a dip-tape check is needed because drift or cable stretch can bias the level.",
    },
    {
      title: "Calibrate a wet geophysical zone",
      question: "A field image shows a broad conductive patch, but one moisture probe lies near its edge. What can the probe confirm, and what remains unresolved?",
      answer: "**Strategy:** match location, depth, timing, and support volume. The probe can confirm local water-content change within a few centimetres at its depth, while the image averages a much larger volume. Add cores or probes across the patch and measure salinity and clay. **Interpretation:** one point can calibrate local wetness but cannot prove that water alone causes or fills the whole conductive zone.",
    },
  ]}
/>
`;
