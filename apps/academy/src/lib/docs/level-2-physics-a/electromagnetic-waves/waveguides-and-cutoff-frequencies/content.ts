export const content = String.raw`## Principle

Metal walls can steer microwaves around bends, but only field patterns above a threshold frequency can travel through the guide.

A hollow conducting waveguide confines electromagnetic fields with conducting-wall boundary conditions. Those boundaries quantise the transverse field pattern and create a cutoff: above cutoff a mode propagates, while below cutoff it decays along the guide.

## Notation

<Notation
  items={[
    { symbol: "a,b", meaning: "internal waveguide dimensions along x and y", unit: "m, m" },
    { symbol: "x,y,z,t", meaning: "coordinates, with z along the guide, and time", unit: "m, m, m, s" },
    { symbol: "\\widetilde{\\vec E},\\widetilde{\\vec B}", meaning: "complex electric and magnetic fields whose real parts are physical", unit: "V m^{-1}, T" },
    { symbol: "E_0", meaning: "electric-field amplitude", unit: "V m^{-1}" },
    { symbol: "\\widetilde B_x,\\widetilde B_z", meaning: "complex transverse and longitudinal magnetic-field components", unit: "T, T" },
    { symbol: "m,n", meaning: "nonnegative integer transverse mode indices", unit: "1" },
    { symbol: "k_x,k_y,k_z", meaning: "wave-number components", unit: "m^{-1}, m^{-1}, m^{-1}" },
    { symbol: "\\omega,\\omega_{\\mathrm c}", meaning: "angular frequency and cutoff angular frequency", unit: "rad s^{-1}, rad s^{-1}" },
    { symbol: "f,f_{\\mathrm c}", meaning: "frequency and cutoff frequency", unit: "Hz, Hz" },
    { symbol: "v_{\\mathrm p},v_{\\mathrm g}", meaning: "axial phase and group velocities", unit: "m s^{-1}, m s^{-1}" },
    { symbol: "\\kappa", meaning: "positive axial attenuation constant below cutoff", unit: "m^{-1}" },
    { symbol: "c", meaning: "vacuum speed of light", unit: "m s^{-1}" },
    { symbol: "\\hat x,\\hat y,\\hat z", meaning: "right-handed Cartesian unit vectors", unit: "1" },
    { symbol: "i", meaning: "imaginary unit; its square is minus one" },
  ]}
/>

## The Core Method

Assume a straight, uniform, vacuum-filled rectangular guide with source-free interior and perfectly conducting walls. Wall resistance and dielectric loss are neglected. The tangential electric field must therefore vanish at each wall, and fields in the vacuum interior obey the vacuum wave equation with speed \\(c\\).

For a representative mode with no \\(y\\)-variation, use the harmonic convention \\(e^{i(k_zz-\omega t)}\\) and write the complex electric field as

\\[
\widetilde{\vec E}(x,z,t)=\hat y E_0\sin(k_xx)e^{i(k_zz-\omega t)}.
\tag*{[1]}
\\]

<PhysicsDiagram slug="rectangular-waveguide-te-mode" />

The front opening fixes the transverse dimensions \\(a\\) and \\(b\\), while the guide extends along \\(z\\). The horizontal \\(E_y\\) arrows are transverse to that axis and reverse after an axial distance \\(\lambda_z/2\\), representing the changing phase of the TE mode.

The physical field is the real part. This representative field is a \\(\mathrm{TE}_{m0}\\) mode, so \\(n=0\\) and \\(m\ge1\\); \\(m=0\\) would make [1] identically zero. The wall at \\(x=0\\) is already a node, while the wall at \\(x=a\\) requires \\(\sin(k_xa)=0\\). Therefore

\\[
k_xa=m\pi
\quad\Longrightarrow\quad
k_x=\frac{m\pi}{a},
\qquad m=1,2,3,\ldots
\tag*{[2]}
\\]

Apply the vacuum wave equation to [1]. The second derivatives with respect to \\(x\\), \\(z\\), and \\(t\\) contribute \\(-k_x^2\\), \\(-k_z^2\\), and \\(-\omega^2\\), respectively.

\\[
-k_x^2\widetilde{\vec E}-k_z^2\widetilde{\vec E}
=-\frac{\omega^2}{c^2}\widetilde{\vec E}
\quad\Longrightarrow\quad
k_z^2=\frac{\omega^2}{c^2}-\frac{m^2\pi^2}{a^2}.
\tag*{[3]}
\\]

For a general rectangular mode, the same conducting-wall argument in the \\(y\\)-direction gives \\(k_y=n\pi/b\\). Including both transverse wave numbers in the vacuum wave equation gives

\\[
k_y=\frac{n\pi}{b},
\qquad
k_z^2=\frac{\omega^2}{c^2}-k_x^2-k_y^2
=\frac{\omega^2}{c^2}-\frac{m^2\pi^2}{a^2}-\frac{n^2\pi^2}{b^2}.
\tag*{[4]}
\\]

At cutoff, \\(k_z=0\\). Solving [4] for the corresponding frequency gives

\\[
\omega_{\mathrm c,mn}=\pi c\sqrt{\frac{m^2}{a^2}+\frac{n^2}{b^2}},
\qquad
f_{\mathrm c,mn}=\frac{\omega_{\mathrm c,mn}}{2\pi}.
\tag*{[5]}
\\]

A TE mode has electric field entirely transverse to the guide axis but may have longitudinal magnetic field. In the general TE family, either index may be zero, but \\(m\\) and \\(n\\) cannot both be zero. A TM mode has magnetic field entirely transverse but may have longitudinal electric field, and its boundary conditions require \\(m\ge1\\) and \\(n\ge1\\). A TEM mode would have both fields entirely transverse, but a hollow single-conductor guide cannot support one. When \\(a\gt b\\), the lowest rectangular-guide cutoff is \\(\mathrm{TE}_{10}\\), for which \\(f_{\mathrm c}=c/(2a)\\).

The representative field [1] also shows why TE does not mean that the magnetic field is transverse. Faraday's law with the chosen harmonic convention gives

\\[
\widetilde{\vec B}=\frac{1}{i\omega}\nabla\times\widetilde{\vec E}.
\tag*{[6]}
\\]

Taking the curl of [1] component by component gives

\\[
\nabla\times\widetilde{\vec E}
=-i k_z\hat x E_0\sin(k_xx)e^{i(k_zz-\omega t)}
+k_x\hat z E_0\cos(k_xx)e^{i(k_zz-\omega t)}.
\tag*{[7]}
\\]

Substitute [7] into [6] and use \\(1/i=-i\\).

\\[
\widetilde B_x=-\frac{k_z}{\omega}E_0\sin(k_xx)e^{i(k_zz-\omega t)},
\qquad
\widetilde B_z=-i\frac{k_x}{\omega}E_0\cos(k_xx)e^{i(k_zz-\omega t)}.
\tag*{[8]}
\\]

The electric field in [1] has no longitudinal component, while [8] has a generally nonzero longitudinal magnetic component \\(\widetilde B_z\\). This is the defining vector structure of the representative TE mode.

For any chosen mode above cutoff, \\(\omega\gt\omega_{\mathrm c}\\), the axial wave number is real.

\\[
k_z=\frac{1}{c}\sqrt{\omega^2-\omega_{\mathrm c}^2}.
\tag*{[9]}
\\]

The axial phase velocity follows from \\(v_{\mathrm p}=\omega/k_z\\).

\\[
v_{\mathrm p}=\frac{c}{\sqrt{1-(\omega_{\mathrm c}/\omega)^2}}\gt c.
\tag*{[10]}
\\]

Rewrite [9] as \\(\omega^2=\omega_{\mathrm c}^2+c^2k_z^2\\) and differentiate with respect to \\(k_z\\).

\\[
2\omega\frac{d\omega}{dk_z}=2c^2k_z
\quad\Longrightarrow\quad
v_{\mathrm g}=\frac{d\omega}{dk_z}
=c\sqrt{1-(\omega_{\mathrm c}/\omega)^2}\lt c.
\tag*{[11]}
\\]

The normalized curves show how both velocities change as a mode moves away from cutoff.

<CartesianGrid
  className="mx-auto max-w-xl"
  height={350}
  width={560}
  title="Waveguide phase and group velocities above cutoff"
  caption="At cutoff the group velocity starts from zero while the phase velocity diverges; far above cutoff both approach c from opposite sides."
  xRange={{ min: 0, max: 3, step: 0.5, label: "angular frequency ω/ω_c" }}
  yRange={{ min: 0, max: 3, step: 0.5, label: "velocity/c" }}
>
  <DashedLine x={1} />
  <DashedLine y={1} />
  <Curve
    color="var(--foreground)"
    points={Array.from({ length: 200 }, (_, index) => {
      const x = 1.061 + (1.939 * index) / 199;
      const y = 1 / Math.sqrt(1 - 1 / x ** 2);
      return { x, y };
    })}
    smooth
  />
  <Curve
    color="var(--destructive)"
    points={Array.from({ length: 201 }, (_, index) => {
      const x = 1 + (2 * index) / 200;
      const y = index === 0 ? 0 : Math.sqrt(1 - 1 / x ** 2);
      return { x, y };
    })}
    smooth
  />
  <Annotation point={{ x: 1.3, y: 1.56 }} label="Phase velocity" offset={{ x: 18, y: -20 }} />
  <Annotation point={{ x: 1.55, y: 0.76 }} label="Group velocity" offset={{ x: 18, y: 24 }} />
  <Annotation point={{ x: 0.45, y: 1 }} label="Speed of light in vacuum" offset={{ x: -12, y: -12 }} />
  <Annotation point={{ x: 1, y: 0.25 }} label="Cutoff angular frequency ω_c" offset={{ x: -78, y: 0 }} />
</CartesianGrid>

Near cutoff, phase fronts advance rapidly but the packet and energy move slowly. Increasing \\(\omega/\omega_{\mathrm c}\\) lowers \\(v_{\mathrm p}\\) towards \\(c\\) and raises \\(v_{\mathrm g}\\) towards \\(c\\).

Consequently \\(v_{\mathrm p}v_{\mathrm g}=c^2\\). The phase velocity above \\(c\\) does not carry a signal faster than light; the packet envelope and energy propagate at the group velocity.

Below cutoff, \\(\omega\lt\omega_{\mathrm c}\\), define a positive attenuation constant and choose the decaying solution.

\\[
k_z=i\kappa,
\qquad
\kappa=\frac{1}{c}\sqrt{\omega_{\mathrm c}^2-\omega^2},
\qquad
e^{i(k_zz-\omega t)}=e^{-\kappa z}e^{-i\omega t}.
\tag*{[12]}
\\]

The below-cutoff field is evanescent rather than a freely propagating mode. Choosing \\(k_z=-i\kappa\\) for a guide extending toward positive \\(z\\) would produce unphysical exponential growth instead of attenuation.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "TE10 cutoff and velocities",
      question: "A vacuum-filled rectangular waveguide has broad dimension \\(a=2.00\\,\\mathrm{cm}\\). For its \\(\\mathrm{TE}_{10}\\) mode, find the cutoff frequency and the phase and group velocities at \\(f=10.0\\,\\mathrm{GHz}\\).",
      answer: "Convert the broad dimension first: \\(a=2.00\\times10^{-2}\\,\\mathrm m\\). For \\(\\mathrm{TE}_{10}\\), equation [5] gives \\[f_{\\mathrm c}=\\frac{c}{2a}=\\frac{3.00\\times10^8\\,\\mathrm{m\\,s^{-1}}}{2(2.00\\times10^{-2}\\,\\mathrm m)}=7.50\\times10^9\\,\\mathrm{Hz}.\\] Because \\(f\\gt f_{\\mathrm c}\\), the mode propagates. Ratios of angular frequencies equal ratios of ordinary frequencies, so \\[\\sqrt{1-\\left(\\frac{\\omega_{\\mathrm c}}{\\omega}\\right)^2}=\\sqrt{1-\\left(\\frac{7.50}{10.0}\\right)^2}=0.6614.\\] Equations [10] and [11] then give \\[v_{\\mathrm p}=\\frac{3.00\\times10^8}{0.6614}=4.54\\times10^8\\,\\mathrm{m\\,s^{-1}},\\qquad v_{\\mathrm g}=(3.00\\times10^8)(0.6614)=1.98\\times10^8\\,\\mathrm{m\\,s^{-1}}.\\] **Final result:** \\(f_{\\mathrm c}=7.50\\,\\mathrm{GHz}\\), \\(v_{\\mathrm p}=4.54\\times10^8\\,\\mathrm{m\\,s^{-1}}\\), and \\(v_{\\mathrm g}=1.98\\times10^8\\,\\mathrm{m\\,s^{-1}}\\). Their product is \\(c^2\\), which checks the arithmetic.",
    },
    {
      title: "Interpreting a below-cutoff signal",
      question: "A source drives one waveguide mode at a frequency below that mode's cutoff. Does the absence of a real axial wave number mean the field is identically zero inside the guide?",
      answer: "No. Equation [12] makes the axial wave number imaginary and gives a field proportional to \\(e^{-\\kappa z}\\). The source can establish an oscillating evanescent field near the entrance, but its amplitude falls exponentially with distance and it does not become the freely propagating mode described by equations [9]-[11]. **Final result:** below cutoff means attenuation rather than an identically zero field. The decaying sign must be selected for a guide extending away from the source.",
    },
  ]}
/>
`;
