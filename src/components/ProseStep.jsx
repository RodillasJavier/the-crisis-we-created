import './ProseStep.css';

const STEPS_CONTENT = {
  1: {
    label: '01 / 07',
    heading: 'The Cold War Laboratory',
    body: `Between 1980 and 1992, Honduras received $1.6 billion in US military and economic assistance.¹ Rather than building democratic institutions, that money built the Soto Cano Airbase, trained Battalion 316, and empowered a military that exceeded civilian authority.

By 1985, Honduras was the eighth-leading recipient of US military and economic aid in the world.² The returns on that investment were measured in disappeared persons: 124 permanent disappearances and 133 assassinations documented by CODEH between 1980 and 1984 alone.

The United States never cared about Honduras. The country served as a launch pad for proxy wars in El Salvador and Nicaragua, its military built up and armed in service of a regional agenda. Hondurans were forced to bear the costs of that buildup, yet they had nothing to gain from it.`,
    footnotes: [
      'Cuéllar, Mireille Alvarez. In Kline, Harvey F., and Christine J. Wade, eds. Latin American Politics and Development. 10th ed. Routledge, 2023.',
      'Kruckewitt, Joan. "US Policy and Human Rights in Honduras." In Menjívar, Cecilia, and Néstor Rodriguez, eds. When States Kill. University of Texas Press, 2005. Table 7.1.',
    ],
  },
  2: {
    label: '02 / 07',
    heading: 'The Narco Transition',
    body: `When the Cold War ended, the US rapidly withdrew aid — leaving cohorts of trained officers with specialized skills in a wholly corrupt institution now primed to serve the drug trade. The dip in the aid line is not peace. It is the moment a US-built military apparatus converted its skills to narco-trafficking.

The homicide rate, nearly flat through the 1980s, begins climbing in the 1990s as the institutional structures built with US assistance were repurposed. The officers trained in counterinsurgency became the infrastructure of organized crime.

The relationship between US withdrawal and rising violence is not coincidental. It is causal.`,
    footnotes: [
      'Cuéllar. In Kline and Wade, Latin American Politics and Development. Aid data: USAID Foreign Aid Explorer, constant 2021 USD.',
      'Frank, Dana. The Long Honduran Night: Resistance, Terror, and the United States in the Aftermath of the Coup. Haymarket Books, 2018.',
    ],
  },
  3: {
    label: '03 / 07',
    heading: 'Hurricane Mitch and Structural Vulnerability',
    body: `Hurricane Mitch killed approximately 8,000 people, displaced 1.5 million, and caused $4 billion in damage. It did not strike a resilient country.

Honduras had already been restructured by IMF and World Bank structural adjustment programs — the paquetazo — that stripped public services in the name of debt reduction. Healthcare, housing, agricultural support: each had been dismantled as a condition of foreign loans controlled by institutions where the United States held veto power.

Recovery aid came with new conditions. The cycle of dependency deepened. The state that emerged from Mitch was more exposed, more indebted, and more beholden to external creditors than the one that entered it.`,
    footnotes: [
      'Cuéllar. In Kline and Wade, Latin American Politics and Development. Mitch figures: 8,000 dead; $4B damage; 1.5M displaced.',
      'León, Andrés. The Coup and the Palm Trees: Agrarian Conflict and Political Power in Honduras. University of Georgia Press, 2023.',
    ],
  },
  4: {
    label: '04 / 07',
    heading: 'The Coup',
    pullQuote: {
      text: '"JOH enjoyed unyielding support and funding from the United States, the resources used to control and silence Honduran activists."',
      attribution: '— Cuéllar, in Kline and Wade, Latin American Politics and Development',
    },
    body: `On June 28, 2009, President Manuel Zelaya was removed at gunpoint. Homicides jumped from 64 to 83 per 100,000 within three years.¹

The Obama administration and Clinton State Department refused to formally call it a coup — a deliberate legal maneuver under the Leahy Amendment to keep US military and security aid flowing. The word "coup" would have automatically triggered a freeze. The decision not to use it was a policy choice with consequences measured in lives.

What followed was not a democratic transition. It was the installation of a security state whose presidents — Lobo, Hernández — governed through paramilitaries and narco-alliances with overt US backing.`,
    footnotes: [
      'Cuéllar, p.462. In Kline and Wade, Latin American Politics and Development. UNODC homicide data: 2009=64.5, 2011=83.2/100k.',
      'Frank, Dana. The Long Honduran Night: Resistance, Terror, and the United States in the Aftermath of the Coup. Haymarket Books, 2018.',
    ],
  },
  5: {
    label: '05 / 07',
    heading: 'The Deportation Pipeline',
    pullQuote: {
      text: '"crime and social disorder that, in general, stemmed from incoming waves of US deportees"',
      attribution: '— Cuéllar, in Kline and Wade, Latin American Politics and Development',
    },
    body: `Mass deportations began under Clinton in the mid-1990s. IIRIRA — the Illegal Immigration Reform and Immigrant Responsibility Act, signed September 30, 1996 — created the legislative architecture for mandatory, large-scale removal.

Gang infrastructure imported from Los Angeles took root in a state the US had spent decades hollowing out. The MS-13 and Barrio 18 affiliates that came to define Honduran urban violence were not indigenous formations. They were exported from the United States into a country with no institutional capacity to absorb or counter them.

Deportations peaked at over 40,000 in a single fiscal year. The chart above is not the history of Honduran criminality. It is the history of a US policy decision made in 1996.`,
    footnotes: [
      'DHS Yearbook of Immigration Statistics, Table 42 (2022 edition).',
      'Cuéllar. In Kline and Wade, Latin American Politics and Development.',
    ],
  },
  6: {
    label: '06 / 07',
    heading: 'Migration as Measurable Consequence',
    body: `This is not a spontaneous crisis. Every surge in this chart has a dateable US policy decision behind it.

The post-2009 climb follows directly from the coup the US endorsed. The 2014 spike is children arriving alone — fleeing gang violence in cities where deportee-imported infrastructure had taken root in a state the US had spent decades weakening. The 2019 and 2023 surges reflect the cumulative weight of fifty years of decisions.

The pattern is not correlation. The 2009 coup is a natural experiment: encounters were declining in 2008–2009, then reversed. The inflection point is dateable to the month.

Two methodological caveats, stated plainly: the series shifts from USBP apprehensions only to total encounters in 2012, slightly raising the baseline; and post-2020 figures include Title 42 expulsions, making year-over-year comparisons unreliable across that threshold. Neither discontinuity affects the central argument — the sustained upward trajectory begins in 2009 and is visible under any consistent measure.

What the United States calls a border crisis is the return of its own foreign policy.`,
    footnotes: [
      'CBP Southwest Border Encounters, FY2023. DHS Yearbook of Immigration Statistics.',
    ],
  },
  7: {
    label: '07 / 07',
    heading: 'TPS and the Present',
    body: `As of March 2025, 51,225 Hondurans remained in the United States under Temporary Protected Status¹ — a population that peaked at over 81,000 in 2006 and had been continuously renewed for 25 years because the conditions that made Honduras unsafe never improved. TPS was never a permanent solution. It was an acknowledgment that the United States could not, in good conscience, send people back to what it had helped create.

In 2025, the Trump administration terminated TPS for Honduras, declaring conditions safe for return. The Federal Register announcement cited "significant improvements in Honduras's security and economic conditions." The data tell a different story: Honduras's homicide rate of 31.4 per 100,000 remains over six times the global average of 5.2,² deportations continue, and the institutional conditions that produced the crisis — narco-capture of the state, impunity, hollowed public services — remain structurally intact.

The same government whose Cold War policies built Battalion 316, whose deportation policies exported gang infrastructure, and whose diplomats endorsed the 2009 coup, is now telling the people produced by those policies that it is safe to go home.`,
    footnotes: [
      'CRS Report RS20844. USCIS TPS designated country page. Legal status as of June 2026: in limbo following 9th Circuit stay (Feb. 9, 2026). Penn Wharton Budget Model (Nov. 19, 2025): 51,225 Honduras TPS holders as of Mar. 31, 2025; peak 81,685 (Dec. 2006).',
      'Federal Register 90:30089 (July 8, 2025). Honduras homicide rate of 31.4 per 100,000: UNODC Homicide Statistics, 2023. Global average of 5.2 per 100,000: UNDP, UNODC and OHCHR, Global Progress Report on Sustainable Development Goal 16: Latin America and the Caribbean, Regional Snapshot Series No. 1 (2026), p. 6.'
    ],
  },
};

function Footnote({ index, text }) {
  return (
    <li className="footnote-item">
      <sup className="footnote-marker">{index}</sup>
      <span className="footnote-text">{text}</span>
    </li>
  );
}

export default function ProseStep({ step, isActive }) {
  const content = STEPS_CONTENT[step];
  if (!content) return null;

  return (
    <article
      className={`prose-step${isActive ? ' is-active' : ''}`}
      aria-label={`Section ${step}: ${content.heading}`}
    >
      <span className="step-label">{content.label}</span>
      <h2 className="step-heading">{content.heading}</h2>

      {content.pullQuote && (
        <blockquote className="pull-quote">
          <p>{content.pullQuote.text}</p>
          <footer>{content.pullQuote.attribution}</footer>
        </blockquote>
      )}

      <div className="prose-body">
        {content.body.split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {content.footnotes?.length > 0 && (
        <ol className="footnotes">
          {content.footnotes.map((fn, i) => (
            <Footnote key={i} index={i + 1} text={fn} />
          ))}
        </ol>
      )}
    </article>
  );
}
