import { createConnection } from "mysql2/promise";
import * as dotenv from "dotenv";
dotenv.config();

const DB_URL = process.env.DATABASE_URL;
if (!DB_URL) throw new Error("DATABASE_URL not set");

const stories = [
  {
    name: "James Carter",
    role: "First Officer",
    airline: "TUI",
    route: "UK Integrated",
    trainingDuration: "18 months",
    totalCost: "£95,000",
    school: "CAE Oxford",
    country: "United Kingdom",
    heroQuote: "I went from working in an office to flying a Boeing 787 in just under two years. The integrated route is intense but worth it.",
    qa: JSON.stringify([
      { q: "Why did you choose the integrated route?", a: "I wanted the fastest, most direct path to the right seat of a commercial airliner. The structure and airline partnerships of integrated schools appealed to me." },
      { q: "How did you finance your training?", a: "It was a combination of savings, a loan secured against my parents' house, and working part-time before starting the course." },
      { q: "What was the hardest part of flight school?", a: "The ATPL ground school exams. 14 exams in 6 months requires a level of dedication I had never experienced before." }
    ]),
    tags: "UK,Integrated,Career Changer",
    imageUrl: "https://images.unsplash.com/photo-1559535345-31627f12e8eb?auto=format&fit=crop&q=80&w=400&h=400",
    active: true,
    featured: true
  },
  {
    name: "Sarah Jenkins",
    role: "First Officer",
    airline: "easyJet",
    route: "UK Modular",
    trainingDuration: "3 years",
    totalCost: "£65,000",
    school: "Various (Modular)",
    country: "United Kingdom",
    heroQuote: "Modular training allowed me to keep my job and pay as I go. It took longer, but I graduated with zero debt.",
    qa: JSON.stringify([
      { q: "How did you balance working and flying?", a: "I flew on weekends and took annual leave for intensive blocks like my CPL and ME-IR. It requires strict time management." },
      { q: "Did airlines look down on the modular route?", a: "Not at all. easyJet was very welcoming. They value the life experience and resilience that modular students often bring." },
      { q: "What's your advice for modular students?", a: "Network as much as possible. Integrated students have a built-in network; modular students have to create their own." }
    ]),
    tags: "UK,Modular,Debt-Free,Women in Aviation",
    imageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=400&h=400",
    active: true,
    featured: true
  },
  {
    name: "Michael Rodriguez",
    role: "First Officer",
    airline: "Delta Air Lines",
    route: "US Part 61 / CFI",
    trainingDuration: "4 years",
    totalCost: "$85,000",
    school: "ATP Flight School",
    country: "United States",
    heroQuote: "Instructing was the hardest but most rewarding flying I've done. It made me a much better pilot before hitting the airlines.",
    qa: JSON.stringify([
      { q: "How did you reach the 1500 hour rule?", a: "I worked as a Certified Flight Instructor (CFI) for two years after getting my commercial license." },
      { q: "Was the transition to a regional jet difficult?", a: "The speed and automation were a jump, but the fundamental flying skills I honed as a CFI made the transition manageable." },
      { q: "Why did you choose Part 61 over Part 141?", a: "Flexibility and cost. I could learn at my own pace and choose my instructors." }
    ]),
    tags: "US,Part 61,CFI,1500 Hours",
    imageUrl: "https://images.unsplash.com/photo-1551525048-b39178f24419?auto=format&fit=crop&q=80&w=400&h=400",
    active: true,
    featured: false
  },
  {
    name: "Emma Thompson",
    role: "Captain",
    airline: "QantasLink",
    route: "Australian University",
    trainingDuration: "3 years",
    totalCost: "$120,000 AUD",
    school: "UNSW Aviation",
    country: "Australia",
    heroQuote: "Getting a degree alongside my licenses gave me a great backup plan and access to the FEE-HELP loan system.",
    qa: JSON.stringify([
      { q: "Why the university route?", a: "In Australia, it allows you to access government student loans (FEE-HELP) which makes funding much easier." },
      { q: "What was your first job?", a: "I flew charter flights in the Outback for a year. It was incredible experience flying in remote areas." },
      { q: "How is flying regionally in Australia?", a: "Challenging weather and diverse destinations. It's fantastic flying." }
    ]),
    tags: "Australia,University,Regional,Women in Aviation",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
    active: true,
    featured: false
  },
  {
    name: "David Chen",
    role: "First Officer",
    airline: "Air Canada",
    route: "Canadian Cadet Program",
    trainingDuration: "2 years",
    totalCost: "$90,000 CAD",
    school: "Seneca College",
    country: "Canada",
    heroQuote: "Flying in Canadian winters builds character. The cadet program gave me a direct line to the national carrier.",
    qa: JSON.stringify([
      { q: "How did you handle winter flying?", a: "You learn very quickly about icing, de-icing procedures, and winter weather systems. It's invaluable experience." },
      { q: "Did the cadet program guarantee a job?", a: "It guaranteed an interview, but you still had to pass the simulator assessment and technical interviews." }
    ]),
    tags: "Canada,Cadet,Winter Flying",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400",
    active: true,
    featured: false
  },
  {
    name: "Thomas Wright",
    role: "First Officer",
    airline: "British Airways",
    route: "Military Transition",
    trainingDuration: "6 months (Conversion)",
    totalCost: "£15,000",
    school: "Military to Civil",
    country: "United Kingdom",
    heroQuote: "Transitioning from fast jets to heavy airliners was a shift in mindset—from tactical flying to passenger comfort and efficiency.",
    qa: JSON.stringify([
      { q: "How easy was the conversion?", a: "The flying is easy, but learning civilian regulations, new SOPs, and commercial operations took some studying." },
      { q: "Did your military hours count?", a: "Yes, the CAA recognizes military hours, which allowed me to do a shortened conversion course." }
    ]),
    tags: "UK,Military,Career Changer",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
    active: true,
    featured: false
  },
  {
    name: "Chloe Dubois",
    role: "First Officer",
    airline: "Air France",
    route: "ENAC State Sponsored",
    trainingDuration: "2.5 years",
    totalCost: "Free (State Sponsored)",
    school: "ENAC",
    country: "France",
    heroQuote: "The ENAC concours is incredibly competitive, but graduating debt-free into a legacy carrier is the ultimate dream.",
    qa: JSON.stringify([
      { q: "How hard is the ENAC entrance exam?", a: "It's heavily focused on advanced math and physics. I studied for a year just for the entrance exam." },
      { q: "Is the training really free?", a: "Yes, the French state sponsors the training for those who pass the concours." }
    ]),
    tags: "Europe,Sponsored,Highly Competitive",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    active: true,
    featured: true
  },
  {
    name: "Omar Al-Fayed",
    role: "First Officer",
    airline: "Emirates",
    route: "Emirates Cadet Program",
    trainingDuration: "2.5 years",
    totalCost: "Sponsored",
    school: "Emirates Flight Training Academy",
    country: "UAE",
    heroQuote: "Training in Dubai and moving straight onto the Boeing 777 was a steep learning curve, but the support was world-class.",
    qa: JSON.stringify([
      { q: "What's it like flying the 777 as your first jet?", a: "Intimidating at first. The automation is incredible, but you must stay ahead of the aircraft." },
      { q: "How is life as an expat pilot?", a: "Dubai is fantastic. The tax-free salary and company housing make it a very comfortable lifestyle." }
    ]),
    tags: "Middle East,Cadet,Widebody,Expat",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
    active: true,
    featured: false
  },
  {
    name: "Jessica Patel",
    role: "First Officer",
    airline: "Southwest Airlines",
    route: "US Part 141 / University",
    trainingDuration: "4 years",
    totalCost: "$110,000",
    school: "Embry-Riddle",
    country: "United States",
    heroQuote: "A Part 141 university program allowed me to qualify for the Restricted ATP at 1000 hours, getting me to the airlines faster.",
    qa: JSON.stringify([
      { q: "Why Embry-Riddle?", a: "The networking, the R-ATP reduction, and the quality of the fleet and simulators." },
      { q: "How did you fund it?", a: "Scholarships, federal student loans, and working as a dispatcher at the flight line." }
    ]),
    tags: "US,Part 141,University,R-ATP",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400",
    active: true,
    featured: false
  },
  {
    name: "Lucas Müller",
    role: "First Officer",
    airline: "Lufthansa",
    route: "Lufthansa Group Cadet",
    trainingDuration: "2 years",
    totalCost: "€80,000 (Deferred)",
    school: "European Flight Academy",
    country: "Germany",
    heroQuote: "The deferred payment scheme meant I only started paying for my training once I was earning a First Officer salary.",
    qa: JSON.stringify([
      { q: "How does the deferred payment work?", a: "Lufthansa fronts the cost, and they deduct a percentage of your salary once you start flying for them." },
      { q: "Was the selection process tough?", a: "The DLR test in Hamburg is notoriously difficult, testing everything from spatial awareness to multitasking." }
    ]),
    tags: "Europe,Cadet,Deferred Payment",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400",
    active: true,
    featured: false
  },
  {
    name: "Aisha Ndlovu",
    role: "First Officer",
    airline: "South African Airways",
    route: "SA Modular / Bush Flying",
    trainingDuration: "5 years",
    totalCost: "R800,000",
    school: "Various (South Africa)",
    country: "South Africa",
    heroQuote: "Flying tourists into dirt strips in the Okavango Delta taught me stick-and-rudder skills you can't learn in a simulator.",
    qa: JSON.stringify([
      { q: "What was bush flying like?", a: "Incredible. Dodging wildlife on the runway and dealing with high density altitudes." },
      { q: "How did it prepare you for the airlines?", a: "It teaches you resourcefulness and decision-making when you're entirely on your own." }
    ]),
    tags: "Africa,Bush Flying,Modular",
    imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400&h=400",
    active: true,
    featured: false
  },
  {
    name: "Ryan O'Connor",
    role: "Helicopter Pilot",
    airline: "Offshore Oil & Gas",
    route: "Helicopter Integrated",
    trainingDuration: "1.5 years",
    totalCost: "£110,000",
    school: "Helicentre Aviation",
    country: "United Kingdom",
    heroQuote: "Rotary flying is completely different. Landing on a moving rig in the North Sea requires absolute precision.",
    qa: JSON.stringify([
      { q: "Why helicopters over fixed-wing?", a: "I love the hands-on nature of flying helicopters and the varied missions you can do." },
      { q: "Is it harder to get a job?", a: "It's a smaller industry, so networking is even more critical than in the airline world." }
    ]),
    tags: "UK,Rotary,Specialist",
    imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&q=80&w=400&h=400",
    active: true,
    featured: false
  }
];

async function seedStories() {
  console.log("Connecting to database...");
  const connection = await createConnection(DB_URL);
  try {
    console.log("Clearing existing stories...");
    await connection.execute("DELETE FROM pilot_stories");
    
    console.log(`Inserting ${stories.length} stories...`);
    for (const story of stories) {
      await connection.execute(
        `INSERT INTO pilot_stories (name, role, airline, route, training_duration, total_cost, school, country, hero_quote, qa, tags, image_url, active, featured)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [story.name, story.role, story.airline, story.route, story.trainingDuration, story.totalCost, story.school, story.country, story.heroQuote, story.qa, story.tags, story.imageUrl, story.active, story.featured]
      );
    }
    console.log("Stories seeded successfully!");
  } catch (error) {
    console.error("Error seeding stories:", error);
  } finally {
    await connection.end();
  }
}

seedStories();
