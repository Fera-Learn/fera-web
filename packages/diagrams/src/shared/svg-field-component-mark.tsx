type SvgFieldComponentMarkProps = {
  color: string;
  x: number;
  y: number;
};

export function SvgNormalMark({ color, x, y }: SvgFieldComponentMarkProps) {
  return (
    <path
      d={`M ${x} ${y} L ${x + 10} ${y} M ${x + 5} ${y} L ${x + 5} ${y + 9}`}
      fill="none"
      stroke={color}
      strokeWidth="1.4"
    />
  );
}

export function SvgParallelMark({ color, x, y }: SvgFieldComponentMarkProps) {
  return (
    <path
      d={`M ${x + 2} ${y} L ${x + 2} ${y + 10} M ${x + 8} ${y} L ${x + 8} ${y + 10}`}
      fill="none"
      stroke={color}
      strokeWidth="1.4"
    />
  );
}
