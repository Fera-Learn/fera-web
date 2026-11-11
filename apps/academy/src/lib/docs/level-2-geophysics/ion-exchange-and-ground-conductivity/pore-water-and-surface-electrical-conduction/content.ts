export const content = String.raw`## The Field Problem

A low-resistivity field zone could be salty groundwater or wet clay. Both allow charge to move, but through different pathways that a resistivity image alone cannot separate.

## What Changes Underground

Pore-water conductivity \\(\sigma_w\\) comes from dissolved ions moving through connected, water-filled pores. Surface conductivity \\(\sigma_{surf}\\) comes from cations crowded near charged clay and humus surfaces. A simplified bulk relationship is

\\[
\sigma\approx\sigma_w+\sigma_{surf},
\\]

where all terms are conductivities in the same units. Surface conduction grows with CEC and matters most when pore water is fresh and clay is abundant. Smectite and humus contribute more than kaolinite.

## How We Detect It

A ground survey measures a bulk electrical response over a finite volume and derives conductivity or its inverse, resistivity. Samples directly measure water content, clay mineralogy, CEC, and extracted pore-water EC. Match sample depth and timing to the imaged zone.

Repeated surveys can show wetting change, while chemistry separates fresh clay from saline water.

## What the Evidence Means

Bulk conductivity also depends on how full and connected the pores are, temperature, pH-dependent charge, and which cations occupy surfaces. Therefore, low resistivity is not a unique map of water salinity or clay.

Conclude only that a conductive property contrast exists until supporting samples identify the pathway. Resolution and averaging may also merge a thin clay layer with adjacent saline water.

<PhysicsExamples collapsible
  items={[
    {
      title: "Identify the dominant pathway",
      question: "Clean sand contains saline connected pore water, while a smectite clay contains fresh water. Which conduction pathway is expected to dominate each?",
      answer: "**Strategy:** link each material to its available charge carriers. Saline sand conducts mainly through mobile pore-water ions; smectite can have strong surface conduction from exchangeable cations as well as water-filled pores. **Interpretation:** both may be conductive even though their chemistry and hydraulic behaviour differ.",
    },
    {
      title: "Resolve clay or salt",
      question: "A resistivity section shows one low-resistivity zone beneath a field. Design the minimum evidence needed to distinguish wet clay from salty groundwater.",
      answer: "**Strategy:** sample the same depth and footprint for texture or mineralogy, moisture, CEC, and pore-water EC. Clay with fresh water and high CEC supports surface conduction; high water EC supports salinity. **Interpretation:** the image maps a bulk conductive zone, while matched samples determine whether clay, salt, or both are responsible.",
    },
  ]}
/>
`;
