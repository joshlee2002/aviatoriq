import { Link } from "wouter";
import React from "react";
import GuideLayout from "@/components/GuideLayout";

export default function FaaAtpRequirements() {
  return (
    <GuideLayout
      title="FAA ATP Requirements 2026: Hours, R-ATP, ATP CTP and Airline Eligibility"
      subtitle="A comprehensive overview of the Airline Transport Pilot (ATP) certificate, including eligibility, experience, training, and career pathways in the US pilot market."
      readTime="15 min"
      author="AviatorIQ Research"
      lastUpdated="June 2026"
      category="Pilot Training"
      canonical="https://aviatoriq.com/us/guides/faa-atp-requirements"
      metaDescription="FAA ATP requirements for 2026: 14 CFR Part 61 hours, R-ATP pathways, ATP CTP, costs and airline eligibility considerations."
      ctaText="Check your FAA medical condition"
      ctaHref="/us/medical-lookup"
      sections={[
        {
          heading:
            "Introduction to the Airline Transport Pilot (ATP) Certificate",
          content: (
            <>
              <p>
                The Airline Transport Pilot (ATP) certificate represents the
                pinnacle of pilot certification in the United States, signifying
                the highest level of aeronautical knowledge, experience, and
                skill. It is the mandatory credential for pilots who wish to act
                as a Pilot in Command (PIC) or Second in Command (SIC) in Part
                121 air carrier operations (scheduled airlines) and certain
                other commercial aviation roles. As of 2026, ATP demand remains
                cyclical and airline-specific, influenced by retirements,
                aircraft deliveries, profitability, training capacity and
                regional-airline hiring needs. This guide provides an exhaustive
                examination of the requirements, pathways, and considerations
                for obtaining your ATP certificate, ensuring you are thoroughly
                prepared for a successful career in the flight deck.
              </p>
              <p
                className="text-sm p-3 rounded-lg my-3"
                style={{
                  background: "oklch(0.45 0.18 240 / 0.07)",
                  border: "1px solid oklch(0.45 0.18 240 / 0.15)",
                }}
              >
                Use our free{" "}
                <Link
                  href="/us/medical-lookup"
                  className="text-blue-400 underline"
                >
                  FAA Medical Condition Lookup Tool
                </Link>{" "}
                to check whether a specific condition is likely to affect your
                FAA medical application.
              </p>
              <p>
                Understanding the intricacies of FAA regulations, particularly
                those outlined in 14 CFR Part 61 and Part 141, is crucial. While
                both parts govern pilot certification, they offer distinct
                training methodologies and hour requirements that can
                significantly impact your journey. This guide will delve into
                these differences, alongside the essential aeronautical
                experience, knowledge tests, practical tests, and the mandatory
                Airline Transport Pilot Certification Training Program (ATP
                CTP).
              </p>
            </>
          ),
        },
        {
          heading: "Eligibility and General Requirements for ATP Certification",
          content: (
            <>
              <p>
                To embark on the path to ATP certification, candidates must meet
                several fundamental eligibility criteria established by the
                Federal Aviation Administration (FAA). These requirements ensure
                that only individuals with the requisite maturity, language
                proficiency, and foundational pilot certificates are considered
                for this advanced credential.
              </p>
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">
                      Requirement
                    </th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Age</td>
                    <td className="px-4 py-3 text-white/80">
                      Minimum 23 years old for an unrestricted ATP. For a
                      Restricted ATP (R-ATP), the minimum age is 21.
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">
                      Language Proficiency
                    </td>
                    <td className="px-4 py-3 text-white/80">
                      Must be able to read, speak, write, and understand the
                      English language.
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Moral Character</td>
                    <td className="px-4 py-3 text-white/80">
                      Must be of good moral character.
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">
                      Pilot Certificate
                    </td>
                    <td className="px-4 py-3 text-white/80">
                      Hold a Commercial Pilot Certificate with an Instrument
                      Rating, or a foreign equivalent.
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">
                      Medical Certificate
                    </td>
                    <td className="px-4 py-3 text-white/80">
                      Possess a current FAA First-Class Medical Certificate.
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                The distinction between an unrestricted ATP and a Restricted ATP
                (R-ATP) is particularly significant for aspiring airline pilots.
                The R-ATP allows pilots to serve as First Officers in Part 121
                operations with reduced flight hour requirements, primarily
                benefiting graduates of specific aviation degree programs or
                former military pilots. However, certain limitations apply to
                R-ATP holders, particularly regarding acting as PIC in Part 121
                operations until the full ATP hour requirements are met.
              </p>
            </>
          ),
        },
        {
          heading:
            "Aeronautical Experience: Flight Hour Requirements (14 CFR §61.159)",
          content: (
            <>
              <p>
                The accumulation of flight hours is a cornerstone of ATP
                certification, demonstrating a pilot's practical experience
                across diverse flight conditions and aircraft types. For an
                unrestricted ATP certificate, a minimum of 1,500 hours of total
                flight time as a pilot is required. This total must include
                specific hour breakdowns to ensure comprehensive experience.
              </p>
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">
                      Experience Type
                    </th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">
                      Minimum Hours Required
                    </th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">
                      Total Flight Time
                    </td>
                    <td className="px-4 py-3 text-white/80">1,500 hours</td>
                    <td className="px-4 py-3 text-white/80">As a pilot.</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">
                      Cross-Country Flight Time
                    </td>
                    <td className="px-4 py-3 text-white/80">500 hours</td>
                    <td className="px-4 py-3 text-white/80"></td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">
                      Night Flight Time
                    </td>
                    <td className="px-4 py-3 text-white/80">100 hours</td>
                    <td className="px-4 py-3 text-white/80"></td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">PIC Time</td>
                    <td className="px-4 py-3 text-white/80">250 hours</td>
                    <td className="px-4 py-3 text-white/80">
                      As Pilot in Command, or SIC performing PIC duties under
                      supervision. Includes 100 hours cross-country and 25 hours
                      night.
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">
                      Instrument Flight Time
                    </td>
                    <td className="px-4 py-3 text-white/80">75 hours</td>
                    <td className="px-4 py-3 text-white/80">
                      In actual or simulated instrument conditions.
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">
                      Multi-Engine (for ME ATP)
                    </td>
                    <td className="px-4 py-3 text-white/80">50 hours</td>
                    <td className="px-4 py-3 text-white/80">
                      In the class of airplane for the rating sought. Up to 25
                      hours can be in a full flight simulator.
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                Depending on the exact ATP category/class sought and approved
                training context, some simulator or flight training device time
                may be creditable toward FAA aeronautical experience
                requirements; verify the current 14 CFR §61.159 credit limits
                before planning around simulator time. Careful logging and
                verification of flight hours are paramount throughout this
                process.
              </p>
            </>
          ),
        },
        {
          heading: "Restricted ATP (R-ATP) Pathways",
          content: (
            <>
              <p>
                The R-ATP provides an accelerated pathway for eligible
                candidates to enter airline operations as First Officers. This
                provision addresses the industry's need for pilots while
                maintaining high safety standards. The reduced hour requirements
                are contingent upon specific educational or military
                backgrounds.
              </p>
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">
                      Eligibility
                    </th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">
                      Minimum Total Flight Hours
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">
                      Graduates of a 4-year aviation bachelor's degree program
                      from an FAA-approved institution
                    </td>
                    <td className="px-4 py-3 text-white/80">1,000 hours</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">
                      Graduates of a 2-year aviation associate's degree program
                      from an FAA-approved institution
                    </td>
                    <td className="px-4 py-3 text-white/80">1,250 hours</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">
                      Former military pilots
                    </td>
                    <td className="px-4 py-3 text-white/80">750 hours</td>
                  </tr>
                </tbody>
              </table>
              <p>
                While the R-ATP allows for earlier entry into the airline
                cockpit, pilots operating under an R-ATP certificate are subject
                to certain limitations. They must accumulate the remaining
                flight hours to meet the unrestricted ATP requirements before
                they can act as a Pilot in Command in Part 121 operations. This
                pathway is a strategic option for many aspiring airline pilots,
                offering a structured route to professional aviation.
              </p>
            </>
          ),
        },
        {
          heading: "ATP Certification Training Program (ATP CTP)",
          content: (
            <>
              <p>
                A mandatory prerequisite for taking the ATP knowledge test for
                multi-engine airplanes is the completion of an FAA-approved
                Airline Transport Pilot Certification Training Program (ATP
                CTP). This intensive program is designed to bridge the gap
                between commercial pilot training and the demands of airline
                operations, focusing on multi-crew environments, advanced
                aircraft systems, and complex operational procedures.
              </p>
              <p>The ATP CTP typically consists of:</p>
              <ul>
                <li>
                  At least 30 hours of classroom instruction covering
                  aerodynamics, automation, adverse weather operations, air
                  carrier operations, and leadership/professionalism.
                </li>
                <li>
                  At least 10 hours of flight training in a full flight
                  simulator (FFS) and a flight training device (FTD), including
                  at least 6 hours in an FFS for multi-engine aircraft.
                </li>
              </ul>
              <p>
                As of 2026, the cost for an ATP CTP course generally ranges from{" "}
                <strong>$4,200 to $5,000 USD</strong>, depending on the training
                provider and location. It is a significant investment and is
                required before taking the multiengine ATP knowledge test.
              </p>
            </>
          ),
        },
        {
          heading: "Knowledge and Practical Tests",
          content: (
            <>
              <p>
                Beyond accumulating flight hours and completing the ATP CTP,
                candidates must demonstrate their theoretical knowledge and
                practical flying skills through rigorous FAA examinations.
              </p>
              <h3>ATP Knowledge Test</h3>
              <p>
                After completing the ATP CTP, candidates are eligible to take
                the ATP knowledge test. This computer-based examination assesses
                a broad range of subjects pertinent to airline operations,
                including:
              </p>
              <ul>
                <li>Advanced aerodynamics and aircraft systems</li>
                <li>Air traffic control procedures</li>
                <li>Meteorology and weather services</li>
                <li>Navigation and flight planning</li>
                <li>Emergency operations</li>
                <li>FAA regulations (14 CFR Part 61, 91, 121)</li>
                <li>Human factors and crew resource management (CRM)</li>
              </ul>
              <p>
                A score of 70% or higher is required to pass. The multi-engine
                airplane test (ATM) typically consists of 130 multiple-choice
                questions, while the single-engine airplane test (ATS) has 95
                questions.
              </p>
              <h3>ATP Practical Test (Checkride)</h3>
              <p>
                The final hurdle is the ATP practical test, commonly known as
                the checkride. This test is conducted by an FAA Designated Pilot
                Examiner (DPE) and comprises an oral examination followed by a
                flight evaluation.
              </p>
              <p>
                The oral examination assesses the applicant's advanced
                aeronautical knowledge, decision-making skills, and
                understanding of complex operational scenarios. The flight
                portion evaluates the applicant's ability to safely and
                proficiently operate a transport category aircraft,
                demonstrating mastery of maneuvers, emergency procedures, and
                adherence to air traffic control instructions. The practical
                test is a comprehensive assessment of a pilot's readiness for
                the responsibilities of an airline transport pilot.
              </p>
            </>
          ),
        },
        {
          heading: "Part 61 vs. Part 141 Training for ATP",
          content: (
            <>
              <p>
                The FAA provides two primary regulatory frameworks for flight
                training: Part 61 and Part 141. While both lead to the same ATP
                certificate, they differ significantly in structure, curriculum,
                and flexibility.
              </p>
              <h3>Part 61 Training</h3>
              <p>
                Part 61 is less structured and offers greater flexibility. It
                allows for self-paced training with an authorized instructor,
                making it suitable for individuals who may have irregular
                schedules or prefer a more customized learning experience. While
                the total flight hour requirements remain the same as outlined
                in 14 CFR §61.159, the specific curriculum and sequence of
                training are determined by the instructor and student. This
                pathway often appeals to pilots who are building hours through
                various means, such as flight instructing or other commercial
                operations.
              </p>
              <h3>Part 141 Training</h3>
              <p>
                Part 141 training is conducted at FAA-approved flight schools
                with a structured curriculum, strict attendance requirements,
                and defined course outlines. The primary advantage of Part 141
                programs, especially for aspiring airline pilots, is the
                potential for reduced flight hour requirements for certain
                certificates, including the R-ATP. For example, graduates of a
                Part 141 approved aviation degree program can qualify for an
                R-ATP with fewer than 1,500 hours. These programs are often more
                intensive and designed to prepare students for a career in
                aviation efficiently.
              </p>
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">
                      Feature
                    </th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">
                      Part 61
                    </th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">
                      Part 141
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Structure</td>
                    <td className="px-4 py-3 text-white/80">
                      Flexible, self-paced
                    </td>
                    <td className="px-4 py-3 text-white/80">
                      Structured curriculum, FAA-approved
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">
                      Flight Hour Requirements
                    </td>
                    <td className="px-4 py-3 text-white/80">
                      Standard 1,500 hours for ATP
                    </td>
                    <td className="px-4 py-3 text-white/80">
                      Reduced hours for R-ATP (e.g., 1,000 or 1,250)
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">
                      Instructor Oversight
                    </td>
                    <td className="px-4 py-3 text-white/80">
                      Individual instructor
                    </td>
                    <td className="px-4 py-3 text-white/80">
                      Approved flight school with standardized training
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Suitability</td>
                    <td className="px-4 py-3 text-white/80">
                      Irregular schedules, customized learning
                    </td>
                    <td className="px-4 py-3 text-white/80">
                      Career-focused, accelerated programs
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                Choosing between Part 61 and Part 141 depends on individual
                circumstances, career goals, and learning preferences. Many
                aspiring airline pilots opt for Part 141 programs due to the
                R-ATP benefits and the structured environment that mirrors
                airline training.
              </p>
            </>
          ),
        },
        {
          heading: "Costs Associated with ATP Certification in 2026",
          content: (
            <>
              <p>
                The financial investment required to obtain an ATP certificate
                can be substantial, encompassing flight training, ground school,
                examinations, and the mandatory ATP CTP. While exact figures can
                vary based on location, training provider, and individual
                progress, here's an estimated breakdown for 2026:
              </p>
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">
                      Expense Category
                    </th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">
                      Estimated Cost (USD)
                    </th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">ATP CTP Course</td>
                    <td className="px-4 py-3 text-white/80">$4,200 - $5,000</td>
                    <td className="px-4 py-3 text-white/80">
                      Mandatory for multi-engine ATP knowledge test.
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">
                      ATP Knowledge Test Fee
                    </td>
                    <td className="px-4 py-3 text-white/80">$175 - $200</td>
                    <td className="px-4 py-3 text-white/80">
                      Administered at testing centers.
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">
                      ATP Practical Test (DPE Fee)
                    </td>
                    <td className="px-4 py-3 text-white/80">$800 - $1,500</td>
                    <td className="px-4 py-3 text-white/80">
                      Varies by examiner and region.
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">
                      Flight Training (if needed)
                    </td>
                    <td className="px-4 py-3 text-white/80">Variable</td>
                    <td className="px-4 py-3 text-white/80">
                      Depends on current flight hours and aircraft rental rates.
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">
                      Study Materials/Resources
                    </td>
                    <td className="px-4 py-3 text-white/80">$200 - $500</td>
                    <td className="px-4 py-3 text-white/80">
                      Books, online courses, test prep software.
                    </td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">
                      Medical Certificate
                    </td>
                    <td className="px-4 py-3 text-white/80">$100 - $200</td>
                    <td className="px-4 py-3 text-white/80">
                      First-Class Medical.
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                It's important to consider the overall cost of pilot training
                from zero experience to ATP, which can range from $70,000 to
                $110,000 or more, depending on the chosen pathway (e.g.,
                integrated programs vs. modular training). Many flight schools
                offer financing options, and scholarships are available from
                various aviation organizations to help offset these costs.
              </p>
            </>
          ),
        },
        {
          heading: "Career Opportunities and Major US Airlines Hiring in 2026",
          content: (
            <>
              <p>
                With an ATP certificate, a vast array of career opportunities
                opens up in the dynamic US aviation market. The primary goal for
                many ATP holders is to become an airline pilot, serving as a
                First Officer or Captain for regional or major carriers. Beyond
                the airlines, ATP-certified pilots are also highly sought after
                in corporate aviation, cargo operations, and specialized aerial
                services.
              </p>
              <p>
                As of 2026, the demand for qualified airline pilots remains
                high. Major US airlines are actively recruiting to meet growth
                demands and replace retiring pilots. Some of the prominent
                airlines that are consistently hiring ATP-qualified pilots
                include:
              </p>
              <ul>
                <li>
                  <strong>American Airlines:</strong> Continuously hiring, with
                  a strong cadet program and direct entry pathways.
                </li>
                <li>
                  <strong>Delta Air Lines:</strong> Known for its competitive
                  compensation and benefits, actively recruiting experienced
                  pilots.
                </li>
                <li>
                  <strong>United Airlines:</strong> Expanding its fleet and
                  pilot workforce, offering various career progression
                  opportunities.
                </li>
                <li>
                  <strong>Southwest Airlines:</strong> A major player in the
                  domestic market, frequently hiring pilots with a strong focus
                  on customer service.
                </li>
                <li>
                  <strong>Alaska Airlines:</strong> Growing its network and
                  pilot team, particularly on the West Coast.
                </li>
                <li>
                  <strong>FedEx Express & UPS Airlines:</strong> Leading cargo
                  carriers offering lucrative careers for ATP pilots.
                </li>
              </ul>
              <p>
                Regional airlines also serve as crucial entry points for many
                aspiring ATP pilots, allowing them to build valuable turbine
                time and experience before transitioning to major carriers.
                Airlines like SkyWest Airlines, Republic Airways, and Envoy Air
                are significant employers in this sector.
              </p>
              <p>
                The career outlook for ATP-certified pilots in 2026 is
                exceptionally positive, with competitive salaries, comprehensive
                benefits, and clear pathways for advancement. Continuous
                professional development and maintaining currency with FAA
                regulations are key to a long and successful career.
              </p>
            </>
          ),
        },
      ]}
      faqSchema={[
        {
          question: "What is an Airline Transport Pilot (ATP) certificate?",
          answer:
            "The ATP certificate is the highest level of pilot certification, required to act as Pilot in Command or Second in Command in Part 121 air carrier operations (scheduled airlines) and other commercial roles.",
        },
        {
          question: "What are the age requirements for an ATP certificate?",
          answer:
            "You must be at least 23 years old for an unrestricted ATP. For a Restricted ATP (R-ATP), the minimum age is 21.",
        },
        {
          question: "How many flight hours are required for an ATP?",
          answer:
            "An unrestricted ATP requires a minimum of 1,500 hours of total flight time. Reduced hours apply for R-ATP holders based on specific educational or military backgrounds.",
        },
        {
          question: "What is the ATP CTP, and is it mandatory?",
          answer:
            "The Airline Transport Pilot Certification Training Program (ATP CTP) is a mandatory prerequisite for taking the ATP knowledge test for multi-engine airplanes. It covers advanced airline operations and simulator training.",
        },
        {
          question:
            "What is the difference between Part 61 and Part 141 training?",
          answer:
            "Part 61 training is flexible and self-paced, while Part 141 training is structured and conducted at FAA-approved schools. Part 141 programs can offer reduced flight hour requirements for the R-ATP.",
        },
        {
          question: "What is the estimated cost of the ATP CTP course in 2026?",
          answer:
            "As of 2026, the ATP CTP course generally costs between $4,200 and $5,000 USD.",
        },
        {
          question: "Which major US airlines are hiring ATP pilots in 2026?",
          answer:
            "Major US airlines like American Airlines, Delta Air Lines, United Airlines, Southwest Airlines, and Alaska Airlines are actively hiring ATP-qualified pilots, along with regional carriers such as SkyWest Airlines.",
        },
      ]}
      relatedGuides={[
        {
          title: "How to Become a Pilot in the US",
          href: "/us/guides/how-to-become-a-pilot",
          time: "15 min",
        },
        {
          title: "US Pilot Training Costs 2026",
          href: "/us/guides/pilot-training-costs-usa",
          time: "12 min",
        },
        {
          title: "Understanding the Restricted ATP (R-ATP)",
          href: "/us/guides/atp-certificate-usa",
          time: "10 min",
        },
      ]}
      sources={[
        { name: "FAA" },
        { name: "FAA Aeronautical Information Manual" },
        { name: "Boeing Commercial Market Outlook" },
      ]}
    />
  );
}
