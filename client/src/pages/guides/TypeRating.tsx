import GuideLayout from "@/components/GuideLayout";
import { Link } from "wouter";

const TypeRating = () => {
  return (
    <GuideLayout
      title="Pilot Type Ratings UK: What They Are, What They Cost, and How to Get One (2026)"
      subtitle="Everything you need to know about type ratings — A320, B737, and beyond — including self-funded vs airline-sponsored options."
      canonical="/guides/pilot-type-rating-uk"
      metaDescription="What is a pilot type rating? How much does an A320 or B737 type rating cost in the UK in 2026? Self-funded vs airline-sponsored. Complete guide for aspiring airline pilots."
      faqSchema={[
        { question: "What is a type rating for pilots?", answer: "A type rating is an additional qualification that authorises a pilot to fly a specific aircraft type. Commercial airliners require a type rating because they are too complex and expensive to train on during initial pilot training. Common type ratings include the A320 family and B737 family." },
        { question: "How much does a type rating cost in the UK?", answer: "A self-funded type rating costs £20,000–£35,000 in the UK in 2026, depending on the aircraft type and training provider. An A320 type rating typically costs £25,000–£30,000. Some airlines sponsor type ratings in exchange for a bond." },
        { question: "Do I need a type rating before applying to airlines?", answer: "Not always. Some airlines hire pilots without a type rating and provide training as part of their induction. However, having a type rating significantly improves your chances of being hired, as it reduces the airline's training costs. In a competitive market, a self-funded type rating can be the deciding factor." },
        { question: "Which type rating should I get?", answer: "The A320 family (A319/A320/A321) is the most widely used narrow-body aircraft in Europe and gives you the widest range of job opportunities. The B737 family is also widely used. Your choice should be based on which aircraft the airlines you want to work for operate." },
        { question: "How long does a type rating take?", answer: "A type rating course typically takes 6–8 weeks, including ground school, simulator training, and a skills test. The course is intensive and requires full-time commitment." },
      ]}
      readTime="7 min read"
      heroImage="/manus-storage/type-rating_e790e1aa.jpg"
      ctaHref="/roadmap"
      ctaText="Generate my personalised roadmap"
      sections={[
        {
          heading: "What Is a Type Rating and Why Do You Need One?",
          content: (
            <>
              <p>
                A type rating is an endorsement on your pilot licence that authorises you to fly a specific aircraft type. All commercial airliners — the Airbus A320, Boeing 737, Embraer E-Jets, and others — require a type rating because they are too complex, expensive, and safety-critical to be included in initial pilot training.
              </p>
              <img src="/manus-storage/a320-simulator_8f3e2c1a.jpg" alt="A320 type rating simulator" className="w-full rounded-xl my-4 object-cover" style={{ maxHeight: "320px" }} />
              <img src="/manus-storage/b737-cockpit_4e9f2b7a.jpg" alt="Boeing 737 cockpit" className="w-full rounded-xl my-4 object-cover" style={{ maxHeight: "320px" }} />
              <p>
                Your ATPL (frozen or full) qualifies you to act as a commercial pilot. Your type rating qualifies you to fly a specific aircraft. Without both, you cannot work as an airline first officer. The type rating is the final, and often most expensive, step between your ATPL and your first airline job.
              </p>
            </>
          ),
        },
        {
          heading: "Type Rating Costs in 2026",
          content: (
            <>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }}>
                  <thead>
                    <tr style={{ backgroundColor: "oklch(0.18 0.08 250)" }}>
                      <th style={{ border: "1px solid oklch(1 0 0 / 0.1)", padding: "10px", textAlign: "left", color: "oklch(0.85 0.04 240)" }}>Aircraft Type</th>
                      <th style={{ border: "1px solid oklch(1 0 0 / 0.1)", padding: "10px", textAlign: "left", color: "oklch(0.85 0.04 240)" }}>Self-Funded Cost</th>
                      <th style={{ border: "1px solid oklch(1 0 0 / 0.1)", padding: "10px", textAlign: "left", color: "oklch(0.85 0.04 240)" }}>Duration</th>
                      <th style={{ border: "1px solid oklch(1 0 0 / 0.1)", padding: "10px", textAlign: "left", color: "oklch(0.85 0.04 240)" }}>UK Airlines Using</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Airbus A320 family", "£25,000–£30,000", "6–8 weeks", "easyJet, BA, Jet2, TUI, Wizz"],
                      ["Boeing 737 family", "£22,000–£28,000", "6–8 weeks", "Ryanair, TUI, Jet2"],
                      ["ATR 42/72", "£15,000–£20,000", "5–7 weeks", "Loganair, Eastern, regional"],
                      ["Embraer E-Jet", "£18,000–£24,000", "6–8 weeks", "BA CityFlyer, Flybe"],
                      ["Bombardier Q400", "£16,000–£22,000", "5–7 weeks", "Loganair, regional"],
                    ].map(([type, cost, dur, airlines]) => (
                      <tr key={type}>
                        <td style={{ border: "1px solid oklch(1 0 0 / 0.08)", padding: "10px", color: "oklch(0.85 0.04 240)", fontWeight: "600" }}>{type}</td>
                        <td style={{ border: "1px solid oklch(1 0 0 / 0.08)", padding: "10px", color: "oklch(0.75 0.04 240)" }}>{cost}</td>
                        <td style={{ border: "1px solid oklch(1 0 0 / 0.08)", padding: "10px", color: "oklch(0.75 0.04 240)" }}>{dur}</td>
                        <td style={{ border: "1px solid oklch(1 0 0 / 0.08)", padding: "10px", color: "oklch(0.75 0.04 240)" }}>{airlines}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                The A320 type rating is the most valuable investment for most UK candidates because it opens the widest range of opportunities. easyJet, British Airways, Jet2, TUI, and Wizz Air all operate A320-family aircraft, meaning an A320 type rating is accepted by the majority of UK airlines.
              </p>
            </>
          ),
        },
        {
          heading: "Self-Funded vs Airline-Sponsored Type Ratings",
          content: (
            <>
              <p>
                There are two ways to obtain a type rating: self-fund it before applying to airlines, or get an airline to sponsor it as part of their hiring process.
              </p>
              <p>
                <strong>Self-funded type rating:</strong> You pay £25,000–£30,000 for an A320 or B737 type rating at an approved training centre (CAE, L3Harris, Lufthansa Aviation Training). You then apply to airlines with a type rating already on your licence. This significantly increases your chances of being hired, as the airline's training costs are lower. The downside is the upfront cost.
              </p>
              <p>
                <strong>Airline-sponsored type rating:</strong> Some airlines hire pilots without a type rating and provide training as part of their induction. This is more common during pilot shortages, when airlines cannot afford to be selective. The training is typically bonded — you agree to stay with the airline for 3–5 years or repay the cost.
              </p>
              <p>
                In the current market (2026), both routes are viable. If you have the funds, a self-funded type rating gives you more flexibility and a stronger application. If you do not, applying to airlines that offer sponsored type ratings is a legitimate alternative.
              </p>
            </>
          ),
        },
        {
          heading: "Where to Do Your Type Rating",
          content: (
            <>
              <p>
                Type rating training must be conducted at a CAA-approved Type Rating Training Organisation (TRTO). The main providers in the UK and Europe are:
              </p>
              <p>
                <strong>CAE (Oxford, Amsterdam, Madrid):</strong> The world's largest aviation training company. CAE operates full-flight simulators for all major aircraft types and is approved by virtually every airline. Their type rating courses are comprehensive and well-regarded. Costs are at the higher end of the market.
              </p>
              <p>
                <strong>L3Harris CTC (Southampton):</strong> One of the UK's leading type rating providers, with strong airline relationships. L3Harris has a good track record of placing graduates into airline jobs.
              </p>
              <p>
                <strong>Lufthansa Aviation Training (Munich, Frankfurt):</strong> High-quality training with strong European airline connections. Worth considering if you are targeting European carriers.
              </p>
              <p>
                <strong>Bartolini Air (Poland):</strong> A cost-effective option for type rating training, particularly for the A320. Bartolini has a strong relationship with Ryanair and other European LCCs.
              </p>
              <p>
                Use the <Link href="/roadmap">AviatorIQ Roadmap Generator</Link> to see where a type rating fits in your specific training plan and get a cost estimate for your chosen route.
              </p>
            </>
          ),
        },
      ]}
    />
  );
};

export default TypeRating;
