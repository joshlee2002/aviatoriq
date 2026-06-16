import GuideLayout from "@/components/GuideLayout";

export default function UsPilotSchedule() {
  return (
    <GuideLayout
      title="US Airline Pilot Schedule 2026: What a Real Work Month Looks Like"
      subtitle="Forget the 9-to-5. Here is how a US airline pilot's schedule actually works — from FAA Part 117 rest rules and seniority bidding to crash pads and commuting."
      readTime="12 min read"
      author="AviatorIQ Research"
      lastUpdated="June 2026"
      category="Pilot Lifestyle"
      canonical="https://aviatoriq.com/us/guides/us-pilot-schedule"
      metaDescription="What does a US airline pilot schedule look like in 2026? Learn about FAA Part 117 duty limits, seniority bidding, reserve life, line holding, and days off."
      ctaText="Find my training route"
      ctaHref="/quiz"
      sections={[
        {
          heading: "The Reality of an Airline Pilot's Schedule",
          content: (
            <>
              <p>The phrase "banker's hours" does not exist in aviation. Airline pilots work weekends, holidays, early mornings, and red-eye flights. However, they also enjoy stretches of consecutive days off that most corporate employees can only dream of.</p>
              <p>In 2026, the scheduling environment at US airlines is a complex intersection of FAA safety regulations (Part 117), union contracts (ALPA, APA, SWAPA), and the all-powerful seniority list. How much you work, when you work, and where you fly is almost entirely dictated by your seniority number.</p>
              <p>This guide breaks down exactly how a US airline pilot's month is structured, the difference between holding a "line" and sitting "reserve," and the legal limits on how much you can actually fly.</p>
            </>
          )
        },
        {
          heading: "The Golden Rule: Seniority is Everything",
          content: (
            <>
              <p>In the US airline industry, your seniority number determines your entire quality of life. The day you are hired by an airline, you are assigned a number. As older pilots retire and new pilots are hired beneath you, your number improves.</p>
              <p>Every month, airlines publish the available flying schedules (called "lines") for the following month. Pilots bid on these lines based on their preferences (e.g., weekends off, long layovers, specific destinations). The scheduling software then awards these lines in strict seniority order.</p>
              <ul>
                <li><strong>Senior Pilots (Top 20%):</strong> Get exactly what they want. They can hold lines with weekends and holidays off, high-credit trips (more pay for less time away from home), and premium layover destinations.</li>
                <li><strong>Mid-Seniority Pilots:</strong> Get a mix of good and bad. They might get some weekends off, but will likely work holidays.</li>
                <li><strong>Junior Pilots (Bottom 20%):</strong> Get whatever is left over. This usually means working every weekend, every holiday, and sitting "reserve."</li>
              </ul>
            </>
          )
        },
        {
          heading: "Line Holders vs. Reserve Pilots",
          content: (
            <>
              <p>Your monthly schedule will fall into one of two categories: holding a line or sitting reserve.</p>
              
              <h3>Holding a Line</h3>
              <p>A "line holder" has a set schedule for the month. They know exactly which days they are working, what flights they are operating, where they will layover, and which days they are off. A typical line consists of 12 to 16 days of work per month, usually broken up into 3-day or 4-day trips.</p>
              
              <h3>Sitting Reserve</h3>
              <p>Junior pilots are usually assigned "reserve" lines. A reserve pilot does not have assigned flights. Instead, they have assigned "on-call" days. During a reserve block (e.g., 4 days on call), the pilot must be ready to report to the airport within a specific timeframe (usually 2 hours for "short call" or 12+ hours for "long call") if the airline needs them to cover a sick pilot or a disrupted flight.</p>
              <p>Reserve life can be highly unpredictable. You might sit in your apartment for four days and never get called, or you might get called at 3:00 AM to fly a 4-day trip across the country. Because reserve pilots must be able to reach their base airport quickly, commuting while on reserve is extremely difficult and often requires renting a "crash pad" (a shared apartment near the airport).</p>
            </>
          )
        },
        {
          heading: "FAA Part 117: The Legal Limits",
          content: (
            <>
              <p>Before 2014, pilot fatigue was a massive issue in the US. Following the Colgan Air Flight 3407 tragedy, the FAA implemented <strong>Part 117</strong> — a strict set of science-based flight and duty time regulations that govern passenger airline operations.</p>
              <p>Under Part 117, a pilot's schedule is legally capped by the following rules:</p>
              <ul>
                <li><strong>Maximum Flight Time:</strong> 8 or 9 hours per day (depending on start time), 100 hours per 672 consecutive hours (roughly a month), and 1,000 hours per 365 consecutive days.</li>
                <li><strong>Maximum Duty Time:</strong> Duty time (the time from reporting to the airport until the end of the last flight) is capped at 9 to 14 hours per day, depending on the start time and the number of flight segments.</li>
                <li><strong>Minimum Rest:</strong> Pilots must receive a minimum of 10 consecutive hours of rest between duty periods, with an opportunity for at least 8 hours of uninterrupted sleep.</li>
                <li><strong>Weekly Rest:</strong> Pilots must receive at least 30 consecutive hours free from all duty within any 168 consecutive hour period (one week).</li>
              </ul>
              <p>These rules ensure that pilots are rested, but they also make scheduling highly complex. If a flight is delayed by weather, the crew might "time out" (hit their legal duty limit), requiring the airline to find a replacement crew or cancel the flight.</p>
            </>
          )
        },
        {
          heading: "A Typical Month by the Numbers",
          content: (
            <>
              <p>While every airline and fleet is different, a typical month for a line-holding pilot at a US major airline looks like this:</p>
              <table className="w-full text-sm text-left border-collapse my-4">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Metric</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Typical Average</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Days Worked</td><td className="px-4 py-3 text-white/80">12 - 16 days</td><td className="px-4 py-3 text-white/80">Usually grouped into 2, 3, or 4-day trips.</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Days Off</td><td className="px-4 py-3 text-white/80">14 - 18 days</td><td className="px-4 py-3 text-white/80">Senior pilots can often manipulate their schedules to get 18+ days off.</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Flight Hours</td><td className="px-4 py-3 text-white/80">75 - 85 hours</td><td className="px-4 py-3 text-white/80">The actual time spent flying the aircraft.</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Time Away From Base</td><td className="px-4 py-3 text-white/80">250 - 300 hours</td><td className="px-4 py-3 text-white/80">Includes flight time, layovers, and airport sitting time.</td></tr>
                </tbody>
              </table>
              <p>It is crucial to understand the difference between "Flight Hours" and "Time Away From Base." A pilot is only paid their hourly rate for flight hours (plus a small per diem for time away from base). You might be away from home for 72 hours on a 3-day trip, but only log 15 flight hours of actual pay.</p>
            </>
          )
        },
        {
          heading: "The Commuting Factor",
          content: (
            <>
              <p>Your schedule looks vastly different depending on whether you live in your base city (where your trips start and end) or if you commute. An estimated 40-50% of US airline pilots commute by air to their base.</p>
              <p>If you live in base, a 4-day trip means you drive to the airport on Day 1, fly the trip, and drive home on Day 4. You have 3 nights away from home.</p>
              <p>If you commute, you must fly "standby" (non-revenue space available) on another flight to get to your base before your trip starts. If your trip starts early on Day 1, you must commute on Day 0 and sleep in a crash pad or hotel. If your trip ends late on Day 4, you might miss the last flight home and have to commute on Day 5. A 4-day trip suddenly becomes 5 or 6 days away from home, drastically reducing your actual days off.</p>
            </>
          )
        }
      ]}
      faqSchema={[
        { question: "How many days a month do airline pilots work?", answer: "A typical US airline pilot works between 12 and 16 days per month, usually broken into blocks of 3-day or 4-day trips. This leaves 14 to 18 days off per month." },
        { question: "Do pilots get to choose their schedules?", answer: "Yes, but choices are awarded strictly based on seniority. Senior pilots get their first choice of schedules (lines), while junior pilots get whatever is left over or are assigned to on-call reserve duty." },
        { question: "What is a pilot crash pad?", answer: "A crash pad is a shared apartment or house near an airline base airport, rented by commuting pilots. Because junior pilots on reserve must be able to report to the airport quickly (often within 2 hours), they rent a bed in a crash pad to stay in while on call, rather than paying for expensive hotels." },
        { question: "What is the FAA Part 117 rule?", answer: "Part 117 is the FAA regulation that governs flight and duty time limits for passenger airline pilots. It dictates maximum daily flight hours (8-9 hours), maximum duty periods, and mandatory rest periods to prevent pilot fatigue." }
      ]}
      relatedGuides={[
        { title: "US Airline Pilot Bases 2026", href: "/us/guides/us-pilot-training-2026", time: "8 min" },
        { title: "The Elite Guide to US Pilot Commuting", href: "/us/guides/us-pilot-commuting", time: "10 min" },
        { title: "Mastering US Airline Pilot Seniority", href: "/us/guides/us-pilot-seniority", time: "9 min" },
        { title: "Airline Pilot Salary USA 2026", href: "/us/guides/airline-pilot-salary-usa", time: "12 min" }
      ]}
    />
  );
}
