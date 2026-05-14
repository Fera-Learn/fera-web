export const content = String.raw`## Principle

Weight is the gravitational force produced by the local field, so it depends on both mass and location.

## Notation

<Notation
  items={[
    { symbol: "m", meaning: "object mass", unit: "kg" },
    { symbol: "\\vec W", meaning: "weight force", unit: "N" },
    { symbol: "W", meaning: "weight magnitude", unit: "N" },
    { symbol: "\\vec g", meaning: "local gravitational field", unit: "N kg^{-1}" },
    { symbol: "g", meaning: "field magnitude", unit: "N kg^{-1}" },
    { symbol: "G", meaning: "gravitational constant", unit: "N m^{2} kg^{-2}" },
    { symbol: "M", meaning: "source mass", unit: "kg" },
    { symbol: "r", meaning: "distance from the source center", unit: "m" },
  ]}
/>

## Method

### Derivation 1: Define weight from the local field

Weight is a force, not a property stored in the object. Once the field is known at a position, the weight follows immediately from the object's mass.

<PhysicsDerivation
  items={[
    {
      label: "Field form of gravity",
      tex: "\\vec W=m\\vec g",
    },
    {
      label: "Weight magnitude",
      tex: "W=mg",
      note: "The mass stays fixed while the local value of \\(g\\) can change.",
    },
  ]}
/>

### Derivation 2: Build weight from the source mass

If the field comes from a spherical source, substitute the inverse-square field into the weight definition.

<PhysicsDerivation
  items={[
    {
      label: "Spherical field magnitude",
      tex: "g=G\\frac{M}{r^2}",
    },
    {
      label: "Weight from source mass",
      tex: "W=G\\frac{Mm}{r^2}",
    },
    {
      label: "Near-Earth approximation",
      tex: "W\\approx mg\\quad\\text{with}\\quad g\\approx9.8\\,\\mathrm{N\\,kg^{-1}}",
      note: "This is valid when the height change is tiny compared with Earth's radius.",
    },
  ]}
/>

The graph fixes the object's mass and shows how weight changes when the local field changes.

<CartesianDiagram
  title="Weight versus field strength"
  caption="For fixed mass, weight is directly proportional to the local gravitational field."
  width={440}
  height={260}
  xRange={{ min: 0, max: 10, step: 2, label: "g" }}
  yRange={{ min: 0, max: 80, step: 20, label: "W" }}
  curves={[
    {
      label: "m = 8 kg",
      points: [
        { x: 0, y: 0 },
        { x: 2, y: 16 },
        { x: 4, y: 32 },
        { x: 6, y: 48 },
        { x: 8, y: 64 },
        { x: 10, y: 80 },
      ],
    },
  ]}
/>

The straight line means that if the field halves, the weight halves too. The object's inertia does not change, only the force acting on it.

## Rules

These are the compact results from the method above.

<Equation label="Weight vector" tex="\vec W=m\vec g" />

<Equation label="Weight magnitude" tex="W=mg" />

<Equation label="Spherical source" tex="W=G\frac{Mm}{r^2}" />

<Equation label="Near Earth" tex="W\approx mg,\qquad g\approx9.8\,\mathrm{N\,kg^{-1}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "An \\(78\\,\\mathrm{kg}\\) explorer stands where the local field strength is \\(3.7\\,\\mathrm{N\\,kg^{-1}}\\). Find the explorer's weight.",
      answer: "\\[W=mg=78(3.7)=2.89\\times10^2\\,\\mathrm{N}\\] directed with the field.",
    },
    {
      title: "Example 2",
      question: "A payload moves from radius \\(R\\) to radius \\(2R\\) around the same spherical planet. How does its weight change?",
      answer: "\\[W\\propto\\frac{1}{r^2}\\] \\[\\frac{W_{2R}}{W_R}=\\frac{1/(2R)^2}{1/R^2}=\\frac14\\] The weight becomes one quarter of its original value.",
    },
  ]}
/>

## Checks

- Weight is measured in newtons; mass is measured in kilograms.
- The same object has the same mass in every field but not the same weight.
- Weight points in the same direction as \\(\\vec g\\), toward the attracting body.
- A weaker field means smaller weight even when nothing about the object itself has changed.`;
