export const content = String.raw`## Principle

Circular motion resists collapse towards the centre even when the physical force is attractive.

Radial motion in a central field is governed by the physical potential plus a centrifugal contribution from orbital angular momentum. The centrifugal term is repulsive at short distance, so nonzero angular momentum suppresses penetration towards the centre even when the physical interaction is attractive.

## Notation

<Notation
  items={[
    { symbol: "r", meaning: "radial coordinate", unit: "m" },
    { symbol: "U_{n\\ell}", meaning: "reduced radial wavefunction", unit: "m^{-1/2}" },
    { symbol: "V,V_{\\mathrm{eff}}", meaning: "physical and effective potential energies", unit: "J" },
    { symbol: "n,\\ell", meaning: "radial-state label and orbital angular momentum quantum number", unit: "1" },
    { symbol: "\\mu", meaning: "reduced mass", unit: "kg" },
    { symbol: "\\hbar", meaning: "reduced Planck constant", unit: "J s" },
    { symbol: "Z,e,\\epsilon_0", meaning: "nuclear charge number, elementary charge, and vacuum permittivity", unit: "1, C, C^{2} N^{-1} m^{-2}" },
    { symbol: "K,a", meaning: "Coulomb strength K=Ze^2/(4\\pi\\epsilon_0) and hydrogenic length a=\\hbar^2/(\\mu K)", unit: "J m, m" },
    { symbol: "E,r_{\\min}", meaning: "radial energy eigenvalue and position of an effective-potential minimum", unit: "J, m" },
  ]}
/>

## The Core Method

The reduced radial equation can be written as an ordinary one-dimensional eigenvalue problem on \\(r\geq0\\):

\\[
-\frac{\hbar^2}{2\mu}\frac{d^2U_{n\ell}}{dr^2}
+V_{\mathrm{eff}}(r)U_{n\ell}(r)=EU_{n\ell}(r).
\tag*{[1]}
\\]

Comparison with the separated three-dimensional equation identifies the effective potential as

\\[
V_{\mathrm{eff}}(r)=V(r)+\frac{\hbar^2\ell(\ell+1)}{2\mu r^2}.
\tag*{[2]}
\\]

The second term is the centrifugal potential. It vanishes for \\(\ell=0\\), is positive for \\(\ell>0\\), and diverges as \\(r^{-2}\\), faster than a Coulomb attraction diverges as \\(-r^{-1}\\). For a nucleus of charge \\(+Ze\\), define \\(K=Ze^2/(4\pi\epsilon_0)\\). Then

\\[
V(r)=-\frac{K}{r},
\qquad
V_{\mathrm{eff}}(r)=-\frac{K}{r}
+\frac{\hbar^2\ell(\ell+1)}{2\mu r^2}.
\tag*{[3]}
\\]

For \\(\ell>0\\), find the minimum by differentiating equation [3]:

\\[
\frac{dV_{\mathrm{eff}}}{dr}
=\frac{K}{r^2}-\frac{\hbar^2\ell(\ell+1)}{\mu r^3}=0.
\tag*{[4]}
\\]

Multiplication by \\(r^3\\) and division by \\(K\\) give

\\[
r_{\min}=\frac{\hbar^2\ell(\ell+1)}{\mu K}
=a\ell(\ell+1),
\qquad
a=\frac{\hbar^2}{\mu K}.
\tag*{[5]}
\\]

Substitute equation [5] into the two terms of equation [3]:

\\[
-\frac{K}{r_{\min}}
=-\frac{\mu K^2}{\hbar^2\ell(\ell+1)},
\qquad
\frac{\hbar^2\ell(\ell+1)}{2\mu r_{\min}^2}
=\frac{\mu K^2}{2\hbar^2\ell(\ell+1)}.
\tag*{[6]}
\\]

Therefore

\\[
V_{\mathrm{eff}}(r_{\min})
=-\frac{\mu K^2}{2\hbar^2\ell(\ell+1)}.
\tag*{[7]}
\\]

For \\(\ell=0\\), equations [5]-[7] do not apply: there is no centrifugal barrier and no finite-radius minimum of \\(-K/r\\). At any \\(\ell\\), a classical radial turning point satisfies \\(E=V_{\mathrm{eff}}(r)\\), while a quantum wavefunction can extend into regions where \\(E<V_{\mathrm{eff}}\\).

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Minimum for a hydrogen 2p effective potential",
      question: "For hydrogen, take \\(Z=1\\), \\(a=5.29\\times10^{-11}\\,\\mathrm m\\), and \\(\\ell=1\\). Find the radius and depth of the effective-potential minimum. Use \\(\\mu K^2/(2\\hbar^2)=13.6\\,\\mathrm{eV}\\).",
      answer: "Equation [5] gives \\[r_{\\min}=a\\ell(\\ell+1)=a(1)(2)=2a=1.06\\times10^{-10}\\,\\mathrm m.\\] Equation [7] gives \\[V_{\\mathrm{eff}}(r_{\\min})=-\\frac{13.6\\,\\mathrm{eV}}{\\ell(\\ell+1)}=-\\frac{13.6}{2}\\,\\mathrm{eV}=-6.80\\,\\mathrm{eV}.\\] **Final result:** the \\(\\ell=1\\) effective potential has its minimum at \\(2a=1.06\\times10^{-10}\\,\\mathrm m\\), with value \\(-6.80\\,\\mathrm{eV}\\).",
    },
    {
      title: "Compare s and d penetration",
      question: "At the same small radius, which Coulomb state is more strongly excluded from the nucleus: an s state with \\(\\ell=0\\) or a d state with \\(\\ell=2\\)?",
      answer: "For the s state, the centrifugal contribution in equation [2] is zero. For the d state it is \\[\\frac{\\hbar^2\\ell(\\ell+1)}{2\\mu r^2}=\\frac{3\\hbar^2}{\\mu r^2},\\] which grows without bound as \\(r\\to0\\) and overwhelms the \\(-K/r\\) attraction. **Final result:** the d state is much more strongly suppressed near the nucleus; the s state has no centrifugal barrier and can penetrate to the origin.",
    },
  ]}
/>
`;
