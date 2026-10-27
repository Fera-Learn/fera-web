export const content = String.raw`## Principle

Two observers moving steadily relative to one another must still agree on the outcome of every local physical experiment.

Special relativity is built from two postulates: every inertial frame uses the same physical laws, and every inertial observer measures the same vacuum light speed. Space and time coordinates must consequently mix through Lorentz rather than Galilean transformations.

## Notation

<Notation
  items={[
    { symbol: "S,S'", meaning: "inertial frames, with S' moving at speed v along positive x relative to S" },
    { symbol: "x,y,z,t", meaning: "event coordinates in S", unit: "m, m, m, s" },
    { symbol: "x',y',z',t'", meaning: "coordinates of the same event in S'", unit: "m, m, m, s" },
    { symbol: "v", meaning: "relative frame speed", unit: "m s^{-1}" },
    { symbol: "c", meaning: "vacuum speed of light", unit: "m s^{-1}" },
    { symbol: "\\beta", meaning: "dimensionless frame speed v/c", unit: "1" },
    { symbol: "\\gamma", meaning: "Lorentz factor", unit: "1" },
    { symbol: "\\Delta x,\\Delta t", meaning: "separations between two events in S", unit: "m, s" },
    { symbol: "\\Delta x',\\Delta t'", meaning: "separations between the same events in S'", unit: "m, s" },
    { symbol: "\\Delta y,\\Delta z,\\Delta y',\\Delta z'", meaning: "transverse separations between the same events in S and S'", unit: "m, m, m, m" },
  ]}
/>

## The Core Method

The first postulate states that no inertial frame is physically preferred: an experiment performed entirely inside one inertial laboratory cannot reveal a special state of uniform motion. The second states that light in vacuum has speed \\(c\\) for every inertial observer, independent of the source's motion.

Define the dimensionless speed and Lorentz factor by

\\[
\beta=\frac{v}{c},
\qquad
\gamma=\frac{1}{\sqrt{1-\beta^2}}
=\frac{1}{\sqrt{1-v^2/c^2}}.
\tag*{[1]}
\\]

For \\(|v|\lt c\\), \\(\gamma\ge1\\). When the origins coincide at \\(t=t'=0\\), the coordinate transformation consistent with both postulates is

\\[
\begin{aligned}
x'&=\gamma(x-vt),
&t'&=\gamma\left(t-\frac{vx}{c^2}\right),\\
y'&=y,
&z'&=z.
\end{aligned}
\tag*{[2]}
\\]

The sign convention matters: equation [2] assumes that \\(S'\\) moves along positive \\(x\\) as seen from \\(S\\). The inverse transformation is obtained by replacing \\(v\\) with \\(-v\\).

To verify the light-speed postulate, consider a pulse moving along positive \\(x\\) in \\(S\\), so \\(x=ct\\). Substitution into [2] gives

\\[
\begin{aligned}
x'&=\gamma(c-v)t,\\
t'&=\gamma\left(1-\frac{v}{c}\right)t,\\
\frac{x'}{t'}&=\frac{c-v}{1-v/c}=c.
\end{aligned}
\tag*{[3]}
\\]

The same pulse therefore has speed \\(c\\) in both frames. The transformation also preserves the spacetime interval between any two events:

\\[
c^2(\Delta t')^2-(\Delta x')^2-(\Delta y')^2-(\Delta z')^2
=c^2(\Delta t)^2-(\Delta x)^2-(\Delta y)^2-(\Delta z)^2.
\tag*{[4]}
\\]

At low speed, \\(|v|/c\ll1\\), the factor \\(\gamma\\) approaches one and the term \\(vx/c^2\\) is usually negligible. Equation [2] then approaches \\(x'\approx x-vt\\) and \\(t'\approx t\\), recovering Galilean physics as an approximation rather than an exact law.

Lorentz transformations act on events. A valid calculation must assign the coordinates of a specified event before transforming them; phrases such as "what an observer sees now" are ambiguous unless simultaneity and signal-travel time are defined.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Transforming one event",
      question: "In frame \\(S\\), an event occurs at \\(x=900\\,\\mathrm m\\) and \\(t=4.00\\,\\mu\\mathrm s\\). Frame \\(S'\\) moves at \\(v=0.600c\\) along positive \\(x\\). Find \\(x'\\) and \\(t'\\).",
      answer: "The strategy is to calculate the Lorentz factor and then use both equations in [2] with the stated sign convention. First, \\[\\gamma=\\frac{1}{\\sqrt{1-0.600^2}}=1.25.\\] Convert the time: \\(4.00\\,\\mu\\mathrm s=4.00\\times10^{-6}\\,\\mathrm s\\). The position is \\[x'=1.25\\left[900\\,\\mathrm m-(0.600)(2.998\\times10^8\\,\\mathrm{m\\,s^{-1}})(4.00\\times10^{-6}\\,\\mathrm s)\\right]=226\\,\\mathrm m.\\] For time, \\[\\frac{vx}{c^2}=\\frac{(0.600)(900\\,\\mathrm m)}{2.998\\times10^8\\,\\mathrm{m\\,s^{-1}}}=1.80\\,\\mu\\mathrm s,\\] so \\[t'=1.25(4.00-1.80)\\,\\mu\\mathrm s=2.75\\,\\mu\\mathrm s.\\] **Final result:** \\(x'=226\\,\\mathrm m\\) and \\(t'=2.75\\,\\mu\\mathrm s\\). Both transformed coordinates describe the same event, not a second observation.",
    },
    {
      title: "Simultaneity in two inertial frames",
      question: "Two events are simultaneous in \\(S\\), so \\(\\Delta t=0\\), and are separated by \\(\\Delta x\\gt0\\). Are they simultaneous in \\(S'\\), which moves along positive \\(x\\)?",
      answer: "Apply the time part of equation [2] to the event separations: \\[\\Delta t'=\\gamma\\left(\\Delta t-\\frac{v\\Delta x}{c^2}\\right)=-\\gamma\\frac{v\\Delta x}{c^2}.\\] For \\(v\\gt0\\) and \\(\\Delta x\\gt0\\), this interval is negative rather than zero. **Final result:** the events are not simultaneous in \\(S'\\); the event at larger \\(x\\) occurs earlier according to the primed clocks. This is a coordinate effect required by invariant light speed, not a delay caused by the measuring equipment.",
    },
  ]}
/>
`;
