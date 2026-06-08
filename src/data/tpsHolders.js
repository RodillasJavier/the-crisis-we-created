// ============================================================
// DATA FILE: tpsHolders.js
// Chart: Section 8 (TPS and the present)
// ============================================================
//
// Honduras TPS history:
//   - Originally designated January 5, 1999, following Hurricane Mitch (1998)
//   - Renewed continuously for 25+ years; never permanently resolved
//   - Peak ~86,000 active beneficiaries throughout designation period
//   - July 8, 2025: Secretary Noem announced termination (Fed. Reg. 90:30089)
//   - September 8, 2025: Termination effective
//   - December 31, 2025: District court vacated termination (N.D. Cal.)
//   - February 9, 2026: 9th Circuit STAYED district court order — termination
//     effectively reinstated pending appeal. Status as of June 2026: in limbo.
//
// Sources:
//   - Penn Wharton Budget Model (2025): ~86,000 Honduras TPS holders as of early 2025
//   - USCIS TPS designated country page (uscis.gov)
//   - Federal Register 90:30089 (July 8, 2025) — termination notice
//   - CRS Report RS20844 — TPS history
//
// Chart design note:
//   The visual is a flat line at ~86k from 1999 to 2025, then a sharp drop.
//   The legal complexity (injunction → stay) means the "termination" annotation
//   should reference the Fed. Reg. date (July 8, 2025) and note the ongoing
//   litigation, rather than showing a clean cliff.

export const tpsData = [
  // Flat line at ~86,000 from designation through 2024
  // Exact year-by-year figures not publicly available; flat line is accurate representation
  { year: 1999, holders: 86000, note: 'TPS designated (Hurricane Mitch)' },
  { year: 2000, holders: 86000 },
  { year: 2005, holders: 86000 },
  { year: 2010, holders: 86000 },
  { year: 2015, holders: 86000 },
  { year: 2020, holders: 86000 },
  { year: 2024, holders: 86000 },
  // 2025: termination announced July 8; effective Sept 8
  // Show as drop to near-zero with legal-limbo annotation
  { year: 2025, holders: 0, note: 'TPS terminated Sept 8, 2025 (litigation ongoing)' },
];

// For a clean line chart, use this interpolated version
export const tpsLineData = (() => {
  const years = [];
  for (let y = 1999; y <= 2026; y++) years.push(y);
  return years.map(year => ({
    year,
    holders: year <= 2024 ? 86000 : 0,
    terminationZone: year >= 2025,
  }));
})();

export const tpsAnnotations = {
  designated: {
    year: 1999,
    label: 'TPS designated',
    sublabel: 'Following Hurricane Mitch',
  },
  terminated: {
    year: 2025,
    label: 'TPS terminated',
    sublabel: 'Sept. 8, 2025 (litigation ongoing)',
    note: 'Dec. 2025 injunction vacated by 9th Circuit stay (Feb. 2026). Status in legal limbo as of June 2026.',
  },
};
