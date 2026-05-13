export const content = String.raw`## Principle

Scalar multiplication scales a vector by a real number. The output is still a vector: its magnitude is multiplied by the size of the scalar. When the original vector is not the zero vector, its direction is kept or reversed according to the sign of the scalar.

Parallel vectors point along the same line in the same direction. Anti-parallel vectors point along the same line in opposite directions.

If \(\mathbf a\ne\mathbf 0\) and the scalar is positive, the scaled vector is parallel to the original vector. If \(\mathbf a\ne\mathbf 0\) and the scalar is negative, the scaled vector is anti-parallel to the original vector. If \(\mathbf a=\mathbf 0\), then \(\lambda\mathbf a=\mathbf 0\) for every real scalar \(\lambda\).

## Notation

<Notation
  items={[
    { symbol: "\\lambda", meaning: "a real scalar used to scale a vector" },
    { symbol: "\\mu", meaning: "another real scalar" },
    { symbol: "\\mathbf a", meaning: "a vector being scaled" },
    { symbol: "\\lambda\\mathbf a", meaning: "the vector product formed by multiplying \\mathbf a by the scalar \\lambda" },
    { symbol: "\\mathbf b", meaning: "another vector used in distributive rules" },
    { symbol: "|\\lambda|", meaning: "the magnitude scale factor applied to |\\mathbf a|" },
    { symbol: "\\mathbf 0", meaning: "the zero vector" },
  ]}
/>

The number \(|\lambda|\) is non-negative, so it changes the length of \(\mathbf a\) without carrying direction information.

## Method

### Step 1: Determine the sign of \(\lambda\)

Check whether the real scalar \(\lambda\) is positive, zero, or negative. If \(\mathbf a\ne\mathbf 0\), the sign decides the direction of \(\lambda\mathbf a\).

### Step 2: Scale the magnitude by \(|\lambda|\)

Multiply the magnitude of \(\mathbf a\) by the magnitude scale factor \(|\lambda|\):

<Equation label="Magnitude scaling" tex="|\lambda\mathbf a|=|\lambda||\mathbf a|" />

### Step 3: Keep or reverse the direction

If \(\mathbf a=\mathbf 0\), then \(\lambda\mathbf a=\mathbf 0\) for every real scalar \(\lambda\). If \(\mathbf a\ne\mathbf 0\) and \(\lambda\gt 0\), keep the direction of \(\mathbf a\). If \(\mathbf a\ne\mathbf 0\) and \(\lambda\lt 0\), reverse the direction so that \(\lambda\mathbf a\) is anti-parallel to \(\mathbf a\). If \(\lambda=0\), the result is \(\mathbf 0\), which has no specific direction.

## Rules

<Equation label="Unit scalar" tex="1\mathbf a=\mathbf a" />

<Equation label="Zero scalar" tex="0\mathbf a=\mathbf 0" />

<Equation label="Distribute over vector sum" tex="\lambda(\mathbf a+\mathbf b)=\lambda\mathbf a+\lambda\mathbf b" />

<Equation label="Distribute scalar sum" tex="(\lambda+\mu)\mathbf a=\lambda\mathbf a+\mu\mathbf a" />

<Equation label="Scalar associativity" tex="(\lambda\mu)\mathbf a=\lambda(\mu\mathbf a)" />

<Equation label="Magnitude rule" tex="|\lambda\mathbf a|=|\lambda||\mathbf a|" />

Derive the magnitude rule from components. If \(\mathbf a=(a_1,a_2,a_3)\), then \(\lambda\mathbf a=(\lambda a_1,\lambda a_2,\lambda a_3)\):

<PhysicsDerivation
  items={[
    { label: "Scaled components", tex: "\\lambda\\mathbf a=(\\lambda a_1,\\lambda a_2,\\lambda a_3)" },
    { label: "Magnitude of scaled vector", tex: "|\\lambda\\mathbf a|=\\sqrt{(\\lambda a_1)^2+(\\lambda a_2)^2+(\\lambda a_3)^2}" },
    { label: "Factor out scalar square", tex: "|\\lambda\\mathbf a|=\\sqrt{\\lambda^2(a_1^2+a_2^2+a_3^2)}" },
    { label: "Use non-negative magnitude", tex: "|\\lambda\\mathbf a|=|\\lambda|\\sqrt{a_1^2+a_2^2+a_3^2}=|\\lambda||\\mathbf a|" },
  ]}
/>

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A displacement vector \\(\\mathbf d\\) is 10 m east. What is \\(\\frac{1}{2}\\mathbf d\\)?",
      answer: "The scalar \\(\\frac{1}{2}\\) is positive, so the direction stays east. The magnitude is multiplied by \\(|\\frac{1}{2}|\\), giving a displacement vector of 5 m east.",
    },
    {
      title: "Example 2",
      question: "A velocity is \\(\\mathbf v\\). What does \\(-1\\mathbf v\\) represent?",
      answer: "Multiplying by \\(-1\\) keeps the magnitude and reverses the direction. The vector \\(-\\mathbf v\\) is a velocity with the same speed as \\(\\mathbf v\\) but in the opposite direction.",
    },
    {
      title: "Example 3",
      question: "Compute \\(-3(0,3,-4)\\).",
      answer: "Multiply every component by \\(-3\\): \\(-3(0,3,-4)=(0,-9,12)\\). The result is a vector with scaled components.",
    },
  ]}
/>

## Checks

- Scalar multiplication outputs a vector, not a scalar.
- Negative scaling reverses direction, so \(\lambda\mathbf a\) is anti-parallel to \(\mathbf a\) when \(\lambda\lt 0\) and \(\mathbf a\ne\mathbf 0\).
- The scalar \(0\) times a vector gives the zero vector: \(0\mathbf a=\mathbf 0\).`;
