import { Link } from "wouter";
import GuideLayout from "@/components/GuideLayout";
import GuideScopeBanner from "@/components/GuideScopeBanner";

export default function TypeRatingUSA() {
  return (
    <GuideLayout
      title="Airline Type Rating USA Cost: Self-Funded vs. Airline Sponsored in 2026"
      subtitle="The honest breakdown of what a US type rating actually costs, when to self-fund, and when to take the bond — with real numbers from 2026."
      readTime="10 min read"
      ctaHref="/us/roadmap"
      ctaText="Get my free US pilot roadmap"
      lastUpdated="June 2026"
      heroImage="/manus-storage/type-rating-usa_492628c9.jpg"
      category="US Pilot Training"
      canonical="https://aviatoriq.com/us/guides/type-rating-usa"
      metaDescription="Airline type rating costs in the USA for 2026. A320 costs $32k–$42k. Boeing 737 costs $28k–$38k. Real comparison of self-funded vs airline-sponsored options..."
      scopeBanner={
        <>
          <GuideScopeBanner
            scope="This guide covers FAA type ratings in the USA. UK/EASA type ratings work differently."
            usHref="/guides/pilot-type-rating-uk"
            usLabel="View UK type rating guide →"
          />
        </>
      }
      faqSchema={[
        {
          question: "How much does an A320 type rating cost in the USA?",
          answer:
            "A self-funded Airbus A320 type rating in the USA typically costs $32,000–$42,000 in 2026. This covers ground school, simulator time, and the checkride. It does not include travel, accommodation, or retake fees if required.",
        },
        {
          question: "Do US airlines pay for type ratings?",
          answer:
            "Regional airlines (Part 121) frequently sponsor initial type ratings, usually tied to a 1–3 year training bond or contract. Major airlines (Delta, United, American) provide type ratings for new hires, but generally require candidates to already hold an ATP and have extensive turbine experience.",
        },
        {
          question: "What is a training bond?",
          answer:
            "A training bond or promissory note is a contractual agreement where an airline pays for your type rating in exchange for a commitment to stay with them for a set period. If you resign before the period ends, you must repay a prorated portion of the training cost.",
        },
        {
          question: "Should I self-fund my type rating or take a bond?",
          answer:
            "Self-funding is rare in the US Part 121 regional market, as airlines generally provide the rating. Self-funding makes sense if you are targeting specific Part 135 corporate operators, ACMI carriers, or foreign airlines that require an existing type rating for direct entry.",
        },
      ]}
      sections={[
        {
          heading: "What is a Type Rating and Why Does It Cost So Much?",
          content: (
            <>
              <p>
                A type rating is the specific FAA certification required to act
                as Pilot-in-Command (PIC) — and increasingly, Second-in-Command
                (SIC) under Part 121 — of a large jet aircraft like an Airbus
                A320, Boeing 737, or Embraer E175. The FAA requires a type
                rating for any aircraft that is turbojet-powered or has a gross
                weight over 12,500 lbs.
              </p>
              <p
                className="text-sm p-3 rounded-lg my-3"
                style={{
                  background: "oklch(0.45 0.18 240 / 0.07)",
                  border: "1px solid oklch(0.45 0.18 240 / 0.15)",
                }}
              >
                Not sure where to start? Generate your free{" "}
                <Link href="/us/roadmap" className="text-blue-400 underline">
                  personalised US pilot career roadmap
                </Link>{" "}
                to get a clear path from zero to airline.
              </p>
              <p>
                The cost is high because the training is resource-intensive. A
                typical FAA type rating involves 5–7 days of systems ground
                school, followed by 10–15 sessions in a Level C or D full-motion
                simulator (which costs hundreds of dollars per hour to operate),
                and a final practical test (checkride) with an FAA Designated
                Pilot Examiner (DPE) or APD.
              </p>
              <p>
                In the US airline industry, the dynamic around type ratings is
                fundamentally different from Europe. Because of the FAA's
                1,500-hour rule, US regional airlines expect to hire pilots with
                a commercial certificate and 1,500 hours, and the airline itself
                provides the initial type rating (e.g., ERJ-175 or CRJ-900) as
                part of new hire training.
              </p>
            </>
          ),
        },
        {
          heading: "What Does a Type Rating Actually Cost in 2026?",
          content: (
            <>
              <p>
                If you choose to self-fund an initial type rating through an
                independent Part 142 training center (like CAE, FlightSafety, or
                Pan Am), here are the realistic costs for 2026. These figures
                include ground school, simulator time, and the checkride. They
                do not include travel, accommodation, or retake fees.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Aircraft</th>
                      <th className="px-4 py-3 font-semibold">
                        Estimated Cost (USD)
                      </th>
                      <th className="px-4 py-3 font-semibold">Duration</th>
                      <th className="px-4 py-3 font-semibold">
                        Primary US Operators
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">
                        Airbus A320
                      </td>
                      <td className="px-4 py-3">$32,000 – $42,000</td>
                      <td className="px-4 py-3">4–6 weeks</td>
                      <td className="px-4 py-3">
                        United, American, JetBlue, Spirit, Frontier
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">
                        Boeing 737
                      </td>
                      <td className="px-4 py-3">$28,000 – $38,000</td>
                      <td className="px-4 py-3">4–5 weeks</td>
                      <td className="px-4 py-3">
                        Southwest, Alaska, United, American
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">
                        Embraer ERJ-170/190
                      </td>
                      <td className="px-4 py-3">$25,000 – $35,000</td>
                      <td className="px-4 py-3">3–4 weeks</td>
                      <td className="px-4 py-3">Republic, Envoy, SkyWest</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">
                        Bombardier CRJ Series
                      </td>
                      <td className="px-4 py-3">$24,000 – $34,000</td>
                      <td className="px-4 py-3">3–4 weeks</td>
                      <td className="px-4 py-3">SkyWest, Endeavor, PSA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Self-funding an A320 or B737 type rating is common in Europe,
                but highly unusual for a 1,500-hour pilot in the US. US legacy
                carriers (United, Delta, American) hire pilots based on total
                turbine time and experience, not because the applicant bought
                their own type rating. Buying a 737 type rating with 1,500 hours
                of Cessna 172 time will not get you hired at Southwest.
              </p>
            </>
          ),
        },
        {
          heading: "Self-Funded vs. Airline Sponsored: The US Reality",
          content: (
            <>
              <p>
                In the US Part 121 environment, the choice between self-funding
                and airline sponsorship is largely made for you by industry
                norms.
              </p>
              <p>
                <strong>The Standard Path (Airline Sponsored):</strong> You
                reach 1,500 hours (usually by instructing), apply to a regional
                airline like SkyWest, Envoy, or Republic. The airline hires you,
                puts you through their Part 121 training program, and pays for
                your ERJ or CRJ type rating. You are paid a training salary
                during this time.
              </p>
              <p>
                <strong>When to Self-Fund:</strong> Self-funding makes sense
                primarily in the Part 135 (corporate/charter) world. If a
                corporate operator requires a Gulfstream or Citation type rating
                for direct entry, and you have the funds, buying the rating can
                secure the job. It is also used by pilots transitioning from
                military flying who need a civilian ATP and type rating to make
                themselves competitive for major airlines.
              </p>
            </>
          ),
        },
        {
          heading: "Training Bonds and Promissory Notes",
          content: (
            <>
              <p>
                Because regional airlines invest $30,000+ in your initial type
                rating, they protect that investment using training contracts,
                often called promissory notes or training bonds.
              </p>
              <p>
                These agreements stipulate that if you resign before a certain
                period (typically 1 to 3 years), you must repay a prorated
                portion of the training cost. For example, if you sign a
                24-month, $30,000 note and leave for a major airline after 12
                months, you owe the regional airline $15,000.
              </p>
              <p>
                <strong>What to check before signing:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2 mb-4">
                <li>
                  <strong>The total amount:</strong> Is it a realistic
                  reflection of the type rating cost, or is it inflated?
                </li>
                <li>
                  <strong>The proration schedule:</strong> Does the amount owed
                  decrease monthly, or only annually?
                </li>
                <li>
                  <strong>Termination clauses:</strong> What happens if you fail
                  training? What if the airline furloughs you? (You should not
                  owe the bond if the airline lets you go without cause).
                </li>
              </ul>
              <p>
                In 2026, many pilots view these promissory notes simply as the
                cost of doing business. If a major airline offers you a job
                after 18 months, the significant pay increase at the major
                airline usually makes it financially viable to simply pay off
                the remainder of the regional airline's note.
              </p>
            </>
          ),
        },
        {
          heading: "Financing a Self-Funded Type Rating",
          content: (
            <>
              <p>
                If you do find yourself in a situation where self-funding is
                necessary (e.g., for a specific corporate job), financing
                options include personal savings, unsecured personal loans, or
                aviation-specific loans from lenders like AOPA Finance.
              </p>
              <p>
                Interest rates for unsecured aviation loans can range from 8% to
                15% APR. Avoid financing a $35,000 type rating on high-interest
                credit cards. If you do not have a guaranteed job offer
                contingent on the rating, taking on $35,000 of high-interest
                debt is an extreme financial risk.
              </p>
            </>
          ),
        },
      ]}
      relatedGuides={[
        {
          title: "How to Become a Pilot in the USA",
          href: "/us/guides/how-to-become-a-pilot",
          time: "12 min",
        },
        {
          title: "ATP Certificate USA",
          href: "/us/guides/atp-certificate-usa",
          time: "10 min",
        },
        {
          title: "Part 61 vs Part 141",
          href: "/us/guides/part-61-vs-141",
          time: "8 min",
        },
      ]}
      sources={[
        { name: "Federal Aviation Administration (FAA) Part 121 & Part 142" },
        { name: "Airline Pilots Association (ALPA) Contract Data" },
        { name: "Regional Airline Promissory Note Structures (Public Data)" },
      ]}
    />
  );
}
