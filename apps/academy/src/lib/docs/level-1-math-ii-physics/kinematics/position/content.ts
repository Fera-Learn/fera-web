export const content = String.raw`## Principle

Position describes where a particle is relative to a chosen origin and coordinate axes. In three-dimensional Cartesian coordinates, the position at time \(t\) is a vector \(\mathbf r(t)\) from the origin to the particle.

Displacement compares two positions. It is the vector change in position between two times, so it records both distance and direction of the change.

## Notation

<Notation
  items={[
    { symbol: "O", meaning: "chosen origin of the coordinate system" },
    { symbol: "t", meaning: "time", unit: "s" },
    { symbol: "\\mathbf r(t)", meaning: "position vector of the particle at time t", unit: "m" },
    { symbol: "x(t), y(t), z(t)", meaning: "Cartesian coordinate functions of position", unit: "m" },
    { symbol: "\\mathbf i, \\mathbf j, \\mathbf k", meaning: "unit vectors along the x, y, and z axes" },
    { symbol: "\\Delta\\mathbf r", meaning: "displacement between two positions", unit: "m" },
  ]}
/>

## Method

### Step 1: Choose the reference frame

State the origin \(O\), axes, and units. A position vector depends on this choice, because changing the origin changes the vector from the origin to the particle.

### Step 2: Write the position vector


In Cartesian coordinates, write the position as components along the basis vectors:

<Equation label="Position vector" tex="\mathbf r(t)=x(t)\mathbf i+y(t)\mathbf j+z(t)\mathbf k" />

### Step 3: Compare two positions

For positions at times \(t_1\) and \(t_2\), subtract final minus initial:

<Equation label="Displacement" tex="\Delta\mathbf r=\mathbf r(t_2)-\mathbf r(t_1)" />

The displacement uses the same unit as position: metres.

## Rules

<Equation label="Component displacement" tex="\Delta\mathbf r=(x_2-x_1)\mathbf i+(y_2-y_1)\mathbf j+(z_2-z_1)\mathbf k" />

<Equation label="Distance from origin" tex="|\mathbf r|=\sqrt{x^2+y^2+z^2}" />

- Position depends on the chosen origin.
- Displacement is final position minus initial position.
- Position and displacement are vectors, so direction matters.
- The length \(|\Delta\mathbf r|\) is the straight-line distance between the two positions, not necessarily the distance travelled along a curved path.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A particle has position \\(\\mathbf r=3\\mathbf i-2\\mathbf j+5\\mathbf k\\) m. What are its coordinates?",
      answer: "Read the coefficients of the Cartesian basis vectors. The coordinates are \\((3,-2,5)\\) m relative to the chosen origin.",
    },
    {
      title: "Example 2",
      question: "Find the displacement from \\(\\mathbf r_1=\\mathbf i+2\\mathbf j\\) m to \\(\\mathbf r_2=4\\mathbf i-\\mathbf j\\) m.",
      answer: "Subtract final minus initial: \\(\\Delta\\mathbf r=\\mathbf r_2-\\mathbf r_1=(4-1)\\mathbf i+(-1-2)\\mathbf j=3\\mathbf i-3\\mathbf j\\) m.",
    },
    {
      title: "Example 3",
      question: "Why must the origin be stated when giving a position vector?",
      answer: "The vector \\(\\mathbf r\\) starts at the origin. If the origin changes, the arrow from the new origin to the same particle changes, so the position vector changes even though the particle has not moved.",
    },
  ]}
/>

## Checks

- Do not confuse position with displacement. Position locates one event; displacement compares two events.
- Always state or infer the origin and axes before interpreting a position vector.
- Keep the unit of position and displacement as metres unless the model uses a different length unit.
- The displacement vector can be zero even when the particle has travelled along a path and returned to its starting point.`;
