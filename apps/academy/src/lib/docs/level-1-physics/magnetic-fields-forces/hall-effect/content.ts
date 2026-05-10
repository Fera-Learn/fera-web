export const content = String.raw`## Principle

The Hall effect creates a transverse voltage when moving charges are deflected by a magnetic field.

## Notation

<Notation
  items={[
    { symbol: "V_H", meaning: "Hall voltage", unit: "V" },
    { symbol: "I", meaning: "current through the strip", unit: "A" },
    { symbol: "B", meaning: "magnetic field perpendicular to strip", unit: "T" },
    { symbol: "n", meaning: "mobile charge carrier density", unit: "m^{-3}" },
    { symbol: "q", meaning: "carrier charge", unit: "C" },
    { symbol: "t", meaning: "strip thickness along field direction", unit: "m" },
  ]}
/>

## Method

Moving carriers are deflected sideways by the magnetic force. Charge separation builds a transverse electric field until electric and magnetic forces balance.

<PhysicsDerivation
  items={[
    {
      label: "Force balance",
      tex: "|q|E_H=|q|v_dB",
    },
    {
      label: "Hall field",
      tex: "E_H=v_dB",
    },
    {
      label: "Current density",
      tex: "I=n|q|v_dA",
    },
    {
      label: "Hall voltage",
      tex: "V_H=\\frac{IB}{nqt}",
    },
  ]}
/>

The sign of the Hall voltage reveals the sign of the mobile charge carriers.

## Rules

<Equation label="Hall field" tex="E_H=v_dB" />

<Equation label="Hall voltage" tex="V_H=\frac{IB}{nqt}" />

<Equation label="Hall coefficient" tex="R_H=\frac{1}{nq}" />

<Equation label="Hall form" tex="V_H=\frac{R_HIB}{t}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A metal strip carries \\(2.0\\,\\mathrm{A}\\) in \\(0.50\\,\\mathrm{T}\\). With \\(n=8.0\\times10^{28}\\,\\mathrm{m^{-3}}\\), \\(q=1.60\\times10^{-19}\\,\\mathrm{C}\\), and \\(t=1.0\\,\\mathrm{mm}\\), find \\(V_H\\).",
      answer: "\\[V_H=\\frac{IB}{nqt}=\\frac{(2.0)(0.50)}{(8.0\\times10^{28})(1.60\\times10^{-19})(1.0\\times10^{-3})}=7.8\\times10^{-8}\\,\\mathrm{V}\\]",
    },
    {
      title: "Example 2",
      question: "What can the sign of \\(V_H\\) identify?",
      answer: "It identifies whether the mobile carriers are positive or negative.",
    },
  ]}
/>

## Checks

- The Hall voltage is usually small in metals because carrier density is large.
- Reversing current or magnetic field reverses the Hall voltage sign.
- The thickness in \\(V_H=IB/(nqt)\\) is the dimension parallel to \\(\vec B\\).`;
