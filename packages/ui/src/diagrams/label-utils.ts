export type LabelBox = {
  height: number;
  width: number;
  x: number;
  y: number;
};

export function estimateLabelWidth(text: string): number {
  return text.length * 6.5 + 4;
}

export const LABEL_HEIGHT = 18;
export const LABEL_GAP = 4;

export function boxesOverlap(a: LabelBox, b: LabelBox) {
  return !(
    a.x + a.width + LABEL_GAP < b.x ||
    b.x + b.width + LABEL_GAP < a.x ||
    a.y + a.height + LABEL_GAP < b.y ||
    b.y + b.height + LABEL_GAP < a.y
  );
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
