export const content = String.raw`## Principle

The group axioms are a checklist for proving that an operation is consistent enough to support reversible algebra. They ensure that products stay inside the set, parentheses can be moved safely, there is a do-nothing element, and every element can be undone.

In physics, these same checks appear when transformations are used to describe reversible changes of a system.

## Notation

- \\(G\\) is the set being tested.
- \\(*\\) is the operation on \\(G\\).
- \\(a\\), \\(b\\), and \\(c\\) are elements of \\(G\\).
- \\(e\\) is the identity element.
- \\(a^{-1}\\) is the inverse of \\(a\\).

## Method

Test the axioms separately.

1. Closure: show that \\(a*b\\) lies in \\(G\\) whenever \\(a\\) and \\(b\\) lie in \\(G\\).
2. Associativity: show that \\((a*b)*c=a*(b*c)\\) for all choices of \\(a\\), \\(b\\), and \\(c\\) in \\(G\\).
3. Identity: find a single \\(e\in G\\) such that \\(e*a=a*e=a\\) for every \\(a\in G\\).
4. Inverses: for each \\(a\in G\\), find \\(a^{-1}\in G\\) such that \\(a*a^{-1}=a^{-1}*a=e\\).

Each axiom needs evidence for all elements under discussion. One example can illustrate an axiom, but one example does not prove an axiom for an infinite set.

## Rules

- If one group axiom fails, the structure is not a group.
- Closure must be checked before using the result as a group element.
- Associativity is part of the structure; it cannot be replaced by commutativity.
- The identity element must be the same element for every group element.
- Inverses must belong to the same set \\(G\\).

## Examples

Test \\(G=\{1,-1\}\\) under multiplication.

Closure: every product of two elements in \\(G\\) is still in \\(G\\).

<Equation label="Closure example" tex="(-1)(-1)=1\in\{1,-1\}" />

The other products are also in the set: \\(1\cdot1=1\\), \\(1\cdot(-1)=-1\\), and \\((-1)\cdot1=-1\\).

Associativity is inherited from real multiplication, so for any \\(a,b,c\in G\\):

<Equation label="Inherited associativity" tex="(ab)c=a(bc)" />

The identity is \\(1\\), because multiplying by \\(1\\) leaves each element unchanged.

<Equation label="Identity example" tex="1\cdot a=a\cdot 1=a" />

Each element has an inverse in the set.

<Equation label="Inverse examples" tex="1^{-1}=1,\quad (-1)^{-1}=-1" />

Therefore \\(\{1,-1\}\\) is a group under multiplication.

## Checks

- Check closure first; a product outside the set is enough to fail the group test.
- Do not use a different identity for different elements.
- Check both sides when inverses or identities might be one-sided.
- Do not check commutativity in place of associativity.`;
