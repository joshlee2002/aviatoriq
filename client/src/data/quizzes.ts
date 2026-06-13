// ─── AviatorIQ Quiz Suite ─────────────────────────────────────────────────
// 7 quizzes: personality, practical, trivia, diagnostic, visual, diagnostic, cognitive

export type QuizType = "personality" | "scored" | "trivia" | "diagnostic" | "visual" | "cognitive";

export interface QuizOption {
  value: string;
  label: string;
  hint?: string;
  emoji?: string;
  // For personality quizzes: which archetype(s) this maps to
  archetypes?: string[];
  // For scored quizzes: numeric score
  score?: number;
  // For trivia: whether this is correct
  correct?: boolean;
  // For visual quizzes: image url or emoji stand-in
  image?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  subtext?: string;
  options: QuizOption[];
  // For trivia: explanation shown after answer
  explanation?: string;
}

export interface QuizResult {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  color: string; // tailwind gradient class
  badge?: string;
  cta: { label: string; href: string };
  // Score range for scored quizzes
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
  badge?: string; // e.g. "Most Popular", "New"
  duration: string;
  questionCount: number;
  gradient: string; // CSS gradient for card
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
  description: "Answer honestly — there are no wrong answers. We'll reveal which type of pilot matches your personality, instincts, and ambitions.",
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
        { value: "a", label: "Plan something meticulously — a route, an itinerary, a schedule", emoji: "📋", archetypes: ["captain", "instructor"] },
        { value: "b", label: "Head somewhere remote and off the beaten track", emoji: "🏔️", archetypes: ["bush", "aerobatic"] },
        { value: "c", label: "Catch up with people — dinner, calls, socialising", emoji: "🍽️", archetypes: ["corporate", "captain"] },
        { value: "d", label: "Learn something new — a skill, a subject, a challenge", emoji: "📚", archetypes: ["instructor", "fighter"] },
      ],
    },
    {
      id: "q2",
      question: "Under pressure, you tend to:",
      options: [
        { value: "a", label: "Stay calm, work through a checklist, trust the process", emoji: "✅", archetypes: ["captain", "instructor"] },
        { value: "b", label: "Trust your gut and act fast", emoji: "⚡", archetypes: ["fighter", "aerobatic"] },
        { value: "c", label: "Talk it through with someone else first", emoji: "💬", archetypes: ["corporate", "captain"] },
        { value: "d", label: "Retreat, analyse, then return with a plan", emoji: "🔍", archetypes: ["bush", "instructor"] },
      ],
    },
    {
      id: "q3",
      question: "Which environment excites you most?",
      options: [
        { value: "a", label: "A busy international airport — gates, schedules, scale", emoji: "🌍", archetypes: ["captain", "corporate"] },
        { value: "b", label: "A remote airstrip — grass, mountains, no radar coverage", emoji: "🌿", archetypes: ["bush", "aerobatic"] },
        { value: "c", label: "An airshow — crowds, precision, performance", emoji: "🎪", archetypes: ["aerobatic", "fighter"] },
        { value: "d", label: "A small flying school — teaching, mentoring, building skills", emoji: "🎓", archetypes: ["instructor"] },
      ],
    },
    {
      id: "q4",
      question: "What matters most to you in a career?",
      options: [
        { value: "a", label: "Stability, progression, and a clear career ladder", emoji: "📈", archetypes: ["captain", "instructor"] },
        { value: "b", label: "Freedom, variety, and no two days the same", emoji: "🗺️", archetypes: ["bush", "aerobatic"] },
        { value: "c", label: "Status, earnings, and working with high-achieving people", emoji: "💼", archetypes: ["corporate", "captain"] },
        { value: "d", label: "Mastery — being genuinely excellent at something difficult", emoji: "🏆", archetypes: ["fighter", "aerobatic"] },
      ],
    },
    {
      id: "q5",
      question: "Your ideal aircraft would be:",
      options: [
        { value: "a", label: "A wide-body airliner — complex, powerful, commanding", emoji: "✈️", archetypes: ["captain"] },
        { value: "b", label: "A bush plane — rugged, capable, built for the wild", emoji: "🛩️", archetypes: ["bush"] },
        { value: "c", label: "A business jet — sleek, fast, exclusive", emoji: "🛫", archetypes: ["corporate"] },
        { value: "d", label: "An aerobatic aircraft — nimble, precise, thrilling", emoji: "🌀", archetypes: ["aerobatic", "fighter"] },
      ],
    },
    {
      id: "q6",
      question: "How do you feel about rules and procedures?",
      options: [
        { value: "a", label: "They exist for good reason — I follow them rigorously", emoji: "📏", archetypes: ["captain", "instructor"] },
        { value: "b", label: "I respect them but adapt when the situation demands", emoji: "🔄", archetypes: ["bush", "fighter"] },
        { value: "c", label: "I follow them, but I'm always looking for a smarter way", emoji: "💡", archetypes: ["corporate", "aerobatic"] },
        { value: "d", label: "I enjoy teaching others why they matter", emoji: "🎯", archetypes: ["instructor"] },
      ],
    },
    {
      id: "q7",
      question: "How do you feel about long-haul travel and time away from home?",
      options: [
        { value: "a", label: "Love it — new cities, hotels, layovers are part of the appeal", emoji: "🌆", archetypes: ["captain", "corporate"] },
        { value: "b", label: "Fine with it, but I prefer shorter trips with more control", emoji: "🏠", archetypes: ["bush", "instructor"] },
        { value: "c", label: "I'd rather be home most nights — lifestyle matters", emoji: "🛋️", archetypes: ["instructor", "aerobatic"] },
        { value: "d", label: "I'd go anywhere if the mission was exciting enough", emoji: "🚀", archetypes: ["fighter", "aerobatic"] },
      ],
    },
    {
      id: "q8",
      question: "Someone asks why you want to fly. You say:",
      options: [
        { value: "a", label: "\"It's the most professional, respected career in transport\"", emoji: "🎖️", archetypes: ["captain"] },
        { value: "b", label: "\"I want to go places most people never see\"", emoji: "🗻", archetypes: ["bush"] },
        { value: "c", label: "\"I want to push the limits of what's physically possible\"", emoji: "💥", archetypes: ["fighter", "aerobatic"] },
        { value: "d", label: "\"I want to help others find their way to the sky\"", emoji: "🌟", archetypes: ["instructor"] },
      ],
    },
  ],
  results: [
    {
      id: "captain",
      title: "The Airline Captain",
      subtitle: "Born for the flight deck of a wide-body",
      description: "You're methodical, calm under pressure, and you thrive in structured, high-stakes environments. You respect procedure, value progression, and you're drawn to the scale and professionalism of commercial aviation. The flight deck of a Boeing 787 or Airbus A350 is your natural habitat. You'll put in the years, earn the stripes, and do it properly.",
      emoji: "✈️",
      color: "#1a6cf7",
      badge: "Most Common Goal",
      cta: { label: "Find your airline training route", href: "/quiz" },
    },
    {
      id: "bush",
      title: "The Bush Pilot",
      subtitle: "Made for the wild, the remote, the uncharted",
      description: "Rules are a starting point for you, not a ceiling. You're drawn to places where GPS coverage is patchy and the runway is a gravel strip in the mountains. You value freedom, self-reliance, and adventure over status. A Cessna Caravan or a de Havilland Beaver suits you far better than a glass cockpit airliner. You fly because the world is bigger than any schedule.",
      emoji: "🏔️",
      color: "#16a34a",
      cta: { label: "Explore your training options", href: "/quiz" },
    },
    {
      id: "corporate",
      title: "The Corporate Jet Pilot",
      subtitle: "Precision, discretion, and the world's best airports",
      description: "You're polished, professional, and you appreciate the finer things. You want to fly fast, fly far, and do it with people who expect nothing but excellence. The business aviation world suits your personality — high standards, high earnings, and the kind of lifestyle that comes with flying a Gulfstream or a Falcon. You'll build your hours strategically and move into the right circles.",
      emoji: "💼",
      color: "#7c3aed",
      cta: { label: "Start your assessment", href: "/quiz" },
    },
    {
      id: "aerobatic",
      title: "The Aerobatic Showman",
      subtitle: "Flight as pure art and physical mastery",
      description: "You don't just want to fly — you want to make the aircraft do things that seem impossible. Loops, rolls, knife-edge passes. You're drawn to the performance side of aviation, where skill is visible and the crowd holds its breath. The Extra 300 or a Pitts Special is your canvas. You'll train hard, push limits, and make flying look like something between sport and art.",
      emoji: "🌀",
      color: "#ea580c",
      cta: { label: "Find your training path", href: "/quiz" },
    },
    {
      id: "fighter",
      title: "The Fighter Ace",
      subtitle: "Speed, precision, and the edge of human capability",
      description: "You think fast, act decisively, and you're drawn to environments where the margin for error is measured in milliseconds. Military aviation or high-performance aerobatics is where you belong. You're not interested in comfort — you're interested in mastery. Whether it's a fast jet or an aerobatic competition aircraft, you want to fly something that demands everything you've got.",
      emoji: "🚀",
      color: "#dc2626",
      cta: { label: "Take the full assessment", href: "/quiz" },
    },
    {
      id: "instructor",
      title: "The Flight Instructor",
      subtitle: "The person who gives others their wings",
      description: "You're patient, articulate, and you genuinely care about other people's progress. You find as much satisfaction in a student's first solo as you would in your own. Teaching is not a stepping stone for you — it's a calling. A CFI or FI rating suits your personality perfectly, and the aviation community needs more people like you. You'll shape the next generation of pilots.",
      emoji: "🎓",
      color: "#0891b2",
      cta: { label: "Explore the instructor route", href: "/quiz" },
    },
  ],
};

// ─── Quiz 2: Could You Pass a Pilot Medical? ─────────────────────────────
const medicalQuiz: Quiz = {
  id: "pilot-medical",
  slug: "pilot-medical-check",
  title: "Could You Pass a Pilot Medical?",
  tagline: "Find out if your health profile is likely to clear Class 1 or Class 2",
  description: "One of the biggest fears aspiring pilots have is a hidden medical condition ruling them out. This quiz walks you through the key criteria in plain English.",
  emoji: "🩺",
  type: "scored",
  badge: "Anxiety Buster",
  duration: "4 min",
  questionCount: 10,
  gradient: "linear-gradient(135deg, #0a2342 0%, #0d3b6e 50%, #1a5276 100%)",
  accentColor: "#22d3ee",
  questions: [
    {
      id: "m1",
      question: "How is your distance vision?",
      subtext: "With or without glasses/contact lenses",
      options: [
        { value: "a", label: "6/6 or correctable to 6/6 in both eyes", emoji: "👁️", score: 3 },
        { value: "b", label: "Slightly below 6/6 but correctable with glasses", emoji: "👓", score: 2 },
        { value: "c", label: "Significantly impaired even with correction", emoji: "⚠️", score: 0 },
      ],
    },
    {
      id: "m2",
      question: "Do you have any history of heart conditions?",
      subtext: "Including heart attack, arrhythmia, or significant murmur",
      options: [
        { value: "a", label: "No history of any heart conditions", emoji: "❤️", score: 3 },
        { value: "b", label: "Minor issue, fully resolved and medically cleared", emoji: "✅", score: 2 },
        { value: "c", label: "Ongoing or significant cardiac history", emoji: "🏥", score: 0 },
      ],
    },
    {
      id: "m3",
      question: "Have you ever been diagnosed with epilepsy or a seizure disorder?",
      options: [
        { value: "a", label: "No, never", emoji: "✅", score: 3 },
        { value: "b", label: "Single episode, fully investigated, no recurrence in 10+ years", emoji: "📋", score: 1 },
        { value: "c", label: "Yes, ongoing or recent history", emoji: "⚠️", score: 0 },
      ],
    },
    {
      id: "m4",
      question: "Do you have any history of mental health treatment?",
      subtext: "Including depression, anxiety, or psychiatric medication",
      options: [
        { value: "a", label: "No history of mental health treatment", emoji: "🧠", score: 3 },
        { value: "b", label: "Past treatment, fully resolved, no current medication", emoji: "✅", score: 2 },
        { value: "c", label: "Currently receiving treatment or on psychiatric medication", emoji: "💊", score: 1 },
      ],
    },
    {
      id: "m5",
      question: "What is your approximate BMI?",
      options: [
        { value: "a", label: "18.5–29.9 (healthy or slightly overweight)", emoji: "💪", score: 3 },
        { value: "b", label: "30–34.9 (overweight)", emoji: "⚖️", score: 2 },
        { value: "c", label: "35+ (obese)", emoji: "⚠️", score: 1 },
      ],
    },
    {
      id: "m6",
      question: "Do you have any history of diabetes?",
      options: [
        { value: "a", label: "No diabetes", emoji: "✅", score: 3 },
        { value: "b", label: "Type 2, diet-controlled only", emoji: "🥗", score: 2 },
        { value: "c", label: "Insulin-dependent or Type 1", emoji: "💉", score: 0 },
      ],
    },
    {
      id: "m7",
      question: "How is your hearing?",
      options: [
        { value: "a", label: "Normal hearing in both ears", emoji: "👂", score: 3 },
        { value: "b", label: "Mild hearing loss, manageable without aids", emoji: "🔊", score: 2 },
        { value: "c", label: "Significant hearing loss or require hearing aids", emoji: "⚠️", score: 1 },
      ],
    },
    {
      id: "m8",
      question: "Do you have any history of substance misuse or alcohol dependency?",
      options: [
        { value: "a", label: "No history", emoji: "✅", score: 3 },
        { value: "b", label: "Past history, fully resolved, several years clean", emoji: "🌱", score: 2 },
        { value: "c", label: "Recent or ongoing issues", emoji: "⚠️", score: 0 },
      ],
    },
    {
      id: "m9",
      question: "Do you take any regular prescription medication?",
      options: [
        { value: "a", label: "No regular medication", emoji: "✅", score: 3 },
        { value: "b", label: "Yes, but for a minor condition (e.g. antihistamines, mild blood pressure)", emoji: "💊", score: 2 },
        { value: "c", label: "Yes, for a significant condition", emoji: "⚠️", score: 1 },
      ],
    },
    {
      id: "m10",
      question: "Have you ever had a significant head injury or neurological condition?",
      options: [
        { value: "a", label: "No", emoji: "✅", score: 3 },
        { value: "b", label: "Minor concussion, fully recovered", emoji: "🪖", score: 2 },
        { value: "c", label: "Significant head injury or neurological diagnosis", emoji: "⚠️", score: 0 },
      ],
    },
  ],
  results: [
    {
      id: "clear",
      title: "Likely Clear",
      subtitle: "Your health profile looks strong for a Class 1 medical",
      description: "Based on your answers, you don't appear to have any obvious disqualifying conditions. The Class 1 medical is thorough but fair — most healthy adults pass without issue. Your next step is to book an initial assessment with a CAA-approved Aeromedical Examiner (AME). It's a straightforward process and costs around £200–£400 in the UK.",
      emoji: "✅",
      color: "#16a34a",
      minScore: 25,
      maxScore: 30,
      cta: { label: "Start your pilot journey", href: "/quiz" },
    },
    {
      id: "investigate",
      title: "Worth Investigating",
      subtitle: "A few areas to clarify before you book your medical",
      description: "Your profile has one or two areas that are worth discussing with an AME before you commit to training. This doesn't mean you'll fail — many conditions are manageable or have been misunderstood. Book an informal chat with a CAA-approved AME first. They can give you a realistic picture before you spend money on training.",
      emoji: "🔍",
      color: "#d97706",
      minScore: 15,
      maxScore: 24,
      cta: { label: "Check the Class 1 Medical guide", href: "/tools/class-1-medical-check" },
    },
    {
      id: "consult",
      title: "Speak to an AME First",
      subtitle: "Get specialist advice before starting training",
      description: "Based on your answers, there are some areas that need specialist assessment before you start flight training. This is not a definitive answer — medical standards have evolved significantly and many conditions that once disqualified pilots no longer do. Book a consultation with a CAA-approved Aeromedical Examiner. They are the only people who can give you a definitive answer.",
      emoji: "🩺",
      color: "#dc2626",
      minScore: 0,
      maxScore: 14,
      cta: { label: "Read the Class 1 Medical guide", href: "/tools/class-1-medical-check" },
    },
  ],
};

// ─── Quiz 3: Aviation Myth Buster ────────────────────────────────────────
const mythBusterQuiz: Quiz = {
  id: "myth-buster",
  slug: "aviation-myth-buster",
  title: "Aviation Myth Buster",
  tagline: "True or false? 10 aviation facts that will surprise you",
  description: "Most people believe things about flying that simply aren't true — and some things that sound crazy are completely real. How sharp is your aviation radar?",
  emoji: "💡",
  type: "trivia",
  badge: "Most Fun",
  duration: "3 min",
  questionCount: 10,
  gradient: "linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #1e3a5f 100%)",
  accentColor: "#a78bfa",
  questions: [
    {
      id: "myth1",
      question: "You can open an aircraft door mid-flight if you really tried hard enough.",
      options: [
        { value: "false", label: "FALSE — it's physically impossible", correct: true },
        { value: "true", label: "TRUE — it's possible with enough force", correct: false },
      ],
      explanation: "FALSE. At cruising altitude, the cabin pressure differential creates a force of several tonnes against the door. It is physically impossible to open from the inside. The door acts like a plug — the higher the altitude, the more firmly it's sealed.",
    },
    {
      id: "myth2",
      question: "The 'black box' flight recorder is actually black.",
      options: [
        { value: "false", label: "FALSE — it's bright orange", correct: true },
        { value: "true", label: "TRUE — it's black", correct: false },
      ],
      explanation: "FALSE. Flight data recorders are bright orange so they can be found easily in wreckage. The name 'black box' likely comes from WWII when the British hid secret electronics in non-reflective black boxes — the name stuck long after the colour changed.",
    },
    {
      id: "myth3",
      question: "Turbulence is genuinely dangerous and can bring down a plane.",
      options: [
        { value: "false", label: "FALSE — turbulence is almost never dangerous to the aircraft", correct: true },
        { value: "true", label: "TRUE — severe turbulence can cause structural failure", correct: false },
      ],
      explanation: "FALSE. Modern aircraft are tested to withstand forces far beyond anything encountered in normal or even severe turbulence. Pilots liken it to driving on a bumpy road. The danger from turbulence is almost always to unsecured passengers or crew — not the aircraft itself.",
    },
    {
      id: "myth4",
      question: "Airlines use actual chickens to test aircraft windshields and engines.",
      options: [
        { value: "true", label: "TRUE — they fire dead chickens from cannons", correct: true },
        { value: "false", label: "FALSE — they use synthetic materials only", correct: false },
      ],
      explanation: "TRUE. The 'chicken cannon' or 'bird gun' fires dead chickens at aircraft windshields, engines, and tails to simulate bird strikes. Chickens from poultry farms are used for certification tests. The U.S. Air Force now uses clay and plastic birds, but the real thing is still standard in commercial aviation testing.",
    },
    {
      id: "myth5",
      question: "Food genuinely tastes different on a plane — it's not just your imagination.",
      options: [
        { value: "true", label: "TRUE — cabin conditions change your taste perception", correct: true },
        { value: "false", label: "FALSE — it's all in your head", correct: false },
      ],
      explanation: "TRUE. Low cabin humidity (sometimes below 12% — drier than most deserts) reduces your sense of smell, which accounts for 80% of taste. Lower air pressure also reduces oxygen to olfactory receptors. Engine noise further reduces sensitivity to sweet and sour flavours by up to 30%. Airlines compensate by adding more salt, umami-rich ingredients, and stronger seasoning.",
    },
    {
      id: "myth6",
      question: "If both engines fail, a commercial airliner will fall out of the sky immediately.",
      options: [
        { value: "false", label: "FALSE — planes can glide for a very long distance", correct: true },
        { value: "true", label: "TRUE — without engines, the aircraft cannot maintain altitude", correct: false },
      ],
      explanation: "FALSE. A Boeing 747 can glide approximately 100 miles from 30,000 feet with no engine power. Aircraft are essentially very efficient gliders. Pilots train for this scenario regularly. The most famous example is Air Transat Flight 236, which glided 120km to a safe landing in the Azores after running out of fuel.",
    },
    {
      id: "myth7",
      question: "Some airlines genuinely skip row 13 on their aircraft.",
      options: [
        { value: "true", label: "TRUE — multiple major airlines skip row 13", correct: true },
        { value: "false", label: "FALSE — all airlines use sequential row numbering", correct: false },
      ],
      explanation: "TRUE. Ryanair, Lufthansa, Air France, Iberia, and Qatar Airways all skip row 13 due to superstition (triskaidekaphobia). Some also skip row 17 — in Roman numerals XVII can be rearranged to VIXI, meaning 'my life is over' in Latin. Cathay Pacific skips rows 4 and 14 because the number 4 sounds like 'death' in Chinese.",
    },
    {
      id: "myth8",
      question: "Pilots on long-haul flights are allowed to sleep during the flight.",
      options: [
        { value: "true", label: "TRUE — controlled rest is a regulated procedure", correct: true },
        { value: "false", label: "FALSE — pilots must remain awake for the entire flight", correct: false },
      ],
      explanation: "TRUE. Long-haul flights carry augmented crews specifically so pilots can take planned rest breaks. There are dedicated crew rest areas on wide-body aircraft. Controlled rest is a regulated procedure under aviation authority rules — it's not just allowed, it's required for safety on very long sectors.",
    },
    {
      id: "myth9",
      question: "Lightning strikes can bring down a commercial aircraft.",
      options: [
        { value: "false", label: "FALSE — aircraft are designed to withstand lightning", correct: true },
        { value: "true", label: "TRUE — lightning is a serious risk to aircraft", correct: false },
      ],
      explanation: "FALSE. Commercial aircraft are struck by lightning on average once per year per aircraft. They are designed with conductive paths that allow lightning to travel through the airframe and exit safely. The last confirmed lightning-caused crash was in 1967. Modern aircraft are comprehensively protected.",
    },
    {
      id: "myth10",
      question: "The cabin air on a plane is recycled and full of germs.",
      options: [
        { value: "false", label: "FALSE — cabin air is filtered to hospital standards", correct: true },
        { value: "true", label: "TRUE — recycled air spreads illness", correct: false },
      ],
      explanation: "FALSE. Aircraft cabins use HEPA (High Efficiency Particulate Air) filters — the same type used in hospital operating theatres — that remove over 99.9% of airborne particles including viruses and bacteria. Cabin air is completely refreshed every 2–3 minutes. The risk of airborne infection on a plane is actually lower than in most indoor public spaces.",
    },
  ],
  results: [
    {
      id: "pilot-material",
      title: "Pilot Material",
      subtitle: "You think like someone who belongs in a cockpit",
      description: "You scored 8–10 correct. Your instincts about aviation are sharp, your scepticism is well-calibrated, and you clearly don't believe everything you're told. That's exactly the mindset that makes a good pilot. You question assumptions, seek the real answer, and you're rarely surprised by what you find.",
      emoji: "🎖️",
      color: "#f59e0b",
      minScore: 8,
      maxScore: 10,
      cta: { label: "Take the full career assessment", href: "/quiz" },
    },
    {
      id: "aviation-geek",
      title: "Aviation Geek",
      subtitle: "You know more than most — but a few myths slipped through",
      description: "You scored 5–7 correct. You're clearly interested in aviation and you've picked up a lot of real knowledge along the way. A few of the more obscure facts caught you out, but your instincts are generally good. You'd make a solid student pilot — curious, engaged, and willing to learn.",
      emoji: "✈️",
      color: "#3b82f6",
      minScore: 5,
      maxScore: 7,
      cta: { label: "Start your pilot journey", href: "/quiz" },
    },
    {
      id: "curious-passenger",
      title: "Curious Passenger",
      subtitle: "You fly, but the cockpit is still a mystery",
      description: "You scored 3–4 correct. You've absorbed some of the common myths that most passengers believe, which is completely understandable — aviation isn't taught in schools. The good news: everything you just learned is genuinely fascinating, and curiosity is the starting point for every great pilot.",
      emoji: "🌍",
      color: "#8b5cf6",
      minScore: 3,
      maxScore: 4,
      cta: { label: "Explore our aviation guides", href: "/guides" },
    },
    {
      id: "nervous-flyer",
      title: "Nervous Flyer",
      subtitle: "A few myths have been holding you back",
      description: "You scored 0–2 correct. Some of the most common aviation myths are the most persistent — and the most anxiety-inducing. The truth is that flying is extraordinarily safe, and most of what people fear about it is based on misunderstanding. Now you know the reality. That's a good start.",
      emoji: "😅",
      color: "#6b7280",
      minScore: 0,
      maxScore: 2,
      cta: { label: "Read our aviation guides", href: "/guides" },
    },
  ],
};

// ─── Quiz 4: How Ready Are You to Start Flight Training? ─────────────────
const readinessQuiz: Quiz = {
  id: "training-readiness",
  slug: "flight-training-readiness",
  title: "How Ready Are You to Start Training?",
  tagline: "Get your honest readiness score across 5 key dimensions",
  description: "This isn't a pass/fail test. It's a gap analysis — five dimensions, one honest score, and a clear picture of what you need to do next.",
  emoji: "📊",
  type: "diagnostic",
  badge: "Most Useful",
  duration: "5 min",
  questionCount: 10,
  gradient: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c4a6e 100%)",
  accentColor: "#38bdf8",
  questions: [
    {
      id: "r1",
      question: "How much have you saved or budgeted specifically for flight training?",
      subtext: "Integrated ATPL costs £80k–£120k. Modular costs £40k–£80k.",
      options: [
        { value: "a", label: "I have a full funding plan in place (savings, loan, or sponsor)", emoji: "💰", score: 3 },
        { value: "b", label: "I have some savings and a rough plan but haven't finalised it", emoji: "💳", score: 2 },
        { value: "c", label: "I'm still figuring out how to fund it", emoji: "🤔", score: 1 },
        { value: "d", label: "I haven't thought seriously about funding yet", emoji: "❓", score: 0 },
      ],
    },
    {
      id: "r2",
      question: "How much time can you commit to training each week?",
      subtext: "Integrated training is full-time. Modular can be part-time.",
      options: [
        { value: "a", label: "Full-time — I can dedicate 40+ hours per week", emoji: "⏰", score: 3 },
        { value: "b", label: "Part-time — 15–25 hours per week consistently", emoji: "📅", score: 2 },
        { value: "c", label: "Limited — under 15 hours per week", emoji: "⌛", score: 1 },
        { value: "d", label: "I'm not sure — my schedule is unpredictable", emoji: "❓", score: 0 },
      ],
    },
    {
      id: "r3",
      question: "Have you had a Class 1 or Class 2 medical assessment?",
      options: [
        { value: "a", label: "Yes — I hold a valid Class 1 medical", emoji: "✅", score: 3 },
        { value: "b", label: "Yes — Class 2, and I'm confident I'd pass Class 1", emoji: "🩺", score: 2 },
        { value: "c", label: "No, but I have no known health issues", emoji: "🤷", score: 1 },
        { value: "d", label: "No, and I have some health concerns I haven't investigated", emoji: "⚠️", score: 0 },
      ],
    },
    {
      id: "r4",
      question: "How clear are you on which training route you want to take?",
      options: [
        { value: "a", label: "Very clear — I've researched integrated vs modular and made a decision", emoji: "🎯", score: 3 },
        { value: "b", label: "Fairly clear — I have a preference but haven't committed", emoji: "📋", score: 2 },
        { value: "c", label: "Not very clear — I know I want to fly but not the route", emoji: "🗺️", score: 1 },
        { value: "d", label: "Completely unclear — I need a lot more information", emoji: "❓", score: 0 },
      ],
    },
    {
      id: "r5",
      question: "Have you visited or spoken to any flight schools?",
      options: [
        { value: "a", label: "Yes — I've visited multiple schools and have a shortlist", emoji: "🏫", score: 3 },
        { value: "b", label: "I've had some online conversations or attended an open day", emoji: "💬", score: 2 },
        { value: "c", label: "I've done some research online but not contacted anyone", emoji: "🔍", score: 1 },
        { value: "d", label: "I haven't looked into schools at all yet", emoji: "❓", score: 0 },
      ],
    },
    {
      id: "r6",
      question: "How motivated are you on a scale of 1–4?",
      options: [
        { value: "a", label: "Completely committed — this is happening, I just need the plan", emoji: "🔥", score: 3 },
        { value: "b", label: "Very motivated, but I have some doubts I need to resolve", emoji: "💪", score: 2 },
        { value: "c", label: "Interested but not yet certain this is the right path", emoji: "🤔", score: 1 },
        { value: "d", label: "Exploring the idea — not sure if I'm serious yet", emoji: "💭", score: 0 },
      ],
    },
    {
      id: "r7",
      question: "Do you have any aviation experience already?",
      options: [
        { value: "a", label: "Yes — I have a PPL or significant flight hours", emoji: "🛩️", score: 3 },
        { value: "b", label: "I've done a trial flight or two", emoji: "✈️", score: 2 },
        { value: "c", label: "No flight experience but I've done a lot of research", emoji: "📚", score: 1 },
        { value: "d", label: "No experience at all", emoji: "🆕", score: 0 },
      ],
    },
    {
      id: "r8",
      question: "Do you understand the minimum requirements to apply to airlines?",
      subtext: "e.g. ATPL, minimum hours, type ratings",
      options: [
        { value: "a", label: "Yes — I understand the full pathway from ab initio to airline", emoji: "🎓", score: 3 },
        { value: "b", label: "I have a general idea but not the specifics", emoji: "📖", score: 2 },
        { value: "c", label: "I know it involves a lot of training but not the details", emoji: "🤷", score: 1 },
        { value: "d", label: "I don't really know what's involved", emoji: "❓", score: 0 },
      ],
    },
    {
      id: "r9",
      question: "Have you considered the lifestyle implications of a pilot career?",
      subtext: "Irregular hours, time away from home, shift patterns",
      options: [
        { value: "a", label: "Yes — I've thought it through and I'm comfortable with it", emoji: "✅", score: 3 },
        { value: "b", label: "I've thought about it but haven't fully worked through it", emoji: "🤔", score: 2 },
        { value: "c", label: "Not really — I haven't thought much beyond the training", emoji: "💭", score: 1 },
        { value: "d", label: "No — I haven't considered the lifestyle at all", emoji: "❓", score: 0 },
      ],
    },
    {
      id: "r10",
      question: "If you started training tomorrow, what's your biggest concern?",
      options: [
        { value: "a", label: "Nothing major — I feel ready to go", emoji: "🚀", score: 3 },
        { value: "b", label: "The cost — I need to sort the finances first", emoji: "💸", score: 2 },
        { value: "c", label: "Whether I'll actually make it — self-doubt", emoji: "😟", score: 1 },
        { value: "d", label: "I don't know enough to know what I don't know", emoji: "🌀", score: 0 },
      ],
    },
  ],
  results: [
    {
      id: "launch-ready",
      title: "Launch Ready",
      subtitle: "You're in a strong position to start training",
      description: "You've done the groundwork. Your finances are in order, your health is sorted, you understand the pathway, and your motivation is solid. The next step is choosing your school and committing. Don't overthink it — you're ready.",
      emoji: "🚀",
      color: "#16a34a",
      minScore: 22,
      maxScore: 30,
      cta: { label: "Find your flight school", href: "/schools" },
    },
    {
      id: "nearly-there",
      title: "Nearly There",
      subtitle: "A few gaps to close before you commit",
      description: "You're serious and you've made real progress, but there are one or two areas that need attention before you start spending money on training. Use the results above to identify your weakest dimension and focus there first.",
      emoji: "📋",
      color: "#2563eb",
      minScore: 14,
      maxScore: 21,
      cta: { label: "Take the full career assessment", href: "/quiz" },
    },
    {
      id: "early-stage",
      title: "Early Stage",
      subtitle: "You need more groundwork before you're ready to commit",
      description: "You're interested, but there are significant gaps in your preparation — most likely around funding, the medical, or understanding the pathway. That's completely normal at this stage. The important thing is to close those gaps systematically before committing to training.",
      emoji: "🗺️",
      color: "#d97706",
      minScore: 7,
      maxScore: 13,
      cta: { label: "Read our how to become a pilot guide", href: "/guides/how-to-become-a-pilot" },
    },
    {
      id: "start-here",
      title: "Start Here",
      subtitle: "You're at the beginning — and that's fine",
      description: "You're at the very start of your journey. You don't yet have the information, the plan, or the preparation in place — but you have the interest, and that's what matters. Start with the guides, take the full assessment, and build your knowledge base before you make any financial commitments.",
      emoji: "🌱",
      color: "#7c3aed",
      minScore: 0,
      maxScore: 6,
      cta: { label: "Start with our free guides", href: "/guides" },
    },
  ],
};

// ─── Quiz 5: Guess the Aircraft ──────────────────────────────────────────
const guessAircraftQuiz: Quiz = {
  id: "guess-aircraft",
  slug: "guess-the-aircraft",
  title: "Guess the Aircraft",
  tagline: "Can you identify these iconic aircraft? 10 rounds.",
  description: "From legendary airliners to historic warbirds — how well do you know your aircraft? Score points for each correct answer and see how you rank.",
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
      question: "This iconic double-decker airliner was the world's largest passenger aircraft for 15 years. What is it?",
      subtext: "Hint: It has four engines and two full passenger decks",
      options: [
        { value: "a", label: "Boeing 747", emoji: "❌", correct: false },
        { value: "b", label: "Airbus A380", emoji: "✅", correct: true },
        { value: "c", label: "Boeing 777X", emoji: "❌", correct: false },
        { value: "d", label: "Airbus A340", emoji: "❌", correct: false },
      ],
      explanation: "The Airbus A380 first flew in 2005 and can carry up to 853 passengers in an all-economy configuration. It has four engines, two full-length passenger decks, and a wingspan of 79.75 metres.",
    },
    {
      id: "ac2",
      question: "This supersonic airliner flew at twice the speed of sound and crossed the Atlantic in under 3.5 hours. What is it?",
      options: [
        { value: "a", label: "Tupolev Tu-144", emoji: "❌", correct: false },
        { value: "b", label: "Concorde", emoji: "✅", correct: true },
        { value: "c", label: "Boeing 2707", emoji: "❌", correct: false },
        { value: "d", label: "Lockheed L-2000", emoji: "❌", correct: false },
      ],
      explanation: "Concorde, jointly developed by Britain and France, entered service in 1976 and flew at Mach 2.04 (2,179 km/h). It carried up to 128 passengers and retired in 2003 after 27 years of service.",
    },
    {
      id: "ac3",
      question: "Known as the 'Queen of the Skies', this aircraft revolutionised long-haul travel with its iconic hump. What is it?",
      options: [
        { value: "a", label: "Boeing 747", emoji: "✅", correct: true },
        { value: "b", label: "Douglas DC-8", emoji: "❌", correct: false },
        { value: "c", label: "Lockheed L-1011", emoji: "❌", correct: false },
        { value: "d", label: "Boeing 707", emoji: "❌", correct: false },
      ],
      explanation: "The Boeing 747 first flew in 1969 and transformed commercial aviation by making long-haul travel affordable for the masses. Its distinctive upper deck 'hump' houses the cockpit and a business class lounge on many variants.",
    },
    {
      id: "ac4",
      question: "This single-engine propeller aircraft is the most produced aircraft in history with over 44,000 built. What is it?",
      options: [
        { value: "a", label: "Piper PA-28 Cherokee", emoji: "❌", correct: false },
        { value: "b", label: "Beechcraft Bonanza", emoji: "❌", correct: false },
        { value: "c", label: "Cessna 172 Skyhawk", emoji: "✅", correct: true },
        { value: "d", label: "Diamond DA40", emoji: "❌", correct: false },
      ],
      explanation: "The Cessna 172 Skyhawk has been in continuous production since 1956 and is the most popular training aircraft in the world. It's likely the aircraft you'd learn to fly on if you started flight training today.",
    },
    {
      id: "ac5",
      question: "This aircraft holds the record for the fastest air-breathing aircraft ever flown, reaching Mach 3.3. What is it?",
      options: [
        { value: "a", label: "F-22 Raptor", emoji: "❌", correct: false },
        { value: "b", label: "SR-71 Blackbird", emoji: "✅", correct: true },
        { value: "c", label: "MiG-25 Foxbat", emoji: "❌", correct: false },
        { value: "d", label: "XB-70 Valkyrie", emoji: "❌", correct: false },
      ],
      explanation: "The Lockheed SR-71 Blackbird is the fastest air-breathing manned aircraft ever built, reaching speeds of Mach 3.3 (3,540 km/h). It flew reconnaissance missions for the USAF from 1966 to 1998 and could outrun any missile fired at it.",
    },
    {
      id: "ac6",
      question: "This narrow-body airliner is the world's best-selling commercial jet with over 10,000 orders. What is it?",
      options: [
        { value: "a", label: "Airbus A320", emoji: "✅", correct: true },
        { value: "b", label: "Boeing 737", emoji: "❌", correct: false },
        { value: "c", label: "Embraer E195", emoji: "❌", correct: false },
        { value: "d", label: "Bombardier C Series", emoji: "❌", correct: false },
      ],
      explanation: "The Airbus A320 family (including A318, A319, A320, A321) has received over 10,000 orders, making it the best-selling commercial aircraft family in history. It introduced fly-by-wire controls to commercial aviation.",
    },
    {
      id: "ac7",
      question: "This iconic WWII fighter was the only Allied fighter in continuous production throughout the war. What is it?",
      options: [
        { value: "a", label: "Hawker Hurricane", emoji: "❌", correct: false },
        { value: "b", label: "P-51 Mustang", emoji: "❌", correct: false },
        { value: "c", label: "Supermarine Spitfire", emoji: "✅", correct: true },
        { value: "d", label: "Focke-Wulf Fw 190", emoji: "❌", correct: false },
      ],
      explanation: "The Supermarine Spitfire was the only Allied fighter produced continuously throughout WWII. Over 20,000 were built in 24 variants. Its elliptical wing design gave it exceptional manoeuvrability and is considered one of the most beautiful aircraft ever built.",
    },
    {
      id: "ac8",
      question: "This aircraft was the first to fly without refuelling around the world non-stop. What is it?",
      options: [
        { value: "a", label: "Voyager", emoji: "✅", correct: true },
        { value: "b", label: "GlobalFlyer", emoji: "❌", correct: false },
        { value: "c", label: "Solar Impulse 2", emoji: "❌", correct: false },
        { value: "d", label: "Spirit of St. Louis", emoji: "❌", correct: false },
      ],
      explanation: "Voyager, designed by Burt Rutan and piloted by Dick Rutan and Jeana Yeager, completed the first non-stop, unrefuelled circumnavigation of the Earth in December 1986. The flight took 9 days, 3 minutes, and 44 seconds.",
    },
    {
      id: "ac9",
      question: "This tilt-rotor aircraft can take off like a helicopter and fly like a fixed-wing plane. What is it?",
      options: [
        { value: "a", label: "Sikorsky CH-53", emoji: "❌", correct: false },
        { value: "b", label: "Bell-Boeing V-22 Osprey", emoji: "✅", correct: true },
        { value: "c", label: "AgustaWestland AW609", emoji: "❌", correct: false },
        { value: "d", label: "Kamov Ka-52", emoji: "❌", correct: false },
      ],
      explanation: "The Bell-Boeing V-22 Osprey uses tiltrotor technology — its engines rotate 90 degrees to convert from helicopter to fixed-wing flight. It can take off and land vertically but cruise at 509 km/h, combining the best of both aircraft types.",
    },
    {
      id: "ac10",
      question: "This aircraft made the first powered, controlled, heavier-than-air flight in 1903. What is it?",
      options: [
        { value: "a", label: "Curtiss June Bug", emoji: "❌", correct: false },
        { value: "b", label: "Santos-Dumont 14-bis", emoji: "❌", correct: false },
        { value: "c", label: "Wright Flyer", emoji: "✅", correct: true },
        { value: "d", label: "Blériot XI", emoji: "❌", correct: false },
      ],
      explanation: "The Wright Flyer made the first successful powered, controlled, heavier-than-air flight on 17 December 1903 at Kitty Hawk, North Carolina. The first flight lasted 12 seconds and covered 37 metres. Orville Wright was at the controls.",
    },
  ],
  results: [
    {
      id: "test-pilot",
      title: "Test Pilot",
      subtitle: "Your aviation knowledge is extraordinary",
      description: "9–10 correct. You know your aircraft like a professional. Your depth of knowledge spans commercial aviation, military history, and general aviation. You'd be a formidable opponent in any aviation pub quiz — and you'd probably ace the academic side of flight training.",
      emoji: "🏆",
      color: "#f59e0b",
      minScore: 9,
      maxScore: 10,
      cta: { label: "Take the full career assessment", href: "/quiz" },
    },
    {
      id: "captain",
      title: "Captain",
      subtitle: "Strong aviation knowledge with a few blind spots",
      description: "7–8 correct. You clearly know your aviation. You got the famous ones right and even a few of the trickier ones. A couple of the more obscure aircraft caught you out, but your overall knowledge is impressive.",
      emoji: "✈️",
      color: "#3b82f6",
      minScore: 7,
      maxScore: 8,
      cta: { label: "Start your pilot journey", href: "/quiz" },
    },
    {
      id: "first-officer",
      title: "First Officer",
      subtitle: "Good instincts, but room to grow",
      description: "4–6 correct. You know the famous aircraft — Concorde, the 747, the Spitfire — but some of the more technical or historical questions caught you out. You're in good company: most people score in this range.",
      emoji: "🛫",
      color: "#8b5cf6",
      minScore: 4,
      maxScore: 6,
      cta: { label: "Explore our aviation guides", href: "/guides" },
    },
    {
      id: "ramp-rat",
      title: "Ramp Rat",
      subtitle: "You're new to aviation — welcome aboard",
      description: "0–3 correct. Aviation is a world of its own, and you're just getting started. The good news: every expert pilot started exactly where you are. Curiosity is the only prerequisite.",
      emoji: "🌱",
      color: "#6b7280",
      minScore: 0,
      maxScore: 3,
      cta: { label: "Start learning with our guides", href: "/guides" },
    },
  ],
};

// ─── Quiz 6: What's Your Biggest Obstacle? ───────────────────────────────
const obstacleQuiz: Quiz = {
  id: "biggest-obstacle",
  slug: "biggest-obstacle",
  title: "What's Your Biggest Obstacle?",
  tagline: "Identify the one thing standing between you and the cockpit",
  description: "Most aspiring pilots are held back by one primary barrier. This quiz identifies yours — and tells you exactly what to do about it.",
  emoji: "🚧",
  type: "diagnostic",
  badge: "Top Funnel",
  duration: "2 min",
  questionCount: 8,
  gradient: "linear-gradient(135deg, #1c0533 0%, #2e1065 50%, #1e1b4b 100%)",
  accentColor: "#c084fc",
  questions: [
    {
      id: "o1",
      question: "When you think about becoming a pilot, what's the first thing that makes you hesitate?",
      options: [
        { value: "finance", label: "The cost — I can't see how I'd fund £80k+ of training", emoji: "💸" },
        { value: "time", label: "The time — I have work, family, or other commitments", emoji: "⏰" },
        { value: "medical", label: "My health — I'm worried about passing the medical", emoji: "🩺" },
        { value: "confidence", label: "Myself — I'm not sure I'm smart or capable enough", emoji: "😟" },
        { value: "info", label: "The complexity — I don't know where to start", emoji: "🌀" },
      ],
    },
    {
      id: "o2",
      question: "How often do you find yourself researching pilot training?",
      options: [
        { value: "finance", label: "Often, but I always hit a wall when I see the costs", emoji: "💰" },
        { value: "time", label: "Occasionally, but I can't figure out how to fit it around my life", emoji: "📅" },
        { value: "medical", label: "I avoid it because I'm worried about the medical requirements", emoji: "⚠️" },
        { value: "confidence", label: "Rarely — I don't feel like it's really for someone like me", emoji: "💭" },
        { value: "info", label: "Constantly, but I end up more confused than when I started", emoji: "🔍" },
      ],
    },
    {
      id: "o3",
      question: "If someone gave you £100,000 tomorrow specifically for flight training, what would you do?",
      options: [
        { value: "finance", label: "Start immediately — money was the only thing stopping me", emoji: "🚀" },
        { value: "time", label: "Still struggle — I'd need to sort my life situation first", emoji: "⏳" },
        { value: "medical", label: "Get a medical assessment first before committing", emoji: "🏥" },
        { value: "confidence", label: "Still hesitate — I'm not sure I'd make it through training", emoji: "😰" },
        { value: "info", label: "Start researching properly — I still wouldn't know where to start", emoji: "📚" },
      ],
    },
    {
      id: "o4",
      question: "What best describes your current financial situation relative to pilot training?",
      options: [
        { value: "finance", label: "I have no realistic path to funding it right now", emoji: "❌" },
        { value: "finance", label: "I could fund it but it would require major life changes", emoji: "⚖️" },
        { value: "time", label: "Finance isn't the issue — time and lifestyle are", emoji: "🕐" },
        { value: "confidence", label: "I have the money but I'm not sure I should spend it on this", emoji: "🤔" },
      ],
    },
    {
      id: "o5",
      question: "Have you ever had a trial flight or been in a small aircraft cockpit?",
      options: [
        { value: "confidence", label: "No — and honestly the idea makes me nervous", emoji: "😬" },
        { value: "info", label: "No — I haven't got that far yet", emoji: "🆕" },
        { value: "time", label: "Yes, and I loved it — I just can't find the time to pursue it", emoji: "❤️" },
        { value: "finance", label: "Yes, and I loved it — I just can't afford to continue", emoji: "💔" },
      ],
    },
    {
      id: "o6",
      question: "How do you feel about the academic side of pilot training?",
      subtext: "14 ATPL exams covering meteorology, navigation, systems, and more",
      options: [
        { value: "confidence", label: "Intimidated — I'm not sure I'm academic enough", emoji: "😟" },
        { value: "time", label: "Fine with the content, but finding study time is the challenge", emoji: "📖" },
        { value: "info", label: "I didn't even know there were exams — I need more information", emoji: "❓" },
        { value: "finance", label: "Fine with it — the exams aren't what's stopping me", emoji: "✅" },
      ],
    },
    {
      id: "o7",
      question: "What's your biggest fear about starting and then not finishing?",
      options: [
        { value: "finance", label: "Losing the money — the financial risk is enormous", emoji: "💸" },
        { value: "confidence", label: "Failing — proving to myself that I wasn't good enough", emoji: "😔" },
        { value: "time", label: "Disrupting my life for nothing — the opportunity cost", emoji: "⏰" },
        { value: "medical", label: "Being grounded by a medical issue mid-training", emoji: "🏥" },
      ],
    },
    {
      id: "o8",
      question: "What would help you most right now?",
      options: [
        { value: "finance", label: "A clear guide to financing pilot training — loans, schemes, options", emoji: "💰" },
        { value: "time", label: "A realistic part-time or modular training plan", emoji: "📅" },
        { value: "medical", label: "Honest information about the medical requirements", emoji: "🩺" },
        { value: "confidence", label: "Evidence that people like me actually make it", emoji: "🌟" },
        { value: "info", label: "A clear, simple breakdown of the whole pathway from scratch", emoji: "🗺️" },
      ],
    },
  ],
  results: [
    {
      id: "finance",
      title: "Your Barrier: Finance",
      subtitle: "The cost of training is what's holding you back",
      description: "You're not alone — finance is the most common barrier for aspiring pilots. The good news is that there are more funding options than most people realise: career development loans, flight school payment plans, airline cadet sponsorships, and government-backed schemes. The key is building a specific financial plan, not just hoping the money appears. Start with our finance guide, then take the full assessment to see which schools offer the best funding support.",
      emoji: "💸",
      color: "#f59e0b",
      cta: { label: "Read the finance guide", href: "/guides/finance-guide" },
    },
    {
      id: "time",
      title: "Your Barrier: Time",
      subtitle: "Life commitments are making it hard to see a clear path",
      description: "The modular route was designed for people exactly like you. You can train part-time, at your own pace, fitting lessons around work and family. It takes longer than integrated training (3–5 years vs 18–24 months), but it's a legitimate pathway to a commercial licence. Many working pilots trained this way. The key is being realistic about how many hours per week you can genuinely commit.",
      emoji: "⏰",
      color: "#3b82f6",
      cta: { label: "Explore the modular route", href: "/tools/integrated-vs-modular" },
    },
    {
      id: "medical",
      title: "Your Barrier: The Medical",
      subtitle: "Health concerns are creating uncertainty",
      description: "Medical standards for pilots have evolved significantly — many conditions that once disqualified pilots no longer do. The only way to get a definitive answer is to book an informal consultation with a CAA-approved Aeromedical Examiner (AME) before you start training. They can tell you exactly where you stand. Don't let uncertainty stop you from even asking the question.",
      emoji: "🩺",
      color: "#06b6d4",
      cta: { label: "Check the Class 1 Medical tool", href: "/tools/class-1-medical-check" },
    },
    {
      id: "confidence",
      title: "Your Barrier: Self-Belief",
      subtitle: "You're questioning whether you're the right kind of person",
      description: "This is more common than you'd think — and it's the barrier that's hardest to address with information alone. The truth is that pilots come from every background, every academic level, and every personality type. The selection process is designed to find people who can learn, not people who already know. The best thing you can do is book a trial flight. One hour in a cockpit does more for confidence than a hundred hours of research.",
      emoji: "💪",
      color: "#8b5cf6",
      cta: { label: "Take the full career assessment", href: "/quiz" },
    },
    {
      id: "info",
      title: "Your Barrier: Information Overload",
      subtitle: "You're overwhelmed by complexity and don't know where to start",
      description: "Aviation has a lot of jargon, a lot of routes, and a lot of conflicting advice online. It's genuinely confusing. The best starting point is a simple, structured overview of the pathway — from zero experience to airline pilot — without the noise. Start with our 'How to Become a Pilot' guide, then take the full AviatorIQ assessment to get a personalised roadmap.",
      emoji: "🗺️",
      color: "#16a34a",
      cta: { label: "Read the beginner's guide", href: "/guides/how-to-become-a-pilot" },
    },
  ],
};

// ─── Quiz 7: Do You Think Like a Pilot? ──────────────────────────────────
const pilotThinkingQuiz: Quiz = {
  id: "pilot-thinking",
  slug: "think-like-a-pilot",
  title: "Do You Think Like a Pilot?",
  tagline: "8 scenarios. Would you make the right call?",
  description: "These aren't trick questions about memorised facts. They test the calm, systematic thinking that pilots actually use. How would you handle the situation?",
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
      question: "You're flying and your altimeter shows 3,000 feet, but your GPS shows 2,800 feet. What do you do?",
      subtext: "Assume you're in VMC (good visibility) and flying over flat terrain",
      options: [
        { value: "a", label: "Trust the altimeter — it's the primary instrument", emoji: "📊", score: 1 },
        { value: "b", label: "Cross-check with a third source (VSI, terrain, ATC) before deciding which to trust", emoji: "✅", score: 3 },
        { value: "c", label: "Trust the GPS — it's more modern and accurate", emoji: "📡", score: 1 },
        { value: "d", label: "Declare an emergency immediately", emoji: "🚨", score: 0 },
      ],
      explanation: "The correct approach is always to cross-check with a third source. No single instrument should be trusted over all others. Pilots are trained to identify instrument failures by comparing multiple sources — this is the foundation of instrument flying.",
    },
    {
      id: "pt2",
      question: "ATC gives you a clearance to descend to 4,000 feet. You believe you're currently at 4,200 feet. What do you do?",
      options: [
        { value: "a", label: "Start descending immediately — ATC knows where you are", emoji: "⬇️", score: 1 },
        { value: "b", label: "Readback the clearance, confirm your current altitude, then descend", emoji: "✅", score: 3 },
        { value: "c", label: "Ask ATC to confirm your current altitude before doing anything", emoji: "📻", score: 2 },
        { value: "d", label: "Refuse the clearance until you're certain of your altitude", emoji: "❌", score: 0 },
      ],
      explanation: "Always readback clearances — this confirms you heard correctly and gives ATC a chance to correct any error. Confirming your current altitude before descending is good practice. ATC does not always have precise altitude information for every aircraft.",
    },
    {
      id: "pt3",
      question: "You're on final approach to land. The runway looks shorter than expected. What's your first thought?",
      options: [
        { value: "a", label: "I must be higher than normal — I'll steepen my approach", emoji: "⬇️", score: 1 },
        { value: "b", label: "I might be too high, too fast, or on the wrong runway — go around and reassess", emoji: "✅", score: 3 },
        { value: "c", label: "The runway looks fine — I'll continue the approach", emoji: "🛬", score: 0 },
        { value: "d", label: "I'll land anyway and brake hard", emoji: "⚠️", score: 0 },
      ],
      explanation: "If anything looks wrong on approach, the correct response is always to go around. A go-around costs a few minutes; a runway overrun can be fatal. Pilots are trained to treat any unexpected visual cue as a reason to reassess, not to press on.",
    },
    {
      id: "pt4",
      question: "You're flying solo and feel suddenly unwell — mild dizziness and nausea. What do you do?",
      options: [
        { value: "a", label: "Continue to destination — it's probably nothing", emoji: "😐", score: 0 },
        { value: "b", label: "Divert to the nearest suitable airfield and land as soon as possible", emoji: "✅", score: 3 },
        { value: "c", label: "Declare a PAN PAN (urgency), inform ATC, and divert", emoji: "📻", score: 3 },
        { value: "d", label: "Open a window and hope it passes", emoji: "🪟", score: 0 },
      ],
      explanation: "Both B and C are correct. Pilot incapacitation is a serious risk and must be treated immediately. A PAN PAN (urgency) declaration is appropriate — it's not an emergency yet, but you need priority handling. Never continue flying when unwell.",
    },
    {
      id: "pt5",
      question: "You arrive at your aircraft for a pre-flight check and notice a small crack in the windscreen. What do you do?",
      options: [
        { value: "a", label: "It's small — I'll fly and report it when I land", emoji: "✈️", score: 0 },
        { value: "b", label: "Ground the aircraft and report it to maintenance immediately", emoji: "✅", score: 3 },
        { value: "c", label: "Take a photo, note it in the log, and fly if it doesn't worsen", emoji: "📸", score: 0 },
        { value: "d", label: "Ask another pilot if they think it's safe to fly", emoji: "🤷", score: 1 },
      ],
      explanation: "Any crack in a windscreen is a reason to ground the aircraft. Windscreens are structural components that maintain cabin pressurisation and protect against bird strikes. The decision to fly must never be based on how small a defect looks — it must be assessed by a qualified engineer.",
    },
    {
      id: "pt6",
      question: "You're flying in deteriorating weather. Visibility is dropping. You're not instrument rated. What do you do?",
      options: [
        { value: "a", label: "Fly lower to stay below the cloud base", emoji: "⬇️", score: 0 },
        { value: "b", label: "Turn around immediately and return to VMC conditions", emoji: "✅", score: 3 },
        { value: "c", label: "Continue — you know the area well", emoji: "➡️", score: 0 },
        { value: "d", label: "Climb above the cloud and navigate by GPS", emoji: "⬆️", score: 0 },
      ],
      explanation: "VFR into IMC (flying into cloud without an instrument rating) is one of the leading causes of fatal general aviation accidents. The only correct response is to turn around immediately. Familiarity with the area is irrelevant — without visual reference, spatial disorientation can occur within minutes.",
    },
    {
      id: "pt7",
      question: "You're about to take off and a passenger tells you they feel very anxious. What do you do?",
      options: [
        { value: "a", label: "Reassure them and continue — anxiety is normal", emoji: "😊", score: 1 },
        { value: "b", label: "Take a moment to explain the flight, address their specific concerns, then proceed", emoji: "✅", score: 3 },
        { value: "c", label: "Offer to cancel the flight if they're not comfortable", emoji: "🤝", score: 2 },
        { value: "d", label: "Tell them to relax and that flying is safe", emoji: "🙄", score: 0 },
      ],
      explanation: "Crew Resource Management (CRM) — the ability to communicate effectively with passengers and crew — is a core pilot skill. Dismissing a passenger's concerns is poor practice. Taking a moment to genuinely address their anxiety is both the right thing to do and the safest outcome.",
    },
    {
      id: "pt8",
      question: "You've been flying for 6 hours and you're tired. You have 45 minutes left to your destination. What do you do?",
      options: [
        { value: "a", label: "Push on — it's only 45 minutes", emoji: "➡️", score: 0 },
        { value: "b", label: "Increase your scan frequency and drink something caffeinated", emoji: "☕", score: 1 },
        { value: "c", label: "Land at the nearest suitable airfield, rest, and continue when fit to fly", emoji: "✅", score: 3 },
        { value: "d", label: "Ask your co-pilot to take over", emoji: "👤", score: 2 },
      ],
      explanation: "Fatigue is one of the most significant causes of aviation accidents. The regulations exist for a reason, and a pilot who feels unfit to fly must not fly — regardless of how close they are to their destination. 'Get-there-itis' (pressing on despite warning signs) is a well-documented and deadly phenomenon.",
    },
  ],
  results: [
    {
      id: "natural-pilot",
      title: "Natural Pilot Mindset",
      subtitle: "You think exactly the way pilots are trained to think",
      description: "You scored 20–24. Your instincts are excellent. You prioritise safety over convenience, you cross-check before deciding, and you know when to stop and reassess rather than press on. These are not innate traits — they're learned ones — but you've already absorbed the most important lessons. You'd be a strong student pilot.",
      emoji: "🎖️",
      color: "#10b981",
      minScore: 20,
      maxScore: 24,
      cta: { label: "Take the full career assessment", href: "/quiz" },
    },
    {
      id: "good-instincts",
      title: "Good Instincts",
      subtitle: "Solid thinking with a few gaps to address",
      description: "You scored 14–19. Your instincts are generally sound — you got the big decisions right. A few of the more nuanced scenarios caught you out, but that's exactly what flight training is for. The core mindset is there; the specific knowledge comes with training.",
      emoji: "✈️",
      color: "#3b82f6",
      minScore: 14,
      maxScore: 19,
      cta: { label: "Start your pilot journey", href: "/quiz" },
    },
    {
      id: "learning-curve",
      title: "Steep Learning Curve Ahead",
      subtitle: "Your instincts need recalibrating — but that's what training is for",
      description: "You scored 8–13. Some of your instincts led you toward the wrong decisions — particularly around pressing on when you should stop, and trusting single sources when you should cross-check. This is completely normal for someone without aviation training. The entire purpose of flight training is to replace civilian instincts with pilot instincts.",
      emoji: "📚",
      color: "#f59e0b",
      minScore: 8,
      maxScore: 13,
      cta: { label: "Explore our aviation guides", href: "/guides" },
    },
    {
      id: "start-fresh",
      title: "Starting From Zero",
      subtitle: "Your instincts are civilian instincts — and that's the starting point for everyone",
      description: "You scored 0–7. Your instincts in these scenarios were those of a non-pilot — which is exactly what you are. The good news: every pilot starts here. Flight training doesn't select for people who already think like pilots; it creates them. The fact that you found this quiz and took it puts you ahead of most.",
      emoji: "🌱",
      color: "#8b5cf6",
      minScore: 0,
      maxScore: 7,
      cta: { label: "Start with our beginner guides", href: "/guides" },
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
];

export function getQuizBySlug(slug: string): Quiz | undefined {
  return ALL_QUIZZES.find((q) => q.slug === slug);
}
