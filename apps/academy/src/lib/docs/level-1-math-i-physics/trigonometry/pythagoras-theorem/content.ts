export const content = String.raw`## Pythagorean Identities

The Pythagorean identities are fundamental relationships between the trigonometric functions that derive from the Pythagorean theorem.

### The Fundamental Identity

The most important Pythagorean identity comes from applying the Pythagorean theorem to the unit circle:

<Equation label="Fundamental Pythagorean" tex="\sin^2\theta + \cos^2\theta = 1" />

This identity states that for any angle $\theta$, the square of sine plus the square of cosine always equals 1.

### Variations

From the fundamental identity, we can derive two additional Pythagorean identities by dividing through by $\cos^2\theta$ or $\sin^2\theta$:

<Equation label="Identity 1" tex="1 + \tan^2\theta = \sec^2\theta" />

<Equation label="Identity 2" tex="1 + \cot^2\theta = \csc^2\theta" />

### Applications

These identities are essential for:

1. **Simplifying trigonometric expressions** - replacing $1$ with $\sin^2\theta + \cos^2\theta$
2. **Proving trigonometric identities** - verifying that two expressions are equivalent
3. **Solving equations** - transforming equations into solvable forms
4. **Calculus** - differentiating and integrating trigonometric functions

For example, to simplify $\sin^2 x + \cos^2 x + \tan^2 x$:

<Equation label="Simplification" tex="\sin^2 x + \cos^2 x + \tan^2 x = 1 + \tan^2 x = \sec^2 x" />
`
