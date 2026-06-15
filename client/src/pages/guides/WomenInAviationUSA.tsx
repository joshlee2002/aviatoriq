import GuideLayout from "@/components/GuideLayout";
import { Link } from "wouter";
import GuideScopeBanner from "@/components/GuideScopeBanner";

export default function WomenInAviationUSA() {
  return (
    <GuideLayout
      title="Women in Aviation USA: Scholarships, Statistics & How to Become a Pilot (2026)"
      subtitle="The complete guide for women pursuing a pilot career in the USA  -  scholarships, statistics, airline diversity programmes, and practical advice."
      canonical="/us/guides/women-in-aviation-usa"
      metaDescription="Women in aviation USA 2026. Scholarships from WAI, AOPA, Ninety-Nines. Statistics: 7% of US airline pilots are women. Diversity programmes at Delta, United, and Southwest."
      readTime="11 min read"
      heroImage="/manus-storage/women-aviation_9d4c2b8e.jpg"
      category="US Pilot Training"
      ctaHref="/quiz"
      ctaText="Find your training route"
      scopeBanner={<GuideScopeBanner scope="Scholarships and organisations in this guide are primarily US-based." globalHref="/guides/women-in-aviation-uk" globalLabel="View UK guide →" />}
      faqSchema={[
        { question: "What percentage of US airline pilots are women?", answer: "Approximately 7% of commercial airline pilots in the USA are women as of 2026, up from 5% in 2019. The FAA reported that women hold approximately 9% of all US pilot certificates." },
        { question: "Are there scholarships for women wanting to become pilots in the USA?", answer: "Yes. Women in Aviation International (WAI), the Ninety-Nines, AOPA, and several airlines offer scholarships specifically for women pursuing pilot training." },
        { question: "Do US airlines actively recruit female pilots?", answer: "Yes. Delta, United, American, and Southwest all have active diversity and inclusion programmes targeting female pilot candidates. United's Aviate Academy and Delta's Propel programme both have specific outreach to women." }
      ]}
      sections={[
        {
          heading: "The State of Women in US Aviation in 2026",
          content: (
            <>
              <p>
                Progress is being made, but the numbers still tell a stark story. Women hold approximately 9% of all US pilot certificates and represent approximately 7% of commercial airline pilots  -  a figure that has grown steadily but remains far below the proportion of women in the general workforce [1].
              </p>
              <p>
                The aviation industry is acutely aware of this imbalance. With a projected shortage of 24,000 pilots in 2026, airlines simply cannot afford to exclude half the potential talent pool. This has driven a wave of targeted scholarship programmes, diversity initiatives, and outreach campaigns specifically designed to attract women to the profession.
              </p>
            </>
          ),
        },
        {
          heading: "Major Scholarships for Women in US Aviation",
          content: (
            <>
              <p>
                <strong>Women in Aviation International (WAI) Scholarships:</strong> WAI is the largest aviation scholarship programme specifically for women in the world. They award over $1 million in scholarships annually, covering everything from student pilot certificates to advanced ratings and type ratings. The WAI scholarship cycle for 2027 opens June 1, 2026. Applications are highly competitive  -  apply early and follow the instructions exactly [2].
              </p>
              <p>
                <strong>The Ninety-Nines (99s) Scholarships:</strong> The Ninety-Nines is an international organisation of licensed women pilots. They award scholarships through their chapters and at the national level. Scholarships range from PPL training to advanced ratings. Contact your local chapter for current opportunities.
              </p>
              <p>
                <strong>AOPA (Aircraft Owners and Pilots Association):</strong> AOPA offers several scholarships for student pilots, including specific awards for women and underrepresented groups. Their scholarship programme is open annually.
              </p>
              <p>
                <strong>Experimental Aircraft Association (EAA):</strong> EAA offers the Young Eagles scholarship programme and various other awards that are open to women pursuing aviation careers.
              </p>
            </>
          ),
        },
        {
          heading: "Airline Diversity Programmes",
          content: (
            <>
              <p>
                <strong>United Airlines Aviate Academy:</strong> United's official flight training academy actively recruits women and has specific diversity outreach programmes. They partner with organisations like WAI and the Ninety-Nines to identify female candidates.
              </p>
              <p>
                <strong>Delta Air Lines Propel:</strong> Delta's career development programme includes specific diversity initiatives and has partnered with HBCUs and women's colleges to build a more diverse pilot pipeline.
              </p>
              <p>
                <strong>Southwest Airlines:</strong> Southwest has a long-standing reputation for inclusive culture and actively promotes female pilot role models. Their Destination 225° programme has specific diversity goals.
              </p>
              <p>
                <strong>American Airlines Cadet Academy:</strong> American's cadet programme includes diversity scholarships and specific outreach to women and underrepresented groups.
              </p>
            </>
          ),
        },
        {
          heading: "Practical Advice for Women Starting Out",
          content: (
            <>
              <p>
                <strong>Get a discovery flight first.</strong> Many women who become pilots say the moment they sat in a cockpit for the first time was the moment they knew it was right for them. A discovery flight costs $150-$250 and is the best investment you can make before committing to training.
              </p>
              <p>
                <strong>Apply for every scholarship you are eligible for.</strong> WAI, the Ninety-Nines, AOPA, and airline-specific programmes are all worth applying for. The competition is real, but the odds are better than the airline cadet programmes, and the financial benefit can be significant.
              </p>
              <p>
                <strong>Connect with the community.</strong> WAI and the Ninety-Nines both run active communities where female pilots and student pilots share experiences, advice, and support. These networks are genuinely valuable  -  both for practical advice and for the psychological benefit of knowing you are not alone.
              </p>
            </>
          ),
        },
        {
          heading: "References",
          content: (
            <>
              <p className="text-xs text-white/50 space-y-1">
                [1] Federal Aviation Administration (FAA). "US Civil Airmen Statistics." <em>FAA Data & Research</em>.<br/>
                [2] Women in Aviation International (WAI). "WAI2027 Scholarship Cycle." <em>WAI Official Website</em>.
              </p>
            </>
          ),
        }
      ]}
      relatedGuides={[
        { title: "How to Become a Pilot in the USA", href: "/us/guides/how-to-become-a-pilot", time: "12 min" },
        { title: "Pilot Training Costs USA", href: "/us/guides/pilot-training-costs-usa", time: "10 min" },
        { title: "United Aviate Program", href: "/us/guides/united-aviate-program", time: "9 min" },
      ]}
    />
  );
}
