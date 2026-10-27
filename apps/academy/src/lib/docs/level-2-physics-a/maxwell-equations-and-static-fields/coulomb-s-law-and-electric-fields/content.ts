export const content = String.raw`## Principle

Rub two insulating objects together and they may pull together or push apart across empty space.

Coulomb's law connects the force between point charges to their separation and signs. The electric field describes the same interaction at an observation point without depending on which test charge is later placed there.

## Notation

<Notation
  items={[
    { symbol: "q_s,q_t", meaning: "source charge and test charge", unit: "C" },
    { symbol: "\\vec r_s,\\vec r", meaning: "source position and observation position", unit: "m" },
    { symbol: "\\vec R,R", meaning: "source-to-observation displacement and its magnitude", unit: "m" },
    { symbol: "\\hat R", meaning: "unit vector from the source to the observation point", unit: "1" },
    { symbol: "\\epsilon_0", meaning: "permittivity of free space", unit: "C^{2} N^{-1} m^{-2}" },
    { symbol: "\\vec F", meaning: "electric force on the test charge", unit: "N" },
    { symbol: "\\vec E", meaning: "electric field", unit: "N C^{-1}" },
  ]}
/>

## The Core Method

Begin with the geometry. If the source is at \\(\vec r_s\\) and the observation point is at \\(\vec r\\), subtract source position from observation position; the resulting unit vector points from source to observation.

\\[
\vec R=\vec r-\vec r_s,\qquad R=|\vec R|,\qquad \hat R=\frac{\vec R}{R}\tag*{[1]}
\\]

Coulomb's law gives the signed force on a test charge placed at the observation point.

\\[
\vec F=\frac{1}{4\pi\epsilon_0}\frac{q_s q_t}{R^2}\hat R\tag*{[2]}
\\]

If \\(q_s q_t>0\\), the force follows \\(\hat R\\), so like charges repel; if \\(q_s q_t<0\\), the force points opposite to \\(\hat R\\), so unlike charges attract. The electric field is the force per positive test charge, so dividing equation [2] by \\(q_t\\) leaves a field determined only by the source and the observation point.

\\[
\vec E=\frac{\vec F}{q_t}=\frac{1}{4\pi\epsilon_0}\frac{q_s}{R^2}\hat R\tag*{[3]}
\\]

A positive source produces a field away from itself, while a negative source produces a field towards itself. A negative test charge feels a force opposite to \\(\vec E\\) because \\(\vec F=q_t\vec E\\). The field magnitude \\(E=|\vec E|\\) follows an inverse-square law, so doubling the source-to-observation distance reduces the magnitude to one quarter.

\\[
\frac{E(2R)}{E(R)}=\frac{R^2}{(2R)^2}=\frac{1}{4}\tag*{[4]}
\\]

For several point sources, let source \\(i\\) have charge \\(q_i\\) at position \\(\vec r_i\\). Find each source-to-observation vector before adding the individual fields as vectors.

\\[
\vec E(\vec r)=\sum_i\frac{1}{4\pi\epsilon_0}\frac{q_i}{|\vec r-\vec r_i|^2}\frac{\vec r-\vec r_i}{|\vec r-\vec r_i|}\tag*{[5]}
\\]

The signs set each contribution's direction, but cancellation or reinforcement depends on the vector geometry. Add components rather than adding field magnitudes unless every contribution lies along the same directed line.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Field and force near a point charge",
      question: "A source charge of \\(+2.0\\,\\mathrm{nC}\\) is \\(0.30\\,\\mathrm{m}\\) from an observation point. Find the electric field there, then find the force on a \\(-3.0\\,\\mathrm{nC}\\) test charge.",
      answer: "Use the source charge and separation in equation [3], with \\(1/(4\\pi\\epsilon_0)=8.99\\times10^9\\,\\mathrm{N\\,m^2\\,C^{-2}}\\). \\[E=\\frac{(8.99\\times10^9)(2.0\\times10^{-9})}{(0.30)^2}=2.0\\times10^2\\,\\mathrm{N\\,C^{-1}}.\\] The positive source makes this field point away from the source. Now multiply the field by the signed test charge. \\[\\vec F=q_t\\vec E=(-3.0\\times10^{-9})(2.0\\times10^2)\\hat R=-6.0\\times10^{-7}\\hat R\\,\\mathrm{N}.\\] The force has magnitude \\(6.0\\times10^{-7}\\,\\mathrm{N}\\) and points towards the source, opposite to the field; this agrees with attraction between opposite charges.",
    },
    {
      title: "Cancellation at a midpoint",
      question: "Two equal positive point charges are fixed on a line. What is the electric field at the midpoint between them?",
      answer: "The midpoint is the same distance from both sources, so the two field contributions have equal magnitudes. Each positive charge produces a field away from itself, making the contributions point in opposite directions; call them \\(\\vec E_1\\) and \\(\\vec E_2\\). \\[\\vec E_{\\mathrm{net}}=\\vec E_1+\\vec E_2=\\vec 0.\\] The net field is zero because the vectors cancel, not because either source produces no field there.",
    },
  ]}
/>
`;
