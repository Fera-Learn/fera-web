export const content = String.raw`## Principle

Any electron spin state can be prepared as a mixture of two basis possibilities with complex amplitudes.

Electron spin is a two-state quantum system, so a spin state is represented by a two-component complex vector and each spin observable by a two-by-two Hermitian matrix. Stating the basis order fixes the physical meaning of every component and matrix entry.

## Notation

<Notation
  items={[
    { symbol: "|+\\rangle,|-\\rangle", meaning: "z-spin basis states in the ordered basis \\((|+\\rangle,|-\\rangle)\\)" },
    { symbol: "|\\chi\\rangle,a,b", meaning: "normalised spinor and its complex basis amplitudes" },
    { symbol: "\\chi^{\\dagger}", meaning: "Hermitian-conjugate row spinor" },
    { symbol: "\\sigma_x,\\sigma_y,\\sigma_z", meaning: "Pauli matrices" },
    { symbol: "\\hat S_x,\\hat S_y,\\hat S_z", meaning: "Cartesian electron-spin operators", unit: "J s" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "I_2", meaning: "two-dimensional identity matrix" },
    { symbol: "P_+,P_-", meaning: "probabilities of positive and negative z-spin outcomes" },
    { symbol: "i", meaning: "imaginary unit" },
  ]}
/>

## The Core Method

Fix the basis order as spin up first and spin down second. Kets are columns and bras are Hermitian-conjugate rows.

\\[
|+\rangle=\begin{pmatrix}1\\0\end{pmatrix},\qquad |-\rangle=\begin{pmatrix}0\\1\end{pmatrix},\qquad \langle+|=\begin{pmatrix}1&0\end{pmatrix},\qquad \langle-|=\begin{pmatrix}0&1\end{pmatrix}\tag*{[1]}
\\]

A general spinor and its normalisation condition are

\\[
|\chi\rangle=\begin{pmatrix}a\\b\end{pmatrix}=a|+\rangle+b|-\rangle,\qquad \chi^{\dagger}\chi=|a|^2+|b|^2=1\tag*{[2]}
\\]

The Pauli matrices in this ordered basis are

\\[
\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad \sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\qquad \sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}\tag*{[3]}
\\]

Each Pauli matrix is Hermitian and squares to the identity.

\\[
\sigma_k^{\dagger}=\sigma_k,\qquad \sigma_k^2=I_2\quad(k=x,y,z)\tag*{[4]}
\\]

The electron-spin operators are scaled Pauli matrices.

\\[
\hat S_k=\frac{\hbar}{2}\sigma_k\quad(k=x,y,z)\tag*{[5]}
\\]

For example, direct matrix multiplication verifies the z-spin eigenvalue equations.

\\[
\hat S_z|+\rangle=\frac{\hbar}{2}\begin{pmatrix}1&0\\0&-1\end{pmatrix}\begin{pmatrix}1\\0\end{pmatrix}=\frac{\hbar}{2}|+\rangle,\qquad \hat S_z|-\rangle=-\frac{\hbar}{2}|-\rangle\tag*{[6]}
\\]

The matrices also reproduce the angular-momentum commutator. Multiplication gives \\(\sigma_x\sigma_y=i\sigma_z\\) and \\(\sigma_y\sigma_x=-i\sigma_z\\), so

\\[
[\hat S_x,\hat S_y]=\frac{\hbar^2}{4}[\sigma_x,\sigma_y]=\frac{\hbar^2}{4}(2i\sigma_z)=i\hbar\hat S_z\tag*{[7]}
\\]

In the stated basis, z-spin probabilities and expectation value follow by matrix projection.

\\[
P_+=|\langle+|\chi\rangle|^2=|a|^2,\qquad P_-=|\langle-|\chi\rangle|^2=|b|^2,\qquad \langle S_z\rangle=\chi^{\dagger}\hat S_z\chi\tag*{[8]}
\\]

Changing the basis order without changing the matrices would exchange physical labels and produce incorrect signs. The basis declaration is therefore part of the operator definition.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Reading a complex spinor",
      question: "In the ordered z-spin basis, an electron has spinor \\(|\\chi\\rangle=(\\sqrt3/2, i/2)^{\\mathsf T}\\). Verify normalisation, find both z-spin probabilities, and calculate \\(\\langle S_z\\rangle\\).",
      answer: "The squared moduli sum to \\[\\chi^{\\dagger}\\chi=\\left|\\frac{\\sqrt3}{2}\\right|^2+\\left|\\frac{i}{2}\\right|^2=\\frac34+\\frac14=1.\\] Equation [8] therefore gives \\(P_+=3/4\\) and \\(P_-=1/4\\). Evaluate the expectation value with the diagonal matrix: \\[\\langle S_z\\rangle=\\begin{pmatrix}\\sqrt3/2&-i/2\\end{pmatrix}\\frac{\\hbar}{2}\\begin{pmatrix}1&0\\0&-1\\end{pmatrix}\\begin{pmatrix}\\sqrt3/2\\\\i/2\\end{pmatrix}=\\frac{\\hbar}{2}\\left(\\frac34-\\frac14\\right)=\\frac{\\hbar}{4}.\\] **Final result:** the spinor is normalised, \\(P_+=3/4\\), \\(P_-=1/4\\), and \\(\\langle S_z\\rangle=\\hbar/4\\).",
    },
    {
      title: "An x-spin eigenstate",
      question: "Show that \\(|\\chi_x\\rangle=(1/\\sqrt2)(1,1)^{\\mathsf T}\\) has definite positive x-spin, and state its z-spin probabilities.",
      answer: "Apply equations [3] and [5]: \\[\\hat S_x|\\chi_x\\rangle=\\frac{\\hbar}{2}\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}\\frac{1}{\\sqrt2}\\begin{pmatrix}1\\\\1\\end{pmatrix}=\\frac{\\hbar}{2}\\frac{1}{\\sqrt2}\\begin{pmatrix}1\\\\1\\end{pmatrix}=\\frac{\\hbar}{2}|\\chi_x\\rangle.\\] It is therefore an \\(S_x\\) eigenstate with eigenvalue \\(+\\hbar/2\\). In the z basis, both amplitudes have modulus \\(1/\\sqrt2\\), so \\[P_+=P_-=\\frac12.\\] **Final result:** x-spin is certainly \\(+\\hbar/2\\), while a z-spin measurement gives either \\(+\\hbar/2\\) or \\(-\\hbar/2\\) with equal probability.",
    },
  ]}
/>
`;
