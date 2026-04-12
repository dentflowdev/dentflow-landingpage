/**
 * Decorative line chart — SVG, no external chart lib. Matches Dentflow palette.
 */
export function ChartLine({ className = '' }) {
  const points = [0, 18, 12, 28, 22, 38, 32, 48, 42, 58, 52, 68];
  const w = 520;
  const h = 120;
  const pad = 8;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const norm = (v) => pad + ((v - min) / (max - min || 1)) * (h - pad * 2);

  const pathD = points
    .map((p, i) => {
      const x = pad + (i / (points.length - 1)) * (w - pad * 2);
      const y = h - norm(p);
      return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');

  const areaD = `${pathD} L ${w - pad} ${h} L ${pad} ${h} Z`;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${w} ${h + 16}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4DA6FF" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#4DA6FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#63C7C0" />
          <stop offset="100%" stopColor="#4DA6FF" />
        </linearGradient>
      </defs>
      <path d={areaD} fill="url(#lineFill)" />
      <path
        d={pathD}
        stroke="url(#lineStroke)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {points.map((p, i) => {
        const x = pad + (i / (points.length - 1)) * (w - pad * 2);
        const y = h - norm(p);
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="3.5"
            fill="#FFFFFF"
            stroke="#4DA6FF"
            strokeWidth="2"
          />
        );
      })}
    </svg>
  );
}
