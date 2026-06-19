import GuideLayout from "@/components/GuideLayout";
import { Link } from "wouter";
import GuideScopeBanner from "@/components/GuideScopeBanner";

export default function SimulatorAssessmentGuide() {
  return (
    <GuideLayout
      title="Airline Simulator Assessment Guide: What to Expect"
      subtitle="How to prepare for one of the most stressful parts of airline selection. What raw data flying actually means, and why most candidates fail on CRM, not flying skills."
      canonical="https://aviatorpath.com/guides/airline-simulator-assessment"
      metaDescription="Airline simulator assessment guide: what to expect, raw-data flying, CRM, briefing tips, common failures and practice plan."
      readTime="11 min read"
      lastUpdated="June 2026"
      heroImage="/manus-storage/sim-assessment_9d4c2b8e.jpg"
      ctaHref="/quiz"
      ctaText="Start your career assessment"
      scopeBanner={
        <GuideScopeBanner
          scope="This guide covers simulator assessments for UK and European airlines."
          usHref="/us/guides/airline-interview-usa"
          usLabel="View USA airline interview guide →"
        />
      }
      faqSchema={[
        {
          question: "What is an airline simulator assessment?",
          answer:
            "A simulator assessment is a practical flight test in a full-motion Level D simulator (usually an A320 or B737). It is used by airlines to assess a candidate's basic instrument flying skills, crew resource management (CRM), and ability to learn under pressure.",
        },
        {
          question: "What does 'raw data flying' mean?",
          answer:
            "Raw data flying means flying the aircraft without the flight director (the guidance crosshairs on the primary flight display) or the autopilot. You need to control headings, altitudes and speeds accurately by interpreting the basic instruments yourself.",
        },
        {
          question: "Do I need to know the specific aircraft systems?",
          answer:
            "Generally, no. Unless you already hold a type rating for that aircraft, the assessors do not expect you to know the complex systems or standard operating procedures (SOPs) of the A320 or B737. They will set the aircraft up for you.",
        },
        {
          question: "How should I prepare for a simulator assessment?",
          answer:
            "Book 2–3 hours in a fixed-base or full-motion simulator of the type you will be assessed in. Practice raw data ILS approaches, steep turns, and go-arounds. Most importantly, practice verbalising your thought process to demonstrate good CRM.",
        },
      ]}
      sections={[
        {
          heading: "The Reality of the Simulator Assessment",
          content: (
            <>
              <p>
                The simulator assessment is often one of the most technically
                demanding and stressful stages of airline pilot selection. You
                may be placed in a full-flight or fixed-base simulator —
                typically an Airbus A320 or Boeing 737 — alongside another
                candidate or a training captain.
              </p>
              <p
                className="text-sm p-3 rounded-lg my-3"
                style={{
                  background: "oklch(0.45 0.18 240 / 0.07)",
                  border: "1px solid oklch(0.45 0.18 240 / 0.15)",
                }}
              >
                Before your interview, complete our free{" "}
                <Link href="/quiz" className="text-blue-400 underline">
                  Pilot Career Assessment
                </Link>{" "}
                to identify your strongest attributes and areas to develop.
              </p>
              <p>
                The most common misconception is that the airline expects you to
                fly the jet perfectly. They do not. If you are a 200-hour cadet
                whose only twin-engine experience is in a Diamond DA42, they
                know you will struggle with the inertia and speed of a 70-tonne
                airliner.
              </p>
              <p>
                They are assessing two things: your fundamental instrument
                scanning skills (can you process basic flight data?) and your
                Crew Resource Management (CRM) — how you communicate, manage
                workload, and respond to errors.
              </p>
            </>
          ),
        },
        {
          heading: "Raw Data Flying: What You Will Actually Do",
          content: (
            <>
              <p>
                Many airline assessments include "raw data" flying. This means
                the autopilot, autothrust, and flight directors (the crosshairs
                that tell you where to point the nose) are turned off. You may
                be asked to fly using primary flight instruments without
                flight-director guidance.
              </p>
              <p>A typical 45-minute assessment profile looks like this:</p>
              <ol className="list-decimal pl-5 space-y-2 mt-2 mb-4">
                <li>
                  <strong>
                    Takeoff and Standard Instrument Departure (SID):
                  </strong>{" "}
                  Manual flying to V2+10/V2+15 knots, managing the flap
                  retraction schedule, and navigating the SID using VOR/NDB
                  radials or ATC headings.
                </li>
                <li>
                  <strong>General Handling:</strong> Steep turns (usually 45
                  degrees of bank), climbing and descending turns at specific
                  speeds, and level-offs. This tests your basic scan and ability
                  to trim the aircraft.
                </li>
                <li>
                  <strong>Abnormal Event:</strong> An engine failure (usually
                  after V1) or a system failure that requires you to manage the
                  aircraft while communicating with your pilot monitoring (PM).
                </li>
                <li>
                  <strong>Raw Data ILS Approach:</strong> Flying an Instrument
                  Landing System approach down to minimums without flight
                  directors.
                </li>
                <li>
                  <strong>Go-Around:</strong> Executing a missed approach from
                  minimums, requiring a high workload and precise pitch/power
                  changes.
                </li>
              </ol>
            </>
          ),
        },
        {
          heading: "Why Most Candidates Fail: It Is Not the Flying",
          content: (
            <>
              <p>
                The vast majority of candidates who fail a simulator assessment
                do not fail because they flew a sloppy ILS approach. They fail
                because their CRM broke down under pressure.
              </p>
              <p>
                <strong>The Silent Pilot:</strong> The most common failure mode.
                The candidate gets overwhelmed by the aircraft, develops tunnel
                vision on the instruments, and stops communicating. They do not
                brief the approach, they do not tell the other pilot what they
                are doing, and they ignore callouts.
              </p>
              <p>
                <strong>The Defensive Pilot:</strong> The candidate makes an
                error (e.g., busts an altitude by 200 feet), the assessor points
                it out, and the candidate makes an excuse or gets flustered.
                Assessors want to see you acknowledge the error ("My fault,
                correcting down to 3,000"), fix it, and move on.
              </p>
              <p>
                <strong>The Solo Operator:</strong> The candidate tries to do
                everything themselves — flying, navigating, and talking to ATC —
                rather than delegating tasks to the Pilot Monitoring. In a
                multi-crew environment, failing to use your colleague is a
                critical error.
              </p>
            </>
          ),
        },
        {
          heading: "How to Demonstrate Excellent CRM",
          content: (
            <>
              <p>
                To perform well, aim to demonstrate that you are a safe,
                communicative multi-crew pilot. Here is how:
              </p>
              <p>
                <strong>Think out loud:</strong> Narrate your intentions. "I am
                going to pitch up to 15 degrees and set climb thrust." This
                keeps the other pilot in the loop and shows the assessor your
                thought process.
              </p>
              <p>
                <strong>Brief thoroughly:</strong> Before an approach or
                departure, give a clear, concise brief. "This will be a standard
                takeoff. If we have a failure before V1, I will call stop and
                close the thrust levers. If we have a failure after V1, we will
                continue, climb to 1,500 feet, and I will hand over control to
                you while we run the checklist."
              </p>
              <p>
                <strong>Acknowledge and correct:</strong> If you make a mistake,
                call it out yourself before the assessor does. "Speed is
                dropping, adding thrust." This shows excellent situational
                awareness.
              </p>
            </>
          ),
        },
        {
          heading: "How to Prepare",
          content: (
            <>
              <p>
                Do not walk into an airline simulator assessment without
                understanding basic jet handling expectations if a prep session
                is affordable and relevant. The inertia and pitch/power couples
                of an A320 or B737 are completely different from a Piper Seneca.
              </p>
              <p>
                <strong>Book a prep session:</strong> Book 2–3 hours in a
                fixed-base or full-motion simulator of the type you will be
                assessed in. Many training centres (like Virtual Aviation or Jet
                Masterclass in the UK) offer specific "airline assessment prep"
                sessions with current airline captains. It will cost
                £500–£1,000, but it can be a high-value investment if it matches
                the airline's assessment profile and your budget.
              </p>
              <p>
                <strong>Learn the pitch and power settings:</strong> Ask your
                prep instructor for the standard pitch and power settings for
                the aircraft. (e.g., in a B737, level flight at 210 knots clean
                is roughly 6 degrees nose up and 60% N1). If you know these
                numbers, you can set them and the aircraft will roughly do what
                you want, freeing up your mental capacity for navigation and
                CRM.
              </p>
            </>
          ),
        },
        {
          heading: "References",
          content: (
            <>
              <p className="text-xs text-white/50 space-y-1">
                Airmappr. "Simulator Assessment Guide: What Airlines Test."{" "}
                <em>Career Resources</em>.<br />
                PPRuNe Forums. "The simulator assessment test as part of airline
                interview." <em>Professional Pilot Discussions</em>.
              </p>
            </>
          ),
        },
      ]}
      relatedGuides={[
        {
          title: "Airline Pilot Interview Guide",
          href: "/guides/airline-pilot-interview",
          time: "12 min",
        },
        {
          title: "Pilot Aptitude Test Preparation",
          href: "/guides/pilot-aptitude-test-uk",
          time: "10 min",
        },
        {
          title: "Type Rating: What It Costs",
          href: "/guides/pilot-type-rating-uk",
          time: "11 min",
        },
      ]}
      sources={[
        { name: "UK Civil Aviation Authority (CAA)" },
        { name: "EASA Part-FCL" },
        { name: "BALPA Pay & Conditions Survey" },
      ]}
    />
  );
}
