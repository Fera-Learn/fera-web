export const content = String.raw`## Principle

The sign of a cross product depends on order: swapping the two input vectors reverses the answer. In a right-handed coordinate system, turning from the first axis to the second points along the third. The Levi-Civita symbol is a compact sign table that records this orientation pattern for every ordering of the three axes.

Once the sign table is known, it can generate cross-product components and simplify products of cross products without writing separate coordinate formulas each time.

Objective: determine Levi-Civita signs, calculate vector products, and apply contraction identities.

Prerequisite: familiarity with Cartesian vector components, dot products, and cross products.

## Notation

<Notation
  items={[
    { symbol: "i,j,k,l,m,n", meaning: "Cartesian indices, each taking the values \\(1,2,3\\)" },
    { symbol: "\\mathbf e_1,\\mathbf e_2,\\mathbf e_3", meaning: "the right-handed Cartesian unit directions" },
    { symbol: "\\varepsilon_{ijk}", meaning: "the three-dimensional Levi-Civita symbol, which records the sign of an index ordering" },
    { symbol: "\\delta_{ij}", meaning: "the Kronecker delta, equal to one for matching indices and zero otherwise" },
    { symbol: "\\mathbf a,\\mathbf b,\\mathbf c", meaning: "vectors with components \\(a_i\\), \\(b_i\\), and \\(c_i\\)" },
    { symbol: "(\\mathbf a\\times\\mathbf b)_i", meaning: "the \\(i\\)th component of the cross product" },
    { symbol: "[\\mathbf a,\\mathbf b,\\mathbf c]", meaning: "the scalar triple product \\(\\mathbf a\\cdot(\\mathbf b\\times\\mathbf c)\\)" },
  ]}
/>

## The Core Method

The right-handed unit directions follow a cyclic pattern:

\[
\mathbf e_1\times\mathbf e_2=\mathbf e_3,
\qquad
\mathbf e_2\times\mathbf e_3=\mathbf e_1,
\qquad
\mathbf e_3\times\mathbf e_1=\mathbf e_2.
\tag*{[1]}
\]

These three orders keep the positive orientation. Reversing any pair reverses the cross product, so the three reversed orders are negative. The Levi-Civita symbol stores exactly these signs:

\[
\begin{aligned}
\varepsilon_{123}=\varepsilon_{231}=\varepsilon_{312}&=+1,\\
\varepsilon_{132}=\varepsilon_{321}=\varepsilon_{213}&=-1.
\end{aligned}
\tag*{[2]}
\]

The positive orders are called even permutations of \((1,2,3)\), and the negative orders are called odd permutations. If an index repeats, two directions are the same and cannot define a three-dimensional orientation, so the value is zero:

\[
\varepsilon_{ijk}=
\begin{cases}
+1,&(i,j,k)\text{ is an even permutation of }(1,2,3),\\
-1,&(i,j,k)\text{ is an odd permutation of }(1,2,3),\\
0,&\text{any two indices are equal}.
\end{cases}
\tag*{[3]}
\]

This sign table reproduces all three cross-product components in one expression:

\[
(\mathbf a\times\mathbf b)_i
=\varepsilon_{ijk}a_jb_k.
\tag*{[4]}
\]

The index \(i\) is free and selects the output component; \(j\) and \(k\) are dummy indices. For \(i=1\), all terms vanish except the two orderings that contain 2 and 3:

\[
\begin{aligned}
(\mathbf a\times\mathbf b)_1
&=\varepsilon_{123}a_2b_3+\varepsilon_{132}a_3b_2\\
&=a_2b_3-a_3b_2.
\end{aligned}
\tag*{[5]}
\]

Swapping the two vectors swaps the dummy labels in the sign table. Because exchanging two indices changes the Levi-Civita sign, the cross product reverses:

\[
\begin{aligned}
(\mathbf b\times\mathbf a)_i
&=\varepsilon_{ijk}b_ja_k\\
&=\varepsilon_{ikj}b_ka_j\\
&=-\varepsilon_{ijk}a_jb_k\\
&=-(\mathbf a\times\mathbf b)_i.
\end{aligned}
\tag*{[6]}
\]

Dotting a third vector into equation \([4]\) gives a compact form of the scalar triple product:

\[
[\mathbf a,\mathbf b,\mathbf c]
=\mathbf a\cdot(\mathbf b\times\mathbf c)
=\varepsilon_{ijk}a_i b_j c_k.
\tag*{[7]}
\]

Products of two Levi-Civita symbols occur when one cross product is placed inside another. When one index is contracted, the product can be replaced by Kronecker deltas:

\[
\boxed{
\varepsilon_{ijk}\varepsilon_{ilm}
=\delta_{jl}\delta_{km}-\delta_{jm}\delta_{kl}
}.
\tag*{[8]}
\]

This identity converts orientation signs into component selectors, which are usually easier to contract. Keep the order of the two terms: reversing it changes the sign.

The source identity before any index is contracted is

\[
\begin{aligned}
\varepsilon_{ijk}\varepsilon_{nlm}
={}&\delta_{in}\delta_{jl}\delta_{km}
+\delta_{il}\delta_{jm}\delta_{kn}
+\delta_{im}\delta_{jn}\delta_{kl}\\
&-\delta_{il}\delta_{jn}\delta_{km}
-\delta_{in}\delta_{jm}\delta_{kl}
-\delta_{im}\delta_{jl}\delta_{kn}.
\end{aligned}
\tag*{[9]}
\]

To recover equation \([8]\), set \(n=i\) in equation \([9]\) and sum over \(i\). The direct substitution is

\[
\begin{aligned}
\varepsilon_{ijk}\varepsilon_{ilm}
={}&\delta_{ii}\delta_{jl}\delta_{km}
+\delta_{il}\delta_{jm}\delta_{ki}
+\delta_{im}\delta_{ji}\delta_{kl}\\
&-\delta_{il}\delta_{ji}\delta_{km}
-\delta_{ii}\delta_{jm}\delta_{kl}
-\delta_{im}\delta_{jl}\delta_{ki}.
\end{aligned}
\tag*{[10]}
\]

Now use \(\delta_{ii}=3\) and apply the selector rule to each repeated \(i\). For example, \(\delta_{il}\delta_{ki}=\delta_{kl}\) and \(\delta_{im}\delta_{ji}=\delta_{jm}\), so equation \([10]\) becomes

\[
\begin{aligned}
\varepsilon_{ijk}\varepsilon_{ilm}
={}&3\delta_{jl}\delta_{km}
+\delta_{jm}\delta_{kl}
+\delta_{jm}\delta_{kl}\\
&-\delta_{jl}\delta_{km}
-3\delta_{jm}\delta_{kl}
-\delta_{jl}\delta_{km}.
\end{aligned}
\tag*{[11]}
\]

Now collect coefficients of the two remaining delta products:

\[
\begin{aligned}
\varepsilon_{ijk}\varepsilon_{ilm}
&=(3-1-1)\delta_{jl}\delta_{km}
+(1+1-3)\delta_{jm}\delta_{kl}\\
&=\delta_{jl}\delta_{km}-\delta_{jm}\delta_{kl}.
\end{aligned}
\tag*{[12]}
\]

The free indices \(j,k,l,m\) remain unchanged throughout; only \(i\) is summed. Checking the free indices before simplifying prevents a free label from being treated accidentally as a dummy one.

<PhysicsExamples
  collapsible
  items={[
    {
      title: "Computing a cross product from signs",
      question: "Use the Levi-Civita component rule to calculate \\(\\mathbf a\\times\\mathbf b\\) for \\(\\mathbf a=(1,2,0)\\) and \\(\\mathbf b=(3,-1,4)\\).",
      answer: "Evaluate one free component at a time. Equation \\([5]\\) gives \\[(\\mathbf a\\times\\mathbf b)_1=a_2b_3-a_3b_2=2(4)-0(-1)=8.\\tag*{[13]}\\] The same cyclic sign pattern gives \\[(\\mathbf a\\times\\mathbf b)_2=a_3b_1-a_1b_3=0(3)-1(4)=-4,\\qquad (\\mathbf a\\times\\mathbf b)_3=a_1b_2-a_2b_1=1(-1)-2(3)=-7.\\tag*{[14]}\\] Check that the result is perpendicular to both inputs: \\[(8,-4,-7)\\cdot(1,2,0)=8-8=0,\\qquad (8,-4,-7)\\cdot(3,-1,4)=24+4-28=0.\\tag*{[15]}\\] **Final result:** \\(\\mathbf a\\times\\mathbf b=(8,-4,-7)\\).",
    },
    {
      title: "Deriving the vector triple product",
      question: "Use the contracted Levi-Civita identity to simplify \\(\\mathbf a\\times(\\mathbf b\\times\\mathbf c)\\).",
      answer: "Apply equation \\([4]\\) to both cross products. The index \\(i\\) is free; the other repeated indices are dummy: \\[[\\mathbf a\\times(\\mathbf b\\times\\mathbf c)]_i=\\varepsilon_{ijk}a_j(\\mathbf b\\times\\mathbf c)_k=\\varepsilon_{ijk}\\varepsilon_{klm}a_jb_lc_m.\\tag*{[16]}\\] A cyclic rearrangement leaves the Levi-Civita sign unchanged, so \\(\\varepsilon_{ijk}=\\varepsilon_{kij}\\). Equation \\([8]\\) then gives \\[[\\mathbf a\\times(\\mathbf b\\times\\mathbf c)]_i=(\\delta_{il}\\delta_{jm}-\\delta_{im}\\delta_{jl})a_jb_lc_m.\\tag*{[17]}\\] Contract the deltas term by term: \\[\\delta_{il}\\delta_{jm}a_jb_lc_m=b_i a_mc_m=b_i(\\mathbf a\\cdot\\mathbf c),\\qquad \\delta_{im}\\delta_{jl}a_jb_lc_m=c_i a_lb_l=c_i(\\mathbf a\\cdot\\mathbf b).\\tag*{[18]}\\] Subtracting the second term gives every component of the vector. **Final result:** \\(\\mathbf a\\times(\\mathbf b\\times\\mathbf c)=\\mathbf b(\\mathbf a\\cdot\\mathbf c)-\\mathbf c(\\mathbf a\\cdot\\mathbf b)\\).",
    },
  ]}
/>
`;
