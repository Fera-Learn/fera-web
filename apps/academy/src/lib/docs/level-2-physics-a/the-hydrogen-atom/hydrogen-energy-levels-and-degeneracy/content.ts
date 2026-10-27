export const content = String.raw`## Principle

Different hydrogen wave patterns can produce exactly the same measured energy.

In the nonrelativistic Coulomb problem, bound-state energy depends on the principal quantum number but not on the orbital or magnetic quantum numbers. Many distinct wavefunctions therefore share one energy, producing the characteristic degeneracy of hydrogen.

## Notation

<Notation
  items={[
    { symbol: "n,\\ell,m", meaning: "principal, orbital, and magnetic quantum numbers", unit: "1" },
    { symbol: "s,m_s", meaning: "electron spin quantum number and spin projection quantum number", unit: "1" },
    { symbol: "E_n,g_n", meaning: "energy of shell n and its orbital degeneracy", unit: "J, 1" },
    { symbol: "Z,e,\\epsilon_0", meaning: "nuclear charge number, elementary charge, and vacuum permittivity", unit: "1, C, C^{2} N^{-1} m^{-2}" },
    { symbol: "\\mu,\\mu_{\\mathrm H}", meaning: "system reduced mass and hydrogen reduced mass", unit: "kg, kg" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "a,k", meaning: "hydrogenic length and bound-state decay constant", unit: "m, m^{-1}" },
    { symbol: "E_{1\\mathrm H}", meaning: "hydrogen ground-state energy, approximately -13.6 eV", unit: "eV" },
  ]}
/>

## The Core Method

For a Coulomb field, termination of the radial series imposes \\(k=1/(an)\\), where \\(a=4\pi\epsilon_0\hbar^2/(\mu Ze^2)\\). A bound state also satisfies the definition

\\[
k^2=-\frac{2\mu E_n}{\hbar^2}.
\tag*{[1]}
\\]

Solve equation [1] for the energy and substitute the quantized value of \\(k\\):

\\[
E_n=-\frac{\hbar^2k^2}{2\mu}
=-\frac{\hbar^2}{2\mu a^2n^2}.
\tag*{[2]}
\\]

Now insert the definition of \\(a\\):

\\[
E_n=-\frac{\mu}{2\hbar^2}
\left(\frac{Ze^2}{4\pi\epsilon_0}\right)^2\frac{1}{n^2}
=\frac{\mu}{\mu_{\mathrm H}}\frac{Z^2}{n^2}E_{1\mathrm H}.
\tag*{[3]}
\\]

For ordinary hydrogen, \\(Z=1\\) and \\(\mu=\mu_{\mathrm H}\\), so

\\[
E_n=-\frac{13.6\,\mathrm{eV}}{n^2},
\qquad n=1,2,3,\ldots.
\tag*{[4]}
\\]

The radial polynomial and spherical harmonic restrict the other orbital quantum numbers to

\\[
\ell=0,1,\ldots,n-1,
\qquad
m=-\ell,-\ell+1,\ldots,\ell.
\tag*{[5]}
\\]

For fixed \\(\ell\\), there are \\(2\ell+1\\) allowed values of \\(m\\). Sum these states over every allowed \\(\ell\\):

\\[
g_n=\sum_{\ell=0}^{n-1}(2\ell+1)
=2\sum_{\ell=0}^{n-1}\ell+\sum_{\ell=0}^{n-1}1.
\tag*{[6]}
\\]

Using \\(\sum_{\ell=0}^{n-1}\ell=n(n-1)/2\\) and \\(\sum_{\ell=0}^{n-1}1=n\\) gives

\\[
g_n=2\frac{n(n-1)}{2}+n=n^2.
\tag*{[7]}
\\]

Equation [7] counts spatial states only. An electron has \\(s=1/2\\) and \\(m_s=\pm1/2\\), so including the two spin states gives

\\[
g_n^{(\mathrm{with\ spin})}=2n^2.
\tag*{[8]}
\\]

Independence from \\(m\\) follows from rotational symmetry. The additional independence from \\(\ell\\) is special to the inverse-distance Coulomb potential and is sometimes called accidental degeneracy. Fine structure, external fields, and other perturbations can split these idealized levels.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Enumerate the n=3 shell",
      question: "For ordinary hydrogen, find the energy and enumerate the orbital degeneracy of the \\(n=3\\) shell. Then include electron spin.",
      answer: "Equation [4] gives \\[E_3=-\\frac{13.6}{3^2}\\,\\mathrm{eV}=-1.51\\,\\mathrm{eV}.\\] For \\(\\ell=0\\), only \\(m=0\\) is allowed, giving 1 state. For \\(\\ell=1\\), \\(m=-1,0,1\\), giving 3 states. For \\(\\ell=2\\), \\(m=-2,-1,0,1,2\\), giving 5 states. Thus \\[g_3=1+3+5=9=3^2.\\] Multiplying by the two values \\(m_s=\\pm1/2\\) gives \\(18\\) states. **Final result:** \\(E_3=-1.51\\,\\mathrm{eV}\\), with orbital degeneracy 9 or total degeneracy 18 when spin is counted.",
    },
    {
      title: "Compare 2s and 2p energies",
      question: "In the ideal nonrelativistic Coulomb model, do the 2s and 2p states have different energies?",
      answer: "Both states have \\(n=2\\). The 2s state has \\(\\ell=0\\), while the 2p states have \\(\\ell=1\\), but equation [3] contains neither \\(\\ell\\) nor \\(m\\). Therefore each has \\[E_2=-\\frac{13.6}{4}\\,\\mathrm{eV}=-3.40\\,\\mathrm{eV}.\\] **Final result:** 2s and 2p are degenerate in this model. Any measured splitting requires physics beyond the ideal Coulomb Schrodinger Hamiltonian.",
    },
  ]}
/>
`;
