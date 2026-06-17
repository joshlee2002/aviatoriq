# AviatorIQ — Quiz & Roadmap Honest Audit + £4.99 Upgrade Strategy

---

## 1. Are the quizzes actually fun? Do they make you want to do more?

**The short answer: the Flight Deck quiz is good. The QuizPage suite is decent but not addictive. The main Career Assessment is not fun — it's a form.**

### Flight Deck Quiz (`/quiz/flight-deck`) — the best thing you have

This is genuinely well-designed. Seven questions, auto-advance on tap, large emoji option cards, a gold progress bar, no registration wall, and a footer that says "Free · No registration · 7 questions · Takes 2 minutes." The questions are insight-led and emotionally honest — "What have you actually done about it so far?" is a great question because it makes people self-reflect rather than just pick a dream.

**What works:**
- Zero friction before the result — no email gate on the quiz itself
- Auto-advance on selection feels fast and satisfying
- The questions feel like they understand the person, not just categorise them
- The result page is genuinely strong: score ring, archetype card, barrier vs. asset split, and a specific "next action" — not generic advice

**What's missing:**
- There is no moment of delight or surprise. The questions are serious and useful but there's no wit, no unexpected turn, nothing that makes you want to screenshot and share *the quiz itself* (as opposed to the result)
- The result copy is deterministic — 5 archetypes, 7 barrier labels, a small set of headline/subheadline templates. It's good writing but a power user who takes it twice will notice it's a decision tree
- No "try another quiz" prompt on the result page — the only next step is the full assessment or email capture

### The QuizPage Suite (7 quizzes at `/quizzes/:slug`) — fun but disconnected

The content is strong: "What Kind of Pilot Are You?", "Do You Think Like a Pilot?", "Guess the Aircraft", "Could You Pass a Pilot Medical?" — these are genuinely interesting topics. The questions are well-written, the explanations after trivia answers are good, and the result cards have personality.

**Problems:**
- The quiz engine (`QuizPage.tsx`) does **not capture any email or lead**. Users complete a quiz, get a result card, and then either click the CTA into `/quiz` or leave. There is no retention mechanism
- The QuizHub page exists but is not prominently linked from the main nav — most users won't find these quizzes unless they're already engaged
- The 7 quizzes feel like a collection, not a journey. There's no "you scored X on this quiz, now try the one that matches your result" logic
- Visually the quiz cards are fine but the result cards are plain — a score ring, a colour block, some text. They don't feel shareable

### Main Career Assessment (`/quiz`) — a form, not a quiz

This is a 7-step lead capture form with quiz-like framing. It collects full name, email, intent, barriers, budget, medical, route preference, and consent. It's the right product for lead generation but calling it a quiz is a stretch. It's a diagnostic tool. The emotional experience is closer to filling in a mortgage application than taking a BuzzFeed quiz.

**This is fine — it's supposed to be the serious conversion point.** But the funnel currently asks people to go from "fun quiz" to "10-minute form" with nothing in between. That's a big jump.

---

## 2. Do we gain a lead from them?

**Partially — and there's a significant gap.**

| Product | Lead capture? | Quality |
|---|---|---|
| Flight Deck Quiz | Email gate on result page (optional, post-result) | Real backend capture via `trpc.flightDeck.captureEmail` — phase, score, barrier, consent stored |
| QuizPage suite (7 quizzes) | **None** | Zero — users complete quizzes and leave with no data captured |
| Licence Quiz | Email capture on result page | Real backend capture |
| Free Roadmap Generator | `EmailCapture` banner | **Fake** — stores only in `localStorage`, no backend persistence |
| Main Career Assessment | Full lead form (name, email, consent, all data) | Best quality — full profile, AI roadmap generated, PDF created, school intros offered |

**The biggest gap: the 7-quiz suite captures nothing.** These quizzes are the most fun, most shareable content on the site, and they generate zero leads. Every person who completes "Guess the Aircraft" or "Do You Think Like a Pilot?" and gets a result is a warm prospect who just spent 3–4 minutes engaging with your brand — and you don't know who they are.

**The free roadmap email capture is broken.** It stores to `localStorage` only — if someone completes the roadmap generator and enters their email, that data never reaches your database.

---

## 3. Is the AI brief fun? Does it give valuable info? Does it make them feel something?

**Yes — the AI brief in the full assessment is the best thing on the site, but almost nobody sees it.**

The server prompt (`routers.ts` lines 375–418) is genuinely excellent. It:
- Addresses the candidate's biggest barrier directly and honestly
- Gives a personalised recommended route with rationale specific to their profile
- Provides estimated cost range, timeline, 5 concrete next steps
- Includes medical and finance advisory tailored to their answers
- Uses honest, direct language — "If their barrier is funding, say so clearly and give real options. If their timeline is unrealistic, say so kindly."

The result page displays this as a "Flight Plan" with a runway-line waypoint visualisation for the next steps, cost/duration tiles, and medical/finance advisory cards. It's well-designed.

**The problem: to see this, a user has to complete a 7-step form, give their full name and email, and wait for AI generation.** Most people who would benefit from it never get there because the Flight Deck quiz's "next action" CTA — "Take the full Career Readiness Assessment" — is asking them to go from a 2-minute quiz to a 10-minute form.

**Does it lead to more quizzes?** No. The results page has no quiz recommendations. After seeing their AI roadmap, there's nowhere obvious to go except "browse schools" or "download PDF." The quiz suite is completely disconnected from the results experience.

---

## 4. Can we make the quizzes stronger visually?

**Yes — specific improvements:**

**Flight Deck Quiz:**
- The question cards are clean but static. Adding a subtle entrance animation (slide up + fade) on question change would make it feel more alive
- The progress bar is a thin gold line — fine, but a step indicator (●●●○○○○) would feel more satisfying
- The result page score ring is good but the archetype card and barrier/asset cards are plain rectangles. Adding a subtle gradient or glow to the archetype card matching the phase colour would lift it

**QuizPage Suite:**
- Result cards need a shareable moment — a large score display, a distinctive visual, something that looks good as a screenshot
- The "Try another quiz" link at the bottom is tiny. It should be a full card suggesting the next quiz based on what they just completed
- The quiz option cards could use hover micro-animations (slight lift, border glow) — currently they just change border colour

**QuizHub:**
- The featured Flight Deck quiz card is good but the 7 quiz cards below it are small and uniform. Differentiating them by type (personality = warm gradient, trivia = gold, diagnostic = blue) would make the page feel richer

---

## 5. Is the pilot roadmap actually good?

**The free roadmap generator is honest but thin. The AI roadmap in the full assessment is genuinely good.**

### Free Roadmap Generator (`/roadmap`)

5 questions → rules-based scoring → one of 5 fixed result templates (Sponsored Cadet, Integrated, Modular, Hybrid, Future Aviator). Each template has a description, cost, timeline, 3–4 steps, 3 school recommendations, and a "Watch Out" warning.

**What's good:** The content is accurate and well-written. The "Watch Out" warnings are particularly strong — honest, specific, and not something you'd find on a flight school's website. The school recommendations are real and relevant.

**What's thin:**
- 5 questions is not enough to give a genuinely personalised result. Two people with very different situations can get the same template
- The result doesn't know your name, your specific barrier, your age, or your timeline — it just knows your budget and whether you can go full-time
- The email capture is broken (localStorage only)
- There's no AI, no personalisation, no "this is specifically for you" moment

### AI Roadmap in Full Assessment (`/results/:leadId`)

This is genuinely good. It knows your name, your specific barrier, your budget, your medical situation, your preferred route, and your timeline. The AI generates a personalised 5-step plan, cost estimate, route rationale, and medical/finance advisory. The "Flight Plan" section with the runway waypoints visualisation is the best UX on the site.

**The gap:** Most users never see this because the funnel from the free roadmap to the full assessment is weak.

---

## 6. The £4.99 Upgrade — What Should It Be?

Here's the honest framing: **you already have the product — it's the AI roadmap in the full assessment.** The question is what you add to make a paid tier feel worth £4.99 on top of the free version.

The free version gives: AI roadmap, matched schools, PDF download, school introduction requests.

**The paid "Pilot Blueprint Pro" at £4.99 should give:**

### Tier comparison

| Feature | Free (current) | Pro (£4.99) |
|---|---|---|
| AI roadmap | ✓ Basic (5 next steps, route, cost) | ✓ Extended (10 steps, month-by-month timeline, milestone markers) |
| School matching | ✓ Up to 3 schools | ✓ Up to 10 schools with detailed comparison table |
| PDF blueprint | ✓ Basic PDF | ✓ Branded, formatted PDF with all sections, shareable link |
| Finance breakdown | Generic advice | **Personalised funding plan** — specific loan products, amounts, monthly repayment estimates based on their budget |
| Medical deep-dive | 1–2 sentences | **Full medical profile report** — condition-by-condition assessment based on their answers, AME contact list for their region |
| Cadet programme matcher | None | **Personalised cadet programme shortlist** — which programmes they're eligible for based on age, budget, and profile, with application timeline |
| Interview prep pack | None | **Airline interview question bank** — 20 questions specific to their target airline type, with model answers |
| Retake + compare | None | **Unlimited retakes** — retake the assessment in 6 months and compare your score progression |
| Priority school intros | Standard | **Priority introduction** — school receives your full Pro profile, not just basic contact details |

### Why £4.99 works

- It's an impulse buy — less than a coffee, less than a trial lesson, less than any aviation-related purchase they'll ever make
- The person who just completed a 10-minute assessment and got a result they care about is the highest-intent moment to convert
- It's not "pay to see your result" (which would kill trust) — it's "your result is free, but the full blueprint costs less than a pint"
- The finance breakdown and cadet programme matcher are the two highest-value additions — these are things people genuinely can't easily find elsewhere

### Where to place the upsell

**On the results page, immediately after the AI roadmap section.** Not before it — let them see the free roadmap first, then show them what Pro adds. The CTA should be:

> "Your Flight Plan is ready. Upgrade to Pro for the full blueprint — personalised finance plan, cadet programme shortlist, and interview prep pack."
> **£4.99 one-time · Instant access · No subscription**

### What Pro does NOT need to be

- It does not need to be a subscription
- It does not need to be a coaching call (that's a different product at a different price)
- It does not need to be a physical product
- It does not need Stripe integration to be complex — a simple one-time payment, Stripe Checkout, and a results page unlock is the entire implementation

---

## 7. Priority Action List

Ranked by impact-to-effort ratio:

1. **Fix the free roadmap email capture** — it's broken (localStorage only). One afternoon's work, immediately starts capturing leads from the roadmap generator.

2. **Add email capture to the QuizPage suite** — every quiz result should have an email gate (or at minimum an email capture card like the Flight Deck result has). These are warm leads being wasted.

3. **Add a "Try next quiz" card to every quiz result** — based on what they just completed, suggest the most relevant next quiz. This is one data file change and a UI card.

4. **Build the £4.99 Pro upgrade** — the finance breakdown and cadet programme matcher are the two features that justify the price. The rest is presentation. Stripe Checkout + a results page unlock is the MVP.

5. **Add a subtle "quiz → quiz" loop on QuizHub** — after completing any quiz, the hub page should show "You've completed 1 of 7 — try the next one." Gamification without being annoying.

6. **Improve the Flight Deck result page shareability** — the share text is good but the page doesn't look like something you'd screenshot. A larger, bolder score display with the archetype name in a distinctive visual treatment would increase organic sharing.

7. **Connect the quiz suite to the main funnel more explicitly** — the "What Kind of Pilot Are You?" result CTA currently links to `/quiz` generically. It should say "You're an Airline Captain type — take the Career Readiness Assessment to see if your profile matches" with a pre-filled first step.
