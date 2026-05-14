export const content = String.raw`## Principle

Relative motion relates measurements made from different frames by adding displacement, velocity, or acceleration vectors.

The subscript order matters: the first label is the object being described, and the second label is the reference frame.

## Notation

<Notation
  items={[
    { symbol: "\\vec r_{PA}", meaning: "position of P relative to A", unit: "m" },
    { symbol: "\\vec v_{PA}", meaning: "velocity of P relative to A", unit: "m s^{-1}" },
    { symbol: "\\vec a_{PA}", meaning: "acceleration of P relative to A", unit: "m s^{-2}" },
    { symbol: "A,B", meaning: "two reference frames or observers", unit: "" },
  ]}
/>

## Method

### Derivation 1: Build the position relation

To locate P from A, you can go from A to B and then from B to P. That path is vector addition.

<PhysicsDerivation
  items={[
    {
      label: "Go A to B",
      tex: "\\vec r_{BA}",
    },
    {
      label: "Then B to P",
      tex: "\\vec r_{PB}",
    },
    {
      label: "Add the path",
      tex: "\\vec r_{PA}=\\vec r_{PB}+\\vec r_{BA}",
      note: "Read this as: P relative to A equals P relative to B plus B relative to A.",
    },
  ]}
/>

### Derivation 2: Differentiate the relation

Velocity and acceleration relations come from differentiating the position relation.

<PhysicsDerivation
  items={[
    {
      label: "Differentiate position",
      tex: "\\frac{d\\vec r_{PA}}{dt}=\\frac{d\\vec r_{PB}}{dt}+\\frac{d\\vec r_{BA}}{dt}",
    },
    {
      label: "Velocity transform",
      tex: "\\vec v_{PA}=\\vec v_{PB}+\\vec v_{BA}",
    },
    {
      label: "Acceleration transform",
      tex: "\\vec a_{PA}=\\vec a_{PB}+\\vec a_{BA}",
    },
  ]}
/>

### Derivation 3: Use components when directions differ

Relative motion is vector addition, so crossed directions must be handled by components.

<PhysicsDerivation
  items={[
    {
      label: "Write each velocity",
      tex: "\\vec v=v_x\\hat{\\imath}+v_y\\hat{\\jmath}",
    },
    {
      label: "Add matching components",
      tex: "v_{PA,x}=v_{PB,x}+v_{BA,x},\\qquad v_{PA,y}=v_{PB,y}+v_{BA,y}",
    },
    {
      label: "Find speed if needed",
      tex: "v_{PA}=\\sqrt{v_{PA,x}^2+v_{PA,y}^2}",
    },
  ]}
/>

The vector sketch shows the common boat-current pattern: ground velocity is boat-relative-to-water plus water-relative-to-ground.

<CartesianDiagram
  title="Relative velocity addition"
  caption="Ground velocity is the vector sum of velocity relative to the moving frame and the frame velocity."
  width={460}
  height={300}
  xRange={{ min: 0, max: 6, step: 1, label: "east" }}
  yRange={{ min: 0, max: 5, step: 1, label: "north" }}
  vectors={[
    { label: "\\vec v_{BW}", from: { x: 0, y: 0 }, to: { x: 4, y: 0 } },
    { label: "\\vec v_{WG}", from: { x: 4, y: 0 }, to: { x: 4, y: 3 } },
    {
      label: "\\vec v_{BG}",
      from: { x: 0, y: 0 },
      to: { x: 4, y: 3 },
      color: "var(--chart-3)",
    },
  ]}
/>

## Rules

These are the compact results from the derivations above.

<Equation label="Position transform" tex="\vec r_{PA}=\vec r_{PB}+\vec r_{BA}" />

<Equation label="Velocity transform" tex="\vec v_{PA}=\vec v_{PB}+\vec v_{BA}" />

<Equation label="Acceleration transform" tex="\vec a_{PA}=\vec a_{PB}+\vec a_{BA}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A boat moves east at \\(4\\,\\mathrm{m\\,s^{-1}}\\) relative to water. The river flows north at \\(3\\,\\mathrm{m\\,s^{-1}}\\). Find boat velocity relative to ground.",
      answer: "Use \\(\\vec v_{BG}=\\vec v_{BW}+\\vec v_{WG}\\): \\[\\vec v_{BG}=4\\hat{\\imath}+3\\hat{\\jmath}\\,\\mathrm{m\\,s^{-1}}\\] Its speed is \\[v_{BG}=\\sqrt{4^2+3^2}=5\\,\\mathrm{m\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "A person walks forward at \\(1.5\\,\\mathrm{m\\,s^{-1}}\\) on a train moving forward at \\(12\\,\\mathrm{m\\,s^{-1}}\\). Find the person's ground velocity.",
      answer: "The directions are collinear, so add signed components: \\[v_{PG}=v_{PT}+v_{TG}=1.5+12=13.5\\,\\mathrm{m\\,s^{-1}}\\] forward.",
    },
  ]}
/>

## Checks

- Order of subscripts matters.
- Add velocities as vectors, not just speeds.
- Use components for crossed directions.
- Accelerations are equal only when the frames have zero relative acceleration.`;
