// ─── "What's Really Stopping You Becoming A Pilot?" Scoring Engine ───────────
// Gen 2 — barrier-first, insight-led, archetype-aware.
// Six scoring dimensions: Dream, Commitment, Financial Readiness,
// Medical Confidence, Timeline, Risk Tolerance.

export type FlightDeckInput = {
  dream: string;
  commitment: string;
  barrier: string;
  budget: string;
  medical: string;
  risk: string;
  timeline: string;
};

export type FlightDeckResult = {
  score: number;
  phase: "Exploration" | "Development" | "Flight Ready";
  archetype: string;
  archetypeDescription: string;
  headline: string;
  subheadline: string;
  biggestBarrier: string;
  barrierAdvice: string;
  strongestAsset: string;
  assetDescription: string;
  nextAction: string;
  shareText: string;
};

function scoreDream(dream: string): number {
  if (dream === "airline_captain") return 18;
  if (dream === "cargo") return 16;
  if (dream === "private_jet") return 15;
  if (dream === "fun") return 10;
  if (dream === "not_sure") return 7;
  return 7;
}

function scoreCommitment(commitment: string): number {
  if (commitment === "applied") return 22;
  if (commitment === "visited_school") return 20;
  if (commitment === "trial_lesson") return 17;
  if (commitment === "researched_schools") return 12;
  if (commitment === "watched_videos") return 7;
  if (commitment === "just_dreaming") return 3;
  return 3;
}

function scoreFinancial(budget: string): number {
  if (budget === "funded_or_sponsored") return 20;
  if (budget === "serious_savings") return 17;
  if (budget === "some_savings") return 11;
  if (budget === "researching_finance") return 8;
  if (budget === "nothing_yet") return 3;
  return 3;
}

function scoreMedical(medical: string): number {
  if (medical === "have_class1") return 16;
  if (medical === "no_concerns") return 15;
  if (medical === "minor_concerns") return 10;
  if (medical === "not_sure") return 8;
  if (medical === "significant_concerns") return 4;
  return 8;
}

function scoreTimeline(timeline: string): number {
  if (timeline === "asap") return 14;
  if (timeline === "within_year") return 12;
  if (timeline === "one_to_three") return 8;
  if (timeline === "someday") return 4;
  if (timeline === "not_sure") return 5;
  return 5;
}

function scoreRisk(risk: string): number {
  if (risk === "ready_to_commit") return 10;
  if (risk === "would_leave_job") return 9;
  if (risk === "need_to_keep_income") return 6;
  if (risk === "too_much_to_lose") return 3;
  if (risk === "no_commitments") return 10;
  return 5;
}

function getPhase(score: number): FlightDeckResult["phase"] {
  if (score >= 72) return "Flight Ready";
  if (score >= 42) return "Development";
  return "Exploration";
}

function getArchetype(input: FlightDeckInput): { archetype: string; archetypeDescription: string } {
  const { commitment, budget, barrier, risk } = input;

  if (commitment === "applied" || commitment === "visited_school" || commitment === "trial_lesson") {
    return {
      archetype: "The Almost Ready Candidate",
      archetypeDescription:
        "You've done more than most. You've taken real steps — which puts you ahead of the majority of people who only ever think about it. The gap between you and the flight deck is smaller than it feels.",
    };
  }
  if (budget === "nothing_yet" || budget === "researching_finance" || barrier === "cost") {
    return {
      archetype: "The Financially Blocked Candidate",
      archetypeDescription:
        "You want this — the motivation is real. The obstacle is financial, not personal. More people fund pilot training through loans, payment plans, and modular routes than you might think.",
    };
  }
  if (risk === "need_to_keep_income" || risk === "too_much_to_lose") {
    return {
      archetype: "The Career Changer",
      archetypeDescription:
        "You're weighing a significant life decision, not just a training choice. That's a different kind of challenge — and it deserves a different kind of answer than a generic quiz result.",
    };
  }
  if (commitment === "researched_schools" && barrier === "information_overload") {
    return {
      archetype: "The Researcher",
      archetypeDescription:
        "You've done your homework — possibly too much. Information overload is a real barrier. The next step isn't more research; it's a conversation with someone who can cut through the noise.",
    };
  }
  if (commitment === "just_dreaming" || commitment === "watched_videos" || barrier === "confidence") {
    return {
      archetype: "The Dreamer",
      archetypeDescription:
        "You've wanted this for a long time. The barrier isn't money or age or medical — it's the belief that it's actually possible for someone like you. It is. The first step is smaller than you think.",
    };
  }
  return {
    archetype: "The Researcher",
    archetypeDescription:
      "You're in the information-gathering phase — which is a valid place to be. The most useful next step is understanding your specific situation, not reading more general guides.",
  };
}

type BarrierKey =
  | "cost"
  | "confidence"
  | "medical"
  | "time"
  | "age"
  | "career_risk"
  | "information_overload"
  | "unknown";

function deriveBiggestBarrier(input: FlightDeckInput): BarrierKey {
  const { barrier, budget, medical, risk, commitment } = input;
  if (barrier === "cost") return "cost";
  if (barrier === "confidence") return "confidence";
  if (barrier === "medical") return "medical";
  if (barrier === "time") return "time";
  if (barrier === "age") return "age";
  if (barrier === "career_risk") return "career_risk";
  if (barrier === "information_overload") return "information_overload";
  if (budget === "nothing_yet") return "cost";
  if (medical === "significant_concerns") return "medical";
  if (risk === "too_much_to_lose") return "career_risk";
  if (commitment === "just_dreaming") return "confidence";
  return "unknown";
}

function getBarrierLabel(key: BarrierKey): string {
  const map: Record<BarrierKey, string> = {
    cost: "Funding",
    confidence: "Self-belief",
    medical: "Medical uncertainty",
    time: "Time commitment",
    age: "Age concerns",
    career_risk: "Career risk",
    information_overload: "Information overload",
    unknown: "Clarity",
  };
  return map[key];
}

function getBarrierAdvice(key: BarrierKey): string {
  const map: Record<BarrierKey, string> = {
    cost: "Funding is the most common barrier — and the most solvable. Modular training lets you pay in stages. Career development loans, school payment plans, and employer sponsorships exist specifically for this situation. You don't need the full amount upfront.",
    confidence: "Confidence is the most underestimated barrier in aviation. Almost every pilot who qualified felt exactly the way you do before they started. The first step — a trial lesson — costs less than £200 and changes most people's perspective entirely.",
    medical: "Medical concerns stop more people than they should. Most common health conditions don't automatically disqualify you from a Class 1 medical. An Aviation Medical Examiner assessment takes less than a day and gives you a definitive answer. Uncertainty is worse than knowing.",
    time: "Time is a real constraint — but modular training was designed for exactly this situation. Thousands of pilots have qualified while working full-time, training on evenings and weekends over 3–5 years. It takes longer, but it's a well-trodden path.",
    age: "Age is rarely the barrier people think it is. Airlines hire pilots up to their mid-forties. The modular route is particularly well-suited to older candidates — you can train at your own pace and still qualify for a commercial career.",
    career_risk: "The risk calculation is real, and it deserves a serious answer. The key question is: what is the cost of not doing it? Many career changers find that the modular route lets them keep their income while training — reducing the financial risk significantly.",
    information_overload: "More information isn't the answer. A structured assessment that maps your specific situation to a specific path is. The goal isn't to know everything about pilot training — it's to know what the right next step is for you.",
    unknown: "The most useful thing you can do right now is understand your specific situation clearly. A full career assessment takes 5 minutes and gives you a personalised roadmap built around your actual profile.",
  };
  return map[key];
}

function getStrongestAsset(input: FlightDeckInput): { strongestAsset: string; assetDescription: string } {
  const { commitment, budget, medical, dream, risk } = input;
  if (commitment === "applied" || commitment === "visited_school" || commitment === "trial_lesson") {
    return {
      strongestAsset: "Commitment",
      assetDescription: "You've already taken action — which puts you ahead of the majority of people who only ever think about it. That's not a small thing.",
    };
  }
  if (budget === "funded_or_sponsored" || budget === "serious_savings") {
    return {
      strongestAsset: "Financial readiness",
      assetDescription: "You're in a stronger financial position than most aspiring pilots. That removes the biggest practical barrier for the majority of people in your situation.",
    };
  }
  if (medical === "have_class1" || medical === "no_concerns") {
    return {
      strongestAsset: "Medical confidence",
      assetDescription: "Medical uncertainty stops a lot of people before they start. You've already cleared that hurdle — or have no reason to worry about it.",
    };
  }
  if (dream === "airline_captain" || dream === "cargo" || dream === "private_jet") {
    return {
      strongestAsset: "Clarity of goal",
      assetDescription: "You know exactly what you want. That clarity is more valuable than it sounds — most people spend years in indecision before committing to a direction.",
    };
  }
  if (risk === "ready_to_commit" || risk === "no_commitments") {
    return {
      strongestAsset: "Freedom to act",
      assetDescription: "You're not held back by career obligations or financial dependants. That gives you more options — and more speed — than most people at your stage.",
    };
  }
  return {
    strongestAsset: "Awareness",
    assetDescription: "You're asking the right questions at the right time. Most people who become pilots started exactly where you are — curious, uncertain, and looking for a clear path forward.",
  };
}

function getHeadline(score: number, barrierKey: BarrierKey, archetype: string): string {
  if (score >= 80) return "You're genuinely close to the flight deck.";
  if (score >= 65) return "You're closer than most people think.";
  if (score >= 50) {
    if (barrierKey === "cost") return "The gap between you and the cockpit is mostly financial.";
    if (barrierKey === "confidence") return "The gap between you and the cockpit is mostly in your head.";
    if (barrierKey === "medical") return "One medical assessment could change everything.";
    if (barrierKey === "career_risk") return "You have a real path — it just needs a plan that protects your income.";
    return "You have a real path — it just needs a plan.";
  }
  if (score >= 35) {
    if (archetype === "The Dreamer") return "You've been thinking about this long enough. It's time to find out if it's real.";
    return "You're at the start of something real.";
  }
  return "Every pilot starts somewhere. This is yours.";
}

function getSubheadline(score: number, input: FlightDeckInput, barrierKey: BarrierKey): string {
  const dreamLabel: Record<string, string> = {
    airline_captain: "airline captain",
    cargo: "cargo pilot",
    private_jet: "private jet pilot",
    fun: "private pilot",
    not_sure: "pilot",
  };
  const label = dreamLabel[input.dream] ?? "pilot";
  if (score >= 72) return `Your profile matches someone who could realistically become a ${label}. Your biggest challenge right now is taking the next concrete step.`;
  if (score >= 55) return `Becoming a ${label} is achievable from where you are. Your main obstacle is ${getBarrierLabel(barrierKey).toLowerCase()} — which is a solvable problem, not a permanent one.`;
  if (score >= 40) return `The path to becoming a ${label} is real from your position. But it will require a clear plan that addresses your specific situation — not generic advice.`;
  return `Thousands of pilots started exactly where you are. The difference between them and everyone else is that they took one concrete step.`;
}

function getNextAction(score: number, barrierKey: BarrierKey, commitment: string): string {
  if (commitment === "just_dreaming" || commitment === "watched_videos") {
    return "Book a trial lesson. It costs less than £200 and will tell you more than any quiz.";
  }
  if (barrierKey === "medical") {
    return "Book an Aviation Medical Examiner (AME) assessment. It takes less than a day and removes the biggest unknown.";
  }
  if (barrierKey === "cost") {
    return "Take the full Career Readiness Assessment to get a personalised funding plan built around your budget.";
  }
  if (barrierKey === "information_overload") {
    return "Stop researching and take the full Career Readiness Assessment. It will give you one clear path, not more options.";
  }
  if (score >= 65) {
    return "Take the full Career Readiness Assessment to get your personalised training roadmap and matched flight schools.";
  }
  return "Take the full Career Readiness Assessment to understand your specific situation and your realistic next step.";
}

function getShareText(score: number, phase: string, barrierLabel: string, strongestAsset: string): string {
  return `I just took the AviatorIQ assessment. Flight Potential: ${score}/100 (${phase} phase). Biggest barrier: ${barrierLabel}. Strongest asset: ${strongestAsset}. What's stopping you? 👇`;
}

export function scoreFlightDeckQuiz(input: FlightDeckInput): FlightDeckResult {
  const raw =
    scoreDream(input.dream) +
    scoreCommitment(input.commitment) +
    scoreFinancial(input.budget) +
    scoreMedical(input.medical) +
    scoreTimeline(input.timeline) +
    scoreRisk(input.risk);

  const score = Math.min(100, Math.max(0, raw));
  const phase = getPhase(score);
  const barrierKey = deriveBiggestBarrier(input);
  const { archetype, archetypeDescription } = getArchetype(input);
  const { strongestAsset, assetDescription } = getStrongestAsset(input);

  return {
    score,
    phase,
    archetype,
    archetypeDescription,
    headline: getHeadline(score, barrierKey, archetype),
    subheadline: getSubheadline(score, input, barrierKey),
    biggestBarrier: getBarrierLabel(barrierKey),
    barrierAdvice: getBarrierAdvice(barrierKey),
    strongestAsset,
    assetDescription,
    nextAction: getNextAction(score, barrierKey, input.commitment),
    shareText: getShareText(score, phase, getBarrierLabel(barrierKey), strongestAsset),
  };
}
