// ============================================================
// DATA FILE: tpsHolders.js
// Chart: Section 8 (TPS and the present)
// ============================================================
//
// Honduras TPS history:
//   - Originally designated January 5, 1999, following Hurricane Mitch (1998)
//   - Renewed continuously for 25+ years; never permanently resolved
//   - July 8, 2025: Secretary Noem announced termination (Fed. Reg. 90:30089)
//   - September 8, 2025: Termination effective
//   - December 31, 2025: District court vacated termination (N.D. Cal.)
//   - February 9, 2026: 9th Circuit STAYED district court order — termination
//     effectively reinstated pending appeal. Status as of June 2026: in limbo.
//
// Source: Penn Wharton Budget Model, "550,000 Workers Lose Status by End of 2025"
//   (Nov. 19, 2025). Figures are December 31 year-end counts for 1999–2024;
//   2025 figure is March 31 (last count before Sept. 8 termination).
//
// Peak: 81,685 (Dec. 31, 2006)
// Last pre-termination count: 51,225 (Mar. 31, 2025)

// Year-end (Dec 31) counts, 1999–2024; Q1 2025 = last count before termination
export const tpsData = [
  { year: 1999, holders: 21417 },
  { year: 2000, holders: 66674 },
  { year: 2001, holders: 70032 },
  { year: 2002, holders: 72697 },
  { year: 2003, holders: 74629 },
  { year: 2004, holders: 77321 },
  { year: 2005, holders: 81273 },
  { year: 2006, holders: 81685 }, // peak
  { year: 2007, holders: 80794 },
  { year: 2008, holders: 79596 },
  { year: 2009, holders: 78588 },
  { year: 2010, holders: 77533 },
  { year: 2011, holders: 75958 },
  { year: 2012, holders: 74875 },
  { year: 2013, holders: 74071 },
  { year: 2014, holders: 72688 },
  { year: 2015, holders: 71185 },
  { year: 2016, holders: 69557 },
  { year: 2017, holders: 68293 },
  { year: 2018, holders: 67758 },
  { year: 2019, holders: 66575 },
  { year: 2020, holders: 61350 },
  { year: 2021, holders: 58863 },
  { year: 2022, holders: 57319 },
  { year: 2023, holders: 54823 },
  { year: 2024, holders: 51898 },
  { year: 2025, holders: 51225, terminationZone: true },
  { year: 2026, holders: 0,     terminationZone: true },
];

// tpsLineData is the same series — kept as a named export for chart compatibility
export const tpsLineData = tpsData;

export const tpsAnnotations = {
  designated: {
    year: 1999,
    label: 'TPS designated',
    sublabel: 'Following Hurricane Mitch',
  },
  peak: {
    year: 2006,
    label: 'Peak: 81,685',
    sublabel: 'Dec. 2006',
  },
  terminated: {
    year: 2025,
    label: 'TPS terminated',
    sublabel: 'Sept. 8, 2025 (litigation ongoing)',
    note: 'Dec. 2025 injunction vacated by 9th Circuit stay (Feb. 2026). Status in legal limbo as of June 2026.',
  },
};
