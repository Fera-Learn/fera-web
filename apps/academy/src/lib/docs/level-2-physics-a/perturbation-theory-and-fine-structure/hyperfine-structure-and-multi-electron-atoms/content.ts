export const content = String.raw`## Principle

Still finer spectroscopy reveals the nucleus and the other electrons influencing each electronic energy level.

Hyperfine structure comes from coupling electron angular momentum to nuclear spin and is much smaller than electronic fine structure. In multi-electron atoms, Pauli exclusion, shielding, and core penetration replace hydrogen's simple degeneracy pattern; these topics are a qualitative survey at this course depth.

## Notation

<Notation
  items={[
    { symbol: "\\mathbf I,\\mathbf S,\\mathbf F=\\mathbf I+\\mathbf S", meaning: "nuclear spin, electron spin, and total hyperfine angular momentum", unit: "J s" },
    { symbol: "I,S,F,m_F", meaning: "nuclear, electron, total hyperfine, and projection quantum numbers" },
    { symbol: "A", meaning: "magnetic-dipole hyperfine coupling constant", unit: "J" },
    { symbol: "E_F,\\Delta E_{\\mathrm{hfs}}", meaning: "hyperfine level energy and splitting", unit: "J" },
    { symbol: "h,c,\\nu,\\lambda", meaning: "Planck constant, speed of light, transition frequency, and wavelength", unit: "J s, m s^{-1}, s^{-1}, m" },
    { symbol: "\\hbar,N_l", meaning: "reduced Planck constant and capacity of the subshell with orbital number l", unit: "J s, 1" },
    { symbol: "n,l,m_l,m_s", meaning: "principal, orbital, orbital-projection, and spin-projection quantum numbers" },
    { symbol: "Z,Z_{\\mathrm{eff}}", meaning: "atomic number and effective nuclear charge experienced by an electron" },
  ]}
/>

## The Core Method

For the hydrogen ground state, the proton and electron both have spin one half. A compact magnetic-dipole contact Hamiltonian is

\\[
\hat H'_{\mathrm{hfs}}=\frac{A}{\hbar^2}\mathbf I\cdot\mathbf S.
\tag*{[1]}
\\]

Introduce total hyperfine angular momentum. Squaring \\(\mathbf F=\mathbf I+\mathbf S\\) gives

\\[
\mathbf I\cdot\mathbf S
=\frac12\left(\mathbf F^2-\mathbf I^2-\mathbf S^2\right).
\tag*{[2]}
\\]

Therefore a state with quantum number \\(F\\) has shift

\\[
E_F=\frac{A}{2}
\left[F(F+1)-I(I+1)-S(S+1)\right].
\tag*{[3]}
\\]

For \\(I=S=1/2\\), angular-momentum addition permits \\(F=1\\) and \\(F=0\\). Substitution gives

\\[
E_{F=1}=\frac{A}{4},
\qquad
E_{F=0}=-\frac{3A}{4},
\qquad
\Delta E_{\mathrm{hfs}}=A.
\tag*{[4]}
\\]

The triplet \\(F=1\\) has \\(m_F=-1,0,1\\); the singlet \\(F=0\\) has only \\(m_F=0\\). The hydrogen splitting is

\\[
\Delta E_{\mathrm{hfs}}=h\nu,
\qquad
\nu\approx1.420\times10^9\,\mathrm{Hz},
\qquad
\lambda=\frac{c}{\nu}\approx0.211\,\mathrm m.
\tag*{[5]}
\\]

<PhysicsDiagram slug="hydrogen-hyperfine-spin-flip" />

The \\(F=1\\) configuration has the proton and electron spins aligned in the vector model, while \\(F=0\\) has them antiparallel. Flipping between these configurations changes the hyperfine energy by \\(h\nu\\) and produces the 1420 MHz, 21 cm photon shown in the source figure.

This 21 cm line is astrophysically important because neutral hydrogen is abundant and radio waves pass through dust. Hyperfine structure and the Lamb shift are separate non-examinable survey effects here; [1] is a ground-state contact model, not a complete hyperfine Hamiltonian for arbitrary atoms.

For many electrons, the Pauli exclusion principle requires every occupied one-electron state to have a distinct set \\((n,l,m_l,m_s)\\). A subshell with orbital number \\(l\\) has \\(2l+1\\) orbital projections and two spin projections, so its capacity is

\\[
N_l=2(2l+1),
\qquad
s:2,\quad p:6,\quad d:10.
\tag*{[6]}
\\]

Closed-shell examples are helium \\(1s^2\\), neon \\(1s^22s^22p^6\\), and argon \\(1s^22s^22p^63s^23p^6\\). Inner electrons shield the nucleus, so an outer electron experiences \\(Z_{\mathrm{eff}}<Z\\). Low-\\(l\\) orbitals penetrate the core more strongly and experience larger \\(Z_{\mathrm{eff}}\\), making them more tightly bound than hydrogenic states with the same \\(n\\) but larger \\(l\\). This qualitative screening picture explains why hydrogen's energy dependence on \\(n\\) alone does not survive in multi-electron atoms; quantitative energies require electron-electron interactions beyond this survey.

<PhysicsDiagram slug="lithium-hydrogen-energy-level-comparison" />

Hydrogen places all states with one \\(n\\) on the same dashed level in this nonrelativistic comparison. Lithium's penetrating \\(s\\) states are pulled down most strongly, \\(p\\) states less strongly, and high-\\(l\\) states approach the hydrogenic level because they remain mainly outside the shielding core.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Energy and wavelength of the hydrogen hyperfine line",
      question: "Use \\(\\nu=1.420\\times10^9\\,\\mathrm{Hz}\\), \\(h=4.136\\times10^{-15}\\,\\mathrm{eV\\,s}\\), and \\(c=2.998\\times10^8\\,\\mathrm{m\\,s^{-1}}\\) to find the hyperfine energy and wavelength.",
      answer: "From equation [5], \\[\\Delta E=h\\nu=(4.136\\times10^{-15})(1.420\\times10^9)=5.87\\times10^{-6}\\,\\mathrm{eV}.\\] The wavelength is \\[\\lambda=\\frac{c}{\\nu}=\\frac{2.998\\times10^8}{1.420\\times10^9}=0.211\\,\\mathrm m=21.1\\,\\mathrm{cm}.\\] **Final result:** \\(\\Delta E=5.87\\,\\mu\\mathrm{eV}\\) and \\(\\lambda=21.1\\,\\mathrm{cm}\\), matching the ground-state \\(F=1\\to F=0\\) line.",
    },
    {
      title: "Core penetration in an alkali atom",
      question: "Why is an alkali-metal \\(ns\\) state generally more tightly bound than a high-\\(l\\) state with the same principal quantum number?",
      answer: "An \\(s\\) wavefunction has substantial probability close to the nucleus and penetrates the shielding inner shells. It therefore experiences a larger effective nuclear charge than a high-\\(l\\) wavefunction suppressed near the core. **Final result:** stronger penetration lowers the \\(ns\\) energy; a hydrogenic \\(-13.6\\,\\mathrm{eV}/n^2\\) estimate is better for high-\\(l\\) outer states and is only qualitative for low-\\(l\\) states.",
    },
  ]}
/>
`;
