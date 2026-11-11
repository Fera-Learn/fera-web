# Level 2 Mathematical Physics Lectures 11–17 Plan

## 1. Extend the Course Structure and Establish Validation

Update `apps/academy/src/lib/docs/level-2-mathematical-physics/structure.ts` with the two approved modules, six sections, and 15 exact topic titles from the specification:

- `laplace-transforms`
- `differential-vector-calculus`
- `steepest-descent`
- `curves-and-line-integrals`
- `surface-and-volume-integrals`
- `integration-theorems-and-vortices`

Preserve the existing two modules and all 15 current titles unchanged. Keep the new modules and sections in lecture order so navigation progresses from transforms to local vector operators, then to vector integrals and global theorems.

Create `apps/academy/scripts/validate-level-2-mathematical-physics-content.mjs` by adapting the established course-validator pattern rather than creating a second content model. The validator will:

- Derive expected titles and slugged paths directly from `structure.ts`.
- Accept optional section ids for section-by-section implementation checks.
- Require full one-to-one file and registry coverage when run without section arguments.
- Check exact heading order, one Notation component, one collapsible examples component, and exactly two example items.
- Reject duplicate, unknown, empty, or unregistered content.
- Check raw-math delimiter and command escaping in Markdown and JavaScript props.
- Prepare and compile every selected body with the Academy MDX pipeline and GFM support.
- Confirm `pages.ts` continues to resolve Mathematical Physics bodies from the existing map.

Register the validator as `check:mathematical-physics-content` in `apps/academy/package.json`. Run it once after the structure expansion to confirm the completeness gate reports the 15 not-yet-authored pages.

## 2. Author and Register the Laplace Transform Section

Create four topic bodies under:

`apps/academy/src/lib/docs/level-2-mathematical-physics/laplace-transforms/`

Use Lecture 11 slides 3–13 according to the approved source map. The four pages will teach:

1. Definition, roles of `t` and `s`, convergence, and the `cosh(kt)` calculation.
2. Transform properties and the conditions under which delay, scaling, differentiation, and integration rules apply.
3. Partial-fraction and convolution routes for inverse transforms.
4. The transform–solve–invert method for initial-value ODEs, including first- and second-order examples.

Accuracy controls for this batch:

- Derive convergence bounds rather than merely quoting transform-table entries.
- Restrict unilateral-transform scaling and delay rules to conditions for which they are valid.
- Carry all initial-value terms with the correct signs.
- Distinguish the transform variable from time and distinguish a function from its transform consistently.
- Show how poles and partial fractions determine inverse terms without introducing complex inversion contours.

Add each import and exact title mapping to `level-2-mathematical-physics/content.ts` in course order. Run the validator for `laplace-transforms`, then compare every definition, property, and worked result with Lecture 11.

## 3. Author and Register Differential Vector Calculus

Create three topic bodies under:

`apps/academy/src/lib/docs/level-2-mathematical-physics/differential-vector-calculus/`

Use Lectures 12–13 slides 3–14. The pages will teach:

1. Gradient calculation, radial scalar fields, total differentials, level surfaces, normals, and steepest change.
2. Divergence and curl as local source and rotation measures, product identities, operator-order distinctions, and compound del identities.
3. The Laplacian, electrostatic Laplace equation, and full derivation of free-space electromagnetic wave equations.

Accuracy controls for this batch:

- Correct the source wording so curl is explicitly vector-valued.
- Keep `∇·a` distinct from the directional differential operator `a·∇` and keep `∇×a` distinct from `a×∇`.
- State smoothness assumptions when commuting partial derivatives in `∇×(∇φ)=0` and `∇·(∇×a)=0`.
- Use `∇²φ=0`, not `∇·φ=0`, for electrostatic potential in a charge-free region.
- Track Maxwell signs and time derivatives to obtain wave speed `c=1/√(μ₀ε₀)`.

Register all three bodies, run the validator for `differential-vector-calculus`, and perform a separate component, sign, and operator-type review.

## 4. Author and Register Steepest Descent

Create:

`apps/academy/src/lib/docs/level-2-mathematical-physics/steepest-descent/steepest-descent-for-linear-systems/content.ts`

Use Lectures 12–13 slides 15–28. Build the method from level-set geometry to the quadratic objective

`φ(x) = ½xᵀAx - xᵀb`

for symmetric positive-definite `A`. Derive the residual and exact line-search step, then work iterations of the source's 2-by-2 system.

Add a compact `CartesianGrid`/`Curve` plot using explicit points from the demonstrated iterations. The plot will identify the exact solution and make zig-zag behaviour visible without adding a new diagram asset or component.

Accuracy controls for this batch:

- State why symmetry gives `∇φ=Ax-b` and why positive definiteness gives a unique global minimum.
- Keep the source residual convention `r_k=Ax_k-b` consistent with the update `x_{k+1}=x_k-α_kr_k`.
- Derive `α_k=(r_kᵀr_k)/(r_kᵀAr_k)` from line minimisation.
- Avoid claiming the gradient norm decreases monotonically without the assumptions needed; describe the guaranteed objective decrease for exact line search instead.

Register the page, run the validator for `steepest-descent`, and numerically recheck all plotted and tabulated iteration values.

## 5. Author and Register Curves and Line Integrals

Create two topic bodies under:

`apps/academy/src/lib/docs/level-2-mathematical-physics/curves-and-line-integrals/`

Use Lectures 14–15 slides 3–11. The pages will teach:

1. Parametric curves, tangent vectors, arc length, scalar and vector line integrals, path orientation, and path dependence.
2. Simple connectivity, zero curl, scalar potentials, path independence, and endpoint evaluation.

Use a simple existing Cartesian graph only if the plotted curve and orientation are clearer than equations alone. Do not create a bespoke geometry diagram.

Accuracy controls for this batch:

- Distinguish `d\mathbf r`, `ds`, and orientation-sensitive versus orientation-insensitive integrals.
- State regularity and simply connected-domain assumptions for the conservative-field equivalences.
- Recover potentials by integrating components and reconciling the unknown functions of the remaining coordinates.
- Check that parameter limits reproduce the requested curve direction and endpoints.

Register both bodies and run the validator for `curves-and-line-integrals` before reviewing the examples against Lectures 14–15.

## 6. Author and Register Surface and Volume Integrals

Create two topic bodies under:

`apps/academy/src/lib/docs/level-2-mathematical-physics/surface-and-volume-integrals/`

Use Lectures 14–15 slides 12–23. The pages will teach:

1. Parametric surfaces, tangent-vector cross products, scalar and vector area elements, orientation, and flux integrals.
2. Three-dimensional coordinate maps, scalar triple products, Jacobians, cylindrical and spherical volume elements, and geometry-driven limits.

Accuracy controls for this batch:

- Keep `dS` distinct from the oriented vector element `d\mathbf S`.
- State how swapping parameter order reverses surface orientation.
- Use absolute Jacobian magnitude for scalar volume measure and explain why coordinate order changes sign but not physical volume.
- Derive rather than quote the cylindrical and spherical Jacobians.
- Recheck the hemisphere and conical detector bounds, units, and limiting cases.

Register both bodies, run the validator for `surface-and-volume-integrals`, and perform a parameterisation, orientation, and integration-limits audit.

## 7. Author and Register Integration Theorems and Vortices

Create three topic bodies under:

`apps/academy/src/lib/docs/level-2-mathematical-physics/integration-theorems-and-vortices/`

Use Lectures 16–17 slides 3–19. The pages will teach:

1. The divergence theorem, closed-surface flux, electrostatic Gauss law, point-charge singularity, and the three-dimensional delta identity.
2. Green's theorem in circulation and two-dimensional divergence forms, positive boundary orientation, boundary-to-area conversion, and area formulas.
3. Stokes' theorem, compatible orientation, circulation and vorticity, and the Rankine vortex as the culminating application.

Add a compact existing Cartesian graph to the Rankine-vortex lesson showing the continuous piecewise azimuthal speed across the core boundary. If multiple profiles would make labels or scales ambiguous, plot velocity only and teach circulation and vorticity through equations and worked examples.

Accuracy controls for this batch:

- Require outward normals on closed surfaces and explicitly include every boundary piece.
- Distinguish ordinary pointwise identities away from the origin from `∇²(1/r)=-4πδ³(\mathbf r)` as a distributional identity.
- Enforce anticlockwise positive orientation in Green's theorem.
- Pair Stokes boundary direction with the selected normal by the right-hand rule.
- Calculate Rankine circulation and vorticity piecewise, check continuity at the core radius, and relate area-integrated vorticity to circulation.

Register all three bodies, run the validator for `integration-theorems-and-vortices`, and complete a theorem-hypothesis and orientation review.

## 8. Complete the Registry and Full-Course Content Audit

Review `apps/academy/src/lib/docs/level-2-mathematical-physics/content.ts` as one registry:

- Exactly 30 imports and 30 title mappings.
- Existing 15 entries unchanged in meaning and all new entries in structure order.
- Exact title spelling, unique identifiers, and correct slugged import paths.
- No duplicate, unknown, empty, or omitted body.

Run the full validator without section arguments. Confirm that all 30 structure titles resolve through the existing `Map.get(topic.title)` route integration.

Then audit the 15 new pages for:

- Learner-first openings before formalism.
- Compact, page-specific notation defined before use.
- One coherent method rather than a compressed slide sequence.
- Introduced and interpreted equations, graphs, and theorem statements.
- Complete assumptions, domain restrictions, signs, orientations, and units.
- Exactly two progressive examples with complete reasoning and explicit final results.
- Self-containment without “previous page,” “recall,” or source-facing language.
- Correct raw `String.raw` delimiters and semantic TeX after preparation.

## 9. Final Verification and Review

Format only the changed files, then run:

```sh
pnpm --filter academy check:mathematical-physics-content
pnpm --filter academy check:questions
pnpm --filter academy lint
pnpm --filter academy build
git diff --check
```

If repository metadata is not available at the workspace root, run the Git whitespace check from the nested repository that owns `fera-web`, or report that the check is unavailable rather than treating it as passed.

Review the implementation against:

- The approved specification and exact source map.
- The maths content rubric and inherited pedagogy, clarity, and LaTeX rubrics.
- All four lecture PDFs, with particular attention to transform conditions, vector operator types, Maxwell signs, integration limits, theorem assumptions, and orientation.
- The approved constraint that only existing Cartesian graph primitives may be used.

Fix all content, MDX, registry, validator, lint, and build defects; rerun every affected check and the production build before completion.

## Expected File Impact

New files:

- 15 topic `content.ts` files across six new section directories.
- `apps/academy/scripts/validate-level-2-mathematical-physics-content.mjs`.
- `docs/openpowers/specs/2026-11-09-level-2-mathematical-physics-lectures-11-17.md`.
- `docs/openpowers/plans/2026-11-09-level-2-mathematical-physics-lectures-11-17.md`.

Updated files:

- `apps/academy/src/lib/docs/level-2-mathematical-physics/structure.ts`.
- `apps/academy/src/lib/docs/level-2-mathematical-physics/content.ts`.
- `apps/academy/package.json`.

No route, question, exam, flashcard, equation-sheet, shared component, or custom diagram files will be added or changed.

## Code Quality Controls

- Keep one topic body per file in the established directory pattern.
- Reuse the current structure, registry, route resolver, MDX components, and Cartesian graph primitives.
- Derive validator expectations from `structure.ts`; do not maintain another topic-title list.
- Keep graph data local to the lesson that uses it; do not create a generic abstraction for two static educational plots.
- Keep each page's prose, notation, derivation, and examples specific rather than using copy-and-replace templates.
- Make no opportunistic edits to existing pages unless validation exposes a concrete integration defect.

## Risks and Controls

- **Source slips or ambiguous notation:** correct identified operator and Laplace-equation errors, define conventions per page, and compare final equations with independent derivations.
- **Unilateral-transform domain errors:** state causality/domain assumptions and restrict scaling and delay formulas appropriately.
- **Vector sign and type errors:** audit whether every grad, div, curl, Laplacian, normal, and area element is scalar, vector, or operator-valued as claimed.
- **Orientation mistakes:** state orientation before each integral and verify signs by parameter limits or the right-hand rule.
- **Overloaded theorem pages:** keep each page centred on one conversion principle and place detailed calculation in the closed examples component.
- **Graph mismatch:** generate plotted points from the same numerical iteration or piecewise formula taught in the text and independently recheck them.
- **Raw LaTeX rendering failures:** validate prepared output semantically in addition to MDX compilation and production build.
- **Registry omissions:** use structure-derived validation and section-scoped checks after each batch, then require exact 30-page coverage.
- **Unrelated local changes:** restrict edits to the approved files and do not revert, overwrite, or reformat unrelated work.
