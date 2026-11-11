# Level 2 Mathematical Physics Lectures 11–17 Specification

## Goal

Extend Level 2 - Mathematical Physics from 15 to 30 substantive topic pages using the supplied lectures 11–17. The new lessons will turn compact lecture slides into self-contained, learner-first instruction while preserving the course's current page format, route generation, and content registry.

## Scope

This phase will:

- Add two source-aligned modules containing six sections and 15 topics.
- Create and register one production `String.raw` MDX body for every new topic.
- Cover Laplace transforms, differential vector calculus, steepest descent, vector integration, the three principal integration theorems, and the Rankine vortex.
- Use existing Academy Cartesian graph components where a plot materially improves understanding.
- Add a course-local content validator and package script for structural, registry, MDX, and LaTeX checks.
- Preserve all 15 existing topic pages and the current Academy routing system.

This phase will not add questions, exams, flashcards, equation sheets, custom diagram assets, shared UI components, or new routing architecture.

## Source Boundary

The authoritative sources are:

- `resources/mathematical-methods/Lecture slides 11.pdf`
- `resources/mathematical-methods/Lecture slides 12-13.pdf`
- `resources/mathematical-methods/Lecture slides 14-15.pdf`
- `resources/mathematical-methods/Lecture slides 16-17.pdf`

The lectures define the required concepts, notation, examples, and mathematical depth. The pages may reorder and expand explanations so they work without a lecturer, but they will not broaden into topics such as Bromwich inversion, distribution theory beyond the supplied point-source identity, conjugate-gradient methods, tensor calculus, or general differential geometry.

Clear source slips will be corrected rather than reproduced. In particular, curl maps a vector field to a vector field, electrostatic potential satisfies Laplace's equation `∇²φ = 0` in charge-free space, and transform existence conditions will be stated explicitly.

## Course Structure

### Module 3: Integral Transforms and Differential Vector Calculus

#### Section: Laplace Transforms

| Topic                                      | Primary source           | Required coverage                                                                                                                                                                     |
| ------------------------------------------ | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Laplace Transform Definition and Existence | Lecture 11, slides 3–4   | Transform definition, the roles of `t` and `s`, convergence, exponential order through concrete examples, and the transform of `cosh(kt)` with `s > \|k\|`.                           |
| Laplace Transform Properties               | Lecture 11, slides 5–7   | Linearity as needed, delay, exponential shift, scaling, multiplication by powers of `t`, derivatives, time integration, initial data, and choosing rather than memorising a property. |
| Inverse Laplace Transforms and Convolution | Lecture 11, slides 8–11  | Convolution definition and theorem, inverse-transform strategy, partial fractions, transform tables, repeated factors, and convolution as the inverse of a product.                   |
| Solving ODEs with Laplace Transforms       | Lecture 11, slides 12–13 | Transform–solve–invert workflow, incorporation of initial conditions, a first-order initial-value problem, and the damped harmonic oscillator with damping-regime interpretation.     |

#### Section: Differential Vector Calculus

| Topic                                   | Primary source                       | Required coverage                                                                                                                                                                             |
| --------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Gradients and Level Surfaces            | Lectures 12–13, slides 3–5 and 15–17 | Del operator in Cartesian coordinates, scalar fields, gradient calculation, directional change, radial fields, level surfaces, normal direction, and steepest increase/decrease.              |
| Divergence, Curl, and Vector Identities | Lectures 12–13, slides 6–11          | Divergence and curl calculations and meanings, solenoidal and irrotational fields, product identities, distinction between `∇·a` and `a·∇`, Laplacian, and the core grad/div/curl identities. |
| Laplacian and Maxwell Wave Equations    | Lectures 12–13, slides 11–14         | Scalar and vector Laplacians, electrostatic Laplace equation, free-space Maxwell equations, and step-by-step derivation of the electromagnetic wave equations and wave speed.                 |

#### Section: Steepest Descent

| Topic                               | Primary source               | Required coverage                                                                                                                                                                                                    |
| ----------------------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Steepest Descent for Linear Systems | Lectures 12–13, slides 15–28 | Gradient-descent update, step-size behaviour, conversion of symmetric positive-definite `Ax=b` into quadratic minimisation, residual, exact line-search step, worked iterations, convergence, and zig-zag behaviour. |

### Module 4: Vector Integration and Integral Theorems

#### Section: Curves and Line Integrals

| Topic                                     | Primary source              | Required coverage                                                                                                                                             |
| ----------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Parametric Curves and Line Integrals      | Lectures 14–15, slides 3–8  | Parametrising lines, circles, and ellipses; tangent and arc-length elements; scalar and vector line integrals; orientation; additivity; and path dependence.  |
| Conservative Fields and Scalar Potentials | Lectures 14–15, slides 9–11 | Simply connected domains, equivalence of zero curl, potential existence, and path independence; construction of a potential; and endpoint evaluation of work. |

#### Section: Surface and Volume Integrals

| Topic                                     | Primary source               | Required coverage                                                                                                                                                     |
| ----------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Parametric Surfaces and Surface Integrals | Lectures 14–15, slides 12–19 | Two-parameter surfaces, tangent vectors, scalar and oriented vector area elements, orientation and closed surfaces, flux, and cylindrical and hemispherical examples. |
| Volume Integrals and Coordinate Jacobians | Lectures 14–15, slides 20–23 | Three-parameter maps, scalar triple-product Jacobian, cylindrical and spherical volume elements, limits from geometry, and the conical particle-detector calculation. |

#### Section: Integration Theorems and Vortices

| Topic                                  | Primary source               | Required coverage                                                                                                                                                                                                          |
| -------------------------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Divergence Theorem and Electrostatics  | Lectures 16–17, slides 3–7   | Closed-surface orientation, local-to-global flux conversion, hemisphere verification, equivalence of differential and integral Gauss laws, point-charge singularity, and `∇²(1/r) = -4πδ(r)` at source depth.              |
| Green's Theorem in the Plane           | Lectures 16–17, slides 8–13  | Positive orientation, circulation and two-dimensional divergence forms, converting boundary integrals to area integrals, area formulas, ellipse area, and the conservative-field connection.                               |
| Stokes' Theorem and the Rankine Vortex | Lectures 16–17, slides 14–19 | Compatible boundary/surface orientation, line-to-surface conversion, cone verification strategy, Rankine velocity profile, circulation, cylindrical curl, piecewise vorticity, and the circulation–vorticity relationship. |

## Required Page Shape

Every new page will:

1. Begin with `## Principle`.
2. Continue with one compact `<Notation>` component under `## Notation`.
3. Teach the main procedure under `## The Core Method` or, only where genuinely decision-based, `## The Core Test`.
4. End with exactly one `<PhysicsExamples collapsible>` component containing exactly two tabbed examples.

The examples component supplies its own large heading, so no standalone `## Examples` heading will be added. Pages will not add separate Worked Cases, Checks, Mistake Filter, Fast Summary, or other top-level sections.

## Teaching and Mathematical Standard

Each page must:

- Start with a concrete physical, geometric, or computational problem before introducing formal definitions.
- State an objective and the minimum prerequisite knowledge without relying on another course page.
- Define every symbol before use and include units where physical quantities require them.
- Introduce each equation by purpose and follow it with interpretation or a decision rule.
- Show every meaningful step in central derivations, including transform convergence, initial-condition terms, vector identities, Jacobians, and theorem orientation.
- State assumptions and domain restrictions at the point where they matter: transform convergence, smoothness, simple connectivity, positive definiteness, boundedness, closed surfaces, and compatible orientation.
- Keep scalar and vector area elements distinct and keep cylindrical radial notation unambiguous within each page.
- Use two progressive examples: a direct application followed by a changed representation, condition, or physical application.
- Give complete example answers with strategy, intermediate reasoning, a final result, and interpretation.
- Paraphrase and teach the source rather than reproducing slide wording or order.

## Visual Strategy

Only existing Academy graph primitives will be used. No custom diagram asset will be created in this phase.

Planned graph uses are:

- A Cartesian steepest-descent path showing convergence and the source's zig-zag behaviour.
- A compact radial-profile graph on the Rankine-vortex page, showing the piecewise velocity and its change at the core radius.
- A simple Cartesian curve plot where it improves the explanation of parametrisation or orientation without requiring a custom geometric asset.

Every graph will have a descriptive title, labelled axes, a concise caption, and surrounding prose that identifies what the learner should notice. Geometry that cannot be represented clearly by the existing graph primitives will be explained mathematically and deferred to a later approval-gated diagram pass.

## Existing-System Reuse

Repository review found that the required systems already exist:

- `structure.ts` already defines module, section, and topic navigation data and will be extended rather than replaced.
- `content.ts` already provides the title-to-body registry and will remain the single registry.
- `pages.ts` already generates the course routes and resolves bodies from that registry; no route files are needed.
- Existing topic pages already establish the approved `String.raw`, `<Notation>`, and collapsible `<PhysicsExamples>` conventions.
- `CartesianGrid` and `Curve` already support the approved graph scope.
- Existing content validators provide a pattern for course-local MDX and registry checks.

No duplicate components, registries, routing systems, utilities, or abstractions will be introduced.

## Registry and Validation

The course structure and content registry will contain exactly 30 topics after this extension: 15 existing and 15 new.

A new `validate-level-2-mathematical-physics-content.mjs` script will verify:

- One-to-one agreement among structure titles, slugged content paths, registry imports, and registry map entries.
- Exactly 30 nested topic `content.ts` files and 30 unique registry entries.
- `String.raw` exports and non-empty bodies.
- Exact heading order: Principle, Notation, then The Core Method or The Core Test.
- Exactly one `<Notation>` component and one collapsible `<PhysicsExamples>` component with exactly two items.
- Absence of forbidden extra headings and dollar-delimited maths.
- Correct target-context LaTeX escaping in raw Markdown and JavaScript component props.
- Successful preparation and MDX compilation for every topic body.
- Continued use of the existing Mathematical Physics body map in `pages.ts`.

The validator will be registered as `check:mathematical-physics-content` in `apps/academy/package.json`.

## Out of Scope

- Question JSON and generated question-registry changes.
- Exam papers, flashcards, and equation-sheet changes.
- Custom diagrams or changes to the diagram package.
- Shared component, renderer, route, or data-model changes.
- Rewriting the existing lectures 1–10 topic pages except for a concrete integration defect discovered during validation.
- Material from lectures after lecture 17 or external textbook expansion beyond brief prerequisite scaffolding.

## Verification

- Run the new Mathematical Physics content validator across all 30 pages.
- Semantically inspect prepared mathematics in addition to relying on MDX compilation.
- Run the Academy question-registry check, lint, and production build.
- Run workspace formatting checks relevant to changed files and `git diff --check` where repository metadata is available.
- Review all 15 new pages against their cited lecture ranges and the maths content, pedagogy, clarity, and LaTeX rubrics.
- Confirm unrelated existing work remains unchanged.

## Success Criteria

- The course exposes 30 navigable, uniquely registered topic pages.
- All 15 new pages are substantive, self-contained, source-aligned, and usable without a lecturer.
- Laplace, vector-calculus, integration, and theorem derivations are mathematically correct and state their assumptions.
- Every page follows the approved Academy maths layout and contains two progressive, fully worked examples.
- Approved graphs render with useful labels and explanation; no unapproved custom asset is introduced.
- The course validator, Academy static checks, and production build pass with no unresolved critical or important content findings.

## Decisions

- Add 15 new pages, bringing the course total to 30.
- Organise the content into two new modules and six new sections.
- Treat the Rankine vortex as the culminating Stokes/circulation application on one page.
- Use standard Academy Cartesian graphs only and defer custom diagrams.
- Extend the current structure, registry, and route generation rather than creating parallel systems.

## Open Questions

None.
