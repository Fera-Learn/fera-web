export const content = String.raw`## Principle

The electromagnetic wave equation is linear. Consequently, adding any solutions produces another solution, with amplitudes adding before measurable intensities are formed.

## Notation

<Notation
  items={[
    { symbol: "E,E_1,E_2", meaning: "scalar field and two scalar wave solutions", unit: "V m^{-1}" },
    { symbol: "a,b", meaning: "constant dimensionless weighting coefficients" },
    { symbol: "\\mathcal L", meaning: "linear vacuum wave operator" },
    { symbol: "\\nabla^2", meaning: "spatial Laplacian", unit: "m^{-2}" },
    { symbol: "c,t", meaning: "wave speed and time", unit: "m s^{-1}, s" },
    { symbol: "E_0,\\phi,\\omega", meaning: "common peak amplitude, relative phase, and angular frequency", unit: "V m^{-1}, rad, rad s^{-1}" },
    { symbol: "\\vec k,\\vec r", meaning: "common wavevector and position", unit: "m^{-1}, m" },
    { symbol: "E_{\\mathrm{tot}},E_{\\mathrm{pk}}", meaning: "total instantaneous field and its peak amplitude", unit: "V m^{-1}, V m^{-1}" },
  ]}
/>

## The Core Method

For one Cartesian field component in vacuum, define the wave operator

\\[
\mathcal L[E]=\nabla^2E-\frac{1}{c^2}\frac{\partial^2E}{\partial t^2}.
\tag*{[1]}
\\]

Suppose \\(E_1\\) and \\(E_2\\) each solve the homogeneous wave equation, so \\(\mathcal L[E_1]=0\\) and \\(\mathcal L[E_2]=0\\). Applying [1] to a weighted sum and distributing both derivatives gives

\\[
\begin{aligned}
\mathcal L[aE_1+bE_2]
&=\nabla^2(aE_1+bE_2)-\frac{1}{c^2}\frac{\partial^2(aE_1+bE_2)}{\partial t^2}\\
&=a\left(\nabla^2E_1-\frac{1}{c^2}\frac{\partial^2E_1}{\partial t^2}\right)
+b\left(\nabla^2E_2-\frac{1}{c^2}\frac{\partial^2E_2}{\partial t^2}\right)\\
&=a\mathcal L[E_1]+b\mathcal L[E_2]=0.
\end{aligned}
\tag*{[2]}
\\]

Therefore the field superposition is

\\[
E_{\mathrm{tot}}=aE_1+bE_2.
\tag*{[3]}
\\]

For two equal-frequency, co-propagating waves, let \\(E_1=E_0\cos(\vec k\cdot\vec r-\omega t)\\) and \\(E_2=E_0\cos(\vec k\cdot\vec r-\omega t+\phi)\\). The angle-sum identity yields

\\[
\begin{aligned}
E_{\mathrm{tot}}
&=E_0\cos(\vec k\cdot\vec r-\omega t)
+E_0\cos(\vec k\cdot\vec r-\omega t+\phi)\\
&=2E_0\cos\left(\frac{\phi}{2}\right)
\cos\left(\vec k\cdot\vec r-\omega t+\frac{\phi}{2}\right).
\end{aligned}
\tag*{[4]}
\\]

Thus the resultant peak amplitude is

\\[
E_{\mathrm{pk}}=2E_0\left|\cos\left(\frac{\phi}{2}\right)\right|.
\tag*{[5]}
\\]

Superposition applies to fields, including their signs and phases. Intensities generally cannot be added when coherent fields overlap because intensity is quadratic in the total field.

<PhysicsExamples collapsible
  items={[
    {
      title: "Adding two phase-shifted waves",
      question: "Two coherent fields at a point each have peak amplitude \\(3.0\\,\\mathrm{V\\,m^{-1}}\\) and relative phase \\(\\phi=2\\pi/3\\). Find the resultant peak amplitude.",
      answer: "Use equation \\([5]\\). Half the phase difference is \\(\\phi/2=\\pi/3\\), so \\[E_{\\mathrm{pk}}=2(3.0)\\left|\\cos(\\pi/3)\\right|=6.0(0.5)=3.0\\,\\mathrm{V\\,m^{-1}}.\\] The answer lies between the complete-cancellation limit of zero and the in-phase limit of \\(6.0\\,\\mathrm{V\\,m^{-1}}\\). **Final result:** \\(E_{\\mathrm{pk}}=3.0\\,\\mathrm{V\\,m^{-1}}\\).",
    },
    {
      title: "Destructive superposition without destruction of energy",
      question: "At one location, two equal waves have relative phase \\(\\pi\\). What field does a detector sample there, and does either wave cease to exist?",
      answer: "Equation \\([5]\\) gives \\(E_{\\mathrm{pk}}=2E_0|\\cos(\\pi/2)|=0\\), so the fields cancel at that location. The individual solutions remain present and continue to propagate; changing position or phase can remove the cancellation. Energy is redistributed through the full wave pattern rather than destroying either solution. **Final result:** the sampled total field is zero at that point, while both component waves still exist.",
    },
  ]}
/>
`;
