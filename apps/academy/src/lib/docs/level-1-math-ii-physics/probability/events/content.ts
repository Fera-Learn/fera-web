export const content = String.raw`## Principle

Events are subsets of a sample space. Set operations describe how events combine: not happening, one event or another happening, both happening, or one happening without the other.

## Notation

<Notation
  items={[
    { symbol: "S", meaning: "sample space: all outcomes" },
    { symbol: "A,B", meaning: "events, so A and B are subsets of S" },
    { symbol: "A^c", meaning: "complement: outcomes in S that are not in A" },
    { symbol: "A\\cup B", meaning: "union: outcomes in A or B or both" },
    { symbol: "A\\cap B", meaning: "intersection: outcomes in both A and B" },
    { symbol: "A\\setminus B", meaning: "difference: outcomes in A but not in B" },
    { symbol: "\\varnothing", meaning: "empty set: event with no outcomes" },
    { symbol: "A\\subseteq B", meaning: "subset: every outcome in A is also in B" },
  ]}
/>

## Method

### Step 1: Name the sample space

Write \(S\) before translating statements. The complement \(A^c\) always means complement inside this chosen \(S\).

### Step 2: Translate keywords

Use union for inclusive or, intersection for and, complement for not, and difference for in one event but not another.

### Step 3: Simplify the set statement

Check whether events overlap, whether one event is contained in another, and whether the expression can be rewritten using set laws.

<PhysicsDerivation
  items={[
    { label: "Not A", tex: "A^c=S\\setminus A" },
    { label: "A or B", tex: "A\\cup B" },
    { label: "A and B", tex: "A\\cap B" },
    { label: "A but not B", tex: "A\\setminus B=A\\cap B^c" },
  ]}
/>

## Rules

<Equation label="Complement" tex="A^c=S\setminus A" />

<Equation label="Union" tex="A\cup B=\{s\in S:s\in A\text{ or }s\in B\}" />

<Equation label="Intersection" tex="A\cap B=\{s\in S:s\in A\text{ and }s\in B\}" />

<Equation label="Difference" tex="A\setminus B=A\cap B^c" />

<Equation label="Disjoint events" tex="A\cap B=\varnothing" />

<Equation label="Subset" tex="A\subseteq B\quad\Longleftrightarrow\quad s\in A\Rightarrow s\in B" />

<Equation label="De Morgan 1" tex="(A\cup B)^c=A^c\cap B^c" />

<Equation label="De Morgan 2" tex="(A\cap B)^c=A^c\cup B^c" />

## Examples

<PhysicsExamples
  items={[
    {
      title: "Example 1",
      question: "For one die roll, let \\(A\\) be even and \\(B\\) be at least 5. Write \\(A\\), \\(B\\), \\(A\\cup B\\), and \\(A\\cap B\\).",
      answer: "With \\(S=\\{1,2,3,4,5,6\\}\\), \\(A=\\{2,4,6\\}\\) and \\(B=\\{5,6\\}\\). Then \\(A\\cup B=\\{2,4,5,6\\}\\) and \\(A\\cap B=\\{6\\}\\).",
    },
    {
      title: "Example 2",
      question: "Detector 1 clicks in event \\(D_1\\), detector 2 clicks in event \\(D_2\\). Translate 'exactly detector 1 clicks'.",
      answer: "Exactly detector 1 clicks means detector 1 clicks and detector 2 does not: \\[D_1\\cap D_2^c.\\]",
    },
    {
      title: "Example 3",
      question: "Are \\(A=\\{1,3,5\\}\\) and \\(B=\\{2,4,6\\}\\) disjoint in a die roll?",
      answer: "Yes. Their intersection is empty: \\(A\\cap B=\\varnothing\\). No outcome is both odd and even.",
    },
  ]}
/>

## Checks

- In probability, or normally means inclusive or: \(A\cup B\) includes outcomes where both events occur.
- And means intersection: \(A\cap B\).
- Disjoint events cannot occur together because their intersection is empty.
- A complement depends on the sample space \(S\).`;
