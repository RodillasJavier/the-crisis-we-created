import { useRef } from 'react';
import { useInView } from '../hooks/useInView.js';
import './ConclusionSection.css';

const THESIS_LINES = [
  'Honduras is a case study in how US foreign policy manufactures its own migration crises. Each intervention compounded the conditions of violence, impunity, and poverty that drive Hondurans north.',
  'The United States is not dealing with an \'invasion\', it is fleeing accountability for the crisis it created.',
];

const FURTHER_READING = [
  {
    category: 'Scholarship',
    text: 'Frank, Dana. The Long Honduran Night: Resistance, Terror, and the United States in the Aftermath of the Coup. Haymarket Books, 2018.',
  },
  {
    category: 'Scholarship',
    text: 'León, Andrés. The Coup and the Palm Trees: Agrarian Conflict and Political Power in Honduras. University of Georgia Press, 2023.',
  },
  {
    category: 'Scholarship',
    text: 'Cuéllar, Mireille Alvarez. "Honduras." In Kline, Harvey F., and Christine J. Wade, eds. Latin American Politics and Development. 10th ed. Routledge, 2023.',
  },
  {
    category: 'Scholarship',
    text: 'Kruckewitt, Joan. "US Policy and Human Rights in Honduras." In Menjívar, Cecilia, and Néstor Rodriguez, eds. When States Kill: Latin America, the U.S., and Technologies of Terror. University of Texas Press, 2005.',
  },
  {
    category: 'Data',
    text: 'DHS Yearbook of Immigration Statistics (annual). U.S. Department of Homeland Security. ohss.dhs.gov/topics/immigration/yearbook',
  },
  {
    category: 'Data',
    text: 'CBP Southwest Border Encounters. U.S. Customs and Border Protection. cbp.gov/newsroom/stats/southwest-land-border-encounters-by-component',
  },
  {
    category: 'Data',
    text: 'UNODC Homicide Statistics. United Nations Office on Drugs and Crime. data.unodc.org/datareport/hom-victim',
  },
  {
    category: 'Data',
    text: 'USAID Foreign Aid Explorer. U.S. Agency for International Development. foreignassistance.gov',
  },
  {
    category: 'Data',
    text: 'Meyer, Peter J. Honduras: Background and U.S. Relations. Congressional Research Service Report RL34027. Updated April 27, 2020.',
  },
  {
    category: 'Reports',
    text: 'UNDP, UNODC, and OHCHR. Global Progress Report on Sustainable Development Goal 16: Indicators on Peaceful, Just and Inclusive Societies — Latin America and the Caribbean. Regional Snapshot Series No. 1, 2026.',
  },
  {
    category: 'Reports',
    text: 'Penn Wharton Budget Model. "550,000 Workers Lose Status by End of 2025." November 19, 2025. budgetmodel.wharton.upenn.edu',
  },
];

const CATEGORIES = [
  { key: 'Scholarship', label: 'Scholarship' },
  { key: 'Data',        label: 'Data & Statistics' },
  { key: 'Reports',     label: 'Reports' },
];

const ADVOCACY = [
  { label: 'CARECEN',             href: 'https://www.carecen-la.org/' },
  { label: 'National TPS Alliance', href: 'https://www.wearehere.org' },
  { label: 'CLINIC',              href: 'https://cliniclegal.org' },
];

function ThesisReveal() {
  const ref = useRef(null);
  const isVisible = useInView(ref, { threshold: 0.3 });

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div ref={ref} className="thesis-block">
      {THESIS_LINES.map((line, i) => (
        <p
          key={i}
          className={`thesis-line${isVisible || prefersReducedMotion ? ' visible' : ''}`}
          style={{ transitionDelay: prefersReducedMotion ? '0ms' : `${i * 180}ms` }}
        >
          {line}
        </p>
      ))}
    </div>
  );
}

export default function ConclusionSection() {
  return (
    <section className="conclusion-section" aria-labelledby="conclusion-heading">
      <div className="conclusion-inner">
        <span className="conclusion-label">Conclusion</span>
        <ThesisReveal />

        {/* Take Action — above sources */}
        <div className="footer-action" id="conclusion-heading">
          <h3>Take Action</h3>
          <p className="about-note">
            Data visualization makes arguments that prose cannot: it forces causal claims into the
            open where they can be verified or falsified. The charts above are not illustrations of
            a thesis — they are the thesis. Every number has a source, every annotation has a date,
            and every date has a decision behind it.
          </p>
          <div className="cta-links">
            {ADVOCACY.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="cta-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label} →
              </a>
            ))}
          </div>
          <p className="project-credit">
            Final project, LACS 1: Introduction to Latin America and the Caribbean.
            Dartmouth College, Spring 2026.
          </p>
        </div>

        {/* Sources — below action, grouped by category */}
        <div className="footer-sources">
          <h3>Sources &amp; Data</h3>
          <div className="sources-grid">
            {CATEGORIES.map(({ key, label }) => {
              const items = FURTHER_READING.filter((r) => r.category === key);
              return (
                <div key={key} className={`source-group source-group--${key.toLowerCase()}`}>
                  <span className="source-group-label">{label}</span>
                  <ul>
                    {items.map((item, i) => (
                      <li key={i}>{item.text}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
