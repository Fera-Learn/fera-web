export const content = String.raw`## Principle

The Clausius and Kelvin-Planck statements prohibit different-looking devices, but they express the same second-law restriction. Equivalence is proved by contradiction: a violation of either statement can be coupled to an ordinary cyclic device to produce a violation of the other.

## Notation

<Notation
  items={[
    { symbol: "T_H,T_C", meaning: "hot- and cold-reservoir temperatures, with T_H\\gt T_C", unit: "K, K" },
    { symbol: "Q_H,Q_C", meaning: "positive heat magnitudes delivered to the hot reservoir and removed from the cold reservoir by a refrigerator", unit: "J, J" },
    { symbol: "Q_K", meaning: "heat magnitude absorbed by a hypothetical Kelvin-Planck violator", unit: "J" },
    { symbol: "Q_E,Q'_C", meaning: "heat magnitudes absorbed and rejected by an ordinary engine", unit: "J, J" },
    { symbol: "W", meaning: "positive work magnitude exchanged by the coupled devices", unit: "J" },
    { symbol: "\\Delta U", meaning: "change in internal energy over one device cycle", unit: "J" },
  ]}
/>

## The Core Method

First suppose a Kelvin-Planck violator exists. In one cycle it absorbs \\(Q_K\\) from one hot reservoir and converts all of it into work. Since \\(\Delta U=0\\),

\\[
W=Q_K.
\tag*{[1]}
\\]

Use that work to drive an ordinary refrigerator. Its cyclic balance is

\\[
Q_H=Q_C+W.
\tag*{[2]}
\\]

The hot reservoir loses \\(Q_K\\) to the violator and gains \\(Q_H\\) from the refrigerator. Substituting equation \\([1]\\) into equation \\([2]\\) gives

\\[
Q_H-Q_K=Q_C+W-Q_K=Q_C.
\tag*{[3]}
\\]

The work transfers cancel internally, so the sole external result is removal of \\(Q_C\\) from the cold reservoir and delivery of the same heat to the hot reservoir. That violates Clausius.

Conversely, suppose a Clausius violator transfers \\(Q'_C\\) from cold to hot with no work input. Couple it to an ordinary engine that absorbs \\(Q_E\\), rejects exactly \\(Q'_C\\), and produces work. The engine balance is

\\[
W=Q_E-Q'_C.
\tag*{[4]}
\\]

The engine adds \\(Q'_C\\) to the cold reservoir while the violator removes \\(Q'_C\\), so the cold-reservoir effects cancel. The hot reservoir loses \\(Q_E\\) to the engine and regains \\(Q'_C\\) from the violator; its net loss is

\\[
Q_E-Q'_C=W.
\tag*{[5]}
\\]

The coupled device's sole result is therefore conversion of heat \\(W\\) from one reservoir into work \\(W\\), violating Kelvin-Planck. Each violation implies the other, so the statements are equivalent.

<PhysicsExamples collapsible
  items={[
    {
      title: "Kelvin-Planck violator driving a refrigerator",
      question: "A hypothetical violator converts \\(400\\,\\mathrm{J}\\) from a hot reservoir entirely into work. That work drives a refrigerator which removes \\(250\\,\\mathrm{J}\\) from a cold reservoir. Find the refrigerator's hot-side transfer and the composite external effect.",
      answer: "Equation \\([1]\\) gives \\(W=400\\,\\mathrm{J}\\). Equation \\([2]\\) then gives \\[Q_H=Q_C+W=250\\,\\mathrm{J}+400\\,\\mathrm{J}=650\\,\\mathrm{J}.\\] The hot reservoir supplies \\(400\\,\\mathrm{J}\\) and receives \\(650\\,\\mathrm{J}\\), a net gain of \\(250\\,\\mathrm{J}\\), as equation \\([3]\\) predicts. Work is internal to the combination. **Final result:** the sole external effect is transfer of \\(250\\,\\mathrm{J}\\) from cold to hot, a Clausius violation.",
    },
    {
      title: "Clausius violator cancelling engine rejection",
      question: "An engine absorbs \\(900\\,\\mathrm{J}\\), rejects \\(300\\,\\mathrm{J}\\), and drives no other device. A hypothetical Clausius violator returns that \\(300\\,\\mathrm{J}\\) to the hot reservoir without work. Determine the composite result.",
      answer: "From equation \\([4]\\), the engine delivers \\[W=900\\,\\mathrm{J}-300\\,\\mathrm{J}=600\\,\\mathrm{J}.\\] The cold reservoir receives and then loses \\(300\\,\\mathrm{J}\\), so its net change is zero. Equation \\([5]\\) shows that the hot reservoir's net loss is \\(900\\,\\mathrm{J}-300\\,\\mathrm{J}=600\\,\\mathrm{J}\\), equal to the work output. **Final result:** the combination converts \\(600\\,\\mathrm{J}\\) from a single reservoir completely into work, a Kelvin-Planck violation.",
    },
  ]}
/>
`;
