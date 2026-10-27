export const content = String.raw`## Principle

A phase boundary is the set of pressures and temperatures at which two phases coexist in equilibrium. Three boundaries meet at a triple point. The liquid-vapour boundary terminates at a critical point, beyond which liquid-like and gas-like states connect continuously and form one supercritical fluid phase.

## Notation

<Notation
  items={[
    { symbol: "p,T", meaning: "pressure and absolute temperature", unit: "Pa, K" },
    { symbol: "p_{\\mathrm t},T_{\\mathrm t}", meaning: "triple-point pressure and temperature", unit: "Pa, K" },
    { symbol: "p_{\\mathrm c},T_{\\mathrm c}", meaning: "critical pressure and temperature", unit: "Pa, K" },
    { symbol: "\\mu_{m,\\alpha},\\mu_{m,\\beta}", meaning: "molar chemical potentials of phases alpha and beta", unit: "J mol^{-1}, J mol^{-1}" },
    { symbol: "\\mathrm s,\\mathrm l,\\mathrm v", meaning: "solid, liquid, and vapour phase labels", unit: "1" },
    { symbol: "\\rho_l,\\rho_v", meaning: "liquid and vapour mass densities", unit: "kg m^{-3}, kg m^{-3}" },
  ]}
/>

## The Core Method

Different projections describe the same substance. The pressure-temperature view emphasizes coexistence lines and special points, while the pressure-volume view shows the two-phase region and critical isotherm.

<PhysicsDiagram slug="single-component-phase-views" />

Two phases \\(\alpha\\) and \\(\beta\\) lie on a common boundary when their molar chemical potentials are equal:

\\[
\mu_{m,\alpha}(p,T)=\mu_{m,\beta}(p,T).
\tag*{[1]}
\\]

At the triple point, the same condition holds for solid, liquid, and vapour:

\\[
\mu_{m,\mathrm s}(p_{\mathrm t},T_{\mathrm t})
=\mu_{m,\mathrm l}(p_{\mathrm t},T_{\mathrm t})
=\mu_{m,\mathrm v}(p_{\mathrm t},T_{\mathrm t}).
\tag*{[2]}
\\]

The triple point is not a region: changing either intensive coordinate generally removes one or two phases from equilibrium. By contrast, approaching the critical point along the liquid-vapour boundary makes the two phases increasingly alike. Their density difference vanishes at the endpoint:

\\[
\lim_{T\to T_{\mathrm c}^{-}}\left(\rho_l-\rho_v\right)=0.
\tag*{[3]}
\\]

A state is conventionally called supercritical only when both \\(T>T_{\mathrm c}\\) and \\(p>p_{\mathrm c}\\). Crossing around the critical endpoint can then connect liquid-like and gas-like states without a first-order transition.

<PhysicsExamples collapsible
  items={[
    {
      title: "Classifying three coordinates",
      question: "A pure substance is examined at a point on its liquid-vapour curve, at the triple point, and above both critical coordinates. State the equilibrium interpretation of each coordinate.",
      answer: "Equation \\([1]\\) gives liquid-vapour coexistence at the first coordinate. Equation \\([2]\\) gives simultaneous solid-liquid-vapour coexistence at the triple point. Above both critical coordinates, equation \\([3]\\) indicates that distinct equilibrium liquid and vapour densities no longer define separate phases. **Final result:** the coordinates represent two-phase coexistence, three-phase coexistence, and one supercritical phase, respectively.",
    },
    {
      title: "Going around the critical point",
      question: "Can a fluid be taken from a liquid-like state to a gas-like state without crossing the liquid-vapour boundary?",
      answer: "Raise the temperature above \\(T_{\\mathrm c}\\), adjust the pressure through the supercritical region, and then lower the pressure before returning to the desired temperature. The path goes around the endpoint rather than through a coexistence curve, so equation \\([1]\\) is never imposed for distinct liquid and vapour phases. **Final result:** yes; a path around the critical point changes liquid-like behaviour into gas-like behaviour continuously.",
    },
  ]}
/>
`;
