export const content = String.raw`## Principle

A system is in **equilibrium** when its large-scale properties have stopped changing and there is no continuing flow or imbalance inside it. A **state function** describes the system at that moment; it depends on where the system starts and finishes, not on the route taken between them.

## Notation

<Notation
  items={[
    { symbol: "p,V,T", meaning: "pressure, volume, and temperature", unit: "Pa, m^{3}, K" },
    { symbol: "U", meaning: "internal energy", unit: "J" },
    { symbol: "X_i,X_f", meaning: "initial and final values of any state function" },
    { symbol: "\\Delta X", meaning: "change in that state function" },
    { symbol: "Q", meaning: "heat transferred into the system", unit: "J" },
    { symbol: "W", meaning: "work done by the system", unit: "J" },
  ]}
/>

## The Core Method

An equilibrium state is one point on the allowed state surface. A process is a path across that surface, and different paths may share the same initial and final states.

<PhysicsDiagram slug="thermodynamic-state-surface-paths" />

A hot drink left in a room is not initially in equilibrium: its temperature is changing. After enough time, its temperature becomes steady and matches the room. Pressure, volume, and temperature are examples of properties used to describe an equilibrium state.

For any state function \\(X\\), its change is simply final value minus initial value:

\\[
\Delta X=X_f-X_i.
\tag*{[1]}
\\]

Think of altitude on a walk. Your change in altitude depends only on the start and finish, even though the distance walked depends on the route. State functions behave like altitude; heat and work behave like the route.

The graph shows two ways for a gas to move between the same initial and final states.

<CartesianGrid
  className="mx-auto max-w-md"
  height={250}
  title="Same start and finish, different routes"
  caption="The arrows show the direction from start to finish. Work is the area between each horizontal expansion and the p = 0 axis."
  xRange={{ min: 0, max: 3.5, step: 0.5, label: "volume (L)" }}
  yRange={{ min: 0, max: 250, step: 50, label: "pressure (kPa)" }}
>
  <Curve
    color="var(--chart-1)"
    endArrow
    points={[
      { x: 1, y: 200 },
      { x: 3, y: 200 },
      { x: 3, y: 100 },
    ]}
  />
  <Curve
    color="var(--chart-2)"
    endArrow
    points={[
      { x: 1, y: 200 },
      { x: 1, y: 100 },
      { x: 3, y: 100 },
    ]}
  />
  <Point x={1} y={200} label="start" />
  <Point x={3} y={100} label="finish" />
  <Annotation point={{ x: 2, y: 200 }} label="route A" offset={{ x: -10, y: -22 }} />
  <Annotation point={{ x: 2, y: 100 }} label="route B" offset={{ x: -10, y: -22 }} />
</CartesianGrid>

When a gas expands slowly enough for its pressure to remain well defined, its work is the area under the pressure-volume path:

\\[
W=\int p\,dV.
\tag*{[2]}
\\]

The zero-pressure baseline now makes both work areas visible. Route A expands at the higher pressure, so the rectangle beneath its horizontal segment is larger and the gas does more work. Yet both routes have the same \\(\Delta p\\), \\(\Delta V\\), \\(\Delta T\\), and \\(\Delta U\\) because those are changes in state functions.

If a process returns to its starting state, every state function returns to its starting value:

\\[
\Delta X_{\mathrm{cycle}}=0.
\tag*{[3]}
\\]

Heat and work can still be transferred during the cycle because they describe the journey, not the state.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Work along two routes",
      question: "A gas expands from \\(1.00\\times10^{-3}\\,\\mathrm{m^3}\\) to \\(3.00\\times10^{-3}\\,\\mathrm{m^3}\\). Route A expands at \\(2.00\\times10^5\\,\\mathrm{Pa}\\); route B expands at \\(1.00\\times10^5\\,\\mathrm{Pa}\\). Compare the work done.",
      answer: "For each horizontal part of the graph, the area is pressure multiplied by the volume change. The volume change is \\(2.00\\times10^{-3}\\,\\mathrm{m^3}\\). Therefore \\[W_A=(2.00\\times10^5)(2.00\\times10^{-3})=400\\,\\mathrm J,\\] \\[W_B=(1.00\\times10^5)(2.00\\times10^{-3})=200\\,\\mathrm J.\\] The vertical parts have no volume change, so they do no boundary work. Final result: route A gives \\(400\\,\\mathrm J\\), while route B gives \\(200\\,\\mathrm J\\).",
    },
    {
      title: "Return to the starting state",
      question: "A system completes a cycle and returns to its initial pressure, volume, temperature, and internal energy. What must be zero, and what may be non-zero?",
      answer: "The start and finish are the same state, so every state-function change is zero. In particular, \\(\\Delta p=\\Delta V=\\Delta T=\\Delta U=0\\). The system may still have received heat and done work while moving around the cycle. Final result: all state-function changes are zero, but the total heat and work need not be zero individually.",
    },
  ]}
/>
`;
