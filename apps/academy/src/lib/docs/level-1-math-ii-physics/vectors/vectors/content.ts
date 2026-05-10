export const content = String.raw`## Principle

A vector is a quantity with both magnitude and direction. It is not just a number: the number gives the size, while the direction tells where the quantity points.

Physical vectors can carry units. A velocity may have unit \(m s^\{-1\}\), an acceleration may have unit \(m s^\{-2\}\), a force may have unit \(N\), an electric field may have unit \(N/C\), and a magnetic field may have unit \(T\).

## Notation

<Notation
  items={[
    { symbol: "\\mathbf v", meaning: "a vector, drawn as a directed arrow or written in bold" },
    { symbol: "|\\mathbf v|", meaning: "the magnitude or length of the vector \\mathbf v" },
    { symbol: "\\hat{\\mathbf v}", meaning: "a unit vector pointing in the direction of \\mathbf v when \\mathbf v is not the zero vector" },
    { symbol: "O", meaning: "the origin, a chosen reference point" },
    { symbol: "A, B, C", meaning: "labelled points in space" },
    { symbol: "\\overrightarrow{OA}", meaning: "the position vector from the origin O to point A" },
    { symbol: "\\overrightarrow{BC}", meaning: "the displacement vector from point B to point C" },
  ]}
/>

## Method

### Step 1: Choose an origin

Choose a reference point \(O\). A position vector such as \(\overrightarrow\{OA\}\) starts at \(O\) and ends at the labelled point \(A\).

### Step 2: Draw a directed line

Draw an arrow from the starting point to the finishing point. The arrow direction is part of the vector: \(\overrightarrow\{BC\}\) points from \(B\) to \(C\), not from \(C\) to \(B\).

### Step 3: Label the length

Label the magnitude of the arrow. For a vector \(\mathbf v\), the length is \(|\mathbf v|\). If the vector is physical, attach the correct unit to the magnitude.

### Step 4: Compare arrows by translation and rotation

Two arrows represent the same free vector if one can be translated to lie exactly on the other without rotating or stretching it. A translated arrow with the same length and direction is equal to the original vector. A rotated arrow can keep the same length, but it has a different direction and therefore represents a different vector.

## Rules

<Equation label="Translation invariance" tex="\overrightarrow{BC}=\overrightarrow{B'C'}" />

The equation above means the arrow from \(B\) to \(C\) and the arrow from \(B'\) to \(C'\) are equal when they have the same magnitude and direction, even if they start at different points.

<Equation label="Unit vector magnitude" tex="|\hat{\mathbf v}|=1" />

<Equation label="Magnitude is non-negative" tex="|\mathbf v|\ge 0" />

- Translating a vector does not change the vector, because magnitude and direction stay the same.
- Rotating a vector changes its direction, even if its magnitude stays the same.
- A unit vector has magnitude \(1\) and records direction only.
- The zero-vector exception will be handled as a vector with no direction.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Why is wind velocity a vector rather than just a speed?",
      answer: "Wind velocity needs both speed and direction. A wind of \\(8 m s^{-1}\\) east is different from a wind of \\(8 m s^{-1}\\) north, even though the magnitudes are equal.",
    },
    {
      title: "Example 2",
      question: "What does the position vector \\(\\overrightarrow{OA}\\) describe?",
      answer: "After choosing the origin \\(O\\), the position vector \\(\\overrightarrow{OA}\\) is the directed arrow from \\(O\\) to the point \\(A\\). Its magnitude is the distance from the origin to \\(A\\), and its direction is from \\(O\\) toward \\(A\\).",
    },
    {
      title: "Example 3",
      question: "Two displacement arrows are drawn in different places. Each is 3 m long and points due east. Do they represent the same vector?",
      answer: "Yes. They represent the same displacement vector because one arrow can be translated onto the other without changing length or direction. Their starting positions differ, but the displacement is the same.",
    },
  ]}
/>

## Checks

- Do not treat the magnitude alone as the vector. The magnitude \(|\mathbf v|\) is only the size of \(\mathbf v\).
- Include units when the vector is physical, such as \(m s^\{-1\}\), \(m s^\{-2\}\), \(N\), \(N/C\), or \(T\).
- Do not assign a direction to the zero vector.`;
