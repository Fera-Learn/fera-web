export const content = String.raw`## Principle

Identical quantum particles cannot be assigned persistent physical labels. Exchanging two particles leaves every observable unchanged, so a many-particle state must be symmetric for bosons or antisymmetric for fermions. In three dimensions, integer-spin particles are bosons and half-integer-spin particles are fermions. The antisymmetric sign enforces Pauli exclusion for a complete one-particle state.

## Notation

<Notation
  items={[
    { symbol: "1,2", meaning: "temporary particle-coordinate labels, not observable identities", unit: "1" },
    { symbol: "a,b", meaning: "orthonormal one-particle state labels", unit: "1" },
    { symbol: "\\phi_a,\\phi_b", meaning: "one-particle wavefunctions" },
    { symbol: "\\Psi_{+},\\Psi_{-}", meaning: "symmetric boson and antisymmetric fermion two-particle states" },
    { symbol: "\\hat P_{12}", meaning: "operator that exchanges particle coordinates 1 and 2", unit: "1" },
    { symbol: "n_a,n_b", meaning: "occupation numbers of one-particle states a and b", unit: "1" },
  ]}
/>

## The Core Method

Start from one-particle states \\(a\\) and \\(b\\). Exchange symmetry requires a physical two-particle state to satisfy

\\[
\hat P_{12}\Psi_{\pm}(1,2)=\pm\Psi_{\pm}(1,2),
\tag*{[1]}
\\]

where the plus sign applies to bosons and the minus sign to fermions. If \\(a\ne b\\), normalized states are

\\[
\Psi_{+}(1,2)
=\frac{\phi_a(1)\phi_b(2)+\phi_b(1)\phi_a(2)}{\sqrt2},
\tag*{[2]}
\\]

\\[
\Psi_{-}(1,2)
=\frac{\phi_a(1)\phi_b(2)-\phi_b(1)\phi_a(2)}{\sqrt2}.
\tag*{[3]}
\\]

If both fermions are placed in the same complete one-particle state, set \\(b=a\\) in equation [3]:

\\[
\Psi_{-}(1,2)
=\frac{\phi_a(1)\phi_a(2)-\phi_a(1)\phi_a(2)}{\sqrt2}=0.
\tag*{[4]}
\\]

This is Pauli exclusion. Bosons permit \\(n_a=0,1,2,\ldots\\), whereas fermions permit only \\(n_a=0\\) or \\(1\\) for each complete state, including spin. For two distinguishable particles in two states, four labelled product states exist. For indistinguishable bosons the occupation states are \\((2,0),(1,1),(0,2)\\); for indistinguishable fermions with only these two complete states, only \\((1,1)\\) is allowed. Classical Maxwell-Boltzmann counting is a separate dilute-limit approximation, not a third exchange eigenvalue.

<PhysicsExamples collapsible
  items={[
    {
      title: "Construct an exchange eigenstate",
      question: "Two identical particles occupy distinct orthonormal states \\(a\\) and \\(b\\). Write the allowed state for fermions and verify its exchange eigenvalue.",
      answer: "Equation \\([3]\\) gives \\[\\Psi_{-}(1,2)=\\frac{\\phi_a(1)\\phi_b(2)-\\phi_b(1)\\phi_a(2)}{\\sqrt2}.\\] Exchanging \\(1\\leftrightarrow2\\) gives \\[\\hat P_{12}\\Psi_- =\\frac{\\phi_a(2)\\phi_b(1)-\\phi_b(2)\\phi_a(1)}{\\sqrt2}=-\\Psi_-.\\] Orthogonality removes cross terms in the norm, and the factor \\(1/\\sqrt2\\) makes the norm one. **Final result:** the normalized fermion state is the antisymmetric combination in equation \\([3]\\), with exchange eigenvalue \\(-1\\).",
    },
    {
      title: "Apply exclusion to spin states",
      question: "May two electrons occupy the same spatial orbital if their spin states are opposite?",
      answer: "Pauli exclusion applies to the complete one-particle state, not the spatial factor alone. Opposite spin states make the two spin-orbitals distinct, so one electron may occupy each. Their total two-electron state must still be antisymmetric, as in equation \\([3]\\), through the appropriate combination of spatial and spin factors. **Final result:** yes, two electrons may share one spatial orbital only when they occupy different spin states and the total state is antisymmetric.",
    },
  ]}
/>
`;
