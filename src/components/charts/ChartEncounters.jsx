import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  ReferenceArea,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { encounterData } from '../../data/borderEncounters.js';
import AnnotationLabel from './AnnotationLabel.jsx';

// Data spans 1995–2023 (28 years). Annotations within last ~20% flip left.
const FLIP_THRESHOLD = 2017;

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
      <p style={{ color: 'var(--annotation)' }}>
        {payload[0].value?.toLocaleString()} encounters
      </p>
      {entry?.policyNote && (
        <p style={{ color: 'var(--text-secondary)', fontSize: 10, marginTop: 2 }}>
          * Title 42/Title 8 era — not directly comparable
        </p>
      )}
    </div>
  );
}


export default function ChartEncounters({ activeAnnotations = [], animationDuration = 600 }) {
  const filtered = activeAnnotations.filter((a) =>
    a.charts?.includes('borderEncounters')
  );

  return (
    <div
      role="img"
      aria-label="Line chart showing Honduran border encounters at the US-Mexico border from 1995 to 2023. Encounters are low through the early 2000s, begin climbing after the 2009 coup, spike to 112,000 in 2014 during the unaccompanied minors crisis, and surge to 276,000 in 2019 and 213,000 in 2023."
      style={{ width: '100%' }}
    >
      <ResponsiveContainer width="100%" height={380}>
        <LineChart
          data={encounterData}
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
            domain={[0, 380000]}
            tickFormatter={(v) => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : '0'}
          />
          <Tooltip content={<CustomTooltip />} />

          <ReferenceArea
            x1={2020}
            x2={2023}
            fill="var(--text-secondary)"
            fillOpacity={0.06}
            label={{
              value: 'Title 42 era',
              position: 'insideTopRight',
              fill: 'var(--text-secondary)',
              fontSize: 10,
              fontFamily: 'var(--mono)',
            }}
          />

          <Line
            dataKey="encounters"
            stroke="var(--annotation)"
            strokeWidth={2.5}
            dot={false}
            connectNulls={false}
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
        </LineChart>
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
        * 2020–2023 data includes Title 42 expulsions — not directly comparable to prior years.
        Source: CBP / DHS Yearbook of Immigration Statistics.
      </p>
    </div>
  );
}
