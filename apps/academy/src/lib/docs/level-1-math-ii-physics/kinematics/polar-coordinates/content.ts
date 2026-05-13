export const content = String.raw`## Principle

Plane polar coordinates describe position in a plane using a radial distance \(r\) from the origin and an angle \(\theta\) from a reference axis. The basis vectors change direction as \(\theta\) changes, so velocity and acceleration contain extra angular terms.

Angles are measured in radians. This convention makes derivatives such as \(d\theta/dt\) compatible with arc length and angular velocity formulas.

## Notation

<Notation
  items={[
    { symbol: "r", meaning: "radial distance from the origin", unit: "m" },
    { symbol: "\\theta", meaning: "polar angle measured in radians" },
    { symbol: "\\mathbf e_r", meaning: "unit vector pointing radially outward" },
    { symbol: "\\mathbf e_\\theta", meaning: "unit vector perpendicular to \\mathbf e_r in the direction of increasing theta" },
    { symbol: "\\dot r", meaning: "radial velocity component", unit: "m s^{-1}" },
    { symbol: "\\dot\\theta", meaning: "angular velocity", unit: "rad s^{-1}" },
  ]}
/>

## Method

### Step 1: Write position in the moving polar basis

The position vector has only a radial component:

<Equation label="Polar position" tex="\mathbf r=r\mathbf e_r" />

### Step 2: Differentiate the moving basis

The polar unit vectors rotate as \(\theta\) changes:

<Equation label="Polar basis derivatives" tex="\dot{\mathbf e}_r=\dot\theta\mathbf e_\theta,\quad \dot{\mathbf e}_\theta=-\dot\theta\mathbf e_r" />

### Step 3: Differentiate position for velocity

Use the product rule because both \(r\) and \(\mathbf e_r\) can change:

<Equation label="Polar velocity" tex="\mathbf v=\dot r\mathbf e_r+r\dot\theta\mathbf e_\theta" />

### Step 4: Differentiate velocity for acceleration

Differentiate again and collect radial and angular components:

<Equation label="Polar acceleration" tex="\mathbf a=(\ddot r-r\dot\theta^2)\mathbf e_r+(r\ddot\theta+2\dot r\dot\theta)\mathbf e_\theta" />

<PhysicsDerivation
  items={[
    { label: "Start from position", tex: "\\mathbf r=r\\mathbf e_r" },
    { label: "Differentiate position", tex: "\\mathbf v=\\dot r\\mathbf e_r+r\\dot{\\mathbf e}_r" },
    { label: "Use radial basis derivative", tex: "\\mathbf v=\\dot r\\mathbf e_r+r\\dot\\theta\\mathbf e_\\theta" },
    { label: "Differentiate velocity", tex: "\\mathbf a=(\\ddot r-r\\dot\\theta^2)\\mathbf e_r+(r\\ddot\\theta+2\\dot r\\dot\\theta)\\mathbf e_\\theta" },
  ]}
/>

## Rules

<Equation label="Radial acceleration component" tex="a_r=\ddot r-r\dot\theta^2" />

<Equation label="Angular acceleration component" tex="a_\theta=r\ddot\theta+2\dot r\dot\theta" />

<Equation label="Circular motion special case" tex="r=R,\ \dot r=0:\quad \mathbf a=-R\dot\theta^2\mathbf e_r+R\ddot\theta\mathbf e_\theta" />

- The polar basis vectors depend on \(\theta\), so they are usually time-dependent.
- The term \(-r\dot\theta^2\mathbf e_r\) points inward for circular motion.
- The term \(2\dot r\dot\theta\mathbf e_\theta\) appears when radial distance and angle both change.
- Polar coordinates are useful for central-force and circular-motion problems.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A particle has \\(r=2\\) m and \\(\\theta=\\pi/3\\). What does \\(r\\) represent?",
      answer: "The coordinate \\(r\\) is the distance from the origin to the particle. Here the particle is \\(2\\) m from the origin along the direction making angle \\(\\pi/3\\) with the reference axis.",
    },
    {
      title: "Example 2",
      question: "For circular motion with constant \\(r=R\\) and constant \\(\\dot\\theta=\\omega\\), find acceleration.",
      answer: "With \\(\\dot r=0\\), \\(\\ddot r=0\\), and \\(\\ddot\\theta=0\\), the acceleration formula gives \\(\\mathbf a=-R\\omega^2\\mathbf e_r\\). It points inward toward the origin.",
    },
    {
      title: "Example 3",
      question: "If \\(r\\) changes but \\(\\theta\\) is constant, what is the velocity?",
      answer: "When \\(\\dot\\theta=0\\), the angular part vanishes. The velocity is \\(\\mathbf v=\\dot r\\mathbf e_r\\), purely radial.",
    },
  ]}
/>

## Checks

- Use radians for \(\theta\) in calculus formulas.
- Do not treat \(\mathbf e_r\) and \(\mathbf e_\theta\) as constant when \(\theta\) changes.
- The symbol \(r\) is a distance coordinate, while \(\mathbf r\) is the position vector.
- Check whether a problem is planar before using only polar coordinates.`;
