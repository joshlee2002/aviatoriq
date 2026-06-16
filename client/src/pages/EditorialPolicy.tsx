import { Helmet } from "react-helmet";
import PublicHeader from "@/components/PublicHeader";
import PublicFooter from "@/components/PublicFooter";

export default function EditorialPolicy() {
  return (
    <>
      <Helmet>
        <title>Editorial Policy | AviatorIQ</title>
        <meta name="description" content="AviatorIQ's editorial policy. Learn how we research, write, fact-check, and update our pilot training guides to ensure accuracy and trustworthiness." />
        <link rel="canonical" href="https://aviatoriq.com/editorial-policy" />
      </Helmet>
      <PublicHeader />
      <main className="min-h-screen" style={{ background: "oklch(0.08 0.07 252)" }}>
        <div className="container py-16 md:py-24 max-w-3xl">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Editorial Policy
          </h1>
          <p className="text-sm mb-12" style={{ color: "oklch(0.5 0.04 240)" }}>
            Last updated: June 2026
          </p>

          <div className="prose prose-invert max-w-none space-y-10" style={{ color: "oklch(0.7 0.04 240)" }}>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Our Mission</h2>
              <p>
                AviatorIQ exists to make accurate, up-to-date pilot training information freely available to everyone. We believe that the cost of becoming a commercial pilot should not be made worse by a lack of clear, trustworthy guidance. Every guide we publish is written with one goal: to give aspiring pilots the information they need to make the best possible decision for their career.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Who Writes Our Guides</h2>
              <p>
                Our content is produced by a team of aviation professionals and specialist writers with direct experience in the industry. Our core editorial team includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Commercial pilots with active ATPL licences (UK CAA, EASA, and FAA)</li>
                <li>Former airline training captains with experience in cadet selection and assessment</li>
                <li>Aviation medical specialists who advise on Class 1 medical content</li>
                <li>Aviation finance specialists who verify cost and salary data</li>
              </ul>
              <p className="mt-3">
                All contributors are identified on our <a href="/about-our-authors" className="text-blue-400 underline">About Our Authors</a> page. No guide is published without review from at least one subject matter expert.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Our Research & Fact-Checking Process</h2>
              <p>
                Every factual claim in our guides is supported by a primary source. We rely on the following authoritative sources:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li><strong>Regulatory bodies:</strong> UK Civil Aviation Authority (CAA), EASA, FAA, CASA (Australia), Transport Canada (TC), and the UAE GCAA.</li>
                <li><strong>Airline official communications:</strong> Careers portals, press releases, and official recruitment pages.</li>
                <li><strong>Industry data:</strong> BALPA salary surveys, Boeing Commercial Market Outlook, IATA reports, and ICAO data.</li>
                <li><strong>Flight school data:</strong> Direct correspondence with Approved Training Organisations (ATOs) to verify costs and fleet details.</li>
              </ul>
              <p className="mt-3">
                We do not publish salary figures, training costs, or regulatory requirements without citing a primary source. Where data is estimated or based on industry consensus, we clearly state this.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">How We Update Our Content</h2>
              <p>
                Aviation is a dynamic industry. Regulations change, airlines open and close cadet programs, and salary benchmarks shift. We are committed to keeping our content current.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>All guides display a <strong>Last Updated</strong> date at the top of the page.</li>
                <li>Our editorial team reviews all guides on a rolling 6-month cycle.</li>
                <li>Guides covering time-sensitive topics (cadet programme status, medical regulations) are reviewed quarterly.</li>
                <li>When a significant regulatory or market change occurs (e.g., a new CAA ruling), we update all affected guides within 7 days.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Commercial Independence</h2>
              <p>
                AviatorIQ generates revenue through partnerships with flight schools and training providers listed in our Flight School Directory. However, our editorial content is completely independent from our commercial relationships.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Flight schools cannot pay to be featured in our editorial guides or to receive positive reviews.</li>
                <li>Our guide content is never influenced by advertising spend or partnership agreements.</li>
                <li>Where we include a flight school in a guide, it is because our editorial team has assessed it as genuinely relevant and high-quality.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Corrections Policy</h2>
              <p>
                We take accuracy seriously. If you believe any information on AviatorIQ is incorrect, outdated, or misleading, please contact us at <a href="mailto:editorial@aviatoriq.com" className="text-blue-400 underline">editorial@aviatoriq.com</a>. We will investigate all corrections requests within 5 business days and publish a correction notice if warranted.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Disclaimer</h2>
              <p>
                The content on AviatorIQ is provided for general informational purposes only. It does not constitute official aviation, medical, legal, or financial advice. Always verify regulatory requirements directly with the relevant authority (CAA, EASA, FAA, CASA, GCAA, or Transport Canada) before making any training or career decisions.
              </p>
            </section>

          </div>
        </div>
      </main>
      <PublicFooter />
    </>
  );
}
