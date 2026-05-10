export const content = String.raw`## Principle

The zero vector is the vector of zero displacement. It has zero magnitude and no specific direction, so it is not an arrow pointing north, east, up, or any other way.

The zero vector is still a vector. In vector equations it plays the same identity role that scalar zero plays in number equations, but it belongs to a vector type rather than to a scalar type.

## Notation

An additive identity is a vector that leaves every vector unchanged when added. An additive inverse of \(\mathbf a\) is a vector that adds to \(\mathbf a\) to give the zero vector.

<Notation
  items={[
    { symbol: "\\mathbf 0", meaning: "the zero vector, with zero magnitude and no specific direction" },
    { symbol: "\\mathbf a", meaning: "a vector" },
    { symbol: "-\\mathbf a", meaning: "the additive inverse of \\mathbf a, with the same magnitude as \\mathbf a and opposite direction when \\mathbf a\\ne\\mathbf 0" },
    { symbol: "\\mathbf a+\\mathbf 0", meaning: "adding the additive identity to \\mathbf a" },
    { symbol: "\\mathbf a+(-\\mathbf a)", meaning: "adding a vector to its additive inverse" },
    { symbol: "\\mathbf a-\\mathbf b", meaning: "vector subtraction, defined as \\mathbf a+(-\\mathbf b)" },
    { symbol: "O", meaning: "the origin or a chosen starting point" },
    { symbol: "A", meaning: "a labelled point reached from O" },
  ]}
/>

## Method

### Step 1: Build \(\mathbf 0\) from the origin

Choose an origin \(O\). The position vector of the origin is the trip from \(O\) to \(O\), written \(\overrightarrow\{OO\}\). Since the start and finish are the same point, the displacement is zero, so

<Equation label="Position vector of the origin" tex="\overrightarrow{OO}=\mathbf 0" />

### Step 2: Build \(-\mathbf a\) by reversing the arrow

If \(\mathbf a=\overrightarrow\{OA\}\), then \(-\mathbf a\) is represented by the reversed arrow \(\overrightarrow\{AO\}\). The inverse has the same length as \(\mathbf a\), but it points back along the same line in the opposite direction when \(\mathbf a\) is not the zero vector.

### Step 3: Derive the additive inverse from a return trip

Travel from \(O\) to \(A\), then travel from \(A\) back to \(O\). The net trip starts at \(O\) and ends at \(O\), so the total displacement is \(\mathbf 0\):

<PhysicsDerivation
  items={[
    { label: "Outward trip", tex: "\\overrightarrow{OA}=\\mathbf a" },
    { label: "Return trip", tex: "\\overrightarrow{AO}=-\\mathbf a" },
    { label: "Net displacement", tex: "\\overrightarrow{OA}+\\overrightarrow{AO}=\\overrightarrow{OO}=\\mathbf 0" },
    { label: "Additive inverse", tex: "\\mathbf a+(-\\mathbf a)=\\mathbf 0" },
  ]}
/>

### Step 4: Subtract by adding the inverse

To compute \(\mathbf a-\mathbf b\), reverse the arrow for \(\mathbf b\) to make \(-\mathbf b\), then add \(\mathbf a\) and \(-\mathbf b\) using the usual vector addition construction.

## Rules

<Equation label="Zero magnitude" tex="|\mathbf 0|=0" />

<Equation label="Additive identity" tex="\mathbf a+\mathbf 0=\mathbf a=\mathbf 0+\mathbf a" />

<Equation label="Additive inverse" tex="\mathbf a+(-\mathbf a)=\mathbf 0" />

<Equation label="Double inverse" tex="-(-\mathbf a)=\mathbf a" />

<Equation label="Vector subtraction" tex="\mathbf a-\mathbf b=\mathbf a+(-\mathbf b)" />

- The zero vector has magnitude \(0\), but it has no specific direction.
- The vector \(\mathbf 0\) is the additive identity for vector addition.
- The vector \(-\mathbf a\) is the additive inverse of \(\mathbf a\).
- Vector subtraction is not a new geometric operation; it is addition of an inverse vector.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A student walks from a desk to the door and then returns to the same desk. What is the net displacement?",
      answer: "The starting point and finishing point are the same, so the net displacement is the zero vector \\(\\mathbf 0\\). The path length is not zero, but the displacement vector is zero.",
    },
    {
      title: "Example 2",
      question: "Two horizontal forces of equal magnitude act on a box in opposite directions. What is their resultant?",
      answer: "If one force is \\(\\mathbf F\\), the other is \\(-\\mathbf F\\). Their sum is \\(\\mathbf F+(-\\mathbf F)=\\mathbf 0\\), so the forces are balanced and the resultant force is the zero vector with unit \\(N\\).",
    },
    {
      title: "Example 3",
      question: "How is the displacement difference \\(\\mathbf a-\\mathbf b\\) constructed?",
      answer: "Reverse the arrow for \\(\\mathbf b\\) to make \\(-\\mathbf b\\), then add it to \\(\\mathbf a\\). Thus \\(\\mathbf a-\\mathbf b=\\mathbf a+(-\\mathbf b)\\).",
    },
  ]}
/>

## Checks

- The zero vector \(\mathbf 0\) is not the scalar zero \(0\) in typed vector expressions. Write \(\mathbf a+\mathbf 0\), not \(\mathbf a+0\), when the second term must be a vector.
- Do not normalize the zero vector. A unit vector in the direction of \(\mathbf 0\) is undefined because \(\mathbf 0\) has no direction.
- A vector plus its inverse gives the zero vector \(\mathbf 0\), not the scalar zero \(0\).`;
