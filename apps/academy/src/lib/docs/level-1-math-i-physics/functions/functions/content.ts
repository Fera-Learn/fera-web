export const content = String.raw`## Functions

A **function** $f: A \to B$ maps each element of set $A$ (domain) to exactly one element of set $B$ (codomain/range).

## Key Properties

**One-to-one (Injective):** Each output comes from at most one input.
<Equation label="One-to-One" tex="\forall x_1, x_2: f(x_1) = f(x_2) \Rightarrow x_1 = x_2" />

**Onto (Surjective):** Every element in codomain is an output.
<Equation label="Onto" tex="\forall y \in B, \exists x \in A: f(x) = y" />

**Bijective:** Both one-to-one and onto.

## Function Composition

If $f: A \to B$ and $g: B \to C$, then:
<Equation label="Composition" tex="(g \circ f)(x) = g(f(x))" />`;