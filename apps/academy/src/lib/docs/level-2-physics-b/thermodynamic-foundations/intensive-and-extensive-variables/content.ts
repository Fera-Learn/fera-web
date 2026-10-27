export const content = String.raw`## Principle

Imagine joining two identical cups of water. You now have twice as much water, but the water is not twice as hot. Quantities that grow with the amount of material are called **extensive**; quantities that stay the same are called **intensive**.

## Notation

<Notation
  items={[
    { symbol: "m", meaning: "mass", unit: "kg" },
    { symbol: "V", meaning: "volume", unit: "m^{3}" },
    { symbol: "T", meaning: "temperature", unit: "K" },
    { symbol: "p", meaning: "pressure", unit: "Pa" },
    { symbol: "\\rho", meaning: "mass density", unit: "kg m^{-3}" },
    { symbol: "F,A", meaning: "force and the area over which it acts", unit: "N, m^{2}" },
  ]}
/>

## The Core Method

Start with two identical samples in the same condition. When they are combined, their masses and volumes add, while their common temperature remains unchanged:

\\[
m_{\mathrm{new}}=2m,
\qquad
V_{\mathrm{new}}=2V,
\qquad
T_{\mathrm{new}}=T.
\tag*{[1]}
\\]

Mass and volume are therefore **extensive**. Temperature is **intensive**.

<CartesianGrid
  className="mx-auto max-w-md"
  height={250}
  title="What changes when identical samples are combined?"
  caption="The extensive quantity grows with the number of samples. The intensive quantity stays at its original value."
  xRange={{ min: 1, max: 3, step: 0.5, label: "number of identical samples" }}
  yRange={{ min: 0, max: 3, step: 0.5, label: "value compared with one sample" }}
>
  <Curve
    color="var(--chart-1)"
    points={[
      { x: 1, y: 1 },
      { x: 1.5, y: 1.5 },
      { x: 2, y: 2 },
      { x: 2.5, y: 2.5 },
      { x: 3, y: 3 },
    ]}
  />
  <Curve
    color="var(--chart-2)"
    points={[
      { x: 1, y: 1 },
      { x: 1.5, y: 1 },
      { x: 2, y: 1 },
      { x: 2.5, y: 1 },
      { x: 3, y: 1 },
    ]}
  />
  <Annotation point={{ x: 2.2, y: 2.2 }} label="extensive: grows" offset={{ x: 18, y: -18 }} />
  <Annotation point={{ x: 2.2, y: 1 }} label="intensive: unchanged" offset={{ x: 18, y: -18 }} />
</CartesianGrid>

Density is mass divided by volume. Doubling an identical sample doubles both numbers, so they cancel:

\\[
\rho=\frac{m}{V},
\qquad
\rho_{\mathrm{new}}=\frac{2m}{2V}=\rho.
\tag*{[2]}
\\]

Density is therefore intensive. Pressure behaves in the same way: a larger roof feels more total force from rain, but it also has more area.

\\[
p=\frac{F}{A},
\qquad
p_{\mathrm{new}}=\frac{2F}{2A}=p.
\tag*{[3]}
\\]

The quickest test is simple: **combine identical samples**. If the value adds, it is extensive; if it stays the same, it is intensive.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Combine two water samples",
      question: "Two identical water samples each have mass \\(0.500\\,\\mathrm{kg}\\), volume \\(5.00\\times10^{-4}\\,\\mathrm{m^3}\\), and temperature \\(300\\,\\mathrm K\\). Find the mass, volume, density, and temperature after they are combined without loss.",
      answer: "Mass and volume add, so the new mass is \\(1.00\\,\\mathrm{kg}\\) and the new volume is \\(1.00\\times10^{-3}\\,\\mathrm{m^3}\\). Density is \\[\\rho=\\frac{1.00}{1.00\\times10^{-3}}=1.00\\times10^3\\,\\mathrm{kg\\,m^{-3}}.\\] Both samples began at the same temperature, so the combined water remains at \\(300\\,\\mathrm K\\). Final result: mass and volume double; density and temperature stay unchanged.",
    },
    {
      title: "Force versus pressure",
      question: "A roof is doubled in area while the average rain force per square metre stays the same. What happens to the total force and pressure?",
      answer: "The larger roof catches twice as many drops, so the total force doubles: \\(F_{\\mathrm{new}}=2F\\). Its area also doubles: \\(A_{\\mathrm{new}}=2A\\). Therefore \\[p_{\\mathrm{new}}=\\frac{2F}{2A}=p.\\] Final result: force is extensive and doubles; pressure is intensive and stays the same.",
    },
  ]}
/>
`;
