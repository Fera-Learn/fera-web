export const content = String.raw`## Principle

The Faraday effect is magnetically induced circular birefringence. Its rotation is non-reciprocal: on a retraced path the rotation has the same sense in fixed laboratory transverse axes, so forward and return rotations add rather than cancel.

## Notation

<Notation
  items={[
    { symbol: "V", meaning: "Verdet coefficient", unit: "rad T^{-1} m^{-1}" },
    { symbol: "\\vec B,B_\\parallel", meaning: "magnetic field and signed component along the local propagation direction", unit: "T, T" },
    { symbol: "\\hat k", meaning: "local propagation unit vector" },
    { symbol: "l", meaning: "magneto-optic path length", unit: "m" },
    { symbol: "\\beta_{\\mathrm{loc}},\\beta_{\\mathrm{lab}}", meaning: "rotation in local beam-view and fixed laboratory conventions", unit: "rad, rad" },
    { symbol: "\\beta_{\\mathrm{lab,f}},\\beta_{\\mathrm{lab,b}},\\beta_{\\mathrm{round}}", meaning: "forward, backward, and round-trip fixed-axis rotations", unit: "rad" },
  ]}
/>

## The Core Method

For one pass, the local signed rotation is

\\[
\beta_{\mathrm{loc}}=VB_\parallel l,
\qquad B_\parallel=\vec B\cdot\hat k.
\tag*{[1]}
\\]

Reversing propagation changes \\(\hat k\\) and therefore the local sign:

\\[
\hat k\longmapsto-\hat k,
\qquad B_\parallel\longmapsto-B_\parallel,
\qquad \beta_{\mathrm{loc}}\longmapsto-\beta_{\mathrm{loc}}.
\tag*{[2]}
\\]

However, the observer direction used to define positive rotation also reverses. Converting both passes to the same fixed laboratory axes introduces a second sign reversal, so

\\[
\beta_{\mathrm{lab,b}}=\beta_{\mathrm{lab,f}},
\qquad
\beta_{\mathrm{round}}=2\beta_{\mathrm{lab,f}}.
\tag*{[3]}
\\]

This is non-reciprocity. It does not mean that the scalar projection in [1] stays unchanged; it means that the physical rotation accumulates in the same laboratory sense after all coordinate reversals are handled consistently.

<PhysicsExamples collapsible
  items={[
    {
      title: "Single-pass and round-trip Faraday rotation",
      question: "A material has \\(V=40.0\\,\\mathrm{rad\\,T^{-1}m^{-1}}\\), \\(B_\\parallel=0.500\\,\\mathrm T\\), and \\(l=20.0\\,\\mathrm{mm}\\). Find the single-pass magnitude and fixed-axis round-trip rotation.",
      answer: "Equation \\([1]\\) gives \\[|\\beta|=|V B_\\parallel l|=40.0(0.500)(20.0\\times10^{-3})=0.400\\,\\mathrm{rad}.\\] By \\([3]\\), the return adds the same laboratory rotation: \\[|\\beta_{\\mathrm{round}}|=2(0.400)=0.800\\,\\mathrm{rad}.\\] **Final result:** single-pass magnitude \\(0.400\\,\\mathrm{rad}\\); round-trip magnitude \\(0.800\\,\\mathrm{rad}\\).",
    },
    {
      title: "Reversing the magnetic field",
      question: "What happens to the Faraday rotation if the applied magnetic field is reversed while propagation is unchanged?",
      answer: "With \\(\\hat k\\) fixed, \\([1]\\) gives \\(B_\\parallel\\mapsto-B_\\parallel\\), so \\(\\beta_{\\mathrm{loc}}\\mapsto-\\beta_{\\mathrm{loc}}\\). The laboratory viewing convention has not changed. **Final result:** reversing the magnetic field reverses the Faraday rotation.",
    },
  ]}
/>
`;
