export const content = String.raw`## Principle

Significant figures report precision after the physical calculation is complete.

## Notation

<Notation
  items={[
    { symbol: "s", meaning: "number of significant figures", unit: "none" },
    { symbol: "d", meaning: "decimal place", unit: "none" },
    { symbol: "x_{\\mathrm{raw}}", meaning: "unrounded result", unit: "varies" },
    { symbol: "x_{\\mathrm{reported}}", meaning: "rounded result", unit: "varies" },
  ]}
/>

## Method

Rounding is a reporting step; guard digits preserve the calculation until the final value is chosen.

<PhysicsDerivation
  items={[
    {
      label: "Guard digits",
      tex: "x_{\\mathrm{raw}}\\rightarrow \\text{keep extra digits}",
    },
    {
      label: "Products",
      tex: "\\times,\\div\\Rightarrow s_{\\mathrm{reported}}=\\min(s_1,s_2,\\ldots)",
    },
    {
      label: "Sums",
      tex: "+,-\\Rightarrow d_{\\mathrm{reported}}=\\text{least precise decimal place}",
    },
    {
      label: "Round once",
      tex: "x_{\\mathrm{raw}}\\rightarrow x_{\\mathrm{reported}}",
    },
  ]}
/>

## Rules

<Equation label="Multiply divide" tex="s_{\mathrm{reported}}=\min(s_1,s_2,\ldots)" />

<Equation label="Add subtract" tex="d_{\mathrm{reported}}=\text{least precise decimal place}" />

<Equation label="Rounding error" tex="|x_{\mathrm{reported}}-x_{\mathrm{raw}}|\le\frac{1}{2}\text{ place value}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Report \\(2.36\\times4.1\\) with appropriate significant figures.",
      answer: "The inputs have 3 and 2 significant figures, so the product has 2: \\[2.36(4.1)=9.676\\rightarrow9.7\\]",
    },
  ]}
/>

## Checks

- Exact counted numbers do not limit precision.
- Leading zeros are placeholders.
- Captive zeros are significant.
- Scientific notation makes precision explicit.`;
