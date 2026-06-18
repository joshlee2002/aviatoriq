// ─── AviatorIQ Quiz Suite ─────────────────────────────────────────────────
// 9 quizzes: personality, practical, trivia, diagnostic, visual, diagnostic, cognitive, diagnostic, personality

export type QuizType =
  | "personality"
  | "scored"
  | "trivia"
  | "diagnostic"
  | "visual"
  | "cognitive";

export interface QuizOption {
  value: string;
  label: string;
  hint?: string;
  emoji?: string;
  archetypes?: string[];
  score?: number;
  correct?: boolean;
  image?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  subtext?: string;
  options: QuizOption[];
  explanation?: string;
}

export interface QuizResult {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  color: string;
  badge?: string;
  cta: {
    label: string;
    href: string;
    assessmentPrompt?: string;
    assessmentSubtext?: string;
    assessmentLabel?: string;
  };
  minScore?: number;
  maxScore?: number;
}

export interface Quiz {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  emoji: string;
  type: QuizType;
  badge?: string;
  duration: string;
  questionCount: number;
  gradient: string;
  accentColor: string;
  questions: QuizQuestion[];
  results: QuizResult[];
}

// ─── Quiz 1: What Kind of Pilot Are You? ─────────────────────────────────
const pilotPersonalityQuiz: Quiz = {
  id: "pilot-personality",
  slug: "what-kind-of-pilot",
  title: "What Kind of Pilot Are You?",
  tagline: "Discover your pilot archetype in 8 questions",
  description:
    "Answer honestly — there are no wrong answers. We'll reveal which type of pilot matches your personality, instincts, and ambitions.",
  emoji: "🧠",
  type: "personality",
  badge: "Most Shared",
  duration: "3 min",
  questionCount: 8,
  gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  accentColor: "#e94560",
  questions: [
    {
      id: "q1",
      question: "You're given a free afternoon with no plans. What do you do?",
      options: [
        {
          value: "a",
          label: "Plan something meticulously — a route, an itinerary, a schedule",
          emoji: "📋",
          archetypes: ["captain", "instructor"],
        },
        {
          value: "b",
          label: "Head somewhere remote and off the beaten track",
          emoji: "🏔️",
          archetypes: ["bush", "aerobatic"],
        },
        {
          value: "c",
          label: "Catch up with people — dinner, calls, socialising",
          emoji: "🍽️",
          archetypes: ["corporate", "captain"],
        },
        {
          value: "d",
          label: "Learn something new — a skill, a subject, a challenge",
          emoji: "📚",
          archetypes: ["instructor", "fighter"],
        },
      ],
    },
    {
      id: "q2",
      question: "Under pressure, you tend to:",
      options: [
        {
          value: "a",
          label: "Stay calm, work through a checklist, trust the process",
          emoji: "✅",
          archetypes: ["captain", "instructor"],
        },
        {
          value: "b",
          label: "Act fast on instinct — hesitation costs you",
          emoji: "⚡",
          archetypes: ["fighter", "aerobatic"],
        },
        {
          value: "c",
          label: "Look for creative solutions others haven't considered",
          emoji: "💡",
          archetypes: ["bush", "corporate"],
        },
        {
          value: "d",
          label: "Take a breath, assess, then act deliberately",
          emoji: "🧘",
          archetypes: ["captain", "bush"],
        },
      ],
    },
    {
      id: "q3",
      question: "What does success look like to you?",
      options: [
        {
          value: "a",
          label: "A respected career with clear progression and stability",
          emoji: "📈",
          archetypes: ["captain", "instructor"],
        },
        {
          value: "b",
          label: "Freedom — doing what I want, where I want, on my terms",
          emoji: "🌍",
          archetypes: ["bush", "aerobatic"],
        },
        {
          value: "c",
          label: "Prestige — being the best at something genuinely difficult",
          emoji: "🏆",
          archetypes: ["fighter", "corporate"],
        },
        {
          value: "d",
          label: "Impact — helping others grow and succeed",
          emoji: "🌱",
          archetypes: ["instructor"],
        },
      ],
    },
    {
      id: "q4",
      question: "How do you feel about rules and procedures?",
      options: [
        {
          value: "a",
          label: "They exist for good reason — I follow them precisely",
          emoji: "📏",
          archetypes: ["captain", "instructor"],
        },
        {
          value: "b",
          label: "I respect them, but I trust my judgement when it matters",
          emoji: "⚖️",
          archetypes: ["bush", "corporate"],
        },
        {
          value: "c",
          label: "Rules are a floor, not a ceiling — I push beyond them",
          emoji: "🚀",
          archetypes: ["fighter", "aerobatic"],
        },
        {
          value: "d",
          label: "I understand why they exist and I teach others to value them",
          emoji: "🎓",
          archetypes: ["instructor", "captain"],
        },
      ],
    },
    {
      id: "q5",
      question: "Your ideal work environment is:",
      options: [
        {
          value: "a",
          label: "A structured, professional team with clear hierarchy",
          emoji: "🏢",
          archetypes: ["captain", "fighter"],
        },
        {
          value: "b",
          label: "Solo or small team, maximum autonomy",
          emoji: "🏕️",
          archetypes: ["bush", "aerobatic"],
        },
        {
          value: "c",
          label: "High-end, client-facing, where presentation matters",
          emoji: "💼",
          archetypes: ["corporate"],
        },
        {
          value: "d",
          label: "A classroom or training environment — sharing knowledge",
          emoji: "📖",
          archetypes: ["instructor"],
        },
      ],
    },
    {
      id: "q6",
      question: "When you make a mistake, your first instinct is to:",
      options: [
        {
          value: "a",
          label: "Debrief it — understand exactly what went wrong and why",
          emoji: "🔍",
          archetypes: ["captain", "instructor"],
        },
        {
          value: "b",
          label: "Move on quickly — dwelling on it costs you more",
          emoji: "➡️",
          archetypes: ["fighter", "aerobatic"],
        },
        {
          value: "c",
          label: "Fix it quietly and make sure it doesn't happen again",
          emoji: "🔧",
          archetypes: ["bush", "corporate"],
        },
        {
          value: "d",
          label: "Use it as a teaching moment — for yourself and others",
          emoji: "💡",
          archetypes: ["instructor"],
        },
      ],
    },
    {
      id: "q7",
      question: "Which aircraft would you most want to fly?",
      options: [
        {
          value: "a",
          label: "A wide-body airliner — Boeing 787 or Airbus A350",
          emoji: "✈️",
          archetypes: ["captain"],
        },
        {
          value: "b",
          label: "A bush plane — Cessna Caravan or de Havilland Beaver",
          emoji: "🏔️",
          archetypes: ["bush"],
        },
        {
          value: "c",
          label: "A fast jet — F-16 or Eurofighter Typhoon",
          emoji: "🚀",
          archetypes: ["fighter"],
        },
        {
          value: "d",
          label: "A Gulfstream or Falcon — private jet, global range",
          emoji: "💼",
          archetypes: ["corporate"],
        },
        {
          value: "e",
          label: "An Extra 300 or Pitts Special — pure aerobatics",
          emoji: "🌀",
          archetypes: ["aerobatic"],
        },
        {
          value: "f",
          label: "A Cessna 172 — teaching someone their first solo",
          emoji: "🎓",
          archetypes: ["instructor"],
        },
      ],
    },
    {
      id: "q8",
      question: "What would you most want people to say about your flying?",
      options: [
        {
          value: "a",
          label: '"I always feel safe when they\'re in command"',
          emoji: "🛡️",
          archetypes: ["captain", "instructor"],
        },
        {
          value: "b",
          label: '"They go places most people never see"',
          emoji: "🗻",
          archetypes: ["bush"],
        },
        {
          value: "c",
          label: '"They push the limits of what\'s physically possible"',
          emoji: "💥",
          archetypes: ["fighter", "aerobatic"],
        },
        {
          value: "d",
          label: '"They helped me find my way to the sky"',
          emoji: "🌟",
          archetypes: ["instructor"],
        },
        {
          value: "e",
          label: '"They make it look effortless — pure class"',
          emoji: "💎",
          archetypes: ["corporate", "captain"],
        },
      ],
    },
  ],
  results: [
    {
      id: "captain",
      title: "The Airline Captain",
      subtitle: "Born for the flight deck of a wide-body",
      description:
        "You're methodical, calm under pressure, and you thrive in structured, high-stakes environments. You respect procedure, value progression, and you're drawn to the scale and professionalism of commercial aviation. The flight deck of a Boeing 787 or Airbus A350 is your natural habitat. You'll put in the years, earn the stripes, and do it properly. The integrated ATPL route is built for people like you — structured, comprehensive, and the fastest path to the right seat.",
      emoji: "✈️",
      color: "#1a6cf7",
      badge: "Most Common Goal",
      cta: {
        label: "Find your airline training route",
        href: "/quiz",
        assessmentPrompt: "Airline Captains take the integrated ATPL route. Want to see exactly what that looks like for you?",
        assessmentSubtext: "Get a personalised cost breakdown, timeline, and matched schools for the integrated route — free, takes 5 minutes.",
        assessmentLabel: "Build My Airline Roadmap",
      },
    },
    {
      id: "bush",
      title: "The Bush Pilot",
      subtitle: "Made for the wild, the remote, the uncharted",
      description:
        "Rules are a starting point for you, not a ceiling. You're drawn to places where GPS coverage is patchy and the runway is a gravel strip in the mountains. You value freedom, self-reliance, and adventure over status. A Cessna Caravan or a de Havilland Beaver suits you far better than a glass cockpit airliner. You fly because the world is bigger than any schedule. The modular route gives you the flexibility to build hours on your own terms.",
      emoji: "🏔️",
      color: "#16a34a",
      cta: {
        label: "Explore the modular training route",
        href: "/quiz",
        assessmentPrompt: "Bush pilots usually take the modular route. Want to see how it fits your life and budget?",
        assessmentSubtext: "The full assessment maps out your modular training path, costs, and the schools that suit your style — free.",
        assessmentLabel: "Map My Modular Route",
      },
    },
    {
      id: "corporate",
      title: "The Corporate Jet Pilot",
      subtitle: "Precision, discretion, and the world's best airports",
      description:
        "You're polished, professional, and you appreciate the finer things. You want to fly fast, fly far, and do it with people who expect nothing but excellence. The business aviation world suits your personality — high standards, high earnings, and the kind of lifestyle that comes with flying a Gulfstream or a Falcon. You'll build your hours strategically and move into the right circles. A CPL with multi-engine and instrument ratings is your first milestone.",
      emoji: "💼",
      color: "#7c3aed",
      cta: {
        label: "Start your personalised assessment",
        href: "/quiz",
        assessmentPrompt: "Corporate pilots need a CPL with multi-engine and instrument ratings. Want your personalised path?",
        assessmentSubtext: "Get a step-by-step roadmap to business aviation — costs, timeline, and matched schools.",
        assessmentLabel: "Plan My Corporate Aviation Path",
      },
    },
    {
      id: "aerobatic",
      title: "The Aerobatic Showman",
      subtitle: "Flight as pure art and physical mastery",
      description:
        "You don't just want to fly — you want to make the aircraft do things that seem impossible. Loops, rolls, knife-edge passes. You're drawn to the performance side of aviation, where skill is visible and the crowd holds its breath. The Extra 300 or a Pitts Special is your canvas. You'll train hard, push limits, and make flying look like something between sport and art. Start with a PPL and build toward aerobatic ratings.",
      emoji: "🌀",
      color: "#ea580c",
      cta: {
        label: "Find your training path",
        href: "/quiz",
        assessmentPrompt: "Aerobatic pilots start with a PPL and build from there. Want to see your exact route?",
        assessmentSubtext: "The assessment maps your training path from zero to aerobatic rating — with real costs and timelines.",
        assessmentLabel: "Start My Aerobatic Journey",
      },
    },
    {
      id: "fighter",
      title: "The Fighter Ace",
      subtitle: "Speed, precision, and the edge of human capability",
      description:
        "You think fast, act decisively, and you're drawn to environments where the margin for error is measured in milliseconds. Military aviation or high-performance aerobatics is where you belong. You're not interested in comfort — you're interested in mastery. Whether it's a fast jet or an aerobatic competition aircraft, you want to fly something that demands everything you've got. Military sponsorship or the RAF/USAF pathway is where you should be looking.",
      emoji: "🚀",
      color: "#dc2626",
      cta: {
        label: "Take the full career assessment",
        href: "/quiz",
        assessmentPrompt: "Military and high-performance pilots need a very specific path. Want to see yours?",
        assessmentSubtext: "The assessment identifies whether military sponsorship or the civilian fast-jet route is right for your profile.",
        assessmentLabel: "Find My High-Performance Route",
      },
    },
    {
      id: "instructor",
      title: "The Flight Instructor",
      subtitle: "The person who gives others their wings",
      description:
        "You're patient, articulate, and you genuinely care about other people's progress. You find as much satisfaction in a student's first solo as you would in your own. Teaching is not a stepping stone for you — it's a calling. A CFI or FI rating suits your personality perfectly, and the aviation community needs more people like you. You'll shape the next generation of pilots — and build your hours faster than almost any other route.",
      emoji: "🎓",
      color: "#0891b2",
      cta: {
        label: "Explore the instructor route",
        href: "/quiz",
        assessmentPrompt: "Flight instructors build hours fast and shape the next generation. Want to see the FI route in detail?",
        assessmentSubtext: "Get a personalised roadmap to your Flight Instructor rating — costs, timeline, and the schools that train the best instructors.",
        assessmentLabel: "Plan My Instructor Route",
      },
    },
  ],
};

// ─── Quiz 2: Could You Pass a Pilot Medical? ─────────────────────────────
const medicalQuiz: Quiz = {
  id: "pilot-medical",
  slug: "pilot-medical-check",
  title: "Could You Pass a Pilot Medical?",
  tagline: "Find out if your health profile is likely to clear Class 1 or Class 2",
  description:
    "One of the biggest fears aspiring pilots have is a hidden medical condition ruling them out. This quiz walks you through the key criteria in plain English — no jargon, no scare tactics.",
  emoji: "🩺",
  type: "diagnostic",
  badge: "Most Important",
  duration: "3 min",
  questionCount: 8,
  gradient: "linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #0a1e35 100%)",
  accentColor: "#06b6d4",
  questions: [
    {
      id: "med1",
      question: "How is your vision?",
      subtext: "Corrected vision with glasses or lenses counts",
      options: [
        {
          value: "a",
          label: "Good — I can read fine print at distance with or without correction",
          emoji: "👁️",
          score: 3,
        },
        {
          value: "b",
          label: "I have mild short or long-sightedness, corrected with glasses",
          emoji: "👓",
          score: 2,
        },
        {
          value: "c",
          label: "I have significant vision issues — strong prescription",
          emoji: "🔍",
          score: 1,
        },
        {
          value: "d",
          label: "I have colour vision deficiency (colour blindness)",
          emoji: "🎨",
          score: 0,
        },
      ],
    },
    {
      id: "med2",
      question: "Have you ever been diagnosed with or treated for a heart condition?",
      options: [
        {
          value: "a",
          label: "No — no heart issues, never investigated",
          emoji: "❤️",
          score: 3,
        },
        {
          value: "b",
          label: "I had a minor issue that was fully resolved",
          emoji: "💊",
          score: 2,
        },
        {
          value: "c",
          label: "I have a managed condition (e.g. controlled hypertension)",
          emoji: "⚠️",
          score: 1,
        },
        {
          value: "d",
          label: "I have a significant cardiac history",
          emoji: "🏥",
          score: 0,
        },
      ],
    },
    {
      id: "med3",
      question: "Have you ever been diagnosed with or treated for a mental health condition?",
      subtext: "This includes anxiety, depression, ADHD, and similar",
      options: [
        {
          value: "a",
          label: "No history of mental health conditions",
          emoji: "✅",
          score: 3,
        },
        {
          value: "b",
          label: "Brief episode, fully resolved, no ongoing treatment",
          emoji: "📋",
          score: 2,
        },
        {
          value: "c",
          label: "Managed with medication or therapy — stable for years",
          emoji: "💙",
          score: 1,
        },
        {
          value: "d",
          label: "Significant or ongoing mental health history",
          emoji: "🤔",
          score: 0,
        },
      ],
    },
    {
      id: "med4",
      question: "Do you have any neurological conditions?",
      subtext: "Epilepsy, seizures, significant head injuries, migraines",
      options: [
        {
          value: "a",
          label: "No neurological history at all",
          emoji: "🧠",
          score: 3,
        },
        {
          value: "b",
          label: "Occasional migraines — no other neurological issues",
          emoji: "💊",
          score: 2,
        },
        {
          value: "c",
          label: "History of seizures or epilepsy — now seizure-free for years",
          emoji: "⚠️",
          score: 1,
        },
        {
          value: "d",
          label: "Active neurological condition",
          emoji: "🏥",
          score: 0,
        },
      ],
    },
    {
      id: "med5",
      question: "What is your approximate BMI?",
      subtext: "BMI is weight (kg) divided by height (m) squared",
      options: [
        {
          value: "a",
          label: "18.5–27.5 — healthy range",
          emoji: "✅",
          score: 3,
        },
        {
          value: "b",
          label: "27.5–32 — slightly above healthy range",
          emoji: "📊",
          score: 2,
        },
        {
          value: "c",
          label: "32–40 — significantly above healthy range",
          emoji: "⚠️",
          score: 1,
        },
        {
          value: "d",
          label: "Under 18.5 or over 40",
          emoji: "🏥",
          score: 0,
        },
      ],
    },
    {
      id: "med6",
      question: "How is your hearing?",
      options: [
        {
          value: "a",
          label: "Normal — no hearing issues",
          emoji: "👂",
          score: 3,
        },
        {
          value: "b",
          label: "Mild hearing loss in one or both ears",
          emoji: "🔉",
          score: 2,
        },
        {
          value: "c",
          label: "Significant hearing loss, managed with aids",
          emoji: "🦻",
          score: 1,
        },
        {
          value: "d",
          label: "Severe hearing impairment",
          emoji: "🔇",
          score: 0,
        },
      ],
    },
    {
      id: "med7",
      question: "Do you have diabetes?",
      options: [
        {
          value: "a",
          label: "No diabetes",
          emoji: "✅",
          score: 3,
        },
        {
          value: "b",
          label: "Diet-controlled Type 2 — no medication",
          emoji: "🥗",
          score: 2,
        },
        {
          value: "c",
          label: "Medication-controlled Type 2 (tablets, not insulin)",
          emoji: "💊",
          score: 1,
        },
        {
          value: "d",
          label: "Insulin-dependent (Type 1 or Type 2)",
          emoji: "💉",
          score: 0,
        },
      ],
    },
    {
      id: "med8",
      question: "Have you had any significant surgery or ongoing medical treatment in the last 3 years?",
      options: [
        {
          value: "a",
          label: "No surgery or ongoing treatment",
          emoji: "✅",
          score: 3,
        },
        {
          value: "b",
          label: "Minor surgery, fully recovered",
          emoji: "🩹",
          score: 2,
        },
        {
          value: "c",
          label: "Significant surgery — fully recovered, no complications",
          emoji: "🏥",
          score: 1,
        },
        {
          value: "d",
          label: "Ongoing treatment or recent major surgery",
          emoji: "⚠️",
          score: 0,
        },
      ],
    },
  ],
  results: [
    {
      id: "likely-clear",
      title: "Likely to Clear Class 1",
      subtitle: "Your health profile looks strong",
      description:
        "Based on your answers, your health profile is consistent with what Class 1 medical examiners typically approve. This is not a medical assessment — only a qualified Aeromedical Examiner (AME) can give you a definitive answer — but there are no obvious red flags in your profile. The next step is to book an informal consultation with an AME before you commit to training. It costs around £200–£400 and gives you certainty before you spend a penny on flight school.",
      emoji: "✅",
      color: "#10b981",
      minScore: 18,
      maxScore: 24,
      cta: {
        label: "Find out more about the Class 1 medical",
        href: "/tools/class-1-medical-check",
        assessmentPrompt: "Your medical profile looks good. Now let's build your training roadmap.",
        assessmentSubtext: "Get a personalised route, cost breakdown, and matched schools — takes 5 minutes.",
        assessmentLabel: "Build My Roadmap",
      },
    },
    {
      id: "probably-clear",
      title: "Probably Fine — Worth Checking",
      subtitle: "A few areas to clarify with an examiner",
      description:
        "Your profile has some areas that warrant a conversation with an Aeromedical Examiner before you start training. Most of these are manageable — medical standards have evolved significantly and many conditions that once disqualified pilots no longer do. Don't assume the worst. Book an informal AME consultation first. It's the most important £200–£400 you'll spend before committing to training.",
      emoji: "🤔",
      color: "#f59e0b",
      minScore: 12,
      maxScore: 17,
      cta: {
        label: "Use the medical condition lookup tool",
        href: "/tools/class-1-medical-check",
        assessmentPrompt: "Some conditions need checking before you commit to training. Use our lookup tool.",
        assessmentSubtext: "Check your specific condition against CAA, FAA, and CASA standards — free, instant results.",
        assessmentLabel: "Check My Medical Eligibility",
      },
    },
    {
      id: "needs-investigation",
      title: "Needs Proper Investigation",
      subtitle: "Don't assume — get a professional opinion first",
      description:
        "Your answers suggest some areas that could be challenging for a Class 1 medical. This does not mean you can't fly — it means you need a proper assessment before making any decisions. Medical standards are more flexible than most people think, and waivers and special issuances exist for many conditions. The worst thing you can do is assume you're disqualified without asking. Book an AME consultation. Get the real answer.",
      emoji: "⚠️",
      color: "#ef4444",
      minScore: 0,
      maxScore: 11,
      cta: {
        label: "Read our medical disqualifiers guide",
        href: "/guides/class-1-medical-disqualifiers",
        assessmentPrompt: "Understanding your medical situation is the first step. Our guide covers every condition.",
        assessmentSubtext: "Plain English breakdown of Class 1 medical standards across all major regulators.",
        assessmentLabel: "Read the Medical Guide",
      },
    },
  ],
};

// ─── Quiz 3: Aviation Myth Buster ────────────────────────────────────────
const mythBusterQuiz: Quiz = {
  id: "myth-buster",
  slug: "aviation-myth-buster",
  title: "Aviation Myth Buster",
  tagline: "10 aviation 'facts' — how many are actually true?",
  description:
    "Think you know what really happens on a commercial flight? Test yourself against 10 of the most persistent aviation myths. Some of the answers will surprise you.",
  emoji: "🔍",
  type: "trivia",
  badge: "Most Surprising",
  duration: "4 min",
  questionCount: 10,
  gradient: "linear-gradient(135deg, #1a1a0e 0%, #2d2d1e 50%, #1a2010 100%)",
  accentColor: "#f59e0b",
  questions: [
    {
      id: "myth1",
      question: "Pilots can open the cockpit door mid-flight if a passenger becomes dangerous.",
      options: [
        {
          value: "false",
          label: "FALSE — cockpit doors are locked and reinforced after 9/11",
          correct: true,
        },
        {
          value: "true",
          label: "TRUE — pilots can open the door in an emergency",
          correct: false,
        },
      ],
      explanation:
        "FALSE. Post-9/11 regulations require reinforced, locked cockpit doors that cannot be opened from the cabin side. Cabin crew have a code to request entry, but the pilots control access entirely. If a passenger becomes violent, it is the cabin crew's responsibility to manage the situation — the pilots do not leave the cockpit.",
    },
    {
      id: "myth2",
      question: "Turbulence can cause a commercial aircraft to crash.",
      options: [
        {
          value: "false",
          label: "FALSE — modern aircraft are built to withstand extreme turbulence",
          correct: true,
        },
        {
          value: "true",
          label: "TRUE — severe turbulence is a genuine structural risk",
          correct: false,
        },
      ],
      explanation:
        "FALSE. Commercial aircraft are certified to withstand forces far beyond anything encountered in normal or even severe turbulence. Wings flex deliberately to absorb stress. The last turbulence-caused structural failure of a commercial airliner was in 1966. Turbulence is uncomfortable and occasionally injures unbelted passengers, but it cannot bring down a modern airliner.",
    },
    {
      id: "myth3",
      question: "Autopilot flies the plane for most of a commercial flight.",
      options: [
        {
          value: "true",
          label: "TRUE — autopilot handles the majority of cruise flight",
          correct: true,
        },
        {
          value: "false",
          label: "FALSE — pilots manually fly throughout the flight",
          correct: false,
        },
      ],
      explanation:
        "TRUE. On a typical long-haul flight, autopilot is engaged for 95–99% of the flight. Pilots manually fly during takeoff, the initial climb, the approach, and landing — and they monitor systems throughout. This is by design: automation reduces workload and fatigue, allowing pilots to focus on decision-making and monitoring. Pilots are still flying the aircraft — they're just doing it through the automation.",
    },
    {
      id: "myth4",
      question: "You can use your phone on a plane — it won't actually cause a crash.",
      options: [
        {
          value: "true",
          label: "TRUE — the interference risk is theoretical, not proven",
          correct: true,
        },
        {
          value: "false",
          label: "FALSE — phone signals genuinely interfere with avionics",
          correct: false,
        },
      ],
      explanation:
        "TRUE — with nuance. No commercial aircraft has ever crashed due to passenger mobile phone use, and the FAA and EASA have both acknowledged the interference risk is extremely low. The real reason for flight mode is that phones searching for towers create audible interference in cockpit headsets ('GSM buzz'), which is distracting. Most airlines now permit phone use in flight mode, and many allow full connectivity via in-flight WiFi.",
    },
    {
      id: "myth5",
      question: "The oxygen masks that drop from the ceiling give you about 15 minutes of oxygen.",
      options: [
        {
          value: "true",
          label: "TRUE — approximately 12–15 minutes of oxygen",
          correct: true,
        },
        {
          value: "false",
          label: "FALSE — they provide much longer than that",
          correct: false,
        },
      ],
      explanation:
        "TRUE. The passenger oxygen masks provide approximately 12–15 minutes of chemical oxygen — enough time for the pilots to descend to 10,000 feet where the air is breathable without supplemental oxygen. The masks are not connected to a large oxygen tank; they use a chemical reaction (sodium chlorate burning) to generate oxygen. 15 minutes is all that's needed.",
    },
    {
      id: "myth6",
      question: "Both pilots eat different meals to reduce the risk of food poisoning.",
      options: [
        {
          value: "true",
          label: "TRUE — many airlines require pilots to eat different meals",
          correct: true,
        },
        {
          value: "false",
          label: "FALSE — there is no such rule",
          correct: false,
        },
      ],
      explanation:
        "TRUE. Many airlines have a policy (though not universally mandated by regulators) that the captain and first officer eat different meals to reduce the risk of both pilots being incapacitated by food poisoning simultaneously. Pilots are also often advised not to eat the same meal as each other, and some airlines provide pilots with different meals from those served to passengers.",
    },
    {
      id: "myth7",
      question: "Some airlines genuinely skip row 13 on their aircraft.",
      options: [
        {
          value: "true",
          label: "TRUE — multiple major airlines skip row 13",
          correct: true,
        },
        {
          value: "false",
          label: "FALSE — all airlines use sequential row numbering",
          correct: false,
        },
      ],
      explanation:
        "TRUE. Ryanair, Lufthansa, Air France, Iberia, and Qatar Airways all skip row 13 due to superstition (triskaidekaphobia). Some also skip row 17 — in Roman numerals XVII can be rearranged to VIXI, meaning 'my life is over' in Latin. Cathay Pacific skips rows 4 and 14 because the number 4 sounds like 'death' in Chinese.",
    },
    {
      id: "myth8",
      question: "Pilots on long-haul flights are allowed to sleep during the flight.",
      options: [
        {
          value: "true",
          label: "TRUE — controlled rest is a regulated procedure",
          correct: true,
        },
        {
          value: "false",
          label: "FALSE — pilots must remain awake for the entire flight",
          correct: false,
        },
      ],
      explanation:
        "TRUE. Long-haul flights carry augmented crews specifically so pilots can take planned rest breaks. There are dedicated crew rest areas on wide-body aircraft. Controlled rest is a regulated procedure under aviation authority rules — it's not just allowed, it's required for safety on very long sectors.",
    },
    {
      id: "myth9",
      question: "ETOPS — the rule allowing twin-engine jets to fly over oceans — stands for 'Engines Turn Or Passengers Swim'.",
      options: [
        {
          value: "false",
          label: "FALSE — ETOPS stands for Extended-range Twin-engine Operational Performance Standards",
          correct: true,
        },
        {
          value: "true",
          label: "TRUE — that's the informal aviation joke for it",
          correct: false,
        },
      ],
      explanation:
        "FALSE — technically. ETOPS officially stands for Extended-range Twin-engine Operational Performance Standards (later Extended Operations). However, 'Engines Turn Or Passengers Swim' is a well-known aviation joke that pilots actually use. The regulation allows twin-engine aircraft like the Boeing 777 and 787 to fly routes that take them more than 60 minutes from a diversion airport — which covers most oceanic routes.",
    },
    {
      id: "myth10",
      question: "The cabin air on a plane is recycled and full of germs.",
      options: [
        {
          value: "false",
          label: "FALSE — cabin air is filtered to hospital standards",
          correct: true,
        },
        {
          value: "true",
          label: "TRUE — recycled air spreads illness",
          correct: false,
        },
      ],
      explanation:
        "FALSE. Aircraft cabins use HEPA (High Efficiency Particulate Air) filters — the same type used in hospital operating theatres — that remove over 99.9% of airborne particles including viruses and bacteria. Cabin air is completely refreshed every 2–3 minutes. The risk of airborne infection on a plane is actually lower than in most indoor public spaces.",
    },
  ],
  results: [
    {
      id: "pilot-material",
      title: "Pilot Material",
      subtitle: "You think like someone who belongs in a cockpit",
      description:
        "You scored 8–10 correct. Your instincts about aviation are sharp, your scepticism is well-calibrated, and you clearly don't believe everything you're told. That's exactly the mindset that makes a good pilot. You question assumptions, seek the real answer, and you're rarely surprised by what you find.",
      emoji: "🎖️",
      color: "#f59e0b",
      minScore: 8,
      maxScore: 10,
      cta: {
        label: "Take the full career assessment",
        href: "/quiz",
        assessmentPrompt: "You think like a pilot. Now let's build your actual roadmap.",
        assessmentSubtext: "Get your personalised training route, cost breakdown, and matched schools — takes 5 minutes.",
        assessmentLabel: "Build My Roadmap",
      },
    },
    {
      id: "aviation-geek",
      title: "Aviation Geek",
      subtitle: "You know more than most — but a few myths slipped through",
      description:
        "You scored 5–7 correct. You're clearly interested in aviation and you've picked up a lot of real knowledge along the way. A few of the more obscure facts caught you out, but your instincts are generally good. You'd make a solid student pilot — curious, engaged, and willing to learn.",
      emoji: "✈️",
      color: "#3b82f6",
      minScore: 5,
      maxScore: 7,
      cta: {
        label: "Start your pilot journey",
        href: "/quiz",
        assessmentPrompt: "You've got the curiosity. Let's turn it into a real plan.",
        assessmentSubtext: "The assessment takes 5 minutes and gives you a personalised roadmap to the flight deck.",
        assessmentLabel: "Start My Pilot Journey",
      },
    },
    {
      id: "curious-passenger",
      title: "Curious Passenger",
      subtitle: "You fly, but the cockpit is still a mystery",
      description:
        "You scored 3–4 correct. You've absorbed some of the common myths that most passengers believe, which is completely understandable — aviation isn't taught in schools. The good news: everything you just learned is genuinely fascinating, and curiosity is the starting point for every great pilot.",
      emoji: "🌍",
      color: "#8b5cf6",
      minScore: 3,
      maxScore: 4,
      cta: {
        label: "Explore our aviation guides",
        href: "/guides",
        assessmentPrompt: "Curiosity is where every pilot starts. Our guides will give you the real picture.",
        assessmentSubtext: "No jargon, no myths — just clear answers to the questions every aspiring pilot has.",
        assessmentLabel: "Explore the Guides",
      },
    },
    {
      id: "myth-believer",
      title: "Full of Myths",
      subtitle: "Aviation has a lot to teach you — and that's exciting",
      description:
        "You scored 0–2 correct. Almost everything you thought you knew about aviation turned out to be a myth. But here's the thing: that's true for most people who haven't studied aviation. The industry is full of counterintuitive facts, and the people who are most surprised by them often become the most passionate about learning more.",
      emoji: "🌱",
      color: "#10b981",
      minScore: 0,
      maxScore: 2,
      cta: {
        label: "Start with our beginner guides",
        href: "/guides",
        assessmentPrompt: "Everyone starts somewhere. Our beginner guides cut through the myths.",
        assessmentSubtext: "Plain English guides covering costs, medical requirements, and how to get started.",
        assessmentLabel: "Start Learning",
      },
    },
  ],
};

// ─── Quiz 4: Guess the Aircraft ──────────────────────────────────────────
const guessAircraftQuiz: Quiz = {
  id: "guess-aircraft",
  slug: "guess-the-aircraft",
  title: "Guess the Aircraft",
  tagline: "Can you identify these iconic aircraft? 10 rounds.",
  description:
    "From legendary airliners to historic warbirds — how well do you know your aircraft? Score points for each correct answer and see how you rank.",
  emoji: "✈️",
  type: "visual",
  badge: "Most Replayable",
  duration: "3 min",
  questionCount: 10,
  gradient: "linear-gradient(135deg, #0c0c1d 0%, #1a1a3e 50%, #0d2137 100%)",
  accentColor: "#fbbf24",
  questions: [
    {
      id: "ac1",
      question:
        "This iconic double-decker airliner was the world's largest passenger aircraft for 15 years. What is it?",
      subtext: "Hint: It has four engines and two full passenger decks",
      options: [
        { value: "a", label: "Boeing 747", emoji: "❌", correct: false },
        { value: "b", label: "Airbus A380", emoji: "✅", correct: true },
        { value: "c", label: "Boeing 777X", emoji: "❌", correct: false },
        { value: "d", label: "Airbus A340", emoji: "❌", correct: false },
      ],
      explanation:
        "The Airbus A380 first flew in 2005 and can carry up to 853 passengers in an all-economy configuration. It has four engines, two full-length passenger decks, and a wingspan of 79.75 metres.",
    },
    {
      id: "ac2",
      question:
        "This supersonic airliner flew at twice the speed of sound and crossed the Atlantic in under 3.5 hours. What is it?",
      options: [
        { value: "a", label: "Tupolev Tu-144", emoji: "❌", correct: false },
        { value: "b", label: "Concorde", emoji: "✅", correct: true },
        { value: "c", label: "Boeing 2707", emoji: "❌", correct: false },
        { value: "d", label: "Lockheed L-2000", emoji: "❌", correct: false },
      ],
      explanation:
        "Concorde, jointly developed by Britain and France, entered service in 1976 and flew at Mach 2.04 (2,179 km/h). It carried up to 128 passengers and retired in 2003 after 27 years of service.",
    },
    {
      id: "ac3",
      question:
        "Known as the 'Queen of the Skies', this aircraft revolutionised long-haul travel with its iconic hump. What is it?",
      options: [
        { value: "a", label: "Boeing 747", emoji: "✅", correct: true },
        { value: "b", label: "Douglas DC-8", emoji: "❌", correct: false },
        { value: "c", label: "Lockheed L-1011", emoji: "❌", correct: false },
        { value: "d", label: "Boeing 707", emoji: "❌", correct: false },
      ],
      explanation:
        "The Boeing 747 first flew in 1969 and transformed commercial aviation by making long-haul travel affordable for the masses. Its distinctive upper deck 'hump' houses the cockpit and a business class lounge on many variants.",
    },
    {
      id: "ac4",
      question:
        "This single-engine propeller aircraft is the most produced aircraft in history with over 44,000 built. What is it?",
      options: [
        { value: "a", label: "Piper PA-28 Cherokee", emoji: "❌", correct: false },
        { value: "b", label: "Beechcraft Bonanza", emoji: "❌", correct: false },
        { value: "c", label: "Cessna 172 Skyhawk", emoji: "✅", correct: true },
        { value: "d", label: "Diamond DA40", emoji: "❌", correct: false },
      ],
      explanation:
        "The Cessna 172 Skyhawk has been in continuous production since 1956 and is the most popular training aircraft in the world. It's likely the aircraft you'd learn to fly on if you started flight training today.",
    },
    {
      id: "ac5",
      question:
        "This aircraft holds the record for the fastest air-breathing aircraft ever flown, reaching Mach 3.3. What is it?",
      options: [
        { value: "a", label: "F-22 Raptor", emoji: "❌", correct: false },
        { value: "b", label: "SR-71 Blackbird", emoji: "✅", correct: true },
        { value: "c", label: "MiG-25 Foxbat", emoji: "❌", correct: false },
        { value: "d", label: "XB-70 Valkyrie", emoji: "❌", correct: false },
      ],
      explanation:
        "The Lockheed SR-71 Blackbird is the fastest air-breathing manned aircraft ever built, reaching speeds of Mach 3.3 (3,540 km/h). It flew reconnaissance missions for the USAF from 1966 to 1998 and could outrun any missile fired at it.",
    },
    {
      id: "ac6",
      question:
        "This narrow-body airliner is the world's best-selling commercial jet with over 10,000 orders. What is it?",
      options: [
        { value: "a", label: "Airbus A320", emoji: "✅", correct: true },
        { value: "b", label: "Boeing 737", emoji: "❌", correct: false },
        { value: "c", label: "Embraer E195", emoji: "❌", correct: false },
        { value: "d", label: "Bombardier C Series", emoji: "❌", correct: false },
      ],
      explanation:
        "The Airbus A320 family (including the A319, A320, and A321) has received over 10,000 orders, making it the best-selling commercial jet family in history. The Boeing 737 family is a close competitor — both aircraft dominate short and medium-haul routes worldwide.",
    },
    {
      id: "ac7",
      question:
        "This legendary WWII fighter was the only Allied aircraft in continuous production throughout the entire war. What is it?",
      options: [
        { value: "a", label: "Hawker Hurricane", emoji: "❌", correct: false },
        { value: "b", label: "P-51 Mustang", emoji: "❌", correct: false },
        { value: "c", label: "Supermarine Spitfire", emoji: "✅", correct: true },
        { value: "d", label: "Focke-Wulf Fw 190", emoji: "❌", correct: false },
      ],
      explanation:
        "The Supermarine Spitfire was the only British aircraft in continuous production from before the war's start in 1939 to its end in 1945. Over 20,000 were built across 24 variants. Its elliptical wing design gave it exceptional performance at altitude.",
    },
    {
      id: "ac8",
      question:
        "This twin-engine turboprop is the world's most popular regional airliner, operated by over 100 airlines globally. What is it?",
      options: [
        { value: "a", label: "Bombardier Dash 8 Q400", emoji: "❌", correct: false },
        { value: "b", label: "ATR 72", emoji: "✅", correct: true },
        { value: "c", label: "Saab 2000", emoji: "❌", correct: false },
        { value: "d", label: "Embraer ERJ-145", emoji: "❌", correct: false },
      ],
      explanation:
        "The ATR 72 is the world's most successful regional turboprop, with over 1,000 delivered to airlines across more than 100 countries. It's the aircraft you're most likely to fly on a short regional route in Europe, Africa, or Southeast Asia.",
    },
    {
      id: "ac9",
      question:
        "This light aircraft is the most common training aircraft used by flight schools in the UK and Europe today. What is it?",
      options: [
        { value: "a", label: "Cessna 172 Skyhawk", emoji: "❌", correct: false },
        { value: "b", label: "Piper PA-28 Cherokee", emoji: "❌", correct: false },
        { value: "c", label: "Diamond DA40", emoji: "❌", correct: false },
        { value: "d", label: "Piper PA-44 Seminole", emoji: "❌", correct: false },
        { value: "e", label: "Cirrus SR20", emoji: "✅", correct: true },
      ],
      explanation:
        "The Cirrus SR20 and SR22 have become increasingly common at European flight schools due to their modern glass cockpit (Garmin G1000), safety features (including a whole-aircraft parachute system), and fuel efficiency. Many integrated ATPL schools now use Cirrus aircraft for their PPL phase.",
    },
    {
      id: "ac10",
      question:
        "This aircraft made the first powered, controlled, sustained heavier-than-air flight in 1903. What is it?",
      options: [
        { value: "a", label: "Wright Flyer", emoji: "✅", correct: true },
        { value: "b", label: "Bleriot XI", emoji: "❌", correct: false },
        { value: "c", label: "Curtiss Pusher", emoji: "❌", correct: false },
        { value: "d", label: "Antoinette IV", emoji: "❌", correct: false },
      ],
      explanation:
        "The Wright Flyer, built by Orville and Wilbur Wright, made the first powered, controlled, sustained heavier-than-air flight on 17 December 1903 at Kitty Hawk, North Carolina. The first flight lasted 12 seconds and covered 37 metres. The original aircraft is now in the Smithsonian National Air and Space Museum.",
    },
  ],
  results: [
    {
      id: "aviation-expert",
      title: "Aviation Expert",
      subtitle: "You know your aircraft — and then some",
      description:
        "You scored 8–10 correct. Your aviation knowledge is genuinely impressive. You know your warbirds from your airliners, your training aircraft from your regional turboprops. That depth of interest is exactly what drives great pilots — the curiosity to understand not just how to fly, but what you're flying and why it matters.",
      emoji: "🎖️",
      color: "#f59e0b",
      minScore: 8,
      maxScore: 10,
      cta: {
        label: "Take the full career assessment",
        href: "/quiz",
        assessmentPrompt: "You're ready to go. Let's build your exact training roadmap.",
        assessmentSubtext: "Get your personalised route, cost breakdown, and matched schools — takes 5 minutes.",
        assessmentLabel: "Build My Roadmap Now",
      },
    },
    {
      id: "aviation-enthusiast",
      title: "Aviation Enthusiast",
      subtitle: "Solid knowledge — a few gaps to fill",
      description:
        "You scored 5–7 correct. You clearly know your aviation — the famous aircraft, the iconic moments. A few of the more specialist questions caught you out, but that's what makes aviation endlessly fascinating. There's always more to learn.",
      emoji: "✈️",
      color: "#3b82f6",
      minScore: 5,
      maxScore: 7,
      cta: {
        label: "Start your pilot journey",
        href: "/quiz",
        assessmentPrompt: "You're close. The assessment will pinpoint exactly what's holding you back.",
        assessmentSubtext: "Find out your biggest barrier and get a step-by-step plan to overcome it.",
        assessmentLabel: "Find My Biggest Barrier",
      },
    },
    {
      id: "aviation-curious",
      title: "Aviation Curious",
      subtitle: "You know the famous ones — the rest is new territory",
      description:
        "You scored 3–4 correct. You got the famous aircraft right — Concorde, the 747, the Spitfire — but the more specialist questions were new territory. That's completely fine. Aviation knowledge builds over time, and the fact that you're curious enough to take this quiz puts you ahead of most.",
      emoji: "🌍",
      color: "#8b5cf6",
      minScore: 3,
      maxScore: 4,
      cta: {
        label: "Explore our aviation guides",
        href: "/guides",
        assessmentPrompt: "Building your foundations is the right move. Start with the right information.",
        assessmentSubtext: "Our guides cover everything from costs to medical requirements — in plain English.",
        assessmentLabel: "Explore the Guides",
      },
    },
    {
      id: "aviation-beginner",
      title: "Starting From Zero",
      subtitle: "Every expert started here",
      description:
        "You scored 0–2 correct. Aviation has a lot of aircraft, a lot of history, and a lot to learn — and you're at the very beginning of that journey. The good news: the people who know the least often become the most passionate learners. Start with our guides and come back to retake this quiz in a month.",
      emoji: "🌱",
      color: "#10b981",
      minScore: 0,
      maxScore: 2,
      cta: {
        label: "Start with our beginner guides",
        href: "/guides",
        assessmentPrompt: "Every pilot started exactly where you are. The guides will show you the way.",
        assessmentSubtext: "No jargon, no pressure — just clear answers to the questions every aspiring pilot has.",
        assessmentLabel: "Start Learning",
      },
    },
  ],
};

// ─── Quiz 5: How Ready Are You to Start Training? ────────────────────────
const readinessQuiz: Quiz = {
  id: "training-readiness",
  slug: "flight-training-readiness",
  title: "How Ready Are You to Start Training?",
  tagline: "Get an honest readiness score across 5 key dimensions",
  description:
    "This isn't about whether you want to fly — it's about whether you're genuinely positioned to start. We'll score you across finance, medical, knowledge, lifestyle, and commitment.",
  emoji: "🎯",
  type: "scored",
  badge: "Most Useful",
  duration: "4 min",
  questionCount: 10,
  gradient: "linear-gradient(135deg, #0a1628 0%, #1a2d4e 50%, #0a1e35 100%)",
  accentColor: "#10b981",
  questions: [
    {
      id: "r1",
      question: "How is your financial position relative to pilot training costs?",
      subtext: "Integrated ATPL typically costs £80k–£130k in the UK, $80k–$120k in the US",
      options: [
        {
          value: "a",
          label: "I have the funds available or a clear, confirmed funding plan",
          emoji: "💰",
          score: 3,
        },
        {
          value: "b",
          label: "I have a partial plan — savings plus a loan I've researched",
          emoji: "📊",
          score: 2,
        },
        {
          value: "c",
          label: "I know I need funding but haven't worked out the specifics",
          emoji: "🤔",
          score: 1,
        },
        {
          value: "d",
          label: "Finance is a major unsolved problem for me right now",
          emoji: "⚠️",
          score: 0,
        },
      ],
    },
    {
      id: "r2",
      question: "What does your current life situation look like?",
      subtext: "Think about dependants, mortgage, relationship commitments",
      options: [
        {
          value: "a",
          label: "I'm free to commit fully — no major life obligations holding me back",
          emoji: "🟢",
          score: 3,
        },
        {
          value: "b",
          label: "I have some commitments but they're manageable alongside training",
          emoji: "🟡",
          score: 2,
        },
        {
          value: "c",
          label: "I have significant commitments — family, mortgage, dependants",
          emoji: "🟠",
          score: 1,
        },
        {
          value: "d",
          label: "My life situation makes full-time training very difficult right now",
          emoji: "🔴",
          score: 0,
        },
      ],
    },
    {
      id: "r3",
      question: "Have you had a Class 1 medical assessment or spoken to an Aeromedical Examiner?",
      options: [
        {
          value: "a",
          label: "Yes — I hold a valid Class 1 medical",
          emoji: "✅",
          score: 3,
        },
        {
          value: "b",
          label: "I've had an informal AME consultation and I'm confident I'll pass",
          emoji: "📋",
          score: 2,
        },
        {
          value: "c",
          label: "No, but I have no known health issues",
          emoji: "🤷",
          score: 1,
        },
        {
          value: "d",
          label: "No, and I have some health concerns I haven't investigated",
          emoji: "⚠️",
          score: 0,
        },
      ],
    },
    {
      id: "r4",
      question: "How clear are you on which training route you want to take?",
      options: [
        {
          value: "a",
          label: "Very clear — I've researched integrated vs modular and made a decision",
          emoji: "🎯",
          score: 3,
        },
        {
          value: "b",
          label: "Fairly clear — I have a preference but haven't committed",
          emoji: "📋",
          score: 2,
        },
        {
          value: "c",
          label: "Not very clear — I know I want to fly but not the route",
          emoji: "🗺️",
          score: 1,
        },
        {
          value: "d",
          label: "Completely unclear — I need a lot more information",
          emoji: "❓",
          score: 0,
        },
      ],
    },
    {
      id: "r5",
      question: "Have you visited or spoken to any flight schools?",
      options: [
        {
          value: "a",
          label: "Yes — I've visited multiple schools and have a shortlist",
          emoji: "🏫",
          score: 3,
        },
        {
          value: "b",
          label: "I've had some online conversations or attended an open day",
          emoji: "💬",
          score: 2,
        },
        {
          value: "c",
          label: "I've done some research online but not contacted anyone",
          emoji: "🔍",
          score: 1,
        },
        {
          value: "d",
          label: "I haven't looked into schools at all yet",
          emoji: "❓",
          score: 0,
        },
      ],
    },
    {
      id: "r6",
      question: "How motivated are you right now?",
      options: [
        {
          value: "a",
          label: "Completely committed — this is happening, I just need the plan",
          emoji: "🔥",
          score: 3,
        },
        {
          value: "b",
          label: "Very motivated, but I have some doubts I need to resolve",
          emoji: "💪",
          score: 2,
        },
        {
          value: "c",
          label: "Interested but not yet certain this is the right path",
          emoji: "🤔",
          score: 1,
        },
        {
          value: "d",
          label: "Exploring the idea — not sure if I'm serious yet",
          emoji: "💭",
          score: 0,
        },
      ],
    },
    {
      id: "r7",
      question: "Do you have any aviation experience already?",
      options: [
        {
          value: "a",
          label: "Yes — I have a PPL or significant flight hours",
          emoji: "🛩️",
          score: 3,
        },
        {
          value: "b",
          label: "I've done a trial flight or two",
          emoji: "✈️",
          score: 2,
        },
        {
          value: "c",
          label: "No flight experience but I've done a lot of research",
          emoji: "📚",
          score: 1,
        },
        { value: "d", label: "No experience at all", emoji: "🆕", score: 0 },
      ],
    },
    {
      id: "r8",
      question: "Do you understand the minimum requirements to apply to airlines?",
      subtext: "e.g. ATPL, minimum hours, type ratings",
      options: [
        {
          value: "a",
          label: "Yes — I understand the full pathway from ab initio to airline",
          emoji: "🎓",
          score: 3,
        },
        {
          value: "b",
          label: "I have a general idea but not the specifics",
          emoji: "📖",
          score: 2,
        },
        {
          value: "c",
          label: "I know it involves a lot of training but not the details",
          emoji: "🤷",
          score: 1,
        },
        {
          value: "d",
          label: "I don't really know what's involved",
          emoji: "❓",
          score: 0,
        },
      ],
    },
    {
      id: "r9",
      question: "Have you considered the lifestyle implications of a pilot career?",
      subtext: "Irregular hours, time away from home, shift patterns",
      options: [
        {
          value: "a",
          label: "Yes — I've thought it through and I'm comfortable with it",
          emoji: "✅",
          score: 3,
        },
        {
          value: "b",
          label: "I've thought about it but haven't fully worked through it",
          emoji: "🤔",
          score: 2,
        },
        {
          value: "c",
          label: "Not really — I haven't thought much beyond the training",
          emoji: "💭",
          score: 1,
        },
        {
          value: "d",
          label: "I haven't thought about it at all",
          emoji: "❓",
          score: 0,
        },
      ],
    },
    {
      id: "r10",
      question: "Do you have the support of the people closest to you?",
      subtext: "Partner, family, close friends — their support matters more than most people admit",
      options: [
        {
          value: "a",
          label: "Yes — the people around me are fully supportive and understand what it involves",
          emoji: "💚",
          score: 3,
        },
        {
          value: "b",
          label: "Mostly — some people are supportive, others have concerns",
          emoji: "🟡",
          score: 2,
        },
        {
          value: "c",
          label: "Not really — there's some resistance I'd need to work through",
          emoji: "🟠",
          score: 1,
        },
        {
          value: "d",
          label: "I haven't told anyone yet, or there's significant opposition",
          emoji: "🔴",
          score: 0,
        },
      ],
    },
  ],
  results: [
    {
      id: "ready-now",
      title: "Ready to Start",
      subtitle: "You're genuinely positioned to begin training",
      description:
        "You scored 25–30. You have the finance, the medical clarity, the knowledge, the life situation, and the motivation. You're not just dreaming about flying — you're ready to do it. The next step is choosing your school and booking your start date. Don't wait. People who are this ready and don't act within 6 months often find reasons to delay indefinitely.",
      emoji: "🚀",
      color: "#10b981",
      minScore: 25,
      maxScore: 30,
      cta: {
        label: "Find your flight school now",
        href: "/schools",
        assessmentPrompt: "You're flight ready. Let's find the right school for your profile.",
        assessmentSubtext: "Take the full assessment to get matched with schools that fit your budget, location, and route.",
        assessmentLabel: "Find My Matched Schools",
      },
    },
    {
      id: "nearly-there",
      title: "Nearly There",
      subtitle: "A few things to resolve — then you're clear",
      description:
        "You scored 17–24. You're close. You have the motivation and most of the pieces in place, but there are one or two areas — likely finance, medical clarity, or life situation — that need resolving before you commit. The good news: these are solvable problems. Take the full AviatorIQ assessment to identify exactly which dimension is holding you back and get a specific action plan.",
      emoji: "📋",
      color: "#3b82f6",
      minScore: 17,
      maxScore: 24,
      cta: {
        label: "Get your personalised action plan",
        href: "/quiz",
        assessmentPrompt: "You're nearly there. The assessment will show you exactly what's left to do.",
        assessmentSubtext: "Get a personalised action plan that addresses your specific gaps — takes 5 minutes.",
        assessmentLabel: "Get My Action Plan",
      },
    },
    {
      id: "building-foundations",
      title: "Building the Foundations",
      subtitle: "Real progress needed before you're ready",
      description:
        "You scored 9–16. You want to fly, but there are several areas that need serious attention before training is realistic. This isn't a reason to give up — it's a reason to get specific about what needs to change and build a realistic timeline. The full AviatorIQ assessment will identify your biggest barriers and give you a concrete plan to address them.",
      emoji: "🏗️",
      color: "#f59e0b",
      minScore: 9,
      maxScore: 16,
      cta: {
        label: "Take the full assessment",
        href: "/quiz",
        assessmentPrompt: "Building your foundations is the right move. Let's map out your path.",
        assessmentSubtext: "The assessment identifies your barriers and gives you a step-by-step plan to overcome them.",
        assessmentLabel: "Map My Training Path",
      },
    },
    {
      id: "early-stage",
      title: "Early Stage",
      subtitle: "You have the dream — now build the plan",
      description:
        "You scored 0–8. You're at the very beginning of this journey, and that's completely fine. Every pilot started here. The gap between where you are and where you need to be is real, but it's not insurmountable — it just requires a plan. Start with our free guides, take the full assessment, and build your roadmap from the ground up.",
      emoji: "🌱",
      color: "#8b5cf6",
      minScore: 0,
      maxScore: 8,
      cta: {
        label: "Start with our beginner guides",
        href: "/guides",
        assessmentPrompt: "Every pilot started exactly where you are. The guides will show you the way.",
        assessmentSubtext: "Start with our free beginner's guide — no jargon, no pressure, just clear answers.",
        assessmentLabel: "Start With the Basics",
      },
    },
  ],
};

// ─── Quiz 6: What's Your Biggest Obstacle? ───────────────────────────────
const obstacleQuiz: Quiz = {
  id: "biggest-obstacle",
  slug: "biggest-obstacle",
  title: "What's Your Biggest Obstacle?",
  tagline: "Find out what's really standing between you and the cockpit",
  description:
    "Most people have one primary barrier to pilot training. This quiz identifies yours — and gives you a specific, actionable way to address it.",
  emoji: "🚧",
  type: "diagnostic",
  duration: "3 min",
  questionCount: 8,
  gradient: "linear-gradient(135deg, #1a0a0a 0%, #2d1a1a 50%, #1a0f0f 100%)",
  accentColor: "#ef4444",
  questions: [
    {
      id: "o1",
      question: "When you imagine yourself starting pilot training next month, what's the first feeling that comes up?",
      options: [
        {
          value: "finance",
          label: "Dread — I have no idea how I'd pay for it",
          emoji: "💸",
        },
        {
          value: "time",
          label: "Overwhelm — I can't see how it fits around my life",
          emoji: "⏰",
        },
        {
          value: "medical",
          label: "Anxiety — I'm worried about the medical",
          emoji: "🏥",
        },
        {
          value: "confidence",
          label: "Self-doubt — I'm not sure I'm the right kind of person",
          emoji: "😰",
        },
        {
          value: "info",
          label: "Confusion — I genuinely don't know where I'd start",
          emoji: "❓",
        },
      ],
    },
    {
      id: "o2",
      question: "You're sitting down to research pilot training seriously. What stops you from going further?",
      options: [
        {
          value: "finance",
          label: "The cost — I see the numbers and close the tab",
          emoji: "💰",
        },
        {
          value: "time",
          label: "The time commitment — I can't see how to make it work",
          emoji: "📅",
        },
        {
          value: "medical",
          label: "The medical requirements — I'm worried something will disqualify me",
          emoji: "🩺",
        },
        {
          value: "confidence",
          label: "A voice that says 'people like me don't become pilots'",
          emoji: "🧠",
        },
        {
          value: "info",
          label: "Too much conflicting information — I don't know what to trust",
          emoji: "🌀",
        },
      ],
    },
    {
      id: "o3",
      question: "Think about the last time you seriously considered starting training. What made you stop?",
      options: [
        {
          value: "finance",
          label: "I couldn't see a realistic way to fund it",
          emoji: "🚫",
        },
        {
          value: "time",
          label: "Life got in the way — work, family, commitments",
          emoji: "🔄",
        },
        {
          value: "medical",
          label: "A health concern I haven't properly investigated",
          emoji: "⚠️",
        },
        {
          value: "confidence",
          label: "I talked myself out of it — imposter syndrome",
          emoji: "😔",
        },
        {
          value: "info",
          label: "I didn't know enough to take the next step",
          emoji: "📚",
        },
      ],
    },
    {
      id: "o4",
      question: "If money was completely solved — you had the full training cost available — what would still hold you back?",
      options: [
        {
          value: "time",
          label: "Time and life situation — I'd still need to restructure my life",
          emoji: "⏳",
        },
        {
          value: "medical",
          label: "The medical — I'd need to get that sorted first",
          emoji: "🏥",
        },
        {
          value: "confidence",
          label: "Self-belief — I'm not sure I'd actually go through with it",
          emoji: "🤔",
        },
        {
          value: "info",
          label: "Knowledge — I still wouldn't know which school or route to choose",
          emoji: "🗺️",
        },
        {
          value: "finance",
          label: "Nothing — money is genuinely the only barrier",
          emoji: "🚀",
        },
      ],
    },
    {
      id: "o5",
      question: "Have you ever had a trial flight or been in a small aircraft cockpit?",
      options: [
        {
          value: "confidence",
          label: "No — and honestly the idea makes me nervous",
          emoji: "😬",
        },
        {
          value: "info",
          label: "No — I haven't got that far yet",
          emoji: "🆕",
        },
        {
          value: "time",
          label: "Yes, and I loved it — I just can't find the time to pursue it",
          emoji: "❤️",
        },
        {
          value: "finance",
          label: "Yes, and I loved it — I just can't afford to continue",
          emoji: "💔",
        },
        {
          value: "medical",
          label: "Yes, but I'm worried a medical issue might stop me going further",
          emoji: "🩺",
        },
      ],
    },
    {
      id: "o6",
      question: "How do you feel about the academic side of pilot training?",
      subtext: "14 ATPL exams covering meteorology, navigation, systems, and more",
      options: [
        {
          value: "confidence",
          label: "Intimidated — I'm not sure I'm academic enough",
          emoji: "😟",
        },
        {
          value: "time",
          label: "Fine with the content, but finding study time is the challenge",
          emoji: "📖",
        },
        {
          value: "info",
          label: "I didn't even know there were exams — I need more information",
          emoji: "❓",
        },
        {
          value: "finance",
          label: "Fine with it — the exams aren't what's stopping me",
          emoji: "✅",
        },
      ],
    },
    {
      id: "o7",
      question: "What's your biggest fear about starting and then not finishing?",
      options: [
        {
          value: "finance",
          label: "Losing the money — the financial risk is enormous",
          emoji: "💸",
        },
        {
          value: "confidence",
          label: "Failing — proving to myself that I wasn't good enough",
          emoji: "😔",
        },
        {
          value: "time",
          label: "Disrupting my life for nothing — the opportunity cost",
          emoji: "⏰",
        },
        {
          value: "medical",
          label: "Being grounded by a medical issue mid-training",
          emoji: "🏥",
        },
      ],
    },
    {
      id: "o8",
      question: "What would help you most right now?",
      options: [
        {
          value: "finance",
          label: "A clear guide to financing pilot training — loans, schemes, options",
          emoji: "💰",
        },
        {
          value: "time",
          label: "A realistic part-time or modular training plan",
          emoji: "📅",
        },
        {
          value: "medical",
          label: "Honest information about the medical requirements",
          emoji: "🩺",
        },
        {
          value: "confidence",
          label: "Evidence that people like me actually make it",
          emoji: "🌟",
        },
        {
          value: "info",
          label: "A clear, simple breakdown of the whole pathway from scratch",
          emoji: "🗺️",
        },
      ],
    },
  ],
  results: [
    {
      id: "finance",
      title: "Your Barrier: Finance",
      subtitle: "The cost of training is what's holding you back",
      description:
        "The cost of pilot training is real — integrated ATPL training costs £80k–£130k in the UK and $80k–$120k in the US. But it's not as insurmountable as it looks. There are more funding options than most people realise: career development loans, flight school payment plans, airline cadet sponsorships, and government-backed schemes. The key is building a specific financial plan, not just hoping the money appears. Start with our finance guide, then take the full assessment to see which schools offer the best funding support.",
      emoji: "💸",
      color: "#f59e0b",
      cta: {
        label: "Read the pilot training finance guide",
        href: "/guides/finance-guide",
        assessmentPrompt: "Finance is the most common barrier — and the most solvable. Let's look at your options.",
        assessmentSubtext: "The assessment maps out every funding route available for your country and profile.",
        assessmentLabel: "Explore My Funding Options",
      },
    },
    {
      id: "time",
      title: "Your Barrier: Time",
      subtitle: "Life commitments are making it hard to see a clear path",
      description:
        "The modular route was designed for people exactly like you. You can train part-time, at your own pace, fitting lessons around work and family. It takes longer than integrated training (3–5 years vs 18–24 months), but it's a legitimate pathway to a commercial licence. Many working pilots trained this way. The key is being realistic about how many hours per week you can genuinely commit — and building a plan around that reality.",
      emoji: "⏰",
      color: "#3b82f6",
      cta: {
        label: "Explore the modular training route",
        href: "/tools/integrated-vs-modular",
        assessmentPrompt: "Time is a real constraint — but modular training is built for people with lives.",
        assessmentSubtext: "See how the modular route fits around your current commitments, with real timelines.",
        assessmentLabel: "See the Modular Route",
      },
    },
    {
      id: "medical",
      title: "Your Barrier: The Medical",
      subtitle: "Health concerns are creating uncertainty",
      description:
        "Medical standards for pilots have evolved significantly — many conditions that once disqualified pilots no longer do. The only way to get a definitive answer is to book an informal consultation with an Aeromedical Examiner (AME) before you start training. They can tell you exactly where you stand. Don't let uncertainty stop you from even asking the question. An AME consultation costs £200–£400 and could save you years of unnecessary worry.",
      emoji: "🩺",
      color: "#06b6d4",
      cta: {
        label: "Check the Class 1 Medical tool",
        href: "/tools/class-1-medical-check",
        assessmentPrompt: "Medical concerns are common — and most conditions don't disqualify you.",
        assessmentSubtext: "Use our medical condition lookup tool to check your specific situation before spending anything.",
        assessmentLabel: "Check My Medical Eligibility",
      },
    },
    {
      id: "confidence",
      title: "Your Barrier: Self-Belief",
      subtitle: "You're questioning whether you're the right kind of person",
      description:
        "This is more common than you'd think — and it's the barrier that's hardest to address with information alone. The truth is that pilots come from every background, every academic level, and every personality type. The selection process is designed to find people who can learn, not people who already know. The best thing you can do is book a trial flight. One hour in a cockpit does more for confidence than a hundred hours of research.",
      emoji: "💪",
      color: "#8b5cf6",
      cta: {
        label: "Take the full career assessment",
        href: "/quiz",
        assessmentPrompt: "You're nearly there. The assessment will show you exactly what's left to do.",
        assessmentSubtext: "Get a personalised action plan that addresses your specific gaps — takes 5 minutes.",
        assessmentLabel: "Get My Action Plan",
      },
    },
    {
      id: "info",
      title: "Your Barrier: Information Overload",
      subtitle: "You're overwhelmed by complexity and don't know where to start",
      description:
        "Aviation has a lot of jargon, a lot of routes, and a lot of conflicting advice online. It's genuinely confusing. The best starting point is a simple, structured overview of the pathway — from zero experience to airline pilot — without the noise. Start with our 'How to Become a Pilot' guide, then take the full AviatorIQ assessment to get a personalised roadmap that cuts through the confusion.",
      emoji: "🗺️",
      color: "#16a34a",
      cta: {
        label: "Read the beginner's guide",
        href: "/guides/how-to-become-a-pilot",
        assessmentPrompt: "Information is the cure. Start with the most important question: what does your path actually look like?",
        assessmentSubtext: "The assessment gives you a personalised roadmap based on your country, budget, and goals.",
        assessmentLabel: "Get My Personalised Roadmap",
      },
    },
  ],
};

// ─── Quiz 7: Do You Think Like a Pilot? ──────────────────────────────────
const pilotThinkingQuiz: Quiz = {
  id: "pilot-thinking",
  slug: "think-like-a-pilot",
  title: "Do You Think Like a Pilot?",
  tagline: "8 scenarios. Would you make the right call?",
  description:
    "These aren't trick questions about memorised facts. They test the calm, systematic thinking that pilots actually use. How would you handle the situation?",
  emoji: "🧩",
  type: "cognitive",
  badge: "Most Challenging",
  duration: "4 min",
  questionCount: 8,
  gradient: "linear-gradient(135deg, #0a0f1e 0%, #0d1f3c 50%, #0a2342 100%)",
  accentColor: "#34d399",
  questions: [
    {
      id: "pt1",
      question:
        "You're flying and your altimeter shows 3,000 feet, but your GPS shows 2,800 feet. What do you do?",
      subtext: "Assume you're in VMC (good visibility) and flying over flat terrain",
      options: [
        {
          value: "a",
          label: "Trust the altimeter — it's the primary instrument",
          emoji: "📊",
          score: 1,
        },
        {
          value: "b",
          label: "Cross-check with a third source (VSI, terrain, ATC) before deciding which to trust",
          emoji: "✅",
          score: 3,
        },
        {
          value: "c",
          label: "Trust the GPS — it's more modern and accurate",
          emoji: "📡",
          score: 1,
        },
        {
          value: "d",
          label: "Ignore the discrepancy — 200 feet is within normal tolerance",
          emoji: "🤷",
          score: 0,
        },
      ],
      explanation:
        "The correct answer is to cross-check with a third source. Neither instrument should be trusted in isolation when they disagree. A good pilot uses the 'aviate, navigate, communicate' principle — and in this case, navigating safely means resolving the discrepancy before it becomes a problem. The VSI (vertical speed indicator), terrain awareness, and ATC radar can all help confirm your actual altitude.",
    },
    {
      id: "pt2",
      question:
        "You're on approach to land. The runway looks shorter than you expected. What do you do?",
      options: [
        {
          value: "a",
          label: "Continue the approach — you're already committed",
          emoji: "➡️",
          score: 0,
        },
        {
          value: "b",
          label: "Execute a go-around and reassess from a safe altitude",
          emoji: "✅",
          score: 3,
        },
        {
          value: "c",
          label: "Apply more braking on landing to compensate",
          emoji: "🛑",
          score: 1,
        },
        {
          value: "d",
          label: "Ask ATC to confirm the runway length",
          emoji: "📻",
          score: 2,
        },
      ],
      explanation:
        "A go-around is always the correct answer when something doesn't look right on approach. The phrase 'a go-around is never wrong' is a fundamental principle of flight safety. Continuing an unstabilised approach is one of the leading causes of runway excursions. There is no such thing as being 'too committed' to land — you can always go around.",
    },
    {
      id: "pt3",
      question:
        "You're flying in deteriorating weather. Visibility is dropping. You're 20 minutes from your destination. What do you do?",
      options: [
        {
          value: "a",
          label: "Press on — you're nearly there and the weather might improve",
          emoji: "➡️",
          score: 0,
        },
        {
          value: "b",
          label: "Divert to an alternate airport with better weather",
          emoji: "✅",
          score: 3,
        },
        {
          value: "c",
          label: "Descend below the cloud to maintain visual reference",
          emoji: "⬇️",
          score: 0,
        },
        {
          value: "d",
          label: "Contact ATC and ask for a weather update at your destination",
          emoji: "📻",
          score: 2,
        },
      ],
      explanation:
        "Diverting to an alternate is the correct decision. 'Get-there-itis' — the psychological pressure to reach your destination — is one of the most dangerous forces in aviation. Pressing on into deteriorating weather is a leading cause of VFR-into-IMC accidents, which are almost always fatal. Contacting ATC for an update is a good secondary step, but if the weather is already deteriorating, diverting is the safe call.",
    },
    {
      id: "pt4",
      question:
        "You notice a warning light on your instrument panel that you don't immediately recognise. What's your first action?",
      options: [
        {
          value: "a",
          label: "Ignore it — if it was serious, you'd know about it",
          emoji: "🙈",
          score: 0,
        },
        {
          value: "b",
          label: "Refer to the Quick Reference Handbook (QRH) for the procedure",
          emoji: "✅",
          score: 3,
        },
        {
          value: "c",
          label: "Land immediately — any warning light means emergency",
          emoji: "🚨",
          score: 1,
        },
        {
          value: "d",
          label: "Ask your co-pilot if they know what it means",
          emoji: "👤",
          score: 2,
        },
      ],
      explanation:
        "The QRH (Quick Reference Handbook) is the definitive reference for abnormal and emergency procedures. Every warning light has a corresponding checklist. Pilots are trained not to rely on memory for abnormal procedures — the QRH exists precisely because memory is unreliable under stress. Asking your co-pilot is a reasonable secondary step, but the QRH is the primary reference.",
    },
    {
      id: "pt5",
      question:
        "You're flying solo and you feel unwell — mild dizziness and nausea. You're 30 minutes from your home airfield. What do you do?",
      options: [
        {
          value: "a",
          label: "Push on — it's probably nothing and you're nearly home",
          emoji: "➡️",
          score: 0,
        },
        {
          value: "b",
          label: "Land at the nearest suitable airfield immediately",
          emoji: "✅",
          score: 3,
        },
        {
          value: "c",
          label: "Declare a PAN-PAN and continue to your home airfield with ATC support",
          emoji: "📻",
          score: 2,
        },
        {
          value: "d",
          label: "Open the vents and drink some water — see if it passes",
          emoji: "💧",
          score: 1,
        },
      ],
      explanation:
        "Landing at the nearest suitable airfield is the correct answer. The regulations are clear: a pilot must not fly if they are unfit to do so. Dizziness and nausea can be symptoms of hypoxia, carbon monoxide poisoning, or other conditions that can rapidly deteriorate. 'I'm feeling a bit off' is a valid reason to land. Declaring a PAN-PAN is appropriate if you need ATC assistance, but landing immediately is the priority.",
    },
    {
      id: "pt6",
      question:
        "You're cleared to land on runway 27. On final approach, you notice another aircraft on the runway that hasn't cleared. What do you do?",
      options: [
        {
          value: "a",
          label: "Continue the approach — they'll move in time",
          emoji: "➡️",
          score: 0,
        },
        {
          value: "b",
          label: "Go around immediately and inform ATC",
          emoji: "✅",
          score: 3,
        },
        {
          value: "c",
          label: "Slow your approach to give them more time",
          emoji: "🐢",
          score: 1,
        },
        {
          value: "d",
          label: "Wait for ATC to give you instructions",
          emoji: "📻",
          score: 1,
        },
      ],
      explanation:
        "Go around immediately. A runway incursion is one of the most serious hazards in aviation. ATC clearance to land does not guarantee the runway is clear — it is always the pilot's responsibility to ensure the runway is clear before landing. If there is any doubt, go around. Do not wait for ATC instructions when there is an immediate safety threat.",
    },
    {
      id: "pt7",
      question:
        "A passenger tells you they're very nervous about flying and asks you to reassure them. You're about to enter a patch of forecast moderate turbulence. What do you say?",
      options: [
        {
          value: "a",
          label: "Say nothing — it's not your job to manage passenger anxiety",
          emoji: "🤐",
          score: 0,
        },
        {
          value: "b",
          label: "Tell them everything is fine and there's nothing to worry about",
          emoji: "😊",
          score: 1,
        },
        {
          value: "c",
          label: "Explain calmly that you're expecting some turbulence, it's normal, and the aircraft is built for it",
          emoji: "✅",
          score: 3,
        },
        {
          value: "d",
          label: "Offer to cancel the flight if they're not comfortable",
          emoji: "🤝",
          score: 2,
        },
      ],
      explanation:
        "Honest, calm communication is the right answer. Crew Resource Management (CRM) includes managing passenger wellbeing. Telling someone 'there's nothing to worry about' when turbulence is coming is both dishonest and counterproductive — when the turbulence hits, their anxiety will be worse. A calm, factual briefing ('we're expecting some bumps, it's completely normal, the aircraft handles it easily') is far more reassuring than false comfort.",
    },
    {
      id: "pt8",
      question:
        "You're flying and your fuel gauges show less fuel than your flight plan predicted. You have enough to reach your destination, but your reserve will be below minimum. What do you do?",
      options: [
        {
          value: "a",
          label: "Continue — you'll make it with a small margin",
          emoji: "➡️",
          score: 0,
        },
        {
          value: "b",
          label: "Divert to a closer airport and refuel",
          emoji: "✅",
          score: 3,
        },
        {
          value: "c",
          label: "Reduce power to conserve fuel and continue",
          emoji: "⬇️",
          score: 1,
        },
        {
          value: "d",
          label: "Declare a MAYDAY and request priority landing",
          emoji: "🚨",
          score: 2,
        },
      ],
      explanation:
        "Diverting to refuel is the correct answer. Fuel reserves exist for a reason — unexpected delays, missed approaches, holding patterns, diversions. Flying below minimum reserve is illegal and dangerous. The correct response to a fuel discrepancy is to land and investigate, not to press on and hope. A MAYDAY is appropriate if you are already in a fuel emergency — but the correct action is to prevent reaching that point.",
    },
  ],
  results: [
    {
      id: "natural-pilot",
      title: "Natural Pilot Mindset",
      subtitle: "You think exactly the way pilots are trained to think",
      description:
        "You scored 20–24. Your instincts are excellent. You prioritise safety over convenience, you cross-check before deciding, and you know when to stop and reassess rather than press on. These are not innate traits — they're learned ones — but you've already absorbed the most important lessons. You'd be a strong student pilot.",
      emoji: "🎖️",
      color: "#10b981",
      minScore: 20,
      maxScore: 24,
      cta: {
        label: "Take the full career assessment",
        href: "/quiz",
        assessmentPrompt: "You think like a pilot. Now let's build your actual training roadmap.",
        assessmentSubtext: "Get your personalised route, timeline, and matched schools — takes 5 minutes.",
        assessmentLabel: "Build My Roadmap",
      },
    },
    {
      id: "good-instincts",
      title: "Good Instincts",
      subtitle: "Solid thinking with a few gaps to address",
      description:
        "You scored 14–19. Your instincts are generally sound — you got the big decisions right. A few of the more nuanced scenarios caught you out, but that's exactly what flight training is for. The core mindset is there; the specific knowledge comes with training.",
      emoji: "✈️",
      color: "#3b82f6",
      minScore: 14,
      maxScore: 19,
      cta: {
        label: "Start your pilot journey",
        href: "/quiz",
        assessmentPrompt: "Good instincts, developing judgement. The full assessment will map your exact path.",
        assessmentSubtext: "Find out your training route, costs, and the schools that match your profile.",
        assessmentLabel: "Start My Journey",
      },
    },
    {
      id: "learning-curve",
      title: "Steep Learning Curve Ahead",
      subtitle: "Your instincts need recalibrating — but that's what training is for",
      description:
        "You scored 8–13. Some of your instincts led you toward the wrong decisions — particularly around pressing on when you should stop, and trusting single sources when you should cross-check. This is completely normal for someone without aviation training. The entire purpose of flight training is to replace civilian instincts with pilot instincts.",
      emoji: "📚",
      color: "#f59e0b",
      minScore: 8,
      maxScore: 13,
      cta: {
        label: "Explore our aviation guides",
        href: "/guides",
        assessmentPrompt: "Pilot thinking is a skill you can learn. Our guides are the starting point.",
        assessmentSubtext: "Plain English guides on everything from training routes to medical requirements.",
        assessmentLabel: "Start Learning",
      },
    },
    {
      id: "start-fresh",
      title: "Starting From Zero",
      subtitle: "Your instincts are civilian instincts — and that's the starting point for everyone",
      description:
        "You scored 0–7. Your instincts in these scenarios were those of a non-pilot — which is exactly what you are. The good news: every pilot starts here. Flight training doesn't select for people who already think like pilots; it creates them. The fact that you found this quiz and took it puts you ahead of most.",
      emoji: "🌱",
      color: "#8b5cf6",
      minScore: 0,
      maxScore: 7,
      cta: {
        label: "Start with our beginner guides",
        href: "/guides",
        assessmentPrompt: "Everyone starts as a passenger. Our beginner guides will show you the way.",
        assessmentSubtext: "No jargon, no pressure — just clear answers to the questions every aspiring pilot has.",
        assessmentLabel: "Start With the Basics",
      },
    },
  ],
};

// ─── Quiz 8: Could You Afford Pilot Training? (NEW) ──────────────────────
const affordabilityQuiz: Quiz = {
  id: "pilot-affordability",
  slug: "can-you-afford-pilot-training",
  title: "Could You Afford Pilot Training?",
  tagline: "Find out your realistic funding position in 6 questions",
  description:
    "Finance is the number one barrier to pilot training. This quiz cuts through the noise and gives you an honest picture of where you stand — and what options are actually available to you.",
  emoji: "💰",
  type: "diagnostic",
  badge: "New",
  duration: "2 min",
  questionCount: 6,
  gradient: "linear-gradient(135deg, #0a1a0a 0%, #0d2d0d 50%, #0a1e0a 100%)",
  accentColor: "#22c55e",
  questions: [
    {
      id: "af1",
      question: "What is your current annual income (before tax)?",
      options: [
        {
          value: "high",
          label: "Over £60,000 / $75,000",
          emoji: "💎",
          score: 3,
        },
        {
          value: "mid",
          label: "£30,000–£60,000 / $40,000–$75,000",
          emoji: "💼",
          score: 2,
        },
        {
          value: "low",
          label: "Under £30,000 / $40,000",
          emoji: "📊",
          score: 1,
        },
        {
          value: "none",
          label: "I'm a student or not currently working",
          emoji: "🎓",
          score: 0,
        },
      ],
    },
    {
      id: "af2",
      question: "Do you have savings you could put toward training?",
      options: [
        {
          value: "a",
          label: "Yes — I have £30,000+ / $40,000+ available",
          emoji: "🏦",
          score: 3,
        },
        {
          value: "b",
          label: "Some — £10,000–£30,000 / $15,000–$40,000",
          emoji: "💰",
          score: 2,
        },
        {
          value: "c",
          label: "A little — under £10,000 / $15,000",
          emoji: "💵",
          score: 1,
        },
        {
          value: "d",
          label: "No savings available for this",
          emoji: "❌",
          score: 0,
        },
      ],
    },
    {
      id: "af3",
      question: "Could family or a partner contribute to your training costs?",
      options: [
        {
          value: "a",
          label: "Yes — significant family support is available",
          emoji: "👨‍👩‍👧",
          score: 3,
        },
        {
          value: "b",
          label: "Possibly — some support but not the full amount",
          emoji: "🤝",
          score: 2,
        },
        {
          value: "c",
          label: "Unlikely — family can't contribute financially",
          emoji: "🤷",
          score: 1,
        },
        {
          value: "d",
          label: "Definitely not — I'm on my own with this",
          emoji: "❌",
          score: 0,
        },
      ],
    },
    {
      id: "af4",
      question: "Have you looked into pilot training loans or finance options?",
      options: [
        {
          value: "a",
          label: "Yes — I've researched specific loan products and I'm eligible",
          emoji: "✅",
          score: 3,
        },
        {
          value: "b",
          label: "I've looked briefly — I know they exist but haven't applied",
          emoji: "📋",
          score: 2,
        },
        {
          value: "c",
          label: "I know loans exist but haven't researched them properly",
          emoji: "🔍",
          score: 1,
        },
        {
          value: "d",
          label: "I haven't looked into finance options at all",
          emoji: "❓",
          score: 0,
        },
      ],
    },
    {
      id: "af5",
      question: "Are you aware of airline cadet sponsorship programmes?",
      subtext: "Some airlines fund your full training in exchange for a bond period",
      options: [
        {
          value: "a",
          label: "Yes — I've researched them and I'm actively applying",
          emoji: "🚀",
          score: 3,
        },
        {
          value: "b",
          label: "I know they exist but haven't looked into them seriously",
          emoji: "📖",
          score: 2,
        },
        {
          value: "c",
          label: "I've heard of them but don't know the details",
          emoji: "🤔",
          score: 1,
        },
        {
          value: "d",
          label: "I didn't know these existed",
          emoji: "💡",
          score: 0,
        },
      ],
    },
    {
      id: "af6",
      question: "How would you describe your credit history?",
      subtext: "Relevant if you're considering a career development loan",
      options: [
        {
          value: "a",
          label: "Excellent — no missed payments, no defaults",
          emoji: "⭐",
          score: 3,
        },
        {
          value: "b",
          label: "Good — minor issues but nothing serious",
          emoji: "✅",
          score: 2,
        },
        {
          value: "c",
          label: "Fair — some issues that might affect loan eligibility",
          emoji: "⚠️",
          score: 1,
        },
        {
          value: "d",
          label: "Poor — significant credit issues",
          emoji: "❌",
          score: 0,
        },
      ],
    },
  ],
  results: [
    {
      id: "well-positioned",
      title: "Well Positioned",
      subtitle: "You have multiple realistic funding paths",
      description:
        "You scored 14–18. Your financial position is strong. You have savings, income, and likely access to credit — meaning you can fund training through a combination of your own resources and a loan. You should also be looking at cadet sponsorship programmes as a parallel track. The finance question is largely solved for you — the next step is choosing your route and school.",
      emoji: "💚",
      color: "#22c55e",
      minScore: 14,
      maxScore: 18,
      cta: {
        label: "Find your flight school",
        href: "/schools",
        assessmentPrompt: "You're financially ready. Let's match you with the right school.",
        assessmentSubtext: "Take the full assessment to get matched with schools that fit your budget and training goals.",
        assessmentLabel: "Find My Matched Schools",
      },
    },
    {
      id: "workable",
      title: "Workable — With a Plan",
      subtitle: "Finance is a challenge but not a barrier",
      description:
        "You scored 8–13. Your financial position isn't perfect, but it's workable. You'll need to combine whatever savings you have with a loan, and you should seriously research cadet sponsorship programmes. The modular route may also be worth considering — it allows you to train part-time and spread the cost over several years. A specific financial plan is what you need, not more research.",
      emoji: "📊",
      color: "#f59e0b",
      minScore: 8,
      maxScore: 13,
      cta: {
        label: "Read the pilot training finance guide",
        href: "/guides/finance-guide",
        assessmentPrompt: "Funding is available — you just need to know where to look.",
        assessmentSubtext: "The finance guide covers every loan, scholarship, and sponsorship option available in your country.",
        assessmentLabel: "Explore Funding Options",
      },
    },
    {
      id: "significant-challenge",
      title: "Significant Challenge",
      subtitle: "Finance needs serious attention before training is realistic",
      description:
        "You scored 0–7. Finance is a genuine barrier for you right now. But 'not yet' is not the same as 'never'. The steps are: build savings aggressively over the next 12–24 months, research every cadet sponsorship programme in your target market, and look at the modular route as a way to start training with less upfront capital. Many pilots who are flying today were in exactly this position 3–5 years ago.",
      emoji: "🏗️",
      color: "#ef4444",
      minScore: 0,
      maxScore: 7,
      cta: {
        label: "Explore all funding options",
        href: "/guides/finance-guide",
        assessmentPrompt: "Finance is the most common barrier — and there are more options than you think.",
        assessmentSubtext: "The assessment maps out every funding route available for your specific country and profile.",
        assessmentLabel: "Find My Funding Route",
      },
    },
  ],
};

// ─── Quiz 9: Which Airline Is Right for You? (NEW) ───────────────────────
const airlineMatchQuiz: Quiz = {
  id: "airline-match",
  slug: "which-airline-suits-you",
  title: "Which Airline Suits Your Personality?",
  tagline: "Find your ideal airline based on how you actually want to live",
  description:
    "Not all airline careers are the same. The lifestyle, culture, and career progression at Ryanair is completely different from Emirates or British Airways. Find out which airline matches your personality and priorities.",
  emoji: "🌍",
  type: "personality",
  badge: "New",
  duration: "3 min",
  questionCount: 7,
  gradient: "linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 50%, #0a0d2e 100%)",
  accentColor: "#818cf8",
  questions: [
    {
      id: "al1",
      question: "What matters most to you in a flying career?",
      options: [
        {
          value: "a",
          label: "Building hours fast and getting to the left seat quickly",
          emoji: "⚡",
          archetypes: ["ryanair", "wizz"],
        },
        {
          value: "b",
          label: "Prestige, lifestyle, and flying to incredible destinations",
          emoji: "✨",
          archetypes: ["emirates", "ba"],
        },
        {
          value: "c",
          label: "Stability, UK-based, home every night",
          emoji: "🏠",
          archetypes: ["easyjet", "ba"],
        },
        {
          value: "d",
          label: "A structured career path with a clear route to captain",
          emoji: "📈",
          archetypes: ["ba", "emirates"],
        },
      ],
    },
    {
      id: "al2",
      question: "How do you feel about living abroad for your career?",
      options: [
        {
          value: "a",
          label: "I'd love it — the expat lifestyle appeals to me",
          emoji: "🌏",
          archetypes: ["emirates", "cathay"],
        },
        {
          value: "b",
          label: "I'm open to it but I'd prefer to stay in my home country",
          emoji: "🤔",
          archetypes: ["ba", "easyjet"],
        },
        {
          value: "c",
          label: "I want to stay home — family and roots matter more",
          emoji: "🏡",
          archetypes: ["easyjet", "ryanair"],
        },
        {
          value: "d",
          label: "I'm happy anywhere — I'll go where the opportunity is",
          emoji: "🌍",
          archetypes: ["wizz", "ryanair", "emirates"],
        },
      ],
    },
    {
      id: "al3",
      question: "What kind of flying do you want to do most?",
      options: [
        {
          value: "a",
          label: "Short-haul — lots of sectors, lots of takeoffs and landings",
          emoji: "🔄",
          archetypes: ["ryanair", "easyjet", "wizz"],
        },
        {
          value: "b",
          label: "Long-haul — fewer sectors, more time in the cruise, global destinations",
          emoji: "🌐",
          archetypes: ["emirates", "ba", "cathay"],
        },
        {
          value: "c",
          label: "Mixed — I want both",
          emoji: "⚖️",
          archetypes: ["ba", "easyjet"],
        },
        {
          value: "d",
          label: "I don't mind — I just want to fly",
          emoji: "✈️",
          archetypes: ["ryanair", "wizz", "easyjet"],
        },
      ],
    },
    {
      id: "al4",
      question: "How important is salary and financial package to you?",
      options: [
        {
          value: "a",
          label: "Very — I want to maximise earnings, especially early in my career",
          emoji: "💰",
          archetypes: ["emirates", "ryanair"],
        },
        {
          value: "b",
          label: "Important, but I'd trade some salary for lifestyle and stability",
          emoji: "⚖️",
          archetypes: ["ba", "easyjet"],
        },
        {
          value: "c",
          label: "Secondary — I care more about the flying and the culture",
          emoji: "✈️",
          archetypes: ["cathay", "ba"],
        },
        {
          value: "d",
          label: "I just want to get flying — salary can grow over time",
          emoji: "🌱",
          archetypes: ["wizz", "ryanair"],
        },
      ],
    },
    {
      id: "al5",
      question: "How do you feel about a high-volume, high-pressure flying environment?",
      options: [
        {
          value: "a",
          label: "I thrive under pressure — the busier the better",
          emoji: "🔥",
          archetypes: ["ryanair", "wizz"],
        },
        {
          value: "b",
          label: "I can handle it, but I prefer a more measured pace",
          emoji: "📊",
          archetypes: ["ba", "easyjet"],
        },
        {
          value: "c",
          label: "I prefer quality over quantity — fewer, longer flights",
          emoji: "🎯",
          archetypes: ["emirates", "cathay"],
        },
        {
          value: "d",
          label: "I'm not sure — I haven't experienced it yet",
          emoji: "🤷",
          archetypes: ["easyjet", "ba"],
        },
      ],
    },
    {
      id: "al6",
      question: "What does your ideal roster look like?",
      options: [
        {
          value: "a",
          label: "Home every night — I want a normal life outside work",
          emoji: "🏠",
          archetypes: ["easyjet", "ryanair"],
        },
        {
          value: "b",
          label: "Away for a few days, then home for a few days — I like the variety",
          emoji: "🔄",
          archetypes: ["ba", "wizz"],
        },
        {
          value: "c",
          label: "Long layovers in amazing cities — I want to explore",
          emoji: "🌆",
          archetypes: ["emirates", "cathay"],
        },
        {
          value: "d",
          label: "I don't mind — flexibility is fine",
          emoji: "📅",
          archetypes: ["ryanair", "wizz", "easyjet"],
        },
      ],
    },
    {
      id: "al7",
      question: "Which of these best describes your personality at work?",
      options: [
        {
          value: "a",
          label: "Efficient, fast-paced, results-driven — I get things done",
          emoji: "⚡",
          archetypes: ["ryanair", "wizz"],
        },
        {
          value: "b",
          label: "Professional, polished, detail-oriented — I do things properly",
          emoji: "🎩",
          archetypes: ["ba", "emirates"],
        },
        {
          value: "c",
          label: "Friendly, team-oriented, good with people",
          emoji: "🤝",
          archetypes: ["easyjet", "cathay"],
        },
        {
          value: "d",
          label: "Ambitious, strategic — I'm thinking about the long game",
          emoji: "📈",
          archetypes: ["ba", "emirates"],
        },
      ],
    },
  ],
  results: [
    {
      id: "ryanair",
      title: "Ryanair / Low-Cost Carrier",
      subtitle: "High volume, fast hours, and the left seat sooner than you think",
      description:
        "You're driven, efficient, and you want to build hours fast. Low-cost carriers like Ryanair, easyJet, and Wizz Air are where new pilots get to the left seat quickest — often within 5–7 years of starting training. The flying is relentless (up to 900 hours a year), the rosters are demanding, and the culture is no-nonsense. But the career progression is fast, the pay is competitive, and you'll be a highly experienced pilot within a decade.",
      emoji: "🟠",
      color: "#f97316",
      cta: {
        label: "Find your training route to a low-cost career",
        href: "/quiz",
        assessmentPrompt: "Ryanair is one of the fastest paths to high hours. Want to see the training route?",
        assessmentSubtext: "The assessment maps out the exact training path to a low-cost carrier career — costs, timeline, matched schools.",
        assessmentLabel: "Plan My Ryanair Route",
      },
    },
    {
      id: "emirates",
      title: "Emirates / Gulf Carrier",
      subtitle: "Prestige, lifestyle, and the world's best destinations",
      description:
        "You want the full experience — long-haul flying, incredible layovers, a tax-free salary, and the prestige of flying a wide-body for one of the world's most respected airlines. Emirates, Qatar Airways, and Etihad offer exactly that. The catch: you'll need significant experience first (typically 1,500–2,000+ hours and a type rating). But for pilots who want the best of the best, the Gulf is the destination.",
      emoji: "🌟",
      color: "#d97706",
      cta: {
        label: "Take the full career assessment",
        href: "/quiz",
        assessmentPrompt: "easyJet is a great lifestyle airline. Want to see the training path?",
        assessmentSubtext: "Get your personalised roadmap to an easyJet career — costs, timeline, and matched schools.",
        assessmentLabel: "Plan My easyJet Route",
      },
    },
    {
      id: "ba",
      title: "British Airways / Legacy Carrier",
      subtitle: "Structured, prestigious, and built for the long game",
      description:
        "You value structure, prestige, and a clear career path. Legacy carriers like British Airways, Lufthansa, and Air France offer exactly that — a defined progression from first officer to captain, strong union representation, and the kind of career your family will understand and respect. The route in is competitive (BA has its own cadet programme), but for pilots who want a career, not just a job, legacy carriers are the destination.",
      emoji: "🎩",
      color: "#1d4ed8",
      cta: {
        label: "Explore the BA cadet programme",
        href: "/quiz",
        assessmentPrompt: "British Airways is the most prestigious UK airline. Want to see the cadet pathway?",
        assessmentSubtext: "The assessment maps out the BA Future Pilot Programme route and what it takes to get in.",
        assessmentLabel: "Explore the BA Cadet Route",
      },
    },
    {
      id: "easyjet",
      title: "easyJet / UK-Based Short-Haul",
      subtitle: "Home-based, lifestyle-friendly, and genuinely good flying",
      description:
        "You want to fly, but you also want a life. easyJet is consistently rated as one of the best employers in UK aviation — home-based rosters, reasonable hours, and a culture that actually values work-life balance. The flying is short-haul (mostly European), the pay is solid, and you'll be home most nights. For pilots who want a sustainable career without sacrificing everything else, easyJet is a genuinely excellent choice.",
      emoji: "🟠",
      color: "#ea580c",
      cta: {
        label: "Find your training route",
        href: "/quiz",
        assessmentPrompt: "Emirates is the pinnacle of long-haul aviation. Want to see the path?",
        assessmentSubtext: "The assessment maps out the training route and profile that Emirates looks for.",
        assessmentLabel: "Plan My Emirates Route",
      },
    },
    {
      id: "cathay",
      title: "Cathay Pacific / Premium Long-Haul",
      subtitle: "Quality flying, incredible destinations, and a respected brand",
      description:
        "You appreciate quality over quantity. Cathay Pacific is one of the most respected airlines in the world — premium long-haul flying, excellent training standards, and a culture that values professionalism. Based in Hong Kong, it's an expat lifestyle with genuine career substance. The route in requires significant experience, but for pilots who want to fly properly and be paid well for it, Cathay is one of the best.",
      emoji: "💎",
      color: "#0891b2",
      cta: {
        label: "Take the full career assessment",
        href: "/quiz",
        assessmentPrompt: "Wizz Air is one of Europe's fastest-growing carriers. Want to see the path?",
        assessmentSubtext: "Get your personalised roadmap to a Wizz Air career — costs, timeline, and matched schools.",
        assessmentLabel: "Plan My Wizz Air Route",
      },
    },
    {
      id: "wizz",
      title: "Wizz Air / Ultra-Low-Cost",
      subtitle: "Fast hours, Eastern European network, and rapid progression",
      description:
        "You're ambitious and you want to move fast. Wizz Air is one of the fastest-growing airlines in Europe, with a rapidly expanding network and a genuine need for pilots. The culture is demanding and the flying is relentless, but the progression is fast and the opportunities are real. For pilots who want to build hours quickly and aren't precious about lifestyle, Wizz is worth serious consideration.",
      emoji: "💜",
      color: "#7c3aed",
      cta: {
        label: "Find your training route",
        href: "/quiz",
        assessmentPrompt: "TUI is a great lifestyle airline with a strong cadet programme. Want to see the path?",
        assessmentSubtext: "The assessment maps out the TUI cadet route and what your training journey would look like.",
        assessmentLabel: "Plan My TUI Route",
      },
    },
  ],
};

// ─── Master Quiz Registry ─────────────────────────────────────────────────
export const ALL_QUIZZES: Quiz[] = [
  pilotPersonalityQuiz,
  mythBusterQuiz,
  pilotThinkingQuiz,
  guessAircraftQuiz,
  readinessQuiz,
  medicalQuiz,
  obstacleQuiz,
  affordabilityQuiz,
  airlineMatchQuiz,
];

// ─── Helper Types & Functions ─────────────────────────────────────────────

export function getQuizBySlug(slug: string): Quiz | undefined {
  return ALL_QUIZZES.find((q) => q.slug === slug);
}
