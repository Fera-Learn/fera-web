export const content = String.raw`## Principle

If you run after a thrown ball its speed relative to you decreases, but running after a light pulse does not reduce the measured speed of light.

Galilean transformations preserve Newtonian mechanics exactly, while Newtonian mechanics approximates relativistic behaviour only at low speeds. Galilean transformations do not preserve Maxwell's prediction of one fixed vacuum wave speed, so applying Galilean velocity addition to light, or assuming that charge density is unchanged between moving frames, creates contradictions.

## Notation

<Notation
  items={[
    { symbol: "S,S'", meaning: "inertial frames, with S' moving along positive x relative to S" },
    { symbol: "x,t,x',t'", meaning: "event coordinates in S and S'", unit: "m, s, m, s" },
    { symbol: "\\Delta x,\\Delta t,\\Delta x',\\Delta t'", meaning: "coordinate separations between two nearby events in S and S'", unit: "m, s, m, s" },
    { symbol: "v", meaning: "speed of S' relative to S", unit: "m s^{-1}" },
    { symbol: "u,u'", meaning: "one-dimensional object speeds measured in S and S'", unit: "m s^{-1}, m s^{-1}" },
    { symbol: "\\vec u'", meaning: "test-charge velocity measured in S'", unit: "m s^{-1}" },
    { symbol: "\\vec E,\\vec B", meaning: "electric and magnetic fields", unit: "V m^{-1}, T" },
    { symbol: "\\nabla", meaning: "spatial differential operator", unit: "m^{-1}" },
    { symbol: "\\vec F,\\vec F',q", meaning: "electromagnetic forces measured in S and S', and test charge", unit: "N, N, C" },
    { symbol: "\\lambda,I,r", meaning: "line-charge magnitude, current magnitude, and distance from a long wire", unit: "C m^{-1}, A, m" },
    { symbol: "\\epsilon_0,\\mu_0", meaning: "vacuum permittivity and permeability", unit: "F m^{-1}, H m^{-1}" },
    { symbol: "c", meaning: "vacuum speed predicted by Maxwell's equations", unit: "m s^{-1}" },
  ]}
/>

## The Core Method

For frames whose origins coincide at \\(t=t'=0\\), the Galilean transformation assumes absolute time and subtracts the frame displacement from the position.

\\[
x'=x-vt,
\qquad
t'=t.
\tag*{[1]}
\\]

For two nearby events on an object's path, divide \\(\Delta x'=\Delta x-v\Delta t\\) by \\(\Delta t'=\Delta t\\). Galilean velocity addition follows.

\\[
u'=\frac{\Delta x'}{\Delta t'}
=\frac{\Delta x-v\Delta t}{\Delta t}
=u-v.
\tag*{[2]}
\\]

In empty space, Maxwell's equations give the electric-field wave equation

\\[
\nabla^2\vec E=\mu_0\epsilon_0\frac{\partial^2\vec E}{\partial t^2}.
\tag*{[3]}
\\]

Comparison with the standard wave equation fixes the vacuum wave speed.

\\[
c=\frac{1}{\sqrt{\mu_0\epsilon_0}}
\approx2.998\times10^8\,\mathrm{m\,s^{-1}}.
\tag*{[4]}
\\]

If a light pulse travels along positive \\(x\\), then \\(u=c\\) in \\(S\\). Equation [2] instead predicts

\\[
u'=c-v.
\tag*{[5]}
\\]

This result conflicts with Maxwell's equations if those equations have the same form in every inertial frame, because the primed observer must also obtain the speed \\(1/\sqrt{\mu_0\epsilon_0}=c\\). The mismatch disappears only in the low-speed limit \\(v/c\to0\\), where \\(c-v\\) is approximately \\(c\\) but is not exactly invariant.

A second warning comes from a neutral current-carrying wire. In one frame, let a positive test charge move parallel to the carriers. With \\(\vec E=0\\), the magnetic part of the Lorentz force is nonzero:

\\[
I=\lambda v,
\qquad
B=\frac{\mu_0I}{2\pi r},
\qquad
F=qvB=\frac{\mu_0q\lambda v^2}{2\pi r}.
\tag*{[6]}
\\]

A Galilean change to the test charge's rest frame sets its speed to zero. If charge neutrality is also assumed unchanged, then both force terms would vanish.

\\[
\vec F'=q(\vec E'+\vec u'\times\vec B')=\vec 0.
\tag*{[7]}
\\]

Equations [6] and [7] cannot describe the same motion. The faulty assumptions are absolute time and frame-independent charge spacing: moving longitudinal separations and charge densities cannot obey Galilean rules while Maxwell's equations remain valid.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Galilean prediction for a measured light speed",
      question: "A spacecraft moves at \\(v=0.200c\\) in the same direction as a light pulse. What light speed does Galilean velocity addition predict on the spacecraft, and how does this compare with Maxwell's prediction?",
      answer: "The strategy is to apply equation [2] and then compare with equation [4]. Galilean addition gives \\[u'=c-v=c-0.200c=0.800c.\\] Numerically, \\[u'=0.800(2.998\\times10^8\\,\\mathrm{m\\,s^{-1}})=2.40\\times10^8\\,\\mathrm{m\\,s^{-1}}.\\] Maxwell's equations in the spacecraft frame instead predict \\(c=2.998\\times10^8\\,\\mathrm{m\\,s^{-1}}\\). **Final result:** Galilean physics predicts \\(0.800c\\), in direct conflict with the invariant Maxwell speed \\(c\\). The discrepancy is \\(0.200c\\), so it is not a rounding effect.",
    },
    {
      title: "Why a neutral wire need not remain neutral",
      question: "A moving test charge is attracted magnetically toward a neutral current-carrying wire. In the test charge's rest frame it has no magnetic force. Must the total force therefore vanish?",
      answer: "No. The conclusion would follow only if the wire remained neutral after changing frames. Charge is conserved, but charge per unit length also depends on the measured spacing of moving charges. Those longitudinal spacings are frame dependent, so the positive and negative line-charge densities need not continue to cancel. An electric field can therefore act on the stationary test charge. **Final result:** the magnetic contribution can vanish in one frame while an electric contribution replaces it; assuming neutrality in both frames is the source of the false contradiction.",
    },
  ]}
/>
`;
