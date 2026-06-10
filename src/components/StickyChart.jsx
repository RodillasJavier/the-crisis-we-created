import ChartAidHomicide from './charts/ChartAidHomicide.jsx';
import ChartDeportations from './charts/ChartDeportations.jsx';
import ChartEncounters from './charts/ChartEncounters.jsx';
import ChartTPS from './charts/ChartTPS.jsx';
import BigNumbers from './charts/BigNumbers.jsx';
import { annotations, stepAnnotations } from '../data/annotations.js';
import { getAnnotationsForStep } from '../utils/annotationHelpers.js';
import './StickyChart.css';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const ANIM_DURATION = prefersReducedMotion ? 0 : 600;

function getChartView(step) {
  if (step === 3) return 'mitch';
  if (step <= 4) return 'aidAndHomicide';
  if (step === 5) return 'deportations';
  if (step === 6) return 'encounters';
  return 'tps';
}

export default function StickyChart({ step }) {
  const chartView = getChartView(step);
  const activeAnnotations = getAnnotationsForStep(step, annotations, stepAnnotations);

  return (
    <div className="sticky-chart">
      <div className="sticky-chart-inner" key={chartView}>
        {chartView === 'aidAndHomicide' && (
          <ChartAidHomicide
            activeAnnotations={activeAnnotations}
            animationDuration={ANIM_DURATION}
          />
        )}
        {chartView === 'deportations' && (
          <ChartDeportations
            activeAnnotations={activeAnnotations}
            animationDuration={ANIM_DURATION}
          />
        )}
        {chartView === 'encounters' && (
          <ChartEncounters
            activeAnnotations={activeAnnotations}
            animationDuration={ANIM_DURATION}
          />
        )}
        {chartView === 'tps' && (
          <ChartTPS
            activeAnnotations={activeAnnotations}
            animationDuration={ANIM_DURATION}
          />
        )}
        {chartView === 'mitch' && <BigNumbers isActive={step === 3} />}
      </div>

      <div className="sticky-chart-label">
        {chartView === 'aidAndHomicide' && (
          <p>US Aid to Honduras & Homicide Rate</p>
        )}
        {chartView === 'deportations' && (
          <p>Annual Deportations to Honduras</p>
        )}
        {chartView === 'encounters' && (
          <p>Honduras Border Encounters (US–Mexico Border)</p>
        )}
        {chartView === 'tps' && (
          <p>Honduras TPS Holders in the United States</p>
        )}
      </div>
    </div>
  );
}
