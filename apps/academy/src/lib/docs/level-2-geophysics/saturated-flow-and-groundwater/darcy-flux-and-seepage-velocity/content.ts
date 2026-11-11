export const content = String.raw`## The Field Problem

A contaminant does not travel at the Darcy flux because water moves only through connected pores, not through the solid part of the mapped cross-section.

## What Changes Underground

Let discharge \\(Q\\) cross total area \\(A\\). **Darcy flux** \\(q\\), in metres per second, is discharge per whole cross-section:

\\[
q=\frac{Q}{A}=K_{sat}i.
\\]

Let effective porosity \\(\phi_e\\) be the fraction of the section occupied by connected, flowing pores. The average **seepage velocity** \\(v\\) is

\\[
v=\frac{q}{\phi_e}.
\\]

Because \\(\phi_e<1\\), seepage velocity exceeds Darcy flux.

## How We Detect It

Calculate \\(q\\) from measured heads and a representative \\(K_{sat}\\), or from measured discharge and area. Estimate \\(\phi_e\\) from the connected pore system, then derive \\(v\\). Repeated water or contaminant observations provide a field-scale check on actual transport speed.

Total porosity may include isolated or immobile pores and should not be substituted automatically for effective porosity.

## What the Evidence Means

Both quantities have speed units but answer different questions. Darcy flux describes volume crossing the full section; seepage velocity describes average movement through connected pore space. Neither captures a distribution of fast and slow paths.

Preferential fractures can make first arrivals faster than the average \\(v\\). State whether the decision needs bulk flux or travel speed.

<PhysicsExamples collapsible
  items={[
    {
      title: "Convert flux to pore-water speed",
      question: "A fine-sand aquifer has Ksat = 10 m/day, hydraulic gradient 0.01, and effective porosity 0.30. Find q and v.",
      answer: "**Strategy:** calculate Darcy flux from conductivity and gradient, then divide by connected pore fraction. q = (10 m/day)(0.01) = 0.10 m/day. v = 0.10 m/day / 0.30 = 0.33 m/day. **Interpretation:** water moves through connected pores about 3.3 times faster than the flux based on the whole section.",
    },
    {
      title: "Choose porosity for transport",
      question: "A clayey aquifer has total porosity 0.45 but effective porosity 0.15. Which value belongs in v = q/porosity, and why?",
      answer: "**Strategy:** use the pore fraction that actually carries connected flow. Substituting 0.15 gives the transport-relevant average; using 0.45 would include isolated or poorly mobile water and understate speed. **Interpretation:** even the effective-porosity result is an average, so repeated observations are needed to test preferential pathways.",
    },
  ]}
/>
`;
