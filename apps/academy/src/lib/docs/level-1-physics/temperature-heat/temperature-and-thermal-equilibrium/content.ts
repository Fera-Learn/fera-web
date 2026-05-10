export const content = String.raw`## Principle

Temperature is the state variable that decides whether two systems in thermal contact can remain unchanged.

If two systems can exchange energy because of a temperature difference, the interaction continues until they reach thermal equilibrium. At equilibrium there is no net heat transfer between them.

## Notation

<Notation
  items={[
    { symbol: "T", meaning: "temperature", unit: "K" },
    { symbol: "T_A,T_B,T_C", meaning: "temperatures of systems A, B, and C", unit: "K" },
    { symbol: "Q", meaning: "energy transferred as heat", unit: "J" },
    { symbol: "H", meaning: "heat current or rate of heat transfer", unit: "W" },
  ]}
/>

## Method

Temperature is defined operationally by equilibrium. A thermometer does not directly read the target system's hidden internal energy; it reaches equilibrium with the target, then reports its own calibrated state.

<PhysicsDerivation
  items={[
    {
      label: "Thermal contact",
      tex: "T_A\\ne T_B\\Rightarrow H_{A\\leftrightarrow B}\\ne0",
      note: "A temperature difference drives net energy transfer.",
    },
    {
      label: "Equilibrium condition",
      tex: "H_{A\\leftrightarrow B}=0\\Rightarrow T_A=T_B",
    },
    {
      label: "Thermometer reading",
      tex: "T_{\\mathrm{thermometer}}=T_{\\mathrm{object}}",
      note: "This is valid only after the thermometer has settled into thermal equilibrium with the object.",
    },
    {
      label: "Zeroth law",
      tex: "T_A=T_C\\quad\\text{and}\\quad T_B=T_C\\Rightarrow T_A=T_B",
    },
  ]}
/>

The zeroth law is what makes thermometers useful. A thermometer can compare systems that never touch each other, because equality of temperature is transitive.

## Rules

These are the compact thermal-equilibrium statements.

<Equation label="Equilibrium" tex="T_A=T_B" />

<Equation label="No net heat flow" tex="T_A=T_B\Rightarrow H_{A\leftrightarrow B}=0" />

<Equation label="Direction of transfer" tex="T_H>T_C\Rightarrow Q_{H\to C}>0" />

<Equation label="Zeroth law" tex="T_A=T_C,\ T_B=T_C\Rightarrow T_A=T_B" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A thermometer initially at \\(18\\,\\mathrm{^\\circ C}\\) is placed in a liquid. After a short time it reads \\(64\\,\\mathrm{^\\circ C}\\) steadily. What temperature is being measured?",
      answer: "Once the reading is steady, the thermometer and liquid are in thermal equilibrium. The thermometer is measuring its own temperature, and at equilibrium that equals the liquid temperature: \\[T_{\\mathrm{liquid}}=64\\,\\mathrm{^\\circ C}\\]",
    },
    {
      title: "Example 2",
      question: "System A is in thermal equilibrium with a copper block C. System B is also in thermal equilibrium with the same block C. What can be concluded about A and B?",
      answer: "By the zeroth law, \\[T_A=T_C\\quad\\text{and}\\quad T_B=T_C\\Rightarrow T_A=T_B\\] Systems A and B have the same temperature, even if they never touch each other directly.",
    },
  ]}
/>

## Checks

- A thermometer must be allowed to reach equilibrium before its reading is meaningful.
- Equal temperatures mean no net heat transfer, not no microscopic interaction.
- Temperature is not the same thing as stored energy.
- Thermal equilibrium is a state condition; it does not describe how fast equilibrium is reached.`;
