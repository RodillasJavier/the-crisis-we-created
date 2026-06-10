import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from 'recharts';
import { deportationData } from '../../data/deportations.js';
import AnnotationLabel from './AnnotationLabel.jsx';

// Data spans 1996–2022 (26 years). Annotations within last ~25% flip left.
const FLIP_THRESHOLD = 2016;

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
      <p style={{ color: 'var(--text-secondary)', marginBottom: 4 }}>FY{label}</p>
      <p style={{ color: entry?.policyNote ? 'var(--text-secondary)' : 'var(--accent)' }}>
        {payload[0].value?.toLocaleString()} removals
      </p>
      {entry?.estimated && (
        <p style={{ color: 'var(--text-secondary)', fontSize: 10, marginTop: 2 }}>
          * Estimated
        </p>
      )}
      {entry?.policyNote && (
        <p style={{ color: 'var(--text-secondary)', fontSize: 10, marginTop: 2 }}>
          * Title 42/Title 8 shift
        </p>
      )}
    </div>
  );
}


function getBarFill(entry) {
  if (entry.policyNote) return 'var(--text-secondary)';
  if (entry.estimated) return 'var(--accent-alt)';
  return 'var(--accent)';
}

export default function ChartDeportations({ activeAnnotations = [], animationDuration = 600 }) {
  const filtered = activeAnnotations.filter((a) =>
    a.charts?.includes('deportations')
  );

  return (
    <div
      role="img"
      aria-label="Bar chart showing annual deportations (removals) from the United States to Honduras from 1996 to 2022. Bars climb sharply after IIRIRA in 1996, peak at over 40,000 in 2019, then drop under Title 42 policy shifts."
      style={{ width: '100%' }}
    >
      <ResponsiveContainer width="100%" height={360}>
        <BarChart
          data={deportationData}
          margin={{ top: 40, right: 20, left: 10, bottom: 20 }}
          barSize={8}
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
            tickFormatter={(v) => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v}
          />
          <Tooltip content={<CustomTooltip />} />

          <Bar dataKey="removals" animationDuration={animationDuration} animationEasing="ease-in-out" radius={[2, 2, 0, 0]}>
            {deportationData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarFill(entry)} opacity={entry.policyNote ? 0.5 : 1} />
            ))}
          </Bar>

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
        </BarChart>
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
        * 2020–2022 figures reflect Title 42/Title 8 policy shifts (shown muted).
        Amber bars (1996–2000) are estimated based on IIRIRA ramp-up.
        Source: DHS Yearbook of Immigration Statistics.
      </p>
    </div>
  );
}
