export const content = String.raw`## Trigonometric Functions

The three primary trigonometric functions relate the angles of a right triangle to the ratios of its sides.

### Definitions

Given a right triangle with angle $\theta$, we define:

<Equation label="Sine" tex="\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}" />

<Equation label="Cosine" tex="\cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}" />

<Equation label="Tangent" tex="\tan\theta = \frac{\text{opposite}}{\text{adjacent}} = \frac{\sin\theta}{\cos\theta}" />

### The Unit Circle

The unit circle is a circle with radius 1 centered at the origin. For any angle $\theta$, the coordinates of the point where the terminal side intersects the unit circle are $(\cos\theta, \sin\theta)$.

Key angles and their values:

- $\sin(0) = 0$, $\cos(0) = 1$, $\tan(0) = 0$
- $\sin\left(\frac{\pi}{2}\right) = 1$, $\cos\left(\frac{\pi}{2}\right) = 0$, $\tan\left(\frac{\pi}{2}\right)$ is undefined
- $\sin(\pi) = 0$, $\cos(\pi) = -1$, $\tan(\pi) = 0$

### Graphs and Periodicity

The trigonometric functions are periodic, meaning they repeat their values in a regular cycle.

- **Sine** and **cosine** have period $2\pi$: $\sin(\theta + 2\pi) = \sin\theta$, $\cos(\theta + 2\pi) = \cos\theta$
- **Tangent** has period $\pi$: $\tan(\theta + \pi) = \tan\theta$

The amplitude of sine and cosine is 1, while tangent has no bounded amplitude.

### Reciprocal Functions

Three additional trigonometric functions exist as reciprocals:

<Equation label="Cosecant" tex="\csc\theta = \frac{1}{\sin\theta}" />

<Equation label="Secant" tex="\sec\theta = \frac{1}{\cos\theta}" />

<Equation label="Cotangent" tex="\cot\theta = \frac{1}{\tan\theta} = \frac{\cos\theta}{\sin\theta}" />
`;
