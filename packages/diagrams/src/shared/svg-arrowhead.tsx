type SvgArrowheadProps = {
  angle: number;
  baseX: number;
  baseY: number;
  color?: string;
  halfWidth?: number;
  length?: number;
};

export function SvgArrowhead({
  angle,
  baseX,
  baseY,
  color = "var(--foreground)",
  halfWidth = 5,
  length = 10,
}: SvgArrowheadProps) {
  const radians = (angle * Math.PI) / 180;
  const directionX = Math.cos(radians);
  const directionY = Math.sin(radians);
  const perpendicularX = -directionY;
  const perpendicularY = directionX;

  return (
    <polygon
      fill={color}
      points={`${length},0 0,-${halfWidth} 0,${halfWidth}`}
      transform={`matrix(${directionX} ${directionY} ${perpendicularX} ${perpendicularY} ${baseX} ${baseY})`}
    />
  );
}
