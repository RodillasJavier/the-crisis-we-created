import { useEffect, useState } from 'react';
import { scholarship } from '../../data/scholarshipNotes.js';

const { before, after } = scholarship.cuellar.poverty;

const STATS = [
  {
    label: 'Population in poverty',
    beforeVal: before.poverty,
    afterVal: after.poverty,
  },
  {
    label: 'Extreme poverty',
    beforeVal: before.extremePoverty,
    afterVal: after.extremePoverty,
  },
];

// Tick marks at these percentages for the 0–100 scale
const TICKS = [0, 25, 50, 75, 100];

function StatRow({ label, beforeVal, afterVal, animated, delay }) {
  const increase = afterVal - beforeVal;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      {/* Label row */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
      }}>
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '10px',
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
        }}>
          {label}
        </span>
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '10px',
          color: 'var(--accent)',
          letterSpacing: '0.05em',
          opacity: animated ? 1 : 0,
          transition: `opacity 400ms ease ${delay + 600}ms`,
        }}>
          +{increase} pp
        </span>
      </div>

      {/* Number display */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
        <span style={{
          fontFamily: 'var(--display)',
          fontSize: '3.8rem',
          fontWeight: 700,
          color: 'var(--accent)',
          lineHeight: 1,
          opacity: animated ? 1 : 0,
          transform: animated ? 'none' : 'translateY(6px)',
          transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`,
        }}>
          {afterVal}%
        </span>
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          color: 'var(--text-secondary)',
          opacity: animated ? 0.8 : 0,
          transition: `opacity 400ms ease ${delay + 200}ms`,
        }}>
          up from {beforeVal}%
        </span>
      </div>

      {/* Fill bar */}
      <div style={{ position: 'relative' }}>
        {/* Bar track */}
        <div style={{
          position: 'relative',
          height: '10px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          overflow: 'hidden',
        }}>
          {/* Base (before) zone */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: animated ? `${beforeVal}%` : '0%',
            background: 'var(--text-secondary)',
            opacity: 0.28,
            transition: `width 900ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
          }} />
          {/* Increase zone */}
          <div style={{
            position: 'absolute',
            left: `${beforeVal}%`,
            top: 0,
            height: '100%',
            width: animated ? `${increase}%` : '0%',
            background: 'var(--accent)',
            transition: `width 700ms cubic-bezier(0.16,1,0.3,1) ${delay + 300}ms`,
          }} />
        </div>

        {/* Tick marks below bar */}
        <div style={{ position: 'relative', height: '16px', marginTop: '2px' }}>
          {TICKS.map((t) => (
            <span
              key={t}
              style={{
                position: 'absolute',
                left: `${t}%`,
                transform: t === 0 ? 'none' : t === 100 ? 'translateX(-100%)' : 'translateX(-50%)',
                fontFamily: 'var(--mono)',
                fontSize: '8px',
                color: 'var(--text-secondary)',
                opacity: 0.4,
                lineHeight: 1,
              }}
            >
              {t}%
            </span>
          ))}
          {/* Before marker label */}
          <span style={{
            position: 'absolute',
            left: `${beforeVal}%`,
            transform: 'translateX(-50%)',
            fontFamily: 'var(--mono)',
            fontSize: '8px',
            color: 'var(--text-secondary)',
            opacity: animated ? 0.9 : 0,
            transition: `opacity 300ms ease ${delay + 700}ms`,
            whiteSpace: 'nowrap',
            top: '7px',
          }}>
            ↑ {beforeVal}%
          </span>
          {/* After marker label */}
          <span style={{
            position: 'absolute',
            left: `${afterVal}%`,
            transform: 'translateX(-50%)',
            fontFamily: 'var(--mono)',
            fontSize: '8px',
            color: 'var(--accent)',
            opacity: animated ? 1 : 0,
            transition: `opacity 300ms ease ${delay + 900}ms`,
            whiteSpace: 'nowrap',
            top: '7px',
          }}>
            ↑ {afterVal}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default function BigNumbers({ isActive }) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [animated, setAnimated] = useState(prefersReducedMotion);

  useEffect(() => {
    if (isActive && !animated) {
      const t = setTimeout(() => setAnimated(true), 120);
      return () => clearTimeout(t);
    }
  }, [isActive]);

  return (
    <div
      role="img"
      aria-label="Statistics showing poverty rates before and after the 2020 crisis: population in poverty rose from 60% to 75%, extreme poverty from 38% to 55%"
      style={{ width: '100%', padding: '1rem 1rem 0.5rem' }}
    >
      {/* Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '9px',
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          whiteSpace: 'nowrap',
          opacity: 0.7,
        }}>
          Honduras — Poverty After Successive Shocks
        </span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      </div>

      {/* Stat rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
        {STATS.map((stat, i) => (
          <StatRow
            key={stat.label}
            {...stat}
            animated={animated}
            delay={i * 150}
          />
        ))}
      </div>

      {/* Legend */}
      <div style={{
        display: 'flex',
        gap: '1.25rem',
        marginTop: '1.5rem',
        paddingTop: '1rem',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <div style={{ width: '20px', height: '6px', background: 'var(--text-secondary)', opacity: 0.28 }} />
          <span style={{ fontFamily: 'var(--mono)', fontSize: '8px', color: 'var(--text-secondary)', opacity: 0.6 }}>Pre-2020 baseline</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <div style={{ width: '20px', height: '6px', background: 'var(--accent)' }} />
          <span style={{ fontFamily: 'var(--mono)', fontSize: '8px', color: 'var(--text-secondary)', opacity: 0.6 }}>Increase (Eta &amp; Iota + COVID-19)</span>
        </div>
      </div>

      {/* Source */}
      <p style={{
        fontFamily: 'var(--mono)',
        fontSize: '9px',
        color: 'var(--text-secondary)',
        marginTop: '0.6rem',
        opacity: 0.45,
        lineHeight: 1.5,
      }}>
        Source: INE Honduras, cited in Cuéllar (2024), p.469 fn.21
      </p>
    </div>
  );
}
