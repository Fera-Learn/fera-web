"use client";

import { createContext, useContext } from "react";
import type { AxisRange } from "./types";

export type GridContextValue = {
  toX: (value: number) => number;
  toY: (value: number) => number;
  xRange: AxisRange;
  yRange: AxisRange;
};

export const GridContext = createContext<GridContextValue | null>(null);

export function useGridContext() {
  const context = useContext(GridContext);

  if (!context) {
    throw new Error("Grid overlay components must be children of <CartesianGrid>");
  }

  return context;
}
