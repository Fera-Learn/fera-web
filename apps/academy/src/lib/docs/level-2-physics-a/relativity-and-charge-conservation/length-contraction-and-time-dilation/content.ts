export const content = String.raw`## Principle

A fast-moving clock and a fast-moving ruler are measured differently by observers who move relative to them.

Proper length is measured in an object's rest frame, while proper time is measured by one clock present at both events. Other inertial observers measure a contracted longitudinal length and a dilated time interval, with both effects controlled by the same Lorentz factor.

## Notation

<Notation
  items={[
    { symbol: "S,S'", meaning: "observer frame and object or clock rest frame" },
    { symbol: "v", meaning: "speed of S' along positive x relative to S", unit: "m s^{-1}" },
    { symbol: "c", meaning: "vacuum speed of light", unit: "m s^{-1}" },
    { symbol: "\\beta,\\gamma", meaning: "speed ratio v/c and Lorentz factor", unit: "1, 1" },
    { symbol: "L_0", meaning: "proper length measured in the object's rest frame", unit: "m" },
    { symbol: "L", meaning: "length measured while the object moves parallel to its length", unit: "m" },
    { symbol: "\\Delta\\tau", meaning: "proper time measured by one clock at both events", unit: "s" },
    { symbol: "\\Delta t'", meaning: "time between two events in S'", unit: "s" },
    { symbol: "\\Delta t", meaning: "time between the events in a frame where that clock moves", unit: "s" },
    { symbol: "\\Delta x,\\Delta x'", meaning: "spatial separations between two events in S and S'", unit: "m, m" },
  ]}
/>

## The Core Method

First calculate the Lorentz factor for the relative speed.

\\[
\gamma=\frac{1}{\sqrt{1-v^2/c^2}}.
\tag*{[1]}
\\]

For length, let the object be at rest in \\(S'\\). By definition, the proper length \\(L_0\\) is measured from the two endpoint positions simultaneously in that rest frame. To measure its moving length in \\(S\\), the observer must also record both endpoint positions simultaneously in \\(S\\), so \\(\Delta t=0\\) and \\(\Delta x=L\\).

The Lorentz position transformation for the two endpoint events is

\\[
\Delta x'=\gamma(\Delta x-v\Delta t).
\tag*{[2]}
\\]

Because the endpoints are fixed in \\(S'\\), their spatial separation is \\(\Delta x'=L_0\\) even though the transformed endpoint events need not be simultaneous in \\(S'\\). Substituting the simultaneous measurement in \\(S\\) into [2] gives

\\[
L_0=\gamma L
\quad\Longrightarrow\quad
L=\frac{L_0}{\gamma}
=L_0\sqrt{1-\frac{v^2}{c^2}}.
\tag*{[3]}
\\]

Only the dimension parallel to the relative velocity contracts. The Lorentz transformation leaves transverse coordinates unchanged.

For time, choose two ticks of one clock at rest in \\(S'\\). Both events occur at that clock's position, so \\(\Delta x'=0\\), and the clock measures the proper interval \\(\Delta t'=\Delta\tau\\). The inverse Lorentz time transformation is

\\[
\Delta t=\gamma\left(\Delta t'+\frac{v\Delta x'}{c^2}\right).
\tag*{[4]}
\\]

Substituting the proper-time conditions into [4] gives time dilation.

\\[
\Delta t=\gamma\Delta\tau.
\tag*{[5]}
\\]

The proper interval is identified by the measurement procedure, not by whichever symbol looks smaller. Proper length requires the object's rest frame; proper time requires two events at one place in the clock's rest frame. Since \\(\gamma\ge1\\), equation [3] gives \\(L\le L_0\\), while equation [5] gives \\(\Delta t\ge\Delta\tau\\).

In the low-speed limit \\(v/c\to0\\), \\(\gamma\to1\\), so both equations recover the classical results \\(L\to L_0\\) and \\(\Delta t\to\Delta\tau\\).

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Muon lifetime and laboratory travel distance",
      question: "A muon has proper mean lifetime \\(\\Delta\\tau=2.20\\,\\mu\\mathrm s\\) and moves through a laboratory at \\(v=0.995c\\). Find its mean laboratory lifetime and the mean distance it travels in that frame.",
      answer: "The muon is at rest with the decay clock, so \\(2.20\\,\\mu\\mathrm s\\) is the proper time. First calculate \\[\\gamma=\\frac{1}{\\sqrt{1-0.995^2}}=10.0.\\] Equation [5] gives the laboratory interval: \\[\\Delta t=\\gamma\\Delta\\tau=(10.0)(2.20\\,\\mu\\mathrm s)=22.0\\,\\mu\\mathrm s.\\] The distance must use this laboratory time, not the proper lifetime: \\[d=v\\Delta t=(0.995)(2.998\\times10^8\\,\\mathrm{m\\,s^{-1}})(22.0\\times10^{-6}\\,\\mathrm s)=6.56\\times10^3\\,\\mathrm m=6.56\\,\\mathrm{km}.\\] **Final result:** the laboratory lifetime is \\(22.0\\,\\mu\\mathrm s\\) and the mean laboratory distance is \\(6.56\\,\\mathrm{km}\\). The result is about ten times the nonrelativistic estimate, consistent with \\(\\gamma\\approx10\\).",
    },
    {
      title: "A moving rod and simultaneous endpoints",
      question: "A rod has proper length \\(L_0=5.00\\,\\mathrm m\\) and moves along its length at \\(0.800c\\). What length is measured in the laboratory, and what timing condition is required?",
      answer: "At \\(0.800c\\), \\[\\gamma=\\frac{1}{\\sqrt{1-0.800^2}}=1.667.\\] Equation [3] gives \\[L=\\frac{5.00\\,\\mathrm m}{1.667}=3.00\\,\\mathrm m.\\] The laboratory must record the two endpoint positions at the same laboratory time, \\(\\Delta t=0\\); photographing one end and then the other would mix motion with length. **Final result:** the measured moving length is \\(3.00\\,\\mathrm m\\), parallel to the motion. A transverse width would remain unchanged.",
    },
  ]}
/>
`;
