export const content = String.raw`## Principle

A vector can have a definite length even when its separate sideways components are not all fixed.

Although no two Cartesian components of orbital angular momentum are generally sharp together, the total squared angular momentum commutes with every component. A state can therefore have definite total magnitude and one chosen component, conventionally the z-component.

## Notation

<Notation
  items={[
    { symbol: "\\hat L^2", meaning: "total squared orbital angular-momentum operator", unit: "J^{2} s^{2}" },
    { symbol: "\\hat L_x,\\hat L_y,\\hat L_z", meaning: "Cartesian orbital angular-momentum operators", unit: "J s" },
    { symbol: "[\\hat A,\\hat B]", meaning: "commutator of two operators", unit: "varies" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "|l,m\\rangle", meaning: "simultaneous eigenstate labelled by orbital and magnetic quantum numbers", unit: "1" },
    { symbol: "l,m", meaning: "orbital and magnetic quantum numbers", unit: "1" },
    { symbol: "L", meaning: "magnitude inferred from a measurement of total squared angular momentum", unit: "J s" },
    { symbol: "i", meaning: "imaginary unit", unit: "1" },
  ]}
/>

## The Core Method

Define total squared orbital angular momentum as the sum of the squared Cartesian components.

\\[
\hat L^2=\hat L_x^2+\hat L_y^2+\hat L_z^2.
\tag*{[1]}
\\]

To test compatibility with \\(\hat L_z\\), expand the commutator and use \\([\hat A,\hat B^2]=[\hat A,\hat B]\hat B+\hat B[\hat A,\hat B]\\).

\\[
[\hat L_z,\hat L^2]
=[\hat L_z,\hat L_x^2]+[\hat L_z,\hat L_y^2]+[\hat L_z,\hat L_z^2].
\tag*{[2]}
\\]

The angular-momentum algebra gives \\([\hat L_z,\hat L_x]=i\hbar\hat L_y\\), \\([\hat L_z,\hat L_y]=-i\hbar\hat L_x\\), and \\([\hat L_z,\hat L_z]=0\\). Therefore

\\[
[\hat L_z,\hat L^2]
=i\hbar(\hat L_y\hat L_x+\hat L_x\hat L_y)
-i\hbar(\hat L_x\hat L_y+\hat L_y\hat L_x)
=0.
\tag*{[3]}
\\]

Cyclic repetition proves the general result.

\\[
[\hat L^2,\hat L_x]=[\hat L^2,\hat L_y]=[\hat L^2,\hat L_z]=0.
\tag*{[4]}
\\]

Commuting Hermitian operators admit a common orthonormal eigenbasis. Within a degenerate eigenspace of one operator, the basis can be chosen to diagonalize the other. For \\(\hat L^2\\) and \\(\hat L_z\\), write the common states as

\\[
\hat L^2|l,m\rangle=l(l+1)\hbar^2|l,m\rangle,
\qquad
\hat L_z|l,m\rangle=m\hbar|l,m\rangle.
\tag*{[5]}
\\]

A measurement of \\(L^2\\) returns \\(l(l+1)\hbar^2\\), from which the angular-momentum magnitude is inferred, while a simultaneous \\(L_z\\) measurement returns \\(m\hbar\\).

\\[
L=\sqrt{l(l+1)}\,\hbar,
\qquad
L_z=m\hbar.
\tag*{[6]}
\\]

The magnitude is not generally equal to \\(|L_z|\\). Also, choosing a sharp \\(L_z\\) leaves \\(L_x\\) and \\(L_y\\) indefinite because they do not commute with \\(L_z\\). Any one component could be selected instead, but only one at a time alongside \\(L^2\\).

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Interpret simultaneous measurements",
      question: "A state is labelled \\(|2,-1\\rangle\\). Find the outcomes of measurements of \\(L^2\\) and \\(L_z\\), and infer the magnitude \\(L\\).",
      answer: "Apply equations [5] and [6] with \\(l=2\\) and \\(m=-1\\): \\[L^2=l(l+1)\\hbar^2=2(3)\\hbar^2=6\\hbar^2,\\qquad L_z=m\\hbar=-\\hbar.\\] The inferred magnitude is \\[L=\\sqrt{l(l+1)}\\,\\hbar=\\sqrt6\\,\\hbar.\\] **Final result:** \\(L^2=6\\hbar^2\\), \\(L_z=-\\hbar\\), and \\(L=\\sqrt6\\,\\hbar\\).",
    },
    {
      title: "Choose a compatible measurement set",
      question: "Which of these sets can label simultaneous sharp orbital-angular-momentum measurements: \\((L_x,L_y)\\), \\((L_y,L_z)\\), or \\((L^2,L_y)\\)?",
      answer: "The first two pairs have nonzero commutators: \\([\\hat L_x,\\hat L_y]=i\\hbar\\hat L_z\\) and \\([\\hat L_y,\\hat L_z]=i\\hbar\\hat L_x\\). Equation [4] gives \\([\\hat L^2,\\hat L_y]=0\\). **Final result:** only \\((L^2,L_y)\\) is a compatible pair among the choices; after choosing it, the other two Cartesian components are not simultaneously sharp.",
    },
  ]}
/>
`;
