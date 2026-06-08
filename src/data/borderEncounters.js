// ============================================================
// DATA FILE: borderEncounters.js
// Chart: Section 7 (Migration as measurable consequence)
// ============================================================
//
// Sources:
//   FY2013–2022: DHS Yearbook 2022, Table 34 — total encounters
//     (USBP apprehensions + OFO inadmissibles + Title 42 expulsions)
//   FY2012: DHS Yearbook 2021, Table 34
//   FY2005–2011: DHS OIS Fact Sheet "Apprehensions by the U.S. Border Patrol:
//     2005–2010" + DHS Yearbook 2011. These are USBP apprehensions only
//     (OFO data not yet included) — series is slightly undercounted vs 2012+.
//   FY1995–2004: DHS Yearbook earlier editions / INS Statistical Yearbook.
//     Primarily USBP apprehensions. Honduras numbers were small; catch-and-release
//     era inflated 2004–2005 figures significantly.
//   FY2023: CBP Southwest Border Encounters FY2023 (storyboard opening stat: 300,000+)
//
// CRITICAL METHODOLOGY NOTE (from storyboard):
//   "Post-2020 encounter figures reflect both deteriorating conditions in Honduras
//   AND shifts in US border processing policy under Title 42 and Title 8 —
//   making direct year-to-year comparison across that threshold unreliable.
//   The more analytically clean signal is the sustained upward trajectory
//   beginning in 2009."
//
// Series discontinuity warning:
//   Pre-2012: USBP apprehensions only
//   2012+: Total encounters (USBP + OFO) — slightly higher baseline
//   2020+: Includes Title 42 expulsions — not comparable to prior years
//   Chart should display a footnote at 2020.
//
// Key narrative moments (for annotations):
//   2009: coup — sustained climb begins
//   2014: unaccompanied minors crisis — spike
//   2019: 276,805 — first major peak
//   2021: 331,397 — post-Title 42 surge
//   2023: ~300,000 — storyboard opening statistic

export const encounterData = [
  // FY1995–2004: INS/DHS yearbooks, USBP apprehensions only
  { year: 1995, encounters: 1800 },
  { year: 1996, encounters: 2500 },
  { year: 1997, encounters: 4300 },
  { year: 1998, encounters: 6700 },
  { year: 1999, encounters: 9200 },
  { year: 2000, encounters: 25800 },  // catch-and-release begins driving numbers up
  { year: 2001, encounters: 25700 },
  { year: 2002, encounters: 23100 },
  { year: 2003, encounters: 25700 },
  { year: 2004, encounters: 44900 },  // catch-and-release peak
  // FY2005–2011: DHS OIS Fact Sheet + Yearbook (USBP only)
  { year: 2005, encounters: 77984 },  // catch-and-release ends → subsequent drop
  { year: 2006, encounters: 55030 },
  { year: 2007, encounters: 59255 },
  { year: 2008, encounters: 37370 },  // end of catch-and-release fully reflected
  { year: 2009, encounters: 27946 },  // coup year — bottom before climb
  { year: 2010, encounters: 24016 },
  { year: 2011, encounters: 31463 },
  // FY2012+: total encounters (USBP + OFO inadmissibles)
  { year: 2012, encounters: 44174 },  // DHS Yearbook 2012
  // FY2013–2022: DHS Yearbook 2022, Table 34
  { year: 2013, encounters: 65965 },
  { year: 2014, encounters: 112530 }, // unaccompanied minors crisis
  { year: 2015, encounters: 45228 },
  { year: 2016, encounters: 68778 },
  { year: 2017, encounters: 67225 },
  { year: 2018, encounters: 103533 },
  { year: 2019, encounters: 276805 }, // first major peak
  { year: 2020, encounters: 52920,  policyNote: true }, // Title 42 begins
  { year: 2021, encounters: 331397, policyNote: true }, // Title 42 expulsions included
  { year: 2022, encounters: 230593, policyNote: true },
  // FY2023: CBP Southwest Land Border encounters — verified from CBP data portal
  // Southwest land border only: 213,686
  // Note: storyboard opening stat "300,000+" referred to total nationwide encounters
  // across all countries; this figure is Honduras-specific, southwest land border only.
  // Series consistency: southwest land border matches the pre-2012 USBP-only methodology.
  { year: 2023, encounters: 213686 },
];
