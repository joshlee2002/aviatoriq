/**
 * AviatorIQ SEO Meta Map
 * Defines title, description, canonical, and noindex for every public route.
 * Used by the server-side HTML injector to pre-populate <head> before React hydrates,
 * ensuring crawlers receive full metadata without executing JavaScript.
 */

export interface RouteMeta {
  title: string;
  description: string;
  canonical: string;
  noindex?: boolean;
  robots?: string;
  ogImage?: string;
}

const BASE = "https://aviatoriq.com";
const DEFAULT_OG = `${BASE}/og-default.jpg`;

export const routeMetaMap: Record<string, RouteMeta> = {
  // ─── Core ──────────────────────────────────────────────────────────────────
  "/": {
    title: "AviatorIQ — UK Pilot Training Platform | Career Readiness Assessment",
    description: "AviatorIQ helps aspiring pilots in the UK find the right training route, compare flight schools, and generate a personalised pilot roadmap. Free career readiness assessment.",
    canonical: `${BASE}/`,
  },
  "/quiz": {
    title: "Career Readiness Assessment | AviatorIQ",
    description: "Take the AviatorIQ Career Readiness Assessment. Answer 12 questions and get a personalised pilot training score, matched flight schools, and your free Pilot Blueprint PDF.",
    canonical: `${BASE}/quiz`,
  },
  "/roadmap": {
    title: "Generate Your Pilot Training Roadmap | AviatorIQ",
    description: "Generate a free, AI-powered pilot training roadmap personalised to your age, budget, goals, and location. Find the fastest route to the cockpit.",
    canonical: `${BASE}/roadmap`,
  },
  "/schools": {
    title: "UK Flight School Directory 2026 | Compare & Find Your School | AviatorIQ",
    description: "Compare 50+ UK flight schools side by side. Filter by training route (integrated, modular, PPL), finance options, and location. Find the right school for your budget.",
    canonical: `${BASE}/schools`,
  },
  "/calculator": {
    title: "Pilot Training Cost Calculator UK 2026 | AviatorIQ",
    description: "Calculate the true cost of pilot training in the UK. Includes tuition, living costs, exams, medical, and type rating. Integrated and modular routes compared.",
    canonical: `${BASE}/calculator`,
  },
  "/guides": {
    title: "Pilot Training Guides UK 2026 | AviatorIQ",
    description: "Comprehensive, expert-written guides on every aspect of UK pilot training — from how to become a pilot to ATPL exams, cadet programmes, and airline interviews.",
    canonical: `${BASE}/guides`,
  },
  "/quizzes": {
    title: "Aviation Quizzes & Career Tools | AviatorIQ",
    description: "Test your aviation knowledge and career readiness with AviatorIQ's free quizzes. Licence recommender, cadet eligibility checker, and more.",
    canonical: `${BASE}/quizzes`,
  },
  "/quiz/licence": {
    title: "Which Pilot Licence Do I Need? | Free Quiz | AviatorIQ",
    description: "Not sure whether to go for PPL, CPL, or ATPL? Take our free 2-minute quiz and get a personalised licence recommendation based on your goals and budget.",
    canonical: `${BASE}/quiz/licence`,
  },
  "/quiz/flight-deck": {
    title: "Flight Deck Readiness Quiz | Are You Ready to Fly? | AviatorIQ",
    description: "Take the Flight Deck Readiness Quiz and find out where you are on your pilot journey. Get a personalised score, phase assessment, and next steps.",
    canonical: `${BASE}/quiz/flight-deck`,
  },

  // ─── Tools ─────────────────────────────────────────────────────────────────
  "/tools/integrated-vs-modular": {
    title: "Integrated vs Modular Pilot Training: Which Is Right for You? | AviatorIQ",
    description: "Use our interactive decision tool to find out whether integrated or modular ATPL training suits your goals, budget, and timeline.",
    canonical: `${BASE}/tools/integrated-vs-modular`,
  },
  "/tools/class-1-medical-check": {
    title: "Class 1 Medical Eligibility Checker | AviatorIQ",
    description: "Check whether a medical condition is likely to affect your Class 1 Medical Certificate application. Covers common conditions including ADHD, diabetes, and vision.",
    canonical: `${BASE}/tools/class-1-medical-check`,
  },
  "/tools/medical-condition-lookup": {
    title: "Pilot Medical Condition Lookup | CAA Class 1 Guide | AviatorIQ",
    description: "Search any medical condition to find out how the CAA treats it for Class 1 Medical purposes. Based on official CAA and EASA guidance.",
    canonical: `${BASE}/tools/medical-condition-lookup`,
  },
  "/tools/cadet-eligibility": {
    title: "Airline Cadet Programme Eligibility Checker | AviatorIQ",
    description: "Check your eligibility for UK airline cadet programmes including BA Speedbird Academy, easyJet Generation, and Ryanair Cadet. Instant results.",
    canonical: `${BASE}/tools/cadet-eligibility`,
  },

  // ─── Partner / B2B ─────────────────────────────────────────────────────────
  "/partner": {
    title: "Partner with AviatorIQ | Receive Pre-Qualified Pilot Leads | AviatorIQ",
    description: "Join the AviatorIQ partner programme. Receive pre-qualified, scored aspiring pilots who have actively requested an introduction to your flight school. From £149/month.",
    canonical: `${BASE}/partner`,
  },
  "/for-schools": {
    title: "For Flight Schools | Get Discovered by Aspiring Pilots | AviatorIQ",
    description: "List your flight school on AviatorIQ and get discovered by thousands of aspiring pilots every month. Verified directory listing, lead matching, and introduction requests.",
    canonical: `${BASE}/for-schools`,
  },

  // ─── Static ────────────────────────────────────────────────────────────────
  "/about": {
    title: "About AviatorIQ | The UK Pilot Training Platform",
    description: "AviatorIQ was built to give aspiring pilots honest, expert guidance on the path to the cockpit. Learn about our mission, team, and how we work.",
    canonical: `${BASE}/about`,
  },
  "/contact": {
    title: "Contact AviatorIQ | Get in Touch",
    description: "Get in touch with the AviatorIQ team. We're happy to answer questions about pilot training, our platform, or partnership opportunities.",
    canonical: `${BASE}/contact`,
  },
  "/privacy": {
    title: "Privacy Policy | AviatorIQ",
    description: "AviatorIQ Privacy Policy. How we collect, use, and protect your personal data.",
    canonical: `${BASE}/privacy`,
    noindex: true,
  },
  "/terms": {
    title: "Terms of Service | AviatorIQ",
    description: "AviatorIQ Terms of Service.",
    canonical: `${BASE}/terms`,
    noindex: true,
  },

  // ─── Thin / placeholder pages — noindex until real content is added ─────────
  "/stories": {
    title: "Real Pilot Stories UK | AviatorIQ",
    description: "Real UK pilot career stories — how they trained, what it cost, how long it took, and what they wish they'd known.",
    canonical: `${BASE}/stories`,
    noindex: true, // placeholder content — noindex until real user stories are live
  },
  "/jobs": {
    title: "Pilot Jobs UK 2026 | First Officer & Cadet Vacancies | AviatorIQ",
    description: "Browse current UK pilot job vacancies and airline cadet programme openings. Updated regularly.",
    canonical: `${BASE}/jobs`,
    noindex: true, // static placeholder data — noindex until live job feed is integrated
  },

  // ─── UK Guides ─────────────────────────────────────────────────────────────
  "/guides/how-to-become-a-pilot": {
    title: "How to Become a Pilot in the UK (2026 Complete Guide) | AviatorIQ",
    description: "The definitive guide to becoming a commercial airline pilot in the UK. Covers training routes, costs (£80k–£130k), timelines, medical requirements, and cadet programmes.",
    canonical: `${BASE}/guides/how-to-become-a-pilot`,
  },
  "/guides/pilot-training-costs": {
    title: "Pilot Training Costs UK 2026: The Complete Breakdown | AviatorIQ",
    description: "How much does pilot training cost in the UK? Full breakdown of integrated (£100k–£130k) vs modular (£65k–£90k) routes, including hidden costs and finance options.",
    canonical: `${BASE}/guides/pilot-training-costs`,
  },
  "/guides/integrated-vs-modular": {
    title: "Integrated vs Modular ATPL Training UK: Which Route Is Right for You? | AviatorIQ",
    description: "Integrated vs modular pilot training compared. Costs, timelines, airline acceptance, and which route suits your situation. Updated for 2026.",
    canonical: `${BASE}/guides/integrated-vs-modular`,
  },
  "/guides/class-1-medical": {
    title: "CAA Class 1 Medical Certificate: Complete Guide 2026 | AviatorIQ",
    description: "Everything you need to know about the CAA Class 1 Medical Certificate. What's tested, common disqualifiers, costs, and how to prepare.",
    canonical: `${BASE}/guides/class-1-medical`,
  },
  "/guides/airline-pilot-salary": {
    title: "UK Airline Pilot Salary 2026: First Officer to Captain | AviatorIQ",
    description: "How much do airline pilots earn in the UK? Full salary breakdown from First Officer (£40k–£65k) to Captain (£90k–£180k) across major UK airlines.",
    canonical: `${BASE}/guides/airline-pilot-salary`,
  },
  "/guides/ba-speedbird-academy": {
    title: "BA Speedbird Academy 2026: Application, Selection & Training Guide | AviatorIQ",
    description: "Complete guide to the British Airways Speedbird Academy cadet programme. Entry requirements, selection process, training pathway, and what to expect.",
    canonical: `${BASE}/guides/ba-speedbird-academy`,
  },
  "/guides/easyjet-generation-pilot": {
    title: "easyJet Generation Pilot Programme 2026: Complete Guide | AviatorIQ",
    description: "Everything you need to know about the easyJet Generation Pilot MPL programme. Selection, training at CAE Oxford, costs, and guaranteed FO job offer.",
    canonical: `${BASE}/guides/easyjet-generation-pilot`,
  },
  "/guides/ryanair-cadet-programme": {
    title: "Ryanair Cadet Pilot Programme 2026: Complete Guide | AviatorIQ",
    description: "Guide to the Ryanair cadet pilot programme. Partner schools, selection process, training pathway, and what it's really like to fly for Ryanair as a new FO.",
    canonical: `${BASE}/guides/ryanair-cadet-programme`,
  },
  "/guides/am-i-too-old-to-become-a-pilot": {
    title: "Am I Too Old to Become a Pilot? Age Limits Explained 2026 | AviatorIQ",
    description: "Is there an age limit for becoming a commercial pilot in the UK? The honest answer, covering CAA rules, airline hiring ages, and real-world examples.",
    canonical: `${BASE}/guides/am-i-too-old-to-become-a-pilot`,
  },
  "/guides/how-to-finance-pilot-training-uk": {
    title: "How to Finance Pilot Training UK 2026 | Loans, Bursaries & Cadet Schemes | AviatorIQ",
    description: "How to fund pilot training in the UK. Covers career development loans, flight school finance, bursaries, cadet programmes, and self-funding strategies.",
    canonical: `${BASE}/guides/how-to-finance-pilot-training-uk`,
  },
  "/guides/uk-pilot-salary-2026": {
    title: "UK Pilot Salary 2026: Complete Pay Guide | AviatorIQ",
    description: "Full UK pilot salary guide for 2026. First Officer, Captain, and instructor pay at easyJet, Ryanair, British Airways, Jet2, TUI, and regional airlines.",
    canonical: `${BASE}/guides/uk-pilot-salary-2026`,
  },
  "/guides/atpl-theory-exams-uk": {
    title: "ATPL Theory Exams UK: Complete Study Guide 2026 | AviatorIQ",
    description: "Everything you need to know about the 14 CAA ATPL theory exams. Subjects, pass marks, study resources, and how long it takes to complete them.",
    canonical: `${BASE}/guides/atpl-theory-exams-uk`,
  },
  "/guides/best-flight-schools-uk-2026": {
    title: "Best Flight Schools UK 2026: Top Integrated & Modular Schools | AviatorIQ",
    description: "The best UK flight schools for integrated and modular ATPL training in 2026. Honest comparison of CAE Oxford, L3Harris, FTEJerez, and more.",
    canonical: `${BASE}/guides/best-flight-schools-uk-2026`,
  },
  "/guides/cadet-pilot-programmes-uk": {
    title: "UK Airline Cadet Pilot Programmes 2026: Complete Guide | AviatorIQ",
    description: "All UK airline cadet programmes compared: BA Speedbird, easyJet Generation, Ryanair, Wizz Air, and TUI. Entry requirements, costs, and selection tips.",
    canonical: `${BASE}/guides/cadet-pilot-programmes-uk`,
  },
  "/guides/class-1-medical-disqualifiers": {
    title: "CAA Class 1 Medical Disqualifiers: What Can Stop You Flying? | AviatorIQ",
    description: "Which medical conditions can disqualify you from getting a CAA Class 1 Medical? Honest guide covering vision, mental health, diabetes, heart conditions, and more.",
    canonical: `${BASE}/guides/class-1-medical-disqualifiers`,
  },
  "/guides/adhd-pilot-uk": {
    title: "ADHD and Pilot Training UK: Can You Fly with ADHD? | AviatorIQ",
    description: "Can you become a commercial pilot with ADHD in the UK? The CAA's position, medication rules, assessment process, and real pilot experiences.",
    canonical: `${BASE}/guides/adhd-pilot-uk`,
  },
  "/guides/modular-vs-integrated-pilot-training": {
    title: "Modular vs Integrated Pilot Training: Deep Comparison 2026 | AviatorIQ",
    description: "In-depth comparison of modular and integrated ATPL training. Cost, time, airline preference, flexibility, and which route produces better pilots.",
    canonical: `${BASE}/guides/modular-vs-integrated-pilot-training`,
  },
  "/guides/am-i-ready-to-start-pilot-training": {
    title: "Am I Ready to Start Pilot Training? Honest Checklist | AviatorIQ",
    description: "Are you really ready to start pilot training? Honest checklist covering finances, medical, commitment, and what most aspiring pilots underestimate.",
    canonical: `${BASE}/guides/am-i-ready-to-start-pilot-training`,
  },
  "/guides/hour-building-pilot-uk": {
    title: "Hour Building for Pilots UK: How, Where & How Much | AviatorIQ",
    description: "Complete guide to hour building for UK pilots. Where to build hours cheaply, how long it takes, and how to make the most of your hour-building time.",
    canonical: `${BASE}/guides/hour-building-pilot-uk`,
  },
  "/guides/uk-pilot-shortage-2026": {
    title: "UK Pilot Shortage 2026: Is It Real? What It Means for You | AviatorIQ",
    description: "Is there really a pilot shortage in the UK? The data, what airlines are doing about it, and what it means for aspiring pilots starting training now.",
    canonical: `${BASE}/guides/uk-pilot-shortage-2026`,
  },
  "/guides/pilot-type-rating-uk": {
    title: "Pilot Type Rating UK: Cost, Process & Which Airlines Pay | AviatorIQ",
    description: "Everything about type ratings for UK pilots. How much they cost (£20k–£35k), which airlines pay, and how to avoid paying for your own.",
    canonical: `${BASE}/guides/pilot-type-rating-uk`,
  },
  "/guides/raf-vs-civilian-pilot-training": {
    title: "RAF vs Civilian Pilot Training UK: Which Path Is Right? | AviatorIQ",
    description: "RAF vs civilian pilot training compared. Sponsorship, career paths, lifestyle, pay, and which route is better for different types of people.",
    canonical: `${BASE}/guides/raf-vs-civilian-pilot-training`,
  },
  "/guides/pilot-training-over-40": {
    title: "Pilot Training Over 40 UK: Is It Worth It? | AviatorIQ",
    description: "Can you become an airline pilot if you start training over 40? Honest assessment of age limits, career length, costs, and whether it makes financial sense.",
    canonical: `${BASE}/guides/pilot-training-over-40`,
  },
  "/guides/airline-pilot-interview": {
    title: "Airline Pilot Interview Guide UK 2026 | AviatorIQ",
    description: "How to prepare for a UK airline pilot interview. Technical questions, competency-based questions, simulator assessment, and what airlines are really looking for.",
    canonical: `${BASE}/guides/airline-pilot-interview`,
  },
  "/guides/women-in-aviation-uk": {
    title: "Women in Aviation UK: Training, Scholarships & Careers | AviatorIQ",
    description: "Guide for women considering a pilot career in the UK. Scholarships, female-friendly training schools, role models, and the reality of being a female pilot.",
    canonical: `${BASE}/guides/women-in-aviation-uk`,
  },
  "/guides/pilot-aptitude-test-uk": {
    title: "Pilot Aptitude Test UK: What to Expect & How to Prepare | AviatorIQ",
    description: "Everything about UK pilot aptitude tests (PILAPT, Compass, Symbiotics). What they test, how to prepare, and what scores airlines and schools are looking for.",
    canonical: `${BASE}/guides/pilot-aptitude-test-uk`,
  },
  "/guides/pilot-cv-cover-letter": {
    title: "Pilot CV & Cover Letter Guide UK 2026 | AviatorIQ",
    description: "How to write a pilot CV and cover letter that gets noticed. Templates, examples, and what airlines and flight schools actually want to see.",
    canonical: `${BASE}/guides/pilot-cv-cover-letter`,
  },
  "/guides/pilot-aptitude-test-preparation": {
    title: "How to Prepare for Pilot Aptitude Tests: Complete Guide | AviatorIQ",
    description: "Proven strategies to prepare for pilot aptitude tests. Practice resources, cognitive training tips, and what to expect on test day.",
    canonical: `${BASE}/guides/pilot-aptitude-test-preparation`,
  },
  "/guides/airline-simulator-assessment": {
    title: "Airline Simulator Assessment Guide UK | AviatorIQ",
    description: "What to expect in an airline simulator assessment. How to prepare, what assessors are looking for, and how to perform at your best.",
    canonical: `${BASE}/guides/airline-simulator-assessment`,
  },
  "/guides/ppl-uk": {
    title: "PPL UK: Private Pilot Licence Guide 2026 | AviatorIQ",
    description: "Complete guide to getting your PPL in the UK. Cost (£8k–£15k), requirements, training process, and whether a PPL is the right first step for you.",
    canonical: `${BASE}/guides/ppl-uk`,
  },
  "/guides/cpl-uk": {
    title: "CPL UK: Commercial Pilot Licence Guide 2026 | AviatorIQ",
    description: "Everything about the UK Commercial Pilot Licence (CPL). Requirements, training, costs, and how the CPL fits into the modular ATPL route.",
    canonical: `${BASE}/guides/cpl-uk`,
  },
  "/guides/instrument-rating-uk": {
    title: "Instrument Rating UK: IR(A) Guide 2026 | AviatorIQ",
    description: "Complete guide to the UK Instrument Rating (IR). Training requirements, costs, exams, and how the IR fits into your commercial pilot pathway.",
    canonical: `${BASE}/guides/instrument-rating-uk`,
  },
  "/guides/frozen-atpl-uk": {
    title: "Frozen ATPL UK: What It Is & How to Get One | AviatorIQ",
    description: "What is a frozen ATPL and how do you get one in the UK? Complete guide to the fATPL, including training requirements, costs, and what 'unfreezing' means.",
    canonical: `${BASE}/guides/frozen-atpl-uk`,
  },
  "/guides/first-officer-uk": {
    title: "How to Become a First Officer in the UK 2026 | AviatorIQ",
    description: "Complete guide to becoming a First Officer at a UK airline. Minimum hours, licence requirements, type rating, and how to get your first FO job.",
    canonical: `${BASE}/guides/first-officer-uk`,
  },
  "/guides/flight-instructor-uk": {
    title: "How to Become a Flight Instructor UK 2026 | FI Rating Guide | AviatorIQ",
    description: "Complete guide to becoming a flight instructor in the UK. FI(A) rating requirements, costs, how to build hours as an instructor, and career prospects.",
    canonical: `${BASE}/guides/flight-instructor-uk`,
  },
  "/guides/mcc-joc-uk": {
    title: "MCC/JOC UK: Multi-Crew Cooperation & Jet Orientation Course | AviatorIQ",
    description: "What is the MCC/JOC and do you need it? Complete guide to Multi-Crew Cooperation and Jet Orientation courses for UK pilots.",
    canonical: `${BASE}/guides/mcc-joc-uk`,
  },
  "/guides/pilot-eyesight-requirements-uk": {
    title: "Pilot Eyesight Requirements UK 2026: CAA Vision Standards | AviatorIQ",
    description: "CAA eyesight requirements for UK pilots. What vision standard you need, whether glasses or contact lenses are allowed, and laser eye surgery rules.",
    canonical: `${BASE}/guides/pilot-eyesight-requirements-uk`,
  },
  "/guides/integrated-vs-modular-cost": {
    title: "Integrated vs Modular Pilot Training Cost Comparison UK | AviatorIQ",
    description: "Side-by-side cost comparison of integrated and modular ATPL training in the UK. Real numbers, hidden costs, and which route offers better value.",
    canonical: `${BASE}/guides/integrated-vs-modular-cost`,
  },
  "/guides/best-route-to-airline": {
    title: "Best Route to Becoming an Airline Pilot UK 2026 | AviatorIQ",
    description: "What is the best route to becoming an airline pilot in the UK? Integrated, modular, cadet, military — compared honestly for 2026.",
    canonical: `${BASE}/guides/best-route-to-airline`,
  },
  "/guides/finance-guide": {
    title: "Pilot Training Finance UK: Loans, Bursaries & Funding Options | AviatorIQ",
    description: "How to fund pilot training in the UK. Career development loans, flight school finance, bursaries, cadet schemes, and self-funding strategies.",
    canonical: `${BASE}/guides/finance-guide`,
  },
  "/guides/training-timeline": {
    title: "Pilot Training Timeline UK: How Long Does It Take? | AviatorIQ",
    description: "How long does it take to become a commercial pilot in the UK? Realistic timelines for integrated (18–24 months) and modular (3–5 years) routes.",
    canonical: `${BASE}/guides/training-timeline`,
  },

  "/guides/wizz-air-pilot-academy": {
    title: "Wizz Air Pilot Academy 2026: Complete Guide | AviatorIQ",
    description: "Everything about the Wizz Air Pilot Academy cadet programme. Entry requirements, training pathway, costs, and guaranteed FO job offer.",
    canonical: `${BASE}/guides/wizz-air-pilot-academy`,
  },
  "/guides/tui-mpl-cadet-programme": {
    title: "TUI MPL Cadet Programme 2026: Complete Guide | AviatorIQ",
    description: "Complete guide to the TUI MPL cadet pilot programme. Selection, training, costs, and what it's like to fly for TUI as a new First Officer.",
    canonical: `${BASE}/guides/tui-mpl-cadet-programme`,
  },

  // ─── US Routes ─────────────────────────────────────────────────────────────
  "/us": {
    title: "AviatorIQ US — FAA Pilot Training Platform | Career Roadmap",
    description: "AviatorIQ helps aspiring pilots in the USA find the right FAA training route, compare flight schools, and generate a personalised pilot roadmap.",
    canonical: `${BASE}/us`,
  },
  "/us/guides": {
    title: "FAA Pilot Training Guides USA 2026 | AviatorIQ",
    description: "Expert guides on every aspect of FAA pilot training in the USA — from how to become a pilot to ATP certificate, airline interviews, and cadet programmes.",
    canonical: `${BASE}/us/guides`,
  },
  "/us/schools": {
    title: "US Flight School Directory 2026 | Compare FAA Flight Schools | AviatorIQ",
    description: "Compare US flight schools for FAA pilot training. Filter by Part 141, Part 61, location, and financing options.",
    canonical: `${BASE}/us/schools`,
  },
  "/us/calculator": {
    title: "FAA Pilot Training Cost Calculator USA 2026 | AviatorIQ",
    description: "Calculate the true cost of FAA pilot training in the USA. Includes tuition, hours, exams, and ATP certificate costs.",
    canonical: `${BASE}/us/calculator`,
  },
  "/us/roadmap": {
    title: "Generate Your FAA Pilot Training Roadmap | AviatorIQ",
    description: "Generate a free, AI-powered FAA pilot training roadmap personalised to your goals, budget, and location.",
    canonical: `${BASE}/us/roadmap`,
  },
  "/us/guides/how-to-become-a-pilot": {
    title: "How to Become a Pilot in the USA (2026 Complete Guide) | AviatorIQ",
    description: "The definitive guide to becoming an airline pilot in the USA. FAA training routes, costs, timelines, medical requirements, and airline cadet programmes.",
    canonical: `${BASE}/us/guides/how-to-become-a-pilot`,
  },
  "/us/guides/pilot-training-costs-usa": {
    title: "Pilot Training Costs USA 2026: Complete Breakdown | AviatorIQ",
    description: "How much does pilot training cost in the USA? Full breakdown of Part 141 and Part 61 routes, including ATP certificate and airline cadet programme costs.",
    canonical: `${BASE}/us/guides/pilot-training-costs-usa`,
  },
  "/us/guides/airline-pilot-salary-usa": {
    title: "US Airline Pilot Salary 2026: First Officer to Captain | AviatorIQ",
    description: "How much do airline pilots earn in the USA? Complete salary guide from regional FO ($60k) to major airline Captain ($300k+).",
    canonical: `${BASE}/us/guides/airline-pilot-salary-usa`,
  },
  "/us/guides/faa-medical-requirements": {
    title: "FAA Medical Certificate Requirements 2026 | AviatorIQ",
    description: "Complete guide to FAA medical certificate classes (First, Second, Third). Requirements, common disqualifiers, and the BasicMed alternative.",
    canonical: `${BASE}/us/guides/faa-medical-requirements`,
  },
  "/us/guides/part-61-vs-141": {
    title: "Part 61 vs Part 141 Flight Training: Which Is Right for You? | AviatorIQ",
    description: "Part 61 vs Part 141 pilot training compared. Costs, timelines, flexibility, and which route is better for your situation.",
    canonical: `${BASE}/us/guides/part-61-vs-141`,
  },
  "/us/guides/gi-bill-flight-training": {
    title: "GI Bill Flight Training 2026: How to Use VA Benefits for Pilot Training | AviatorIQ",
    description: "How to use GI Bill benefits for FAA pilot training. Which schools are approved, how much the VA pays, and how to maximise your benefits.",
    canonical: `${BASE}/us/guides/gi-bill-flight-training`,
  },
  "/us/guides/united-aviate-program": {
    title: "United Aviate Program 2026: Complete Guide | AviatorIQ",
    description: "Complete guide to the United Airlines Aviate program. Requirements, application process, pathway to United Airlines, and what to expect.",
    canonical: `${BASE}/us/guides/united-aviate-program`,
  },
  "/us/guides/delta-propel-program": {
    title: "Delta Propel Program 2026: Complete Guide | AviatorIQ",
    description: "Complete guide to the Delta Air Lines Propel program. Requirements, partner schools, pathway to Delta, and how to apply.",
    canonical: `${BASE}/us/guides/delta-propel-program`,
  },
  "/us/guides/atp-certificate-usa": {
    title: "ATP Certificate USA: Requirements, Cost & Timeline | AviatorIQ",
    description: "Complete guide to the FAA Airline Transport Pilot (ATP) certificate. Hour requirements, written test, checkride, and how to get your ATP.",
    canonical: `${BASE}/us/guides/atp-certificate-usa`,
  },
  "/us/guides/atp-flight-school-guide": {
    title: "ATP Flight School Guide 2026: Is It Worth It? | AviatorIQ",
    description: "Honest review of ATP Flight School. Costs, training quality, airline partnerships, and whether ATP is the right choice for your pilot career.",
    canonical: `${BASE}/us/guides/atp-flight-school-guide`,
  },
  "/us/guides/embry-riddle-aeronautical-university": {
    title: "Embry-Riddle Aeronautical University: Complete Guide 2026 | AviatorIQ",
    description: "Is Embry-Riddle worth it? Complete guide to ERAU's aviation programmes, costs, career outcomes, and how it compares to other training routes.",
    canonical: `${BASE}/us/guides/embry-riddle-aeronautical-university`,
  },

  // ─── Country selector ──────────────────────────────────────────────────────
  "/select": {
    title: "Choose Your Country | AviatorIQ — Global Pilot Training Platform",
    description: "Select your country to get a personalised pilot training roadmap with correct costs, routes, regulators, and matched flight schools for your region.",
    canonical: `${BASE}/select`,
    noindex: true,
  },

  // ─── Australia hub & guides ────────────────────────────────────────────────
  "/australia": {
    title: "Become a Pilot in Australia 2026 | CASA Training Guide | AviatorIQ",
    description: "Australia's most complete pilot training resource. CASA CPL/ATPL routes, real 2026 costs in AUD, Class 1 medical guidance, and matched Australian flight schools.",
    canonical: `${BASE}/australia`,
  },
  "/guides/how-to-become-a-pilot-australia": {
    title: "How to Become a Pilot in Australia (2026 Complete Guide) | AviatorIQ",
    description: "The definitive guide to becoming a commercial airline pilot in Australia. CASA training routes, costs (A$90k–A$150k), timelines, medical requirements, and cadet programmes.",
    canonical: `${BASE}/guides/how-to-become-a-pilot-australia`,
  },
  "/guides/pilot-training-costs-australia": {
    title: "Pilot Training Costs Australia 2026: The Full Breakdown | AviatorIQ",
    description: "How much does pilot training cost in Australia? CPL, ATPL, PPL — real 2026 costs in AUD from Australian flight schools. Integrated vs modular compared.",
    canonical: `${BASE}/guides/pilot-training-costs-australia`,
  },
  "/guides/casa-class-1-medical": {
    title: "CASA Class 1 Medical 2026: Complete Guide for Aspiring Pilots | AviatorIQ",
    description: "Everything you need to know about the CASA Class 1 medical. DAME requirements, disqualifying conditions, and how to prepare for your aviation medical in Australia.",
    canonical: `${BASE}/guides/casa-class-1-medical`,
  },
  "/guides/integrated-vs-modular-australia": {
    title: "Integrated vs Modular ATPL in Australia 2026 | AviatorIQ",
    description: "Which CASA training route is right for you? Integrated vs modular ATPL compared — costs in AUD, timelines, and airline hiring preferences in Australia.",
    canonical: `${BASE}/guides/integrated-vs-modular-australia`,
  },
  "/guides/best-flight-schools-australia": {
    title: "Best Flight Schools in Australia 2026 | CASA-Approved | AviatorIQ",
    description: "Australia's top CASA-approved flight schools ranked by completion rates, cost, and airline placement. AFAC, Griffith Aviation, AVIA, and more.",
    canonical: `${BASE}/guides/best-flight-schools-australia`,
  },
  "/guides/australian-airline-cadet-programmes": {
    title: "Australian Airline Cadet Programmes 2026 | Qantas, Virgin, Rex | AviatorIQ",
    description: "Complete guide to Australian airline cadet programmes. Qantas Group, Virgin Australia, Rex, and regional airline pathways — eligibility, costs, and how to apply.",
    canonical: `${BASE}/guides/australian-airline-cadet-programmes`,
  },
  "/guides/australian-pilot-salary": {
    title: "Australian Pilot Salary 2026: First Officer to Captain | AviatorIQ",
    description: "How much do airline pilots earn in Australia? Full salary breakdown from First Officer (A$80k–A$120k) to Captain (A$180k–A$300k) across Qantas, Virgin, and regional airlines.",
    canonical: `${BASE}/guides/australian-pilot-salary`,
  },

  // ─── Canada hub & guides ───────────────────────────────────────────────────
  "/canada": {
    title: "Become a Pilot in Canada 2026 | Transport Canada Training Guide | AviatorIQ",
    description: "Canada's most complete pilot training resource. Transport Canada CPL/ATPL routes, real 2026 costs in CAD, Class 1 medical guidance, and matched Canadian flight schools.",
    canonical: `${BASE}/canada`,
  },
  "/guides/how-to-become-a-pilot-canada": {
    title: "How to Become a Pilot in Canada (2026 Complete Guide) | AviatorIQ",
    description: "The definitive guide to becoming a commercial airline pilot in Canada. Transport Canada training routes, costs (CA$90k–CA$140k), timelines, medical requirements, and cadet programmes.",
    canonical: `${BASE}/guides/how-to-become-a-pilot-canada`,
  },
  "/guides/pilot-training-costs-canada": {
    title: "Pilot Training Costs Canada 2026: The Full Breakdown | AviatorIQ",
    description: "How much does pilot training cost in Canada? CPL, ATPL, PPL — real 2026 costs in CAD from Canadian flight schools. Integrated vs modular compared.",
    canonical: `${BASE}/guides/pilot-training-costs-canada`,
  },
  "/guides/transport-canada-class-1-medical": {
    title: "Transport Canada Class 1 Medical 2026: Complete Guide | AviatorIQ",
    description: "Everything you need to know about the Transport Canada Class 1 medical. AME requirements, disqualifying conditions, and how to prepare for your aviation medical in Canada.",
    canonical: `${BASE}/guides/transport-canada-class-1-medical`,
  },
  "/guides/best-flight-schools-canada": {
    title: "Best Flight Schools in Canada 2026 | Transport Canada Approved | AviatorIQ",
    description: "Canada's top Transport Canada-approved flight schools ranked by completion rates, cost, and airline placement. Seneca, BCIT, Confederation, and more.",
    canonical: `${BASE}/guides/best-flight-schools-canada`,
  },
  "/guides/canadian-airline-cadet-programmes": {
    title: "Canadian Airline Cadet Programmes 2026 | Air Canada, WestJet | AviatorIQ",
    description: "Complete guide to Canadian airline cadet programmes. Air Canada, WestJet, Jazz, and regional airline pathways — eligibility, costs, and how to apply.",
    canonical: `${BASE}/guides/canadian-airline-cadet-programmes`,
  },
  "/guides/cpl-vs-atpl-canada": {
    title: "CPL vs ATPL Canada 2026: Which Route Is Right for You? | AviatorIQ",
    description: "Understanding the difference between CPL and ATPL training in Canada. Costs in CAD, timelines, and which route leads to the airlines fastest.",
    canonical: `${BASE}/guides/cpl-vs-atpl-canada`,
  },
  "/guides/canadian-pilot-salary": {
    title: "Canadian Pilot Salary 2026: First Officer to Captain | AviatorIQ",
    description: "How much do airline pilots earn in Canada? Full salary breakdown from First Officer (CA$70k–CA$110k) to Captain (CA$160k–CA$280k) across Air Canada, WestJet, and regional airlines.",
    canonical: `${BASE}/guides/canadian-pilot-salary`,
  },

  // ─── Europe / EASA hub & guides ────────────────────────────────────────────
  "/europe": {
    title: "Become a Pilot in Europe 2026 | EASA Training Guide | AviatorIQ",
    description: "Europe's most complete EASA pilot training resource. Integrated and modular ATPL routes, real 2026 costs in EUR, Class 1 medical guidance, and matched European flight schools.",
    canonical: `${BASE}/europe`,
  },
  "/guides/how-to-become-a-pilot-europe": {
    title: "How to Become a Pilot in Europe (2026 EASA Guide) | AviatorIQ",
    description: "The definitive guide to becoming a commercial airline pilot in Europe. EASA training routes, costs (€80k–€140k), timelines, medical requirements, and cadet programmes.",
    canonical: `${BASE}/guides/how-to-become-a-pilot-europe`,
  },
  "/guides/easa-atpl-training-costs": {
    title: "EASA ATPL Training Costs 2026: The Full Breakdown | AviatorIQ",
    description: "How much does EASA ATPL training cost in Europe? Integrated and modular routes — real 2026 costs in EUR from European flight schools.",
    canonical: `${BASE}/guides/easa-atpl-training-costs`,
  },
  "/guides/easa-class-1-medical": {
    title: "EASA Class 1 Medical 2026: Complete Guide for Aspiring Pilots | AviatorIQ",
    description: "Everything you need to know about the EASA Class 1 medical. AeMC requirements, disqualifying conditions, and how to prepare across EU countries.",
    canonical: `${BASE}/guides/easa-class-1-medical`,
  },
  "/guides/best-flight-schools-europe": {
    title: "Best Flight Schools in Europe 2026 | EASA Approved | AviatorIQ",
    description: "Europe's top EASA-approved flight schools ranked by completion rates, cost, and airline placement. CAE Oxford, L3Harris, and national academies.",
    canonical: `${BASE}/guides/best-flight-schools-europe`,
  },
  "/guides/european-airline-cadet-programmes": {
    title: "European Airline Cadet Programmes 2026 | Lufthansa, Ryanair, easyJet | AviatorIQ",
    description: "Complete guide to European airline cadet programmes. Lufthansa, Ryanair, easyJet, KLM, and more — eligibility, costs, and how to apply.",
    canonical: `${BASE}/guides/european-airline-cadet-programmes`,
  },
  "/guides/integrated-vs-modular-europe": {
    title: "Integrated vs Modular ATPL in Europe 2026 | EASA | AviatorIQ",
    description: "Which EASA training route is right for you? Integrated vs modular ATPL compared — costs in EUR, timelines, and airline hiring preferences.",
    canonical: `${BASE}/guides/integrated-vs-modular-europe`,
  },
  "/guides/european-pilot-salary": {
    title: "European Pilot Salary 2026: First Officer to Captain | AviatorIQ",
    description: "How much do airline pilots earn in Europe? Full salary breakdown from First Officer (€45k–€80k) to Captain (€100k–€200k) across Ryanair, Lufthansa, easyJet, and more.",
    canonical: `${BASE}/guides/european-pilot-salary`,
  },
  // ─── UAE hub & guides ─────────────────────────────────────────────────────
  "/uae": {
    title: "Become a Pilot in the UAE 2026 | GCAA Training Guide | AviatorIQ",
    description: "The UAE's most complete pilot training resource. GCAA-approved routes, real 2026 costs in AED, Emirates and Etihad cadet programmes, and Class 1 medical guidance.",
    canonical: `${BASE}/uae`,
  },
  // ─── South Africa hub & guides ────────────────────────────────────────────
  "/south-africa": {
    title: "Become a Pilot in South Africa 2026 | SACAA Training Guide | AviatorIQ",
    description: "South Africa's most complete pilot training resource. SACAA CPL/ATPL routes, real 2026 costs in ZAR, Class 1 medical guidance, and matched South African flight schools.",
    canonical: `${BASE}/south-africa`,
  },
  // ─── New Zealand hub & guides ─────────────────────────────────────────────
  "/new-zealand": {
    title: "Become a Pilot in New Zealand 2026 | CAA NZ Training Guide | AviatorIQ",
    description: "New Zealand's most complete pilot training resource. CAA NZ CPL/ATPL routes, real 2026 costs in NZD, Air New Zealand cadet programme, and Class 1 medical guidance.",
    canonical: `${BASE}/new-zealand`,
  },
  // ─── New US guides (batch 2) ──────────────────────────────────────────────
  "/us/guides/faa-atp-requirements": {
    title: "Mastering the Skies: Your Definitive Guide to FAA ATP Requirements in 2026",
    description: "Detailed guide to FAA ATP requirements for 2026, covering Part 61, Part 141, costs, and career opportunities for aspiring airline pilots.",
    canonical: `${BASE}/us/guides/faa-atp-requirements`,
  },
  "/us/guides/us-regional-airlines-guide": {
    title: "Navigating the US Regional Airline Pilot Pathway: A 2026 Comprehensive Guide",
    description: "Comprehensive guide for aspiring regional airline pilots in the US. Covers 2026 FAA regulations, training costs, career paths, and hiring requirements.",
    canonical: `${BASE}/us/guides/us-regional-airlines-guide`,
  },
  "/us/guides/major-airlines-hiring-usa": {
    title: "Major Airlines Hiring in the USA: A Comprehensive Guide for Aspiring Pilots (2026)",
    description: "Comprehensive 2026 guide for aspiring US airline pilots, covering training, costs, FAA regulations (Part 61/141), and major airline hiring requirements.",
    canonical: `${BASE}/us/guides/major-airlines-hiring-usa`,
  },
  "/us/guides/faa-medical-class-1": {
    title: "The Elite Standard: Navigating Your FAA Medical Class 1 Certification",
    description: "Discover the 2026 requirements, costs, and application process for the FAA Medical Class 1 Certificate. Learn about vision, hearing, and disqualifying conditions.",
    canonical: `${BASE}/us/guides/faa-medical-class-1`,
  },
  "/us/guides/faa-medical-class-2": {
    title: "Navigating the FAA Class 2 Medical Certificate: A Comprehensive Guide for US Pilots",
    description: "Comprehensive guide to FAA Class 2 Medical Certificate requirements for US commercial pilots in 2026, including regulations, costs, and application process.",
    canonical: `${BASE}/us/guides/faa-medical-class-2`,
  },
  "/us/guides/faa-medical-class-3": {
    title: "Navigating Your Wings: The Definitive Guide to the FAA Class 3 Medical Certificate (2026)",
    description: "Comprehensive 2026 guide to the FAA Class 3 Medical Certificate. Learn about vision and hearing standards, the MedXPress process, costs, and Special Issuances.",
    canonical: `${BASE}/us/guides/faa-medical-class-3`,
  },
  "/us/guides/us-flight-school-loans": {
    title: "Navigating the Skies: A Comprehensive Guide to US Flight School Loans in 2026",
    description: "Discover the best US flight school loans for 2026. Learn about Part 61 vs. Part 141 costs, federal vs. private loans, and alternative financing options.",
    canonical: `${BASE}/us/guides/us-flight-school-loans`,
  },
  "/us/guides/us-cadet-programs": {
    title: "The Aspiring Aviator's Guide to US Airline Cadet Programs (2026)",
    description: "Explore US airline cadet programs for 2026, including FAA regulations (Part 61/141), costs, and career paths with American, United, and Southwest.",
    canonical: `${BASE}/us/guides/us-cadet-programs`,
  },
  "/us/guides/us-military-pilot-to-airlines": {
    title: "From Cockpit to Commercial: The Elite Military Pilot's Guide to US Airlines in 2026",
    description: "Navigate the transition from US military pilot to airline pilot in 2026. This guide covers FAA R-ATP requirements, ATP CTP, job market, and airline programs.",
    canonical: `${BASE}/us/guides/us-military-pilot-to-airlines`,
  },
  "/us/guides/us-pilot-shortage-2026": {
    title: "The Looming Sky: Navigating the US Pilot Shortage in 2026",
    description: "Comprehensive guide to the 2026 US pilot shortage, covering FAA regulations, Part 61/141 training, costs, and airline hiring trends.",
    canonical: `${BASE}/us/guides/us-pilot-shortage-2026`,
  },
  "/us/guides/us-pilot-salary-2026": {
    title: "US Pilot Salary 2026: A Comprehensive Guide to Aviation Earnings",
    description: "Explore US pilot salaries for 2026, including major airlines, regional carriers, training costs, and career progression. Your definitive guide to aviation earnings.",
    canonical: `${BASE}/us/guides/us-pilot-salary-2026`,
  },
  "/us/guides/us-pilot-retirement-age": {
    title: "The Mandatory Retirement Age for US Airline Pilots: Navigating Your Career to 65 and Beyond",
    description: "Understand the FAA's mandatory retirement age of 65 for US commercial airline pilots in 2026. Explore its history, current regulations, and the ongoing debate.",
    canonical: `${BASE}/us/guides/us-pilot-retirement-age`,
  },
  "/us/guides/us-pilot-training-market-guide": {
    title: "Navigating the Skies: A Comprehensive Guide to US Pilot Training in 2026",
    description: "Comprehensive guide to US pilot training in 2026, covering FAA Part 61/141, costs, medicals, and airline career paths. Essential for aspiring aviators.",
    canonical: `${BASE}/us/guides/us-pilot-training-market-guide`,
  },
  "/us/guides/us-pilot-seniority": {
    title: "Mastering the Skies: A 2026 Guide to US Airline Pilot Seniority",
    description: "Explore the profound impact of seniority on US airline pilot careers in 2026, covering pay, schedules, bases, aircraft, and career advancement.",
    canonical: `${BASE}/us/guides/us-pilot-seniority`,
  },
  "/us/guides/us-pilot-commuting": {
    title: "The Elite Guide to US Pilot Commuting in 2026: Strategies, Costs, and FAA Regulations",
    description: "Comprehensive guide for US airline pilots on commuting strategies, FAA Part 117 compliance, crash pad costs, and training considerations for 2026.",
    canonical: `${BASE}/us/guides/us-pilot-commuting`,
  },
  "/us/guides/us-pilot-training-2026": {
    title: "Navigating the Skies: A Comprehensive Guide to US Pilot Training in 2026",
    description: "Your essential guide to US pilot training in 2026: FAA Part 61/141, costs, airlines, and career paths for aspiring pilots.",
    canonical: `${BASE}/us/guides/us-pilot-training-2026`,
  },
  "/us/guides/us-pilot-schedule": {
    title: "Navigating the Skies: A Comprehensive Guide to US Pilot Training in 2026",
    description: "Explore the intricate world of US pilot training in 2026. Understand FAA Part 61/141, costs, career paths, and how to achieve your aviation dreams.",
    canonical: `${BASE}/us/guides/us-pilot-schedule`,
  },
  "/us/guides/us-pilot-benefits": {
    title: "The Elite Path: Unlocking the Benefits of a US Pilot Career in 2026",
    description: "Explore the benefits of a US pilot career in 2026, including FAA regulations (Part 61/141), training costs, and airline job prospects.",
    canonical: `${BASE}/us/guides/us-pilot-benefits`,
  },
  "/us/guides/us-pilot-taxes": {
    title: "Navigating US Pilot Taxes: A Comprehensive 2026 Guide to Deductions and Planning",
    description: "Comprehensive guide to US pilot taxes in 2026, covering flight training deductions, 529 plans, and essential tax strategies for aviators.",
    canonical: `${BASE}/us/guides/us-pilot-taxes`,
  },
  "/us/guides/us-pilot-housing": {
    title: "Navigating US Pilot Training Housing: Your 2026 Comprehensive Guide",
    description: "A deep dive into US pilot training housing in 2026. Understand costs, options, and how to choose accommodations that support your aviation career.",
    canonical: `${BASE}/us/guides/us-pilot-housing`,
  },
  // ─── Australia guides ─────────────────────────────────────────────────────
  "/australia/guides/casa-cpl-requirements": {
    title: "Mastering the Skies: Your Definitive Guide to CASA CPL Requirements in 2026",
    description: "A detailed guide to CASA Commercial Pilot Licence (CPL) requirements in Australia for 2026, covering eligibility, training, costs, and career paths.",
    canonical: `${BASE}/australia/guides/casa-cpl-requirements`,
  },
  "/australia/guides/casa-atpl-requirements": {
    title: "Navigating the Skies: Your Comprehensive Guide to CASA ATPL Requirements in 2026",
    description: "Detailed guide to CASA ATPL requirements for 2026, covering eligibility, exams, flight hours, costs, and career opportunities in Australia.",
    canonical: `${BASE}/australia/guides/casa-atpl-requirements`,
  },
  "/australia/guides/casa-medical-class-1": {
    title: "The Definitive Guide to CASA Class 1 Medical Certificate in Australia (2026)",
    description: "Comprehensive guide to the CASA Class 1 Medical Certificate in Australia for 2026, covering requirements, costs, process, and common disqualifying conditions.",
    canonical: `${BASE}/australia/guides/casa-medical-class-1`,
  },
  "/australia/guides/australia-pilot-training-costs": {
    title: "The Definitive Guide to Australian Pilot Training Costs in 2026",
    description: "Explore the true costs of pilot training in Australia for 2026. Detailed insights into licenses, flight schools, CASA fees, and financial aid options.",
    canonical: `${BASE}/australia/guides/australia-pilot-training-costs`,
  },
  "/australia/guides/australia-flight-school-loans": {
    title: "Navigating the Skies: A Comprehensive Guide to Australian Flight School Loans in 2026",
    description: "A detailed guide to flight school loans in Australia for 2026, covering VET Student Loans, private financing, airline cadet programs, and scholarships.",
    canonical: `${BASE}/australia/guides/australia-flight-school-loans`,
  },
  "/australia/guides/australia-cadet-programs": {
    title: "Australia Pilot Cadet Programs 2026: Your Elite Pathway to the Flight Deck",
    description: "Explore Australia's top pilot cadet programs for 2026, including Qantas, Rex, and Learn To Fly. Understand CASA regulations, training costs, and career opportunities.",
    canonical: `${BASE}/australia/guides/australia-cadet-programs`,
  },
  "/australia/guides/australia-pilot-salary-2026": {
    title: "Navigating the Skies: Australia Pilot Salary Guide 2026",
    description: "Explore detailed pilot salaries in Australia for 2026, including insights into Qantas, Virgin Australia, regional airlines, and career growth.",
    canonical: `${BASE}/australia/guides/australia-pilot-salary-2026`,
  },
  "/australia/guides/australia-pilot-shortage": {
    title: "Navigating Australia's Pilot Shortage: Opportunities and Challenges for Aspiring Aviators in 2026",
    description: "Explore the current pilot shortage in Australia for 2026, including training costs, CASA regulations, and career opportunities with major airlines like Qantas and Virgin Australia.",
    canonical: `${BASE}/australia/guides/australia-pilot-shortage`,
  },
  "/australia/guides/qantas-group-pilot-academy": {
    title: "Navigating Your Future: A Comprehensive Guide to the Qantas Group Pilot Academy 2026",
    description: "Detailed guide to the Qantas Group Pilot Academy in 2026, covering training, costs, application process, and career prospects with Qantas Group airlines.",
    canonical: `${BASE}/australia/guides/qantas-group-pilot-academy`,
  },
  "/australia/guides/virgin-australia-cadet-pilot-program": {
    title: "Aspiring to the Skies: Your Guide to Becoming a Virgin Australia Pilot in 2026",
    description: "A detailed guide for aspiring pilots in Australia, covering CASA regulations, training costs, and Virgin Australia's direct entry pilot recruitment requirements for 2026.",
    canonical: `${BASE}/australia/guides/virgin-australia-cadet-pilot-program`,
  },
  "/australia/guides/rex-pilot-academy": {
    title: "Mastering the Skies: A Deep Dive into the Rex Pilot Academy Pathway",
    description: "Explore the Rex Pilot Academy (AAPA) cadet program, CASA regulations, training costs, and career opportunities for aspiring pilots in Australia in 2026.",
    canonical: `${BASE}/australia/guides/rex-pilot-academy`,
  },
  "/australia/guides/australia-regional-airlines": {
    title: "Navigating the Skies: A Comprehensive Guide to Australia's Regional Airline Pilot Career (2026)",
    description: "Explore the detailed pathway to becoming a regional airline pilot in Australia, covering CASA regulations, training costs, and airline-specific requirements for 2026.",
    canonical: `${BASE}/australia/guides/australia-regional-airlines`,
  },
  "/australia/guides/australia-military-to-airlines": {
    title: "From Cockpit to Commercial: A Guide for Australian Military Pilots Transitioning to Airlines",
    description: "Comprehensive guide for Australian military pilots transitioning to commercial airlines. Covers CASA regulations, ATPL conversion, costs, and employment prospects in 2026.",
    canonical: `${BASE}/australia/guides/australia-military-to-airlines`,
  },
  "/australia/guides/australia-flight-instructor": {
    title: "Becoming a Flight Instructor in Australia: Your 2026 Guide",
    description: "A comprehensive guide for aspiring flight instructors in Australia. Learn about CASA regulations, training requirements, costs, and career opportunities in 2026.",
    canonical: `${BASE}/australia/guides/australia-flight-instructor`,
  },
  "/australia/guides/pilot-seniority": {
    title: "The Ultimate Guide to Pilot Seniority in Australia (2026)",
    description: "Discover how pilot seniority works in Australia in 2026. Learn how it impacts your salary, aircraft type, base assignment, and career progression at major airlines.",
    canonical: `${BASE}/australia/guides/pilot-seniority`,
  },
  "/australia/guides/australia-pilot-bases": {
    title: "Navigating Australia's Pilot Bases: A 2026 Career Guide",
    description: "Explore Australia's key pilot bases, understand CASA regulations, training costs, and career prospects for pilots in 2026. Your essential guide to aviation in Australia.",
    canonical: `${BASE}/australia/guides/australia-pilot-bases`,
  },
  "/australia/guides/australia-pilot-commuting": {
    title: "Navigating the Skies: A Comprehensive Guide to Pilot Commuting in Australia (2026)",
    description: "Detailed guide for pilots commuting in Australia in 2026, covering CASA regulations, airline policies, cost of living, and lifestyle tips.",
    canonical: `${BASE}/australia/guides/australia-pilot-commuting`,
  },
  "/australia/guides/australia-pilot-schedule": {
    title: "Mastering Your Flight Path: The 2026 Australia Pilot Training Schedule & Costs",
    description: "Comprehensive guide for aspiring pilots in Australia, covering 2026 CASA regulations, license requirements, detailed costs in AUD, and career pathways.",
    canonical: `${BASE}/australia/guides/australia-pilot-schedule`,
  },
  "/australia/guides/australia-pilot-benefits": {
    title: "Unlocking the Skies: Comprehensive Pilot Benefits in Australia (2026)",
    description: "Explore the comprehensive benefits for pilots in Australia in 2026, including salaries, superannuation, health, and career growth with major airlines.",
    canonical: `${BASE}/australia/guides/australia-pilot-benefits`,
  },
  "/australia/guides/australia-pilot-taxes": {
    title: "Navigating Australian Pilot Taxes: A Comprehensive 2026 Guide",
    description: "A detailed guide for Australian pilots on tax obligations, deductible expenses, and allowances for the 2026 financial year.",
    canonical: `${BASE}/australia/guides/australia-pilot-taxes`,
  },
  // ─── Canada guides ────────────────────────────────────────────────────────
  "/canada/guides/transport-canada-cpl-requirements": {
    title: "The Ultimate Guide to Transport Canada Commercial Pilot License (CPL) Requirements in 2026",
    description: "Discover the complete 2026 Transport Canada Commercial Pilot License (CPL) requirements, including flight hours, ground school, medical standards, and training costs.",
    canonical: `${BASE}/canada/guides/transport-canada-cpl-requirements`,
  },
  "/canada/guides/tc-atpl-requirements": {
    title: "Navigating the Skies: Transport Canada ATPL Requirements 2026",
    description: "Detailed guide on Transport Canada ATPL (Aeroplane) requirements for 2026, covering age, medical, knowledge, flight experience, and skill tests.",
    canonical: `${BASE}/canada/guides/tc-atpl-requirements`,
  },
  "/canada/guides/tc-medical-class-1": {
    title: "Transport Canada Medical Class 1: Your Essential Guide to Aviation Fitness",
    description: "Detailed guide on Transport Canada Medical Class 1 for aspiring pilots in Canada. Covers requirements, costs, and examination process for 2026.",
    canonical: `${BASE}/canada/guides/tc-medical-class-1`,
  },
  "/canada/guides/canada-pilot-training-costs": {
    title: "The Ultimate Guide to Pilot Training Costs in Canada (2026)",
    description: "Detailed guide on pilot training costs in Canada for 2026, covering PPL, CPL, ATPL, and strategies to save money.",
    canonical: `${BASE}/canada/guides/canada-pilot-training-costs`,
  },
  "/canada/guides/canada-flight-school-loans": {
    title: "Navigating Flight School Loans in Canada: Your 2026 Financing Guide",
    description: "Explore detailed options for flight school loans in Canada for 2026, including government programs, bank loans, scholarships, and essential tips for aspiring pilots.",
    canonical: `${BASE}/canada/guides/canada-flight-school-loans`,
  },
  "/canada/guides/canada-cadet-programs": {
    title: "Navigating Canada's Elite Pilot Cadet Programs: Your 2026 Guide",
    description: "Explore Canada's top pilot cadet programs for 2026, including Flair, Porter, Jazz, and Air Transat. Understand eligibility, costs, and career paths.",
    canonical: `${BASE}/canada/guides/canada-cadet-programs`,
  },
  "/canada/guides/canada-pilot-salary-2026": {
    title: "Canada Pilot Salary 2026: A Comprehensive Guide to Earnings and Career Paths",
    description: "Detailed guide on pilot salaries in Canada for 2026, covering entry-level to senior captain earnings, training costs, and Transport Canada regulations.",
    canonical: `${BASE}/canada/guides/canada-pilot-salary-2026`,
  },
  "/canada/guides/canada-pilot-shortage": {
    title: "Navigating the Canadian Skies: Understanding the 2026 Pilot Shortage",
    description: "Explore the truth behind the 2026 Canadian pilot shortage. Learn about training costs, Transport Canada regulations, and career outlooks for new aviators.",
    canonical: `${BASE}/canada/guides/canada-pilot-shortage`,
  },
  "/canada/guides/air-canada-jazz-cadet": {
    title: "The Air Canada Jazz Cadet Program: Your Definitive Guide to a Pilot Career in Canada",
    description: "Explore the Air Canada Jazz Cadet Program (Jazz Approach) in Canada. Learn about eligibility, costs, training, and career progression to become an airline pilot.",
    canonical: `${BASE}/canada/guides/air-canada-jazz-cadet`,
  },
  "/canada/guides/westjet-encore-cadet": {
    title: "Aspiring to the Skies: Your Definitive Guide to Becoming a WestJet Encore First Officer",
    description: "A detailed guide for aspiring pilots on how to join WestJet Encore as a First Officer, covering training, costs, and career progression in Canada.",
    canonical: `${BASE}/canada/guides/westjet-encore-cadet`,
  },
  "/canada/guides/porter-airlines-cadet-program": {
    title: "Destination Porter: Your Definitive Guide to a Pilot Career with Porter Airlines",
    description: "Navigate the Porter Airlines Cadet Program for 2026. Discover in-depth training modules, precise cost estimations in CAD, stringent eligibility, and a clear career trajectory to a Porter First Officer position.",
    canonical: `${BASE}/canada/guides/porter-airlines-cadet-program`,
  },
  "/canada/guides/canada-regional-airlines": {
    title: "Navigating the Skies: A Comprehensive Guide to Canada's Regional Airline Pilot Market",
    description: "Explore the pathway to becoming a regional airline pilot in Canada, covering Transport Canada regulations, training costs, and career opportunities with major carriers in 2026.",
    canonical: `${BASE}/canada/guides/canada-regional-airlines`,
  },
  "/canada/guides/canada-military-to-airlines": {
    title: "From Cockpit to Commercial: A Canadian Military Pilot's Guide to Airline Transition",
    description: "Comprehensive guide for Canadian military pilots transitioning to civilian airlines in 2026. Covers Transport Canada ATPL conversion, DND credits, costs, and airline hiring.",
    canonical: `${BASE}/canada/guides/canada-military-to-airlines`,
  },
  "/canada/guides/canada-flight-instructor": {
    title: "Mastering the Skies: Your Definitive Guide to Becoming a Flight Instructor in Canada (2026)",
    description: "A comprehensive guide for aspiring flight instructors in Canada. Learn about Transport Canada requirements, training, costs, and career paths in 2026.",
    canonical: `${BASE}/canada/guides/canada-flight-instructor`,
  },
  "/canada/guides/canada-pilot-seniority": {
    title: "Mastering the Skies: A Comprehensive Guide to Pilot Seniority in Canada",
    description: "Explore the Canadian pilot seniority system, its mechanics, impact on airline careers, and how to navigate career progression in 2026.",
    canonical: `${BASE}/canada/guides/canada-pilot-seniority`,
  },
  "/canada/guides/canada-pilot-bases": {
    title: "Navigating Canadian Skies: A Comprehensive Guide to Pilot Bases in 2026",
    description: "Explore Canadian pilot bases for major and regional airlines in 2026, including Air Canada, WestJet, and Porter. Understand training, costs, and career paths.",
    canonical: `${BASE}/canada/guides/canada-pilot-bases`,
  },
  "/canada/guides/canada-pilot-commuting": {
    title: "Mastering the Commute: A Canadian Pilot's Guide to Seamless Operations",
    description: "Comprehensive guide for Canadian pilots on commuting, covering Transport Canada regulations, major airline policies, costs, and strategies for a successful career.",
    canonical: `${BASE}/canada/guides/canada-pilot-commuting`,
  },
  "/canada/guides/canada-pilot-schedule": {
    title: "Mastering Your Flight Path: A Comprehensive Guide to Canadian Pilot Training Schedules",
    description: "Detailed guide on Canadian pilot training schedules, including PPL, CPL, ATPL, costs, Transport Canada regulations, and career pathways for aspiring pilots in 2026.",
    canonical: `${BASE}/canada/guides/canada-pilot-schedule`,
  },
  "/canada/guides/canada-pilot-benefits": {
    title: "Navigating the Skies: A Comprehensive Guide to Pilot Training and Career Benefits in Canada (2026)",
    description: "Detailed guide to pilot training in Canada, covering licenses, costs, career outlook, and benefits for 2026. Learn about PPL, CPL, ATPL, and top airlines.",
    canonical: `${BASE}/canada/guides/canada-pilot-benefits`,
  },
  "/canada/guides/canada-pilot-taxes": {
    title: "Navigating Canadian Pilot Taxes: A Comprehensive 2026 Guide",
    description: "A detailed 2026 guide to Canadian pilot taxes, covering tuition tax credits, GST/HST implications for flight training, and essential deductions for pilots.",
    canonical: `${BASE}/canada/guides/canada-pilot-taxes`,
  },
  // ─── Europe guides (batch 2) ──────────────────────────────────────────────
  "/europe/guides/easa-cpl-requirements": {
    title: "EASA Commercial Pilot License (CPL) Requirements 2026: Your Comprehensive Guide",
    description: "A detailed guide to EASA CPL requirements in 2026, covering age, medical, flight hours, theoretical knowledge, and costs for aspiring commercial pilots in Europe.",
    canonical: `${BASE}/europe/guides/easa-cpl-requirements`,
  },
  "/europe/guides/easa-atpl-requirements": {
    title: "EASA ATPL Requirements: Your Comprehensive 2026 Guide to Becoming an Airline Pilot in Europe",
    description: "A detailed 2026 guide to EASA ATPL requirements, covering integrated and modular training paths, costs, medicals, exams, and career outlook in Europe.",
    canonical: `${BASE}/europe/guides/easa-atpl-requirements`,
  },
  "/europe/guides/easa-medical-class-1": {
    title: "EASA Class 1 Medical Certificate: The Complete 2026 Guide for European Pilots",
    description: "Detailed guide on EASA Class 1 medical certificate for European pilots, covering requirements, examination process, 2026 costs, and validity.",
    canonical: `${BASE}/europe/guides/easa-medical-class-1`,
  },
  "/europe/guides/pilot-training-costs": {
    title: "Navigating European Skies: A Comprehensive Guide to Pilot Training Costs in 2026",
    description: "Explore the detailed costs of pilot training in Europe for 2026, covering EASA regulations, integrated and modular ATPL programs, and financial planning.",
    canonical: `${BASE}/europe/guides/pilot-training-costs`,
  },
  "/europe/guides/europe-flight-school-loans": {
    title: "Navigating Flight School Loans in Europe: Your 2026 Guide",
    description: "Explore detailed insights into European flight school loans, EASA regulations, and pilot training costs in 2026. Your essential guide to aviation financing.",
    canonical: `${BASE}/europe/guides/europe-flight-school-loans`,
  },
  "/europe/guides/europe-cadet-programs": {
    title: "Navigating Europe's Elite Pilot Training: Your 2026 Guide to Cadet Programs and EASA Licensing",
    description: "Explore the definitive guide to pilot training in Europe for 2026, covering EASA regulations, cadet programs, costs, and career paths.",
    canonical: `${BASE}/europe/guides/europe-cadet-programs`,
  },
  "/europe/guides/pilot-salary-2026": {
    title: "European Pilot Salary & Training Guide 2026",
    description: "Discover the latest 2026 pilot salaries in Europe, compare LCCs vs Legacy carriers, and understand EASA Part-FCL licensing requirements.",
    canonical: `${BASE}/europe/guides/pilot-salary-2026`,
  },
  "/europe/guides/europe-pilot-shortage": {
    title: "Navigating the European Pilot Shortage: Opportunities and Outlook for 2026",
    description: "Explore the European pilot shortage in 2026, including EASA regulations, training costs, airline demand, and career prospects for future pilots. Understand the market dynamics and prepare for a thriving aviation career.",
    canonical: `${BASE}/europe/guides/europe-pilot-shortage`,
  },
  "/europe/guides/lufthansa-european-flight-academy": {
    title: "Lufthansa European Flight Academy: The Complete 2026 Guide",
    description: "Complete 2026 guide to the Lufthansa European Flight Academy (EFA) cadet program. Learn about the €120,000 cost, Brain Capital ISA, DLR test, and career paths.",
    canonical: `${BASE}/europe/guides/lufthansa-european-flight-academy`,
  },
  "/europe/guides/air-france-klm-cadet-pilot-program": {
    title: "Air France-KLM Cadet Pilot Programs 2026: Your Elite Path to the Cockpit",
    description: "Explore the Air France and KLM Cadet Pilot Programs for 2026. Detailed insights into eligibility, selection process, training, costs, and career opportunities.",
    canonical: `${BASE}/europe/guides/air-france-klm-cadet-pilot-program`,
  },
  "/europe/guides/europe-regional-airlines-pilot-training": {
    title: "Europe Regional Airlines: Your Definitive Guide to Pilot Training in 2026",
    description: "Comprehensive guide to becoming a regional airline pilot in Europe, covering EASA ATPL/MPL, training costs, financing, and key airlines for 2026.",
    canonical: `${BASE}/europe/guides/europe-regional-airlines-pilot-training`,
  },
  "/europe/guides/military-to-airlines": {
    title: "From Military Cockpit to Commercial Jet: Navigating Europe's Airline Transition",
    description: "Detailed guide for military pilots transitioning to European airlines. Covers EASA ATPL conversion, regulations, costs, and job prospects in 2026.",
    canonical: `${BASE}/europe/guides/military-to-airlines`,
  },
  "/europe/guides/europe-flight-instructor": {
    title: "Mastering the Skies: Your Definitive Guide to Becoming an EASA Flight Instructor in Europe (2026)",
    description: "A comprehensive guide for aspiring EASA Flight Instructors in Europe, detailing 2026 regulations, training costs, career outlook, and essential requirements.",
    canonical: `${BASE}/europe/guides/europe-flight-instructor`,
  },
  "/europe/guides/europe-pilot-seniority": {
    title: "Navigating the Skies: A Comprehensive Guide to Pilot Seniority in European Aviation (2026)",
    description: "Explore pilot seniority in Europe for 2026, covering EASA, major airlines like Lufthansa, Air France, BA, career progression, and training costs.",
    canonical: `${BASE}/europe/guides/europe-pilot-seniority`,
  },

  // ─── Europe guides (batch 3 - new guides) ─────────────────────────────────
  "/europe/guides/europe-pilot-taxes": {
    title: "Pilot Taxes in Europe 2026: Cross-Border Tax Guide for Airline Pilots | AviatorIQ",
    description: "How are airline pilots taxed in Europe? Cross-border taxation, Ireland vs Spain vs Germany, EASA pilot tax obligations, and how to avoid double taxation.",
    canonical: `${BASE}/europe/guides/europe-pilot-taxes`,
  },
  "/europe/guides/europe-pilot-bases": {
    title: "Best Pilot Bases in Europe 2026: Dublin, Amsterdam, Barcelona, Frankfurt | AviatorIQ",
    description: "Which European pilot base is best? Compare Dublin, Amsterdam, Barcelona, Frankfurt, and Paris CDG by cost of living, lifestyle, and career prospects.",
    canonical: `${BASE}/europe/guides/europe-pilot-bases`,
  },
  "/europe/guides/europe-pilot-benefits": {
    title: "European Airline Pilot Benefits 2026: Staff Travel, Pension & More | AviatorIQ",
    description: "What benefits do airline pilots get in Europe? Staff travel, ZED tickets, pension schemes, loss of licence insurance, and health cover at Ryanair, easyJet, Lufthansa.",
    canonical: `${BASE}/europe/guides/europe-pilot-benefits`,
  },
  "/europe/guides/europe-pilot-schedule": {
    title: "European Pilot Roster & Schedule 2026: EASA FTL Rules Explained | AviatorIQ",
    description: "How does a European airline pilot's roster work? EASA Flight Time Limitations (FTL), max 900 hours per year, typical LCC vs long-haul schedules.",
    canonical: `${BASE}/europe/guides/europe-pilot-schedule`,
  },
  "/europe/guides/europe-pilot-housing-cost-of-living": {
    title: "Pilot Housing & Cost of Living in Europe 2026 | AviatorIQ",
    description: "How much does it cost to live as a pilot in Europe? Housing costs in Dublin, Amsterdam, Barcelona, and Frankfurt compared for airline pilots.",
    canonical: `${BASE}/europe/guides/europe-pilot-housing-cost-of-living`,
  },
  "/europe/guides/europe-pilot-retirement-age": {
    title: "European Pilot Retirement Age 2026: EASA Age 65 Rule Explained | AviatorIQ",
    description: "What is the mandatory retirement age for pilots in Europe? EASA Part-MED age 65 rule, age 60 restrictions, and how it affects your career planning.",
    canonical: `${BASE}/europe/guides/europe-pilot-retirement-age`,
  },
  "/europe/guides/europe-pilot-union": {
    title: "European Pilot Unions 2026: ECA, Vereinigung Cockpit, SNPL, VNV | AviatorIQ",
    description: "Guide to European pilot unions. European Cockpit Association (ECA), Vereinigung Cockpit (Germany), SNPL (France), VNV (Netherlands), SEPLA (Spain), BALPA (UK).",
    canonical: `${BASE}/europe/guides/europe-pilot-union`,
  },
  "/europe/guides/lufthansa-group-pilot-salary": {
    title: "Lufthansa Group Pilot Salary 2026: Lufthansa, Swiss, Austrian, Brussels | AviatorIQ",
    description: "Exact 2026 pilot salaries across the Lufthansa Group. Lufthansa Captain up to €28,422/month, Swiss Captain CHF 250k-320k/year, Austrian and Brussels Airlines pay scales.",
    canonical: `${BASE}/europe/guides/lufthansa-group-pilot-salary`,
  },
  "/europe/guides/air-france-pilot-salary": {
    title: "Air France Pilot Salary 2026: First Officer to Captain Pay | AviatorIQ",
    description: "Air France pilot salary 2026: First Officer €60,000-€150,000, Captain €150,000-€260,000+. SNPL union agreement, allowances, and career progression.",
    canonical: `${BASE}/europe/guides/air-france-pilot-salary`,
  },
  "/europe/guides/klm-pilot-salary": {
    title: "KLM Pilot Salary 2026: First Officer to Captain Pay | AviatorIQ",
    description: "KLM pilot salary 2026: First Officer €80,000-€254,000, Captain €176,000-€338,000+. VNV union agreement, profit-sharing, and KLM Cityhopper pay scales.",
    canonical: `${BASE}/europe/guides/klm-pilot-salary`,
  },

  // ─── UAE guides ───────────────────────────────────────────────────────────
  "/uae/guides/uae-pilot-training-costs": {
    title: "Unveiling the True Cost of Pilot Training in the UAE (2026 Guide)",
    description: "Explore the detailed costs of pilot training in the UAE for 2026, including GCAA regulations, flight schools like EFTA and Alpha Aviation, and financing options.",
    canonical: `${BASE}/uae/guides/uae-pilot-training-costs`,
  },
  "/uae/guides/emirates-cadet-pilot-program": {
    title: "Emirates Cadet Pilot Program: Your Definitive 2026 Guide",
    description: "Explore the Emirates Cadet Pilot Program for 2026. Learn about eligibility, GCAA regulations, training at EFTA, costs in AED, and career opportunities with Emirates.",
    canonical: `${BASE}/uae/guides/emirates-cadet-pilot-program`,
  },
  "/uae/guides/etihad-cadet-pilot-program": {
    title: "The Elite Path: Etihad Airways Cadet Pilot Program 2026",
    description: "Explore the Etihad Airways Cadet Pilot Program for 2026. Learn about eligibility, the MPL training structure, GCAA regulations, and career opportunities for UAE nationals.",
    canonical: `${BASE}/uae/guides/etihad-cadet-pilot-program`,
  },
  "/uae/guides/air-arabia-cadet-program": {
    title: "The Definitive Guide to the Air Arabia Cadet Pilot Program (2026)",
    description: "Comprehensive guide to the Air Arabia Cadet Pilot Program for 2026. Learn about eligibility, GCAA regulations, training structure, and estimated costs in AED.",
    canonical: `${BASE}/uae/guides/air-arabia-cadet-program`,
  },
  "/uae/guides/uae-pilot-salary-2026": {
    title: "UAE Pilot Salary Guide 2026: Unveiling Tax-Free Earning Potential",
    description: "Explore the lucrative tax-free pilot salaries and extensive benefits offered by UAE airlines like Emirates in 2026. Detailed insights for First Officers and Captains.",
    canonical: `${BASE}/uae/guides/uae-pilot-salary-2026`,
  },
  "/uae/guides/uae-pilot-lifestyle": {
    title: "Soaring High: A Comprehensive Guide to the UAE Pilot Lifestyle & Career in 2026",
    description: "Explore the UAE pilot lifestyle in 2026: GCAA regulations, training costs, top airlines like Emirates & Flydubai, tax-free salaries, and career benefits.",
    canonical: `${BASE}/uae/guides/uae-pilot-lifestyle`,
  },
  "/uae/guides/uae-medical-class-1": {
    title: "GCAA Class 1 Medical Certificate: Your Comprehensive 2026 Guide for UAE Pilots",
    description: "A detailed guide to the GCAA Class 1 Medical Certificate in the UAE for 2026, covering requirements, validity, renewal, and approved medical centers.",
    canonical: `${BASE}/uae/guides/uae-medical-class-1`,
  },
  "/uae/guides/uae-pilot-shortage": {
    title: "Navigating the Skies: The UAE Pilot Training Market in 2026",
    description: "Explore the UAE pilot training market in 2026, covering regulations, costs, and career opportunities amidst a growing pilot shortage.",
    canonical: `${BASE}/uae/guides/uae-pilot-shortage`,
  },
  // ─── South Africa guides ──────────────────────────────────────────────────
  "/south-africa/guides/sacpl-requirements": {
    title: "Navigating the Skies: Your Comprehensive Guide to the South African Commercial Pilot License (CPL) in 2026",
    description: "Detailed guide to obtaining a Commercial Pilot License (CPL) in South Africa for 2026, covering SACAA requirements, training costs, and career opportunities.",
    canonical: `${BASE}/south-africa/guides/sacpl-requirements`,
  },
  "/south-africa/guides/sa-atpl-requirements": {
    title: "South African ATPL Requirements 2026: Your Definitive Guide",
    description: "Detailed guide to South African ATPL requirements for 2026, covering SACAA regulations, training, costs, and major airlines. Essential for aspiring pilots.",
    canonical: `${BASE}/south-africa/guides/sa-atpl-requirements`,
  },
  "/south-africa/guides/sacaa-class-1-medical-certificate": {
    title: "SACAA Class 1 Medical Certificate: Your Definitive 2026 Guide for Aspiring Pilots",
    description: "Comprehensive guide to the SACAA Class 1 Medical Certificate for aspiring pilots in South Africa. Covers 2026 requirements, costs, disqualifying conditions, and renewal.",
    canonical: `${BASE}/south-africa/guides/sacaa-class-1-medical-certificate`,
  },
  "/south-africa/guides/pilot-training-costs": {
    title: "The Definitive Guide to Pilot Training Costs in South Africa (2026)",
    description: "Explore the comprehensive guide to pilot training costs in South Africa for 2026, including SACAA regulations, licensing pathways, and financing options.",
    canonical: `${BASE}/south-africa/guides/pilot-training-costs`,
  },
  "/south-africa/guides/south-africa-cadet-programs": {
    title: "Navigating South Africa's Elite Pilot Cadet Programs in 2026",
    description: "Explore South Africa's top pilot cadet programs for 2026. Understand SACAA regulations, SAA requirements, training costs, and funding options for a successful aviation career.",
    canonical: `${BASE}/south-africa/guides/south-africa-cadet-programs`,
  },
  "/south-africa/guides/pilot-salary-2026": {
    title: "Pilot Salary in South Africa 2026: A Comprehensive Guide",
    description: "Explore detailed pilot salary expectations in South Africa for 2026, covering entry-level to experienced captains, major airlines, and SACAA regulations.",
    canonical: `${BASE}/south-africa/guides/pilot-salary-2026`,
  },
  "/south-africa/guides/south-africa-pilot-shortage": {
    title: "Navigating the Skies: A Comprehensive Guide to South Africa's Pilot Training Market Amidst 2026 Challenges",
    description: "Explore the South African pilot training landscape in 2026, including the nuanced pilot shortage, SACAA regulations, and detailed cost breakdowns.",
    canonical: `${BASE}/south-africa/guides/south-africa-pilot-shortage`,
  },
  "/south-africa/guides/south-africa-regional-airlines-pilot-training": {
    title: "Navigating the Skies: A Comprehensive Guide to Pilot Training for South African Regional Airlines",
    description: "A detailed guide for aspiring pilots in South Africa, covering SACAA regulations, training costs, regional airline career paths, and essential insights for 2026.",
    canonical: `${BASE}/south-africa/guides/south-africa-regional-airlines-pilot-training`,
  },
  "/south-africa/guides/military-to-airlines": {
    title: "Transitioning from Military to Airline Pilot in South Africa",
    description: "A detailed guide for South African Air Force (SAAF) pilots transitioning to commercial airlines, covering SACAA regulations, training costs, and career prospects in 2026.",
    canonical: `${BASE}/south-africa/guides/military-to-airlines`,
  },
  // ─── New Zealand guides ───────────────────────────────────────────────────
  "/new-zealand/guides/nz-cpl-requirements": {
    title: "Mastering the Skies: Your Definitive Guide to New Zealand CPL Requirements (2026)",
    description: "A comprehensive guide to New Zealand Commercial Pilot License (CPL) requirements for 2026, including age, medical, flight hours, costs, and career paths.",
    canonical: `${BASE}/new-zealand/guides/nz-cpl-requirements`,
  },
  "/new-zealand/guides/nz-atpl-requirements": {
    title: "Mastering the Skies: Your Definitive Guide to New Zealand ATPL Requirements (2026)",
    description: "A comprehensive guide to New Zealand ATPL requirements for 2026, detailing CAA NZ regulations, flight hours, costs, and career pathways for aspiring airline pilots.",
    canonical: `${BASE}/new-zealand/guides/nz-atpl-requirements`,
  },
  "/new-zealand/guides/nz-medical-class-1": {
    title: "New Zealand Class 1 Medical Certificate: Your Comprehensive Guide to Pilot Medical Certification in 2026",
    description: "Comprehensive guide to obtaining a New Zealand CAA Class 1 Medical Certificate in 2026. Learn about requirements, costs, the application process, and medical standards.",
    canonical: `${BASE}/new-zealand/guides/nz-medical-class-1`,
  },
  "/new-zealand/guides/new-zealand-pilot-training-costs": {
    title: "Navigating the Skies: A Comprehensive Guide to Pilot Training Costs in New Zealand (2026)",
    description: "Explore the detailed costs of pilot training in New Zealand for 2026, including PPL, CPL, ATPL, flight school fees, CAA NZ regulations, and funding options.",
    canonical: `${BASE}/new-zealand/guides/new-zealand-pilot-training-costs`,
  },
  "/new-zealand/guides/new-zealand-cadet-programs": {
    title: "Navigating New Zealand's Pilot Cadet Programs & Training Pathways in 2026",
    description: "Explore New Zealand's pilot cadet programs, including Air New Zealand's Mangōpare, and independent training pathways for 2026. Detailed insights on regulations, costs, and career opportunities.",
    canonical: `${BASE}/new-zealand/guides/new-zealand-cadet-programs`,
  },
  "/new-zealand/guides/air-new-zealand-cadet-pilot-training": {
    title: "Navigating the Skies: A Comprehensive Guide to Pilot Training in New Zealand and the Air New Zealand Cadetship",
    description: "Explore the comprehensive guide to pilot training in New Zealand, including CAA NZ regulations, estimated costs, leading flight schools, and details on the Air New Zealand Mangōpare Pilot Cadetship. Your essential resource for aspiring aviators in Aotearoa.",
    canonical: `${BASE}/new-zealand/guides/air-new-zealand-cadet-pilot-training`,
  },
  "/new-zealand/guides/new-zealand-pilot-salary-2026": {
    title: "New Zealand Pilot Salary Guide 2026: Comprehensive Earnings & Career Outlook",
    description: "Explore the 2026 pilot salary landscape in New Zealand, including Air New Zealand, regional airlines, and factors influencing earnings. Understand CAA regulations and career pathways.",
    canonical: `${BASE}/new-zealand/guides/new-zealand-pilot-salary-2026`,
  },
  "/new-zealand/guides/new-zealand-pilot-shortage": {
    title: "Navigating the New Zealand Pilot Shortage: Your 2026 Training and Career Guide",
    description: "Explore the New Zealand pilot shortage in 2026, including CAA NZ regulations, training costs (NZD), top flight schools, and career opportunities with major airlines. Your essential guide to becoming a pilot in NZ.",
    canonical: `${BASE}/new-zealand/guides/new-zealand-pilot-shortage`,
  },
  "/new-zealand/guides/new-zealand-regional-airlines-pilot-training": {
    title: "Navigating the Skies: A Comprehensive Guide to Pilot Training in New Zealand's Regional Airline Market (2026)",
    description: "Comprehensive guide to pilot training in New Zealand for 2026, covering CAA NZ regulations, PPL, CPL, ATPL costs, regional airlines, and career paths.",
    canonical: `${BASE}/new-zealand/guides/new-zealand-regional-airlines-pilot-training`,
  },
};

/**
 * Returns the best matching RouteMeta for a given URL path.
 * Falls back to a sensible default for unmatched paths.
 */
export function getMetaForPath(path: string): RouteMeta {
  // Exact match first
  if (routeMetaMap[path]) return routeMetaMap[path];
  // Strip trailing slash
  const stripped = path.replace(/\/$/, "");
  if (routeMetaMap[stripped]) return routeMetaMap[stripped];
  // Default fallback
  return {
    title: "AviatorIQ — UK Pilot Training Platform",
    description: "AviatorIQ helps aspiring pilots find the right training route, compare flight schools, and generate a personalised pilot roadmap.",
    canonical: `${BASE}${path}`,
  };
}
