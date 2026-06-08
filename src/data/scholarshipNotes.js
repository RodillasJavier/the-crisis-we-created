// ============================================================
// DATA FILE: scholarshipNotes.js
// Reference file — not imported by charts directly.
// Use for prose annotations, footnotes, and pull quotes.
// ============================================================

export const scholarship = {

  kruckewitt: {
    // When States Kill, ch.7 — Table 7.1
    // Authorized US Assistance to Honduras, 1979–1989 (current USD millions)
    // Note: "authorized" ≠ "obligated" — slightly different from USAID Explorer data
    // but corroborates same trend and peak years
    aidTable: {
      1979: { total: 32.3,  military: 2.3,  economic: 29.1 },
      1980: { total: 66.8,  military: 3.9,  economic: 53.1 },
      1981: { total: 37.3,  military: 8.9,  economic: 36.4 },
      1982: { total: 112.6, military: 31.3, economic: 80.7 },
      1983: { total: 154.3, military: 48.3, economic: 106.0 },
      1984: { total: 172.6, military: 77.4, economic: 95.0 }, // peak military
      1985: { total: 298.4, military: 67.4, economic: 229.0 }, // peak total
      1986: { total: 198.1, military: 61.1, economic: 136.6 },
      1987: { total: 259.8, military: 61.2, economic: 197.8 },
      1988: { total: 198.1, military: 41.2, economic: 156.9 },
      1989: { total: 130.5, military: 41.1, economic: 88.1 },
    },
    // Table 7.2: Human Rights Violations 1980–1984 (CODEH data)
    humanRightsViolations: {
      assassinations: { 1980:1, 1981:42, 1982:29, 1983:25, 1984:36, total:133 },
      permanentDisappearances: { 1980:2, 1981:52, 1982:26, 1983:25, 1984:19, total:124 },
      temporaryDisappearances: { 1980:11, 1981:67, 1982:35, 1983:19, 1984:32, total:164 },
    },
    // Table 7.3: Documented disappearances 1980–1988
    documentedDisappearances: 174,
    quote: 'By 1985, Honduras was the eighth leading recipient of US military and economic aid in the world.',
  },

  cuellar: {
    totalAid1980_1992: '$1.6 billion in military and economic assistance (1980–1992)',
    homicidePostCoup: { pre: 64, post: 83, years: '2009–2012', source: 'World Bank, p.462' },
    homicide2003: { rate: 55, label: 'all-time high', source: 'World Bank, p.461' },
    poverty: {
      before: { poverty: 60, extremePoverty: 38 },
      after:  { poverty: 75, extremePoverty: 55 },
      cause: 'Hurricanes Eta and Iota + COVID-19 (2020)',
      source: 'INE, cited p.469 fn.21',
    },
    mitch: { dead: 8000, damageUSD: 4e9, homeless: 1500000 },
    jobQuote: 'JOH enjoyed unyielding support and funding from the United States, the resources used to control and silence Honduran activists.',
    deporteeContext: 'The US sent back individuals — many with no living memory of Honduras — into a country with no judicial system, no social services, and no institutional capacity to receive them.',
  },

  tps: {
    holders: 86000,
    designatedDate: 'January 5, 1999',
    terminationDate: 'September 8, 2025',
    fedRegCitation: '90 Fed. Reg. 30089 (July 8, 2025)',
    legalStatus: 'Termination stayed by 9th Circuit (Feb. 9, 2026) pending appeal. Status in legal limbo as of June 2026.',
    source: 'Penn Wharton Budget Model (2025); USCIS; CRS Report RS20844',
  },

};
