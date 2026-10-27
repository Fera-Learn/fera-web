export const content = String.raw`## Principle

An electron moving through the nuclear electric field experiences a magnetic interaction that links its orbital motion to its spin.

Spin-orbit coupling is the interaction between an electron's intrinsic spin magnetic moment and the magnetic field associated with its motion through a central electric field. The relativistic Thomas-precession factor halves the naive classical interaction, and the correct good basis couples orbital and spin angular momentum into total angular momentum.

## Notation

<Notation
  items={[
    { symbol: "\\mathbf L,\\mathbf S,\\mathbf J=\\mathbf L+\\mathbf S", meaning: "orbital, spin, and total electronic angular momentum", unit: "J s" },
    { symbol: "l,s,j", meaning: "orbital, spin, and total angular-momentum quantum numbers" },
    { symbol: "n,m_j", meaning: "principal quantum number and total angular-momentum projection quantum number" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "m,e,c", meaning: "electron mass, positive elementary-charge magnitude, and speed of light", unit: "kg, C, m s^{-1}" },
    { symbol: "\\epsilon_0,r,V(r)", meaning: "vacuum permittivity, electron-proton separation, and central potential energy", unit: "F m^{-1}, m, J" },
    { symbol: "a,E_n^{(0)},E_{nlj,\\mathrm{so}}^{(1)}", meaning: "Bohr radius, unperturbed hydrogen energy, and spin-orbit shift", unit: "m, J, J" },
    { symbol: "\\hat H'_{\\mathrm{so}}", meaning: "spin-orbit perturbing Hamiltonian", unit: "J" },
  ]}
/>

## The Core Method

For a central potential \\(V(r)\\), including the Thomas-precession factor, the spin-orbit perturbation is

\\[
\hat H'_{\mathrm{so}}=
\frac{1}{2m^2c^2r}\frac{dV}{dr}\,\mathbf L\cdot\mathbf S.
\tag*{[1]}
\\]

For hydrogen, \\(V(r)=-e^2/(4\pi\epsilon_0r)\\), so \\(dV/dr=+e^2/(4\pi\epsilon_0r^2)\\). The sign and factor of one half are therefore

\\[
\hat H'_{\mathrm{so}}=
\frac{e^2}{8\pi\epsilon_0m^2c^2r^3}\,\mathbf L\cdot\mathbf S.
\tag*{[2]}
\\]

The uncoupled states labelled by separate projections of \\(\mathbf L\\) and \\(\mathbf S\\) are not good states because \\(\mathbf L\cdot\mathbf S\\) does not commute with either projection separately. Use

\\[
\mathbf J^2=(\mathbf L+\mathbf S)^2
=\mathbf L^2+\mathbf S^2+2\mathbf L\cdot\mathbf S
\tag*{[3]}
\\]

to replace the interaction by operators diagonal in the coupled basis:

\\[
\mathbf L\cdot\mathbf S
=\frac{1}{2}\left(\mathbf J^2-\mathbf L^2-\mathbf S^2\right).
\tag*{[4]}
\\]

For an electron, \\(s=1/2\\). On a state labelled by \\(n,l,j,m_j\\), [4] has eigenvalue

\\[
\frac{\hbar^2}{2}
\left[j(j+1)-l(l+1)-\frac{3}{4}\right],
\qquad
j=\begin{cases}
1/2,&l=0,\\
l-1/2,\ l+1/2,&l>0.
\end{cases}
\tag*{[5]}
\\]

For hydrogen and \\(l>0\\), the radial expectation value is

\\[
\left\langle r^{-3}\right\rangle_{nl}
=\frac{1}{a^3n^3l(l+1/2)(l+1)}.
\tag*{[6]}
\\]

Combining [2], [5], and [6] first gives the coefficient in fundamental constants:

\\[
\begin{aligned}
E_{nlj,\mathrm{so}}^{(1)}
&=\frac{e^2}{8\pi\epsilon_0m^2c^2}
\frac{1}{a^3n^3l(l+1/2)(l+1)}
\frac{\hbar^2}{2}
\left[j(j+1)-l(l+1)-\frac34\right]\\
&=\frac{\hbar^4}{4m^3c^2a^4n^3}
\frac{j(j+1)-l(l+1)-3/4}
{l(l+1/2)(l+1)}.
\end{aligned}
\tag*{[7]}
\\]

The second line used \\(e^2/(4\pi\epsilon_0)=\hbar^2/(ma)\\). The unperturbed Coulomb energy provides the remaining conversion:

\\[
E_n^{(0)}=-\frac{\hbar^2}{2ma^2n^2},
\qquad
\frac{(E_n^{(0)})^2}{mc^2}
=\frac{\hbar^4}{4m^3c^2a^4n^4}.
\tag*{[8]}
\\]

Comparing [7] with [8] supplies one factor of \\(n\\), so

\\[
E_{nlj,\mathrm{so}}^{(1)}
=\frac{(E_n^{(0)})^2}{mc^2}
\frac{n\left[j(j+1)-l(l+1)-3/4\right]}
{l(l+1/2)(l+1)}.
\tag*{[9]}
\\]

Equation [9] must not be used at \\(l=0\\): its radial factor is singular, while the original operator vanishes because \\(\mathbf L=0\\). Thus the spin-orbit correction is exactly zero for an s state. The electron mass convention in [1]-[9] is the approximation used here; reduced-mass refinements are smaller than the retained treatment.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Splitting of the hydrogen 2p level",
      question: "For \\(n=2\\), \\(l=1\\), find the spin-orbit factors multiplying \\((E_2^{(0)})^2/(mc^2)\\) for \\(j=3/2\\) and \\(j=1/2\\).",
      answer: "Here \\(l(l+1/2)(l+1)=1(3/2)(2)=3\\). For \\(j=3/2\\), \\[j(j+1)-l(l+1)-\\frac34=\\frac{15}{4}-2-\\frac34=1,\\] so equation [9] gives \\[E_{2,1,3/2,\\mathrm{so}}^{(1)}=\\frac{2}{3}\\frac{(E_2^{(0)})^2}{mc^2}.\\] For \\(j=1/2\\), the bracket is \\(3/4-2-3/4=-2\\), giving \\[E_{2,1,1/2,\\mathrm{so}}^{(1)}=-\\frac{4}{3}\\frac{(E_2^{(0)})^2}{mc^2}.\\] **Final result:** the \\(j=3/2\\) state shifts upward and the \\(j=1/2\\) state shifts downward from spin-orbit coupling alone.",
    },
    {
      title: "Why the coupled basis is good",
      question: "Why should hydrogen spin-orbit states be labelled by \\(j,m_j\\) rather than separate orbital and spin projections?",
      answer: "Equations [3]-[4] express the perturbation through \\(\\mathbf J^2\\), \\(\\mathbf L^2\\), and \\(\\mathbf S^2\\). It also commutes with \\(J_z\\), but not with \\(L_z\\) or \\(S_z\\) separately. **Final result:** \\(|n,l,j,m_j\\rangle\\) diagonalises the perturbation within the degenerate hydrogen level and is the good basis.",
    },
  ]}
/>
`;
