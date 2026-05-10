export const content = String.raw`## Principle

A temperature scale is a linear calibration rule that assigns numbers to reproducible thermal states.

Celsius and Fahrenheit use different zero points and different degree sizes, so actual temperatures and temperature intervals must be converted differently.

## Notation

<Notation
  items={[
    { symbol: "T_C", meaning: "Celsius temperature", unit: "deg C" },
    { symbol: "T_F", meaning: "Fahrenheit temperature", unit: "deg" },
    { symbol: "\\Delta T_C", meaning: "Celsius temperature interval", unit: "K" },
    { symbol: "\\Delta T_F", meaning: "Fahrenheit temperature interval", unit: "deg" },
  ]}
/>

## Method

Celsius and Fahrenheit agree on two fixed reference states for water at standard atmospheric pressure, but assign different numbers to them.

<PhysicsDerivation
  items={[
    {
      label: "Linear scale",
      tex: "T_F=aT_C+b",
      note: "Use a linear map because equal scale divisions represent equal temperature intervals.",
    },
    {
      label: "Freezing point",
      tex: "32=a(0)+b\\Rightarrow b=32",
    },
    {
      label: "Boiling point",
      tex: "212=a(100)+32",
    },
    {
      label: "Scale slope",
      tex: "a=\\frac{212-32}{100}=\\frac{9}{5}",
    },
    {
      label: "Conversion",
      tex: "T_F=\\frac{9}{5}T_C+32",
    },
  ]}
/>

For an interval, the offset does not apply. A change of \\(10\\,\\mathrm\{^\\circ C\}\\) is not a change of \\(50\\,\\mathrm\{^\\circ F\}\\); only the scale factor matters.

<PhysicsDerivation
  items={[
    {
      label: "Interval conversion",
      tex: "\\Delta T_F=\\frac{9}{5}\\Delta T_C",
    },
    {
      label: "Reverse interval",
      tex: "\\Delta T_C=\\frac{5}{9}\\Delta T_F",
    },
  ]}
/>

## Rules

These are the compact temperature-scale conversions.

<Equation label="Celsius to Fahrenheit" tex="T_F=\frac{9}{5}T_C+32" />

<Equation label="Fahrenheit to Celsius" tex="T_C=\frac{5}{9}(T_F-32)" />

<Equation label="Interval conversion" tex="\Delta T_F=\frac{9}{5}\Delta T_C" />

<Equation label="Reverse interval" tex="\Delta T_C=\frac{5}{9}\Delta T_F" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Convert \\(77\\,\\mathrm{^\\circ F}\\) to Celsius.",
      answer: "\\[T_C=\\frac{5}{9}(77-32)=25\\,\\mathrm{^\\circ C}\\]",
    },
    {
      title: "Example 2",
      question: "A sample warms by \\(18\\,\\mathrm{^\\circ F}\\). Find the temperature change in Celsius degrees.",
      answer: "For an interval, do not subtract 32. Use only the scale factor: \\[\\Delta T_C=\\frac{5}{9}(18)=10\\,\\mathrm{C^\\circ}\\]",
    },
  ]}
/>

## Checks

- Use the offset only for an actual temperature, not for a temperature change.
- A Celsius degree and a kelvin have the same interval size.
- A Fahrenheit degree is smaller than a Celsius degree.
- Always check whether the question asks for a temperature or a temperature interval.`;
