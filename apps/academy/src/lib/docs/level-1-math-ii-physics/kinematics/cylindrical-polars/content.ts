export const content = String.raw`## Principle

Cylindrical polar coordinates extend plane polar coordinates by adding a vertical coordinate \(z\). They are useful when a physical system has an axis of symmetry, such as rotation about a shaft, flow in a pipe, or fields around a long straight wire.

The radial and angular basis vectors behave as in plane polar coordinates, while \(\mathbf e_z\) is fixed along the axis.

## Notation

<Notation
  items={[
    { symbol: "r", meaning: "distance from the z-axis", unit: "m" },
    { symbol: "\\theta", meaning: "angle around the z-axis measured in radians" },
    { symbol: "z", meaning: "height along the z-axis", unit: "m" },
    { symbol: "\\mathbf e_r", meaning: "radial unit vector in the horizontal plane" },
    { symbol: "\\mathbf e_\\theta", meaning: "azimuthal unit vector in the direction of increasing theta" },
    { symbol: "\\mathbf e_z", meaning: "fixed unit vector along the z-axis" },
  ]}
/>

## Method

### Step 1: Write the position vector

The position has a horizontal radial part and a vertical part:

<Equation label="Cylindrical position" tex="\mathbf r=r\mathbf e_r+z\mathbf e_z" />

### Step 2: Differentiate to get velocity

The polar part changes exactly as in plane polar coordinates, and the vertical part contributes \(\dot z\mathbf e_z\):

<Equation label="Cylindrical velocity" tex="\mathbf v=\dot r\mathbf e_r+r\dot\theta\mathbf e_\theta+\dot z\mathbf e_z" />

### Step 3: Differentiate again to get acceleration

The vertical acceleration adds independently to the polar acceleration:

<Equation label="Cylindrical acceleration" tex="\mathbf a=(\ddot r-r\dot\theta^2)\mathbf e_r+(r\ddot\theta+2\dot r\dot\theta)\mathbf e_\theta+\ddot z\mathbf e_z" />

<PhysicsDerivation
  items={[
    { label: "Start from position", tex: "\\mathbf r=r\\mathbf e_r+z\\mathbf e_z" },
    { label: "Differentiate radial part", tex: "\\frac{d}{dt}(r\\mathbf e_r)=\\dot r\\mathbf e_r+r\\dot\\theta\\mathbf e_\\theta" },
    { label: "Differentiate vertical part", tex: "\\frac{d}{dt}(z\\mathbf e_z)=\\dot z\\mathbf e_z" },
    { label: "Differentiate velocity", tex: "\\mathbf a=(\\ddot r-r\\dot\\theta^2)\\mathbf e_r+(r\\ddot\\theta+2\\dot r\\dot\\theta)\\mathbf e_\\theta+\\ddot z\\mathbf e_z" },
  ]}
/>

## Rules

<Equation label="Basis derivatives" tex="\dot{\mathbf e}_r=\dot\theta\mathbf e_\theta,\quad \dot{\mathbf e}_\theta=-\dot\theta\mathbf e_r,\quad \dot{\mathbf e}_z=\mathbf 0" />

<Equation label="Cylindrical speed" tex="|\mathbf v|=\sqrt{\dot r^2+r^2\dot\theta^2+\dot z^2}" />

<Equation label="Cartesian conversion" tex="x=r\cos\theta,\quad y=r\sin\theta,\quad z=z" />

- The coordinate \(r\) is non-negative.
- The coordinate \(\theta\) is angular, so calculus formulas use radians.
- The vertical direction \(\mathbf e_z\) does not rotate with \(\theta\).
- Cylindrical formulas reduce to plane polar formulas when \(z\) is constant.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A point has cylindrical coordinates \\(r=2\\), \\(\\theta=\\pi/2\\), and \\(z=5\\). What are its Cartesian coordinates?",
      answer: "Use \\(x=r\\cos\\theta\\) and \\(y=r\\sin\\theta\\). Then \\(x=2\\cos(\\pi/2)=0\\), \\(y=2\\sin(\\pi/2)=2\\), and \\(z=5\\). The Cartesian coordinates are \\((0,2,5)\\).",
    },
    {
      title: "Example 2",
      question: "If \\(r=R\\), \\(\\dot\\theta=\\omega\\), and \\(\\dot z=u\\) are constant, find velocity.",
      answer: "Because \\(\\dot r=0\\), the velocity is \\(\\mathbf v=R\\omega\\mathbf e_\\theta+u\\mathbf e_z\\). It has azimuthal and vertical components.",
    },
    {
      title: "Example 3",
      question: "When does cylindrical acceleration reduce to plane polar acceleration?",
      answer: "If \\(z\\) is constant, then \\(\\dot z=0\\) and \\(\\ddot z=0\\). The \\(\\mathbf e_z\\) term disappears, leaving the plane polar acceleration formula.",
    },
  ]}
/>

## Checks

- Do not confuse radial distance \(r\) with the full position vector \(\mathbf r\).
- Include the \(\dot z\mathbf e_z\) and \(\ddot z\mathbf e_z\) terms when vertical motion is present.
- Do not treat \(\mathbf e_r\) and \(\mathbf e_\theta\) as fixed vectors when \(\theta\) changes.
- Check whether the system has axial symmetry before choosing cylindrical coordinates for simplification.`;
