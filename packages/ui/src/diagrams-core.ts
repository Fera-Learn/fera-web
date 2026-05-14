export type Point2D = {
  color?: string;
  id?: string;
  label?: string;
  x: number;
  y: number;
};

export type Vector2D = {
  color?: string;
  from?: Point2D;
  label?: string;
  to: Point2D;
};

export type Curve2D = {
  color?: string;
  dashed?: boolean;
  id?: string;
  label?: string;
  points: Point2D[];
  smooth?: boolean;
};

export type AxisTick = {
  label?: string;
  value: number;
};

export type AxisRange = {
  label?: string;
  max: number;
  min: number;
  step?: number;
  ticks?: AxisTick[];
};

export type Region2D = {
  baseline?: number;
  color?: string;
  curve?: string;
  fromX?: number;
  label?: string;
  points?: Point2D[];
  toX?: number;
};

export type Annotation = {
  align?: "center" | "end" | "start";
  label: string;
  offset?: { x: number; y: number };
  point: Point2D;
};

export type LinearScaleOptions = {
  clamp?: boolean;
  domain: [number, number];
  range: [number, number];
};

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function round(value: number, precision = 6) {
  const factor = 10 ** precision;
  const rounded = Math.round(value * factor) / factor;

  return Object.is(rounded, -0) ? 0 : rounded;
}

export function roundPoint(point: Point2D, precision = 6): Point2D {
  return {
    ...point,
    x: round(point.x, precision),
    y: round(point.y, precision),
  };
}

export function createLinearScale({
  clamp: shouldClamp = false,
  domain,
  range,
}: LinearScaleOptions) {
  const [domainMin, domainMax] = domain;
  const [rangeMin, rangeMax] = range;

  return (value: number) => {
    const resolvedValue = shouldClamp
      ? clamp(value, Math.min(domainMin, domainMax), Math.max(domainMin, domainMax))
      : value;
    const progress = (resolvedValue - domainMin) / (domainMax - domainMin);

    return round(rangeMin + progress * (rangeMax - rangeMin));
  };
}

export function formatTick(value: number) {
  if (Math.abs(value) < 1e-9) {
    return "0";
  }

  if (Number.isInteger(value)) {
    return String(value);
  }

  return value.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}

export function rangeTicks({ min, max, step, ticks }: AxisRange) {
  if (ticks?.length) {
    return ticks;
  }

  if (max <= min) {
    return [{ value: min }];
  }

  const resolvedStep = step ?? (max - min) / 4;

  if (resolvedStep <= 0) {
    return [{ value: min }, { value: max }];
  }

  const resolvedTicks: AxisTick[] = [];
  const epsilon = 1e-9;
  const start = Math.ceil((min - epsilon) / resolvedStep) * resolvedStep;

  for (
    let value = start;
    value <= max + epsilon;
    value += resolvedStep
  ) {
    const rounded = round(value, 8);

    resolvedTicks.push({ value: rounded > max ? max : rounded });
  }

  return resolvedTicks;
}

export function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angle: number,
) {
  const radians = (angle * Math.PI) / 180;

  return {
    x: centerX + radius * Math.cos(radians),
    y: centerY - radius * Math.sin(radians),
  };
}

function interpolatePointAtX(start: Point2D, end: Point2D, x: number): Point2D | null {
  if (start.x === end.x) {
    return null;
  }

  if (start.x === x) {
    return start;
  }

  if (end.x === x) {
    return end;
  }

  const segmentMin = Math.min(start.x, end.x);
  const segmentMax = Math.max(start.x, end.x);

  if (x < segmentMin || x > segmentMax) {
    return null;
  }

  const progress = (x - start.x) / (end.x - start.x);

  return roundPoint({
    x,
    y: start.y + (end.y - start.y) * progress,
  });
}

function pushUniquePoint(points: Point2D[], point: Point2D) {
  const previous = points[points.length - 1];

  if (previous && previous.x === point.x && previous.y === point.y) {
    return;
  }

  points.push(point);
}

export function clippedCurvePoints(points: Point2D[], fromX?: number, toX?: number) {
  if (points.length === 0) {
    return [];
  }

  const lowerBound = fromX ?? -Infinity;
  const upperBound = toX ?? Infinity;

  if (upperBound < lowerBound) {
    return [];
  }

  const clippedPoints: Point2D[] = [];

  if (points.length === 1) {
    const point = points[0]!;

    return point.x >= lowerBound && point.x <= upperBound ? [point] : [];
  }

  for (let index = 0; index < points.length - 1; index += 1) {
    const start = points[index]!;
    const end = points[index + 1]!;
    const candidates: Array<{ point: Point2D; progress: number }> = [];
    const addCandidate = (point: Point2D, progress: number) => {
      if (point.x >= lowerBound && point.x <= upperBound) {
        candidates.push({ point, progress });
      }
    };

    if (index === 0) {
      addCandidate(start, 0);
    }

    if (fromX !== undefined) {
      const boundary = interpolatePointAtX(start, end, fromX);

      if (boundary) {
        addCandidate(boundary, start.x === end.x ? 0 : (fromX - start.x) / (end.x - start.x));
      }
    }

    addCandidate(end, 1);

    if (toX !== undefined) {
      const boundary = interpolatePointAtX(start, end, toX);

      if (boundary) {
        addCandidate(boundary, start.x === end.x ? 1 : (toX - start.x) / (end.x - start.x));
      }
    }

    candidates
      .sort((first, second) => first.progress - second.progress)
      .forEach(({ point }) => pushUniquePoint(clippedPoints, point));
  }

  return clippedPoints;
}

function cubicPoint(
  start: Point2D,
  control1: Point2D,
  control2: Point2D,
  end: Point2D,
  progress: number,
) {
  const inverse = 1 - progress;

  return roundPoint({
    x:
      inverse ** 3 * start.x +
      3 * inverse ** 2 * progress * control1.x +
      3 * inverse * progress ** 2 * control2.x +
      progress ** 3 * end.x,
    y:
      inverse ** 3 * start.y +
      3 * inverse ** 2 * progress * control1.y +
      3 * inverse * progress ** 2 * control2.y +
      progress ** 3 * end.y,
  });
}

export function sampleSmoothCurvePoints(points: Point2D[], samplesPerSegment = 12) {
  if (points.length < 3 || samplesPerSegment < 2) {
    return points;
  }

  const sampledPoints: Point2D[] = [points[0]!];
  const tension = 0.18;

  for (let index = 0; index < points.length - 1; index += 1) {
    const previous = points[Math.max(0, index - 1)]!;
    const current = points[index]!;
    const next = points[index + 1]!;
    const afterNext = points[Math.min(points.length - 1, index + 2)]!;
    const control1 = {
      x: current.x + (next.x - previous.x) * tension,
      y: current.y + (next.y - previous.y) * tension,
    };
    const control2 = {
      x: next.x - (afterNext.x - current.x) * tension,
      y: next.y - (afterNext.y - current.y) * tension,
    };

    for (let step = 1; step <= samplesPerSegment; step += 1) {
      pushUniquePoint(
        sampledPoints,
        cubicPoint(current, control1, control2, next, step / samplesPerSegment),
      );
    }
  }

  return sampledPoints;
}

export function cartesianCurvePath(
  points: Point2D[],
  toX: (x: number) => number,
  toY: (y: number) => number,
  smooth = false,
) {
  return cartesianCurveSegmentPath(points, toX, toY, smooth);
}

function segmentBounds(points: Point2D[], startIndex = 0, endIndex = points.length - 1) {
  const lastIndex = points.length - 1;
  const start = Math.min(Math.max(Math.trunc(startIndex), 0), lastIndex);
  const end = Math.min(Math.max(Math.trunc(endIndex), start), lastIndex);

  return { end, start };
}

function cartesianCurveSegmentPath(
  points: Point2D[],
  toX: (x: number) => number,
  toY: (y: number) => number,
  smooth = false,
  startIndex = 0,
  endIndex = points.length - 1,
) {
  if (points.length === 0) {
    return "";
  }

  const { end, start } = segmentBounds(points, startIndex, endIndex);

  if (!smooth || points.length < 3) {
    return points
      .slice(start, end + 1)
      .map((point, pointIndex) => {
        const command = pointIndex === 0 ? "M" : "L";

        return `${command} ${toX(point.x)} ${toY(point.y)}`;
      })
      .join(" ");
  }

  const path = [`M ${toX(points[start]!.x)} ${toY(points[start]!.y)}`];

  for (let index = start; index < end; index += 1) {
    const previous = points[Math.max(0, index - 1)]!;
    const current = points[index]!;
    const next = points[index + 1]!;
    const afterNext = points[Math.min(points.length - 1, index + 2)]!;
    const tension = 0.18;
    const control1 = {
      x: toX(current.x) + (toX(next.x) - toX(previous.x)) * tension,
      y: toY(current.y) + (toY(next.y) - toY(previous.y)) * tension,
    };
    const control2 = {
      x: toX(next.x) - (toX(afterNext.x) - toX(current.x)) * tension,
      y: toY(next.y) - (toY(afterNext.y) - toY(current.y)) * tension,
    };

    path.push(
      `C ${control1.x} ${control1.y} ${control2.x} ${control2.y} ${toX(
        next.x,
      )} ${toY(next.y)}`,
    );
  }

  return path.join(" ");
}

export function regionPath(
  points: Point2D[],
  baseline: number,
  toX: (x: number) => number,
  toY: (y: number) => number,
  smooth = false,
  segment?: { endIndex: number; points: Point2D[]; startIndex: number },
) {
  const pathPoints = segment?.points ?? points;

  if (points.length === 0 || pathPoints.length === 0) {
    return "";
  }

  const { end, start } = segmentBounds(pathPoints, segment?.startIndex, segment?.endIndex);
  const path = segment
    ? cartesianCurveSegmentPath(pathPoints, toX, toY, smooth, start, end)
    : cartesianCurvePath(points, toX, toY, smooth);
  const first = pathPoints[start]!;
  const last = pathPoints[end]!;
  const baselineY = toY(baseline);

  return `${path} L ${toX(last.x)} ${baselineY} L ${toX(first.x)} ${baselineY} Z`;
}

export function normalizeSvgLabel(value: string) {
  return value
    .replace(/\\vec\{([^}]+)\}/g, "$1")
    .replace(/\\vec\s*([A-Za-z])/g, "$1")
    .replace(/\\hat\{\\?([^}]+)\}/g, "$1-hat")
    .replace(/\\hat\s*([A-Za-z])/g, "$1-hat")
    .replace(/\\mathrm\{([^}]+)\}/g, "$1")
    .replace(/\\text\{([^}]+)\}/g, "$1")
    .replace(/\\Delta/g, "\u0394")
    .replace(/\\theta/g, "\u03b8")
    .replace(/\\alpha/g, "\u03b1")
    .replace(/\\omega/g, "\u03c9")
    .replace(/\\tau/g, "\u03c4")
    .replace(/\\pi/g, "\u03c0")
    .replace(/\\sum/g, "\u03a3")
    .replace(/\\perp/g, "\u22a5")
    .replace(/\\sin/g, "sin")
    .replace(/\\cos/g, "cos")
    .replace(/\\_/g, "_")
    .replace(/\s+/g, " ")
    .trim();
}
