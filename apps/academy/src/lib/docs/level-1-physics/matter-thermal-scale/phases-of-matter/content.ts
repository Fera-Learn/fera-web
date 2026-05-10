export const content = String.raw`## Principle

Phase diagrams show which phase of matter is stable for a given pressure and temperature.

Phase boundaries mark conditions where two phases can coexist in equilibrium.

## Notation

<Notation
  items={[
    { symbol: "p", meaning: "pressure", unit: "Pa" },
    { symbol: "T", meaning: "absolute temperature", unit: "K" },
    { symbol: "L", meaning: "latent heat per unit mass", unit: "J kg^{-1}" },
    { symbol: "T_t,p_t", meaning: "triple-point temperature and pressure", unit: "K, Pa" },
    { symbol: "T_c,p_c", meaning: "critical temperature and pressure", unit: "K, Pa" },
    { symbol: "\\Delta s", meaning: "specific entropy change across a transition", unit: "J kg^{-1} K^{-1}" },
    { symbol: "\\Delta v", meaning: "specific volume change across a transition", unit: "m^{3} kg^{-1}" },
  ]}
/>

## Method

### Derivation 1: Read a phase diagram

A point in the \\(p\\)-\\(T\\) plane usually lies inside one phase region. A point on a boundary represents phase equilibrium.

<PhysicsDerivation
  items={[
    {
      label: "Single phase",
      tex: "(p,T)\\ \\text{inside a region}\\Rightarrow\\text{one stable phase}",
    },
    {
      label: "Phase boundary",
      tex: "(p,T)\\ \\text{on a boundary}\\Rightarrow\\text{two phases coexist}",
    },
    {
      label: "Triple point",
      tex: "(p_t,T_t)\\Rightarrow\\text{solid, liquid, and gas coexist}",
    },
    {
      label: "Critical point",
      tex: "(p_c,T_c)\\Rightarrow\\text{liquid-gas distinction ends}",
    },
  ]}
/>

### Derivation 2: Connect boundary slope to transition properties

Along a phase boundary, both phases remain in equilibrium as pressure and temperature change together. The Clapeyron relation links the boundary slope to latent heat and volume change.

<PhysicsDerivation
  items={[
    {
      label: "Entropy jump",
      tex: "\\Delta s=\\frac{L}{T}",
    },
    {
      label: "Boundary slope",
      tex: "\\frac{dp}{dT}=\\frac{\\Delta s}{\\Delta v}",
    },
    {
      label: "Clapeyron form",
      tex: "\\frac{dp}{dT}=\\frac{L}{T\\Delta v}",
    },
  ]}
/>

If pressure is below the triple-point pressure, a liquid phase cannot exist for that substance; heating a solid then leads to sublimation rather than melting followed by boiling.

## Rules

These are the compact phase-diagram relations.

<Equation label="Phase boundary" tex="\text{two phases coexist on a boundary}" />

<Equation label="Triple point" tex="\text{solid}+\text{liquid}+\text{gas coexist}" />

<Equation label="Critical point" tex="T>T_c\Rightarrow\text{no sharp liquid-gas boundary}" />

<Equation label="Clapeyron relation" tex="\frac{dp}{dT}=\frac{L}{T\Delta v}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A substance is below its triple-point pressure. What phase change occurs when its solid is heated at that pressure?",
      answer: "The liquid phase is not stable below the triple-point pressure, so the solid changes directly to gas by sublimation.",
    },
    {
      title: "Example 2",
      question: "For a liquid-vapor transition, the vapor specific volume is much larger than the liquid specific volume. If \\(L>0\\), what is the sign of \\(dp/dT\\) on the vaporization curve?",
      answer: "For vaporization, \\(\\Delta v=v_{\\mathrm{gas}}-v_{\\mathrm{liquid}}>0\\). With \\(L>0\\) and \\(T>0\\), \\[\\frac{dp}{dT}=\\frac{L}{T\\Delta v}>0\\] The vaporization curve has positive slope.",
    },
  ]}
/>

## Checks

- A phase boundary is not a region; it is a coexistence line.
- The triple point is a unique pressure-temperature condition.
- Above the critical point, liquid and gas are not separated by a sharp phase transition.
- Sublimation occurs when solid changes directly to gas.`;
