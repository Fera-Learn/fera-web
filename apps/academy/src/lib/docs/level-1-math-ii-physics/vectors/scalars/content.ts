export const content = String.raw`## Principle

A scalar is a quantity described by one numerical value, together with a unit when the quantity is physical. A scalar has size but no direction.

Physical scalars include temperature, density, elapsed time, electric charge, pressure, frequency, mass, and speed. The unit is part of the physical meaning: \(20\,K\), \(20\,s\), and \(20\,C\) are different scalar quantities.

## Notation

<Notation
  items={[
    { symbol: "s", meaning: "speed, a scalar magnitude of velocity" },
    { symbol: "T", meaning: "temperature, a scalar quantity" },
    { symbol: "\\rho", meaning: "density, mass per unit volume" },
    { symbol: "t", meaning: "time or elapsed time" },
    { symbol: "m", meaning: "mass" },
    { symbol: "q", meaning: "electric charge" },
    { symbol: "\\mathbf x", meaning: "position vector used as the input to a scalar field" },
    { symbol: "\\mathbb R", meaning: "the real numbers" },
    { symbol: "\\mathbb Q", meaning: "the rational numbers" },
    { symbol: "\\mathbb C", meaning: "the complex numbers" },
  ]}
/>

A scalar can be a constant, such as \(m=2\,kg\), or a function, such as \(T(t)\) for temperature changing with time or \(\rho(\mathbf x)\) for density changing with position \(\mathbf x\).

## Method

### Step 1: Ask whether direction is required

Decide what information is needed to describe the quantity. If one numerical value is enough and no direction is part of the description, classify the quantity as a scalar.

### Step 2: Choose the number set

State the number set being used. Most physical scalar measurements use real numbers \(\mathbb R\). Some exact counting or ratio models use rational numbers \(\mathbb Q\), and some wave or circuit models use complex numbers \(\mathbb C\).

### Step 3: Attach the correct unit

If the scalar is physical, write the unit with the value. Temperature may use \(K\), density may use \(kg\,m^{-3}\), elapsed time may use \(s\), pressure may use \(Pa\), electric charge may use \(C\), and frequency may use \(Hz\).

## Rules

<Equation label="Scalar addition" tex="a+b\in S" />

<Equation label="Scalar multiplication" tex="ab\in S" />

In these rules, \(a\) and \(b\) are scalars and \(S\) is the chosen number set, such as \(\mathbb R\), \(\mathbb Q\), or \(\mathbb C\). Addition and multiplication stay inside the chosen number set when that set is closed under those operations.

<Equation label="Scalar field" tex="f:D\to S" />

A scalar field is a scalar-valued function: each input point in the domain \(D\) is assigned one scalar value. Examples include a temperature field \(T(t)\), a density field \(\rho(\mathbf x)\), or a pressure field \(p(\mathbf x,t)\).

- Scalars can carry physical units such as \(K\), \(kg\,m^{-3}\), \(s\), \(Pa\), \(C\), or \(Hz\).
- Adding physical scalars is meaningful only when the units are compatible.
- Multiplying or dividing physical scalars combines units according to the same operation.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Why is temperature a scalar?",
      answer: "A temperature such as \\(295\\,K\\) gives one numerical value with a unit. It does not point north, east, up, or down, so it is a scalar.",
    },
    {
      title: "Example 2",
      question: "How can density be a scalar if it changes from place to place?",
      answer: "Density can be a scalar field. The function \\(\\rho(\\mathbf x)\\) assigns one density value, such as \\(kg\\,m^{-3}\\), to each position \\(\\mathbf x\\).",
    },
    {
      title: "Example 3",
      question: "Classify elapsed time and electric charge as scalar quantities.",
      answer: "Elapsed time \\(t\\) is described by one value with unit \\(s\\). Electric charge \\(q\\) is described by one value with unit \\(C\\). Neither quantity requires direction.",
    },
    {
      title: "Example 4",
      question: "Why is speed scalar even though velocity is a vector?",
      answer: "Speed \\(s\\) is the magnitude of velocity. If the velocity is \\(\\mathbf v\\), then the speed is \\(s=|\\mathbf v|\\). The magnitude is one non-negative number with unit such as \\(m\\,s^{-1}\\), so speed is scalar.",
    },
  ]}
/>

## Checks

- A scalar can be negative when the model permits it, such as a temperature difference, electric charge, or signed pressure relative to a reference.
- A scalar can depend on position or time, as in \(T(t)\) or \(\rho(\mathbf x)\), and still have no direction.
- A scalar is not automatically unitless. Physical scalars usually need units, while pure numbers may have unit \(1\).`;
