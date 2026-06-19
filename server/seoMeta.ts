/**
 * AviatorPath SEO Meta Map
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

const BASE = "https://aviatorpath.com";
const DEFAULT_OG = `${BASE}/og-default.jpg`;

export const routeMetaMap: Record<string, RouteMeta> = {
  // ─── Core ──────────────────────────────────────────────────────────────────
  "/": {
    title:
      "AviatorPath — UK Pilot Training Platform | Career Readiness Assessment",
    description:
      "AviatorPath helps aspiring pilots in the UK find the right training route, compare flight schools, and generate a personalised pilot roadmap. Free...",
    canonical: `${BASE}/`,
  },
  "/quiz": {
    title: "Career Readiness Assessment | AviatorPath",
    description:
      "Take the AviatorPath Career Readiness Assessment. Answer 12 questions and get a personalised pilot training score, matched flight schools, and your free...",
    canonical: `${BASE}/quiz`,
  },
  "/roadmap": {
    title: "Generate Your Pilot Training Roadmap | AviatorPath",
    description:
      "Generate a free, AI-powered pilot training roadmap personalised to your age, budget, goals, and location. Find the fastest route to the cockpit.",
    canonical: `${BASE}/roadmap`,
  },
  "/schools": {
    title: "UK Flight School Directory 2026 | AviatorPath",
    description:
      "Compare 50+ UK flight schools side by side. Filter by training route (integrated, modular, PPL), finance options, and location. Find the right school...",
    canonical: `${BASE}/schools`,
  },
  "/calculator": {
    title: "Pilot Training Cost Calculator UK 2026 | AviatorPath",
    description:
      "Calculate the true cost of pilot training in the UK. Includes tuition, living costs, exams, medical, and type rating. Integrated and modular routes compared.",
    canonical: `${BASE}/calculator`,
  },
  "/guides": {
    title: "Pilot Training Guides UK 2026 | AviatorPath",
    description:
      "Comprehensive, expert-written guides on every aspect of UK pilot training — from how to become a pilot to ATPL exams, cadet programmes, and airline interviews.",
    canonical: `${BASE}/guides`,
  },
  "/quizzes": {
    title: "Aviation Quizzes & Career Tools | AviatorPath",
    description:
      "Test your aviation knowledge and career readiness with AviatorPath's free quizzes. Licence recommender, cadet eligibility checker, and more.",
    canonical: `${BASE}/quizzes`,
  },
  "/quiz/licence": {
    title: "Which Pilot Licence Do I Need? | Free Quiz | AviatorPath",
    description:
      "Not sure whether to go for PPL, CPL, or ATPL? Take our free 2-minute quiz and get a personalised licence recommendation based on your goals and budget.",
    canonical: `${BASE}/quiz/licence`,
  },
  "/quiz/flight-deck": {
    title: "Flight Deck Readiness Quiz | Are You Ready to Fly? | AviatorPath",
    description:
      "Take the Flight Deck Readiness Quiz and find out where you are on your pilot journey. Get a personalised score, phase assessment, and next steps.",
    canonical: `${BASE}/quiz/flight-deck`,
  },
  "/quiz/flight-deck/results": {
    title: "Your Flight Deck Readiness Results | AviatorPath",
    description:
      "Your personalised Flight Deck Readiness score and next steps. Based on your answers, here is where you stand on your pilot journey and what to do next.",
    canonical: `${BASE}/quiz/flight-deck/results`,
  },
  "/quiz/licence/results": {
    title: "Your Pilot Licence Recommendation | AviatorPath",
    description:
      "Your personalised pilot licence recommendation based on your goals and budget. Here is the licence route that best fits your situation.",
    canonical: `${BASE}/quiz/licence/results`,
  },

  // ─── Tools ─────────────────────────────────────────────────────────────────
  "/tools/integrated-vs-modular": {
    title: "Integrated vs Modular Pilot Training 2026 | AviatorPath",
    description:
      "Use our interactive decision tool to find out whether integrated or modular ATPL training suits your goals, budget, and timeline.",
    canonical: `${BASE}/tools/integrated-vs-modular`,
  },
  "/tools/class-1-medical-check": {
    title: "Class 1 Medical Eligibility Checker | AviatorPath",
    description:
      "Check whether a medical condition is likely to affect your Class 1 Medical Certificate application. Covers common conditions including ADHD, diabetes...",
    canonical: `${BASE}/tools/class-1-medical-check`,
  },
  "/tools/medical-condition-lookup": {
    title: "Pilot Medical Condition Lookup | CAA Class 1 Guide | AviatorPath",
    description:
      "Search any medical condition to find out how the CAA treats it for Class 1 Medical purposes. Based on official CAA and EASA guidance.",
    canonical: `${BASE}/tools/medical-condition-lookup`,
  },
  "/tools/cadet-eligibility": {
    title: "Airline Cadet Programme Eligibility Checker | AviatorPath",
    description:
      "Check your eligibility for UK airline cadet programmes including BA Speedbird Academy, easyJet Generation, and Ryanair Cadet. Instant results.",
    canonical: `${BASE}/tools/cadet-eligibility`,
  },

  // ─── Partner / B2B ─────────────────────────────────────────────────────────
  "/partner": {
    title: "Partner with AviatorPath | Flight School Leads | AviatorPath",
    description:
      "Join the AviatorPath partner programme. Receive pre-qualified, scored aspiring pilots who have actively requested an introduction to your flight school...",
    canonical: `${BASE}/partner`,
  },
  "/for-schools": {
    title: "For Flight Schools | AviatorPath",
    description:
      "List your flight school on AviatorPath and get discovered by thousands of aspiring pilots every month. Verified directory listing, lead matching, and...",
    canonical: `${BASE}/for-schools`,
  },

  // ─── Static ────────────────────────────────────────────────────────────────
  "/about": {
    title: "About AviatorPath | The UK Pilot Training Platform",
    description:
      "AviatorPath was built to give aspiring pilots honest, expert guidance on the path to the cockpit. Learn about our mission, team, and how we work.",
    canonical: `${BASE}/about`,
  },
  "/contact": {
    title: "Contact AviatorPath | Get in Touch",
    description:
      "Get in touch with the AviatorPath team. We're happy to answer questions about pilot training, our platform, or partnership opportunities.",
    canonical: `${BASE}/contact`,
  },
  "/privacy": {
    title: "Privacy Policy | AviatorPath",
    description:
      "AviatorPath Privacy Policy. How we collect, use, and protect your personal data.",
    canonical: `${BASE}/privacy`,
    noindex: true,
  },
  "/terms": {
    title: "Terms of Service | AviatorPath",
    description: "AviatorPath Terms of Service.",
    canonical: `${BASE}/terms`,
    noindex: true,
  },

  // ─── Thin / placeholder pages — noindex until real content is added ─────────
  "/stories": {
    title: "Real Pilot Stories UK | AviatorPath",
    description:
      "Real UK pilot career stories — how they trained, what it cost, how long it took, and what they wish they'd known.",
    canonical: `${BASE}/stories`,
    noindex: true, // placeholder content — noindex until real user stories are live
  },
  "/jobs": {
    title: "Pilot Jobs UK 2026 | First Officer & Cadet Vacancies | AviatorPath",
    description:
      "Browse current UK pilot job vacancies and airline cadet programme openings. Updated regularly.",
    canonical: `${BASE}/jobs`,
    noindex: true, // static placeholder data — noindex until live job feed is integrated
  },

  // ─── UK Guides ─────────────────────────────────────────────────────────────
  "/guides/how-to-become-a-pilot": {
    title: "How to Become a Pilot in the UK (2026 Complete Guide) | AviatorPath",
    description:
      "The definitive guide to becoming a commercial airline pilot in the UK. Covers training routes, costs (£80k–£130k), timelines, medical requirements...",
    canonical: `${BASE}/guides/how-to-become-a-pilot`,
  },
  "/guides/pilot-training-costs": {
    title: "Pilot Training Costs UK 2026: The Complete Breakdown | AviatorPath",
    description:
      "How much does pilot training cost in the UK? Full breakdown of integrated (£100k–£130k) vs modular (£65k–£90k) routes, including hidden costs and...",
    canonical: `${BASE}/guides/pilot-training-costs`,
  },
  "/guides/integrated-vs-modular": {
    title: "Integrated vs Modular ATPL Training UK 2026 | AviatorPath",
    description:
      "Integrated vs modular pilot training compared. Costs, timelines, airline acceptance, and which route suits your situation. Updated for 2026.",
    canonical: `${BASE}/guides/integrated-vs-modular`,
  },
  "/guides/class-1-medical": {
    title: "CAA Class 1 Medical Certificate: Complete Guide 2026 | AviatorPath",
    description:
      "Everything you need to know about the CAA Class 1 Medical Certificate. What's tested, common disqualifiers, costs, and how to prepare.",
    canonical: `${BASE}/guides/class-1-medical`,
  },
  "/guides/airline-pilot-salary": {
    title: "UK Airline Pilot Salary 2026: FO to Captain Pay | AviatorPath",
    description:
      "How much do airline pilots earn in the UK? Full salary breakdown from First Officer (£40k–£65k) to Captain (£90k–£180k) across major UK airlines.",
    canonical: `${BASE}/guides/airline-pilot-salary`,
  },
  "/guides/ba-speedbird-academy": {
    title: "BA Speedbird Academy 2026: Selection & Training Guide | AviatorPath",
    description:
      "Complete guide to the British Airways Speedbird Academy cadet programme. Entry requirements, selection process, training pathway, and what to expect.",
    canonical: `${BASE}/guides/ba-speedbird-academy`,
  },
  "/guides/easyjet-generation-pilot": {
    title: "easyJet Generation Pilot 2026: Complete Guide | AviatorPath",
    description:
      "Everything you need to know about the easyJet Generation Pilot MPL programme. Selection, training at CAE Oxford, costs, and guaranteed FO job offer.",
    canonical: `${BASE}/guides/easyjet-generation-pilot`,
  },
  "/guides/ryanair-cadet-programme": {
    title: "Ryanair Cadet Pilot Programme 2026: Complete Guide | AviatorPath",
    description:
      "Guide to the Ryanair cadet pilot programme. Partner schools, selection process, training pathway, and what it's really like to fly for Ryanair as a new FO.",
    canonical: `${BASE}/guides/ryanair-cadet-programme`,
  },
  "/guides/am-i-too-old-to-become-a-pilot": {
    title: "Am I Too Old to Become a Pilot? Age Limits 2026 | AviatorPath",
    description:
      "Is there an age limit for becoming a commercial pilot in the UK? The honest answer, covering CAA rules, airline hiring ages, and real-world examples.",
    canonical: `${BASE}/guides/am-i-too-old-to-become-a-pilot`,
  },
  "/guides/how-to-finance-pilot-training-uk": {
    title: "How to Finance Pilot Training UK 2026 | AviatorPath",
    description:
      "How to fund pilot training in the UK in 2026. No high-street bank loans exist — covers Lendwise specialist loans, SLC student loans, cadet bonds, RAF...",
    canonical: `${BASE}/guides/how-to-finance-pilot-training-uk`,
  },
  "/guides/uk-pilot-salary-2026": {
    title: "UK Pilot Salary 2026: Complete Pay Guide | AviatorPath",
    description:
      "Full UK pilot salary guide for 2026. First Officer, Captain, and instructor pay at easyJet, Ryanair, British Airways, Jet2, TUI, and regional airlines.",
    canonical: `${BASE}/guides/uk-pilot-salary-2026`,
  },
  "/guides/atpl-theory-exams-uk": {
    title: "ATPL Theory Exams UK: Complete Study Guide 2026 | AviatorPath",
    description:
      "Everything you need to know about the 14 CAA ATPL theory exams. Subjects, pass marks, study resources, and how long it takes to complete them.",
    canonical: `${BASE}/guides/atpl-theory-exams-uk`,
  },
  "/guides/best-flight-schools-uk-2026": {
    title: "Best Flight Schools UK 2026: Integrated & Modular | AviatorPath",
    description:
      "The best UK flight schools for integrated and modular ATPL training in 2026. Honest comparison of CAE Oxford, L3Harris, FTEJerez, and more.",
    canonical: `${BASE}/guides/best-flight-schools-uk-2026`,
  },
  "/guides/cadet-pilot-programmes-uk": {
    title: "UK Airline Cadet Programmes 2026: BA, easyJet & More | AviatorPath",
    description:
      "All UK airline cadet programmes compared: BA Speedbird, easyJet Generation, Ryanair, Wizz Air, and TUI. Entry requirements, costs, and selection tips.",
    canonical: `${BASE}/guides/cadet-pilot-programmes-uk`,
  },
  "/guides/class-1-medical-disqualifiers": {
    title: "CAA Class 1 Medical Disqualifiers 2026 | AviatorPath",
    description:
      "Which medical conditions can disqualify you from getting a CAA Class 1 Medical? Honest guide covering vision, mental health, diabetes, heart...",
    canonical: `${BASE}/guides/class-1-medical-disqualifiers`,
  },
  "/guides/adhd-pilot-uk": {
    title: "ADHD and Pilot Training UK: Can You Fly with ADHD? | AviatorPath",
    description:
      "Can you become a commercial pilot with ADHD in the UK? The CAA's position, medication rules, assessment process, and real pilot experiences.",
    canonical: `${BASE}/guides/adhd-pilot-uk`,
  },
  "/guides/modular-vs-integrated-pilot-training": {
    title: "Modular vs Integrated Pilot Training 2026 | AviatorPath",
    description:
      "In-depth comparison of modular and integrated ATPL training. Cost, time, airline preference, flexibility, and which route produces better pilots.",
    canonical: `${BASE}/guides/modular-vs-integrated-pilot-training`,
  },
  "/guides/am-i-ready-to-start-pilot-training": {
    title: "Am I Ready to Start Pilot Training? Honest Checklist | AviatorPath",
    description:
      "Are you really ready to start pilot training? Honest checklist covering finances, medical, commitment, and what most aspiring pilots underestimate.",
    canonical: `${BASE}/guides/am-i-ready-to-start-pilot-training`,
  },
  "/guides/hour-building-pilot-uk": {
    title: "Hour Building for Pilots UK: How, Where & How Much | AviatorPath",
    description:
      "Complete guide to hour building for UK pilots. Where to build hours cheaply, how long it takes, and how to make the most of your hour-building time.",
    canonical: `${BASE}/guides/hour-building-pilot-uk`,
  },
  "/guides/uk-pilot-shortage-2026": {
    title: "UK Pilot Shortage 2026: Real Data & Implications | AviatorPath",
    description:
      "Is there really a pilot shortage in the UK? The data, what airlines are doing about it, and what it means for aspiring pilots starting training now.",
    canonical: `${BASE}/guides/uk-pilot-shortage-2026`,
  },
  "/guides/pilot-type-rating-uk": {
    title: "Pilot Type Rating UK 2026: Cost & Which Airlines Pay | AviatorPath",
    description:
      "Everything about type ratings for UK pilots. How much they cost (£20k–£35k), which airlines pay, and how to avoid paying for your own.",
    canonical: `${BASE}/guides/pilot-type-rating-uk`,
  },
  "/guides/raf-vs-civilian-pilot-training": {
    title: "RAF vs Civilian Pilot Training UK 2026 | AviatorPath",
    description:
      "RAF vs civilian pilot training compared. Sponsorship, career paths, lifestyle, pay, and which route is better for different types of people.",
    canonical: `${BASE}/guides/raf-vs-civilian-pilot-training`,
  },
  "/guides/pilot-training-over-40": {
    title: "Pilot Training Over 40 UK: Is It Worth It? | AviatorPath",
    description:
      "Can you become an airline pilot if you start training over 40? Honest assessment of age limits, career length, costs, and whether it makes financial sense.",
    canonical: `${BASE}/guides/pilot-training-over-40`,
  },
  "/guides/airline-pilot-interview": {
    title: "Airline Pilot Interview Guide UK 2026 | AviatorPath",
    description:
      "How to prepare for a UK airline pilot interview. Technical questions, competency-based questions, simulator assessment, and what airlines are really...",
    canonical: `${BASE}/guides/airline-pilot-interview`,
  },
  "/guides/women-in-aviation-uk": {
    title: "Women in Aviation UK 2026: Scholarships & Careers | AviatorPath",
    description:
      "Guide for women considering a pilot career in the UK. Scholarships, female-friendly training schools, role models, and the reality of being a female pilot.",
    canonical: `${BASE}/guides/women-in-aviation-uk`,
  },
  "/guides/pilot-aptitude-test-uk": {
    title: "Pilot Aptitude Tests UK 2026: What to Expect & Prep | AviatorPath",
    description:
      "Everything about UK pilot aptitude tests (PILAPT, Compass, Symbiotics). What they test, how to prepare, and what scores airlines and schools are looking for.",
    canonical: `${BASE}/guides/pilot-aptitude-test-uk`,
  },
  "/guides/pilot-cv-cover-letter": {
    title: "Pilot CV & Cover Letter Guide UK 2026 | AviatorPath",
    description:
      "How to write a pilot CV and cover letter that gets noticed. Templates, examples, and what airlines and flight schools actually want to see.",
    canonical: `${BASE}/guides/pilot-cv-cover-letter`,
  },
  "/guides/pilot-aptitude-test-preparation": {
    title: "Pilot Aptitude Test Preparation 2026: Complete Guide | AviatorPath",
    description:
      "Proven strategies to prepare for pilot aptitude tests. Practice resources, cognitive training tips, and what to expect on test day.",
    canonical: `${BASE}/guides/pilot-aptitude-test-preparation`,
  },
  "/guides/airline-simulator-assessment": {
    title: "Airline Simulator Assessment Guide UK | AviatorPath",
    description:
      "What to expect in an airline simulator assessment. How to prepare, what assessors are looking for, and how to perform at your best.",
    canonical: `${BASE}/guides/airline-simulator-assessment`,
  },
  "/guides/ppl-uk": {
    title: "PPL UK: Private Pilot Licence Guide 2026 | AviatorPath",
    description:
      "Complete guide to getting your PPL in the UK. Cost (£8k–£15k), requirements, training process, and whether a PPL is the right first step for you.",
    canonical: `${BASE}/guides/ppl-uk`,
  },
  "/guides/cpl-uk": {
    title: "CPL UK: Commercial Pilot Licence Guide 2026 | AviatorPath",
    description:
      "Everything about the UK Commercial Pilot Licence (CPL). Requirements, training, costs, and how the CPL fits into the modular ATPL route.",
    canonical: `${BASE}/guides/cpl-uk`,
  },
  "/guides/instrument-rating-uk": {
    title: "Instrument Rating UK: IR(A) Guide 2026 | AviatorPath",
    description:
      "Complete guide to the UK Instrument Rating (IR). Training requirements, costs, exams, and how the IR fits into your commercial pilot pathway.",
    canonical: `${BASE}/guides/instrument-rating-uk`,
  },
  "/guides/frozen-atpl-uk": {
    title: "Frozen ATPL UK: What It Is & How to Get One | AviatorPath",
    description:
      "What is a frozen ATPL and how do you get one in the UK? Complete guide to the fATPL, including training requirements, costs, and what 'unfreezing' means.",
    canonical: `${BASE}/guides/frozen-atpl-uk`,
  },
  "/guides/first-officer-uk": {
    title: "How to Become a First Officer in the UK 2026 | AviatorPath",
    description:
      "Complete guide to becoming a First Officer at a UK airline. Minimum hours, licence requirements, type rating, and how to get your first FO job.",
    canonical: `${BASE}/guides/first-officer-uk`,
  },
  "/guides/flight-instructor-uk": {
    title: "How to Become a Flight Instructor UK 2026 | AviatorPath",
    description:
      "Complete guide to becoming a flight instructor in the UK. FI(A) rating requirements, costs, how to build hours as an instructor, and career prospects.",
    canonical: `${BASE}/guides/flight-instructor-uk`,
  },
  "/guides/mcc-joc-uk": {
    title: "MCC/JOC UK 2026: Multi-Crew Cooperation Course | AviatorPath",
    description:
      "What is the MCC/JOC and do you need it? Complete guide to Multi-Crew Cooperation and Jet Orientation courses for UK pilots.",
    canonical: `${BASE}/guides/mcc-joc-uk`,
  },
  "/guides/pilot-eyesight-requirements-uk": {
    title: "Pilot Eyesight Requirements UK 2026: CAA Standards | AviatorPath",
    description:
      "CAA eyesight requirements for UK pilots. What vision standard you need, whether glasses or contact lenses are allowed, and laser eye surgery rules.",
    canonical: `${BASE}/guides/pilot-eyesight-requirements-uk`,
  },
  "/guides/integrated-vs-modular-cost": {
    title: "Integrated vs Modular Cost Comparison UK 2026 | AviatorPath",
    description:
      "Side-by-side cost comparison of integrated and modular ATPL training in the UK. Real numbers, hidden costs, and which route offers better value.",
    canonical: `${BASE}/guides/integrated-vs-modular-cost`,
  },
  "/guides/best-route-to-airline": {
    title: "Best Route to Becoming an Airline Pilot UK 2026 | AviatorPath",
    description:
      "What is the best route to becoming an airline pilot in the UK? Integrated, modular, cadet, military — compared honestly for 2026.",
    canonical: `${BASE}/guides/best-route-to-airline`,
  },
  "/guides/finance-guide": {
    title: "Pilot Training Finance UK: Loans, Bursaries & Fundin | AviatorPath",
    description:
      "How to fund pilot training in the UK. Career development loans, flight school finance, bursaries, cadet schemes, and self-funding strategies.",
    canonical: `${BASE}/guides/finance-guide`,
  },
  "/guides/training-timeline": {
    title: "Pilot Training Timeline UK: How Long Does It Take? | AviatorPath",
    description:
      "How long does it take to become a commercial pilot in the UK? Realistic timelines for integrated (18–24 months) and modular (3–5 years) routes.",
    canonical: `${BASE}/guides/training-timeline`,
  },

  "/guides/wizz-air-pilot-academy": {
    title: "Wizz Air Pilot Academy 2026: Complete Guide | AviatorPath",
    description:
      "Everything about the Wizz Air Pilot Academy cadet programme. Entry requirements, training pathway, costs, and guaranteed FO job offer.",
    canonical: `${BASE}/guides/wizz-air-pilot-academy`,
  },
  "/guides/tui-mpl-cadet-programme": {
    title: "TUI MPL Cadet Programme 2026: Complete Guide | AviatorPath",
    description:
      "Complete guide to the TUI MPL cadet pilot programme. Selection, training, costs, and what it's like to fly for TUI as a new First Officer.",
    canonical: `${BASE}/guides/tui-mpl-cadet-programme`,
  },

  // ─── US Routes ─────────────────────────────────────────────────────────────
  "/us": {
    title: "AviatorPath US — FAA Pilot Training Platform | Career Roadmap",
    description:
      "AviatorPath helps aspiring pilots in the USA find the right FAA training route, compare flight schools, and generate a personalised pilot roadmap.",
    canonical: `${BASE}/us`,
  },
  "/us/guides": {
    title: "FAA Pilot Training Guides USA 2026 | AviatorPath",
    description:
      "Expert guides on every aspect of FAA pilot training in the USA — from how to become a pilot to ATP certificate, airline interviews, and cadet programmes.",
    canonical: `${BASE}/us/guides`,
  },
  "/us/schools": {
    title: "US Flight School Directory 2026 | AviatorPath",
    description:
      "Compare US flight schools for FAA pilot training. Filter by Part 141, Part 61, location, and financing options.",
    canonical: `${BASE}/us/schools`,
  },
  "/us/calculator": {
    title: "FAA Pilot Training Cost Calculator USA 2026 | AviatorPath",
    description:
      "Calculate the true cost of FAA pilot training in the USA. Includes tuition, hours, exams, and ATP certificate costs.",
    canonical: `${BASE}/us/calculator`,
  },
  "/us/roadmap": {
    title: "Generate Your FAA Pilot Training Roadmap | AviatorPath",
    description:
      "Generate a free, AI-powered FAA pilot training roadmap personalised to your goals, budget, and location.",
    canonical: `${BASE}/us/roadmap`,
  },
  "/us/guides/how-to-become-a-pilot": {
    title: "How to Become a Pilot in the USA 2026 | AviatorPath",
    description:
      "The definitive guide to becoming an airline pilot in the USA. FAA training routes, costs, timelines, medical requirements, and airline cadet programmes.",
    canonical: `${BASE}/us/guides/how-to-become-a-pilot`,
  },
  "/us/guides/pilot-training-costs-usa": {
    title: "Pilot Training Costs USA 2026: Complete Breakdown | AviatorPath",
    description:
      "How much does pilot training cost in the USA? Full breakdown of Part 141 and Part 61 routes, including ATP certificate and airline cadet programme costs.",
    canonical: `${BASE}/us/guides/pilot-training-costs-usa`,
  },
  "/us/guides/airline-pilot-salary-usa": {
    title: "US Airline Pilot Salary 2026: FO to Captain Pay | AviatorPath",
    description:
      "How much do airline pilots earn in the USA? Complete salary guide from regional FO ($60k) to major airline Captain ($300k+).",
    canonical: `${BASE}/us/guides/airline-pilot-salary-usa`,
  },
  "/us/guides/faa-medical-requirements": {
    title: "FAA Medical Certificate Requirements 2026 | AviatorPath",
    description:
      "Complete guide to FAA medical certificate classes (First, Second, Third). Requirements, common disqualifiers, and the BasicMed alternative.",
    canonical: `${BASE}/us/guides/faa-medical-requirements`,
  },
  "/us/guides/part-61-vs-141": {
    title: "Part 61 vs Part 141 Flight Training USA 2026 | AviatorPath",
    description:
      "Part 61 vs Part 141 pilot training compared. Costs, timelines, flexibility, and which route is better for your situation.",
    canonical: `${BASE}/us/guides/part-61-vs-141`,
  },
  "/us/guides/gi-bill-flight-training": {
    title: "GI Bill Flight Training 2026: How to Use VA Benefits | AviatorPath",
    description:
      "How to use GI Bill benefits for FAA pilot training. Which schools are approved, how much the VA pays, and how to maximise your benefits.",
    canonical: `${BASE}/us/guides/gi-bill-flight-training`,
  },
  "/us/guides/united-aviate-program": {
    title: "United Aviate Program 2026: Complete Guide | AviatorPath",
    description:
      "Complete guide to the United Airlines Aviate program. Requirements, application process, pathway to United Airlines, and what to expect.",
    canonical: `${BASE}/us/guides/united-aviate-program`,
  },
  "/us/guides/delta-propel-program": {
    title: "Delta Propel Program 2026: Complete Guide | AviatorPath",
    description:
      "Complete guide to the Delta Air Lines Propel program. Requirements, partner schools, pathway to Delta, and how to apply.",
    canonical: `${BASE}/us/guides/delta-propel-program`,
  },
  "/us/guides/atp-certificate-usa": {
    title: "ATP Certificate USA: Requirements, Cost & Timeline | AviatorPath",
    description:
      "Complete guide to the FAA Airline Transport Pilot (ATP) certificate. Hour requirements, written test, checkride, and how to get your ATP.",
    canonical: `${BASE}/us/guides/atp-certificate-usa`,
  },
  "/us/guides/atp-flight-school-guide": {
    title: "ATP Flight School Guide 2026: Is It Worth It? | AviatorPath",
    description:
      "Honest review of ATP Flight School. Costs, training quality, airline partnerships, and whether ATP is the right choice for your pilot career.",
    canonical: `${BASE}/us/guides/atp-flight-school-guide`,
  },
  "/us/guides/embry-riddle-aeronautical-university": {
    title: "Embry-Riddle Aeronautical University 2026 | AviatorPath",
    description:
      "Is Embry-Riddle worth it? Complete guide to ERAU's aviation programmes, costs, career outcomes, and how it compares to other training routes.",
    canonical: `${BASE}/us/guides/embry-riddle-aeronautical-university`,
  },

  // ─── Country selector ──────────────────────────────────────────────────────
  "/select": {
    title: "Choose Your Country | AviatorPath — Global Pilot Training Platform",
    description:
      "Select your country to get a personalised pilot training roadmap with correct costs, routes, regulators, and matched flight schools for your region.",
    canonical: `${BASE}/select`,
    noindex: true,
  },

  // ─── Australia hub & guides ────────────────────────────────────────────────
  "/australia": {
    title: "Become a Pilot in Australia 2026 | CASA Guide | AviatorPath",
    description:
      "Australia's most complete pilot training resource. CASA CPL/ATPL routes, real 2026 costs in AUD, Class 1 medical guidance, and matched Australian...",
    canonical: `${BASE}/australia`,
  },
  "/guides/how-to-become-a-pilot-australia": {
    title: "How to Become a Pilot in Australia 2026 | AviatorPath",
    description:
      "The definitive guide to becoming a commercial airline pilot in Australia. CASA training routes, costs (A$90k–A$150k), timelines, medical requirements...",
    canonical: `${BASE}/guides/how-to-become-a-pilot-australia`,
  },
  "/guides/pilot-training-costs-australia": {
    title: "Australia Pilot Training Costs 2026 | AviatorPath",
    description:
      "How much does pilot training cost in Australia? CPL, ATPL, PPL — real 2026 costs in AUD from Australian flight schools. Integrated vs modular compared.",
    canonical: `${BASE}/guides/pilot-training-costs-australia`,
  },
  "/guides/casa-class-1-medical": {
    title: "CASA Class 1 Medical 2026: Complete Guide for Aspiri | AviatorPath",
    description:
      "Everything you need to know about the CASA Class 1 medical. DAME requirements, disqualifying conditions, and how to prepare for your aviation medical...",
    canonical: `${BASE}/guides/casa-class-1-medical`,
  },
  "/guides/integrated-vs-modular-australia": {
    title: "Integrated vs Modular ATPL in Australia 2026 | AviatorPath",
    description:
      "Which CASA training route is right for you? Integrated vs modular ATPL compared — costs in AUD, timelines, and airline hiring preferences in Australia.",
    canonical: `${BASE}/guides/integrated-vs-modular-australia`,
  },
  "/guides/best-flight-schools-australia": {
    title: "Best Flight Schools in Australia 2026 | CASA-Approved | AviatorPath",
    description:
      "Australia's top CASA-approved flight schools ranked by completion rates, cost, and airline placement. AFAC, Griffith Aviation, AVIA, and more.",
    canonical: `${BASE}/guides/best-flight-schools-australia`,
  },
  "/guides/australian-airline-cadet-programmes": {
    title: "Australian Airline Cadet Programmes 2026 | Qantas, V | AviatorPath",
    description:
      "Complete guide to Australian airline cadet programmes. Qantas Group, Virgin Australia, Rex, and regional airline pathways — eligibility, costs, and...",
    canonical: `${BASE}/guides/australian-airline-cadet-programmes`,
  },
  "/guides/australian-pilot-salary": {
    title: "Australian Pilot Salary 2026: FO to Captain Pay | AviatorPath",
    description:
      "How much do airline pilots earn in Australia? Full salary breakdown from First Officer (A$80k–A$120k) to Captain (A$180k–A$300k) across Qantas...",
    canonical: `${BASE}/guides/australian-pilot-salary`,
  },

  // ─── Canada hub & guides ───────────────────────────────────────────────────
  "/canada": {
    title: "Become a Pilot in Canada 2026 | Transport Canada Tra | AviatorPath",
    description:
      "Canada's most complete pilot training resource. Transport Canada CPL/ATPL routes, real 2026 costs in CAD, Class 1 medical guidance, and matched...",
    canonical: `${BASE}/canada`,
  },
  "/guides/how-to-become-a-pilot-canada": {
    title: "How to Become a Pilot in Canada (2026 Complete Guide) | AviatorPath",
    description:
      "The definitive guide to becoming a commercial airline pilot in Canada. Transport Canada training routes, costs (CA$90k–CA$140k), timelines, medical...",
    canonical: `${BASE}/guides/how-to-become-a-pilot-canada`,
  },
  "/guides/pilot-training-costs-canada": {
    title: "Pilot Training Costs Canada 2026: The Full Breakdown | AviatorPath",
    description:
      "How much does pilot training cost in Canada? CPL, ATPL, PPL — real 2026 costs in CAD from Canadian flight schools. Integrated vs modular compared.",
    canonical: `${BASE}/guides/pilot-training-costs-canada`,
  },
  "/guides/transport-canada-class-1-medical": {
    title: "Transport Canada Class 1 Medical 2026: Complete Guide | AviatorPath",
    description:
      "Everything you need to know about the Transport Canada Class 1 medical. AME requirements, disqualifying conditions, and how to prepare for your...",
    canonical: `${BASE}/guides/transport-canada-class-1-medical`,
  },
  "/guides/best-flight-schools-canada": {
    title: "Best Flight Schools in Canada 2026 | Transport Canad | AviatorPath",
    description:
      "Canada's top Transport Canada-approved flight schools ranked by completion rates, cost, and airline placement. Seneca, BCIT, Confederation, and more.",
    canonical: `${BASE}/guides/best-flight-schools-canada`,
  },
  "/guides/canadian-airline-cadet-programmes": {
    title: "Canadian Airline Cadet Programmes 2026 | AviatorPath",
    description:
      "Complete guide to Canadian airline cadet programmes. Air Canada, WestJet, Jazz, and regional airline pathways — eligibility, costs, and how to apply.",
    canonical: `${BASE}/guides/canadian-airline-cadet-programmes`,
  },
  "/guides/cpl-vs-atpl-canada": {
    title: "CPL vs ATPL Canada 2026: Which Route Is Right? | AviatorPath",
    description:
      "Understanding the difference between CPL and ATPL training in Canada. Costs in CAD, timelines, and which route leads to the airlines fastest.",
    canonical: `${BASE}/guides/cpl-vs-atpl-canada`,
  },
  "/guides/canadian-pilot-salary": {
    title: "Canadian Pilot Salary 2026: First Officer to Captain | AviatorPath",
    description:
      "How much do airline pilots earn in Canada? Full salary breakdown from First Officer (CA$70k–CA$110k) to Captain (CA$160k–CA$280k) across Air Canada...",
    canonical: `${BASE}/guides/canadian-pilot-salary`,
  },

  // ─── Europe / EASA hub & guides ────────────────────────────────────────────
  "/europe": {
    title: "Become a Pilot in Europe 2026 | EASA Training Guide | AviatorPath",
    description:
      "Europe's most complete EASA pilot training resource. Integrated and modular ATPL routes, real 2026 costs in EUR, Class 1 medical guidance, and matched...",
    canonical: `${BASE}/europe`,
  },
  "/guides/how-to-become-a-pilot-europe": {
    title: "How to Become a Pilot in Europe (2026 EASA Guide) | AviatorPath",
    description:
      "The definitive guide to becoming a commercial airline pilot in Europe. EASA training routes, costs (€80k–€140k), timelines, medical requirements, and...",
    canonical: `${BASE}/guides/how-to-become-a-pilot-europe`,
  },
  "/guides/easa-atpl-training-costs": {
    title: "EASA ATPL Training Costs 2026: The Full Breakdown | AviatorPath",
    description:
      "How much does EASA ATPL training cost in Europe? Integrated and modular routes — real 2026 costs in EUR from European flight schools.",
    canonical: `${BASE}/guides/easa-atpl-training-costs`,
  },
  "/guides/easa-class-1-medical": {
    title: "EASA Class 1 Medical 2026: Complete Guide for Aspiri | AviatorPath",
    description:
      "Everything you need to know about the EASA Class 1 medical. AeMC requirements, disqualifying conditions, and how to prepare across EU countries.",
    canonical: `${BASE}/guides/easa-class-1-medical`,
  },
  "/guides/best-flight-schools-europe": {
    title: "Best Flight Schools in Europe 2026 | EASA Approved | AviatorPath",
    description:
      "Europe's top EASA-approved flight schools ranked by completion rates, cost, and airline placement. CAE Oxford, L3Harris, and national academies.",
    canonical: `${BASE}/guides/best-flight-schools-europe`,
  },
  "/guides/european-airline-cadet-programmes": {
    title: "European Airline Cadet Programmes 2026 | Lufthansa... | AviatorPath",
    description:
      "Complete guide to European airline cadet programmes. Lufthansa, Ryanair, easyJet, KLM, and more — eligibility, costs, and how to apply.",
    canonical: `${BASE}/guides/european-airline-cadet-programmes`,
  },
  "/guides/integrated-vs-modular-europe": {
    title: "Integrated vs Modular ATPL in Europe 2026 | EASA | AviatorPath",
    description:
      "Which EASA training route is right for you? Integrated vs modular ATPL compared — costs in EUR, timelines, and airline hiring preferences.",
    canonical: `${BASE}/guides/integrated-vs-modular-europe`,
  },
  "/guides/european-pilot-salary": {
    title: "European Pilot Salary 2026: First Officer to Captain | AviatorPath",
    description:
      "How much do airline pilots earn in Europe? Full salary breakdown from First Officer (€45k–€80k) to Captain (€100k–€200k) across Ryanair, Lufthansa...",
    canonical: `${BASE}/guides/european-pilot-salary`,
  },
  // ─── UAE hub & guides ─────────────────────────────────────────────────────
  "/uae": {
    title: "Become a Pilot in the UAE 2026 | GCAA Training Guide | AviatorPath",
    description:
      "The UAE's most complete pilot training resource. GCAA-approved routes, real 2026 costs in AED, Emirates and Etihad cadet programmes, and Class 1...",
    canonical: `${BASE}/uae`,
  },
  // ─── South Africa hub & guides ────────────────────────────────────────────
  "/south-africa": {
    title: "Become a Pilot in South Africa 2026 | AviatorPath",
    description:
      "South Africa's most complete pilot training resource. SACAA CPL/ATPL routes, real 2026 costs in ZAR, Class 1 medical guidance, and matched South...",
    canonical: `${BASE}/south-africa`,
  },
  // ─── New Zealand hub & guides ─────────────────────────────────────────────
  "/new-zealand": {
    title: "Become a Pilot in New Zealand 2026 | AviatorPath",
    description:
      "New Zealand's most complete pilot training resource. CAA NZ CPL/ATPL routes, real 2026 costs in NZD, Air New Zealand cadet programme, and Class 1...",
    canonical: `${BASE}/new-zealand`,
  },
  // ─── New US guides (batch 2) ──────────────────────────────────────────────
  "/us/guides/faa-atp-requirements": {
    title: "FAA ATP Requirements 2026: Hours, Tests & R-ATP | AviatorPath",
    description:
      "Detailed guide to FAA ATP requirements for 2026, covering Part 61, Part 141, costs, and career opportunities for aspiring airline pilots.",
    canonical: `${BASE}/us/guides/faa-atp-requirements`,
  },
  "/us/guides/us-regional-airlines-guide": {
    title: "US Regional Airlines Pilot Career 2026: Gateway to t | AviatorPath",
    description:
      "Comprehensive guide for aspiring regional airline pilots in the US. Covers 2026 FAA regulations, training costs, career paths, and hiring requirements.",
    canonical: `${BASE}/us/guides/us-regional-airlines-guide`,
  },
  "/us/guides/major-airlines-hiring-usa": {
    title: "Major US Airlines Hiring 2026: Requirements | AviatorPath",
    description:
      "Comprehensive 2026 guide for aspiring US airline pilots, covering training, costs, FAA regulations (Part 61/141), and major airline hiring requirements.",
    canonical: `${BASE}/us/guides/major-airlines-hiring-usa`,
  },
  "/us/guides/faa-medical-class-1": {
    title: "FAA Class 1 Medical Certificate 2026 | AviatorPath",
    description:
      "Discover the 2026 requirements, costs, and application process for the FAA Medical Class 1 Certificate. Learn about vision, hearing, and disqualifying...",
    canonical: `${BASE}/us/guides/faa-medical-class-1`,
  },
  "/us/guides/faa-medical-class-2": {
    title: "FAA Class 2 Medical Certificate 2026 | AviatorPath",
    description:
      "Comprehensive guide to FAA Class 2 Medical Certificate requirements for US commercial pilots in 2026, including regulations, costs, and application process.",
    canonical: `${BASE}/us/guides/faa-medical-class-2`,
  },
  "/us/guides/faa-medical-class-3": {
    title: "FAA Class 3 Medical Certificate 2026 | AviatorPath",
    description:
      "Comprehensive 2026 guide to the FAA Class 3 Medical Certificate. Learn about vision and hearing standards, the MedXPress process, costs, and Special Issuances.",
    canonical: `${BASE}/us/guides/faa-medical-class-3`,
  },
  "/us/guides/us-flight-school-loans": {
    title: "US Flight School Loans 2026: Sallie Mae & GI Bill | AviatorPath",
    description:
      "Discover the best US flight school loans for 2026. Learn about Part 61 vs. Part 141 costs, federal vs. private loans, and alternative financing options.",
    canonical: `${BASE}/us/guides/us-flight-school-loans`,
  },
  "/us/guides/us-cadet-programs": {
    title: "US Airline Cadet Programs 2026: United, Delta & AA | AviatorPath",
    description:
      "Explore US airline cadet programs for 2026, including FAA regulations (Part 61/141), costs, and career paths with American, United, and Southwest.",
    canonical: `${BASE}/us/guides/us-cadet-programs`,
  },
  "/us/guides/us-military-pilot-to-airlines": {
    title: "US Military Pilot to Airlines 2026: R-ATP Guide | AviatorPath",
    description:
      "Navigate the transition from US military pilot to airline pilot in 2026. This guide covers FAA R-ATP requirements, ATP CTP, job market, and airline programs.",
    canonical: `${BASE}/us/guides/us-military-pilot-to-airlines`,
  },
  "/us/guides/us-pilot-shortage-2026": {
    title: "US Pilot Shortage 2026: Data & Career Implications | AviatorPath",
    description:
      "Comprehensive guide to the 2026 US pilot shortage, covering FAA regulations, Part 61/141 training, costs, and airline hiring trends.",
    canonical: `${BASE}/us/guides/us-pilot-shortage-2026`,
  },
  "/us/guides/us-pilot-salary-2026": {
    title: "US Pilot Salary 2026: A Comprehensive Guide to Aviation Earnings",
    description:
      "Explore US pilot salaries for 2026, including major airlines, regional carriers, training costs, and career progression. Your definitive guide to...",
    canonical: `${BASE}/us/guides/us-pilot-salary-2026`,
  },
  "/us/guides/us-pilot-retirement-age": {
    title: "US Airline Pilot Retirement Age 2026: Age 65 Rule | AviatorPath",
    description:
      "Understand the FAA's mandatory retirement age of 65 for US commercial airline pilots in 2026. Explore its history, current regulations, and the ongoing debate.",
    canonical: `${BASE}/us/guides/us-pilot-retirement-age`,
  },
  "/us/guides/us-pilot-training-market-guide": {
    title: "US Pilot Union & Career Guide 2026: ALPA, Pay Scales | AviatorPath",
    description:
      "How US airline pilot unions work, ALPA contract basics, pay scale structures, and what the current market means for new and experienced pilots in 2026.",
    canonical: `${BASE}/us/guides/us-pilot-training-market-guide`,
  },
  "/us/guides/us-pilot-seniority": {
    title: "US Airline Pilot Seniority 2026: How the System Works | AviatorPath",
    description:
      "Explore the profound impact of seniority on US airline pilot careers in 2026, covering pay, schedules, bases, aircraft, and career advancement.",
    canonical: `${BASE}/us/guides/us-pilot-seniority`,
  },
  "/us/guides/us-pilot-commuting": {
    title: "US Pilot Commuting 2026: Crash Pads & Part 117 | AviatorPath",
    description:
      "Comprehensive guide for US airline pilots on commuting strategies, FAA Part 117 compliance, crash pad costs, and training considerations for 2026.",
    canonical: `${BASE}/us/guides/us-pilot-commuting`,
  },
  "/us/guides/us-pilot-training-2026": {
    title: "US Airline Pilot Bases 2026: Where to Be Based & How | AviatorPath",
    description:
      "How US airline pilot base assignments work, which bases are most desirable, and how seniority determines where you live and fly in 2026.",
    canonical: `${BASE}/us/guides/us-pilot-training-2026`,
  },
  "/us/guides/us-pilot-schedule": {
    title: "US Airline Pilot Schedule 2026: What a Real Work Mon | AviatorPath",
    description:
      "What a US airline pilot's schedule actually looks like in 2026: FAA Part 117 duty limits, bidding systems, days off, and how seniority affects your...",
    canonical: `${BASE}/us/guides/us-pilot-schedule`,
  },
  "/us/guides/us-pilot-benefits": {
    title: "US Airline Pilot Benefits 2026: 401(k), Health & Tra | AviatorPath",
    description:
      "Explore the benefits of a US pilot career in 2026, including FAA regulations (Part 61/141), training costs, and airline job prospects.",
    canonical: `${BASE}/us/guides/us-pilot-benefits`,
  },
  "/us/guides/us-pilot-taxes": {
    title: "US Pilot Taxes 2026: Deductions & Tax Strategies | AviatorPath",
    description:
      "Comprehensive guide to US pilot taxes in 2026, covering flight training deductions, 529 plans, and essential tax strategies for aviators.",
    canonical: `${BASE}/us/guides/us-pilot-taxes`,
  },
  "/us/guides/us-pilot-housing": {
    title: "US Pilot Training Housing 2026: Crash Pads & On-Camp | AviatorPath",
    description:
      "A deep dive into US pilot training housing in 2026. Understand costs, options, and how to choose accommodations that support your aviation career.",
    canonical: `${BASE}/us/guides/us-pilot-housing`,
  },
  // ─── Australia guides ─────────────────────────────────────────────────────
  "/australia/guides/casa-cpl-requirements": {
    title: "CASA CPL Requirements 2026: Australia Guide | AviatorPath",
    description:
      "A detailed guide to CASA Commercial Pilot Licence (CPL) requirements in Australia for 2026, covering eligibility, training, costs, and career paths.",
    canonical: `${BASE}/australia/guides/casa-cpl-requirements`,
  },
  "/australia/guides/casa-atpl-requirements": {
    title: "CASA ATPL Requirements 2026: Australia Guide | AviatorPath",
    description:
      "Detailed guide to CASA ATPL requirements for 2026, covering eligibility, exams, flight hours, costs, and career opportunities in Australia.",
    canonical: `${BASE}/australia/guides/casa-atpl-requirements`,
  },
  "/australia/guides/casa-medical-class-1": {
    title: "CASA Class 1 Medical Certificate 2026 | AviatorPath",
    description:
      "Comprehensive guide to the CASA Class 1 Medical Certificate in Australia for 2026, covering requirements, costs, process, and common disqualifying conditions.",
    canonical: `${BASE}/australia/guides/casa-medical-class-1`,
  },
  "/australia/guides/australia-pilot-training-costs": {
    title: "Australia Pilot Training Costs 2026: CPL, ATPL & PPL | AviatorPath",
    description:
      "Explore the true costs of pilot training in Australia for 2026. Detailed insights into licenses, flight schools, CASA fees, and financial aid options.",
    canonical: `${BASE}/australia/guides/australia-pilot-training-costs`,
  },
  "/australia/guides/australia-flight-school-loans": {
    title: "Australia Flight School Loans 2026: VET & Private | AviatorPath",
    description:
      "A detailed guide to flight school loans in Australia for 2026, covering VET Student Loans, private financing, airline cadet programs, and scholarships.",
    canonical: `${BASE}/australia/guides/australia-flight-school-loans`,
  },
  "/australia/guides/australia-cadet-programs": {
    title: "Australia Airline Cadet Programs 2026: Complete Guide | AviatorPath",
    description:
      "Explore Australia's top pilot cadet programs for 2026, including Qantas, Rex, and Learn To Fly. Understand CASA regulations, training costs, and...",
    canonical: `${BASE}/australia/guides/australia-cadet-programs`,
  },
  "/australia/guides/australia-pilot-salary-2026": {
    title: "Australian Pilot Salary 2026: Qantas, Virgin & Rex | AviatorPath",
    description:
      "Explore detailed pilot salaries in Australia for 2026, including insights into Qantas, Virgin Australia, regional airlines, and career growth.",
    canonical: `${BASE}/australia/guides/australia-pilot-salary-2026`,
  },
  "/australia/guides/australia-pilot-shortage": {
    title: "Australia Pilot Shortage 2026: Opportunities & Caree | AviatorPath",
    description:
      "Explore the current pilot shortage in Australia for 2026, including training costs, CASA regulations, and career opportunities with major airlines...",
    canonical: `${BASE}/australia/guides/australia-pilot-shortage`,
  },
  "/australia/guides/qantas-group-pilot-academy": {
    title: "Qantas Group Pilot Academy 2026: Complete Guide | AviatorPath",
    description:
      "Detailed guide to the Qantas Group Pilot Academy in 2026, covering training, costs, application process, and career prospects with Qantas Group airlines.",
    canonical: `${BASE}/australia/guides/qantas-group-pilot-academy`,
  },
  "/australia/guides/virgin-australia-cadet-pilot-program": {
    title: "Virgin Australia Pilot Requirements 2026 | AviatorPath",
    description:
      "A detailed guide for aspiring pilots in Australia, covering CASA regulations, training costs, and Virgin Australia's direct entry pilot recruitment...",
    canonical: `${BASE}/australia/guides/virgin-australia-cadet-pilot-program`,
  },
  "/australia/guides/rex-pilot-academy": {
    title: "Rex Pilot Academy 2026: Cadet Programme Guide | AviatorPath",
    description:
      "Explore the Rex Pilot Academy (AAPA) cadet program, CASA regulations, training costs, and career opportunities for aspiring pilots in Australia in 2026.",
    canonical: `${BASE}/australia/guides/rex-pilot-academy`,
  },
  "/australia/guides/australia-regional-airlines": {
    title: "Australia Regional Airlines Pilot Career 2026: Guide | AviatorPath",
    description:
      "Explore the detailed pathway to becoming a regional airline pilot in Australia, covering CASA regulations, training costs, and airline-specific...",
    canonical: `${BASE}/australia/guides/australia-regional-airlines`,
  },
  "/australia/guides/australia-military-to-airlines": {
    title: "Australia Military Pilot to Airlines 2026 | AviatorPath",
    description:
      "Comprehensive guide for Australian military pilots transitioning to commercial airlines. Covers CASA regulations, ATPL conversion, costs, and...",
    canonical: `${BASE}/australia/guides/australia-military-to-airlines`,
  },
  "/australia/guides/australia-flight-instructor": {
    title: "How to Become a Flight Instructor in Australia 2026 | AviatorPath",
    description:
      "A comprehensive guide for aspiring flight instructors in Australia. Learn about CASA regulations, training requirements, costs, and career...",
    canonical: `${BASE}/australia/guides/australia-flight-instructor`,
  },
  "/australia/guides/pilot-seniority": {
    title: "Australian Airline Pilot Seniority 2026: How the Sys | AviatorPath",
    description:
      "Discover how pilot seniority works in Australia in 2026. Learn how it impacts your salary, aircraft type, base assignment, and career progression at...",
    canonical: `${BASE}/australia/guides/pilot-seniority`,
  },
  "/australia/guides/australia-pilot-bases": {
    title: "Australian Airline Pilot Bases 2026 | AviatorPath",
    description:
      "Explore Australia's key pilot bases, understand CASA regulations, training costs, and career prospects for pilots in 2026. Your essential guide to...",
    canonical: `${BASE}/australia/guides/australia-pilot-bases`,
  },
  "/australia/guides/australia-pilot-commuting": {
    title: "Australian Pilot Commuting 2026: Strategies & Costs | AviatorPath",
    description:
      "Detailed guide for pilots commuting in Australia in 2026, covering CASA regulations, airline policies, cost of living, and lifestyle tips.",
    canonical: `${BASE}/australia/guides/australia-pilot-commuting`,
  },
  "/australia/guides/australia-pilot-schedule": {
    title: "Australian Pilot Schedule 2026: Work Month Guide | AviatorPath",
    description:
      "Comprehensive guide for aspiring pilots in Australia, covering 2026 CASA regulations, license requirements, detailed costs in AUD, and career pathways.",
    canonical: `${BASE}/australia/guides/australia-pilot-schedule`,
  },
  "/australia/guides/australia-pilot-benefits": {
    title: "Australian Pilot Benefits 2026: Salary & Perks | AviatorPath",
    description:
      "Explore the comprehensive benefits for pilots in Australia in 2026, including salaries, superannuation, health, and career growth with major airlines.",
    canonical: `${BASE}/australia/guides/australia-pilot-benefits`,
  },
  "/australia/guides/australia-pilot-taxes": {
    title: "Australian Pilot Taxes 2026: Deductions, ATO Rules & | AviatorPath",
    description:
      "A detailed guide for Australian pilots on tax obligations, deductible expenses, and allowances for the 2026 financial year.",
    canonical: `${BASE}/australia/guides/australia-pilot-taxes`,
  },
  // ─── Canada guides ────────────────────────────────────────────────────────
  "/canada/guides/transport-canada-cpl-requirements": {
    title: "Transport Canada CPL Requirements 2026 | AviatorPath",
    description:
      "Discover the complete 2026 Transport Canada Commercial Pilot License (CPL) requirements, including flight hours, ground school, medical standards, and...",
    canonical: `${BASE}/canada/guides/transport-canada-cpl-requirements`,
  },
  "/canada/guides/tc-atpl-requirements": {
    title: "Navigating the Skies: Transport Canada ATPL Requirements 2026",
    description:
      "Detailed guide on Transport Canada ATPL (Aeroplane) requirements for 2026, covering age, medical, knowledge, flight experience, and skill tests.",
    canonical: `${BASE}/canada/guides/tc-atpl-requirements`,
  },
  "/canada/guides/tc-medical-class-1": {
    title: "Transport Canada Medical Class 1: Your Essential Guide to Avia...",
    description:
      "Detailed guide on Transport Canada Medical Class 1 for aspiring pilots in Canada. Covers requirements, costs, and examination process for 2026.",
    canonical: `${BASE}/canada/guides/tc-medical-class-1`,
  },
  "/canada/guides/canada-pilot-training-costs": {
    title: "The Ultimate Guide to Pilot Training Costs in Canada (2026)",
    description:
      "Detailed guide on pilot training costs in Canada for 2026, covering PPL, CPL, ATPL, and strategies to save money.",
    canonical: `${BASE}/canada/guides/canada-pilot-training-costs`,
  },
  "/canada/guides/canada-flight-school-loans": {
    title: "Canada Flight School Loans 2026: Financing Guide | AviatorPath",
    description:
      "Explore detailed options for flight school loans in Canada for 2026, including government programs, bank loans, scholarships, and essential tips for...",
    canonical: `${BASE}/canada/guides/canada-flight-school-loans`,
  },
  "/canada/guides/canada-cadet-programs": {
    title: "Navigating Canada's Elite Pilot Cadet Programs: Your 2026 Guide",
    description:
      "Explore Canada's top pilot cadet programs for 2026, including Flair, Porter, Jazz, and Air Transat. Understand eligibility, costs, and career paths.",
    canonical: `${BASE}/canada/guides/canada-cadet-programs`,
  },
  "/canada/guides/canada-pilot-salary-2026": {
    title: "Canadian Pilot Salary 2026: Air Canada & WestJet | AviatorPath",
    description:
      "Detailed guide on pilot salaries in Canada for 2026, covering entry-level to senior captain earnings, training costs, and Transport Canada regulations.",
    canonical: `${BASE}/canada/guides/canada-pilot-salary-2026`,
  },
  "/canada/guides/canada-pilot-shortage": {
    title: "Canada Pilot Shortage 2026: Is It Real? | AviatorPath",
    description:
      "Explore the truth behind the 2026 Canadian pilot shortage. Learn about training costs, Transport Canada regulations, and career outlooks for new aviators.",
    canonical: `${BASE}/canada/guides/canada-pilot-shortage`,
  },
  "/canada/guides/air-canada-jazz-cadet": {
    title: "Air Canada Jazz Cadet Program 2026: Complete Guide | AviatorPath",
    description:
      "Explore the Air Canada Jazz Cadet Program (Jazz Approach) in Canada. Learn about eligibility, costs, training, and career progression to become an...",
    canonical: `${BASE}/canada/guides/air-canada-jazz-cadet`,
  },
  "/canada/guides/westjet-encore-cadet": {
    title: "WestJet Encore First Officer 2026: Requirements | AviatorPath",
    description:
      "A detailed guide for aspiring pilots on how to join WestJet Encore as a First Officer, covering training, costs, and career progression in Canada.",
    canonical: `${BASE}/canada/guides/westjet-encore-cadet`,
  },
  "/canada/guides/porter-airlines-cadet-program": {
    title: "Porter Airlines Cadet Program 2026: Complete Guide | AviatorPath",
    description:
      "Navigate the Porter Airlines Cadet Program for 2026. Discover in-depth training modules, precise cost estimations in CAD, stringent eligibility, and a...",
    canonical: `${BASE}/canada/guides/porter-airlines-cadet-program`,
  },
  "/canada/guides/canada-regional-airlines": {
    title: "Canada Regional Airlines Pilot Career 2026: Guide | AviatorPath",
    description:
      "Explore the pathway to becoming a regional airline pilot in Canada, covering Transport Canada regulations, training costs, and career opportunities...",
    canonical: `${BASE}/canada/guides/canada-regional-airlines`,
  },
  "/canada/guides/canada-military-to-airlines": {
    title: "Canada Military Pilot to Airlines 2026 | AviatorPath",
    description:
      "Comprehensive guide for Canadian military pilots transitioning to civilian airlines in 2026. Covers Transport Canada ATPL conversion, DND credits...",
    canonical: `${BASE}/canada/guides/canada-military-to-airlines`,
  },
  "/canada/guides/canada-flight-instructor": {
    title: "How to Become a CFI in Canada 2026 | AviatorPath",
    description:
      "A comprehensive guide for aspiring flight instructors in Canada. Learn about Transport Canada requirements, training, costs, and career paths in 2026.",
    canonical: `${BASE}/canada/guides/canada-flight-instructor`,
  },
  "/canada/guides/canada-pilot-seniority": {
    title: "Canadian Airline Pilot Seniority 2026 | AviatorPath",
    description:
      "Explore the Canadian pilot seniority system, its mechanics, impact on airline careers, and how to navigate career progression in 2026.",
    canonical: `${BASE}/canada/guides/canada-pilot-seniority`,
  },
  "/canada/guides/canada-pilot-bases": {
    title: "Canadian Airline Pilot Bases 2026: Where to Be Based | AviatorPath",
    description:
      "Explore Canadian pilot bases for major and regional airlines in 2026, including Air Canada, WestJet, and Porter. Understand training, costs, and career paths.",
    canonical: `${BASE}/canada/guides/canada-pilot-bases`,
  },
  "/canada/guides/canada-pilot-commuting": {
    title: "Canadian Pilot Commuting 2026: Strategies & Costs | AviatorPath",
    description:
      "Comprehensive guide for Canadian pilots on commuting, covering Transport Canada regulations, major airline policies, costs, and strategies for a...",
    canonical: `${BASE}/canada/guides/canada-pilot-commuting`,
  },
  "/canada/guides/canada-pilot-schedule": {
    title: "Canadian Pilot Schedule 2026: How a Work Month Looks | AviatorPath",
    description:
      "Detailed guide on Canadian pilot training schedules, including PPL, CPL, ATPL, costs, Transport Canada regulations, and career pathways for aspiring...",
    canonical: `${BASE}/canada/guides/canada-pilot-schedule`,
  },
  "/canada/guides/canada-pilot-benefits": {
    title: "Canadian Pilot Career Benefits 2026: Salary, Lifesty | AviatorPath",
    description:
      "Detailed guide to pilot training in Canada, covering licenses, costs, career outlook, and benefits for 2026. Learn about PPL, CPL, ATPL, and top airlines.",
    canonical: `${BASE}/canada/guides/canada-pilot-benefits`,
  },
  "/canada/guides/canada-pilot-taxes": {
    title: "Canadian Pilot Taxes 2026: Deductions & Planning | AviatorPath",
    description:
      "A detailed 2026 guide to Canadian pilot taxes, covering tuition tax credits, GST/HST implications for flight training, and essential deductions for pilots.",
    canonical: `${BASE}/canada/guides/canada-pilot-taxes`,
  },
  // ─── Europe guides (batch 2) ──────────────────────────────────────────────
  "/europe/guides/easa-cpl-requirements": {
    title: "EASA Commercial Pilot License (CPL) Requirements 2026: Your Co...",
    description:
      "A detailed guide to EASA CPL requirements in 2026, covering age, medical, flight hours, theoretical knowledge, and costs for aspiring commercial...",
    canonical: `${BASE}/europe/guides/easa-cpl-requirements`,
  },
  "/europe/guides/easa-atpl-requirements": {
    title: "EASA ATPL Requirements 2026: Europe Guide | AviatorPath",
    description:
      "A detailed 2026 guide to EASA ATPL requirements, covering integrated and modular training paths, costs, medicals, exams, and career outlook in Europe.",
    canonical: `${BASE}/europe/guides/easa-atpl-requirements`,
  },
  "/europe/guides/easa-medical-class-1": {
    title: "EASA Class 1 Medical Certificate: The Complete 2026 Guide for...",
    description:
      "Detailed guide on EASA Class 1 medical certificate for European pilots, covering requirements, examination process, 2026 costs, and validity.",
    canonical: `${BASE}/europe/guides/easa-medical-class-1`,
  },
  "/europe/guides/pilot-training-costs": {
    title: "European Pilot Training Costs 2026: €40k–€140k | AviatorPath",
    description:
      "Explore the detailed costs of pilot training in Europe for 2026, covering EASA regulations, integrated and modular ATPL programs, and financial planning.",
    canonical: `${BASE}/europe/guides/pilot-training-costs`,
  },
  "/europe/guides/europe-flight-school-loans": {
    title: "European Flight School Loans 2026: ISA & Options | AviatorPath",
    description:
      "Explore detailed insights into European flight school loans, EASA regulations, and pilot training costs in 2026. Your essential guide to aviation financing.",
    canonical: `${BASE}/europe/guides/europe-flight-school-loans`,
  },
  "/europe/guides/europe-cadet-programs": {
    title: "European Airline Cadet Programs 2026 | AviatorPath",
    description:
      "Explore the definitive guide to pilot training in Europe for 2026, covering EASA regulations, cadet programs, costs, and career paths.",
    canonical: `${BASE}/europe/guides/europe-cadet-programs`,
  },
  "/europe/guides/pilot-salary-2026": {
    title: "European Pilot Salary & Training Guide 2026",
    description:
      "Discover the latest 2026 pilot salaries in Europe, compare LCCs vs Legacy carriers, and understand EASA Part-FCL licensing requirements.",
    canonical: `${BASE}/europe/guides/pilot-salary-2026`,
  },
  "/europe/guides/europe-pilot-shortage": {
    title: "European Pilot Shortage 2026: Opportunities & Outlook | AviatorPath",
    description:
      "Explore the European pilot shortage in 2026, including EASA regulations, training costs, airline demand, and career prospects for future pilots...",
    canonical: `${BASE}/europe/guides/europe-pilot-shortage`,
  },
  "/europe/guides/lufthansa-european-flight-academy": {
    title: "Lufthansa European Flight Academy: The Complete 2026 Guide",
    description:
      "Complete 2026 guide to the Lufthansa European Flight Academy (EFA) cadet program. Learn about the €120,000 cost, Brain Capital ISA, DLR test, and career paths.",
    canonical: `${BASE}/europe/guides/lufthansa-european-flight-academy`,
  },
  "/europe/guides/air-france-klm-cadet-pilot-program": {
    title: "Air France & KLM Cadet Programs 2026: Complete Guide | AviatorPath",
    description:
      "Explore the Air France and KLM Cadet Pilot Programs for 2026. Detailed insights into eligibility, selection process, training, costs, and career opportunities.",
    canonical: `${BASE}/europe/guides/air-france-klm-cadet-pilot-program`,
  },
  "/europe/guides/europe-regional-airlines-pilot-training": {
    title: "Europe Regional Airlines Pilot Training 2026 | AviatorPath",
    description:
      "Comprehensive guide to becoming a regional airline pilot in Europe, covering EASA ATPL/MPL, training costs, financing, and key airlines for 2026.",
    canonical: `${BASE}/europe/guides/europe-regional-airlines-pilot-training`,
  },
  "/europe/guides/military-to-airlines": {
    title: "European Military Pilot to Airlines 2026 | AviatorPath",
    description:
      "Detailed guide for military pilots transitioning to European airlines. Covers EASA ATPL conversion, regulations, costs, and job prospects in 2026.",
    canonical: `${BASE}/europe/guides/military-to-airlines`,
  },
  "/europe/guides/europe-flight-instructor": {
    title: "EASA Flight Instructor 2026: Requirements & Career | AviatorPath",
    description:
      "A comprehensive guide for aspiring EASA Flight Instructors in Europe, detailing 2026 regulations, training costs, career outlook, and essential requirements.",
    canonical: `${BASE}/europe/guides/europe-flight-instructor`,
  },
  "/europe/guides/europe-pilot-seniority": {
    title: "European Airline Pilot Seniority 2026 | AviatorPath",
    description:
      "Explore pilot seniority in Europe for 2026, covering EASA, major airlines like Lufthansa, Air France, BA, career progression, and training costs.",
    canonical: `${BASE}/europe/guides/europe-pilot-seniority`,
  },
  // ─── UAE guides ───────────────────────────────────────────────────────────
  "/uae/guides/uae-pilot-training-costs": {
    title: "Unveiling the True Cost of Pilot Training in the UAE (2026 Guide)",
    description:
      "Explore the detailed costs of pilot training in the UAE for 2026, including GCAA regulations, flight schools like EFTA and Alpha Aviation, and...",
    canonical: `${BASE}/uae/guides/uae-pilot-training-costs`,
  },
  "/uae/guides/emirates-cadet-pilot-program": {
    title: "Emirates Cadet Pilot Program: Your Definitive 2026 Guide",
    description:
      "Explore the Emirates Cadet Pilot Program for 2026. Learn about eligibility, GCAA regulations, training at EFTA, costs in AED, and career opportunities...",
    canonical: `${BASE}/uae/guides/emirates-cadet-pilot-program`,
  },
  "/uae/guides/etihad-cadet-pilot-program": {
    title: "The Elite Path: Etihad Airways Cadet Pilot Program 2026",
    description:
      "Explore the Etihad Airways Cadet Pilot Program for 2026. Learn about eligibility, the MPL training structure, GCAA regulations, and career...",
    canonical: `${BASE}/uae/guides/etihad-cadet-pilot-program`,
  },
  "/uae/guides/air-arabia-cadet-program": {
    title: "The Definitive Guide to the Air Arabia Cadet Pilot Program (2026)",
    description:
      "Comprehensive guide to the Air Arabia Cadet Pilot Program for 2026. Learn about eligibility, GCAA regulations, training structure, and estimated costs in AED.",
    canonical: `${BASE}/uae/guides/air-arabia-cadet-program`,
  },
  "/uae/guides/uae-pilot-salary-2026": {
    title: "UAE Pilot Salary Guide 2026: Unveiling Tax-Free Earning Potential",
    description:
      "Explore the lucrative tax-free pilot salaries and extensive benefits offered by UAE airlines like Emirates in 2026. Detailed insights for First...",
    canonical: `${BASE}/uae/guides/uae-pilot-salary-2026`,
  },
  "/uae/guides/uae-pilot-lifestyle": {
    title: "UAE Pilot Lifestyle & Career 2026: Complete Guide | AviatorPath",
    description:
      "Explore the UAE pilot lifestyle in 2026: GCAA regulations, training costs, top airlines like Emirates & Flydubai, tax-free salaries, and career benefits.",
    canonical: `${BASE}/uae/guides/uae-pilot-lifestyle`,
  },
  "/uae/guides/uae-medical-class-1": {
    title: "GCAA Class 1 Medical Certificate 2026: UAE Guide | AviatorPath",
    description:
      "A detailed guide to the GCAA Class 1 Medical Certificate in the UAE for 2026, covering requirements, validity, renewal, and approved medical centers.",
    canonical: `${BASE}/uae/guides/uae-medical-class-1`,
  },
  "/uae/guides/uae-pilot-shortage": {
    title: "Navigating the Skies: The UAE Pilot Training Market in 2026",
    description:
      "Explore the UAE pilot training market in 2026, covering regulations, costs, and career opportunities amidst a growing pilot shortage.",
    canonical: `${BASE}/uae/guides/uae-pilot-shortage`,
  },
  // ─── South Africa guides ──────────────────────────────────────────────────
  "/south-africa/guides/sacpl-requirements": {
    title: "South Africa CPL Requirements 2026: SACAA Guide | AviatorPath",
    description:
      "Detailed guide to obtaining a Commercial Pilot License (CPL) in South Africa for 2026, covering SACAA requirements, training costs, and career opportunities.",
    canonical: `${BASE}/south-africa/guides/sacpl-requirements`,
  },
  "/south-africa/guides/sa-atpl-requirements": {
    title: "South African ATPL Requirements 2026: Your Definitive Guide",
    description:
      "Detailed guide to South African ATPL requirements for 2026, covering SACAA regulations, training, costs, and major airlines. Essential for aspiring pilots.",
    canonical: `${BASE}/south-africa/guides/sa-atpl-requirements`,
  },
  "/south-africa/guides/sacaa-class-1-medical-certificate": {
    title: "SACAA Class 1 Medical Certificate 2026 | AviatorPath",
    description:
      "Comprehensive guide to the SACAA Class 1 Medical Certificate for aspiring pilots in South Africa. Covers 2026 requirements, costs, disqualifying...",
    canonical: `${BASE}/south-africa/guides/sacaa-class-1-medical-certificate`,
  },
  "/south-africa/guides/pilot-training-costs": {
    title: "South Africa Pilot Training Costs 2026 | AviatorPath",
    description:
      "Explore the comprehensive guide to pilot training costs in South Africa for 2026, including SACAA regulations, licensing pathways, and financing options.",
    canonical: `${BASE}/south-africa/guides/pilot-training-costs`,
  },
  "/south-africa/guides/south-africa-cadet-programs": {
    title: "Navigating South Africa's Elite Pilot Cadet Programs in 2026",
    description:
      "Explore South Africa's top pilot cadet programs for 2026. Understand SACAA regulations, SAA requirements, training costs, and funding options for a...",
    canonical: `${BASE}/south-africa/guides/south-africa-cadet-programs`,
  },
  "/south-africa/guides/pilot-salary-2026": {
    title: "Pilot Salary in South Africa 2026: A Comprehensive Guide",
    description:
      "Explore detailed pilot salary expectations in South Africa for 2026, covering entry-level to experienced captains, major airlines, and SACAA regulations.",
    canonical: `${BASE}/south-africa/guides/pilot-salary-2026`,
  },
  "/south-africa/guides/south-africa-pilot-shortage": {
    title: "South Africa Pilot Shortage 2026: Career Guide | AviatorPath",
    description:
      "Explore the South African pilot training landscape in 2026, including the nuanced pilot shortage, SACAA regulations, and detailed cost breakdowns.",
    canonical: `${BASE}/south-africa/guides/south-africa-pilot-shortage`,
  },
  "/south-africa/guides/south-africa-regional-airlines-pilot-training": {
    title: "South Africa Regional Airlines Pilot Training 2026 | AviatorPath",
    description:
      "A detailed guide for aspiring pilots in South Africa, covering SACAA regulations, training costs, regional airline career paths, and essential...",
    canonical: `${BASE}/south-africa/guides/south-africa-regional-airlines-pilot-training`,
  },
  "/south-africa/guides/military-to-airlines": {
    title: "Transitioning from Military to Airline Pilot in South Africa",
    description:
      "A detailed guide for South African Air Force (SAAF) pilots transitioning to commercial airlines, covering SACAA regulations, training costs, and...",
    canonical: `${BASE}/south-africa/guides/military-to-airlines`,
  },
  // ─── New Zealand guides ───────────────────────────────────────────────────
  "/new-zealand/guides/nz-cpl-requirements": {
    title: "New Zealand CPL Requirements 2026: CAA NZ Guide | AviatorPath",
    description:
      "A comprehensive guide to New Zealand Commercial Pilot License (CPL) requirements for 2026, including age, medical, flight hours, costs, and career paths.",
    canonical: `${BASE}/new-zealand/guides/nz-cpl-requirements`,
  },
  "/new-zealand/guides/nz-atpl-requirements": {
    title: "New Zealand ATPL Requirements 2026: CAA NZ Guide | AviatorPath",
    description:
      "A comprehensive guide to New Zealand ATPL requirements for 2026, detailing CAA NZ regulations, flight hours, costs, and career pathways for aspiring...",
    canonical: `${BASE}/new-zealand/guides/nz-atpl-requirements`,
  },
  "/new-zealand/guides/nz-medical-class-1": {
    title: "New Zealand Class 1 Medical Certificate 2026 | AviatorPath",
    description:
      "Comprehensive guide to obtaining a New Zealand CAA Class 1 Medical Certificate in 2026. Learn about requirements, costs, the application process, and...",
    canonical: `${BASE}/new-zealand/guides/nz-medical-class-1`,
  },
  "/new-zealand/guides/new-zealand-pilot-training-costs": {
    title: "New Zealand Pilot Training Costs 2026 | AviatorPath",
    description:
      "Explore the detailed costs of pilot training in New Zealand for 2026, including PPL, CPL, ATPL, flight school fees, CAA NZ regulations, and funding options.",
    canonical: `${BASE}/new-zealand/guides/new-zealand-pilot-training-costs`,
  },
  "/new-zealand/guides/new-zealand-cadet-programs": {
    title: "New Zealand Airline Cadet Programs 2026 | AviatorPath",
    description:
      "Explore New Zealand's pilot cadet programs, including Air New Zealand's Mangōpare, and independent training pathways for 2026. Detailed insights on...",
    canonical: `${BASE}/new-zealand/guides/new-zealand-cadet-programs`,
  },
  "/new-zealand/guides/air-new-zealand-cadet-pilot-training": {
    title: "Air New Zealand Cadet Programme 2026: Complete Guide | AviatorPath",
    description:
      "Explore the comprehensive guide to pilot training in New Zealand, including CAA NZ regulations, estimated costs, leading flight schools, and details...",
    canonical: `${BASE}/new-zealand/guides/air-new-zealand-cadet-pilot-training`,
  },
  "/new-zealand/guides/new-zealand-pilot-salary-2026": {
    title: "New Zealand Pilot Salary 2026: Air NZ & Regionals | AviatorPath",
    description:
      "Explore the 2026 pilot salary landscape in New Zealand, including Air New Zealand, regional airlines, and factors influencing earnings. Understand CAA...",
    canonical: `${BASE}/new-zealand/guides/new-zealand-pilot-salary-2026`,
  },
  "/new-zealand/guides/new-zealand-pilot-shortage": {
    title: "New Zealand Pilot Shortage 2026: Career Guide | AviatorPath",
    description:
      "Explore the New Zealand pilot shortage in 2026, including CAA NZ regulations, training costs (NZD), top flight schools, and career opportunities with...",
    canonical: `${BASE}/new-zealand/guides/new-zealand-pilot-shortage`,
  },
  // ─── Missing US guides (batch 3) ──────────────────────────────────────────
  "/us/guides/adhd-faa-medical": {
    title: "Can You Be a Pilot with ADHD in the USA? 2026 | AviatorPath",
    description:
      "FAA ADHD medical rules for pilots in 2026. Fast Track vs Standard Track evaluation, medication rules, Special Issuance process, and how to get certified.",
    canonical: `${BASE}/us/guides/adhd-faa-medical`,
  },
  "/us/guides/airline-interview-usa": {
    title: "US Airline Pilot Interview Guide 2026 | AviatorPath",
    description:
      "How to pass a US airline pilot interview in 2026. TBAS aptitude test, TMAAT behavioural questions, technical standards, and what Delta, United, and...",
    canonical: `${BASE}/us/guides/airline-interview-usa`,
  },
  "/us/guides/am-i-too-old-to-become-a-pilot-usa": {
    title: "Am I Too Old to Become a Pilot in the USA? 2026 | AviatorPath",
    description:
      "Is there an age limit to become a pilot in the USA? FAA rules, mandatory retirement at 65, R-ATP pathways for career changers over 40, and real ROI...",
    canonical: `${BASE}/us/guides/am-i-too-old-to-become-a-pilot-usa`,
  },
  "/us/guides/best-flight-schools-usa": {
    title: "Best Flight Schools USA 2026: ATP, Epic & ERAU | AviatorPath",
    description:
      "Best flight schools in the USA 2026. Honest comparison of ATP Flight School ($123,995), Epic Flight Academy ($89,235), Embry-Riddle, and Part 61 options.",
    canonical: `${BASE}/us/guides/best-flight-schools-usa`,
  },
  "/us/guides/cfi-career-usa": {
    title: "How to Become a CFI in the USA 2026 | AviatorPath",
    description:
      "How to become a Certified Flight Instructor (CFI) in the USA. FAA requirements, training cost ($5k-$10k), CFI salary ($40k-$70k), and why it's the...",
    canonical: `${BASE}/us/guides/cfi-career-usa`,
  },
  "/us/guides/commercial-pilot-certificate-usa": {
    title: "Commercial Pilot Certificate USA 2026: Requirements | AviatorPath",
    description:
      "FAA Commercial Pilot Certificate requirements in 2026. Part 61 (250 hours) vs Part 141 (190 hours), costs ($25k-$35k), and what jobs a CPL unlocks.",
    canonical: `${BASE}/us/guides/commercial-pilot-certificate-usa`,
  },
  "/us/guides/hour-building-usa": {
    title: "Hour Building USA 2026: CFI Path to 1,500 Hours | AviatorPath",
    description:
      "How to build flight hours to 1,500 in the USA. CFI route, banner towing, pipeline patrol — costs, timelines, and the fastest legal paths to an airline job.",
    canonical: `${BASE}/us/guides/hour-building-usa`,
  },
  "/us/guides/how-to-fund-pilot-training-usa": {
    title: "How to Fund Pilot Training USA 2026 | AviatorPath",
    description:
      "How to fund pilot training in the USA in 2026. Sallie Mae loans, GI Bill eligibility, AOPA Finance, Delta/United cadet tuition assistance, and income...",
    canonical: `${BASE}/us/guides/how-to-fund-pilot-training-usa`,
  },
  "/us/guides/instrument-rating-usa": {
    title: "FAA Instrument Rating USA 2026: Requirements & Cost | AviatorPath",
    description:
      "FAA Instrument Rating requirements in 2026. 50 hours cross-country PIC, 40 hours instrument time, cost ($8k-$15k), and why every career pilot needs an IR.",
    canonical: `${BASE}/us/guides/instrument-rating-usa`,
  },
  "/us/guides/military-to-airline-usa": {
    title: "Military Pilot to Airline USA 2026: R-ATP Guide | AviatorPath",
    description:
      "How to transition from US military pilot to airline career in 2026. R-ATP at 750 hours, MilComp credits, ATP CTP waiver, and which airlines prioritise...",
    canonical: `${BASE}/us/guides/military-to-airline-usa`,
  },
  "/us/guides/pilot-aptitude-test-usa": {
    title: "US Airline Pilot Aptitude Tests 2026: AFAST & TBAS | AviatorPath",
    description:
      "US airline pilot aptitude tests in 2026. How to pass the AFAST, Delta psychological screening, United Aviate assessments, and TBAS with practical prep...",
    canonical: `${BASE}/us/guides/pilot-aptitude-test-usa`,
  },
  "/us/guides/pilot-resume-usa": {
    title: "Pilot Resume Guide USA 2026: Format & Flight Hours | AviatorPath",
    description:
      "How to write a US airline pilot resume in 2026. Correct format, how to list flight hours and ratings, what Delta/United/American actually look for...",
    canonical: `${BASE}/us/guides/pilot-resume-usa`,
  },
  "/us/guides/pilot-training-over-40-usa": {
    title: "Pilot Training Over 40 USA 2026: Is It Worth It? | AviatorPath",
    description:
      "Can you become an airline pilot starting over 40 in the USA? Honest 2026 guide covering FAA age rules, R-ATP pathways, ROI calculations, and real...",
    canonical: `${BASE}/us/guides/pilot-training-over-40-usa`,
  },
  "/us/guides/pilot-training-timeline-usa": {
    title: "How Long to Become a Pilot in the USA? 2026 Timeline | AviatorPath",
    description:
      "Realistic 2026 timeline from zero to US airline First Officer. Part 141 fast-track (7 months to CPL + 1-2 years CFI) vs Part 61 self-paced. Includes...",
    canonical: `${BASE}/us/guides/pilot-training-timeline-usa`,
  },
  "/us/guides/ppl-requirements-usa": {
    title: "FAA PPL Requirements USA 2026: Hours, Cost & Start | AviatorPath",
    description:
      "FAA PPL requirements in 2026. Part 61 (40 hours) vs Part 141 (35 hours), real costs ($12k-$25k), medical requirements, and how to get started this week.",
    canonical: `${BASE}/us/guides/ppl-requirements-usa`,
  },
  "/us/guides/type-rating-usa": {
    title: "Airline Type Rating USA 2026: Cost & Sponsorship | AviatorPath",
    description:
      "US airline type rating costs in 2026. A320 type rating $32k-$42k. Boeing 737 $25k-$35k. When to self-fund, when to wait for airline sponsorship, and...",
    canonical: `${BASE}/us/guides/type-rating-usa`,
  },
  "/us/guides/us-pilot-career-outlook": {
    title: "US Pilot Career Outlook 2026: Is Now the Right Time? | AviatorPath",
    description:
      "Is the US pilot shortage real in 2026? Boeing forecasts, mandatory retirement wave, regional vs major airline hiring, and what it means for aspiring...",
    canonical: `${BASE}/us/guides/us-pilot-career-outlook`,
  },
  "/us/guides/women-in-aviation-usa": {
    title: "Women in Aviation USA 2026: Scholarships & Career | AviatorPath",
    description:
      "Women in aviation USA 2026. WAI, AOPA, Ninety-Nines scholarships. Industry statistics, airline diversity programmes, and practical advice for women...",
    canonical: `${BASE}/us/guides/women-in-aviation-usa`,
  },
  "/us/cadet-eligibility": {
    title: "US Airline Cadet Eligibility Checker 2026 | AviatorPath",
    description:
      "Check your eligibility for US airline cadet programs including United Aviate, Delta Propel, American Cadet Academy, and Southwest Destination 225°.",
    canonical: `${BASE}/us/cadet-eligibility`,
  },
  "/us/medical-lookup": {
    title: "FAA Medical Condition Lookup | AviatorPath US",
    description:
      "Look up whether your medical condition is compatible with an FAA First Class Medical Certificate. Covers ADHD, depression, diabetes, vision, and...",
    canonical: `${BASE}/us/medical-lookup`,
  },
  "/us/partner": {
    title: "Partner With AviatorPath | US Flight School Lead Generation",
    description:
      "Partner with AviatorPath to receive qualified US pilot training leads. Connect with aspiring pilots who have been pre-screened by our quiz and roadmap tools.",
    canonical: `${BASE}/us/partner`,
  },
  "/404": {
    title: "Page Not Found | AviatorPath",
    description:
      "The page you are looking for does not exist. Return to AviatorPath to find your pilot training route, compare flight schools, and generate your...",
    canonical: `${BASE}/404`,
  },
  // ─── New Zealand regional airlines ──────────────────────────────────────────
  "/new-zealand/guides/new-zealand-regional-airlines-pilot-training": {
    title: "New Zealand Regional Airlines Pilot Training 2026 | AviatorPath",
    description:
      "Comprehensive guide to pilot training in New Zealand for 2026, covering CAA NZ regulations, PPL, CPL, ATPL costs, regional airlines, and career paths.",
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
    title: "AviatorPath — UK Pilot Training Platform",
    description:
      "AviatorPath helps aspiring pilots find the right training route, compare flight schools, and generate a personalised pilot roadmap.",
    canonical: `${BASE}${path}`,
  };
}
