import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function EditorialPolicy() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "oklch(0.10 0.08 252)" }}
    >
      <SEO
        title="Editorial Policy | AviatorIQ"
        description="AviatorIQ's editorial policy. Learn how we research, write, fact-check, and update our pilot training guides to ensure accuracy and trustworthiness."
        canonical="/editorial-policy"
      />
      <PublicNav />
      <main className="flex-1">
        <div
          className="py-10 md:py-14"
          style={{
            background:
              "linear-gradient(160deg, oklch(0.10 0.10 255) 0%, oklch(0.14 0.12 248) 100%)",
          }}
        >
          <div className="container max-w-3xl">
            <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
              Editorial Policy
            </h1>
            <p className="text-sm" style={{ color: "oklch(0.55 0.04 240)" }}>
              Last updated: June 2026
            </p>
          </div>
        </div>

        <div
          className="py-10 px-4"
          style={{ background: "oklch(0.11 0.08 252)" }}
        >
          <div
            className="container max-w-3xl space-y-10"
            style={{ color: "oklch(0.7 0.04 240)" }}
          >
            <section>
              <h2 className="text-xl font-bold text-white mb-3">Our Mission</h2>
              <p className="text-sm leading-relaxed">
                AviatorIQ exists to make accurate, up-to-date pilot training
                information freely available to everyone. We believe that the
                cost of becoming a commercial pilot should not be made worse by
                a lack of clear, trustworthy guidance. Every guide we publish is
                written with one goal: to give aspiring pilots the information
                they need to make the best possible decision for their career.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                Who Writes Our Guides
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                Our content is produced by the AviatorIQ editorial team, drawing
                on publicly available regulatory documentation, official airline
                careers pages, industry salary surveys, and direct
                correspondence with Approved Training Organisations (ATOs).
                Where specialist knowledge is required — for example, in medical
                or regulatory guides — we rely exclusively on primary sources
                from the relevant authority (CAA, EASA, FAA, CASA, Transport
                Canada, or GCAA).
              </p>
              <p className="text-sm leading-relaxed">
                We do not attribute content to named individuals unless their
                credentials can be independently verified. For more information,
                see our{" "}
                <Link
                  href="/about-our-authors"
                  className="text-blue-400 underline"
                >
                  About Our Authors
                </Link>{" "}
                page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                Our Research & Fact-Checking Process
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                Every factual claim in our guides is supported by a primary
                source. We rely on the following authoritative sources:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong className="text-white">Regulatory bodies:</strong> UK
                  Civil Aviation Authority (CAA), EASA, FAA, CASA (Australia),
                  Transport Canada (TC), and the UAE GCAA.
                </li>
                <li>
                  <strong className="text-white">
                    Airline official communications:
                  </strong>{" "}
                  Careers portals, press releases, and official recruitment
                  pages.
                </li>
                <li>
                  <strong className="text-white">Industry data:</strong> BALPA
                  salary surveys, Boeing Commercial Market Outlook, IATA
                  reports, and ICAO data.
                </li>
                <li>
                  <strong className="text-white">Flight school data:</strong>{" "}
                  Direct correspondence with Approved Training Organisations
                  (ATOs) to verify costs and fleet details.
                </li>
              </ul>
              <p className="text-sm leading-relaxed mt-3">
                We do not publish salary figures, training costs, or regulatory
                requirements without citing a primary source. Where data is
                estimated or based on industry consensus, we clearly state this.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                How We Update Our Content
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                Aviation is a dynamic industry. Regulations change, airlines
                open and close cadet programs, and salary benchmarks shift. We
                are committed to keeping our content current.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  All guides display a{" "}
                  <strong className="text-white">Last Updated</strong> date at
                  the top of the page.
                </li>
                <li>
                  Our editorial team reviews all guides on a rolling 6-month
                  cycle.
                </li>
                <li>
                  Guides covering time-sensitive topics (cadet programme status,
                  medical regulations) are reviewed quarterly.
                </li>
                <li>
                  When a significant regulatory or market change occurs (e.g., a
                  new CAA ruling), we update all affected guides within 7 days.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                Commercial Independence
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                AviatorIQ generates revenue through partnerships with flight
                schools and training providers listed in our Flight School
                Directory. However, our editorial content is completely
                independent from our commercial relationships.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  Flight schools cannot pay to be featured in our editorial
                  guides or to receive positive reviews.
                </li>
                <li>
                  Our guide content is never influenced by advertising spend or
                  partnership agreements.
                </li>
                <li>
                  Where we include a flight school in a guide, it is because our
                  editorial team has assessed it as genuinely relevant and
                  high-quality based on publicly available information.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                Corrections Policy
              </h2>
              <p className="text-sm leading-relaxed">
                We take accuracy seriously. If you believe any information on
                AviatorIQ is incorrect, outdated, or misleading, please contact
                us at{" "}
                <a
                  href="mailto:hello@aviatoriq.com"
                  className="text-blue-400 underline"
                >
                  hello@aviatoriq.com
                </a>
                . We will investigate all corrections requests within 5 business
                days and update the guide if warranted.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Disclaimer</h2>
              <p className="text-sm leading-relaxed">
                The content on AviatorIQ is provided for general informational
                purposes only. It does not constitute official aviation,
                medical, legal, or financial advice. Always verify regulatory
                requirements directly with the relevant authority (CAA, EASA,
                FAA, CASA, GCAA, or Transport Canada) before making any training
                or career decisions.
              </p>
            </section>
          </div>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
