export const content = String.raw`## Principle

Light polarised perpendicular to the plane of incidence reflects differently from light polarised within that plane.

In the fixed-axis convention used here, **normal polarisation** means that the electric field is normal to the plane of incidence, not normal to the interface; this is s polarisation. Signed electric-field amplitudes use one fixed positive axis normal to the incidence plane, and each \\(\vec H\\) direction is chosen so that \\(\vec E\times\vec H\\) points along propagation.

## Notation

<Notation
  items={[
    { symbol: "E_{0i},E_{0r},E_{0t}", meaning: "signed incident, reflected, and transmitted electric-field amplitudes", unit: "V m^{-1}" },
    { symbol: "H_{0i},H_{0r},H_{0t}", meaning: "incident, reflected, and transmitted auxiliary-field amplitudes", unit: "A m^{-1}" },
    { symbol: "\\theta_i,\\theta_t", meaning: "incidence and transmission angles measured from the interface normal", unit: "rad" },
    { symbol: "Z_i,Z_t", meaning: "wave impedances of the incident and transmitted media", unit: "\\Omega" },
    { symbol: "\\epsilon_i,\\epsilon_t", meaning: "permittivities of the incident and transmitted media", unit: "F m^{-1}" },
    { symbol: "\\mu_i,\\mu_t", meaning: "permeabilities of the incident and transmitted media", unit: "H m^{-1}" },
    { symbol: "n_i,n_t", meaning: "refractive indices of the incident and transmitted media" },
    { symbol: "r_{\\perp},t_{\\perp}", meaning: "normal-to-plane, or s-polarised, electric-field amplitude coefficients" },
    { symbol: "\\vec k,\\omega,\\vec B", meaning: "wave vector, angular frequency, and magnetic flux density", unit: "m^{-1}, rad s^{-1}, T" },
  ]}
/>

## The Core Method

For a lossless insulating medium, Maxwell's equations give the plane-wave relations

\\[
\vec k\times\vec E=\omega\vec B,
\qquad
\vec B=\mu\vec H,
\qquad
Z=\frac{|E|}{|H|}=\sqrt{\frac{\mu}{\epsilon}}.
\tag*{[1]}
\\]

<PhysicsDiagram slug="normal-polarisation-interface" />

The source labels this normal-to-plane electric-field convention with \\(S\\). Each blue dot represents an electric-field amplitude along the same positive axis out of the incidence plane, so the three signed amplitudes can be compared directly at the interface.

For normal-to-plane polarisation, the entire electric field lies tangent to the interface. Continuity of tangential \\(\vec E\\) therefore gives

\\[
E_{0i}+E_{0r}=E_{0t}.
\tag*{[2]}
\\]

The magnetic field lies in the plane of incidence. The right-hand rule in [1], together with the fixed electric-field axis, makes the reflected magnetic contribution oppose the incident contribution. Projecting \\(\vec H\\) onto the interface and using equal incidence and reflection angles gives

\\[
\left(\frac{E_{0i}}{Z_i}-\frac{E_{0r}}{Z_i}\right)
\cos\theta_i
=\frac{E_{0t}}{Z_t}\cos\theta_t.
\tag*{[3]}
\\]

Multiply [3] by \\(Z_i\\):

\\[
(E_{0i}-E_{0r})\cos\theta_i
=\frac{Z_i}{Z_t}E_{0t}\cos\theta_t.
\tag*{[4]}
\\]

Define the amplitude coefficients and divide [2] and [4] by \\(E_{0i}\\):

\\[
r_{\perp}=\frac{E_{0r}}{E_{0i}},
\qquad
t_{\perp}=\frac{E_{0t}}{E_{0i}},
\qquad
1+r_{\perp}=t_{\perp},
\qquad
(1-r_{\perp})\cos\theta_i
=\frac{Z_i}{Z_t}t_{\perp}\cos\theta_t.
\tag*{[5]}
\\]

Substitute \\(t_{\perp}=1+r_{\perp}\\) into the final relation in [5]:

\\[
(1-r_{\perp})\cos\theta_i
=\frac{Z_i}{Z_t}(1+r_{\perp})\cos\theta_t.
\tag*{[6]}
\\]

Expand [6] and collect reflection terms:

\\[
\cos\theta_i-\frac{Z_i}{Z_t}\cos\theta_t
=r_{\perp}\left(
\cos\theta_i+\frac{Z_i}{Z_t}\cos\theta_t
\right).
\tag*{[7]}
\\]

Equation [7] gives the reflection amplitude. Since [5] also gives \\(t_{\perp}=1+r_{\perp}\\), the intermediate sum produces the transmission amplitude:

\\[
\boxed{
r_{\perp}
=\frac{\cos\theta_i-(Z_i/Z_t)\cos\theta_t}
{\cos\theta_i+(Z_i/Z_t)\cos\theta_t}
},
\\
1+r_{\perp}
=\frac{2\cos\theta_i}
{\cos\theta_i+(Z_i/Z_t)\cos\theta_t},
\\
\boxed{
t_{\perp}
=1+r_{\perp}
=\frac{2\cos\theta_i}
{\cos\theta_i+(Z_i/Z_t)\cos\theta_t}
}.
\tag*{[8]}
\\]

For the source's nonmagnetic air-to-water example, \\(n_t/n_i=4/3\\). The normal-polarised reflected amplitude has no Brewster zero.

<CartesianGrid
  className="mx-auto max-w-xl"
  height={350}
  width={560}
  title="Normal-polarised Fresnel amplitudes for air to water"
  caption="The transmitted s amplitude falls to zero at grazing incidence, while the reflected amplitude stays negative and tends to minus one."
  xRange={{ min: 0, max: 90, step: 10, label: "angle of incidence (degrees)" }}
  yRange={{ min: -1, max: 1, step: 0.25, label: "Fresnel coefficient" }}
>
  <Curve
    color="var(--foreground)"
    points={Array.from({ length: 181 }, (_, index) => {
      const angleDegrees = index / 2;
      const thetaI = (angleDegrees * Math.PI) / 180;
      const indexRatio = 4 / 3;
      const thetaT = Math.asin(Math.sin(thetaI) / indexRatio);
      const denominator = Math.cos(thetaI) + indexRatio * Math.cos(thetaT);
      const y = (2 * Math.cos(thetaI)) / denominator;
      return { x: angleDegrees, y };
    })}
    smooth
  />
  <Curve
    color="var(--destructive)"
    points={Array.from({ length: 181 }, (_, index) => {
      const angleDegrees = index / 2;
      const thetaI = (angleDegrees * Math.PI) / 180;
      const indexRatio = 4 / 3;
      const thetaT = Math.asin(Math.sin(thetaI) / indexRatio);
      const denominator = Math.cos(thetaI) + indexRatio * Math.cos(thetaT);
      const y = (Math.cos(thetaI) - indexRatio * Math.cos(thetaT)) / denominator;
      return { x: angleDegrees, y };
    })}
    smooth
  />
  <Annotation point={{ x: 28, y: 0.84 }} label="Transmission E-normal" offset={{ x: 18, y: -20 }} />
  <Annotation point={{ x: 28, y: -0.18 }} label="Reflection E-normal" offset={{ x: 18, y: 24 }} />
</CartesianGrid>

Both normal-polarised coefficients begin at the same normal-incidence values as their parallel-polarised counterparts. As the incidence angle grows, \\(r_{\perp}\\) becomes increasingly negative rather than crossing zero.

For nonmagnetic media, \\(Z_i/Z_t=n_t/n_i\\). At normal incidence, \\(\theta_i=\theta_t=0\\), so

\\[
r_{\perp}=\frac{Z_t-Z_i}{Z_t+Z_i}
=\frac{n_i-n_t}{n_i+n_t},
\qquad
t_{\perp}=\frac{2Z_t}{Z_t+Z_i}
=\frac{2n_i}{n_i+n_t}.
\tag*{[9]}
\\]

Both linear polarisations must have the same normal-incidence limit because the plane of incidence is then arbitrary. A negative \\(r_{\perp}\\) means a \\(180^\circ\\) phase reversal in this fixed-axis convention. These are field amplitudes, not power fractions.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Normal-polarised air-to-glass amplitude",
      question: "Normal-to-plane polarised light travels from air \\((n_i=1.00)\\) into nonmagnetic glass \\((n_t=1.50)\\) at \\(\\theta_i=45.0^\\circ\\). Find \\(\\theta_t\\), \\(r_{\\perp}\\), and \\(t_{\\perp}\\).",
      answer: "Snell's law gives \\[\\sin\\theta_t=\\frac{1.00}{1.50}\\sin45.0^\\circ=0.4714,\\] so \\(\\theta_t=28.1^\\circ\\), \\(\\cos\\theta_i=0.7071\\), and \\(\\cos\\theta_t=0.8819\\). For nonmagnetic media, \\(Z_i/Z_t=n_t/n_i=1.50\\). Equation [8] gives \\[r_{\\perp}=\\frac{0.7071-1.50(0.8819)}{0.7071+1.50(0.8819)}=-0.303,\\] and \\[t_{\\perp}=\\frac{2(0.7071)}{0.7071+1.50(0.8819)}=0.697.\\] The boundary check is \\(1+r_{\\perp}=0.697=t_{\\perp}\\). **Final result:** \\(\\theta_t=28.1^\\circ\\), \\(r_{\\perp}=-0.303\\), and \\(t_{\\perp}=0.697\\).",
    },
    {
      title: "Normal-incidence phase reversal",
      question: "A normally incident normal-to-plane wave goes from air \\((n_i=1.00)\\) into nonmagnetic glass \\((n_t=1.50)\\). Calculate the field amplitudes and interpret the reflected sign.",
      answer: "Use the normal-incidence limit [9]: \\[r_{\\perp}=\\frac{1.00-1.50}{1.00+1.50}=-0.200,\\qquad t_{\\perp}=\\frac{2(1.00)}{1.00+1.50}=0.800.\\] Equation [2] checks the result because \\(1+r_{\\perp}=0.800=t_{\\perp}\\). **Final result:** the reflected field amplitude is \\(-0.200\\) times the incident amplitude and the transmitted amplitude is \\(0.800\\) times it. The minus sign means the reflected electric field points opposite to the chosen positive axis at a fixed phase, a \\(180^\\circ\\) phase reversal.",
    },
  ]}
/>
`;
