export const content = String.raw`## Principle

Force is a vector that changes the momentum of a particle. The net force is the vector sum of all forces acting on the particle.

Newton's second law states that net force equals the rate of change of momentum. When mass is constant, this becomes the familiar relation between force and acceleration.

## Notation

<Notation
  items={[
    { symbol: "m", meaning: "mass of the particle", unit: "kg" },
    { symbol: "\\mathbf v", meaning: "velocity", unit: "m s^{-1}" },
    { symbol: "\\mathbf a", meaning: "acceleration", unit: "m s^{-2}" },
    { symbol: "\\mathbf p", meaning: "linear momentum", unit: "kg m s^{-1}" },
    { symbol: "\\mathbf F", meaning: "force", unit: "N" },
    { symbol: "\\mathbf F_{\\text{net}}", meaning: "vector sum of all forces", unit: "N" },
  ]}
/>

## Method

### Step 1: Identify all forces

Draw or list every force acting on the particle. Forces add as vectors, so opposite directions subtract componentwise.

### Step 2: Form the net force

Add force components in each direction:

<Equation label="Net force" tex="\mathbf F_{\text{net}}=\sum_i\mathbf F_i" />

### Step 3: Connect force to motion

Use Newton's second law in momentum form:

<Equation label="Newton's second law" tex="\mathbf F_{\text{net}}=\frac{d\mathbf p}{dt}" />

For constant mass, momentum is \(\mathbf p=m\mathbf v\), so the force-acceleration relation follows.

<PhysicsDerivation
  items={[
    { label: "Momentum", tex: "\\mathbf p=m\\mathbf v" },
    { label: "Differentiate momentum", tex: "\\frac{d\\mathbf p}{dt}=\\frac{d}{dt}(m\\mathbf v)" },
    { label: "Use constant mass", tex: "\\frac{d\\mathbf p}{dt}=m\\frac{d\\mathbf v}{dt}" },
    { label: "Recognize acceleration", tex: "\\frac{d\\mathbf p}{dt}=m\\mathbf a" },
  ]}
/>

## Rules

<Equation label="Momentum" tex="\mathbf p=m\mathbf v" />

<Equation label="Constant mass form" tex="\mathbf F_{\text{net}}=m\mathbf a" />

<Equation label="Newton unit" tex="1\,N=1\,kg\,m\,s^{-2}" />

- Net force is zero exactly when momentum is constant.
- If mass is constant and nonzero, acceleration points in the direction of the net force.
- Individual forces may be nonzero even when the net force is zero.
- Component equations such as \(F_x=ma_x\) and \(F_y=ma_y\) are scalar equations from the vector law.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(2\\) kg particle has acceleration \\(3\\mathbf i-4\\mathbf j\\) \\(m s^{-2}\\). Find the net force.",
      answer: "Use \\(\\mathbf F_{\\text{net}}=m\\mathbf a\\). The force is \\(2(3\\mathbf i-4\\mathbf j)=6\\mathbf i-8\\mathbf j\\) N.",
    },
    {
      title: "Example 2",
      question: "Two horizontal forces \\(5\\mathbf i\\) N and \\(-2\\mathbf i\\) N act on a particle. What is the net force?",
      answer: "Add components: \\(\\mathbf F_{\\text{net}}=5\\mathbf i-2\\mathbf i=3\\mathbf i\\) N. The net force points in the positive \\(x\\)-direction.",
    },
    {
      title: "Example 3",
      question: "Why can a particle have several forces acting on it but zero acceleration?",
      answer: "Acceleration depends on net force, not on the number of individual forces. If the vector sum is \\(\\mathbf 0\\), then \\(m\\mathbf a=\\mathbf 0\\), so a constant-mass particle has \\(\\mathbf a=\\mathbf 0\\).",
    },
  ]}
/>

## Checks

- Use net force, not one selected force, in Newton's second law.
- Keep forces as vectors until components are deliberately chosen.
- Check units: \(kg\,m\,s^{-2}\) is a newton.
- Do not use \(\mathbf F=m\mathbf a\) when mass is changing unless the modelling assumptions justify it.`;
