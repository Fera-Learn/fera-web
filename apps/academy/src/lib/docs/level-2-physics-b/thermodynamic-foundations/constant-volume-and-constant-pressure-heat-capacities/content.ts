export const content = String.raw`## Principle

Heating a gas in a rigid tank is not the same as heating it beneath a movable piston. In the tank, the gas cannot expand. Beneath the piston, some of the supplied energy is used to push the piston upward, so more heat is needed for the same temperature rise.

## Notation

<Notation
  items={[
    { symbol: "C_V", meaning: "heat capacity per mole when volume is fixed", unit: "J mol^{-1} K^{-1}" },
    { symbol: "C_P", meaning: "heat capacity per mole when pressure is fixed", unit: "J mol^{-1} K^{-1}" },
    { symbol: "Q_V,Q_P", meaning: "heat supplied at fixed volume and fixed pressure", unit: "J, J" },
    { symbol: "n", meaning: "number of moles of gas", unit: "mol" },
    { symbol: "\\Delta T", meaning: "temperature rise", unit: "K" },
    { symbol: "R", meaning: "gas constant, 8.314", unit: "J mol^{-1} K^{-1}" },
    { symbol: "\\gamma", meaning: "ratio of the two heat capacities, C_P divided by C_V", unit: "1" },
  ]}
/>

## The Core Method

Always look at the container before choosing a heat capacity:

- **Rigid container:** the volume cannot change, so use \\(C_V\\).
- **Movable piston with a fixed load:** the pressure stays constant as the gas expands, so use \\(C_P\\).

If the heat capacities are approximately constant, the required heats are

\\[
Q_V=nC_V\Delta T,
\qquad
Q_P=nC_P\Delta T.
\tag*{[1]}
\\]

Both processes raise the gas temperature by the same amount. At constant pressure, however, the expanding gas also pushes the surroundings. That extra energy requirement means

\\[
C_P>C_V.
\tag*{[2]}
\\]

For a monatomic ideal gas—one atom per gas particle, as in helium when the particles are far apart—

\\[
C_V=\frac{3}{2}R,
\qquad
C_P=\frac{5}{2}R.
\tag*{[3]}
\\]

The constant-pressure line is steeper because each kelvin of temperature rise requires more heat.

<CartesianGrid
  className="mx-auto max-w-md"
  height={250}
  title="Heating one mole of monatomic ideal gas"
  caption="The same temperature rise requires more heat at constant pressure than at constant volume."
  xRange={{ min: 0, max: 60, step: 10, label: "temperature rise (K)" }}
  yRange={{ min: 0, max: 1300, step: 200, label: "heat supplied (J)" }}
>
  <Curve
    color="var(--chart-2)"
    points={[
      { x: 0, y: 0 },
      { x: 10, y: 124.7 },
      { x: 20, y: 249.4 },
      { x: 30, y: 374.1 },
      { x: 40, y: 498.8 },
      { x: 50, y: 623.6 },
      { x: 60, y: 748.3 },
    ]}
  />
  <Curve
    color="var(--chart-1)"
    points={[
      { x: 0, y: 0 },
      { x: 10, y: 207.9 },
      { x: 20, y: 415.7 },
      { x: 30, y: 623.6 },
      { x: 40, y: 831.4 },
      { x: 50, y: 1039.3 },
      { x: 60, y: 1247.1 },
    ]}
  />
  <Annotation point={{ x: 45, y: 935.6 }} label="constant pressure" offset={{ x: -34, y: -22 }} />
  <Annotation point={{ x: 45, y: 561.2 }} label="constant volume" offset={{ x: -34, y: 24 }} />
</CartesianGrid>

The ratio of the two values is written \\(\gamma=C_P/C_V\\). For a monatomic ideal gas,

\\[
\gamma=\frac{5/2}{3/2}=\frac{5}{3}.
\tag*{[4]}
\\]

These particular values do not apply to every gas. Molecules with rotational or vibrational motion can store energy in additional ways, changing both heat capacities.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Compare two ways of heating helium",
      question: "Treat \\(2.00\\,\\mathrm{mol}\\) of helium as a monatomic ideal gas. Find the heat needed for a \\(40.0\\,\\mathrm K\\) rise at constant volume and at constant pressure.",
      answer: "From equation \\([3]\\), \\(C_V=12.47\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\) and \\(C_P=20.79\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\). Use equation \\([1]\\): \\[Q_V=(2.00)(12.47)(40.0)=9.98\\times10^2\\,\\mathrm J,\\] \\[Q_P=(2.00)(20.79)(40.0)=1.66\\times10^3\\,\\mathrm J.\\] Final result: constant volume needs \\(998\\,\\mathrm J\\); constant pressure needs \\(1.66\\,\\mathrm{kJ}\\).",
    },
    {
      title: "Choose the correct heat capacity",
      question: "The same gas is heated once in a sealed rigid tank and once beneath a freely moving piston carrying a constant load. Which heat capacity applies in each case?",
      answer: "The rigid tank cannot change volume, so use \\(C_V\\). The movable piston rises while its load keeps the pressure constant, so use \\(C_P\\). Final result: rigid tank → \\(C_V\\); constant-load piston → \\(C_P\\).",
    },
  ]}
/>
`;
