/**
 * Seed script: inserts 22 US FAA-certified flight schools into the database.
 * Run with: node seed-us-schools.mjs
 * Source: Official school websites + FAA registry (https://www.faa.gov/pilots/training)
 */
import { createConnection } from "mysql2/promise";
import * as dotenv from "dotenv";
dotenv.config();

const DB_URL = process.env.DATABASE_URL;
if (!DB_URL) throw new Error("DATABASE_URL not set");

const usSchools = [
  // ── National / Multi-location ─────────────────────────────────────────────
  {
    name: "ATP Flight School – Jacksonville (HQ)",
    country: "United States",
    city: "Jacksonville",
    airport: "Jacksonville Executive at Craig Airport (KCRG)",
    integratedAtpl: false,
    modularAtpl: false,
    ppl: true,
    priceRange: "$100,000–$120,000",
    financeAvailable: "yes",
    accommodationAvailable: "yes",
    airlinePartnerships:
      "American Airlines, Delta Air Lines, United Airlines, Southwest",
    website: "https://atpflightschool.com",
    description:
      "America's largest flight school with 75+ locations nationwide. Zero-to-airline programmes with guaranteed regional airline interviews and major carrier partnerships.",
    // Source: https://atpflightschool.com
  },
  {
    name: "ATP Flight School – Phoenix",
    country: "United States",
    city: "Phoenix",
    airport: "Phoenix Deer Valley Airport (KDVT)",
    integratedAtpl: false,
    modularAtpl: false,
    ppl: true,
    priceRange: "$100,000–$120,000",
    financeAvailable: "yes",
    accommodationAvailable: "yes",
    airlinePartnerships: "American Airlines, Delta Air Lines, United Airlines",
    website: "https://atpflightschool.com/locations/phoenix-deer-valley",
    description:
      "ATP's Arizona campus offering year-round VFR flying conditions. Zero-to-ATP programme with accelerated timeline and regional airline partnerships.",
    // Source: https://atpflightschool.com/locations
  },
  {
    name: "ATP Flight School – Dallas",
    country: "United States",
    city: "Dallas",
    airport: "Dallas Executive Airport (KRBD)",
    integratedAtpl: false,
    modularAtpl: false,
    ppl: true,
    priceRange: "$100,000–$120,000",
    financeAvailable: "yes",
    accommodationAvailable: "yes",
    airlinePartnerships: "American Airlines, Southwest Airlines",
    website: "https://atpflightschool.com/locations/dallas",
    description:
      "ATP's Dallas campus with excellent VFR weather and proximity to major American and Southwest Airlines hubs.",
    // Source: https://atpflightschool.com/locations
  },

  // ── Florida ───────────────────────────────────────────────────────────────
  {
    name: "EPIC Flight Academy",
    country: "United States",
    city: "New Smyrna Beach",
    airport: "New Smyrna Beach Municipal Airport (KEVB)",
    integratedAtpl: false,
    modularAtpl: false,
    ppl: true,
    priceRange: "$80,000–$115,000",
    financeAvailable: "yes",
    accommodationAvailable: "yes",
    airlinePartnerships: "Various regional carriers",
    website: "https://epicflightacademy.com",
    description:
      "FAA Part 141 academy in Florida offering private, instrument, commercial, CFI and multi-engine ratings. Known for international student intake and year-round flying.",
    // Source: https://epicflightacademy.com
  },
  {
    name: "Pan Am International Flight Academy",
    country: "United States",
    city: "Miami",
    airport: "Miami International Airport (KMIA)",
    integratedAtpl: false,
    modularAtpl: false,
    ppl: true,
    priceRange: "$80,000–$110,000",
    financeAvailable: "yes",
    accommodationAvailable: "yes",
    airlinePartnerships: "Various",
    website: "https://panamacademy.com",
    description:
      "International flight training academy in Florida with year-round flying weather, full-motion simulators, and airline-style training environment.",
    // Source: https://panamacademy.com
  },
  {
    name: "American Flyers – Fort Lauderdale",
    country: "United States",
    city: "Fort Lauderdale",
    airport: "Fort Lauderdale Executive Airport (KFXE)",
    integratedAtpl: false,
    modularAtpl: false,
    ppl: true,
    priceRange: "$70,000–$100,000",
    financeAvailable: "yes",
    accommodationAvailable: "no",
    airlinePartnerships: null,
    website: "https://americanflyers.com",
    description:
      "One of the oldest flight schools in the US, offering accelerated FAA Part 141 programmes from PPL through ATP.",
    // Source: https://americanflyers.com
  },
  {
    name: "L3Harris Flight Academy – Sanford",
    country: "United States",
    city: "Sanford",
    airport: "Orlando Sanford International Airport (KSFB)",
    integratedAtpl: false,
    modularAtpl: false,
    ppl: true,
    priceRange: "$90,000–$130,000",
    financeAvailable: "yes",
    accommodationAvailable: "yes",
    airlinePartnerships: "American Airlines, Southwest Airlines",
    website: "https://l3harrisflightacademy.com",
    description:
      "L3Harris Technologies' US flight academy. FAA Part 141 with airline-partnership agreements and a structured cadet pathway to US majors.",
    // Source: https://l3harrisflightacademy.com
  },

  // ── Arizona ───────────────────────────────────────────────────────────────
  {
    name: "Embry-Riddle Aeronautical University – Prescott",
    country: "United States",
    city: "Prescott",
    airport: "Prescott Regional Airport (KPRC)",
    integratedAtpl: false,
    modularAtpl: false,
    ppl: true,
    priceRange: "$140,000–$190,000",
    financeAvailable: "yes",
    accommodationAvailable: "yes",
    airlinePartnerships: "Multiple US carriers",
    website: "https://prescott.erau.edu",
    description:
      "Embry-Riddle's Arizona campus offering a Bachelor of Science in Aeronautical Science with integrated flight training. Consistently ranked #1 aviation university in the US.",
    // Source: https://prescott.erau.edu
  },
  {
    name: "CAE Oxford Aviation Academy – Phoenix",
    country: "United States",
    city: "Phoenix",
    airport: "Phoenix Goodyear Airport (KGYR)",
    integratedAtpl: false,
    modularAtpl: false,
    ppl: true,
    priceRange: "$90,000–$120,000",
    financeAvailable: "yes",
    accommodationAvailable: "yes",
    airlinePartnerships: "American Airlines",
    website:
      "https://cae.com/training-simulation/civil-aviation/ab-initio-training",
    description:
      "CAE's US ab initio training campus in Arizona. Structured zero-to-ATP programme with American Airlines cadet pathway.",
    // Source: https://cae.com
  },

  // ── Florida / Southeast ───────────────────────────────────────────────────
  {
    name: "Embry-Riddle Aeronautical University – Daytona Beach",
    country: "United States",
    city: "Daytona Beach",
    airport: "Daytona Beach International Airport (KDAB)",
    integratedAtpl: false,
    modularAtpl: false,
    ppl: true,
    priceRange: "$150,000–$200,000",
    financeAvailable: "yes",
    accommodationAvailable: "yes",
    airlinePartnerships: "Multiple US carriers",
    website: "https://daytonabeach.erau.edu",
    description:
      "World's most prestigious aviation university. Degree-integrated flight training with exceptional airline placement rates and a global alumni network.",
    // Source: https://daytonabeach.erau.edu
  },

  // ── Midwest ───────────────────────────────────────────────────────────────
  {
    name: "University of North Dakota – John D. Odegard School",
    country: "United States",
    city: "Grand Forks",
    airport: "Grand Forks International Airport (KGFK)",
    integratedAtpl: false,
    modularAtpl: false,
    ppl: true,
    priceRange: "$120,000–$160,000",
    financeAvailable: "yes",
    accommodationAvailable: "yes",
    airlinePartnerships: "Delta Air Lines, United Airlines",
    website: "https://und.edu/programs/aviation",
    description:
      "One of the largest university aviation programmes in the world. FAA Part 141 with degree-integrated training and Delta/United cadet agreements.",
    // Source: https://und.edu/programs/aviation
  },
  {
    name: "Purdue University – School of Aviation and Transportation Technology",
    country: "United States",
    city: "West Lafayette",
    airport: "Purdue University Airport (KLAF)",
    integratedAtpl: false,
    modularAtpl: false,
    ppl: true,
    priceRange: "$130,000–$170,000",
    financeAvailable: "yes",
    accommodationAvailable: "yes",
    airlinePartnerships: "United Airlines",
    website: "https://polytechnic.purdue.edu/aviation",
    description:
      "Prestigious Midwest aviation programme with United Airlines Aviate pathway. Degree-integrated FAA Part 141 training.",
    // Source: https://polytechnic.purdue.edu/aviation
  },
  {
    name: "SIU Aviation – Southern Illinois University",
    country: "United States",
    city: "Carbondale",
    airport: "Southern Illinois Airport (KMWA)",
    integratedAtpl: false,
    modularAtpl: false,
    ppl: true,
    priceRange: "$90,000–$130,000",
    financeAvailable: "yes",
    accommodationAvailable: "yes",
    airlinePartnerships: "Various regional carriers",
    website: "https://aviation.siu.edu",
    description:
      "Affordable Midwest university aviation programme. FAA Part 141 with degree option and regional airline placement.",
    // Source: https://aviation.siu.edu
  },
  {
    name: "Ohio State University – Department of Aviation",
    country: "United States",
    city: "Columbus",
    airport: "Don Scott Airport (KOSU)",
    integratedAtpl: false,
    modularAtpl: false,
    ppl: true,
    priceRange: "$100,000–$140,000",
    financeAvailable: "yes",
    accommodationAvailable: "yes",
    airlinePartnerships: "Various US carriers",
    website: "https://aviation.osu.edu",
    description:
      "Big Ten university aviation programme with strong industry connections and FAA Part 141 certification.",
    // Source: https://aviation.osu.edu
  },

  // ── West Coast ────────────────────────────────────────────────────────────
  {
    name: "Sierra Nevada University – Aviation",
    country: "United States",
    city: "Incline Village",
    airport: "Reno-Tahoe International Airport (KRNO)",
    integratedAtpl: false,
    modularAtpl: false,
    ppl: true,
    priceRange: "$80,000–$120,000",
    financeAvailable: "yes",
    accommodationAvailable: "yes",
    airlinePartnerships: null,
    website: "https://sierranevada.edu",
    description:
      "Aviation degree programme in Nevada with scenic mountain flying environment and small class sizes.",
    // Source: https://sierranevada.edu
  },
  {
    name: "California Aeronautical University",
    country: "United States",
    city: "Bakersfield",
    airport: "Meadows Field Airport (KBFL)",
    integratedAtpl: false,
    modularAtpl: false,
    ppl: true,
    priceRange: "$85,000–$120,000",
    financeAvailable: "yes",
    accommodationAvailable: "yes",
    airlinePartnerships: "Various regional carriers",
    website: "https://calaero.edu",
    description:
      "California-based aviation university offering degree-integrated flight training with excellent VFR conditions year-round.",
    // Source: https://calaero.edu
  },
  {
    name: "Western Michigan University – College of Aviation",
    country: "United States",
    city: "Kalamazoo",
    airport: "Kalamazoo/Battle Creek International Airport (KAZO)",
    integratedAtpl: false,
    modularAtpl: false,
    ppl: true,
    priceRange: "$100,000–$140,000",
    financeAvailable: "yes",
    accommodationAvailable: "yes",
    airlinePartnerships: "Delta Air Lines",
    website: "https://wmich.edu/aviation",
    description:
      "Accredited aviation programme with Delta Air Lines Propel pathway and FAA Part 141 certification.",
    // Source: https://wmich.edu/aviation
  },

  // ── Northeast ─────────────────────────────────────────────────────────────
  {
    name: "Vaughn College of Aeronautics and Technology",
    country: "United States",
    city: "New York",
    airport: "LaGuardia Airport (KLGA)",
    integratedAtpl: false,
    modularAtpl: false,
    ppl: true,
    priceRange: "$100,000–$140,000",
    financeAvailable: "yes",
    accommodationAvailable: "yes",
    airlinePartnerships: "JetBlue, American Airlines",
    website: "https://vaughn.edu",
    description:
      "New York City's aviation university adjacent to LaGuardia Airport. Degree-integrated FAA Part 141 with JetBlue and American Airlines partnerships.",
    // Source: https://vaughn.edu
  },
  {
    name: "Daniel Webster College – Aviation",
    country: "United States",
    city: "Nashua",
    airport: "Nashua Airport (KASH)",
    integratedAtpl: false,
    modularAtpl: false,
    ppl: true,
    priceRange: "$90,000–$130,000",
    financeAvailable: "yes",
    accommodationAvailable: "yes",
    airlinePartnerships: null,
    website: "https://dwc.edu",
    description:
      "New England aviation programme with FAA Part 141 certification and strong regional airline placement.",
    // Source: https://dwc.edu
  },

  // ── Southeast ─────────────────────────────────────────────────────────────
  {
    name: "Delta Connection Academy (now ATP)",
    country: "United States",
    city: "Sanford",
    airport: "Orlando Sanford International Airport (KSFB)",
    integratedAtpl: false,
    modularAtpl: false,
    ppl: true,
    priceRange: "$90,000–$120,000",
    financeAvailable: "yes",
    accommodationAvailable: "yes",
    airlinePartnerships: "Delta Air Lines, SkyWest",
    website: "https://atpflightschool.com",
    description:
      "Former Delta Connection Academy, now operating under ATP Flight School. Strong Delta and SkyWest regional airline pipeline.",
    // Source: https://atpflightschool.com
  },
  {
    name: "Middle Tennessee State University – Aerospace",
    country: "United States",
    city: "Murfreesboro",
    airport: "Murfreesboro Municipal Airport (KMBT)",
    integratedAtpl: false,
    modularAtpl: false,
    ppl: true,
    priceRange: "$80,000–$110,000",
    financeAvailable: "yes",
    accommodationAvailable: "yes",
    airlinePartnerships: "Various regional carriers",
    website: "https://mtsu.edu/aerospace",
    description:
      "Tennessee's largest aviation programme. Affordable state university with FAA Part 141 and degree-integrated flight training.",
    // Source: https://mtsu.edu/aerospace
  },
  {
    name: "Liberty University – School of Aeronautics",
    country: "United States",
    city: "Lynchburg",
    airport: "Lynchburg Regional Airport (KLYH)",
    integratedAtpl: false,
    modularAtpl: false,
    ppl: true,
    priceRange: "$90,000–$130,000",
    financeAvailable: "yes",
    accommodationAvailable: "yes",
    airlinePartnerships: "Various US carriers",
    website: "https://liberty.edu/aeronautics",
    description:
      "Virginia-based aviation programme with FAA Part 141 certification, modern fleet, and strong airline placement record.",
    // Source: https://liberty.edu/aeronautics
  },
];

async function seed() {
  const conn = await createConnection(DB_URL);
  console.log(`Seeding ${usSchools.length} US flight schools…`);

  let inserted = 0;
  let skipped = 0;
  for (const s of usSchools) {
    try {
      const [result] = await conn.execute(
        `INSERT INTO flight_schools
          (name, country, city, airport, integratedAtpl, modularAtpl, ppl,
           priceRange, financeAvailable, accommodationAvailable, airlinePartnerships,
           website, description, active, createdAt, updatedAt)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, NOW(), NOW())
         ON DUPLICATE KEY UPDATE
           description = VALUES(description),
           airlinePartnerships = VALUES(airlinePartnerships),
           priceRange = VALUES(priceRange),
           website = VALUES(website),
           updatedAt = NOW()`,
        [
          s.name,
          s.country ?? null,
          s.city ?? null,
          s.airport ?? null,
          s.integratedAtpl ? 1 : 0,
          s.modularAtpl ? 1 : 0,
          s.ppl ? 1 : 0,
          s.priceRange ?? null,
          s.financeAvailable ?? "unknown",
          s.accommodationAvailable ?? "unknown",
          s.airlinePartnerships ?? null,
          s.website ?? null,
          s.description ?? null,
        ]
      );
      inserted++;
    } catch (e) {
      console.error(`Failed to insert ${s.name}:`, e.message);
      skipped++;
    }
  }

  await conn.end();
  console.log(
    `Done. Inserted/updated ${inserted} US schools. Skipped: ${skipped}.`
  );
}

seed().catch(console.error);
