import GuideLayout from "@/components/GuideLayout";
import { Link } from "wouter";
import GuideScopeBanner from "@/components/GuideScopeBanner";

export default function TuiMPL() {
  return (
    <GuideLayout
      title="TUI MPL Cadet Programme 2026: Important Update"
      subtitle="TUI has officially paused its MPL Cadet scheme for the 2026 intake. Here is what you need to know, why they paused it, and alternative routes to the TUI flight deck."
      canonical="/guides/tui-mpl-cadet-programme"
      metaDescription="TUI MPL Cadet Programme 2026 update. TUI has confirmed they will not run the MPL scheme in 2026 due to reduced pilot demand. Alternative routes and future outlook."
      readTime="8 min read"
      heroImage="/manus-storage/tui-mpl_9d4c2b8e.jpg"
      ctaHref="/tools/cadet-eligibility"
      ctaText="Check other cadet programmes"
      scopeBanner={<GuideScopeBanner scope="This guide covers the UK TUI MPL programme." usHref="/us/guides/united-aviate-program" usLabel="View USA cadet programmes →" />}
      faqSchema={[
        { question: "Is the TUI MPL programme open in 2026?", answer: "No. TUI officially confirmed in early 2026 that they will not be running the MPL Cadet scheme for the 2026 intake, following a review of their pilot demand for Summer 2028." },
        { question: "Why did TUI pause the MPL programme?", answer: "TUI stated that based on their current fleet and operational plans, the MPL scheme is not required to meet their pilot demand for the 2028 summer flying season (which is when 2026 cadets would graduate)." },
        { question: "Will the TUI MPL programme return?", answer: "It is highly likely to return in future years. Airline cadet programmes are cyclical and depend entirely on the airline's long-term fleet planning. When TUI needs a fresh pipeline of First Officers, the programme will reopen." },
        { question: "How else can I become a pilot for TUI?", answer: "TUI actively recruits Direct Entry First Officers (DEFO) who have completed their training independently (either integrated or modular) and hold a frozen ATPL. They also recruit type-rated Boeing 737 pilots." }
      ]}
      sections={[
        {
          heading: "The 2026 Update: Programme Paused",
          content: (
            <>
              <p>
                In a significant shift for the UK cadet market, TUI Airways officially confirmed that they will <strong>not</strong> be running their highly popular MPL (Multi-Crew Pilot Licence) Cadet scheme for the 2026 intake [1].
              </p>
              <p>
                The announcement, made on the TUI Careers portal, stated: <em>"After careful consideration, we've decided not to run our MPL Cadet scheme in 2026. Based on our current plans, the TUI MPL scheme is not required to meet our pilot demand for Summer 2028."</em>
              </p>
              <p>
                Because an MPL programme takes approximately 18–24 months to complete, an intake in 2026 is designed to produce First Officers ready to fly the line for the Summer 2028 season. TUI's internal forecasting indicates they have sufficient crew (or sufficient access to the Direct Entry market) to meet their needs without running a dedicated cadet pipeline this year.
              </p>
            </>
          ),
        },
        {
          heading: "What This Means for Aspiring Cadets",
          content: (
            <>
              <p>
                The pausing of the TUI MPL is disappointing news for many candidates, as it was one of the most highly regarded bonded cadet programmes in the UK, offering a direct route to the Boeing 737 right-hand seat.
              </p>
              <p>
                However, this is a normal part of the aviation cycle. Cadet programmes are not permanent fixtures; they are recruitment tools that airlines turn on and off based on their 3-to-5-year fleet projections. The fact that TUI has paused their programme does not mean the broader pilot shortage is over — it simply means TUI specifically has met its quota for the medium term.
              </p>
            </>
          ),
        },
        {
          heading: "Alternative Cadet Programmes in 2026",
          content: (
            <>
              <p>
                If you were planning to apply for the TUI MPL, you should immediately pivot your focus to the other major UK cadet programmes that are actively recruiting in 2026:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2 mb-4">
                <li><strong>BA Speedbird Academy:</strong> The ultimate prize — fully funded, 160 places available in 2026. Extremely competitive.</li>
                <li><strong>easyJet Generation Pilot:</strong> An MPL programme very similar in structure to the TUI scheme, run through CAE Oxford.</li>
                <li><strong>Jet2 FlightPath:</strong> A fully funded integrated ATPL route run through Skyborne Airline Academy.</li>
                <li><strong>Ryanair Mentored Programme:</strong> A self-funded route through partner schools (FTEJerez, Bartolini) that offers a structured pathway to a Ryanair assessment.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "Alternative Routes into TUI",
          content: (
            <>
              <p>
                The pausing of the cadet programme does not mean TUI has stopped hiring pilots. They continue to recruit through the open market.
              </p>
              <p>
                If your ultimate goal is to fly for TUI (which is highly desirable due to their excellent working culture and the eventual possibility of long-haul Boeing 787 flying), your best route in 2026 is to complete your training independently (either integrated or modular) and apply as a <strong>Direct Entry First Officer (DEFO)</strong>.
              </p>
              <p>
                TUI regularly opens DEFO recruitment windows for pilots who hold a frozen ATPL and have completed an APS MCC (Airline Pilot Standard Multi-Crew Cooperation) course. They also heavily recruit pilots who already hold a Boeing 737 type rating (often hiring pilots who have spent 2–3 years flying the 737 at Ryanair).
              </p>
            </>
          ),
        },
        {
          heading: "References",
          content: (
            <>
              <p className="text-xs text-white/50 space-y-1">
                [1] TUI Careers. "MPL Cadet Programme Update." <em>Official TUI Recruitment Portal</em>, January 2026.<br/>
                [2] FTN Online. "TUI confirms no MPL cadet programme intake for 2026." <em>Flight Training News</em>.
              </p>
            </>
          ),
        }
      ]}
      relatedGuides={[
        { title: "UK Airline Cadet Programmes 2026", href: "/guides/cadet-pilot-programmes-uk", time: "13 min" },
        { title: "easyJet Generation Pilot", href: "/guides/easyjet-generation-pilot", time: "9 min" },
        { title: "BA Speedbird Academy", href: "/guides/ba-speedbird-academy", time: "12 min" },
      ]}
    />
  );
}
