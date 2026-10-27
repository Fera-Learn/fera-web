export const content = String.raw`## Principle

A gas contains far too many particles to follow one by one. Thermodynamics works because a huge group of particles behaves much more steadily than any individual particle, so we can describe the whole gas using pressure, volume, and temperature.

## Notation

<Notation
  items={[
    { symbol: "N", meaning: "number of particles", unit: "1" },
    { symbol: "n", meaning: "number of moles", unit: "mol" },
    { symbol: "N_{\\mathrm A}", meaning: "number of particles in one mole", unit: "mol^{-1}" },
    { symbol: "\\langle X\\rangle", meaning: "average value of a measured quantity" },
    { symbol: "\\sigma_X", meaning: "typical size of its random fluctuation" },
    { symbol: "p,V,T", meaning: "pressure, volume, and temperature", unit: "Pa, m^{3}, K" },
  ]}
/>

## The Core Method

Think about raindrops landing on a roof. On a tiny roof you hear separate drops, but on a huge roof the impacts blend into a nearly steady sound. Gas particles behave in the same way: individual collisions are random, but billions of billions of collisions produce steady measurements.

One mole already contains an enormous number of particles:

\\[
N=nN_{\mathrm A},
\qquad
N_{\mathrm A}=6.022\times10^{23}\,\mathrm{mol^{-1}}.
\tag*{[1]}
\\]

The number is enormous: counting one billion particles every second would still take about 19 million years to count one mole. We do not need to calculate every collision; we measure the average effect of all of them.

As the number of particles increases, the random wobble becomes smaller compared with the average value. When the particles' random motions are mostly independent,

\\[
\frac{\text{typical fluctuation}}{\text{average value}}
=\frac{\sigma_X}{\langle X\rangle}
\approx\frac{1}{\sqrt{N}}.
\tag*{[2]}
\\]

<CartesianGrid
  className="mx-auto max-w-md"
  height={250}
  title="Large groups look steadier"
  caption="Adding more independent particles makes the random fluctuation smaller compared with the average value."
  xRange={{ min: 1, max: 100, step: 20, label: "number of particles (relative scale)" }}
  yRange={{ min: 0, max: 1, step: 0.2, label: "fluctuation compared with average" }}
>
  <Curve
    color="var(--chart-1)"
    points={[
      { x: 1, y: 1 },
      { x: 4, y: 0.5 },
      { x: 9, y: 0.333 },
      { x: 16, y: 0.25 },
      { x: 25, y: 0.2 },
      { x: 36, y: 0.167 },
      { x: 49, y: 0.143 },
      { x: 64, y: 0.125 },
      { x: 81, y: 0.111 },
      { x: 100, y: 0.1 },
    ]}
    smooth
  />
  <Annotation point={{ x: 36, y: 0.167 }} label="more particles, less wobble" offset={{ x: 24, y: -28 }} />
</CartesianGrid>

This is the **thermodynamic limit**: not the claim that a real sample is infinite, but the useful approximation that it contains enough particles for small random fluctuations to be ignored.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "How steady is one mole?",
      question: "Use the simple fluctuation model to estimate the relative fluctuation in a sample containing one mole of particles.",
      answer: "One mole contains \\(N=6.022\\times10^{23}\\) particles. Substitute this into equation \\([2]\\): \\[\\frac{1}{\\sqrt{N}}=\\frac{1}{\\sqrt{6.022\\times10^{23}}}=1.29\\times10^{-12}.\\] This is about one part in a trillion, so the measured bulk value appears steady. Final result: the relative fluctuation is approximately \\(1.29\\times10^{-12}\\).",
    },
    {
      title: "Small roof, large roof",
      question: "Why do individual raindrops sound obvious on a tiny roof but blend into a steady noise on a large roof?",
      answer: "Only a few drops hit the tiny roof at once, so each impact noticeably changes the total force. Many drops hit the large roof at once, and unusually large and small impacts average one another out. The large roof experiences a greater total force, but that force varies by a much smaller fraction of its average value. Final result: large numbers smooth out random variation.",
    },
  ]}
/>
`;
