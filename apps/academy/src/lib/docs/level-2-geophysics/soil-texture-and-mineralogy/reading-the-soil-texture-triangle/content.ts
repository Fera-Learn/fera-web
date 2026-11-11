export const content = String.raw`## The Field Problem

A texture analysis returns three percentages, but the environmental interpretation needs one consistent class name. A soil texture triangle turns the sand–silt–clay mixture into that classification.

## What Changes Underground

Every point in the triangle represents one mixture whose sand, silt, and clay percentages sum to 100 percent. Each corner is dominated by one fraction; moving away from that corner reduces its percentage. The labelled regions represent classes such as loam, sandy loam, silt loam, clay loam, sandy clay, silty clay, and clay.

Because only two percentages are independent, the third is fixed by the sum-to-100 condition.

## How We Detect It

First check the total. Locate one percentage on its axis and follow the guide line parallel to the opposite side. Repeat for a second fraction. Their intersection fixes the third percentage and the containing textural region.

Plot the measured values, not a field impression, when the classification controls calculations or comparisons.

## What the Evidence Means

A point near a class boundary may change name after small analytical or rounding differences. Report the measured fractions with the class, especially when two samples plot close to a boundary.

The triangle classifies texture only. It does not show aggregate form, pore connectivity, mineral identity, or current moisture.

<PhysicsExamples collapsible
  items={[
    {
      title: "Complete the three-part mixture",
      question: "A horizon contains 20 percent sand and 30 percent clay. What silt percentage must be used on the texture triangle?",
      answer: "**Strategy:** use the required total before plotting. Silt is 100 percent minus 20 percent minus 30 percent, giving 50 percent. Plot the 20 percent sand and 30 percent clay guide lines; their intersection must also lie on the 50 percent silt line. **Interpretation:** the three values define one valid point, whose region supplies the textural name.",
    },
    {
      title: "Handle a boundary classification",
      question: "Replicate analyses plot on opposite sides of the line between two textural classes. How should the soil be reported?",
      answer: "**Strategy:** retain the measured percentages and examine analytical spread rather than selecting the preferred name. Report that the sample lies near the named class boundary and state the replicate values. **Interpretation:** its functional behaviour should be tested directly because the categorical label is less certain than the continuous particle-size data.",
    },
  ]}
/>
`;
