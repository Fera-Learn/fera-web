export const content = String.raw`## Principle

Adiabatic demagnetization converts magnetic disorder into cooling. A paramagnetic refrigerant is first magnetized while it can reject heat, then thermally isolated and demagnetized so that increasing spin disorder is balanced by decreasing thermal entropy.

## Notation

<Notation
  items={[
    { symbol: "U,S,T", meaning: "internal energy, total entropy, and absolute temperature of the refrigerant", unit: "J, J K^{-1}, K" },
    { symbol: "B,B_i,B_f", meaning: "applied magnetic field and its initial and final values", unit: "T, T, T" },
    { symbol: "m", meaning: "total magnetic moment component parallel to the field", unit: "J T^{-1}" },
    { symbol: "C_{B,\\mathrm{tot}}", meaning: "total heat capacity at constant applied field", unit: "J K^{-1}" },
    { symbol: "\\delta Q,\\delta Q_{\\mathrm{rev}}", meaning: "inexact heat and inexact reversible heat transferred into the refrigerant", unit: "J, J" },
    { symbol: "T_i,T_f", meaning: "temperatures before and after ideal adiabatic demagnetization", unit: "K, K" },
    { symbol: "x", meaning: "field-to-temperature ratio B/T", unit: "T K^{-1}" },
  ]}
/>

## The Core Method

Cooling occurs in two controlled stages: magnetise while thermal contact removes heat, then isolate the sample and reduce the field so spin disorder grows at the expense of thermal energy.

<PhysicsDiagram slug="adiabatic-demagnetisation-path" />

With the chosen magnetic convention \\(dU=T\,dS-m\,dB\\), the magnetic Maxwell relation gives the entropy differential

\\[
dS=\frac{C_{B,\mathrm{tot}}}{T}\,dT
+\left(\frac{\partial m}{\partial T}\right)_B dB.
\tag*{[1]}
\\]

During reversible adiabatic demagnetization, thermal isolation gives \\(\delta Q=0\\) and reversibility gives \\(dS=0\\). Therefore

\\[
\left(\frac{\partial T}{\partial B}\right)_S
=-\frac{T}{C_{B,\mathrm{tot}}}
\left(\frac{\partial m}{\partial T}\right)_B.
\tag*{[2]}
\\]

For a paramagnet, \\((\partial m/\partial T)_B<0\\) in the useful regime, so equation [2] is positive. A negative \\(dB\\) consequently produces a negative \\(dT\\).

The cooling cycle has two essential stages. First, increase the field isothermally while the refrigerant touches a cold reservoir. Its magnetic entropy decreases and the released heat is

\\[
\delta Q_{\mathrm{rev}}
=T\left(\frac{\partial m}{\partial T}\right)_B dB<0
\qquad(dB>0).
\tag*{[3]}
\\]

Second, thermally isolate the refrigerant and lower the field quasistatically. Spin entropy increases while total entropy remains constant, so the thermal contribution decreases and the sample cools.

For an ideal noninteracting paramagnet, magnetic entropy depends only on the ratio

\\[
x=\frac{B}{T}.
\tag*{[4]}
\\]

An isentrope has constant \\(x\\). Equating its initial and final values gives

\\[
\frac{B_i}{T_i}=\frac{B_f}{T_f}.
\tag*{[5]}
\\]

Solving equation [5] yields the ideal demagnetization estimate

\\[
T_f=T_i\frac{B_f}{B_i}.
\tag*{[6]}
\\]

Equation [6] is not valid all the way to zero field: spin-spin interactions, internal fields, lattice heat capacity, imperfect isolation, and irreversible field changes limit real cooling. In particular, the ideal relation must not be used to claim that a finite operation reaches absolute zero.

<PhysicsExamples collapsible
  items={[
    {
      title: "Ideal adiabatic demagnetization",
      question: "A paramagnetic salt begins the isolated stage at \\(T_i=1.20\\,\\mathrm K\\) and \\(B_i=3.0\\,\\mathrm T\\). Estimate its final temperature at \\(B_f=0.20\\,\\mathrm T\\) using the ideal noninteracting model.",
      answer: "The isolated quasistatic stage is modeled as isentropic, so equation \\([6]\\) gives \\[T_f=T_i\\frac{B_f}{B_i}=(1.20\\,\\mathrm K)\\frac{0.20\\,\\mathrm T}{3.0\\,\\mathrm T}=0.080\\,\\mathrm K.\\] The ratio \\(B_f/B_i\\) is dimensionless, and the positive final field leaves a positive final temperature. **Final result:** the ideal estimate is \\(T_f=0.080\\,\\mathrm K\\), or \\(80\\,\\mathrm{mK}\\).",
    },
    {
      title: "Why thermal contact changes between stages",
      question: "Why must the refrigerant contact a reservoir during magnetization but be thermally isolated during demagnetization?",
      answer: "During isothermal magnetization, equation \\([3]\\) gives negative heat into the refrigerant, so contact is needed to carry released heat to the reservoir and hold \\(T\\) fixed. During demagnetization, isolation enforces \\(\\delta Q=0\\); a quasistatic reversible change then has \\(dS=0\\), allowing equation \\([2]\\) to convert the field decrease into cooling. **Final result:** thermal contact removes magnetization heat, whereas isolation makes demagnetization approximately isentropic and therefore cooling-producing.",
    },
  ]}
/>
`;
