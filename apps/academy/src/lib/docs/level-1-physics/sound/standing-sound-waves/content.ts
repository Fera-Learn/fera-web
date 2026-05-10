export const content = String.raw`## Principle

Standing sound waves are fixed pressure and displacement patterns in an air column.

## Notation

<Notation
  items={[
    { symbol: "L", meaning: "air-column length", unit: "m" },
    { symbol: "\\lambda_n", meaning: "allowed wavelength", unit: "m" },
    { symbol: "f_n", meaning: "allowed frequency", unit: "Hz" },
    { symbol: "v", meaning: "sound speed", unit: "m s^{-1}" },
    { symbol: "n", meaning: "mode number", unit: "1" },
  ]}
/>

## Method

At an open end, the pressure variation is approximately zero. At a closed end, air displacement is approximately zero.

<PhysicsDerivation
  items={[
    {
      label: "Open-open geometry",
      tex: "L=n\\frac{\\lambda_n}{2}",
      note: "Both ends are pressure nodes.",
    },
    {
      label: "Open-open frequencies",
      tex: "f_n=\\frac{nv}{2L}",
    },
    {
      label: "Open-closed geometry",
      tex: "L=(2n-1)\\frac{\\lambda_n}{4}",
      note: "One pressure node and one pressure antinode fit in the fundamental.",
    },
    {
      label: "Open-closed frequencies",
      tex: "f_n=\\frac{(2n-1)v}{4L}",
    },
  ]}
/>

Open-open pipes support all integer harmonics. Open-closed pipes support only odd harmonics in the ideal model.

## Rules

These are the compact air-column results.

<Equation label="Open-open wavelengths" tex="\lambda_n=\frac{2L}{n}" />

<Equation label="Open-open frequencies" tex="f_n=\frac{nv}{2L}" />

<Equation label="Open-closed wavelengths" tex="\lambda_n=\frac{4L}{2n-1}" />

<Equation label="Open-closed frequencies" tex="f_n=\frac{(2n-1)v}{4L}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "An open-open pipe has length \\(0.85\\,\\mathrm{m}\\). Use \\(v=340\\,\\mathrm{m\\,s^{-1}}\\) to find its fundamental frequency.",
      answer: "\\[f_1=\\frac{v}{2L}=\\frac{340}{2(0.85)}=200\\,\\mathrm{Hz}\\]",
    },
    {
      title: "Example 2",
      question: "An open-closed pipe has the same length. Find its fundamental frequency.",
      answer: "\\[f_1=\\frac{v}{4L}=\\frac{340}{4(0.85)}=100\\,\\mathrm{Hz}\\]",
    },
  ]}
/>

## Checks

- Open end means pressure node, not displacement node.
- Closed end means displacement node and pressure antinode.
- Open-open pipes have harmonics \\(f_n=nf_1\\).
- Open-closed pipes have odd harmonics \\(f_1,3f_1,5f_1,\ldots\\).`;
