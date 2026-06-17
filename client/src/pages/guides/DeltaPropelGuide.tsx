import GuideLayout from "@/components/GuideLayout";
import { Link } from "wouter";
import GuideScopeBanner from "@/components/GuideScopeBanner";

export default function DeltaPropelGuide() {
  return (
    <GuideLayout
      title="Delta Propel Program: 2026 Requirements & Complete Guide"
      subtitle="How Delta's pilot career path program actually works. The four pathways, the QJO, and what you need to know about the transition to mainline Delta."
      canonical="https://aviatoriq.com/us/guides/delta-propel-program"
      metaDescription="Delta Propel Program 2026 guide. Requirements, the four pathways (Collegiate, CFI, Company, Scholarship), and how to get a Qualified Job Offer to Delta."
      readTime="11 min read"
      lastUpdated="June 2026"
      heroImage="/manus-storage/delta-propel_9d4c2b8e.jpg"
      category="US Pilot Training"
      ctaHref="/us/cadet-eligibility"
      ctaText="Check your US cadet programme eligibility"
      scopeBanner={
        <GuideScopeBanner
          scope="This guide covers the Delta Propel program in the USA."
          globalHref="/guides/cadet-pilot-programmes-uk"
          globalLabel="View UK cadet programmes →"
        />
      }
      faqSchema={[
        {
          question: "What is the Delta Propel program?",
          answer:
            "Delta Propel is a pilot career path program that offers a defined route to a flight deck position at Delta Air Lines. Participants receive a Qualified Job Offer (QJO) and mentorship from an active Delta pilot.",
        },
        {
          question: "What are the four pathways in Delta Propel?",
          answer:
            "The four pathways are: Collegiate (for students at partner universities), CFI (for instructors at partner flight schools like ATP), Company (for current Delta employees), and Scholarship (for diverse candidates nominated by affiliate organisations).",
        },
        {
          question: "Do I get a job at Delta immediately?",
          answer:
            "No. You receive a Qualified Job Offer (QJO) which guarantees a streamlined path to Delta, but you must first build your hours and typically fly for Endeavor Air (Delta's wholly owned regional subsidiary) or another approved route before transitioning to mainline Delta.",
        },
        {
          question: "How many times do I have to interview?",
          answer:
            "The main benefit of Delta Propel is its single interview approach. You only need to interview once with Propel to progress to Endeavor Air and eventually to mainline Delta, provided you meet all performance standards.",
        },
      ]}
      sections={[
        {
          heading: "The Streamlined Path to Delta",
          content: (
            <>
              <p>
                The Delta Propel Pilot Career Path Program is Delta Air Lines'
                official pipeline for recruiting the next generation of
                aviators. Like United Aviate, it is designed to lock in top
                talent early by offering a defined, secure pathway to a major
                airline flight deck.
              </p>
              <p
                className="text-sm p-3 rounded-lg my-3"
                style={{
                  background: "oklch(0.45 0.18 240 / 0.07)",
                  border: "1px solid oklch(0.45 0.18 240 / 0.15)",
                }}
              >
                Not sure if you qualify? Try our free{" "}
                <Link
                  href="/us/cadet-eligibility"
                  className="text-blue-400 underline"
                >
                  US Cadet Eligibility Checker
                </Link>{" "}
                to see which programmes you are likely to be eligible for.
              </p>
              <p>
                The core benefit of the Propel program is the{" "}
                <strong>Qualified Job Offer (QJO)</strong>. If you are accepted
                into Propel, you receive a QJO that details your specific,
                streamlined path to becoming a Delta pilot.
              </p>
              <p>
                Crucially, Propel uses a{" "}
                <strong>single interview approach</strong>. You interview once
                to get into the program. If you pass, you do not have to
                interview again to join Endeavor Air (Delta's regional
                subsidiary), and you do not have to interview again to
                transition to mainline Delta .
              </p>
            </>
          ),
        },
        {
          heading: "The Four Propel Pathways",
          content: (
            <>
              <p>
                You cannot simply apply to Propel off the street. You must be
                affiliated with one of Delta's approved partners. There are four
                distinct pathways into the program:
              </p>
              <p>
                <strong>1. The Collegiate Path:</strong> For students enrolled
                in an aviation degree program at one of Delta's partner
                universities (e.g., Embry-Riddle, UND, Purdue). You apply during
                your junior or senior year. If accepted, you receive a
                Conditional Job Offer to Endeavor Air and build your hours by
                instructing at your university.
              </p>
              <p>
                <strong>2. The CFI Path:</strong> For Certified Flight
                Instructors currently working at one of Propel's affiliate
                flight schools (ATP Flight School, Academy of Aviation, US
                Aviation Academy, or Superior Flight School). You must be a
                current instructor in good standing to apply.
              </p>
              <p>
                <strong>3. The Company Path:</strong> For current Delta
                employees (e.g., flight attendants, ramp agents, mechanics) who
                want to transition to a pilot career. Delta provides support and
                an extended Leave of Absence program to allow employees to
                complete their flight training.
              </p>
              <p>
                <strong>4. The Scholarship Path:</strong> Designed to increase
                diversity in the flight deck. Candidates must be nominated by
                one of Delta's affiliate organisations (such as OBAP, WAI, or
                NGPA). Successful candidates receive flight training at a
                Delta-authorized school and transition to Endeavor Air.
              </p>
            </>
          ),
        },
        {
          heading: "The Transition: From Propel to Mainline",
          content: (
            <>
              <p>
                Getting accepted into Propel does not mean you put on a Delta
                uniform the next day. You must still build your 1,500 hours (or
                R-ATP minimums) and gain Part 121 airline experience.
              </p>
              <p>For most Propel participants, the pathway looks like this:</p>
              <ol className="list-decimal pl-5 space-y-2 mt-2 mb-4">
                <li>
                  <strong>Build Hours:</strong> Work as a CFI at your partner
                  university or flight school until you reach your ATP/R-ATP
                  minimums.
                </li>
                <li>
                  <strong>Join Endeavor Air:</strong> Transition to Endeavor Air
                  (Delta's wholly owned regional airline) as a First Officer.
                </li>
                <li>
                  <strong>Fly for Endeavor:</strong> Build Part 121 turbine
                  experience. You must meet specific flight hour and performance
                  metrics while at Endeavor.
                </li>
                <li>
                  <strong>Transition to Delta:</strong> Once you hit the
                  required milestones at Endeavor, you flow through to mainline
                  Delta as a First Officer.
                </li>
              </ol>
              <p>
                <em>
                  Note: In late 2025/early 2026, there have been discussions in
                  the pilot community regarding structural changes to the Propel
                  program, specifically regarding whether participants can
                  choose regional airlines other than Endeavor. Always verify
                  the current flow-through agreements directly with Delta before
                  committing.
                </em>
              </p>
            </>
          ),
        },
        {
          heading: "The Selection Process",
          content: (
            <>
              <p>
                Because you only interview once, the Propel selection process is
                rigorous. Delta is known for placing a heavy emphasis on
                psychological screening and cultural fit.
              </p>
              <p>
                You must submit a Talent Profile via the internal application
                portal during the specific application windows. The assessment
                typically involves cognitive testing, a comprehensive
                personality inventory, and an interview panel that focuses
                heavily on Crew Resource Management (CRM), leadership, and
                decision-making.
              </p>
              <p>
                You must also hold an FAA First Class Medical Certificate to
                apply.
              </p>
            </>
          ),
        },
        {
          heading: "Propel vs. United Aviate",
          content: (
            <>
              <p>
                The two programs are similar in intent but differ in structure.
              </p>
              <p>
                United Aviate allows participants to fly for a wider variety of
                United Express carriers (CommuteAir, GoJet, Mesa) or Part 135
                operators. Delta Propel funnels candidates primarily through
                Endeavor Air.
              </p>
              <p>
                United Aviate has very strict Pilot-in-Command (Captain) hour
                requirements before you can transition to mainline. Delta's
                transition requirements have historically been tied more closely
                to total time at Endeavor, though both programs continuously
                adjust their flow-through metrics based on airline needs.
              </p>
              <p>
                Both programs offer excellent mentorship, travel privileges, and
                the security of a CJO/QJO.
              </p>
            </>
          ),
        },
        {
          heading: "References",
          content: (
            <>
              <p className="text-xs text-white/50 space-y-1">
                Delta Air Lines. "Propel Pilot Career Path Program."{" "}
                <em>Delta Careers Official Website</em>.
              </p>
            </>
          ),
        },
      ]}
      relatedGuides={[
        {
          title: "United Aviate Program",
          href: "/us/guides/united-aviate-program",
          time: "11 min",
        },
        {
          title: "ATP Flight School Review",
          href: "/us/guides/atp-flight-school-guide",
          time: "11 min",
        },
        {
          title: "How to Become a Pilot in the USA",
          href: "/us/guides/how-to-become-a-pilot",
          time: "12 min",
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
