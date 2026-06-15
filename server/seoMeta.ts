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
