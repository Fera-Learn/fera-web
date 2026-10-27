export const content = String.raw`## Principle

At an equilibrium transition, the molar Gibbs free energy remains continuous. A first-order transition has a discontinuity in a first derivative of that potential and therefore has latent heat or a molar-volume jump. A continuous transition has no latent heat or volume jump, although a second derivative such as heat capacity may jump or diverge.

## Notation

<Notation
  items={[
    { symbol: "\\mu_m", meaning: "molar chemical potential", unit: "J mol^{-1}" },
    { symbol: "p,T,T_c", meaning: "pressure, absolute temperature, and transition temperature", unit: "Pa, K, K" },
    { symbol: "S_m,V_m", meaning: "molar entropy and molar volume", unit: "J mol^{-1} K^{-1}, m^{3} mol^{-1}" },
    { symbol: "C_P", meaning: "molar heat capacity at constant pressure", unit: "J mol^{-1} K^{-1}" },
    { symbol: "L_m", meaning: "molar latent heat", unit: "J mol^{-1}" },
    { symbol: "\\Delta S_m,\\Delta V_m", meaning: "jumps in molar entropy and molar volume across the transition", unit: "J mol^{-1} K^{-1}, m^{3} mol^{-1}" },
  ]}
/>

## The Core Method

Gibbs free energy stays continuous at equilibrium transitions. The classification asks which derivative first fails to remain continuous: a first derivative for first order, or a higher derivative for a continuous transition.

<PhysicsDiagram slug="phase-transition-derivatives" />

At fixed composition, the differential of the molar chemical potential is

\\[
d\mu_m=-S_m\,dT+V_m\,dp.
\tag*{[1]}
\\]

Its first derivatives therefore identify entropy and volume:

\\[
S_m=-\left(\frac{\partial\mu_m}{\partial T}\right)_p,
\qquad
V_m=\left(\frac{\partial\mu_m}{\partial p}\right)_T.
\tag*{[2]}
\\]

For a first-order transition, \\(\mu_m\\) is continuous at coexistence but at least one quantity in equation [2] is discontinuous. The entropy jump gives

\\[
L_m=T_c\Delta S_m,
\qquad \Delta S_m\ne0
\quad\text{or}\quad
\Delta V_m\ne0.
\tag*{[3]}
\\]

Melting, boiling, and sublimation are standard examples. During conversion at fixed coexistence conditions, supplied heat changes phase amount rather than temperature.

For a continuous transition, the first derivatives match across the boundary:

\\[
\Delta S_m=0,
\qquad
\Delta V_m=0,
\qquad
L_m=0.
\tag*{[4]}
\\]

Second derivatives can remain non-analytic. For example,

\\[
C_P=T\left(\frac{\partial S_m}{\partial T}\right)_p
=-T\left(\frac{\partial^2\mu_m}{\partial T^2}\right)_p
\tag*{[5]}
\\]

may jump or diverge. The broad term continuous transition is safer than assuming every such transition has a finite second-derivative discontinuity.

<PhysicsExamples collapsible
  items={[
    {
      title: "Classifying a transition from measurements",
      question: "At \\(T_c=350\\,\\mathrm K\\), a phase change has \\(\\Delta S_m=18\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\) and a finite molar-volume jump. Classify it and find its molar latent heat.",
      answer: "A nonzero entropy jump is a discontinuity in the first derivative identified by equation \\([2]\\), so the transition is first order. Equation \\([3]\\) gives \\[L_m=(350\\,\\mathrm K)(18\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}})=6.3\\times10^3\\,\\mathrm{J\\,mol^{-1}}.\\] **Final result:** the transition is first order and \\(L_m=6.3\\,\\mathrm{kJ\\,mol^{-1}}\\).",
    },
    {
      title: "A lambda-shaped heat-capacity anomaly",
      question: "A transition has no measurable entropy or volume jump, but its heat capacity rises sharply and diverges at the transition temperature. Is the transition first order?",
      answer: "Equation \\([4]\\) shows that zero first-derivative jumps imply zero latent heat. Equation \\([5]\\) allows a heat-capacity non-analyticity because heat capacity is related to a second temperature derivative. A divergence is not itself evidence for latent heat. **Final result:** the transition is continuous, not first order, despite the singular heat capacity.",
    },
  ]}
/>
`;
