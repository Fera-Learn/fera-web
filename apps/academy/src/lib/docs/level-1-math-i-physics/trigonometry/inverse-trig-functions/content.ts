export const content = String.raw`## Inverse Trigonometric Functions

Inverse trigonometric functions "undo" what the trigonometric functions do, returning the angle that corresponds to a given ratio.

### Definitions

<Equation label="Arcsine" tex="\theta = \arcsin(x) \iff \sin\theta = x" />

<Equation label="Arccosine" tex="\theta = \arccos(x) \iff \cos\theta = x" />

<Equation label="Arctangent" tex="\theta = \arctan(x) \iff \tan\theta = x" />

### Domains and Ranges

Each inverse function has a restricted domain to ensure it is one-to-one (each output corresponds to exactly one input):

- **Arcsine**: domain \([-1, 1]\), range \(\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]\)
- **Arccosine**: domain \([-1, 1]\), range \([0, \pi]\)
- **Arctangent**: domain \((-\infty, \infty)\), range \(\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)\)

These restricted ranges are called the **principal values**.

### Properties

Some important properties of inverse trigonometric functions:

<Equation label="Arcsin-arccos" tex="\arcsin(x) + \arccos(x) = \frac{\pi}{2}" />

<Equation label="Arctan identity" tex="\arctan(x) + \arctan\left(\frac{1}{x}\right) = \frac{\pi}{2} \quad \text{for } x > 0" />

<Equation label="Sine of arcsin" tex="\sin(\arcsin(x)) = x \quad \text{for } x \in [-1, 1]" />

<Equation label="Arcsin of sine" tex="\arcsin(\sin\theta) = \theta \quad \text{only if } \theta \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]" />

The last property shows why domain restrictions are necessary - \(\arcsin(\sin\theta)\) equals \(\theta\) only within the principal range.

### Composite Angles

Inverse trigonometric functions often appear when solving for angles in right triangles:

<Equation label="Quadrant-aware arctangent" tex="\theta = \operatorname{atan2}(y,x)" />

This gives the angle whose tangent is \(y/x\) while preserving the quadrant and handling \(x=0\). If only ordinary \(\arctan(y/x)\) is available, adjust the result using the signs of \(x\) and \(y\).`;
