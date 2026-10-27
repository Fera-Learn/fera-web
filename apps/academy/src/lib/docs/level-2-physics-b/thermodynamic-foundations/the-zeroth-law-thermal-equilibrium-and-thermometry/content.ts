export const content = String.raw`## Principle

A thermometer works by touching an object and eventually reaching the same temperature as it. Once the thermometer reading stops changing, its temperature tells us the object's temperature.

## Notation

<Notation
  items={[
    { symbol: "T_A,T_B,T_C", meaning: "temperatures of objects A, B, and C", unit: "K, K, K" },
    { symbol: "X", meaning: "a measurable sensor reading, such as resistance" },
    { symbol: "X_0,X_1", meaning: "sensor readings at two known temperatures" },
    { symbol: "T_0,T_1", meaning: "the two known calibration temperatures", unit: "K, K" },
    { symbol: "C_s,C_{th}", meaning: "heat capacities of the system and thermometer", unit: "J K^{-1}, J K^{-1}" },
    { symbol: "T_{s,i},T_{th,i}", meaning: "initial temperatures of the system and thermometer", unit: "K, K" },
    { symbol: "T_f", meaning: "final shared temperature", unit: "K" },
  ]}
/>

## The Core Method

The thermometer acts as a third system. If it reaches thermal equilibrium separately with systems A and B at the same reading, the zeroth law says A and B share a temperature.

<PhysicsDiagram slug="zeroth-law-thermometry" />

Two objects are in **thermal equilibrium** when no net energy moves between them as heat. In that situation, they have the same temperature.

The zeroth law says that temperature comparisons are consistent. If object A has the same temperature as thermometer C, and object B also has the same temperature as C, then A and B have the same temperature:

\\[
T_A=T_C
\quad\text{and}\quad
T_B=T_C
\quad\Longrightarrow\quad
T_A=T_B.
\tag*{[1]}
\\]

A thermometer does not measure temperature directly. It measures something that changes with temperature—such as the volume of a liquid or the electrical resistance of a wire—and converts that reading into a temperature.

If the sensor changes linearly between two known calibration points, an unknown temperature is found by interpolation:

\\[
T=T_0+
\frac{T_1-T_0}{X_1-X_0}(X-X_0).
\tag*{[2]}
\\]

<CartesianGrid
  className="mx-auto max-w-md"
  height={250}
  title="Turning a sensor reading into temperature"
  caption="Two known points set the calibration line. An unknown sensor reading can then be converted into a temperature."
  xRange={{ min: 100, max: 140, step: 10, label: "sensor reading X" }}
  yRange={{ min: 270, max: 380, step: 20, label: "temperature (K)" }}
>
  <Curve
    color="var(--chart-1)"
    points={[
      { x: 100, y: 273.15 },
      { x: 109.625, y: 298.15 },
      { x: 119.25, y: 323.15 },
      { x: 128.875, y: 348.15 },
      { x: 138.5, y: 373.15 },
    ]}
  />
  <Point x={100} y={273.15} label="known point 1" />
  <Point x={138.5} y={373.15} label="known point 2" />
  <Point color="var(--chart-2)" x={119.25} y={323.15} label="unknown reading" />
</CartesianGrid>

A real thermometer slightly changes the temperature it is trying to measure. Energy moves between the thermometer and the object until they reach a shared temperature:

\\[
T_f=
\frac{C_sT_{s,i}+C_{th}T_{th,i}}
{C_s+C_{th}}.
\tag*{[3]}
\\]

To make this disturbance small, the thermometer should have a much smaller heat capacity than the object, and we must wait for its reading to settle.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Calibrate a thermometer",
      question: "A sensor reads \\(X_0=100.0\\) at \\(T_0=273.15\\,\\mathrm K\\) and \\(X_1=138.5\\) at \\(T_1=373.15\\,\\mathrm K\\). Assuming a straight calibration line, find the temperature when \\(X=119.25\\).",
      answer: "The reading \\(119.25\\) lies halfway between \\(100.0\\) and \\(138.5\\). Equation \\([2]\\) gives \\[T=273.15+\\frac{373.15-273.15}{138.5-100.0}(119.25-100.0)=323.15\\,\\mathrm K.\\] This is also halfway between the two calibration temperatures, as expected. Final result: \\(T=323.15\\,\\mathrm K\\).",
    },
    {
      title: "Does the thermometer disturb the system?",
      question: "A system at \\(300.0\\,\\mathrm K\\) has heat capacity \\(1000\\,\\mathrm{J\\,K^{-1}}\\). A thermometer at \\(290.0\\,\\mathrm K\\) has heat capacity \\(10.0\\,\\mathrm{J\\,K^{-1}}\\). Find their final shared temperature.",
      answer: "Use equation \\([3]\\): \\[T_f=\\frac{(1000)(300.0)+(10.0)(290.0)}{1000+10.0}=299.901\\,\\mathrm K.\\] The thermometer lowers the system temperature by only \\(0.099\\,\\mathrm K\\) because its heat capacity is much smaller. Final result: the shared temperature is \\(299.901\\,\\mathrm K\\).",
    },
  ]}
/>
`;
