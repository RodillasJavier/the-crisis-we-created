import './ProseStep.css';

const STEPS_CONTENT = {
  1: {
    label: '01 / 07',
    heading: 'The Cold War Laboratory',
    body: `Between 1980 and 1992, Honduras received $1.6 billion in US military and economic assistance.¹ That money did not go toward building schools or hospitals or democratic institutions. It went toward the Soto Cano Airbase, toward training Battalion 3-16, and toward propping up a military that answered to no civilian authority.

By 1985, Honduras was the eighth-leading recipient of US military and economic aid in the world.² However, all Hondurans got in return was 124 documented disappearances and 133 assassinations between 1980 and 1984 alone, carried out by the very forces that US dollars had trained and equipped.

The United States was invested in using Honduras, rather than investing in it. The country was a staging ground for proxy wars in El Salvador and Nicaragua, its military built up in service of a regional agenda that had nothing to do with the Honduran people. They paid the costs of that buildup. They saw none of the benefits.`,
    footnotes: [
      'Jorge E. Cuéllar, "Honduras: Inequality and Social Crisis," in Latin American Politics and Development, edited by Harvey F. Kline and Christine J. Wade, 10th ed. (New York: Routledge, 2023), 459–460.',
      'Joan Kruckewitt, "US Policy and Human Rights in Honduras," in When States Kill: Latin America, the U.S., and Technologies of Terror, edited by Cecilia Menjívar and Néstor Rodriguez (Austin: University of Texas Press, 2005), 174, 184–185.',
    ],
  },
  2: {
    label: '02 / 07',
    heading: 'The Narco Transition',
    body: `When the Contra War ended around 1990, the US pulled its aid and moved on. What it left behind was a military that had spent a decade being rewarded for anti-communist loyalty, now suddenly cut off, sitting inside a corrupt institution with nowhere to direct its skills except the drug trade.¹

  The homicide rate was nearly flat through the 1980s and starts climbing in the 1990s. This isn't a coincidence; the officers who had been trained in counterinsurgency and intelligence gathering were still around even after the aid ended. They converted. The infrastructure the US built to fight communism became the infrastructure of organized crime.²

  The dip in the aid chart is not peace. It is the moment the US stopped paying attention to what it had built.`,
    footnotes: [
      'Cuéllar, 460.',
      'Dana Frank, The Long Honduran Night: Resistance, Terror, and the United States in the Aftermath of the Coup (Chicago: Haymarket Books, 2018), chap. 1.',
    ],
  },
  3: {
    label: '03 / 07',
    heading: 'Hurricane Mitch and Structural Vulnerability',
    body: `In October 1998, Hurricane Mitch displaced 1.5 million people, killed approximately 8,000, and caused roughly $4 billion in damages.¹ A disaster of this scale would have been devastating for any country, and for a country like Honduras, it was particularly so. 

  The nation had already been restructured by IMF and World Bank structural adjustment programs (what Hondurans called the paquetazo), that stripped public services in the name of reducing debt. The healthcare system, housing infrastructure and agricultural support networks were all dismantled as conditions of foreign loans from institutions where the United States held effective veto power.²

  Although Hurricane Mitch was a natural event, the disaster that followed was not. Mitch happened upon a country that had already been struggling, and the recovery aid that came in it's wake brought a new set of conditions that would go on to only deepen the same cycle of dependency that made the devastation so severe in the first place.`,
    footnotes: [
      'Cuéllar, 460.',
      'Andrés León Araya, The Coup and the Palm Trees: Agrarian Conflict and Political Power in Honduras (Athens: University of Georgia Press, 2023), 80–82.',
    ],
  },
  4: {
    label: '04 / 07',
    heading: 'The Coup',
    pullQuote: {
      text: '"JOH enjoyed unyielding support and funding from the United States, the resources used to control and silence Honduran activists."',
      attribution: '— Cuéllar, in Kline and Wade, Latin American Politics and Development',
    },
    body: `On June 28, 2009, President Manuel Zelaya was ousted by the Honduran military, and within three years, homicides jumped from 64 to 83 per 100,000 people.¹

  The Obama administration and Clinton State Department never formally called it a coup. This wasn't an oversight, Calling it a coup would have automatically triggered a freeze on US military and security aid under the Leahy Amendment. The decision not to use the word was a policy choice, and the consequences of that choice were measured in lives.²

  What came after was not a democratic transition. Lobo and then Hernández governed through paramilitaries and narco-alliances, with consistent US backing. The political space that had supported labor unions, Indigenous movements, and a nascent LGBTQ movement was effectively gone.³`,
    footnotes: [
      'Cuéllar, 462.',
      'Frank, The Long Honduran Night, chap. 1.',
      'Cuéllar, 462–463; Frank, The Long Honduran Night, chap. 2.',
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
