export const content = String.raw`## Principle

Projectile motion uses one shared time variable with horizontal acceleration zero and vertical acceleration downward.

The model applies after launch when air resistance is ignored and gravity is the only force.

## Notation

<Notation
  items={[
    { symbol: "x,y", meaning: "horizontal and vertical positions", unit: "m" },
    { symbol: "v_0", meaning: "launch speed", unit: "m s^{-1}" },
    { symbol: "\\theta", meaning: "launch angle above horizontal", unit: "rad or deg" },
    { symbol: "g", meaning: "gravitational field strength", unit: "m s^{-2}" },
    { symbol: "R", meaning: "level-ground range", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Resolve the launch velocity

The initial velocity is a vector. The horizontal component uses the adjacent projection; the vertical component uses the opposite projection.

<PhysicsDerivation
  items={[
    {
      label: "Horizontal component",
      tex: "v_{0x}=v_0\\cos\\theta",
    },
    {
      label: "Vertical component",
      tex: "v_{0y}=v_0\\sin\\theta",
    },
    {
      label: "Initial velocity vector",
      tex: "\\vec v_0=v_0\\cos\\theta\\,\\hat{\\imath}+v_0\\sin\\theta\\,\\hat{\\jmath}",
    },
  ]}
/>

### Derivation 2: Separate the two component models

Gravity gives vertical acceleration only. The horizontal equation and vertical equation are linked by the same time variable.

<PhysicsDerivation
  items={[
    {
      label: "Horizontal acceleration",
      tex: "a_x=0\\Rightarrow v_x=v_0\\cos\\theta",
    },
    {
      label: "Horizontal position",
      tex: "x=x_0+v_0\\cos\\theta\\,t",
    },
    {
      label: "Vertical position",
      tex: "y=y_0+v_0\\sin\\theta\\,t-\\frac12gt^2",
      note: "Both component equations use the same \\(t\\).",
    },
  ]}
/>

### Derivation 3: Derive the level-ground range

The range formula is not a general projectile formula. It assumes the landing height equals the launch height.

<PhysicsDerivation
  items={[
    {
      label: "Set level-ground landing",
      tex: "0=v_0\\sin\\theta\\,t-\\frac12gt^2",
    },
    {
      label: "Nonzero flight time",
      tex: "t_f=\\frac{2v_0\\sin\\theta}{g}",
    },
    {
      label: "Insert into horizontal motion",
      tex: "R=v_0\\cos\\theta\\,t_f=\\frac{v_0^2\\sin2\\theta}{g}",
      note: "The last step uses \\(2\\sin\\theta\\cos\\theta=\\sin2\\theta\\).",
    },
  ]}
/>

The sketch shows the model separation: horizontal motion is uniform, while vertical motion curves because acceleration is downward.

<CartesianPhysicsGraph
  title="Projectile decomposition"
  caption="The path curves because only the vertical component accelerates."
  width={520}
  height={300}
  xRange={{ min: 0, max: 10, step: 2, label: "x" }}
  yRange={{ min: 0, max: 5, step: 1, label: "y" }}
  curves={[
    {
      label: "trajectory",
      smooth: true,
      points: [
        { x: 0, y: 0 },
        { x: 1.5, y: 1.55 },
        { x: 3, y: 2.45 },
        { x: 4.5, y: 2.75 },
        { x: 6, y: 2.45 },
        { x: 7.5, y: 1.55 },
        { x: 8.7, y: 0.25 },
      ],
    },
  ]}
  vectors={[
    {
      label: "\\vec v_0",
      from: { x: 0, y: 0 },
      to: { x: 1.6, y: 1.65 },
      color: "var(--chart-3)",
    },
  ]}
/>

## Rules

These are the compact results from the derivations above.

<Equation label="Horizontal position" tex="x=x_0+v_0\cos\theta\,t" />

<Equation label="Vertical position" tex="y=y_0+v_0\sin\theta\,t-\frac12gt^2" />

<Equation label="Horizontal velocity" tex="v_x=v_0\cos\theta" />

<Equation label="Vertical velocity" tex="v_y=v_0\sin\theta-gt" />

<Equation label="Level-ground range" tex="R=\frac{v_0^2\sin2\theta}{g}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A projectile is launched at \\(20\\,\\mathrm{m\\,s^{-1}}\\) and \\(30^\\circ\\) from level ground. Find its flight time.",
      answer: "First resolve the vertical component: \\[v_{0y}=20\\sin30^\\circ=10\\,\\mathrm{m\\,s^{-1}}\\] For level ground, \\[0=v_{0y}t-\\frac12gt^2\\] The nonzero solution is \\[t=\\frac{2v_{0y}}{g}=\\frac{20}{9.8}=2.04\\,\\mathrm{s}\\]",
    },
    {
      title: "Example 2",
      question: "A ball rolls horizontally from a \\(5\\,\\mathrm{m}\\) high table at \\(3\\,\\mathrm{m\\,s^{-1}}\\). Find the time to hit the floor and horizontal distance.",
      answer: "The initial vertical velocity is zero, so vertical motion gives \\[5=\\frac12gt^2\\] Thus \\[t=\\sqrt{\\frac{10}{9.8}}=1.01\\,\\mathrm{s}\\] Horizontal distance is \\[x=v_xt=3(1.01)=3.03\\,\\mathrm{m}\\]",
    },
  ]}
/>

## Checks

- Horizontal and vertical equations share the same time.
- Horizontal acceleration is zero only when air resistance is ignored.
- Vertical acceleration is downward.
- The range formula requires launch and landing at the same height.`;
