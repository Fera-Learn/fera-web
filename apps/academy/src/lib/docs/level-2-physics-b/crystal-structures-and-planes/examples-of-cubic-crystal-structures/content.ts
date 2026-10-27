export const content = String.raw`## Principle

Structures that look similar inside a cubic conventional cell can have different Bravais lattices and bases. Classification depends on which translations carry every chemical species onto an equivalent species, not merely on whether points appear at corners, faces, or the body centre.

## Notation

<Notation
  items={[
    { symbol: "a", meaning: "edge length of a cubic conventional cell", unit: "m" },
    { symbol: "(u,v,w)", meaning: "fractional coordinates representing the position (ua,va,wa)", unit: "1" },
    { symbol: "\\mathcal B", meaning: "basis written as a set of species and fractional coordinates", unit: "1" },
    { symbol: "N_L,N_b,N_{\\mathrm{atom}}", meaning: "weighted lattice points, basis sites, and atoms per conventional cell", unit: "1" },
    { symbol: "Z", meaning: "coordination number, the number of nearest neighbours of one site", unit: "1" },
  ]}
/>

## The Core Method

First identify the translations that preserve both position and chemical identity. Then attach the smallest basis that generates all atoms. For the three cubic Bravais lattices, weighted counting in a conventional cube gives

\\[
N_L^{\mathrm{SC}}=8\left(\frac18\right)=1,
\quad
N_L^{\mathrm{BCC}}=8\left(\frac18\right)+1=2,
\quad
N_L^{\mathrm{FCC}}=8\left(\frac18\right)+6\left(\frac12\right)=4.
\tag*{[1]}
\\]

Simple cubic (SC) has a one-site basis \\(\mathcal B=\{(0,0,0)\}\\), so \\(N_{\mathrm{atom}}=1\\) and \\(Z=6\\). This is a useful reference structure, but ordinary metallic sodium is not SC. Sodium has a BCC Bravais lattice with one Na atom at each lattice point, giving

\\[
\mathrm{Na}:\qquad
\text{BCC lattice},
\quad \mathcal B=\{\mathrm{Na}:(0,0,0)\},
\quad N_{\mathrm{atom}}=2,
\quad Z=8.
\tag*{[2]}
\\]

CsCl also has atoms at cube corners and at the body centre, but the two sites contain different ions. A translation by \\((1/2,1/2,1/2)\\) would interchange Cs and Cl, so it is not a Bravais-lattice translation. The correct description is

\\[
\mathrm{CsCl}:\qquad
\text{SC lattice},
\quad \mathcal B=\{\mathrm{Cs}:(0,0,0),\ \mathrm{Cl}:(1/2,1/2,1/2)\},
\quad N_{\mathrm{atom}}=2,
\quad Z=8.
\tag*{[3]}
\\]

Copper is monatomic FCC. The FCC conventional cell contains four lattice points, each carrying one Cu atom:

\\[
\mathrm{Cu}:\qquad
\text{FCC lattice},
\quad \mathcal B=\{\mathrm{Cu}:(0,0,0)\},
\quad N_{\mathrm{atom}}=4,
\quad Z=12.
\tag*{[4]}
\\]

Diamond uses the same FCC Bravais lattice but a two-carbon basis. Each atom has four nearest neighbours in a tetrahedral arrangement, rather than the twelve neighbours of monatomic FCC:

\\[
\mathrm{diamond}:\qquad
\text{FCC lattice},
\quad \mathcal B=\{\mathrm C:(0,0,0),\ \mathrm C:(1/4,1/4,1/4)\},
\quad N_{\mathrm{atom}}=8,
\quad Z=4.
\tag*{[5]}
\\]

Rock-salt NaCl consists of two interpenetrating FCC sublattices. One valid origin choice uses

\\[
\mathrm{NaCl}:\qquad
\text{FCC lattice},
\quad \mathcal B=\{\mathrm{Na}:(0,0,0),\ \mathrm{Cl}:(1/2,1/2,1/2)\},
\quad N_{\mathrm{atom}}=8,
\quad Z=6.
\tag*{[6]}
\\]

Here \\(N_{\mathrm{atom}}=8\\) means four Na ions and four Cl ions. Each ion has six nearest neighbours of the opposite species. Coordination number, atoms per conventional cell, and basis size are therefore distinct quantities.

<PhysicsExamples collapsible
  items={[
    {
      title: "Count atoms in Cu, diamond, and NaCl cells",
      question: "Use the lattice and basis descriptions to calculate the number and species of atoms in one conventional cell of Cu, diamond, and NaCl.",
      answer: "An FCC conventional cell has \\(N_L=4\\) weighted lattice points from equation \\([1]\\). Cu has one basis site, so \\(N_{\\mathrm{atom}}=4\\times1=4\\) Cu atoms. Diamond has two carbon basis sites, so \\(N_{\\mathrm{atom}}=4\\times2=8\\) C atoms. NaCl has one Na and one Cl in its basis, so each species occurs four times: \\(4\\times1=4\\) Na and \\(4\\times1=4\\) Cl, for eight ions altogether. The equal species counts also verify the 1:1 formula. **Final result:** conventional cells contain 4 Cu atoms, 8 C atoms in diamond, and 4 Na plus 4 Cl ions in NaCl.",
    },
    {
      title: "Why CsCl is not a BCC Bravais lattice",
      question: "A CsCl cell has Cs at each corner and Cl at the body centre. Explain why its Bravais lattice is simple cubic rather than body-centred cubic.",
      answer: "A BCC centring translation would be \\((1/2,1/2,1/2)\\). Applied to a corner Cs, that translation reaches the body-centre Cl, not an equivalent Cs. It therefore fails the defining test for a Bravais translation. Full translations by cubic edge vectors do carry Cs to Cs and Cl to Cl, so the Bravais lattice is SC and the repeated object is the two-ion basis in equation \\([3]\\). **Final result:** CsCl is an SC Bravais lattice with a Cs-Cl basis, even though its conventional-cell geometry resembles BCC.",
    },
  ]}
/>
`;
