export const content = String.raw`## Principle

Put a cold spoon into hot tea and energy moves from the tea to the spoon. We call that moving energy **heat**. An object does not contain heat; it contains internal energy, and heating is one way that energy can be transferred.

## Notation

<Notation
  items={[
    { symbol: "Q", meaning: "heat transferred into an object", unit: "J" },
    { symbol: "T_i,T_f", meaning: "initial and final temperatures", unit: "K, K" },
    { symbol: "\\Delta T", meaning: "temperature change, final minus initial", unit: "K" },
    { symbol: "C", meaning: "heat capacity of the whole object", unit: "J K^{-1}" },
    { symbol: "c", meaning: "specific heat capacity, per kilogram", unit: "J kg^{-1} K^{-1}" },
    { symbol: "m", meaning: "mass", unit: "kg" },
    { symbol: "P,t", meaning: "heating power and time", unit: "W, s" },
  ]}
/>

## The Core Method

Heat is energy crossing a boundary because of a temperature difference. Microscopically, random collisions transfer energy from the hotter side to the colder side without a coherent mechanical displacement.

<PhysicsDiagram slug="microscopic-heat-transfer" />

First find the temperature change:

\\[
\Delta T=T_f-T_i.
\tag*{[1]}
\\]

Heat capacity tells us how much energy must be transferred to raise the temperature of the **whole object** by one kelvin:

\\[
Q=C\Delta T.
\tag*{[2]}
\\]

A large heat capacity means a lot of energy is needed for a small temperature rise. A small heat capacity means the temperature changes easily.

The heat capacity of a larger sample is larger simply because there is more material to heat. Specific heat capacity removes this size effect by giving the heat capacity per kilogram:

\\[
c=\frac{C}{m},
\qquad
C=mc.
\tag*{[3]}
\\]

Substituting equation [3] into equation [2] gives the formula used in most heating calculations:

\\[
Q=mc\Delta T.
\tag*{[4]}
\\]

For fixed mass and specific heat capacity, twice the temperature rise requires twice the energy.

<CartesianGrid
  className="mx-auto max-w-md"
  height={250}
  title="Energy needed to heat 0.200 kg of water"
  caption="The straight line shows that the required energy is proportional to the temperature rise."
  xRange={{ min: 0, max: 80, step: 20, label: "temperature rise (K)" }}
  yRange={{ min: 0, max: 70, step: 10, label: "heat transferred (kJ)" }}
>
  <Curve
    color="var(--chart-1)"
    points={[
      { x: 0, y: 0 },
      { x: 20, y: 16.74 },
      { x: 40, y: 33.47 },
      { x: 60, y: 50.21 },
      { x: 80, y: 66.94 },
    ]}
  />
  <Point x={80} y={66.94} label="80 K needs 66.9 kJ" />
</CartesianGrid>

Equation [4] assumes that \\(c\\) is roughly constant and that the substance does not change phase. During boiling or melting, energy can enter without raising the temperature, so a different calculation is needed.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Heat water for a drink",
      question: "How much heat is needed to raise \\(0.200\\,\\mathrm{kg}\\) of water from \\(20.0\\,{}^\\circ\\mathrm C\\) to \\(100.0\\,{}^\\circ\\mathrm C\\)? Use \\(c=4.184\\times10^3\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\) and ignore heat loss and evaporation.",
      answer: "The temperature rise is \\[\\Delta T=100.0-20.0=80.0\\,\\mathrm K.\\] Use equation \\([4]\\): \\[Q=mc\\Delta T=(0.200)(4.184\\times10^3)(80.0)=6.69\\times10^4\\,\\mathrm J.\\] The answer is positive because energy is transferred into the water. Final result: \\(Q=6.69\\times10^4\\,\\mathrm J=66.9\\,\\mathrm{kJ}\\).",
    },
    {
      title: "Estimate the heating time",
      question: "An ideal \\(2.40\\,\\mathrm{kW}\\) heater supplies the \\(66.9\\,\\mathrm{kJ}\\) needed in the first example. How long does the heating take?",
      answer: "Power is energy transferred per second, so \\(P=Q/t\\). Rearrange for time: \\[t=\\frac{Q}{P}=\\frac{66.9\\times10^3\\,\\mathrm J}{2.40\\times10^3\\,\\mathrm{J\\,s^{-1}}}=27.9\\,\\mathrm s.\\] A real kettle takes longer because some energy heats the kettle and the room. Final result: the ideal heating time is \\(27.9\\,\\mathrm s\\).",
    },
  ]}
/>
`;
