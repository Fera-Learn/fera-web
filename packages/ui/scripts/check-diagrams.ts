import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

import * as diagramCore from "../src/diagrams-core";
import {
  cartesianCurvePath,
  createLinearScale,
  formatTick,
  polarToCartesian,
  rangeTicks,
  regionPath,
  roundPoint,
} from "../src/diagrams-core";

type ClippedCurvePoints = (
  points: Parameters<typeof regionPath>[0],
  fromX?: number,
  toX?: number,
) => Parameters<typeof regionPath>[0];
type SampleSmoothCurvePoints = (
  points: Parameters<typeof regionPath>[0],
  samplesPerSegment?: number,
) => Parameters<typeof regionPath>[0];

function closeTo(actual: number, expected: number, message: string) {
  assert.ok(Math.abs(actual - expected) < 1e-6, `${message}: ${actual}`);
}

const xScale = createLinearScale({ domain: [-2, 2], range: [20, 220] });
const yScale = createLinearScale({ domain: [-1, 3], range: [180, 20] });

closeTo(xScale(0), 120, "cartesian x origin maps to the plot midpoint");
closeTo(yScale(1), 100, "cartesian y midpoint maps to the plot midpoint");

assert.deepEqual(
  rangeTicks({ min: -2, max: 2, step: 1 }).map((tick) => tick.value),
  [-2, -1, 0, 1, 2],
);

assert.deepEqual(
  rangeTicks({ min: 0, max: 1, step: 0.4 }).map((tick) => tick.value),
  [0, 0.4, 0.8],
);

assert.deepEqual(
  rangeTicks({ min: 0, max: 1, step: 0.6 }).map((tick) => tick.value),
  [0, 0.6],
);

assert.deepEqual(
  rangeTicks({ min: -0.3, max: 0.3, step: 0.1 }).map((tick) => tick.value),
  [-0.3, -0.2, -0.1, 0, 0.1, 0.2, 0.3],
);

assert.ok(
  rangeTicks({ min: 0, max: 1.000000004, step: 0.5000000025 }).every(
    (tick) => tick.value <= 1.000000004,
  ),
);

assert.equal(formatTick(0), "0");
assert.equal(formatTick(1.5), "1.5");
assert.equal(formatTick(1.25), "1.25");

assert.deepEqual(roundPoint(polarToCartesian(100, 100, 50, 0)), {
  x: 150,
  y: 100,
});
assert.deepEqual(roundPoint(polarToCartesian(100, 100, 50, 90)), {
  x: 100,
  y: 50,
});

assert.equal(
  cartesianCurvePath(
    [
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 },
    ],
    xScale,
    yScale,
  ),
  "M 70 140 L 120 100 L 170 140",
);

assert.equal(
  regionPath(
    [
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 },
    ],
    0,
    xScale,
    yScale,
  ),
  "M 70 140 L 120 100 L 170 140 L 170 140 L 70 140 Z",
);

const regionPathWithSmooth = regionPath as (
  points: Parameters<typeof regionPath>[0],
  baseline: Parameters<typeof regionPath>[1],
  toX: Parameters<typeof regionPath>[2],
  toY: Parameters<typeof regionPath>[3],
  smooth: boolean,
) => string;

assert.equal(
  regionPathWithSmooth(
    [
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 },
    ],
    0,
    xScale,
    yScale,
    true,
  ),
  "M 70 140 C 79 132.8 102 100 120 100 C 138 100 161 132.8 170 140 L 170 140 L 70 140 Z",
  "smooth filled regions should trace the same path as their smoothed curve",
);

const boundedSmoothPoints = [
  { x: -2, y: 0 },
  { x: -1, y: 1 },
  { x: 0, y: 0 },
  { x: 1, y: 1 },
];
const regionPathWithSegment = regionPath as (
  points: Parameters<typeof regionPath>[0],
  baseline: Parameters<typeof regionPath>[1],
  toX: Parameters<typeof regionPath>[2],
  toY: Parameters<typeof regionPath>[3],
  smooth: boolean,
  segment: { endIndex: number; points: Parameters<typeof regionPath>[0]; startIndex: number },
) => string;

assert.equal(
  regionPathWithSegment(
    boundedSmoothPoints.slice(1, 3),
    0,
    xScale,
    yScale,
    true,
    { endIndex: 2, points: boundedSmoothPoints, startIndex: 1 },
  ),
  "M 70 100 C 88 100 102 140 120 140 L 120 140 L 70 140 Z",
  "bounded smooth regions should preserve the referenced curve segment controls",
);

const clippedCurvePoints = (diagramCore as { clippedCurvePoints?: ClippedCurvePoints })
  .clippedCurvePoints;

assert.equal(
  typeof clippedCurvePoints,
  "function",
  "bounded regions should interpolate curve points at explicit x bounds",
);
assert.deepEqual(
  clippedCurvePoints?.(
    [
      { x: 0, y: 0 },
      { x: 2, y: 2 },
      { x: 4, y: 0 },
    ],
    1,
    3,
  ),
  [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 1 },
  ],
  "bounded regions should include interpolated boundary points when bounds fall between samples",
);
assert.deepEqual(
  clippedCurvePoints?.(
    [
      { x: 0, y: 0 },
      { x: 4, y: 4 },
    ],
    1,
    3,
  ),
  [
    { x: 1, y: 1 },
    { x: 3, y: 3 },
  ],
  "bounded regions should include both boundaries when no sampled point lies inside the interval",
);
assert.deepEqual(
  clippedCurvePoints?.(
    [
      { x: 1, y: 0 },
      { x: 1, y: 2 },
    ],
    undefined,
    1,
  ),
  [
    { x: 1, y: 0 },
    { x: 1, y: 2 },
  ],
  "bounded regions should not backtrack on vertical segments at a boundary",
);

const sampleSmoothCurvePoints = (diagramCore as { sampleSmoothCurvePoints?: SampleSmoothCurvePoints })
  .sampleSmoothCurvePoints;

assert.equal(
  typeof sampleSmoothCurvePoints,
  "function",
  "smooth clipped regions need sampled points that approximate the rendered curve",
);
assert.ok(
  (sampleSmoothCurvePoints?.(
    [
      { x: 0, y: 0 },
      { x: 2, y: 2 },
      { x: 4, y: 0 },
    ],
    4,
  ).length ?? 0) > 3,
  "smooth curve sampling should add points between original samples",
);

console.log("diagram helper checks passed");

const diagramSource = readFileSync(join(__dirname, "../../src/diagrams.tsx"), "utf8");
const diagramCoreSource = readFileSync(join(__dirname, "../../src/diagrams-core.ts"), "utf8");

assert.match(
  diagramCoreSource,
  /offset\?:\s*\{\s*x:\s*number;\s*y:\s*number\s*\}/,
  "annotations should support an optional x/y label offset for teaching callouts",
);

assert.match(
  diagramSource,
  /annotation\.offset/,
  "CartesianDiagram should render offset annotations away from their target point",
);

assert.match(
  diagramSource,
  /strokeDasharray="3 3"/,
  "offset annotations should draw a subtle leader line back to the target point",
);

assert.match(
  diagramSource,
  /region\.label[\s\S]*SvgLabel/,
  "filled regions should render their labels inside the highlighted area",
);

assert.match(
  diagramSource,
  /regionPath\([^\n]+,\s*baseline,\s*toX,\s*toY,\s*resolved\.smooth,\s*resolved\.segment\)/,
  "CartesianDiagram should pass referenced curve segment context through to filled regions",
);
assert.match(
  diagramSource,
  /sampleSmoothCurvePoints\(curve\.points\)/,
  "curve-backed regions with interpolated bounds should sample smooth curves before clipping",
);
assert.match(
  diagramSource,
  /clippedCurvePoints\(region\.points,\s*region\.fromX,\s*region\.toX\)/,
  "point-backed regions should apply the same fromX/toX clipping as curve-backed regions",
);

assert.match(
  diagramSource,
  /height = 340/,
  "CartesianDiagram should use a taller default frame so charts are not vertically squashed",
);
assert.match(
  diagramSource,
  /<CartesianDiagram[\s\S]*height=\{330\}[\s\S]*width=\{340\}/,
  "ArgandDiagram should use a near-square plot area so modulus rings render as circles",
);
assert.match(
  diagramCoreSource,
  /export type Point2D = \{[\s\S]*color\?: string;/,
  "generic Cartesian points should allow caller-provided colors",
);
assert.match(
  diagramSource,
  /fill=\{point\.color \?\? colorFor\(index \+ curves\.length\)\}/,
  "CartesianDiagram should preserve caller-provided point colors",
);
assert.match(
  diagramSource,
  /color: point\.color,[\s\S]*x: point\.real,/,
  "ArgandDiagram should pass ComplexPoint colors through to Cartesian points",
);

assert.ok(
  !diagramSource.includes('strokeWidth="3"'),
  "SVG labels should not use a 3px outline because it overwhelms small text",
);
assert.ok(
  !diagramSource.includes('paintOrder="stroke"'),
  "SVG labels should render as readable text without a stroke halo",
);
assert.ok(
  diagramSource.includes("text-[10px]") || diagramSource.includes("text-[11px]"),
  "SVG labels should use readable text sizes rather than 6-7px labels",
);

console.log("diagram visual checks passed");
