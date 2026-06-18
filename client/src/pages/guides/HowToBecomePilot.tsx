import GuideLayout from "@/components/GuideLayout";
import GuideScopeBanner from "@/components/GuideScopeBanner";
import FlightSchoolFeesTable from "@/components/tables/FlightSchoolFeesTable";
import CadetProgrammesTable from "@/components/tables/CadetProgrammesTable";
import UKTrainingRouteFlowchart from "@/components/diagrams/UKTrainingRouteFlowchart";
import { Link } from "wouter";

export default function HowToBecomePilot() {
  return (
    <GuideLayout
      title="How to Become a Pilot in the UK (2026 Complete Guide)"
      subtitle="The honest, step-by-step guide to UK pilot training — routes, costs, timelines, medical requirements, and how to get your first airline job. Updated for 2026."
      canonical="https://aviatoriq.com/guides/how-to-become-a-pilot"
      metaDescription="How to become a pilot in the UK in 2026: Class 1 medical, integrated vs modular ATPL, cadet options, costs, timeline and first airline job steps."
      readTime="14 min read"
      lastUpdated="June 2026"
      heroImage="/manus-storage/how-to-become-pilot_a1ed518f.jpg"
      regulatorName="UK CAA Licensing"
      regulatorUrl="https://www.caa.co.uk/commercial-industry/aircraft/pilot-licences/"
      methodologySummary="Licensing pathway data sourced from UK CAA official documentation, verified June 2026."
      methodologyDetail="All licensing requirements, training pathways, and regulatory information in this guide are sourced directly from UK CAA official documentation and BALPA published guidance. No secondary sources or forums were used for regulatory claims."
      methodologySources={[
        {
          name: "UK CAA Pilot Licences",
          url: "https://www.caa.co.uk/commercial-industry/aircraft/pilot-licences/",
        },
        {
          name: "BALPA Becoming a Pilot",
          url: "https://www.balpa.org/becoming-a-pilot/",
        },
      ]}
      ctaHref="/roadmap"
      ctaText="Generate my personalised roadmap"
      faqSchema={[
        {
          question: "How long does it take to become a pilot in the UK?",
          answer:
            "Integrated ATPL training takes 18–24 months full-time. Modular ATPL training typically takes 2–4 years depending on how you balance it with work. From zero experience to airline First Officer usually takes 2–4 years.",
        },
        {
          question: "How much does it cost to become a pilot in the UK?",
          answer:
            "Integrated ATPL training costs £90,000–£115,000 in tuition fees. Modular ATPL training costs £60,000–£80,000. You must also budget for living costs, medicals, exams, and potentially a type rating (£20,000–£30,000).",
        },
        {
          question: "Do I need a degree to become a pilot?",
          answer:
            "No. Airlines do not require a degree. You need GCSEs in Maths, English, and a Science (typically grade C/4 or above), a CAA Class 1 Medical, and an ATPL or MPL licence. A degree can provide a backup career but is not an aviation requirement.",
        },
        {
          question: "What is the minimum age to become a commercial pilot?",
          answer:
            "You must be at least 18 to obtain a Commercial Pilot Licence (CPL) or ATPL. You can start private training earlier (solo at 16, PPL at 17). There is no upper age limit for training, but airline careers are capped by the mandatory retirement age of 65.",
        },
        {
          question: "Can I become a pilot with glasses?",
          answer:
            "Yes. Corrected vision is acceptable for a Class 1 Medical provided your uncorrected vision meets minimum standards and your corrected vision reaches the required level. Laser eye surgery is also accepted by the CAA after a suitable recovery period.",
        },
        {
          question: "Is there a pilot shortage in the UK?",
          answer:
            "Industry forecasts predict long-term global demand, but hiring in the UK is highly cyclical. Treat shortage headlines as context, not a guarantee. Airlines remain highly selective and only hire candidates who meet their strict simulator and interview standards.",
        },
      ]}
      relatedGuides={[
        {
          title: "Pilot Training Costs UK 2026",
          href: "/guides/pilot-training-costs",
          time: "8 min",
        },
        {
          title: "Integrated vs Modular ATPL",
          href: "/guides/integrated-vs-modular",
          time: "9 min",
        },
        {
          title: "Class 1 Medical Guide",
          href: "/guides/class-1-medical",
          time: "7 min",
        },
        {
          title: "BA Speedbird Academy",
          href: "/guides/ba-speedbird-academy",
          time: "10 min",
        },
      ]}
      sources={[
        "UK Civil Aviation Authority (CAA) — Licensing and Medical requirements",
        "BALPA (British Airline Pilots' Association) — Career guidance",
        "Official airline careers portals (BA, easyJet, Ryanair) — June 2026",
      ]}
      sections={[
        {
          heading: "Is 2026 a Good Time to Become a Pilot?",
          content: (
            <>
              <GuideScopeBanner country="UK" regulator="CAA" />
              <p>
                The global aviation industry continues to project long-term
                demand for pilots over the next 20 years. However, aspiring
                pilots must understand that airline hiring is highly cyclical
                and varies by airline, fleet plan, and economic conditions.
                Treat "pilot shortage" headlines as useful context — not a
                guarantee of a job.
              </p>
              <img
                src="/manus-storage/first-officer-job_23328c88.jpg"
                alt="Airline first officer in cockpit"
                className="w-full rounded-xl my-4 object-cover"
                style={{ maxHeight: "320px" }}
              />
              <p>
                In the UK, major carriers like British Airways, easyJet, and
                Ryanair continue to run cadet programmes and hire newly
                qualified pilots. But the financial commitment is substantial
                (£60,000 to £115,000+), the training is demanding, and the
                financial risk sits entirely with the student unless they secure
                a fully funded cadet place.
              </p>
            </>
          ),
        },
        {
          heading: "Step 1: The Class 1 Medical — Do This First",
          content: (
            <>
              <p>
                Before you spend a single pound on flight training, you must
                establish that you can obtain a UK CAA Class 1 Medical
                Certificate. This is the most important step in the entire
                process.
              </p>
              <p>
                The Class 1 Medical is a comprehensive assessment of your
                physical and mental health conducted by a CAA-approved
                Aeromedical Centre (AeMC). It covers vision, hearing,
                cardiovascular health, neurological function, and a range of
                other health indicators.
              </p>
              <p>
                Budget roughly £600–£800 for an initial assessment. Common
                concerns like wearing glasses are often perfectly acceptable
                (corrected vision is allowed). However, conditions like severe
                colour vision deficiency or certain medical histories require
                case-by-case assessment.
              </p>
              <div className="font-semibold text-red-700 bg-red-50 p-3 rounded-lg border border-red-100 my-4">
                Rule #1: Do not pay for flight training until you hold a valid
                Class 1 Medical.
              </div>
            </>
          ),
        },
        {
          heading: "Step 2: Choose Your Training Route",
          content: (
            <>
              <p>
                In the UK, there are two primary routes to a commercial pilot
                licence (frozen ATPL): Integrated and Modular.
              </p>
              <UKTrainingRouteFlowchart />
              <ul className="list-disc list-inside space-y-3 mt-4 mb-6">
                <li>
                  <strong>Integrated ATPL:</strong> A full-time, highly
                  structured course at a single flight school taking 18–24
                  months. It is the most expensive route (typically
                  £90,000–£115,000) but offers the fastest path and, in some
                  cases, direct links to airline cadet pools.
                </li>
                <li>
                  <strong>Modular ATPL:</strong> Training completed in separate
                  phases (PPL, Hour Building, ATPL Theory, CPL, ME/IR). It takes
                  longer (2–4 years) but is significantly cheaper (typically
                  £60,000–£80,000) and allows you to work alongside training to
                  spread the cost.
                </li>
              </ul>
              <p>
                Airlines accept both routes. Your employability depends on your
                first-time pass rates, simulator assessment performance, and
                interview skills — not just which route you took.
              </p>
            </>
          ),
        },
        {
          heading: "Step 3: Check Airline Cadet Programmes",
          content: (
            <>
              <p>
                Before committing to self-funded training, you should look at
                airline cadet programmes. These offer a conditional pathway to a
                First Officer role before you start training, significantly
                reducing your career risk.
              </p>
              <p>
                Below is the verified status of major UK cadet programmes as of
                June 2026:
              </p>
              <CadetProgrammesTable country="UK" className="my-6" />
              <p>
                Competition for these programmes is fierce (often less than a 2%
                acceptance rate). If you are unsuccessful, you can still pursue
                self-funded Integrated or Modular training and apply to airlines
                as a "white-tail" graduate later.
              </p>
            </>
          ),
        },
        {
          heading: "Step 4: Understand the Costs (2026 Reality)",
          content: (
            <>
              <p>
                If you are self-funding, you need a realistic budget. The
                figures below show the typical training fees for UK schools.
              </p>
              <FlightSchoolFeesTable trainingType="all" className="my-6" />
              <p>
                <strong>Crucially:</strong> Training fees are not the total
                cost. You must also budget for living expenses for up to two
                years, CAA exam fees, medicals, equipment, and potentially a
                Type Rating (£20,000–£30,000) if your first airline does not
                fund it.
              </p>
            </>
          ),
        },
        {
          heading: "Step 5: Securing Your First Airline Job",
          content: (
            <>
              <p>
                Graduating with a "frozen ATPL" does not guarantee a job. You
                are now competing against hundreds of other qualified graduates
                for First Officer positions.
              </p>
              <p>
                Airlines will assess your training record (first-time pass rates
                are highly valued), put you through rigorous aptitude and
                psychometric testing, and test your flying skills in a simulator
                assessment.
              </p>
              <p>
                Your first job will likely be flying short-haul routes on an
                Airbus A320 or Boeing 737, or flying regional turboprops.
                Long-haul widebody flying is typically achieved later in your
                career through airline seniority bidding.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
