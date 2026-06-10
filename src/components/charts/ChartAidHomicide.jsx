import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { combined } from '../../data/aidAndHomicide.js';
import AnnotationLabel from './AnnotationLabel.jsx';

// Annotations with year > 2016 are in the last ~15% of the x range — flip label left
const FLIP_THRESHOLD = 2016;

// Precompute split rate keys so we can use a single chart data prop
// (avoids recharts deduplicating x-axis ticks incorrectly with per-Line data)
const chartData = combined.map((d) => ({
  ...d,
  rate_solid: d.rateEstimated ? null : d.rate,
  rate_dashed: d.rateEstimated ? d.rate : null,
}));


function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
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
      <p style={{ marginBottom: 4, color: 'var(--text-secondary)' }}>{label}</p>
      {payload.map((p) => (
        <p key={p.dataKey} style={{ color: p.stroke || p.fill }}>
          {p.name}: {p.value !== null ? p.value : '—'}
          {p.dataKey === 'aid' ? ' M USD' : p.dataKey === 'rate' ? '/100k' : ''}
        </p>
      ))}
    </div>
  );
}

export default function ChartAidHomicide({ activeAnnotations = [], animationDuration = 600 }) {
  const filtered = activeAnnotations.filter((a) =>
    a.charts?.includes('aidAndHomicide')
  );

  return (
    <div
      role="img"
      aria-label="Dual-axis chart showing US aid to Honduras (amber line, left axis, USD millions) and Honduras homicide rate (red line, right axis, per 100k population) from 1978 to 2023"
      style={{ width: '100%' }}
    >
      <ResponsiveContainer width="100%" height={380}>
        <ComposedChart
          data={chartData}
          margin={{ top: 40, right: 50, left: 10, bottom: 20 }}
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
            interval={9}
          />
          <YAxis
            yAxisId="left"
            stroke="var(--accent-alt)"
            tick={{ fontFamily: 'var(--mono)', fontSize: 11, fill: 'var(--accent-alt)' }}
            tickLine={false}
            axisLine={false}
            domain={[0, 800]}
            tickFormatter={(v) => `$${v}M`}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="var(--accent)"
            tick={{ fontFamily: 'var(--mono)', fontSize: 11, fill: 'var(--accent)' }}
            tickLine={false}
            axisLine={false}
            domain={[0, 100]}
            tickFormatter={(v) => `${v}`}
          />
          <Tooltip content={<CustomTooltip />} />

          <Line
            yAxisId="left"
            dataKey="aid"
            name="US Aid"
            stroke="var(--accent-alt)"
            strokeWidth={2}
            dot={false}
            connectNulls={false}
            animationDuration={animationDuration}
            animationEasing="ease-in-out"
          />
          <Line
            yAxisId="right"
            dataKey="rate_solid"
            name="Homicide Rate"
            stroke="var(--accent)"
            strokeWidth={2}
            dot={false}
            connectNulls={true}
            animationDuration={animationDuration}
            animationEasing="ease-in-out"
          />
          <Line
            yAxisId="right"
            dataKey="rate_dashed"
            name="Homicide Rate (est.)"
            stroke="var(--accent)"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={false}
            connectNulls={false}
            animationDuration={animationDuration}
            animationEasing="ease-in-out"
            legendType="none"
          />

          {filtered.map((a, idx) => (
            <ReferenceLine
              key={a.id}
              x={a.year}
              yAxisId="left"
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
        </ComposedChart>
      </ResponsiveContainer>
      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          marginTop: '0.5rem',
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          color: 'var(--text-secondary)',
        }}
      >
        <span>
          <span style={{ color: 'var(--accent-alt)' }}>—</span> US Aid (USD millions, 2021)
        </span>
        <span>
          <span style={{ color: 'var(--accent)' }}>—</span> Homicide rate (per 100k)
        </span>
        <span>
          <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>- -</span> Estimated
        </span>
      </div>
    </div>
  );
}
