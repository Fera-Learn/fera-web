# Level 2 Mathematical Physics Questions Specification

## Goal

Create a complete pure-mathematics practice bank for all 30 Level 2 - Mathematical Physics topic pages. Each topic will receive 20 original questions with fully worked answers, producing 600 questions across the course.

## Scope

This phase will:

- Add one schema-compliant question JSON file for every Mathematical Physics topic.
- Add exactly 20 questions to each of the 30 topics.
- Cover all nine Academy difficulty ratings in every topic.
- Keep every prompt mathematical and operation-based.
- Provide complete worked answers with explicit intermediate steps and final results.
- Generate the existing `questions.generated.ts` registry from the JSON files.
- Add a course-local validator for coverage, schema, ratings, IDs, tags, pure-maths wording, JSON newlines, and LaTeX safety.

This phase will not add descriptive, explanatory, interpretive, modelling, or essay-style questions. It will not add exams, flashcards, content pages, diagrams, routes, UI components, or question API changes.

## User Decisions

- Create 20 questions per topic: 600 questions in total.
- Include symbolic derivations and proofs at the highest difficulty levels.
- Exclude all “describe,” “explain,” “interpret,” and similar prose-response prompts.

## Source Boundary

The 30 authored topic pages are the primary scope and notation source:

`apps/academy/src/lib/docs/level-2-mathematical-physics/`

The supplied lecture decks in `resources/mathematical-methods/` may be used to verify mathematical scope and source conventions. Questions must remain within the methods represented by the corresponding topic page and lectures 1–17.

Questions will not introduce unsupported advanced material such as Jordan normal form, distributions beyond the authored point-source identity, Bromwich inversion, conjugate gradients, differential forms, or tensor analysis.

## Pure-Mathematics Prompt Standard

Every prompt must require mathematical work. Approved prompt operations include:

- Calculate or compute.
- Determine or find.
- Solve.
- Evaluate.
- Simplify.
- Expand or contract indexed expressions.
- Construct a basis, matrix, potential, parametrisation, or decomposition.
- Diagonalise or classify by a stated mathematical test.
- Derive.
- Prove or show that.
- Verify or test a stated identity, condition, or theorem.

Prompts must not ask the learner to:

- Describe, explain, discuss, interpret, comment on, or outline.
- State or recall a definition or formula without using it.
- Identify notation without calculation.
- Give a qualitative physical or modelling interpretation.
- Diagnose another learner's prose or design an exam plan.
- Answer “why,” “what is,” or other open prose questions.

Topics with physical names, including Maxwell equations, electrostatics, and Rankine vortices, will still use purely mathematical tasks involving fields, derivatives, integrals, PDEs, and identities. Numerical physical-context stories and unit-conversion exercises are excluded.

## Question Set Composition

Every topic file will contain questions in this exact rating order:

| Positions | Rating | Count | Mathematical burden |
| --- | --- | ---: | --- |
| 1–2 | `*` | 2 | One direct operation or substitution |
| 3–4 | `*+` | 2 | One operation with a sign, index, orientation, or domain condition |
| 5–6 | `**` | 2 | Routine two-step calculation |
| 7–8 | `**+` | 2 | Routine method with one choice or transformation |
| 9–10 | `***` | 2 | Complete standard method with linked steps |
| 11–12 | `***+` | 2 | Linked calculation plus a mathematical check |
| 13–14 | `****` | 2 | Non-routine setup or synthesis |
| 15–17 | `****+` | 3 | Parameter conditions, case splits, or multi-method derivation |
| 18–20 | `*****` | 3 | Proof, general derivation, or robust theorem-level calculation |

Difficulty will be determined by reasoning burden rather than arithmetic length. Even the easiest questions must calculate or manipulate something; they will not be formula-recall questions.

## Answer Standard

Every answer must remain concise but complete and include:

1. A brief mathematical restatement of the target.
2. The selected formula, identity, theorem, or method.
3. Every meaningful algebraic, differential, integral, or logical step.
4. A mathematical verification where the rating or task requires one.
5. A clearly marked `Final answer:` statement.

Answers may name and justify mathematical steps because complete working is mandatory, but they will not turn into qualitative essays. Proof answers must present a valid chain of equations or logical implications. Numerical values will have units only if the prompt explicitly defines a dimensional quantity; the default question style is abstract and dimensionless.

## Topic Coverage

### Index Notation and Vector Projections

| Topic | Required mathematical question coverage |
| --- | --- |
| Orthonormal Vectors and Orthogonal Projection | Dot products, normalization, projection coefficients, parallel/perpendicular decomposition, reconstruction, Gram-style projection, parameter conditions |
| Summation Convention and Kronecker Delta | Free and dummy indices, explicit expansion, legal index expressions, delta contractions, traces, nested contractions, dimension-dependent identities |
| Levi-Civita Symbol and Vector Products | Permutation signs, cross products, scalar and vector triple products, epsilon-delta contractions, BAC-CAB derivations |

### Vector Spaces

| Topic | Required mathematical question coverage |
| --- | --- |
| Vector Spaces and Their Axioms | Closure, zero vector, inverses, altered operations, subspace-style candidates, counterexamples, axiom proofs |
| Linear Combinations and Span | Coefficient systems, span membership, polynomial and matrix spans, parameterized spans, spanning proofs |
| Linear Independence | Homogeneous systems, row reduction, determinants, polynomial/function independence, parameter values causing dependence |
| Bases and Dimension | Basis tests, coordinate extraction, constrained subspaces, basis extension/reduction, dimensions of polynomial and matrix spaces |

### Inner Product Spaces

| Topic | Required mathematical question coverage |
| --- | --- |
| Inner Products, Norms, and Orthogonality | Real and complex inner products, conjugation, norms, angles, orthogonality, projections, orthogonal complements, Cauchy-Schwarz checks |
| Function Spaces and Modal Decomposition | Square integrability, function norms, orthogonal integrals, Fourier/modal coefficients, finite modal reconstruction, Parseval-style norm sums |

### Linear Operators and Special Matrices

| Topic | Required mathematical question coverage |
| --- | --- |
| Linear Operators and Matrix Trace | Linearity tests, matrix representations, composition, kernels/images where supported, trace calculation, cyclicity and similarity proofs |
| Special Matrices and Quadratic Forms | Hermitian, anti-Hermitian, unitary, orthogonal and normal tests; Hermitian decomposition; Pauli expansion; positivity of quadratic forms |

### Eigenvalues and Diagonalisation

| Topic | Required mathematical question coverage |
| --- | --- |
| Eigenvalues and Eigenvectors | Characteristic polynomials, eigenvalues, eigenspaces, algebraic/geometric multiplicity, special-matrix spectral restrictions |
| Commuting Matrices and Similarity Transformations | Commutators, common eigenspaces, simultaneous diagonalisation, similarity transforms, determinant/trace/characteristic invariants |
| Matrix Diagonalisation and Quadratic Forms | Constructing `SDS^{-1}` or `UDU†`, normality, coordinate changes, principal axes, signs and definiteness |
| Matrix Powers and Exponentials | Powers and exponentials through diagonalisation, series checks, evolution of eigencomponents, unitary exponentials, Hermitian logarithm families |

### Laplace Transforms

| Topic | Required mathematical question coverage |
| --- | --- |
| Laplace Transform Definition and Existence | Direct improper integrals, convergence half-lines, exponential and hyperbolic functions, polynomial-exponential transforms, parameter conditions |
| Laplace Transform Properties | Linearity, delay, exponential shift, positive scaling, time multiplication, derivative transforms, time integration, combined properties |
| Inverse Laplace Transforms and Convolution | Partial fractions, repeated poles, shifted quadratic factors, convolution integrals, alternative inversions, verification by retransformation |
| Solving ODEs with Laplace Transforms | First- and second-order initial-value problems, forcing terms, partial fractions, oscillator parameter cases, substitution checks |

### Differential Vector Calculus

| Topic | Required mathematical question coverage |
| --- | --- |
| Gradients and Level Surfaces | Cartesian and radial gradients, directional derivatives, tangent/normal conditions, level sets, stationary points, normalized normals |
| Divergence, Curl, and Vector Identities | Direct div/curl, solenoidal and irrotational conditions, product rules, Laplacians, compound identities, index-based proofs where supported |
| Laplacian and Maxwell Wave Equations | Scalar/vector Laplacians, harmonic functions, curl-curl reductions, derivation of field wave equations, plane-wave substitution and dispersion |

### Steepest Descent

| Topic | Required mathematical question coverage |
| --- | --- |
| Steepest Descent for Linear Systems | SPD tests, quadratic gradients, residuals, exact step sizes, iterations, objective decrease, orthogonal residuals, convergence parameter conditions |

### Curves and Line Integrals

| Topic | Required mathematical question coverage |
| --- | --- |
| Parametric Curves and Line Integrals | Parametrisation, tangents, arc length, scalar/vector line integrals, orientation reversal, comparison of paths |
| Conservative Fields and Scalar Potentials | Curl tests, potential construction, endpoint integrals, path comparisons, simply connected restrictions, punctured-domain counterexamples |

### Surface and Volume Integrals

| Topic | Required mathematical question coverage |
| --- | --- |
| Parametric Surfaces and Surface Integrals | Tangent vectors, cross products, orientation, scalar area, flux, cylinders, planes, spheres, parameter-order reversal |
| Volume Integrals and Coordinate Jacobians | Triple-product Jacobians, changes of variables, cylindrical/spherical elements, bounds, volumes, weighted integrals, conical regions |

### Integration Theorems and Vortices

| Topic | Required mathematical question coverage |
| --- | --- |
| Divergence Theorem and Electrostatics | Volume divergence versus closed flux, piecewise boundaries, radial fields, enclosed-source integrals, delta identity at authored depth |
| Green's Theorem in the Plane | Boundary-to-area conversion, positive orientation, triangular/rectangular/elliptic regions, area formulas, multiply connected boundaries |
| Stokes' Theorem and the Rankine Vortex | Curl flux versus circulation, orientation, alternate spanning surfaces, cylindrical curl, piecewise velocity, circulation and vorticity integrals |

## File and Metadata Standard

Each topic file will live at:

`apps/academy/src/lib/docs/level-2-mathematical-physics/questions/[section-id]/[topic-id].json`

Every file will contain:

- `courseId: "level-2-mathematical-physics"`
- `schemaVersion: 1`
- Exact `sectionId`, `topicId`, and `topicTitle` values derived from `structure.ts`
- Top-level `paperTags: ["mathematical-physics", "[section-id]"]`
- Exactly 20 questions

Every question will use the stable ID format:

`math-physics-[section-id]-[topic-id]-[01-20]`

Every question will repeat the tags `mathematical-physics` and its section id so filtering remains reliable.

## Existing-System Reuse

Repository review found that all required infrastructure already exists:

- The generalized JSON question schema and generated registry already support this course.
- `generate-question-registry.mjs` already includes `level-2-mathematical-physics`.
- `questions.generated.ts` already exists and is imported by the shared question bank.
- The Academy question API and UI already consume generated topic registries.
- Existing Math I coverage scripts provide the exact 20-question rating sequence and JSON/LaTeX safety patterns.

The implementation will extend this system. It will not create another registry, question API, renderer, data type, or permanent question generator.

## Validation

A new course-local validator will derive expected topic files from `structure.ts` and require:

- Exactly 30 topic JSON files and 600 questions.
- Exact path, course, section, topic id, and topic title agreement.
- Exact stable IDs and no duplicates.
- The approved 20-question rating sequence in every file.
- Required top-level and per-question paper tags.
- Non-empty prompts and fully worked answers.
- A mathematical action verb in every prompt.
- No descriptive, explanatory, interpretive, recall-only, or essay prompt wording.
- `Final answer:` in every answer.
- Real JSON newline escapes rather than visible `\\n` artifacts.
- Balanced and correctly escaped JSON LaTeX delimiters and commands.
- No Unicode maths symbols where LaTeX commands are required.
- Exact one-to-one agreement with the generated registry.

The validator will be registered as `check:mathematical-physics-questions` in `apps/academy/package.json`.

## Out of Scope

- Topic-page content changes.
- Descriptive, explanatory, interpretive, or modelling questions.
- Multiple-choice questions.
- Exams, marks, paper generation, or timed assessments.
- Flashcards and equation-sheet changes.
- Questions outside the mathematical methods represented by the 30 pages.
- API, route, component, diagram, or shared renderer changes.

## Verification

- Run the new 30-topic/600-question validator.
- Regenerate and check `questions.generated.ts` using the existing registry script.
- Parse every JSON file and inspect decoded strings for newline and LaTeX corruption.
- Independently recalculate symbolic and numerical results in each section batch.
- Audit prompts for the pure-mathematics wording constraint.
- Run Academy question checks, lint, and the production build.
- Run formatting and `git diff --check` on the changed files.
- Review all sets against the maths question, clarity, and LaTeX rubrics.

## Success Criteria

- All 30 topic pages have exactly 20 registered practice questions.
- All 600 prompts require mathematical operations and none asks for description, explanation, interpretation, or discussion.
- Every answer is mathematically correct, fully worked, and ends with a clear final answer.
- Each topic spans the complete approved difficulty distribution.
- JSON metadata, IDs, tags, registry entries, and LaTeX are valid.
- Course question validation, registry checks, lint, and production build pass.
- No unresolved critical or important review findings remain.

## Decisions

- Create exactly 600 questions: 20 for each of 30 topics.
- Use the established Math I rating sequence.
- Include proofs and symbolic derivations at high difficulty.
- Keep prompts purely mathematical and exclude prose-response tasks.
- Reuse the existing JSON registry and question-bank infrastructure.

## Open Questions

None.
