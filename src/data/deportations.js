// ============================================================
// DATA FILE: deportations.js
// Chart: Section 6 (Deportation pipeline)
// ============================================================
//
// Source: DHS Yearbook of Immigration Statistics
//   FY2013–2022: Table 42, 2022 Yearbook — total removals column
//   FY2001–2012: Earlier DHS Yearbook editions (verify before publication)
//   FY1996–2000: Estimated from IIRIRA timeline + literature
//
// Context: IIRIRA signed September 30, 1996 — legislative origin of mass deportations.
// Cuéllar: "Mass deportations began under Clinton in the mid-1990s."
//
// Post-2019 note: 2020–2022 figures reflect Title 42/Title 8 processing shifts,
// not a real reduction in Honduran migration pressure.

export const deportationData = [
  // FY1996–2000: estimated (IIRIRA ramp-up) — flagged estimated:true
  { year: 1996, removals: 300,   estimated: true },
  { year: 1997, removals: 700,   estimated: true },
  { year: 1998, removals: 1200,  estimated: true },
  { year: 1999, removals: 2100,  estimated: true },
  { year: 2000, removals: 3400,  estimated: true },
  // FY2001–2012: DHS Yearbook earlier editions (*** verify ***)
  { year: 2001, removals: 5200 },
  { year: 2002, removals: 4800 },
  { year: 2003, removals: 5700 },
  { year: 2004, removals: 7400 },
  { year: 2005, removals: 9000 },
  { year: 2006, removals: 10400 },
  { year: 2007, removals: 13800 },
  { year: 2008, removals: 18700 },
  { year: 2009, removals: 18670 },
  { year: 2010, removals: 19826 },
  { year: 2011, removals: 21005 },
  { year: 2012, removals: 21991 },
  // FY2013–2022: DHS Yearbook 2022, Table 42
  { year: 2013, removals: 36640 },
  { year: 2014, removals: 40881 },
  { year: 2015, removals: 20243 },
  { year: 2016, removals: 22073 },
  { year: 2017, removals: 22070 },
  { year: 2018, removals: 28397 },
  { year: 2019, removals: 40651 }, // peak
  { year: 2020, removals: 20573, policyNote: true }, // Title 42
  { year: 2021, removals: 5053,  policyNote: true },
  { year: 2022, removals: 6545,  policyNote: true },
];
