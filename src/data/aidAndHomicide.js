// ============================================================
// DATA FILE: aidAndHomicide.js
// Charts: Section 2 (Cold War), Section 3 (Narco transition), Section 5 (Coup)
// ============================================================
//
// === US AID ===
// Source: USAID Foreign Aid Explorer (us_foreign_aid_country.csv)
//   Transaction type: Obligations; constant 2021 USD ÷ 1,000,000
//   Coverage: FY1978–FY2020
// Cross-reference: Kruckewitt (When States Kill, Table 7.1) authorized grants+loans
//   in current USD 1979–1989. Both series show 1984–85 as Cold War peak.
//   Cuéllar confirms: "$1.6 billion in military and economic assistance, 1980–1992."
//
// === HOMICIDE RATE ===
// Source: UNODC Intentional Homicide dataset (UNODC-homicide.xlsx)
//   Rate per 100,000 population; Dimension=Total/Category=Total/Sex=Total
// Data quality:
//   - 1996–1998: UNODC has no Honduras data. Values are LINEAR INTERPOLATIONS
//     between 1995 (26.7) and 1999 (40.0), flagged estimated:true. Consistent
//     with Cuéllar's description of steadily rising insecurity through late 1990s.
//   - 2015, 2020, 2022: near-zero anomalies in source — excluded entirely.
//     Recharts connectNulls will bridge these gaps visually.
// Scholarly corroboration:
//   - Cuéllar p.462: "homicides increased from 64 to 83 per 100,000 (2009–2012)"
//     → UNODC: 2009=64.5, 2011=83.2 ✓
//   - Cuéllar p.461, World Bank: "all-time high of ~55/100k" in 2003
//     → UNODC: 57.2 for 2003 ✓

export const aidData = [
  { year: 1978, aid: 77.2 },
  { year: 1979, aid: 110.4 },
  { year: 1980, aid: 184.5 },
  { year: 1981, aid: 133.7 },
  { year: 1982, aid: 278.9 },
  { year: 1983, aid: 305.5 },
  { year: 1984, aid: 244.5 },  // Kruckewitt: peak military $77.4M (current $)
  { year: 1985, aid: 730.9 },  // peak total (constant 2021 $)
  { year: 1986, aid: 373.5 },
  { year: 1987, aid: 475.4 },
  { year: 1988, aid: 452.8 },
  { year: 1989, aid: 196.6 },
  { year: 1990, aid: 453.2 },
  { year: 1991, aid: 322.0 },
  { year: 1992, aid: 173.3 },  // end of Cold War aid pipeline
  { year: 1993, aid: 93.5 },
  { year: 1994, aid: 68.4 },
  { year: 1995, aid: 43.0 },
  { year: 1996, aid: 38.9 },
  { year: 1997, aid: 53.3 },
  { year: 1998, aid: 41.7 },
  { year: 1999, aid: 226.1 },  // post-Mitch recovery surge
  { year: 2000, aid: 72.0 },
  { year: 2001, aid: 87.9 },
  { year: 2002, aid: 51.8 },
  { year: 2003, aid: 145.9 },
  { year: 2004, aid: 101.8 },
  { year: 2005, aid: 447.7 },
  { year: 2006, aid: 120.6 },
  { year: 2007, aid: 90.7 },
  { year: 2008, aid: 102.2 },
  { year: 2009, aid: 61.4 },   // coup year — aid drops
  { year: 2010, aid: 55.4 },
  { year: 2011, aid: 128.7 },
  { year: 2012, aid: 92.7 },
  { year: 2013, aid: 135.4 },
  { year: 2014, aid: 124.8 },
  { year: 2015, aid: 171.2 },
  { year: 2016, aid: 162.4 },
  { year: 2017, aid: 226.3 },
  { year: 2018, aid: 149.7 },
  { year: 2019, aid: 85.0 },
  { year: 2020, aid: 150.0 },
];

export const homicideData = [
  { year: 1990, rate: 9.9 },
  { year: 1991, rate: 13.7 },
  { year: 1992, rate: 18.1 },
  { year: 1993, rate: 23.1 },
  { year: 1994, rate: 30.2 },
  { year: 1995, rate: 26.7 },
  { year: 1996, rate: 30.0, estimated: true },
  { year: 1997, rate: 33.4, estimated: true },
  { year: 1998, rate: 36.7, estimated: true },
  { year: 1999, rate: 40.0 },
  { year: 2000, rate: 48.3 },
  { year: 2001, rate: 51.6 },
  { year: 2002, rate: 52.2 },
  { year: 2003, rate: 57.2 },
  { year: 2004, rate: 49.9 },
  { year: 2005, rate: 43.0 },
  { year: 2006, rate: 40.7 },
  { year: 2007, rate: 45.8 },
  { year: 2008, rate: 55.6 },
  { year: 2009, rate: 64.5 },  // coup — Cuéllar: 64/100k
  { year: 2010, rate: 74.5 },
  { year: 2011, rate: 83.2 },  // Cuéllar: 83/100k post-coup peak
  { year: 2012, rate: 82.3 },
  { year: 2013, rate: 72.3 },
  { year: 2014, rate: 65.0 },
  // 2015 excluded (anomalous near-zero in UNODC source)
  { year: 2016, rate: 54.7 },
  { year: 2017, rate: 40.3 },
  { year: 2018, rate: 38.0 },
  { year: 2019, rate: 41.0 },
  // 2020 excluded (anomalous near-zero)
  { year: 2021, rate: 38.2 },
  // 2022 excluded (anomalous near-zero)
  { year: 2023, rate: 31.4 },
];

// Merged for dual-axis recharts LineChart (aid left axis, rate right axis)
export const combined = (() => {
  const allYears = [...new Set([
    ...aidData.map(d => d.year),
    ...homicideData.map(d => d.year),
  ])].sort((a, b) => a - b);
  return allYears.map(year => ({
    year,
    aid: aidData.find(d => d.year === year)?.aid ?? null,
    rate: homicideData.find(d => d.year === year)?.rate ?? null,
    rateEstimated: homicideData.find(d => d.year === year)?.estimated ?? false,
  }));
})();
