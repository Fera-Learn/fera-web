export const content = String.raw`## Principle

A macrostate records selected large-scale quantities, while a microstate specifies every microscopic degree of freedom needed by the model. Multiplicity is the number of allowed microstates consistent with one macrostate. Counting must therefore begin by stating what makes microscopic configurations distinct.

## Notation

<Notation
  items={[
    { symbol: "N", meaning: "number of distinguishable sites or labelled trials", unit: "1" },
    { symbol: "i,s", meaning: "single-site state label and number of available single-site states", unit: "1" },
    { symbol: "n_i", meaning: "occupation number of single-site state i", unit: "1" },
    { symbol: "\\Omega", meaning: "multiplicity: number of microstates in the specified macrostate", unit: "1" },
    { symbol: "N!", meaning: "factorial of N", unit: "1" },
    { symbol: "r", meaning: "number of sites in one state for a two-state model", unit: "1" },
    { symbol: "U,D", meaning: "labels for the up and down states", unit: "1" },
  ]}
/>

## The Core Method

First define the microscopic labels. For \\(N\\) distinguishable sites, each occupying one of \\(s\\) states, a microstate is an ordered list of the \\(N\\) site states. A macrostate can instead be specified by occupation numbers satisfying

\\[
\sum_{i=1}^{s}n_i=N.
\tag*{[1]}
\\]

To count arrangements with fixed \\(\{n_i\}\\), begin with \\(N!\\) permutations of the labelled sites. Permuting the \\(n_i\\) sites assigned to the same state does not create a new ordered assignment, so divide by \\(n_i!\\) for every state:

\\[
\Omega(\{n_i\})=\frac{N!}{\prod_{i=1}^{s}n_i!}.
\tag*{[2]}
\\]

For two states, putting \\(r\\) sites in the first and \\(N-r\\) in the second gives

\\[
\Omega(r)=\binom Nr=\frac{N!}{r!(N-r)!}.
\tag*{[3]}
\\]

Equation [2] applies to distinguishable sites or labelled trials, such as fixed spins or successive coin tosses. Calling the coins or particles indistinguishable would change the definition of a microstate and can change the count. Multiplicity also depends on constraints: inaccessible configurations must not be included.

<PhysicsExamples collapsible
  items={[
    {
      title: "Count a four-spin macrostate",
      question: "Four labelled spin sites contain two up-spins and two down-spins. Find the multiplicity and list a compact check on the count.",
      answer: "The sites are distinguishable by position, while the macrostate fixes \\(r=2\\) up-spins. Equation \\([3]\\) gives \\[\\Omega=\\frac{4!}{2!2!}=\\frac{24}{4}=6.\\] The six choices are the six possible pairs of sites that carry the up-spins. As a check, summing all two-state macrostates gives \\(1+4+6+4+1=16=2^4\\), the total number of ordered spin configurations. **Final result:** the two-up, two-down macrostate has multiplicity \\(\\Omega=6\\).",
    },
    {
      title: "Separate a macrostate from a microstate",
      question: "For three labelled two-state sites, decide whether UDU and DUU are the same macrostate or the same microstate.",
      answer: "Both strings have two U entries and one D entry, so they have the same occupation numbers and belong to the same macrostate. Their ordered site assignments differ, so they are different microstates. Equation \\([3]\\) predicts \\(\\Omega=3!/(2!1!)=3\\), namely UUD, UDU, and DUU. **Final result:** UDU and DUU are distinct microstates within one macrostate of multiplicity 3.",
    },
  ]}
/>
`;
