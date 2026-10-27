export const content = String.raw`## Principle

Push the plunger of a sealed syringe and the gas pressure rises. Heat the same trapped gas and its pressure also rises. The ideal-gas equation puts these simple relationships into one formula.

## Notation

<Notation
  items={[
    { symbol: "p", meaning: "gas pressure measured from a perfect vacuum", unit: "Pa" },
    { symbol: "V", meaning: "volume occupied by the gas", unit: "m^{3}" },
    { symbol: "n", meaning: "number of moles of gas", unit: "mol" },
    { symbol: "T", meaning: "temperature measured in kelvin", unit: "K" },
    { symbol: "R", meaning: "gas constant, 8.314", unit: "J mol^{-1} K^{-1}" },
  ]}
/>

## The Core Method

For an ideal gas, pressure, volume, amount, and temperature are linked by

\\[
pV=nRT.
\tag*{[1]}
\\]

This equation means the four quantities cannot change independently. If the amount and temperature stay fixed, making the volume smaller must make the pressure larger:

\\[
p=\frac{nRT}{V}.
\tag*{[2]}
\\]

The graph shows that inverse relationship for one mole of gas. Each curve has a fixed temperature.

<CartesianGrid
  className="mx-auto max-w-md"
  height={250}
  title="Pressure rises when a gas is squeezed"
  caption="Pressure-volume curves for one mole of ideal gas. At the same volume, the hotter gas has the greater pressure."
  xRange={{ min: 10, max: 30, step: 5, label: "volume (L)" }}
  yRange={{ min: 0, max: 350, step: 50, label: "pressure (kPa)" }}
>
  <Curve
    color="var(--chart-3)"
    points={[
      { x: 10, y: 166.3 },
      { x: 12.5, y: 133.0 },
      { x: 15, y: 110.9 },
      { x: 20, y: 83.1 },
      { x: 25, y: 66.5 },
      { x: 30, y: 55.4 },
    ]}
    smooth
  />
  <Curve
    color="var(--chart-2)"
    points={[
      { x: 10, y: 249.4 },
      { x: 12.5, y: 199.5 },
      { x: 15, y: 166.3 },
      { x: 20, y: 124.7 },
      { x: 25, y: 99.8 },
      { x: 30, y: 83.1 },
    ]}
    smooth
  />
  <Curve
    color="var(--chart-1)"
    points={[
      { x: 10, y: 332.6 },
      { x: 12.5, y: 266.1 },
      { x: 15, y: 221.7 },
      { x: 20, y: 166.3 },
      { x: 25, y: 133.0 },
      { x: 30, y: 110.9 },
    ]}
    smooth
  />
  <Annotation point={{ x: 20, y: 166.3 }} label="400 K" offset={{ x: 18, y: -20 }} />
  <Annotation point={{ x: 20, y: 124.7 }} label="300 K" offset={{ x: 18, y: 0 }} />
  <Annotation point={{ x: 20, y: 83.1 }} label="200 K" offset={{ x: 18, y: 20 }} />
</CartesianGrid>

The upper curve is hotter. At the same volume, faster-moving particles strike the walls harder and more often, producing a greater pressure.

If the same sealed gas changes from state 1 to state 2, the amount \\(n\\) stays fixed. Equation [1] can then be written as

\\[
\frac{p_1V_1}{T_1}=\frac{p_2V_2}{T_2}.
\tag*{[3]}
\\]

Always use **kelvin** for temperature and **absolute pressure** for pressure. The ideal-gas model works best for a low-density gas whose particles occupy little space and interact only weakly.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Volume of one mole",
      question: "Find the ideal-gas volume of \\(1.000\\,\\mathrm{mol}\\) at \\(273.15\\,\\mathrm K\\) and \\(1.01325\\times10^5\\,\\mathrm{Pa}\\).",
      answer: "We know \\(n\\), \\(T\\), and \\(p\\), so rearrange equation \\([1]\\) for volume: \\[V=\\frac{nRT}{p}.\\] Substitution gives \\[V=\\frac{(1.000)(8.314)(273.15)}{1.01325\\times10^5}=2.241\\times10^{-2}\\,\\mathrm{m^3}.\\] Since \\(1\\,\\mathrm{m^3}=1000\\,\\mathrm L\\), this is \\(22.41\\,\\mathrm L\\). Final result: \\(V=2.241\\times10^{-2}\\,\\mathrm{m^3}=22.41\\,\\mathrm L\\).",
    },
    {
      title: "Heat a rigid gas container",
      question: "A fixed amount of ideal gas is heated from \\(300\\,\\mathrm K\\) to \\(450\\,\\mathrm K\\) in a rigid container. Its initial pressure is \\(2.00\\times10^5\\,\\mathrm{Pa}\\). Find its final pressure.",
      answer: "The container is rigid, so its volume does not change. The amount of gas is also fixed. Equation \\([3]\\) therefore reduces to \\(p_1/T_1=p_2/T_2\\). Rearranging and substituting, \\[p_2=p_1\\frac{T_2}{T_1}=(2.00\\times10^5)\\frac{450}{300}=3.00\\times10^5\\,\\mathrm{Pa}.\\] Final result: the final pressure is \\(3.00\\times10^5\\,\\mathrm{Pa}\\).",
    },
  ]}
/>
`;
