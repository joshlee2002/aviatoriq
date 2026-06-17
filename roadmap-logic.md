# Pilot Roadmap Generator - Logic Design

## 1. Input Variables (The Questionnaire)

The generator needs to ask the right questions to route the user correctly.

1. **Age Range**
   - 14-17 (Too young to start ATPL, route to PPL/Cadets/Air Cadets)
   - 18-35 (Prime cadet/integrated age)
   - 36-50 (Modular heavily favored due to risk/finance)
   - 51+ (PPL/Hobby or highly specific modular)

2. **Available Budget / Funding**
   - Less than £10k (Needs fully sponsored cadet program or military)
   - £10k - £50k (Modular pay-as-you-go, or Wizz Air WAPA style)
   - £50k - £90k (Full Modular)
   - £90k+ (Integrated or Premium Modular)

3. **Time Availability**
   - Full-time (Can do Integrated or fast-track Modular)
   - Part-time / Need to keep working (Must do Modular)

4. **Educational Background**
   - No GCSEs (Needs to fix this first)
   - GCSEs (Meets minimum for most programs)
   - A-Levels / Degree (Good for legacy cadet programs)

5. **Willingness to Relocate for Training**
   - UK Only (More expensive)
   - Willing to train in EU (Cheaper modular/integrated options)

6. **Medical Status**
   - Haven't checked yet (Must flag Class 1 requirement)
   - Hold Class 1 (Green light)
   - Medical issues (Needs specific advice)

## 2. Output Paths (The Personas)

Based on the inputs, the user is mapped to one of these distinct pathways:

### Path A: The Fully Sponsored Cadet (The Golden Ticket)

- **Criteria:** Age 18-35, Low Budget (<£10k), Full-time, Good Academics
- **Recommendation:** BA Speedbird, Jet2 FlightPath, Air France (if EU), Military (RAF).
- **Reality Check:** <1% acceptance rate. Needs a backup plan (Path B or C).

### Path B: The Fast-Track Integrated (The Direct Route)

- **Criteria:** Age 18-35, High Budget (£90k+), Full-time, UK or EU.
- **Recommendation:** Premium UK/EU Integrated Schools (CAE, Skyborne, FTEJerez, Leading Edge).
- **Reality Check:** High financial risk, but fastest route to the right seat (18-24 months).

### Path C: The Smart Modular (The Flexible Route)

- **Criteria:** Any age, Medium/High Budget (£50k-£90k), Part-time OR Full-time.
- **Recommendation:** Pay-as-you-go modular. Distance learning ATPL, hour building in cheaper EU countries.
- **Reality Check:** Takes longer (2-4 years), requires high self-discipline, but saves £30k+.

### Path D: The Hybrid / Airline-Bonded (The Middle Ground)

- **Criteria:** Age 18-35, Medium Budget (£10k-£50k), Willing to relocate.
- **Recommendation:** Wizz Air Pilot Academy (low upfront, salary deduction) or Ryanair Future Flyer (if budget stretches).
- **Reality Check:** Bonded to an airline for years, but guaranteed job if you pass.

### Path E: The Future Aviator (Too Young)

- **Criteria:** Age < 18.
- **Recommendation:** Air Cadets, University Air Squadrons, PPL first, focus on STEM GCSEs/A-Levels.

## 3. The Result Page Structure

The result page must be highly personalized and shareable:

- **Hero:** "Your Personalized Pilot Roadmap: [Path Name]"
- **Summary:** 3-sentence summary of _why_ this is their path based on their answers.
- **The Numbers:**
  - Estimated Cost: £XX,XXX
  - Estimated Timeline: XX-XX months
  - Financial Risk: Low/Med/High
- **Step-by-Step Action Plan:** 5 concrete steps to take right now.
- **Matched Flight Schools:** 3 specific schools/programs that fit their profile.
- **The "Watch Out For" Section:** Hidden costs or risks for this specific route.
- **CTA:** Book a Class 1 Medical / Download full PDF guide.
