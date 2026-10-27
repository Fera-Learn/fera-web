export const content = String.raw`## Principle

For one fixed total angular momentum, the allowed projections form a finite evenly spaced ladder.

Angular-momentum ladder operators move between adjacent projection eigenstates without changing the total angular momentum. Their coefficients are fixed by state normalisation, so they provide both the allowed transitions and the exact amplitude for each step.

## Notation

<Notation
  items={[
    { symbol: "\\hat J_{\\pm},\\hat J_x,\\hat J_y,\\hat J_z", meaning: "raising or lowering operator and Cartesian angular-momentum components", unit: "J s" },
    { symbol: "\\hat J^2", meaning: "squared total angular-momentum operator", unit: "J^{2} s^{2}" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "j,m", meaning: "total and projection angular-momentum quantum numbers" },
    { symbol: "|j,m\\rangle", meaning: "normalised simultaneous eigenstate of \\(\\hat J^2\\) and \\(\\hat J_z\\)" },
    { symbol: "[\\hat A,\\hat B],i", meaning: "commutator and imaginary unit" },
    { symbol: "\\|\\cdot\\|", meaning: "norm of a state vector" },
  ]}
/>

## The Core Method

Define the two ladder operators from the transverse components. They are adjoints of one another, not Hermitian observables individually.

\\[
\hat J_+=\hat J_x+i\hat J_y,\qquad \hat J_-=\hat J_x-i\hat J_y,\qquad \hat J_+^{\dagger}=\hat J_-\tag*{[1]}
\\]

Using the angular-momentum commutators and linearity gives

\\[
[\hat J^2,\hat J_{\pm}]=0,\qquad [\hat J_z,\hat J_{\pm}]=\pm\hbar\hat J_{\pm}\tag*{[2]}
\\]

Apply the second commutator to \\(|j,m\rangle\\) and then use \\(\hat J_z|j,m\rangle=m\hbar|j,m\rangle\\).

\\[
\begin{aligned}
[\hat J_z,\hat J_{\pm}]|j,m\rangle
&=\hat J_z(\hat J_{\pm}|j,m\rangle)-\hat J_{\pm}(m\hbar|j,m\rangle)\\
&=\pm\hbar\hat J_{\pm}|j,m\rangle
\end{aligned}\tag*{[3]}
\\]

Rearranging equation [3] shows that the new state has projection quantum number \\(m\pm1\\), while the first commutator in equation [2] shows that \\(j\\) is unchanged.

\\[
\hat J_z(\hat J_{\pm}|j,m\rangle)=(m\pm1)\hbar(\hat J_{\pm}|j,m\rangle)\tag*{[4]}
\\]

The proportionality coefficient follows from the norm. First expand the ordered products, using \\([\hat J_x,\hat J_y]=i\hbar\hat J_z\\).

\\[
\hat J_-\hat J_+=\hat J^2-\hat J_z^2-\hbar\hat J_z,\qquad \hat J_+\hat J_-=\hat J^2-\hat J_z^2+\hbar\hat J_z\tag*{[5]}
\\]

Because \\(\hat J_+^{\dagger}=\hat J_-\\), the squared norm of a raised state is

\\[
\begin{aligned}
\|\hat J_+|j,m\rangle\|^2
&=\langle j,m|\hat J_-\hat J_+|j,m\rangle\\
&=\hbar^2\left[j(j+1)-m^2-m\right]\\
&=\hbar^2\left[j(j+1)-m(m+1)\right]
\end{aligned}\tag*{[6]}
\\]

Choose the conventional positive real coefficient. Taking the square root of equation [6] gives the normalised raising action.

\\[
\hat J_+|j,m\rangle=\hbar\sqrt{j(j+1)-m(m+1)}\,|j,m+1\rangle\tag*{[7]}
\\]

Repeating the norm calculation with the second product in equation [5] gives

\\[
\hat J_-|j,m\rangle=\hbar\sqrt{j(j+1)-m(m-1)}\,|j,m-1\rangle\tag*{[8]}
\\]

At \\(m=j\\), the coefficient in equation [7] is zero; at \\(m=-j\\), the coefficient in equation [8] is zero. A common error is to write only \\(\hat J_{\pm}|j,m\rangle\propto|j,m\pm1\rangle\\), which loses the physically required amplitude and hides the endpoints.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Climbing a j equals one ladder",
      question: "Starting from \\(|1,-1\\rangle\\), apply the raising operator twice and verify that a third application vanishes.",
      answer: "For the first step, equation [7] gives \\[\\hat J_+|1,-1\\rangle=\\hbar\\sqrt{1(2)-(-1)(0)}|1,0\\rangle=\\sqrt2\\hbar|1,0\\rangle.\\] Apply \\(\\hat J_+\\) again to the whole result: \\[\\hat J_+^2|1,-1\\rangle=\\sqrt2\\hbar\\left(\\hbar\\sqrt{1(2)-0(1)}|1,1\\rangle\\right)=2\\hbar^2|1,1\\rangle.\\] At the top rung, the next coefficient is \\[\\hbar\\sqrt{1(2)-1(2)}=0.\\] **Final result:** the successive states are \\(\\sqrt2\\hbar|1,0\\rangle\\), then \\(2\\hbar^2|1,1\\rangle\\), and finally zero. The vanishing third step verifies the finite upper endpoint.",
    },
    {
      title: "A spin-half lowering step",
      question: "Evaluate \\(\\hat J_-|1/2,1/2\\rangle\\) and \\(\\hat J_-|1/2,-1/2\\rangle\\).",
      answer: "For the upper state, equation [8] gives \\[\\hat J_-|\\tfrac12,\\tfrac12\\rangle=\\hbar\\sqrt{\\tfrac12(\\tfrac32)-\\tfrac12(-\\tfrac12)}|\\tfrac12,-\\tfrac12\\rangle=\\hbar|\\tfrac12,-\\tfrac12\\rangle.\\] For the lower state, the coefficient is \\[\\hbar\\sqrt{\\tfrac12(\\tfrac32)-(-\\tfrac12)(-\\tfrac32)}=0.\\] **Final result:** lowering the upper state produces \\(\\hbar|1/2,-1/2\\rangle\\), while lowering the bottom state gives zero.",
    },
  ]}
/>
`;
