export const content = String.raw`## Principle

Precise hydrogen measurements reveal small shifts that the nonrelativistic Coulomb model cannot produce.

Two further fine-structure corrections accompany spin-orbit coupling. Relativistic kinematics lowers the energy because the first correction to the non-relativistic kinetic energy is negative, while the Darwin contact interaction raises hydrogen s-state energies because their wavefunctions are nonzero at the nucleus.

## Notation

<Notation
  items={[
    { symbol: "m,c,p,\\mathbf p", meaning: "electron mass, speed of light, momentum magnitude, and momentum operator", unit: "kg, m s^{-1}, kg m s^{-1}, kg m s^{-1}" },
    { symbol: "T,\\hat T_0,\\hat H_0,V(r)", meaning: "exact kinetic energy, non-relativistic kinetic operator, Hamiltonian, and Coulomb potential", unit: "J" },
    { symbol: "\\hat H'_{\\mathrm{rel}},\\hat H'_{\\mathrm D}", meaning: "relativistic-kinetic and Darwin perturbations", unit: "J" },
    { symbol: "E_n^{(0)},E_{nl,\\mathrm{rel}}^{(1)},E_{n,\\mathrm D}^{(1)}", meaning: "unperturbed, relativistic, and Darwin energies", unit: "J" },
    { symbol: "n,l,m_l,m_s", meaning: "principal, orbital, orbital-projection, and spin-projection quantum numbers" },
    { symbol: "\\psi_{n00}", meaning: "normalised hydrogen s-state wavefunction", unit: "m^{-3/2}" },
    { symbol: "\\hbar,e,\\epsilon_0", meaning: "reduced Planck constant, elementary-charge magnitude, and vacuum permittivity", unit: "J s, C, F m^{-1}" },
    { symbol: "a,\\delta^{(3)}(\\mathbf r)", meaning: "Bohr radius and three-dimensional delta at the nucleus", unit: "m, m^{-3}" },
  ]}
/>

## The Core Method

The exact relativistic kinetic energy obeys \\((T+mc^2)^2=p^2c^2+m^2c^4\\). Expanding the square root for \\(p\ll mc\\) gives

\\[
\begin{aligned}
T&=mc^2\left[\sqrt{1+\frac{p^2}{m^2c^2}}-1\right]\\
&\approx mc^2\left[\frac12\frac{p^2}{m^2c^2}-\frac18\frac{p^4}{m^4c^4}\right]
=\frac{p^2}{2m}-\frac{p^4}{8m^3c^2}.
\end{aligned}
\tag*{[1]}
\\]

Therefore

\\[
\hat H'_{\mathrm{rel}}=-\frac{\mathbf p^4}{8m^3c^2}
=-\frac{\hat T_0^2}{2mc^2}
=-\frac{[\hat H_0-V(r)]^2}{2mc^2}.
\tag*{[2]}
\\]

Taking the expectation value in a hydrogen eigenstate and using \\(\hat H_0|n,l,m_l,m_s\rangle=E_n^{(0)}|n,l,m_l,m_s\rangle\\) gives

\\[
\begin{aligned}
E_{nl,\mathrm{rel}}^{(1)}
&=-\frac{1}{2mc^2}
\langle \hat H_0^2-\hat H_0V-V\hat H_0+V^2\rangle\\
&=-\frac{1}{2mc^2}
\left[(E_n^{(0)})^2-2E_n^{(0)}\langle V\rangle+\langle V^2\rangle\right].
\end{aligned}
\tag*{[3]}
\\]

For the Coulomb potential, \\(\langle r^{-1}\rangle=1/(an^2)\\), \\(\langle r^{-2}\rangle=1/[a^2n^3(l+1/2)]\\), \\(e^2/(4\pi\epsilon_0)=\hbar^2/(ma)\\), and \\(E_n^{(0)}=-\hbar^2/(2ma^2n^2)\\). Therefore

\\[
\begin{aligned}
\langle V\rangle
&=-\frac{\hbar^2}{ma}\langle r^{-1}\rangle
=-\frac{\hbar^2}{ma^2n^2}=2E_n^{(0)},\\
\langle V^2\rangle
&=\frac{\hbar^4}{m^2a^2}\langle r^{-2}\rangle
=\frac{\hbar^4}{m^2a^4n^3(l+1/2)}
=\frac{4n(E_n^{(0)})^2}{l+1/2}.
\end{aligned}
\tag*{[4]}
\\]

Substitution of [4] into [3] yields

\\[
E_{nl,\mathrm{rel}}^{(1)}
=-\frac{(E_n^{(0)})^2}{2mc^2}
\left[\frac{4n}{l+1/2}-3\right].
\tag*{[5]}
\\]

The negative sign agrees with [1]. The Darwin perturbation describes the contact correction associated with localisation on the electron Compton scale:

\\[
\hat H'_{\mathrm D}
=\frac{\hbar^2}{8m^2c^2}\nabla^2V
=\frac{\pi\hbar^2}{2m^2c^2}
\frac{e^2}{4\pi\epsilon_0}\delta^{(3)}(\mathbf r).
\tag*{[6]}
\\]

Only \\(l=0\\) hydrogen wavefunctions are nonzero at the origin. Since \\(|\psi_{n00}(0)|^2=1/(\pi a^3n^3)\\),

\\[
E_{n,\mathrm D}^{(1)}
=\begin{cases}
\displaystyle \frac{2n(E_n^{(0)})^2}{mc^2},&l=0,\\
0,&l>0.
\end{cases}
\tag*{[7]}
\\]

The Darwin sign is positive for the attractive Coulomb potential. For first-order splitting within one fixed-\\(n\\) degenerate subspace, both rotationally invariant, spin-independent corrections are diagonal in the basis labelled by \\(n,l,m_l,m_s\\). This statement does not assert diagonality between states with different principal quantum numbers.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Ground-state relativistic and Darwin shifts",
      question: "For hydrogen \\(n=1,l=0\\), express both corrections in units of \\((E_1^{(0)})^2/(mc^2)\\) and find their sum using \\(E_1^{(0)}=-13.6\\,\\mathrm{eV}\\) and \\(mc^2=5.11\\times10^5\\,\\mathrm{eV}\\).",
      answer: "Equation [5] has bracket \\(4/(1/2)-3=5\\), so \\(E_{10,\\mathrm{rel}}^{(1)}=-(5/2)(E_1^{(0)})^2/(mc^2)\\). Equation [7] gives \\(E_{1,\\mathrm D}^{(1)}=2(E_1^{(0)})^2/(mc^2)\\). Their sum is \\[-\\frac12\\frac{(E_1^{(0)})^2}{mc^2}=-\\frac12\\frac{(13.6)^2}{5.11\\times10^5}\\,\\mathrm{eV}=-1.81\\times10^{-4}\\,\\mathrm{eV}.\\] **Final result:** the large negative relativistic and positive Darwin terms partially cancel, leaving \\(-1.81\\times10^{-4}\\,\\mathrm{eV}\\).",
    },
    {
      title: "Identifying a Darwin shift",
      question: "Which hydrogen orbitals receive a first-order Darwin correction: \\(2s\\), \\(2p\\), or both?",
      answer: "The three-dimensional delta in equation [6] samples the wavefunction at the origin. A \\(2s\\) wavefunction is nonzero there, whereas a \\(2p\\) wavefunction behaves as \\(r^1\\) near the origin and vanishes. **Final result:** \\(2s\\) receives a positive Darwin shift; \\(2p\\) receives none.",
    },
  ]}
/>
`;
