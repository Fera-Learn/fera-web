"use client";

import { useSyncExternalStore } from "react";
import { MinusIcon, PlusIcon, RotateCcwIcon } from "lucide-react";

import { Button } from "@repo/ui/button";

const PRINT_ZOOM_STORAGE_KEY = "fera-academy-print-preview-zoom";
const PRINT_ZOOM_CHANGE_EVENT = "fera-academy-print-preview-zoom-change";
const PRINT_ZOOM_LEVELS = [75, 90, 100, 110, 125, 150] as const;
const DEFAULT_PRINT_ZOOM = 100;

type PrintZoomLevel = (typeof PRINT_ZOOM_LEVELS)[number];

let fallbackZoom: PrintZoomLevel = DEFAULT_PRINT_ZOOM;

function isPrintZoomLevel(value: number): value is PrintZoomLevel {
  return PRINT_ZOOM_LEVELS.includes(value as PrintZoomLevel);
}

function getAdjacentZoom(zoom: number, direction: -1 | 1) {
  const currentIndex = PRINT_ZOOM_LEVELS.indexOf(
    isPrintZoomLevel(zoom) ? zoom : DEFAULT_PRINT_ZOOM,
  );
  const nextIndex = Math.min(
    Math.max(currentIndex + direction, 0),
    PRINT_ZOOM_LEVELS.length - 1,
  );

  return PRINT_ZOOM_LEVELS[nextIndex];
}

function getStoredZoom(): PrintZoomLevel {
  try {
    const stored = Number(localStorage.getItem(PRINT_ZOOM_STORAGE_KEY));

    if (isPrintZoomLevel(stored)) {
      return stored;
    }
  } catch {
    return fallbackZoom;
  }

  return fallbackZoom;
}

function getDefaultZoom(): PrintZoomLevel {
  return DEFAULT_PRINT_ZOOM;
}

function subscribeToStoredZoom(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === PRINT_ZOOM_STORAGE_KEY) {
      onStoreChange();
    }
  };

  window.addEventListener(PRINT_ZOOM_CHANGE_EVENT, onStoreChange);
  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener(PRINT_ZOOM_CHANGE_EVENT, onStoreChange);
    window.removeEventListener("storage", handleStorage);
  };
}

export function usePrintZoom() {
  const zoom: PrintZoomLevel = useSyncExternalStore(
    subscribeToStoredZoom,
    getStoredZoom,
    getDefaultZoom,
  );

  const setAndPersistZoom = (nextZoom: PrintZoomLevel) => {
    fallbackZoom = nextZoom;

    try {
      localStorage.setItem(PRINT_ZOOM_STORAGE_KEY, String(nextZoom));
    } catch {
      // Keep the current in-memory zoom if storage is unavailable.
    }

    window.dispatchEvent(new Event(PRINT_ZOOM_CHANGE_EVENT));
  };

  return {
    canZoomIn: zoom < PRINT_ZOOM_LEVELS[PRINT_ZOOM_LEVELS.length - 1],
    canZoomOut: zoom > PRINT_ZOOM_LEVELS[0],
    resetZoom: () => setAndPersistZoom(DEFAULT_PRINT_ZOOM),
    setZoom: setAndPersistZoom,
    zoom,
    zoomLevels: PRINT_ZOOM_LEVELS,
    zoomScale: zoom / 100,
    zoomIn: () => setAndPersistZoom(getAdjacentZoom(zoom, 1)),
    zoomOut: () => setAndPersistZoom(getAdjacentZoom(zoom, -1)),
  };
}

type PrintZoomControlsProps = {
  canZoomIn: boolean;
  canZoomOut: boolean;
  onReset: () => void;
  onZoomChange: (zoom: PrintZoomLevel) => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  zoom: PrintZoomLevel;
  zoomLevels: readonly PrintZoomLevel[];
};

export function PrintZoomControls({
  canZoomIn,
  canZoomOut,
  onReset,
  onZoomChange,
  onZoomIn,
  onZoomOut,
  zoom,
  zoomLevels,
}: PrintZoomControlsProps) {
  return (
    <div className="flex items-center gap-1 rounded-md border border-neutral-300 bg-white p-1 text-neutral-950">
      <Button
        aria-label="Zoom out"
        className="size-8 px-0"
        disabled={!canZoomOut}
        onClick={onZoomOut}
        size="icon-sm"
        title="Zoom out"
        type="button"
        variant="ghost"
      >
        <MinusIcon className="size-4" />
      </Button>
      <label className="sr-only" htmlFor="print-preview-zoom">
        Print preview zoom
      </label>
      <select
        className="h-8 rounded-md border border-neutral-300 bg-white px-2 text-xs font-medium text-neutral-950 shadow-sm"
        id="print-preview-zoom"
        onChange={(event) => {
          const nextZoom = Number(event.target.value);

          if (isPrintZoomLevel(nextZoom)) {
            onZoomChange(nextZoom);
          }
        }}
        title="Print preview zoom"
        value={zoom}
      >
        {zoomLevels.map((level) => (
          <option key={level} value={level}>
            {level}%
          </option>
        ))}
      </select>
      <Button
        aria-label="Zoom in"
        className="size-8 px-0"
        disabled={!canZoomIn}
        onClick={onZoomIn}
        size="icon-sm"
        title="Zoom in"
        type="button"
        variant="ghost"
      >
        <PlusIcon className="size-4" />
      </Button>
      <Button
        aria-label="Reset zoom"
        className="size-8 px-0"
        disabled={zoom === DEFAULT_PRINT_ZOOM}
        onClick={onReset}
        size="icon-sm"
        title="Reset zoom"
        type="button"
        variant="ghost"
      >
        <RotateCcwIcon className="size-4" />
      </Button>
    </div>
  );
}
