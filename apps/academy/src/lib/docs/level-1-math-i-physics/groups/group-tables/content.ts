export const content = String.raw`## Principle

A group table, also called a Cayley table, displays the full operation for a finite group. Each row and column is labelled by a group element, and each table entry is the result of combining the row element with the column element.

Group tables are useful for small symmetry groups because they show every possible composition in one place.

## Notation

- \\(G\\) is a finite group.
- \\(*\\) is the group operation.
- The row element is the element chosen from the left side of the table.
- The column element is the element chosen from the top of the table.
- The table entry is the product of the row element and the column element.
- \\(e\\) is the identity element.
- \\(a^{-1}\\) is the inverse of \\(a\\).

## Method

To read a group table:

1. Choose the row for the first element.
2. Choose the column for the second element.
3. Read the entry where the row and column meet.
4. Find the identity by looking for a row and column that reproduce the headings unchanged.
5. Find inverses by locating products equal to \\(e\\).

The row-first convention matters when the group operation is not commutative.

## Rules

- Closure means every table entry must be an element of \\(G\\).
- The identity row reproduces the column headings.
- The identity column reproduces the row headings.
- If the row \\(a\\) and column \\(b\\) entry is \\(e\\), then \\(b\\) is a right inverse for \\(a\\).
- In a group, each inverse must work on both sides.

## Examples

Consider the two-element group \\(G=\{e,a\}\\), where \\(e\\) is the identity and \\(a*a=e\\).

| * | e | a |
| --- | --- | --- |
| e | e | a |
| a | a | e |

The row for \\(e\\) and the column for \\(e\\) reproduce the headings, so \\(e\\) is the identity.

The entry in row \\(a\\), column \\(a\\) is \\(e\\). Therefore \\(a\\) is its own inverse.

<Equation label="Self-inverse element" tex="a*a=e\quad\Rightarrow\quad a^{-1}=a" />

## Checks

- Check the row element and column element are used in the intended order.
- Check every table entry belongs to the listed set.
- Check that the identity row and identity column both reproduce the headings.
- Check inverses on both sides, especially when the operation might not commute.`;
