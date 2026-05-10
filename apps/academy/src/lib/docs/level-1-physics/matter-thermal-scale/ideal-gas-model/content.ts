export const content = String.raw`## Principle

The kinetic model explains ideal-gas pressure as momentum transfer from many molecular collisions with the container walls.

Temperature measures the average translational kinetic energy of the gas molecules.

## Notation

<Notation
  items={[
    { symbol: "N", meaning: "number of molecules", unit: "1" },
    { symbol: "m_0", meaning: "mass of one molecule", unit: "kg" },
    { symbol: "v_{\\mathrm{rms}}", meaning: "root-mean-square molecular speed", unit: "m s^{-1}" },
    { symbol: "\\langle K_{\\mathrm{tr}}\\rangle", meaning: "average translational kinetic energy per molecule", unit: "J" },
    { symbol: "k_B", meaning: "Boltzmann constant", unit: "J K^{-1}" },
    { symbol: "R", meaning: "molar gas constant", unit: "J mol^{-1} K^{-1}" },
    { symbol: "T", meaning: "absolute temperature", unit: "K" },
  ]}
/>

## Method

### Derivation 1: Relate pressure to molecular speed

In a cubical container, a molecule rebounding elastically from a wall reverses one velocity component. Averaging many molecules gives equal sharing among the three directions.

<PhysicsDerivation
  items={[
    {
      label: "Momentum change",
      tex: "\\Delta p_x=2m_0v_x",
    },
    {
      label: "Direction average",
      tex: "\\langle v_x^2\\rangle=\\frac{1}{3}\\langle v^2\\rangle",
    },
    {
      label: "Pressure-speed relation",
      tex: "pV=\\frac{1}{3}Nm_0\\langle v^2\\rangle",
    },
    {
      label: "RMS definition",
      tex: "v_{\\mathrm{rms}}=\\sqrt{\\langle v^2\\rangle}",
    },
  ]}
/>

### Derivation 2: Compare with the ideal-gas equation

The ideal-gas equation in molecular form is \\(pV=Nk_BT\\). Equating the two expressions for \\(pV\\) connects temperature to kinetic energy.

<PhysicsDerivation
  items={[
    {
      label: "Molecular gas equation",
      tex: "pV=Nk_BT",
    },
    {
      label: "Compare pressure forms",
      tex: "\\frac{1}{3}Nm_0v_{\\mathrm{rms}}^2=Nk_BT",
    },
    {
      label: "RMS speed",
      tex: "v_{\\mathrm{rms}}=\\sqrt{\\frac{3k_BT}{m_0}}=\\sqrt{\\frac{3RT}{M}}",
    },
    {
      label: "Average kinetic energy",
      tex: "\\langle K_{\\mathrm{tr}}\\rangle=\\frac{1}{2}m_0v_{\\mathrm{rms}}^2=\\frac{3}{2}k_BT",
    },
  ]}
/>

The model assumes many molecules, random motion, negligible molecular size compared with the container volume, no long-range intermolecular forces, and elastic collisions.

## Rules

These are the compact kinetic-model relations for an ideal gas.

<Equation label="Molecular pressure" tex="pV=\frac{1}{3}Nm_0v_{\mathrm{rms}}^2" />

<Equation label="Molecular ideal gas" tex="pV=Nk_BT" />

<Equation label="Average kinetic energy" tex="\langle K_{\mathrm{tr}}\rangle=\frac{3}{2}k_BT" />

<Equation label="RMS speed" tex="v_{\mathrm{rms}}=\sqrt{\frac{3k_BT}{m_0}}=\sqrt{\frac{3RT}{M}}" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "Find the average translational kinetic energy of one molecule in an ideal gas at \\(300\\,\\mathrm{K}\\).",
      answer: "\\[\\langle K_{\\mathrm{tr}}\\rangle=\\frac{3}{2}k_BT=\\frac{3}{2}(1.38\\times10^{-23})(300)=6.21\\times10^{-21}\\,\\mathrm{J}\\]",
    },
    {
      title: "Example 2",
      question: "Estimate \\(v_{\\mathrm{rms}}\\) for helium atoms at \\(300\\,\\mathrm{K}\\), using \\(M=4.0\\times10^{-3}\\,\\mathrm{kg\\,mol^{-1}}\\).",
      answer: "\\[v_{\\mathrm{rms}}=\\sqrt{\\frac{3RT}{M}}=\\sqrt{\\frac{3(8.31)(300)}{4.0\\times10^{-3}}}=1.37\\times10^3\\,\\mathrm{m\\,s^{-1}}\\]",
    },
  ]}
/>

## Checks

- Use molecular mass \\(m_0\\) with \\(k_B\\), and molar mass \\(M\\) with \\(R\\).
- Temperature must be in kelvins.
- Pressure comes from momentum transfer, not from molecules having a preferred direction.
- Lighter molecules have larger \\(v_\{\\mathrm\{rms\}}\\) at the same temperature.`;
