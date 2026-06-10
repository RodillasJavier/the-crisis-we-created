import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  ReferenceArea,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { tpsLineData, tpsAnnotations } from '../../data/tpsHolders.js';
import AnnotationLabel from './AnnotationLabel.jsx';

// Data spans 1999–2026 (27 years). Annotations within last ~20% flip left.
const FLIP_THRESHOLD = 2020;

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  const entry = payload[0]?.payload;
  return (
    <div
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        padding: '8px 12px',
        fontFamily: 'var(--mono)',
        fontSize: '12px',
        color: 'var(--text-primary)',
      }}
    >
      <p style={{ color: 'var(--text-secondary)', marginBottom: 4 }}>{label}</p>
      <p style={{ color: entry?.terminationZone ? 'var(--accent)' : 'var(--annotation)' }}>
        {payload[0].value?.toLocaleString()} TPS holders
      </p>
      {entry?.terminationZone && (
        <p style={{ color: 'var(--accent)', fontSize: 10, marginTop: 2 }}>
          Termination effective Sept. 8, 2025
        </p>
      )}
    </div>
  );
}


export default function ChartTPS({ activeAnnotations = [], animationDuration = 600 }) {
  const filtered = activeAnnotations.filter((a) =>
    a.charts?.includes('tpsHolders')
  );

  return (
    <div
      role="img"
      aria-label="Area chart showing Honduras TPS holders from 1999 to 2026. Holders grew rapidly from 21,417 in 1999 to a peak of 81,685 in 2006, then declined gradually to 51,225 by March 2025 before the Trump administration terminated TPS effective September 2025. Legal status as of June 2026 remains in limbo."
      style={{ width: '100%' }}
    >
      <ResponsiveContainer width="100%" height={360}>
        <AreaChart
          data={tpsLineData}
          margin={{ top: 40, right: 20, left: 10, bottom: 20 }}
        >
          <CartesianGrid
            strokeDasharray="2 4"
            stroke="var(--border)"
            vertical={false}
          />
          <XAxis
            dataKey="year"
            stroke="var(--text-secondary)"
            tick={{ fontFamily: 'var(--mono)', fontSize: 11, fill: 'var(--text-secondary)' }}
            tickLine={false}
            axisLine={{ stroke: 'var(--border)' }}
            interval={4}
          />
          <YAxis
            stroke="var(--text-secondary)"
            tick={{ fontFamily: 'var(--mono)', fontSize: 11, fill: 'var(--text-secondary)' }}
            tickLine={false}
            axisLine={false}
            domain={[0, 85000]}
            tickFormatter={(v) => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : '0'}
          />
          <Tooltip content={<CustomTooltip />} />

          <ReferenceArea
            x1={2025}
            x2={2026}
            fill="var(--accent)"
            fillOpacity={0.08}
          />

          <Area
            dataKey="holders"
            stroke="var(--annotation)"
            strokeWidth={2.5}
            fill="var(--annotation)"
            fillOpacity={0.12}
            dot={false}
            animationDuration={animationDuration}
            animationEasing="ease-in-out"
          />

          {filtered.map((a, idx) => (
            <ReferenceLine
              key={a.id}
              x={a.year}
              stroke={a.color}
              strokeDasharray="4 4"
              strokeWidth={1.5}
              label={(props) => (
                <AnnotationLabel
                  viewBox={props.viewBox}
                  label={a.label}
                  sublabel={a.sublabel}
                  color={a.color}
                  yOffset={idx * 22}
                  flipToLeft={a.year > FLIP_THRESHOLD}
                />
              )}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
      <p
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '10px',
          color: 'var(--text-secondary)',
          marginTop: '0.5rem',
          textAlign: 'center',
          padding: '0 1rem',
        }}
      >
        {tpsAnnotations.terminated.note}
      </p>
    </div>
  );
}
