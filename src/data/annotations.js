// ============================================================
// DATA FILE: annotations.js
// Annotation config used across all charts
// ============================================================

export const annotations = {

  battalion316: {
    year: 1984,
    label: 'Battalion 316',
    sublabel: 'Peak military aid: $77.4M',
    color: 'var(--annotation)',
    charts: ['aidAndHomicide'],
  },

  aidWithdrawal: {
    year: 1992,
    label: 'Aid withdrawal',
    sublabel: 'Cold War ends',
    color: 'var(--accent-alt)',
    charts: ['aidAndHomicide'],
  },

  mitch: {
    year: 1998,
    label: 'Hurricane Mitch',
    sublabel: 'Poverty 60%→75%',
    color: 'var(--annotation)',
    charts: ['aidAndHomicide'],
  },

  iirira: {
    year: 1996,
    label: 'IIRIRA enacted',
    sublabel: 'Mass deportation pipeline begins',
    color: 'var(--accent-alt)',
    charts: ['deportations'],
  },

  coup2009: {
    year: 2009,
    label: 'Coup',
    sublabel: 'June 28, 2009',
    color: 'var(--accent)',
    charts: ['aidAndHomicide', 'borderEncounters'],
  },

  homicidePeak: {
    year: 2011,
    label: '83/100k',
    sublabel: 'Post-coup homicide peak',
    color: 'var(--accent)',
    charts: ['aidAndHomicide'],
  },

  deportationPeak: {
    year: 2019,
    label: '40,651',
    sublabel: 'Peak removals',
    color: 'var(--accent)',
    charts: ['deportations'],
  },

  unaccompaniedMinors: {
    year: 2014,
    label: 'Unaccompanied minors crisis',
    sublabel: '112,530 encounters',
    color: 'var(--annotation)',
    charts: ['borderEncounters'],
  },

  title42: {
    year: 2020,
    label: '*Title 42',
    sublabel: 'Policy shift — data not comparable',
    color: 'var(--text-secondary)',
    charts: ['borderEncounters', 'deportations'],
  },

  tpsDesignated: {
    year: 1999,
    label: 'TPS designated',
    sublabel: 'Following Hurricane Mitch',
    color: 'var(--annotation)',
    charts: ['tpsHolders'],
  },

  tpsPeak: {
    year: 2006,
    label: 'Peak: 81,685',
    sublabel: 'Dec. 2006',
    color: 'var(--accent-alt)',
    charts: ['tpsHolders'],
  },

  tpsTerminated: {
    year: 2025,
    label: 'TPS terminated',
    sublabel: 'Sept. 8, 2025',
    color: 'var(--accent)',
    charts: ['tpsHolders'],
  },
};

// Which annotations to show per scroll step
export const stepAnnotations = {
  0: [],                                                          // Hero
  1: ['battalion316'],                                            // Cold War
  2: ['battalion316', 'aidWithdrawal'],                           // Narco transition
  3: ['mitch'],                                                   // Hurricane Mitch
  4: ['coup2009', 'homicidePeak'],                                // 2009 Coup
  5: ['iirira', 'deportationPeak', 'title42'],                    // Deportations
  6: ['coup2009', 'unaccompaniedMinors', 'title42'],              // Migration
  7: ['tpsDesignated', 'tpsPeak', 'tpsTerminated'],                // TPS
  8: [],                                                          // Conclusion
};
