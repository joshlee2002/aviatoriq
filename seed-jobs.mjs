import { createConnection } from "mysql2/promise";
import * as dotenv from "dotenv";
dotenv.config();

const DB_URL = process.env.DATABASE_URL;
if (!DB_URL) throw new Error("DATABASE_URL not set");

const jobs = [
  // ── UK Jobs (15) ────────────────────────────────────────────────────────────
  {
    title: "First Officer — A320",
    airline: "easyJet",
    location: "London Gatwick (LGW)",
    type: "First Officer",
    hours: "500+ hours on type",
    salary: "£65,000 - £75,000",
    deadline: "Ongoing",
    link: "https://careers.easyjet.com/pilots",
    badge: "Active Recruiting",
    description: "easyJet is recruiting A320 First Officers for its London Gatwick base. Requires UK CAA ATPL and valid A320 type rating.",
    region: "UK",
    active: true
  },
  {
    title: "Direct Entry Captain — B737",
    airline: "Ryanair",
    location: "London Stansted (STN)",
    type: "Captain",
    hours: "3500+ total, 800+ PIC B737",
    salary: "£130,000+",
    deadline: "Dec 2026",
    link: "https://careers.ryanair.com/pilots",
    badge: "High Demand",
    description: "Ryanair seeks Direct Entry Captains for its B737 fleet. Excellent roster patterns and competitive pay.",
    region: "UK",
    active: true
  },
  {
    title: "Cadet Pilot Programme",
    airline: "British Airways",
    location: "London Heathrow (LHR)",
    type: "Cadet",
    hours: "0 hours",
    salary: "Training Sponsored",
    deadline: "Aug 2026",
    link: "https://careers.ba.com/future-pilots",
    badge: "Fully Sponsored",
    description: "The British Airways Speedbird Pilot Academy is open for applications. Fully sponsored integrated ATPL training.",
    region: "UK",
    active: true
  },
  {
    title: "First Officer — B787",
    airline: "TUI Airways",
    location: "Manchester (MAN)",
    type: "First Officer",
    hours: "1500+ total",
    salary: "£70,000+",
    deadline: "Oct 2026",
    link: "https://careers.tuigroup.com",
    badge: "Long Haul",
    description: "TUI is looking for B787 First Officers. Opportunity to fly long-haul holiday routes.",
    region: "UK",
    active: true
  },
  {
    title: "Flight Instructor (FI)",
    airline: "CAE Oxford",
    location: "Oxford (EGTK)",
    type: "Instructor",
    hours: "200+ hours, FI(A)",
    salary: "£35,000 - £45,000",
    deadline: "Ongoing",
    link: "https://www.cae.com/careers",
    badge: "Great for Hour Building",
    description: "CAE is hiring Flight Instructors for their Oxford academy. Excellent way to build hours towards an airline career.",
    region: "UK",
    active: true
  },
  {
    title: "First Officer — A350",
    airline: "Virgin Atlantic",
    location: "London Heathrow (LHR)",
    type: "First Officer",
    hours: "2000+ total",
    salary: "£85,000+",
    deadline: "Nov 2026",
    link: "https://careers.virginatlantic.com",
    badge: "Long Haul",
    description: "Join Virgin Atlantic's growing A350 fleet. Requires UK CAA ATPL and multi-crew experience.",
    region: "UK",
    active: true
  },
  {
    title: "Direct Entry Captain — A320",
    airline: "Wizz Air UK",
    location: "Luton (LTN)",
    type: "Captain",
    hours: "3000+ total, 500+ PIC",
    salary: "£120,000+",
    deadline: "Ongoing",
    link: "https://careers.wizzair.com",
    badge: "Fast Track Command",
    description: "Wizz Air UK is expanding and needs experienced A320 Captains. Fixed roster patterns available.",
    region: "UK",
    active: true
  },
  {
    title: "First Officer — E190",
    airline: "Loganair",
    location: "Edinburgh (EDI)",
    type: "First Officer",
    hours: "500+ hours",
    salary: "£50,000 - £60,000",
    deadline: "Sep 2026",
    link: "https://www.loganair.co.uk/careers",
    badge: "Regional",
    description: "Fly regional routes across the UK and Europe with Scotland's airline.",
    region: "UK",
    active: true
  },
  {
    title: "Cadet Pilot Programme",
    airline: "easyJet",
    location: "Multiple UK Bases",
    type: "Cadet",
    hours: "0 hours",
    salary: "Self-funded",
    deadline: "Ongoing",
    link: "https://careers.easyjet.com/pilots/generation-easyjet",
    badge: "MPL Route",
    description: "Generation easyJet Pilot Training Programme in partnership with CAE. MPL route to the right seat.",
    region: "UK",
    active: true
  },
  {
    title: "First Officer — ATR72",
    airline: "Eastern Airways",
    location: "Aberdeen (EDI)",
    type: "First Officer",
    hours: "500+ hours",
    salary: "£45,000+",
    deadline: "Ongoing",
    link: "https://www.easternairways.com/careers",
    badge: "Regional",
    description: "Eastern Airways is seeking ATR72 First Officers for domestic routes.",
    region: "UK",
    active: true
  },
  {
    title: "Flight Instructor (CRI)",
    airline: "L3Harris",
    location: "London Training Centre",
    type: "Instructor",
    hours: "500+ hours, CRI/IRI",
    salary: "£40,000+",
    deadline: "Ongoing",
    link: "https://careers.l3harris.com",
    badge: "Simulator Training",
    description: "L3Harris is hiring simulator instructors for their London facility.",
    region: "UK",
    active: true
  },
  {
    title: "First Officer — A330",
    airline: "Aer Lingus UK",
    location: "Manchester (MAN)",
    type: "First Officer",
    hours: "1500+ total",
    salary: "£75,000+",
    deadline: "Oct 2026",
    link: "https://careers.aerlingus.com",
    badge: "Transatlantic",
    description: "Aer Lingus UK is recruiting A330 First Officers for direct flights to the US and Caribbean.",
    region: "UK",
    active: true
  },
  {
    title: "Direct Entry Captain — Q400",
    airline: "Blue Islands",
    location: "Southampton (EDI)",
    type: "Captain",
    hours: "2500+ total",
    salary: "£80,000+",
    deadline: "Ongoing",
    link: "https://www.blueislands.com/careers",
    badge: "Regional",
    description: "Blue Islands is looking for experienced Q400 Captains.",
    region: "UK",
    active: true
  },
  {
    title: "First Officer — B737",
    airline: "Jet2.com",
    location: "Leeds Bradford (LBA)",
    type: "First Officer",
    hours: "500+ hours on type",
    salary: "£65,000+",
    deadline: "Dec 2026",
    link: "https://jet2careers.com",
    badge: "Holiday Routes",
    description: "Join Jet2.com flying holidaymakers across Europe. Great company culture.",
    region: "UK",
    active: true
  },
  {
    title: "Helicopter Pilot (HEMS)",
    airline: "Air Ambulance UK",
    location: "Various",
    type: "Other",
    hours: "1500+ RW",
    salary: "£70,000+",
    deadline: "Ongoing",
    link: "https://www.airambulancesuk.org",
    badge: "Specialist",
    description: "Experienced helicopter pilots required for HEMS operations.",
    region: "UK",
    active: true
  },

  // ── US Jobs (10) ────────────────────────────────────────────────────────────
  {
    title: "First Officer — B737/A320",
    airline: "Delta Air Lines",
    location: "Atlanta (ATL)",
    type: "First Officer",
    hours: "1500+ hours (ATP)",
    salary: "$110,000+",
    deadline: "Ongoing",
    link: "https://www.deltajobs.net",
    badge: "Legacy Carrier",
    description: "Delta is hiring First Officers. Requires FAA ATP and 1500 hours.",
    region: "US",
    active: true
  },
  {
    title: "First Officer — ERJ175",
    airline: "SkyWest Airlines",
    location: "Salt Lake City (SLC)",
    type: "First Officer",
    hours: "1500+ hours (ATP/R-ATP)",
    salary: "$90,000+",
    deadline: "Ongoing",
    link: "https://www.skywest.com/careers",
    badge: "Regional",
    description: "Start your airline career with SkyWest. Great pathway to legacy carriers.",
    region: "US",
    active: true
  },
  {
    title: "Direct Entry Captain — A320",
    airline: "Spirit Airlines",
    location: "Fort Lauderdale (FLL)",
    type: "Captain",
    hours: "3000+ total, 1000+ Part 121",
    salary: "$250,000+",
    deadline: "Ongoing",
    link: "https://careers.spirit.com",
    badge: "LCC",
    description: "Spirit is looking for Direct Entry Captains. High earning potential.",
    region: "US",
    active: true
  },
  {
    title: "First Officer — B737",
    airline: "Southwest Airlines",
    location: "Dallas (DAL)",
    type: "First Officer",
    hours: "1500+ hours (ATP)",
    salary: "$115,000+",
    deadline: "Ongoing",
    link: "https://careers.southwestair.com",
    badge: "Major Carrier",
    description: "Join the Southwest family. Requires FAA ATP and preferred B737 type rating.",
    region: "US",
    active: true
  },
  {
    title: "Flight Instructor (CFI/CFII)",
    airline: "ATP Flight School",
    location: "Phoenix (AZ)",
    type: "Instructor",
    hours: "250+ hours, CFI",
    salary: "$40,000 - $60,000",
    deadline: "Ongoing",
    link: "https://atpflightschool.com/careers",
    badge: "Hour Building",
    description: "Build your hours to 1500 as a CFI with ATP Flight School.",
    region: "US",
    active: true
  },
  {
    title: "First Officer — CRJ900",
    airline: "Endeavor Air",
    location: "Minneapolis (SLC)",
    type: "First Officer",
    hours: "1500+ hours (ATP/R-ATP)",
    salary: "$90,000+",
    deadline: "Ongoing",
    link: "https://www.endeavorair.com/careers",
    badge: "Delta Connection",
    description: "Fly for Delta Connection. Guaranteed interview with Delta Air Lines.",
    region: "US",
    active: true
  },
  {
    title: "First Officer — B777/B767",
    airline: "FedEx Express",
    location: "Memphis (MEM)",
    type: "First Officer",
    hours: "2000+ total",
    salary: "$120,000+",
    deadline: "Ongoing",
    link: "https://careers.fedex.com",
    badge: "Cargo",
    description: "Fly heavy metal around the world with FedEx.",
    region: "US",
    active: true
  },
  {
    title: "Cadet Pilot Programme",
    airline: "United Aviate",
    location: "Denver (DVT)",
    type: "Cadet",
    hours: "0 hours",
    salary: "Self-funded / Loans",
    deadline: "Ongoing",
    link: "https://unitedaviate.com",
    badge: "Pathway",
    description: "United's Aviate Academy offers a direct path to the United flight deck.",
    region: "US",
    active: true
  },
  {
    title: "First Officer — A220",
    airline: "Breeze Airways",
    location: "Tampa (TPA)",
    type: "First Officer",
    hours: "1500+ hours (ATP)",
    salary: "$100,000+",
    deadline: "Ongoing",
    link: "https://flybreeze.com/careers",
    badge: "Startup",
    description: "Join the fast-growing Breeze Airways flying the modern A220.",
    region: "US",
    active: true
  },
  {
    title: "Corporate Pilot — Gulfstream G550",
    airline: "NetJets",
    location: "Teterboro (TEB)",
    type: "First Officer",
    hours: "2500+ total",
    salary: "$130,000+",
    deadline: "Ongoing",
    link: "https://www.netjets.com/careers",
    badge: "Corporate",
    description: "Fly high-net-worth individuals globally on the G550.",
    region: "US",
    active: true
  },

  // ── Global/AU/CA Jobs (5) ───────────────────────────────────────────────────
  {
    title: "First Officer — A380",
    airline: "Emirates",
    location: "Dubai (DXB)",
    type: "First Officer",
    hours: "2000+ multi-crew",
    salary: "Tax Free + Housing",
    deadline: "Ongoing",
    link: "https://www.emiratesgroupcareers.com",
    badge: "Expat",
    description: "Live in Dubai and fly the A380 globally. Excellent expat package.",
    region: "Global",
    active: true
  },
  {
    title: "First Officer — B737",
    airline: "Qantas",
    location: "Sydney (SYD)",
    type: "First Officer",
    hours: "1500+ total",
    salary: "$120,000 AUD+",
    deadline: "Nov 2026",
    link: "https://www.qantas.com/careers",
    badge: "Flag Carrier",
    description: "Qantas is recruiting for its domestic B737 fleet.",
    region: "Global",
    active: true
  },
  {
    title: "First Officer — A320",
    airline: "Air Canada",
    location: "Toronto (YYZ)",
    type: "First Officer",
    hours: "2000+ total",
    salary: "$80,000 CAD+",
    deadline: "Ongoing",
    link: "https://careers.aircanada.com",
    badge: "Flag Carrier",
    description: "Join Air Canada's narrowbody fleet. Requires Transport Canada ATPL.",
    region: "Global",
    active: true
  },
  {
    title: "Cadet Pilot Programme",
    airline: "Cathay Pacific",
    location: "Hong Kong (HKG)",
    type: "Cadet",
    hours: "0 hours",
    salary: "Sponsored",
    deadline: "Ongoing",
    link: "https://careers.cathaypacific.com",
    badge: "Sponsored",
    description: "Cathay Pacific Cadet Pilot Programme. Train in Australia, fly in Hong Kong.",
    region: "Global",
    active: true
  },
  {
    title: "First Officer — B787",
    airline: "Qatar Airways",
    location: "Doha (DOH)",
    type: "First Officer",
    hours: "1000+ multi-crew",
    salary: "Tax Free + Allowances",
    deadline: "Ongoing",
    link: "https://careers.qatarairways.com",
    badge: "Expat",
    description: "Join the World's Best Airline flying the modern B787 fleet.",
    region: "Global",
    active: true
  }
];

async function seedJobs() {
  console.log("Connecting to database...");
  const connection = await createConnection(DB_URL);
  try {
    console.log("Clearing existing jobs...");
    await connection.execute("DELETE FROM pilot_jobs");
    
    console.log(`Inserting ${jobs.length} jobs...`);
    for (const job of jobs) {
      await connection.execute(
        `INSERT INTO pilot_jobs (title, airline, location, type, hours, salary, deadline, link, badge, description, region, active)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [job.title, job.airline, job.location, job.type, job.hours, job.salary, job.deadline, job.link, job.badge, job.description, job.region, job.active]
      );
    }
    console.log("Jobs seeded successfully!");
  } catch (error) {
    console.error("Error seeding jobs:", error);
  } finally {
    await connection.end();
  }
}

seedJobs();
