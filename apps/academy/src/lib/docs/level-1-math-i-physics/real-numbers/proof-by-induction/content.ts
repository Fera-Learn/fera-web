export const content = String.raw`## Mathematical Induction

**Mathematical induction** is a proof technique used to establish that a statement is true for all natural numbers \(n \in \mathbb{N}\).

The principle works like dominoes falling: if the first domino falls and each domino causes the next to fall, then all dominos will fall.

## The Two Steps

### Step 1: Base Case

Verify the statement is true for the smallest value, usually \(n = 1\) (or \(n = 0\)).

<Equation label="Base Case" tex="P(1) \text{ is true}" />

### Step 2: Inductive Step

Assume the statement is true for some arbitrary value \(n = k\) (this is the **inductive hypothesis**), then prove it must also be true for \(n = k + 1\).

<Equation label="Inductive Hypothesis" tex="\text{Assume } P(k) \text{ is true}" />

<Equation label="Inductive Conclusion" tex="\text{Prove } P(k+1) \text{ is true}" />

### Conclusion

If both steps are proven, then \(P(n)\) is true for all \(n \geq 1\).

## Example: Sum of First n Integers

**Statement:** \(P(n): 1 + 2 + 3 + \cdots + n = \frac{n(n+1)}{2}\)

### Base Case

For \(n = 1\):
<Equation label="Base Case Verification" tex="1 = \frac{1 \times 2}{2} = 1 \quad \checkmark" />

### Inductive Step

Assume \(P(k)\) is true:
<Equation label="Inductive Hypothesis Sum" tex="1 + 2 + \cdots + k = \frac{k(k+1)}{2}" />

Now prove \(P(k+1)\):
<Equation label="Inductive Step Start" tex="1 + 2 + \cdots + k + (k+1)" />

<Equation label="Inductive Step Using Hypothesis" tex="= \frac{k(k+1)}{2} + (k+1)" />

<Equation label="Inductive Step Simplify" tex="= \frac{k(k+1) + 2(k+1)}{2}" />

<Equation label="Inductive Step Factor" tex="= \frac{(k+1)(k+2)}{2}" />

<Equation label="Inductive Step Conclusion" tex="= \frac{(k+1)((k+1)+1)}{2}" />

This is exactly \(P(k+1)\). ∎

Therefore, the formula holds for all positive integers \(n\).

## Important Notes

1. The inductive hypothesis must be assumed for **some arbitrary** \(k\), not a specific value
2. Both steps are essential—omitting either invalidates the proof
3. Sometimes the base case starts at \(n = 0\) or another value depending on the statement
`;
