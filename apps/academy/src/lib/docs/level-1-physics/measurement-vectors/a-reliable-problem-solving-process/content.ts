export const content = String.raw`## Principle

A reliable solution keeps the physical model separate from algebraic execution.

## Method

<PhysicsAside title="Flow">
system -> knowns -> target -> representation -> equations -> solve -> check
</PhysicsAside>

- Name the system before writing equations.
- List known quantities with units and signs.
- Choose a representation that exposes constraints.
- Solve symbolically before substituting numbers.

## Rules

<Equation label="Equation count" tex="N_{\mathrm{unknowns}}\le N_{\mathrm{independent\ equations}}" />

<Equation label="Dimensional check" tex="[\text{left side}]=[\text{right side}]" />

## Checks

- Units match term by term.
- Signs follow the chosen axes.
- Limiting cases behave sensibly.
- The answer has the requested physical type.`;
