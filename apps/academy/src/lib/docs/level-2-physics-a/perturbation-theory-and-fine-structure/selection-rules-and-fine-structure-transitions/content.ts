export const content = String.raw`## Principle

Two atomic levels may have different energies yet produce no strong spectral line between them.

Fine structure creates several nearby energies within one principal level, but not every pair of states produces a strong spectral line. Electric-dipole selection rules follow from the angular dependence and parity of the transition matrix element, leaving characteristic clusters of allowed transitions.

## Notation

<Notation
  items={[
    { symbol: "n,l,j,m_j", meaning: "principal, orbital, total electronic, and total projection quantum numbers" },
    { symbol: "i,f", meaning: "initial and final stationary states" },
    { symbol: "\\Delta l,\\Delta j,\\Delta m_j", meaning: "final-minus-initial changes in angular quantum numbers" },
    { symbol: "\\hat{\\mathbf d}=-e\\mathbf r", meaning: "electric-dipole operator", unit: "C m" },
    { symbol: "\\mathcal M_{fi}", meaning: "electric-dipole transition matrix element", unit: "C m" },
    { symbol: "E_i,E_f,E_\\gamma", meaning: "initial, final, and emitted-photon energies", unit: "J" },
    { symbol: "E_n^{(0)},E_{nj},\\alpha", meaning: "unperturbed hydrogen energy, fine-structure energy, and fine-structure constant", unit: "J, J, 1" },
    { symbol: "h,c,\\nu,\\lambda", meaning: "Planck constant, speed of light, photon frequency, and wavelength", unit: "J s, m s^{-1}, s^{-1}, m" },
  ]}
/>

## The Core Method

For an electric-dipole transition, the amplitude is controlled by

\\[
\mathcal M_{fi}=\langle f|\hat{\mathbf d}|i\rangle
=-e\langle f|\mathbf r|i\rangle.
\tag*{[1]}
\\]

If this matrix element vanishes by symmetry, the transition is electric-dipole forbidden. The electric-dipole selection rules for one-electron states are

\\[
\Delta l=\pm1,
\qquad
\Delta j=0,\pm1,
\qquad
j=0\not\leftrightarrow j=0.
\tag*{[2]}
\\]

Resolving magnetic sublevels adds

\\[
\Delta m_j=0,\pm1.
\tag*{[3]}
\\]

The dipole operator does not flip electron spin in this approximation, and its odd parity means the orbital parity must change. For a one-electron orbital, parity is \\((-1)^l\\), so the parity condition is already encoded by \\(\Delta l=\pm1\\).

For emission, first check that \\(E_i>E_f\\), then calculate

\\[
E_\gamma=E_i-E_f=h\nu=\frac{hc}{\lambda}.
\tag*{[4]}
\\]

Hydrogen fine-structure energies depend on \\(n,j\\), not on \\(l\\) at this order:

\\[
E_{nj}=E_n^{(0)}
\left\{1+\frac{\alpha^2}{n^2}
\left[\frac{n}{j+1/2}-\frac34\right]\right\}.
\tag*{[5]}
\\]

For Balmer-alpha emission, \\(n=3\to2\\), the allowed orbital labels are

\\[
\begin{aligned}
&3s_{1/2}\to2p_{1/2},\ 3s_{1/2}\to2p_{3/2},\\
&3p_{1/2}\to2s_{1/2},\ 3p_{3/2}\to2s_{1/2},\\
&3d_{3/2}\to2p_{1/2},\ 3d_{3/2}\to2p_{3/2},\ 3d_{5/2}\to2p_{3/2}.
\end{aligned}
\tag*{[6]}
\\]

These seven labelled transitions represent only five distinct \\((n_i,j_i)\to(n_f,j_f)\\) energies because states with the same \\(n,j\\) remain degenerate. Several lines lie extremely close, so the dominant observation is often described as a doublet rather than five cleanly resolved peaks. Forbidden means strongly suppressed at electric-dipole order, not absolutely impossible; weaker higher-multipole processes can occur.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Filtering candidate Balmer-alpha transitions",
      question: "Decide whether \\(3d_{5/2}\\to2p_{3/2}\\), \\(3d_{5/2}\\to2p_{1/2}\\), and \\(3p_{3/2}\\to2p_{1/2}\\) are electric-dipole allowed.",
      answer: "For \\(3d_{5/2}\\to2p_{3/2}\\), \\(\\Delta l=1-2=-1\\) and \\(\\Delta j=3/2-5/2=-1\\), so it is allowed. For \\(3d_{5/2}\\to2p_{1/2}\\), \\(\\Delta l=-1\\) but \\(\\Delta j=-2\\), so it is forbidden. For \\(3p_{3/2}\\to2p_{1/2}\\), \\(\\Delta j=-1\\) but \\(\\Delta l=0\\), so it is forbidden. **Final result:** only \\(3d_{5/2}\\to2p_{3/2}\\) is electric-dipole allowed.",
    },
    {
      title: "Why five energies can resemble two lines",
      question: "Fine-structure rules leave five Balmer-alpha transition energies. Why can a spectrum still appear as a doublet?",
      answer: "Equation [5] makes splittings decrease rapidly with principal quantum number, and several of the five differences are nearly equal. Finite linewidth and instrumental resolution merge neighbouring components into two dominant clusters. **Final result:** selection rules set which components exist, while near-degeneracy and resolution determine how many peaks are visibly separated.",
    },
  ]}
/>
`;
