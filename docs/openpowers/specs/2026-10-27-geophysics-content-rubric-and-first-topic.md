# Geophysics Content Rubric And First Topic Specification

## Goal

Define a focused, reusable content and page-layout rubric for `Level 2 - Geophysics`, then use it to author the first topic page, `Environmental Geophysics and Soil Interfaces`, as the reference implementation for later pages in the course.

## Scope

This phase will:

- Add one geophysics-specific rubric at `.agents/rubrics/courses/geophysics/content.md`.
- Author the first topic body at `apps/academy/src/lib/docs/level-2-geophysics/soil-systems-and-origins/environmental-geophysics-and-soil-interfaces/content.ts`.
- Add a course-local topic-body registry and connect it to the existing empty topic-page construction.
- Redraw one exact source diagram from `resources/geophysics/lecture1.pptx`, slide 3, and register it in the shared diagrams package.
- Add focused validation for the geophysics diagram and first topic.
- Complete the production-build verification that was interrupted during the course-scaffold phase.

The remaining 57 topic pages stay empty.

## Rubric Scope And Relationship

The new rubric applies only to Level 2 - Geophysics topic pages. Its field-learning sequence is an explicit course-specific replacement for the physics rubric's section sequence; it extends all other requirements from:

- `.agents/rubrics/courses/physics/content.md`
- `.agents/rubrics/courses/shared/pedagogy.md`
- `.agents/rubrics/courses/shared/clarity.md`
- `.agents/rubrics/courses/shared/latex.md`
- `.agents/rubrics/diagram-redraw.md` when a page contains a redrawn source diagram

The rubric will use the required Fera rubric structure: purpose, operational evaluation criteria with requirements and failure conditions, and Excellent/Acceptable/Poor scoring guidance.

## Required Geophysics Page Layout

Every substantive geophysics topic page will use this visible sequence:

1. `## The Field Problem`
2. `## What Changes Underground`
3. `## How We Detect It`
4. `## What the Evidence Means`
5. One `<PhysicsExamples collapsible>` component containing exactly two tabbed examples

The page title, description, course/section badge, question action, contents navigation, and previous/next links remain supplied by the shared Academy shell.

No standalone Notation, Principle, Core Method, Summary, Checks, Mistake Filter, Pitfalls, Worked Cases, Learning Objectives, or Examples heading will be added. Symbols must be introduced inline immediately before use. Learning goals, cautions, assumptions, and takeaways must be integrated into the required sequence.

## Geophysics Teaching Sequence

The rubric will require pages to follow the human learning sequence of concrete problem, causal ground model, observation, judgment, and practice:

1. **Field observation or environmental decision**: begin with something the learner can picture, measure, or decide.
2. **Target and scale**: identify the material, process, interface, and spatial/temporal scale being investigated.
3. **Property contrast**: state which physical or chemical property changes across the target and why.
4. **Measurement or calculation**: explain what is measured directly and how the value, map, section, or model is obtained.
5. **Calibration and support**: connect spatial geophysical data to samples, cores, boreholes, probes, laboratory measurements, or repeated observations where applicable.
6. **Interpretation**: distinguish the observation from the inferred environmental explanation.
7. **Non-uniqueness and uncertainty**: name plausible alternative causes, resolution limits, scale mismatch, and the evidence needed to discriminate among interpretations.

Not every page needs a named geophysical instrument, but every page must explain how its soil, water, or chemical concept affects an environmental observation or a geophysical interpretation.

## Rubric Evaluation Criteria

The geophysics rubric will contain focused criteria for:

- Layout and component compliance.
- Learner-first field or environmental opening.
- Target, interface, and property-contrast definition.
- Scale, support volume, and spatial/temporal representativeness.
- Separation of direct measurements, calculated proxies, models, and interpretations.
- Calibration, ground truth, and complementary evidence.
- Non-uniqueness, uncertainty, and limits of resolution.
- Geophysical maps, cross-sections, profiles, graphs, tables, and source-faithful diagrams.
- Quantitative correctness, units, notation, sign/direction conventions, and meaningful derivation steps.
- Self-contained transformation of lectures and practical prompts into standalone instruction.
- Two progressive examples that exercise interpretation as well as recall or calculation.

## First Topic Learning Design

### Topic

`Environmental Geophysics and Soil Interfaces`

### Source Coverage

Use `lecture1.pptx`, principally slides 2-11:

- Environmental challenges including contaminated land, groundwater, drought and crops, carbon capture, permafrost thaw, and ground-source heat pumps.
- The workflow connecting geophysical tools to defining, measuring, predicting, and finding solutions for environmental challenges.
- Interfaces between low/high oxygen, frozen/thawed, dry/wet, and low/high heat-transmitting environments.
- The role of soil formation, profiles, properties, processes, and functioning.

Slides are authoritative for scope and examples, but the page must not copy their reveal order, lecturer references, or dependence on later practicals.

### The Field Problem

Open with a field-scale observation: neighbouring ground can behave differently during the same rain, drought, freeze, or contamination event because a boundary separates materials or states with different properties.

Explain an interface in ordinary language before using it technically. Establish the central claim: environmental geophysics is useful when a target interface creates a measurable physical-property contrast.

### What Changes Underground

Explain the target interface and use only the minimal notation needed to express a contrast:

- `p_1`: value of a selected physical property on side 1 of an interface.
- `p_2`: value on side 2.
- `\Delta p=p_2-p_1`: signed property contrast.

Define each symbol in prose immediately before the equation. The notation must be presented as generic and must not imply that unlike properties can share one unit. The prose and examples must always name the selected property and its units when numerical values are used.

### How We Detect It

Teach a compact observation workflow:

1. State the environmental question.
2. Identify the target interface and its scale.
3. Choose the property expected to change.
4. Decide what observation could respond to that contrast.
5. Calibrate or check with direct evidence.

Introduce the signed contrast as:

```text
Delta p = p2 - p1
```

Explain that the magnitude controls detectability while the sign records which side has the larger value under the declared side convention. A nonzero contrast is necessary for an interface to affect a property-sensitive measurement, but does not guarantee detection because scale, depth, noise, and resolution also matter.

Include a compact comparison table with source-grounded examples under `What Changes Underground`:

- Low/high oxygen and metal release in contaminated soil.
- Frozen/thawed ground and permafrost change.
- Dry/wet soil and plant access to water.
- Low/high heat transmission and ground-source heat-pump decisions.

The table must distinguish environmental question, target interface, changing property/state, and why the distinction matters.

### What the Evidence Means

Show the inference chain from interface to property contrast to measured response to environmental interpretation. State explicitly that an observation is not a unique explanation, then integrate alternative causes, resolution limits, scale mismatch, and the direct evidence needed to discriminate among interpretations.

### Diagram

Create `environmental-geophysics-workflow.tsx` with slug `environmental-geophysics-workflow`.

Exact reference: `resources/geophysics/lecture1.pptx#slide=3`.

Preserve:

- The vertical arrangement.
- Bottom label: `Geophysical tools`.
- Middle label: `Define, measure, predict and find solutions`.
- Top label: `Environmental challenges`.
- Two upward arrows connecting the three levels.

Do not add labels, icons, examples, boxes, or decorative scenery inside the SVG. Use the shared base-anchored arrowhead helper, theme-safe colours, responsive sizing, and a concise caption outside the SVG.

### Examples

Use exactly two tabs:

1. **A dry-wet root-zone interface**: directly apply the workflow to a crop-water problem, identifying the target, scale, property contrast, supporting measurement, and justified conclusion.
2. **A non-unique conductive zone**: show why one mapped contrast cannot by itself distinguish wet soil, clay-rich soil, and saline pore water; require samples or point sensors before selecting an environmental explanation.

Both answers must state the reasoning strategy and end with a specific interpretation, not merely repeat definitions.

## Integration

Create `apps/academy/src/lib/docs/level-2-geophysics/content.ts` with a single map entry for the exact first-topic title. Update `apps/academy/src/lib/docs/pages.ts` so every geophysics topic looks up its optional body from this map. The first route becomes substantive; all unmatched routes retain the existing empty-body fallback.

Register the new diagram in `packages/diagrams/src/physics/registry.ts` and use it through `<PhysicsDiagram slug="environmental-geophysics-workflow" />` in the topic body.

## Verification

- Validate the rubric against `.agents/rubrics/create-a-rubric.md` and check that it does not conflict with the shared physics layout.
- Confirm only the first geophysics topic has a non-empty body and the other 57 remain empty.
- Confirm the first page has the exact geophysics heading order, no standalone Notation component, one collapsible PhysicsExamples component, and exactly two examples.
- Confirm all symbols are defined before use and `String.raw`/MDX/LaTeX escaping is correct.
- Validate the diagram's exact reference mapping, three labels, two arrows, source registration, and page usage.
- Run diagram lint and type checks, Academy question-registry checks, Academy lint, and the Academy production build.
- Run `git diff --check` and review the final diff for unrelated changes.
- Because browser review requires explicit approval, offer a rendered visual review after code and static checks pass rather than assuming permission.

## Out Of Scope

- Content for the other 57 geophysics topics.
- Practice-question JSON, exam papers, equation sheets, or bespoke flashcards.
- More than one diagram.
- Redesigning shared Academy components or changing the physics-page layout for other courses.
- Adding material from environmental-geophysics lectures 5-9, which are not in the supplied source set.

## Success Criteria

- A narrowly scoped geophysics rubric gives operational, reusable page-layout and interpretation standards.
- The first topic is self-contained, concise, source-aligned, visually supported, and usable without a lecturer.
- The lesson clearly distinguishes target interface, property contrast, direct evidence, and interpretation.
- The diagram visibly and structurally matches the approved source slide.
- Only the intended first topic changes from empty to substantive.
- Required static checks and production build pass, with any visual-review limitation explicitly reported.

## Decisions

- The rubric is geophysics-specific.
- The geophysics-specific field-learning sequence replaces the equations-first physics page shape for this course.
- The first topic includes one exact source-faithful diagram and one compact comparison table.
- Diagram reference is `lecture1.pptx`, slide 3.
- Remaining geophysics pages stay empty.

## Open Questions

None.
