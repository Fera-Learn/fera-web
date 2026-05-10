export const content = String.raw`## Principle

Most materials change size when their temperature changes, and the change is approximately proportional to the original size and the temperature interval.

If expansion is prevented, the missing expansion appears as mechanical strain and produces thermal stress.

## Notation

<Notation
  items={[
    { symbol: "L_0", meaning: "initial length", unit: "m" },
    { symbol: "V_0", meaning: "initial volume", unit: "m^{3}" },
    { symbol: "\\Delta T", meaning: "temperature change", unit: "K" },
    { symbol: "\\Delta L", meaning: "change in length", unit: "m" },
    { symbol: "\\Delta V", meaning: "change in volume", unit: "m^{3}" },
    { symbol: "\\alpha", meaning: "coefficient of linear expansion", unit: "K^{-1}" },
    { symbol: "\\beta", meaning: "coefficient of volume expansion", unit: "K^{-1}" },
    { symbol: "Y", meaning: "Young modulus", unit: "Pa" },
  ]}
/>

## Method

For modest temperature intervals, the first-order model keeps only the term proportional to \\(\\Delta T\\). That gives a linear rule for each dimension.

<PhysicsDerivation
  items={[
    {
      label: "Free linear strain",
      tex: "\\frac{\\Delta L}{L_0}=\\alpha\\Delta T",
    },
    {
      label: "Length change",
      tex: "\\Delta L=\\alpha L_0\\Delta T",
    },
    {
      label: "Final length",
      tex: "L=L_0(1+\\alpha\\Delta T)",
    },
  ]}
/>

For an isotropic solid, every linear dimension expands by the same fraction. A cube with side \\(L\\) has volume \\(V=L^3\\), so the first-order volume expansion is about three times the linear expansion.

<PhysicsDerivation
  items={[
    {
      label: "Expanded cube",
      tex: "V=V_0(1+\\alpha\\Delta T)^3",
    },
    {
      label: "First-order expansion",
      tex: "V\\approx V_0(1+3\\alpha\\Delta T)",
    },
    {
      label: "Solid volume coefficient",
      tex: "\\beta\\approx3\\alpha",
    },
  ]}
/>

If a rod is clamped so its length cannot change, the thermal strain and mechanical strain must cancel.

<PhysicsDerivation
  items={[
    {
      label: "Total strain fixed",
      tex: "\\frac{\\Delta L}{L_0}=\\alpha\\Delta T+\\frac{F/A}{Y}=0",
    },
    {
      label: "Thermal stress",
      tex: "\\frac{F}{A}=-Y\\alpha\\Delta T",
    },
  ]}
/>

## Rules

These are the compact thermal-expansion relations.

<Equation label="Linear expansion" tex="\Delta L=\alpha L_0\Delta T" />

<Equation label="Final length" tex="L=L_0(1+\alpha\Delta T)" />

<Equation label="Volume expansion" tex="\Delta V=\beta V_0\Delta T" />

<Equation label="Isotropic solid" tex="\beta\approx3\alpha" />

<Equation label="Constrained stress" tex="\frac{F}{A}=-Y\alpha\Delta T" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A steel rail has length \\(18.0\\,\\mathrm{m}\\) at \\(10\\,\\mathrm{^\\circ C}\\). Estimate its length increase at \\(40\\,\\mathrm{^\\circ C}\\) using \\(\\alpha=1.2\\times10^{-5}\\,\\mathrm{K^{-1}}\\).",
      answer: "\\[\\Delta T=30\\,\\mathrm{K}\\] \\[\\Delta L=\\alpha L_0\\Delta T=(1.2\\times10^{-5})(18.0)(30)=6.48\\times10^{-3}\\,\\mathrm{m}\\] The increase is about \\(6.5\\,\\mathrm{mm}\\).",
    },
    {
      title: "Example 2",
      question: "An aluminum bar is rigidly held at fixed length while its temperature rises by \\(25\\,\\mathrm{K}\\). Estimate the stress using \\(Y=7.0\\times10^{10}\\,\\mathrm{Pa}\\) and \\(\\alpha=2.3\\times10^{-5}\\,\\mathrm{K^{-1}}\\).",
      answer: "\\[\\frac{F}{A}=-Y\\alpha\\Delta T=-(7.0\\times10^{10})(2.3\\times10^{-5})(25)=-4.0\\times10^7\\,\\mathrm{Pa}\\] The negative sign means the stress is compressive for heating under fixed length.",
    },
  ]}
/>

## Checks

- Use a temperature interval in kelvins or Celsius degrees; the interval size is the same.
- Holes in a freely expanding solid expand with the surrounding material.
- The approximation assumes \\(|\\alpha\\Delta T|\\ll1\\).
- Constrained expansion can produce large stresses even when the free length change is small.`;
