export const content = String.raw`## Principle

Taylor expansions make many limits simpler by replacing functions with their leading non-zero terms. Near the limiting point, the lowest power that survives usually controls the limit.

<Equation label="Leading-term idea" tex="f(x)=a_k(x-c)^k+\text{higher powers}" />

This is especially useful for limits that give \(0/0\). Instead of repeatedly differentiating, expand the numerator and denominator until the first non-zero terms appear.

## Notation

<Notation
  items={[
    { symbol: "c", meaning: "point approached in the limit" },
    { symbol: "x-c", meaning: "small quantity tending to zero" },
    { symbol: "a_k(x-c)^k", meaning: "first non-zero term in an expansion" },
    { symbol: "O((x-c)^m)", meaning: "terms of order m or higher" },
    { symbol: "\\sim", meaning: "has the same leading behaviour as" },
  ]}
/>

For Level 1 calculations, it is usually enough to write enough terms explicitly and then identify the first non-zero power.

## Method

### Step 1: Shift the limit point if needed

If \(x\to c\), use \(u=x-c\), so \(u\to0\). Expand in powers of \(u\).

### Step 2: Expand each function only as far as needed

Use standard series such as

<Equation label="Useful small-x expansions" tex="e^x=1+x+\frac{x^2}{2}+\cdots,\quad \sin x=x-\frac{x^3}{3!}+\cdots,\quad \cos x=1-\frac{x^2}{2}+\cdots" />

### Step 3: Cancel the lowest common power

After substituting expansions, factor out the smallest power that appears in both numerator and denominator.

<PhysicsDerivation
  items={[
    { label: "Typical form", tex: "\\frac{a_kx^k+\\text{higher powers}}{b_kx^k+\\text{higher powers}}" },
    { label: "Factor the leading power", tex: "\\frac{x^k(a_k+\\text{smaller corrections})}{x^k(b_k+\\text{smaller corrections})}" },
    { label: "Cancel and take the limit", tex: "\\lim_{x\\to0}\\frac{a_k+\\text{smaller corrections}}{b_k+\\text{smaller corrections}}=\\frac{a_k}{b_k}" },
  ]}
/>

## Rules

<Equation label="Sine leading term" tex="\sin x\sim x\quad(x\to0)" />

<Equation label="Cosine difference leading term" tex="1-\cos x\sim\frac{x^2}{2}\quad(x\to0)" />

<Equation label="Exponential difference leading term" tex="e^x-1\sim x\quad(x\to0)" />

<Equation label="Logarithm leading term" tex="\ln(1+x)\sim x\quad(x\to0)" />

These leading behaviours assume radians for trigonometric functions.

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Evaluate \\(\\lim_{x\\to0}\\frac{1-\\cos x}{x^2}\\).",
      answer: "Use \\(\\cos x=1-x^2/2+\\cdots\\). Then \\(1-\\cos x=x^2/2+\\cdots\\). Divide by \\(x^2\\) to get \\(1/2+\\cdots\\), so the limit is \\(1/2\\).",
    },
    {
      title: "Example 2",
      question: "Evaluate \\(\\lim_{x\\to0}\\frac{e^x-1-x}{x^2}\\).",
      answer: "Use \\(e^x=1+x+x^2/2+\\cdots\\). The numerator is \\(x^2/2+\\cdots\\). Dividing by \\(x^2\\) gives \\(1/2+\\cdots\\), so the limit is \\(1/2\\).",
    },
    {
      title: "Example 3",
      question: "Why do Taylor limits appear in small-angle physics?",
      answer: "Small-angle models compare quantities as an angle tends to zero. Taylor expansions show, for example, that \\(\\sin x\\) and \\(x\\) have the same leading behaviour, while \\(1-\\cos x\\) is quadratic.",
    },
  ]}
/>

## Checks

- Expand far enough to find the first non-zero term after cancellation.
- Do not keep unnecessary higher powers once the leading terms decide the limit.
- Trigonometric Taylor limits require radians.
- If leading terms cancel, expand to the next order.`;
