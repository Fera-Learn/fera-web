export const content = String.raw`## Principle

A spectral line that looks single at low resolution separates into nearby components when measured more precisely.

Hydrogen fine structure is the combined first-order effect of relativistic kinetic energy, spin-orbit coupling, and the Darwin contact term. Although the separate terms depend on orbital quantum number, their sum at this accuracy depends only on the principal and total electronic angular-momentum quantum numbers.

## Notation

<Notation
  items={[
    { symbol: "n,l,s,j,m_j", meaning: "principal, orbital, spin, total electronic, and total projection quantum numbers" },
    { symbol: "E_n^{(0)},\\Delta E_{nj}^{(1)},E_{nj}", meaning: "unperturbed energy, fine-structure shift, and corrected energy", unit: "J" },
    { symbol: "m,c", meaning: "electron mass and speed of light", unit: "kg, m s^{-1}" },
    { symbol: "\\alpha", meaning: "fine-structure constant \\(e^2/(4\\pi\\epsilon_0\\hbar c)\\), approximately 1/137" },
    { symbol: "e,\\epsilon_0,\\hbar", meaning: "elementary-charge magnitude, vacuum permittivity, and reduced Planck constant", unit: "C, F m^{-1}, J s" },
    { symbol: "\\Delta E_{\\mathrm{rel}},\\Delta E_{\\mathrm{so}},\\Delta E_{\\mathrm D}", meaning: "relativistic, spin-orbit, and Darwin shifts", unit: "J" },
    { symbol: "Q_n", meaning: "positive fine-structure energy scale: squared unperturbed energy divided by twice the electron rest energy", unit: "J" },
  ]}
/>

## The Core Method

The unperturbed hydrogen energy in the electron-mass approximation is

\\[
E_n^{(0)}=-\frac{\alpha^2mc^2}{2n^2}.
\tag*{[1]}
\\]

Use the coupled basis \\(|n,l,j,m_j\rangle\\), where electron spin is \\(s=1/2\\) and

\\[
j=\begin{cases}
1/2,&l=0,\\
l-1/2,\ l+1/2,&l>0,
\end{cases}
\qquad
m_j=-j,-j+1,\ldots,j.
\tag*{[2]}
\\]

Define \\(Q_n=(E_n^{(0)})^2/(2mc^2)\\). For \\(l>0\\), the Darwin shift is zero, while the relativistic and spin-orbit results are

\\[
\begin{aligned}
\Delta E_{\mathrm{rel}}
&=Q_n\left(3-\frac{4n}{l+1/2}\right),\\
\Delta E_{\mathrm{so}}
&=2Q_n\frac{n\left[j(j+1)-l(l+1)-3/4\right]}
{l(l+1/2)(l+1)},\\
\Delta E_{\mathrm D}&=0.
\end{aligned}
\tag*{[3]}
\\]

The angular factor in the spin-orbit term reduces separately for the two allowed total angular momenta:

\\[
j(j+1)-l(l+1)-\frac34
=\begin{cases}
l,&j=l+1/2,\\
-(l+1),&j=l-1/2.
\end{cases}
\tag*{[4]}
\\]

Substituting [4] into [3] displays the cancellation of the \\(l\\)-dependence for each branch:

\\[
\frac{\Delta E_{\mathrm{rel}}+\Delta E_{\mathrm{so}}}{Q_n}
=\begin{cases}
\displaystyle 3-\frac{4n}{l+1/2}
+\frac{2n}{(l+1/2)(l+1)}
=3-\frac{4n}{l+1},&j=l+1/2,\\[6pt]
\displaystyle 3-\frac{4n}{l+1/2}
-\frac{2n}{l(l+1/2)}
=3-\frac{4n}{l},&j=l-1/2
\end{cases}
=3-\frac{4n}{j+1/2}.
\tag*{[5]}
\\]

The \\(l=0\\) state requires a separate check because the spin-orbit radial formula is singular. Here \\(j=1/2\\), the original spin-orbit operator vanishes, and the Darwin term cancels part of the relativistic term:

\\[
\begin{aligned}
\Delta E_{\mathrm{so}}&=0,
&\Delta E_{\mathrm{rel}}&=Q_n(3-8n),
&\Delta E_{\mathrm D}&=4nQ_n,\\
\Delta E_{\mathrm{rel}}+\Delta E_{\mathrm D}
&=Q_n(3-4n)
=Q_n\left(3-\frac{4n}{j+1/2}\right).
\end{aligned}
\tag*{[6]}
\\]

Thus both \\(l>0\\) branches and the \\(l=0\\) case give

\\[
\Delta E_{nj}^{(1)}
=\Delta E_{\mathrm{rel}}+\Delta E_{\mathrm{so}}+\Delta E_{\mathrm D}
=\frac{(E_n^{(0)})^2}{2mc^2}
\left(3-\frac{4n}{j+1/2}\right).
\tag*{[7]}
\\]

Using [1] to factor out \\(E_n^{(0)}\\), the corrected energy is

\\[
E_{nj}=E_n^{(0)}
\left\{1+\frac{\alpha^2}{n^2}
\left[\frac{n}{j+1/2}-\frac34\right]\right\}.
\tag*{[8]}
\\]

<PhysicsDiagram slug="hydrogen-fine-structure-levels" />

The unperturbed \\(n=2\\) and \\(n=3\\) lines each contain several \\(l,j\\) labels at one gross energy. Fine structure separates the lines by \\(j\\): states such as \\(3s_{1/2}\\) and \\(3p_{1/2}\\) remain together because equation [8] has the same \\(n\\) and \\(j\\), whereas \\(3p_{3/2}\\) moves to the \\(j=3/2\\) line.

Because \\(E_n^{(0)}<0\\), the positive correction factor in [8] makes many levels slightly more negative. Equations [7] and [8] are equivalent; changing the sign while switching between them is a common mistake.

The gross energy is of order \\(\alpha^2mc^2\\), whereas [7] is of order \\(\alpha^4mc^2\\). Thus

\\[
\left|\frac{\Delta E_{nj}^{(1)}}{E_n^{(0)}}\right|\sim\alpha^2\approx5.3\times10^{-5}.
\tag*{[9]}
\\]

At this level the energy is independent of \\(l\\) and \\(m_j\\) for fixed \\(n,j\\). For example, \\(2s_{1/2}\\) and \\(2p_{1/2}\\) remain degenerate in [8]. The Lamb shift removes that equality, but it is non-examinable and is not part of this fine-structure formula.

For the ground state, \\(n=1,l=0,j=1/2\\), [8] gives

\\[
\frac{\Delta E_{1,1/2}^{(1)}}{E_1^{(0)}}
=\alpha^2\left(1-\frac34\right)=\frac{\alpha^2}{4},
\qquad
\Delta E_{1,1/2}^{(1)}<0.
\tag*{[10]}
\\]

Reduced-mass and quantum-electrodynamic refinements lie beyond the retained approximation.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Fine splitting of the n equals 2 level",
      question: "Using \\(E_2^{(0)}=-3.40\\,\\mathrm{eV}\\) and \\(\\alpha^2=5.325\\times10^{-5}\\), find the shifts for \\(j=1/2\\) and \\(j=3/2\\), then their separation.",
      answer: "For \\(n=2\\), equation [8] gives \\[\\Delta E_{2j}^{(1)}=E_2^{(0)}\\frac{\\alpha^2}{4}\\left[\\frac{2}{j+1/2}-\\frac34\\right].\\] For \\(j=1/2\\), the bracket is \\(2-3/4=5/4\\), giving \\(\\Delta E_{2,1/2}^{(1)}=-5.66\\times10^{-5}\\,\\mathrm{eV}\\). For \\(j=3/2\\), the bracket is \\(1-3/4=1/4\\), giving \\(\\Delta E_{2,3/2}^{(1)}=-1.13\\times10^{-5}\\,\\mathrm{eV}\\). Therefore \\[E_{2,3/2}-E_{2,1/2}=4.53\\times10^{-5}\\,\\mathrm{eV}.\\] **Final result:** the \\(j=1/2\\) level lies lower, and the separation is \\(4.53\\times10^{-5}\\,\\mathrm{eV}\\).",
    },
    {
      title: "Reading spectroscopic labels",
      question: "Which of \\(3s_{1/2}\\), \\(3p_{1/2}\\), and \\(3p_{3/2}\\) are degenerate under equation [8]?",
      answer: "The formula depends only on \\(n\\) and \\(j\\). The first two states both have \\(n=3,j=1/2\\), despite different \\(l\\), so they are degenerate at fine-structure order. The \\(3p_{3/2}\\) state has a different \\(j\\). **Final result:** \\(3s_{1/2}\\) and \\(3p_{1/2}\\) are degenerate; \\(3p_{3/2}\\) has a distinct energy.",
    },
  ]}
/>
`;
