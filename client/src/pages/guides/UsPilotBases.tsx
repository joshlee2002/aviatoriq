import { Link } from "wouter";
import GuideLayout from "@/components/GuideLayout";

export default function UsPilotBases() {
  return (
    <GuideLayout
      title="US Airline Pilot Bases 2026: Where to Be Based & How Bases Work"
      subtitle="Your base determines where you live, how much you commute, and your overall quality of life. Here is how US airline bases work, the difference between junior and senior bases, and where the major airlines are stationed in 2026."
      readTime="10 min read"
      author="AviatorIQ Research"
      lastUpdated="June 2026"
      category="Pilot Lifestyle"
      canonical="https://aviatoriq.com/us/guides/us-pilot-training-2026"
      metaDescription="How US airline pilot base assignments work, which bases are most desirable, and how seniority determines where you live and fly in 2026."
      ctaText="Get my free US pilot roadmap"
      ctaHref="/us/roadmap"
      sections={[
        {
          heading: "What is an Airline Pilot Base?",
          content: (
            <>
              <p>
                In the airline industry, a "base" (or domicile) is the airport
                where a pilot's trips begin and end. It is the geographic center
                of your working life. When you report for duty, you report to
                your base. When your trip is over, you are released at your
                base.
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
              <p>Your base dictates almost everything about your lifestyle:</p>
              <ul>
                <li>
                  <strong>Where you live:</strong> If you live in your base
                  city, you can drive to work. If you live elsewhere, you must
                  "commute" by flying standby on other flights to get to work.
                </li>
                <li>
                  <strong>What you fly:</strong> Not every aircraft type is
                  stationed at every base. For example, Delta might base its
                  A350s in Atlanta and Detroit, but not in Salt Lake City.
                </li>
                <li>
                  <strong>Your schedule:</strong> Certain bases have a higher
                  proportion of desirable trips (e.g., international long-haul,
                  or efficient 2-day domestic trips) than others.
                </li>
              </ul>
              <p>
                Choosing an airline is often as much about where their bases are
                located as it is about the pay scale.
              </p>
            </>
          ),
        },
        {
          heading: "How Base Assignments Work (The Role of Seniority)",
          content: (
            <>
              <p>
                When you are hired by an airline, you do not get to simply
                choose where you want to be based. Base assignments are awarded
                strictly by <strong>seniority</strong>.
              </p>
              <p>
                During initial training, new hires submit a "dream sheet"
                ranking their preferred bases and aircraft types. The airline
                then assigns bases based on operational needs, filling the slots
                in order of the new hires' seniority (which is often determined
                by age, the last four digits of their Social Security Number, or
                a random lottery during class).
              </p>
              <p>
                If you do not get your desired base right away, you can put in a
                "transfer bid." As you gain seniority and slots open up at your
                preferred base, you will eventually be awarded the transfer.
                This could take a few months, or it could take years, depending
                on the base.
              </p>
            </>
          ),
        },
        {
          heading: "Junior vs. Senior Bases",
          content: (
            <>
              <p>
                Within every airline, some bases are "junior" and some are
                "senior."
              </p>

              <h3>Junior Bases</h3>
              <p>
                A junior base is one that is generally less desirable to the
                overall pilot group, usually because it is located in a city
                with a very high cost of living (like New York or San
                Francisco). Because senior pilots bid out of these bases, the
                airline is forced to assign new hires to fill the empty slots.
              </p>
              <p>
                <strong>The advantage:</strong> If you are willing to live in or
                commute to a junior base, you will move up the relative
                seniority list much faster. You will hold a better schedule and
                upgrade to Captain much quicker at a junior base like New York
                (JFK/LGA/EWR) than you would at a senior base.
              </p>

              <h3>Senior Bases</h3>
              <p>
                A senior base is highly desirable, usually because it is in a
                city with a lower cost of living, no state income tax, or
                excellent quality of life (like Dallas, Atlanta, or Orlando).
                Pilots tend to transfer into these bases and stay there for
                their entire careers.
              </p>
              <p>
                <strong>The disadvantage:</strong> If you manage to transfer
                into a senior base, you will likely be at the bottom of the
                seniority list for a long time. You will sit reserve and work
                weekends/holidays far longer than your peers at junior bases.
              </p>
            </>
          ),
        },
        {
          heading: "Where are the Major Airlines Based in 2026?",
          content: (
            <>
              <p>
                Here is a breakdown of the primary pilot bases for the "Big
                Four" US airlines.{" "}
                <em>
                  Note: Base footprints change occasionally based on operational
                  needs.
                </em>
              </p>

              <h3>Delta Air Lines</h3>
              <p>
                Delta is heavily concentrated on the East Coast and in the
                Midwest, with its massive global headquarters in Atlanta.
              </p>
              <ul>
                <li>
                  <strong>Primary Bases:</strong> Atlanta (ATL), Detroit (DTW),
                  Minneapolis (MSP), Salt Lake City (SLC), New York (JFK/LGA),
                  Seattle (SEA), Los Angeles (LAX), Boston (BOS).
                </li>
                <li>
                  <strong>Typically Junior:</strong> New York (JFK/LGA).
                </li>
                <li>
                  <strong>Typically Senior:</strong> Atlanta (ATL), Salt Lake
                  City (SLC).
                </li>
              </ul>

              <h3>United Airlines</h3>
              <p>
                United has a very strong presence in major coastal hubs and the
                central US.
              </p>
              <ul>
                <li>
                  <strong>Primary Bases:</strong> Chicago (ORD), Newark (EWR),
                  Houston (IAH), Denver (DEN), San Francisco (SFO), Los Angeles
                  (LAX), Washington Dulles (IAD).
                </li>
                <li>
                  <strong>Typically Junior:</strong> Newark (EWR), San Francisco
                  (SFO).
                </li>
                <li>
                  <strong>Typically Senior:</strong> Houston (IAH), Denver
                  (DEN).
                </li>
              </ul>

              <h3>American Airlines</h3>
              <p>American operates massive hubs in the South and East.</p>
              <ul>
                <li>
                  <strong>Primary Bases:</strong> Dallas/Fort Worth (DFW),
                  Charlotte (CLT), Miami (MIA), Chicago (ORD), Philadelphia
                  (PHL), Phoenix (PHX), Washington National (DCA), New York
                  (JFK/LGA), Los Angeles (LAX).
                </li>
                <li>
                  <strong>Typically Junior:</strong> New York (JFK/LGA).
                </li>
                <li>
                  <strong>Typically Senior:</strong> Dallas/Fort Worth (DFW),
                  Charlotte (CLT).
                </li>
              </ul>

              <h3>Southwest Airlines</h3>
              <p>
                Southwest operates a point-to-point network but still utilizes
                traditional crew bases.
              </p>
              <ul>
                <li>
                  <strong>Primary Bases:</strong> Dallas (DAL), Houston (HOU),
                  Chicago (MDW), Baltimore (BWI), Atlanta (ATL), Denver (DEN),
                  Orlando (MCO), Las Vegas (LAS), Phoenix (PHX), Los Angeles
                  (LAX), Oakland (OAK).
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "The Commuter Lifestyle: Living Out of Base",
          content: (
            <>
              <p>
                If your airline does not have a base in the city where you want
                to live, you will become a "commuter." Nearly half of all US
                airline pilots commute.
              </p>
              <p>
                Commuting means flying standby on other flights (either on your
                own airline or a partner airline) to get to your base before
                your trip starts. This adds significant stress to the job. If
                flights are full or delayed by weather, you might miss your
                report time, which can result in disciplinary action (though
                union contracts offer some "commuter clauses" to protect pilots
                who made a good-faith effort to get to work).
              </p>
              <p>
                Commuting also requires you to rent a "crash pad" — a shared
                apartment near your base airport where you can sleep the night
                before an early trip or while sitting reserve. Living in base is
                universally considered the ultimate quality-of-life upgrade in
                aviation.
              </p>
            </>
          ),
        },
      ]}
      faqSchema={[
        {
          question: "What is an airline pilot base?",
          answer:
            "A pilot base (or domicile) is the specific airport where a pilot begins and ends all of their assigned trips. It is where they must report for duty.",
        },
        {
          question: "Do pilots have to live in their base city?",
          answer:
            "No. Pilots can live anywhere in the country, but if they do not live in their base city, they must 'commute' by flying standby to their base before their shift begins.",
        },
        {
          question: "What makes a pilot base 'junior' or 'senior'?",
          answer:
            "A junior base is usually in a city with a high cost of living (like New York or San Francisco) where senior pilots do not want to live. New hires are often forced into these bases. A senior base is in a desirable, lower-cost city (like Dallas or Atlanta) where pilots transfer and stay for their entire careers.",
        },
        {
          question: "Can I choose my pilot base?",
          answer:
            "You can submit your preferences, but bases are awarded strictly by seniority. If your desired base is full of senior pilots, you will be assigned to a different base until you gain enough seniority to transfer.",
        },
      ]}
      relatedGuides={[
        {
          title: "The Elite Guide to US Pilot Commuting",
          href: "/us/guides/us-pilot-commuting",
          time: "10 min",
        },
        {
          title: "US Airline Pilot Schedule 2026",
          href: "/us/guides/us-pilot-schedule",
          time: "12 min",
        },
        {
          title: "Mastering US Airline Pilot Seniority",
          href: "/us/guides/us-pilot-seniority",
          time: "9 min",
        },
        {
          title: "US Pilot Union & Career Guide",
          href: "/us/guides/us-pilot-training-market-guide",
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
