export default function AnnotationLabel({
  viewBox,
  label,
  sublabel,
  color,
  yOffset = 0,
  flipToLeft = false,
}) {
  if (!viewBox) return null;
  const { x, y } = viewBox;
  const tx = flipToLeft ? x - 4 : x + 4;
  const anchor = flipToLeft ? 'end' : 'start';
  return (
    <g>
      <text
        x={tx}
        y={y + 16 + yOffset}
        fill={color}
        fontSize={10}
        fontFamily="var(--mono)"
        fontWeight="600"
        textAnchor={anchor}
      >
        {label}
      </text>
      {sublabel && (
        <text
          x={tx}
          y={y + 28 + yOffset}
          fill={color}
          fontSize={9}
          fontFamily="var(--mono)"
          opacity={0.8}
          textAnchor={anchor}
        >
          {sublabel}
        </text>
      )}
    </g>
  );
}
