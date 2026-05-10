export const content = String.raw`## Principle

Lorentz transformations convert event coordinates between inertial frames while preserving the speed of light.

## Notation

<Notation
  items={[
    { symbol: "S, S'", meaning: "inertial frames with \\(S'\\) moving at speed \\(v\\) along \\(+x\\)", unit: "" },
    { symbol: "x,t", meaning: "event coordinates in \\(S\\)", unit: "m, s" },
    { symbol: "x',t'", meaning: "event coordinates in \\(S'\\)", unit: "m, s" },
    { symbol: "u_x", meaning: "object velocity component in \\(S\\)", unit: "m s^{-1}" },
    { symbol: "u_x'", meaning: "object velocity component in \\(S'\\)", unit: "m s^{-1}" },
    { symbol: "\\gamma", meaning: "Lorentz factor for frame speed \\(v\\)", unit: "" },
    { symbol: "\\beta", meaning: "\\(v/c\\)", unit: "" },
    { symbol: "c", meaning: "speed of light", unit: "m s^{-1}" },
  ]}
/>

## Method

### Derivation 1: Linear transformation assumptions

The postulates of special relativity require: (1) the laws of physics are the same in all inertial frames, and (2) the speed of light \(c\) is the same in all inertial frames. These constrain the form of the transformation between frames.

For origins aligned at \(t=t'=0\), assume the transformation is linear:

<PhysicsDerivation
  items={[
    {
      label: "Position transform",
      tex: "x'=\\gamma x - \\alpha t",
      note: "Linear in both coordinates; \\(\\alpha\\) and \\(\\gamma\\) are constants determined by physics.",
    },
    {
      label: "Time transform",
      tex: "t'=\\beta t - \\delta x",
      note: "Time can mix with position at relativistic speeds.",
    },
  ]}
/>

### Derivation 2: Use the light-signal condition

A light pulse emitted at the origin when frames coincide satisfies \(x=ct\) in frame \(S\) and \(x'=ct'\) in frame \(S'\).

<PhysicsDerivation
  items={[
    {
      label: "Substitute light signal",
      tex: "ct'=\\gamma(ct)-\\alpha t",
    },
    {
      label: "Use time transform",
      tex: "c(\\beta t-\\delta x)=\\gamma c t-\\alpha t",
    },
    {
      label: "Collect time terms",
      tex: "c\\beta t-c\\delta x=\\gamma c t-\\alpha t",
    },
    {
      label: "Compare coefficients of t",
      tex: "c\\beta-\\alpha=\\gamma c",
    },
    {
      label: "Consider x=0 in S'",
      tex: "x'=\\gamma(0)-\\alpha t=0\\Rightarrow\\alpha=\\gamma v",
      note: "The origin of S' moves at speed v in S, so x'=0 when x=vt.",
    },
    {
      label: "Substitute \\(\\alpha\\)",
      tex: "c\\beta-\\gamma v=\\gamma c",
    },
    {
      label: "Solve for \\(\\beta\\)",
      tex: "\\beta=\\gamma\\left(1+\\frac{v}{c}\\right)",
    },
    {
      label: "Apply light-signal condition for \\(x'=ct'\\)",
      tex: "ct=\\gamma ct'+\\gamma vt'",
      note: "From S' perspective, the light signal satisfies x=ct.",
    },
    {
      label: "Solve for \\(\\gamma\\) and \\(\\delta\\)",
      tex: "\\gamma=\\frac{1}{\\sqrt{1-v^2/c^2}}",
    },
    {
      label: "Lorentz x-transform",
      tex: "x'=\\gamma(x-vt)",
    },
    {
      label: "Lorentz t-transform",
      tex: "t'=\\gamma\\left(t-\\frac{vx}{c^2}\\right)",
      note: "Time is not absolute; it depends on the observer's state of motion.",
    },
  ]}
/>

### Derivation 3: Transverse coordinates

Motion perpendicular to the relative velocity is unaffected.

<PhysicsDerivation
  items={[
    {
      label: "Transverse symmetry",
      tex: "y'=y,\\qquad z'=z",
      note: "No relative motion means no length change in perpendicular directions.",
    },
  ]}
/>

### Derivation 4: Inverse transformation

To transform from \(S'\) back to \(S\), replace \(v\) with \(-v\).

<PhysicsDerivation
  items={[
    {
      label: "Inverse position",
      tex: "x=\\gamma(x'+vt')",
    },
    {
      label: "Inverse time",
      tex: "t=\\gamma\\left(t'+\\frac{vx'}{c^2}\\right)",
    },
  ]}
/>

### Derivation 5: Velocity addition

Apply the coordinate transform to two nearby events on the object's path.

<PhysicsDerivation
  items={[
    {
      label: "Differential position",
      tex: "\\Delta x'=\\gamma(\\Delta x-v\\Delta t)",
    },
    {
      label: "Differential time",
      tex: "\\Delta t'=\\gamma\\left(\\Delta t-\\frac{v\\Delta x}{c^2}\\right)",
    },
    {
      label: "Divide by time difference",
      tex: "u_x'=\\frac{\\Delta x'}{\\Delta t'}=\\frac{\\Delta x-v\\Delta t}{\\Delta t-\\frac{v\\Delta x}{c^2}}",
    },
    {
      label: "Divide numerator and denominator by \\(\\Delta t\\)",
      tex: "u_x'=\\frac{\\frac{\\Delta x}{\\Delta t}-v}{1-\\frac{v}{c^2}\\frac{\\Delta x}{\\Delta t}}",
    },
    {
      label: "Substitute \\(u_x=\\Delta x/\\Delta t\\)",
      tex: "u_x'=\\frac{u_x-v}{1-u_xv/c^2}",
      note: "This reduces to the Galilean result when v and u are much smaller than c.",
    },
    {
      label: "Inverse velocity",
      tex: "u_x=\\frac{u_x'+v}{1+u_x'v/c^2}",
    },
  ]}
/>

## Rules

<Equation label="Lorentz x" tex="x'=\gamma(x-vt)" />

<Equation label="Lorentz t" tex="t'=\gamma\left(t-\frac{vx}{c^2}\right)" />

<Equation label="Transverse" tex="y'=y,\\qquad z'=z" />

<Equation label="Velocity addition" tex="u_x'=\frac{u_x-v}{1-u_xv/c^2}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "In \(S\), an event occurs at \(x=900\,\mathrm m\), \(t=4.00\,\mu\mathrm s\). Frame \(S'\) moves at \(0.600c\). Find \(x'\).",
      answer: "\[\\gamma=1.25\]\[x'=1.25(900-(0.600)(3.00\\times10^8)(4.00\\times10^{-6}))=225\,\mathrm m\]",
    },
    {
      title: "Example 2",
      question: "A particle moves at \(0.900c\) in \(S\). Frame \(S'\) moves at \(0.500c\) in the same direction. Find \(u_x'\).",
      answer: "\[u_x'=\frac{0.900c-0.500c}{1-(0.900)(0.500)}=0.727c\]",
    },
  ]}
/>

## Checks

- Set the frame direction before assigning the sign of \(v\).
- Transform events, not vague observations.
- Velocity addition never gives a massive object speed greater than \(c\).
- The Galilean result is recovered when \(v/c\) and \(u/c\) are small.`;