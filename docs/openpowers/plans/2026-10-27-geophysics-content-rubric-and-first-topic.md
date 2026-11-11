# Geophysics Content Rubric And First Topic Plan

## 1. Add The Geophysics Content Rubric

Create `.agents/rubrics/courses/geophysics/content.md` using the structure required by `.agents/rubrics/create-a-rubric.md`:

- State that it applies only to substantive `Level 2 - Geophysics` topic pages.
- Explicitly replace only the physics rubric's section sequence with the geophysics field-learning sequence while extending its other content requirements and the shared pedagogy, clarity, LaTeX, and diagram-redraw rubrics.
- Define operational requirements and failure conditions for:
  - The fixed `The Field Problem` → `What Changes Underground` → `How We Detect It` → `What the Evidence Means` → one collapsible two-tab `PhysicsExamples` sequence.
  - A learner-first field observation or environmental decision.
  - Target material or process, interface, spatial/temporal scale, and physical-property contrast.
  - Direct measurements, calculated proxies, models, and environmental interpretations as distinct evidence levels.
  - Calibration, ground truth, complementary evidence, support volume, and representativeness.
  - Non-uniqueness, uncertainty, detectability, and resolution limits.
  - Quantitative correctness, units, sign/direction conventions, maps, profiles, cross-sections, tables, and source-faithful diagrams.
  - Self-contained transformation of lecturer-dependent slides into concise instruction.
  - Exactly two progressive examples that state strategy and interpretation.
- End with measurable `Excellent`, `Acceptable`, and `Poor` scoring guidance.

Review the finished rubric against the creation guide and parent rubrics to remove conflicts, vague criteria, and requirements already fully covered by a parent rubric.

## 2. Implement The Source-Faithful Workflow Diagram

Create `packages/diagrams/src/physics/diagrams/environmental-geophysics-workflow.tsx` from the exact reference `resources/geophysics/lecture1.pptx#slide=3`.

Use the existing diagram architecture instead of adding a geophysics-only renderer or new shared primitives:

- Wrap the SVG in `PhysicsDiagramFrame`.
- Use the shared base-anchored `SvgArrowhead` helper for both upward arrows.
- Use `SvgLabel` or the established accessible SVG text pattern for the three source-visible labels.
- Reproduce only the source's vertical hierarchy:
  - `Geophysical tools` at the bottom.
  - `Define, measure, predict and find solutions` in the middle.
  - `Environmental challenges` at the top.
  - Two upward arrows connecting the three levels.
- Keep source text verbatim, geometry responsive, colours theme-safe, and caption text outside the SVG.
- Do not add inferred examples, icons, boxes, scenery, or extra labels.
- Export metadata with slug `environmental-geophysics-workflow`, an `interaction` kind supported by the existing type, and the exact source reference.

Update `packages/diagrams/src/physics/registry.ts` to import and register this definition. Do not create a parallel registry or alter shared diagram APIs.

## 3. Author The First Topic Body

Create:

`apps/academy/src/lib/docs/level-2-geophysics/soil-systems-and-origins/environmental-geophysics-and-soil-interfaces/content.ts`

Export one `String.raw` body using only the approved visible structure:

1. `## The Field Problem`
2. `## What Changes Underground`
3. `## How We Detect It`
4. `## What the Evidence Means`
5. One `<PhysicsExamples collapsible>` with exactly two items

Transform `lecture1.pptx`, principally slides 2–11, into a concise, self-contained lesson:

- Begin with neighbouring ground responding differently to the same rain, drought, freeze, or contamination event.
- Define an interface in ordinary language before introducing technical interpretation.
- Establish that environmental geophysics depends on a target interface creating a measurable physical-property contrast.
- Define `p_1`, `p_2`, and the signed contrast `\Delta p=p_2-p_1` inline immediately before use; explain that the generic property must be named with its own units in every numerical context.
- Present a compact observation workflow from question and target selection through calibration.
- Explain separately what contrast magnitude and sign mean, and why nonzero contrast does not guarantee detectability.
- Introduce and embed `<PhysicsDiagram slug="environmental-geophysics-workflow" />`, then tell the learner what relationship to notice.
- Add one compact GFM table comparing low/high oxygen, frozen/thawed, dry/wet, and low/high heat-transmission interfaces by environmental question, target interface, changing property or state, and decision relevance.
- Use `What the Evidence Means` to distinguish the observation from the environmental explanation and integrate scale, support evidence, non-uniqueness, and uncertainty.
- Add the approved dry-wet root-zone example followed by the non-unique conductive-zone example. Each answer must state its strategy, show the necessary reasoning, and finish with a bounded interpretation.

Check MDX and LaTeX in their exact contexts: doubled raw-markdown delimiters, single TeX command backslashes inside those delimiters and quoted component attributes, and escaped backslashes in JavaScript strings inside component props.

## 4. Register Only The First Topic Body

Create `apps/academy/src/lib/docs/level-2-geophysics/content.ts` following the existing Level 2 topic-body map pattern:

- Import the first topic's `content` value.
- Export `level2GeophysicsTopicBodies` as a `Map<string, string>`.
- Add exactly one entry keyed by `Environmental Geophysics and Soil Interfaces`.

Update `apps/academy/src/lib/docs/pages.ts` to import this map and set each geophysics topic page's body from `level2GeophysicsTopicBodies.get(topic.title)`.

Preserve the existing undefined-body behavior for unmatched titles. Do not create content files, placeholders, or empty registry entries for the other 57 topics.

## 5. Add Focused Static Validation

Create `apps/academy/scripts/validate-level-2-geophysics-content.mjs`, reusing the established content-validation approach where practical, to assert:

- Exactly one geophysics topic `content.ts` file exists beneath section directories.
- The registry has exactly one matching import and map entry.
- The registered title exists exactly once in the approved 58-topic structure.
- The remaining 57 topics are absent from the body map and retain undefined bodies.
- Heading order is exactly `The Field Problem`, `What Changes Underground`, `How We Detect It`, `What the Evidence Means`, with physics-layout and auxiliary headings absent.
- There is no standalone `Notation`, and there is exactly one collapsible `PhysicsExamples` with exactly two example items.
- The required workflow diagram and compact comparison table are present.
- Dollar math delimiters, incorrect backslash contexts, and malformed prepared math are rejected.
- The prepared MDX compiles with the existing `prepareMdxBody`, MDX compiler, and GFM plugin.

Create `apps/academy/scripts/validate-level-2-geophysics-diagrams.mjs` to assert:

- The expected diagram file exists.
- Metadata contains the exact slug and `resources/geophysics/lecture1.pptx#slide=3` reference.
- All three source-visible labels occur and no approved label is missing.
- Exactly two arrowhead-terminated connector lines are represented.
- The shared diagram frame and base-anchored arrowhead helper are used.
- The diagram is imported and included once in the shared registry.
- The first topic uses the registered slug once.
- No duplicate diagram slug exists across the physics diagram directory.

Add `check:geophysics-content` and `check:geophysics-diagrams` scripts to `apps/academy/package.json`. Keep the validators course-scoped; do not add geophysics special cases to the mature Physics A or Physics B validators.

## 6. Verify And Review

Run from the workspace root:

```sh
pnpm --filter @repo/diagrams lint
pnpm --filter @repo/diagrams check-types
pnpm --filter academy check:geophysics-content
pnpm --filter academy check:geophysics-diagrams
pnpm --filter academy check:questions
pnpm --filter academy lint
pnpm --filter academy build
git diff --check
```

Then perform manual source and implementation review:

- Compare the diagram geometry, hierarchy, labels, and arrow direction directly with slide 3.
- Compare lesson claims and examples with Lecture 1 slides 2–11; remove unsupported claims or make necessary interpretive limits explicit.
- Confirm the page is self-contained, learner-first, concise, and compliant with the new rubric and all parent rubrics.
- Confirm only the intended first topic has substantive content and all other topic routes remain empty shells.
- Review the complete diff for unrelated or accidental changes.

After static checks pass, request explicit permission for browser review. If approved, render the exact first-topic route, capture the page and diagram, inspect desktop and narrow layouts, verify math/table/example behavior and dark/light theme legibility, and fix any visual defects before final completion. Do not claim rendered visual verification if permission is not granted.

## Expected File Impact

New files:

- `.agents/rubrics/courses/geophysics/content.md`
- `packages/diagrams/src/physics/diagrams/environmental-geophysics-workflow.tsx`
- `apps/academy/src/lib/docs/level-2-geophysics/content.ts`
- `apps/academy/src/lib/docs/level-2-geophysics/soil-systems-and-origins/environmental-geophysics-and-soil-interfaces/content.ts`
- `apps/academy/scripts/validate-level-2-geophysics-content.mjs`
- `apps/academy/scripts/validate-level-2-geophysics-diagrams.mjs`

Updated files:

- `packages/diagrams/src/physics/registry.ts`
- `apps/academy/src/lib/docs/pages.ts`
- `apps/academy/package.json`

Planning artifacts:

- `docs/openpowers/specs/2026-10-27-geophysics-content-rubric-and-first-topic.md`
- `docs/openpowers/plans/2026-10-27-geophysics-content-rubric-and-first-topic.md`

## Code Quality Controls

- Reuse the shared page renderer, MDX components, diagram frame, label and arrow helpers, topic-body map convention, and prepared-MDX validation utilities.
- Keep the rubric, diagram, content, registry, and validators in their established single-responsibility locations.
- Add no shared component, hook, service, type, renderer, or abstraction for a one-page requirement.
- Keep the first-topic registry sparse so future pages can be added without changing routing architecture.
- Keep source-fidelity checks declarative and course-scoped rather than coupling unrelated course validators.

## Risks And Controls

- **Accidental content on all routes:** use a one-entry map and preserve `Map.get()` returning `undefined`; assert one populated and 57 empty topics.
- **Diagram drift from the source:** limit SVG content to the three exact labels and two upward arrows; compare directly with slide 3 and require a browser review before claiming visual verification.
- **Unsupported geophysical specificity:** anchor lesson scope in Lecture 1 and clearly distinguish illustrative interpretation from a unique diagnosis.
- **Generic property notation implying shared units:** state that `p` represents one selected property at a time and require that property's name and units in numerical use.
- **Overstated detectability:** separate contrast existence from instrument response, target scale, depth, noise, and resolution.
- **Raw or malformed mathematics:** validate source escaping, prepared MDX, and semantic output rather than relying only on a successful build.
- **Validator duplication:** adapt the established Physics B validation shape but keep only checks needed for this sparse course phase.
- **Existing uncommitted scaffold work:** modify only approved files, inspect surrounding changes before editing, and never revert or overwrite unrelated work.
