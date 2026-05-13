export const content = String.raw`## Principle

Angular momentum measures rotational motion about a chosen origin. For a particle, it is the cross product of position and linear momentum.

Torque measures how a force changes angular momentum. About a fixed origin, the time derivative of angular momentum equals the net torque.

## Notation

<Notation
  items={[
    { symbol: "\\mathbf r", meaning: "position vector from the chosen origin to the particle", unit: "m" },
    { symbol: "\\mathbf p", meaning: "linear momentum", unit: "kg m s^{-1}" },
    { symbol: "\\mathbf F", meaning: "force", unit: "N" },
    { symbol: "\\mathbf L", meaning: "angular momentum about the origin", unit: "kg m^2 s^{-1}" },
    { symbol: "\\boldsymbol\\tau", meaning: "torque about the origin", unit: "N m" },
    { symbol: "\\times", meaning: "vector cross product" },
  ]}
/>

## Method

### Step 1: Choose the origin

Angular momentum and torque are measured about an origin. Changing the origin can change \(\mathbf r\), \(\mathbf L\), and \(\boldsymbol\tau\).

### Step 2: Compute angular momentum

For a particle with position \(\mathbf r\) and momentum \(\mathbf p\):

<Equation label="Angular momentum" tex="\mathbf L=\mathbf r\times\mathbf p" />

### Step 3: Compute torque

For a force \(\mathbf F\) applied at position \(\mathbf r\):

<Equation label="Torque" tex="\boldsymbol\tau=\mathbf r\times\mathbf F" />

### Step 4: Relate torque to angular momentum change

For a fixed origin, use the angular momentum balance:

<Equation label="Angular momentum balance" tex="\frac{d\mathbf L}{dt}=\boldsymbol\tau" />

<PhysicsDerivation
  items={[
    { label: "Start with angular momentum", tex: "\\mathbf L=\\mathbf r\\times\\mathbf p" },
    { label: "Differentiate the cross product", tex: "\\frac{d\\mathbf L}{dt}=\\frac{d\\mathbf r}{dt}\\times\\mathbf p+\\mathbf r\\times\\frac{d\\mathbf p}{dt}" },
    { label: "Use momentum parallel to velocity", tex: "\\frac{d\\mathbf r}{dt}\\times\\mathbf p=\\mathbf v\\times m\\mathbf v=\\mathbf 0" },
    { label: "Use Newton's second law", tex: "\\frac{d\\mathbf L}{dt}=\\mathbf r\\times\\mathbf F=\\boldsymbol\\tau" },
  ]}
/>

## Rules

<Equation label="Angular momentum magnitude" tex="|\mathbf L|=|\mathbf r||\mathbf p|\sin\theta" />

<Equation label="Torque magnitude" tex="|\boldsymbol\tau|=|\mathbf r||\mathbf F|\sin\theta" />

<Equation label="Conservation condition" tex="\boldsymbol\tau_{\text{net}}=\mathbf 0\Longrightarrow\frac{d\mathbf L}{dt}=\mathbf 0" />

- The direction of \(\mathbf r\times\mathbf p\) follows the right-hand rule.
- Only the component of momentum perpendicular to \(\mathbf r\) contributes to angular momentum magnitude.
- Zero net torque about an origin means angular momentum about that origin is constant.
- Torque depends on the point about which it is calculated.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Let \\(\\mathbf r=2\\mathbf i\\) m and \\(\\mathbf p=3\\mathbf j\\) \\(kg m s^{-1}\\). Find \\(\\mathbf L\\).",
      answer: "Compute the cross product: \\(\\mathbf L=(2\\mathbf i)\\times(3\\mathbf j)=6\\mathbf k\\) \\(kg m^2 s^{-1}\\).",
    },
    {
      title: "Example 2",
      question: "A force \\(4\\mathbf j\\) N acts at \\(\\mathbf r=3\\mathbf i\\) m. Find the torque.",
      answer: "Use \\(\\boldsymbol\\tau=\\mathbf r\\times\\mathbf F\\). Then \\(\\boldsymbol\\tau=(3\\mathbf i)\\times(4\\mathbf j)=12\\mathbf k\\) N m.",
    },
    {
      title: "Example 3",
      question: "What happens to \\(\\mathbf L\\) if the net torque about the origin is zero?",
      answer: "The balance law gives \\(d\\mathbf L/dt=\\boldsymbol\\tau_{\\text{net}}\\). If \\(\\boldsymbol\\tau_{\\text{net}}=\\mathbf 0\\), then \\(d\\mathbf L/dt=\\mathbf 0\\), so angular momentum is constant.",
    },
  ]}
/>

## Checks

- Always state the origin for angular momentum and torque.
- Do not replace a cross product by ordinary multiplication; direction matters.
- Check whether the force line of action passes through the origin. If it does, torque about that origin is zero.
- Use the right-hand rule for the sign and direction of cross products.`;
