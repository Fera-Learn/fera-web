export const content = String.raw`## Principle

Electric field lines are a diagrammatic representation: tangents show field direction and line density shows relative field strength.

## Notation

<Notation
  items={[
    { symbol: "\\vec E", meaning: "electric field", unit: "N C^{-1}" },
    { symbol: "\\hat t", meaning: "tangent direction to a field line", unit: "1" },
    { symbol: "N_{\\mathrm{lines}}", meaning: "number of drawn lines assigned to a charge", unit: "1" },
    { symbol: "q", meaning: "source charge", unit: "C" },
    { symbol: "A", meaning: "small area pierced by field lines", unit: "m^{2}" },
  ]}
/>

## Method

### Derivation 1: Direction from a tangent

A field line is drawn so that the local tangent points in the electric field direction.

<PhysicsDerivation
  items={[
    {
      label: "Tangent rule",
      tex: "\\hat t\\parallel\\vec E",
    },
    {
      label: "Positive test charge",
      tex: "\\vec F=q_0\\vec E\\quad(q_0>0)",
    },
    {
      label: "Arrow direction",
      tex: "\\text{field-line arrows follow the force on a positive test charge}",
    },
  ]}
/>

### Derivation 2: Sources, sinks, and relative strength

Lines begin on positive charge and end on negative charge or at infinity. More lines in the same area means a stronger field there.

<PhysicsDerivation
  items={[
    {
      label: "Positive source",
      tex: "q>0\\Rightarrow\\text{lines leave}",
    },
    {
      label: "Negative source",
      tex: "q<0\\Rightarrow\\text{lines enter}",
    },
    {
      label: "Relative strength",
      tex: "|\\vec E|\\propto\\frac{N_{\\mathrm{lines}}}{A}",
    },
    {
      label: "Charge size",
      tex: "N_{\\mathrm{lines}}\\propto |q|",
    },
  ]}
/>

### Derivation 3: Why lines do not cross

At one point in space, the electric field has one vector value. Two crossing field lines would imply two tangent directions for \\(\\vec E\\) at the same point.

<PhysicsDerivation
  items={[
    {
      label: "Single field value",
      tex: "\\vec E(\\vec r)\\ \\text{is unique}",
    },
    {
      label: "Crossing contradiction",
      tex: "\\hat t_1\\ne\\hat t_2\\Rightarrow\\text{two directions at one point}",
    },
  ]}
/>

## Rules

These are the rules for reading and drawing electric field lines.

<Equation label="Tangent direction" tex="\hat t\parallel\vec E" />

<Equation label="Positive charges" tex="q>0\Rightarrow\text{lines point outward}" />

<Equation label="Negative charges" tex="q<0\Rightarrow\text{lines point inward}" />

<Equation label="Line density" tex="|\vec E|\propto N_{\mathrm{lines}}/A" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A diagram shows field lines pointing radially inward toward a point charge. What is the sign of the charge?",
      answer: "Field lines enter negative charges, so the point charge is negative.",
    },
    {
      title: "Example 2",
      question: "A region of a field-line diagram has twice as many lines passing through the same small area as another region. What does the diagram imply?",
      answer: "The electric field magnitude is represented as larger in the denser region. The factor is only meaningful if the same drawing scale and line convention are being used.",
    },
  ]}
/>

## Checks

- Field lines are not physical strings or particle paths.
- The field direction is tangent to the line, not necessarily toward the nearest charge.
- Lines never cross in an electrostatic field diagram.
- More densely packed lines mean larger \\(|\\vec E|\\), not larger charge speed.`;
