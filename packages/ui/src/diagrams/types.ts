export type Point2D = {
  x: number;
  y: number;
};

export type AxisRange = {
  label?: string;
  max: number;
  min: number;
  step?: number;
  ticks?: Array<{ label?: string; value: number }>;
};

export type Padding = {
  bottom: number;
  left: number;
  right: number;
  top: number;
};
