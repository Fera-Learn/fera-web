export const content = String.raw`## Principle

A collision is a short interaction where momentum is modeled before kinetic energy.

## Notation

<Notation
  items={[
    { symbol: "m_1,m_2", meaning: "colliding masses", unit: "kg" },
    { symbol: "u_1,u_2", meaning: "initial velocities", unit: "m s^{-1}" },
    { symbol: "v_1,v_2", meaning: "final velocities", unit: "m s^{-1}" },
    { symbol: "\\vec{J}_{12}", meaning: "impulse on 1 by 2", unit: "N s" },
    { symbol: "K", meaning: "kinetic energy", unit: "J" },
  ]}
/>

## Method

During a short collision, internal impulses can be large while external impulse is often negligible.

<PhysicsDerivation
  items={[
    {
      label: "Choose interval",
      tex: "\\Delta t_{\\mathrm{collision}}\\ \\text{is short}",
    },
    {
      label: "Neglect external impulse",
      tex: "\\Delta\\vec{P}_{\\mathrm{system}}\\approx\\vec{0}",
    },
    {
      label: "Write momentum",
      tex: "m_1u_1+m_2u_2=m_1v_1+m_2v_2",
    },
    {
      label: "Check energy",
      tex: "\\Delta K=K_f-K_i",
      note: "Use this as a classification check unless the collision is specified elastic.",
    },
  ]}
/>

The diagram compares the total momentum immediately before and after the short interaction.

<CartesianPhysicsGraph
  title="Before and after collision"
  caption="The momentum equation compares the total signed momentum immediately before and immediately after the short interaction."
  xRange={{ min: -1, max: 5, step: 1, label: "p_x" }}
  yRange={{ min: -1, max: 2, step: 1, label: "state" }}
  vectors={[
    { from: { x: 0, y: 1 }, to: { x: 4, y: 1 }, label: "P_i" },
    { from: { x: 0, y: 0 }, to: { x: 4, y: 0 }, label: "P_f" },
  ]}
  points={[
    { x: 0, y: 1, label: "before" },
    { x: 0, y: 0, label: "after" },
  ]}
/>

The before-after momentum vectors match for an isolated collision, but kinetic energy may not.

## Rules

These are the compact one-dimensional collision relations.

<Equation label="Momentum equation" tex="m_1u_1+m_2u_2=m_1v_1+m_2v_2" />

<Equation label="Sticking collision" tex="m_1u_1+m_2u_2=(m_1+m_2)v_f" />

<Equation label="Impulse pair" tex="\vec{J}_{12}=-\vec{J}_{21}" />

<Equation label="Energy change" tex="\Delta K=K_f-K_i" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "A \\(0.80\\,\\mathrm{kg}\\) cart moving at \\(5.0\\,\\mathrm{m\\,s^{-1}}\\) sticks to a \\(1.2\\,\\mathrm{kg}\\) cart at rest. Find final speed.",
      answer: "\\[0.80(5.0)=(0.80+1.2)v_f\\] \\[v_f=2.0\\,\\mathrm{m\\,s^{-1}}\\]",
    },
    {
      title: "Example 2",
      question: "A \\(1.5\\,\\mathrm{kg}\\) cart changes from \\(3.0\\,\\mathrm{m\\,s^{-1}}\\) right to \\(2.0\\,\\mathrm{m\\,s^{-1}}\\) left during impact. Find impulse on it.",
      answer: "Take right as positive. \\[J=m(v-u)=1.5(-2.0-3.0)=-7.5\\,\\mathrm{N\\,s}\\] The impulse is leftward.",
    },
  ]}
/>

## Checks

- Momentum conservation is the default collision equation for an isolated pair.
- Kinetic energy is conserved only for elastic collisions.
- A stuck-together final state is not elastic.
- Short collision time does not remove large internal impulses.`;
