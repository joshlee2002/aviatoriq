import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import { AlertCircle, Mail, Clock, CheckCircle2 } from "lucide-react";

export default function CorrectionsPolicy() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "oklch(0.10 0.08 252)" }}
    >
      <SEO
        title="Corrections Policy | AviatorIQ"
        description="How AviatorIQ handles factual corrections, updates, and reader feedback on our pilot training guides."
        canonical="/corrections-policy"
      />
      <PublicNav />
      <main className="flex-1">
        {/* Hero */}
        <div
          className="py-10 md:py-14"
          style={{
            background:
              "linear-gradient(160deg, oklch(0.10 0.10 255) 0%, oklch(0.14 0.12 248) 100%)",
          }}
        >
          <div className="container max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "oklch(0.45 0.18 240 / 0.15)" }}
              >
                <AlertCircle
                  className="w-5 h-5"
                  style={{ color: "oklch(0.65 0.18 240)" }}
                />
              </div>
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "oklch(0.65 0.18 240)" }}
              >
                Corrections Policy
              </span>
            </div>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              How We Handle Corrections
            </h1>
            <p
              className="text-base leading-relaxed"
              style={{ color: "oklch(0.65 0.04 240)" }}
            >
              Accuracy is the foundation of everything we publish. When we get
              something wrong, we fix it promptly, transparently, and without
              hiding the correction.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="py-10 md:py-14">
          <div className="container max-w-3xl space-y-8">
            {/* Our commitment */}
            <section
              className="rounded-xl p-6"
              style={{
                background: "oklch(0.14 0.08 250)",
                border: "1px solid oklch(1 0 0 / 0.08)",
              }}
            >
              <h2 className="text-lg font-bold text-white mb-3">
                Our Commitment to Accuracy
              </h2>
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: "oklch(0.65 0.04 240)" }}
              >
                AviatorIQ publishes guides on pilot training, medical standards,
                regulations, costs, and career pathways. This is YMYL (Your
                Money or Your Life) content — mistakes can lead aspiring pilots
                to make costly or unsafe decisions. We take this responsibility
                seriously.
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.65 0.04 240)" }}
              >
                Our editorial process requires all factual claims to be
                traceable to a named primary source (regulator, official airline
                press release, or recognised industry body). Where exact figures
                are not publicly confirmed, we state this explicitly rather than
                estimate.
              </p>
            </section>

            {/* How to report */}
            <section
              className="rounded-xl p-6"
              style={{
                background: "oklch(0.14 0.08 250)",
                border: "1px solid oklch(1 0 0 / 0.08)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Mail
                  className="w-4 h-4"
                  style={{ color: "oklch(0.65 0.18 240)" }}
                />
                <h2 className="text-lg font-bold text-white">
                  How to Report a Correction
                </h2>
              </div>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "oklch(0.65 0.04 240)" }}
              >
                If you believe any information on AviatorIQ is factually
                incorrect, outdated, or misleading, please contact us at{" "}
                <a
                  href="mailto:corrections@aviatoriq.com"
                  className="underline hover:opacity-80"
                  style={{ color: "oklch(0.65 0.18 240)" }}
                >
                  corrections@aviatoriq.com
                </a>{" "}
                with the following:
              </p>
              <ul
                className="space-y-2 text-sm"
                style={{ color: "oklch(0.65 0.04 240)" }}
              >
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: "oklch(0.65 0.18 145)" }}
                  />
                  <span>The URL of the page containing the error</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: "oklch(0.65 0.18 145)" }}
                  />
                  <span>
                    The specific text or figure you believe is incorrect
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: "oklch(0.65 0.18 145)" }}
                  />
                  <span>
                    A link to the official source that contradicts the
                    information (e.g. CAA, FAA, official airline press release)
                  </span>
                </li>
              </ul>
            </section>

            {/* Timeline */}
            <section
              className="rounded-xl p-6"
              style={{
                background: "oklch(0.14 0.08 250)",
                border: "1px solid oklch(1 0 0 / 0.08)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Clock
                  className="w-4 h-4"
                  style={{ color: "oklch(0.65 0.18 240)" }}
                />
                <h2 className="text-lg font-bold text-white">
                  Our Response Timeline
                </h2>
              </div>
              <div className="space-y-3">
                {[
                  {
                    label: "Acknowledgement",
                    time: "Within 2 business days",
                    detail:
                      "We will acknowledge receipt of your correction report.",
                  },
                  {
                    label: "Investigation",
                    time: "Within 5 business days",
                    detail:
                      "We will verify the claim against the primary source you provide and our own research.",
                  },
                  {
                    label: "Correction (if confirmed)",
                    time: "Within 7 business days",
                    detail:
                      "If the error is confirmed, we will update the guide and add a correction note at the bottom of the page.",
                  },
                  {
                    label: "Rejection (if not confirmed)",
                    time: "Within 7 business days",
                    detail:
                      "If we cannot confirm the error, we will explain our reasoning and cite the sources we relied on.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: "oklch(0.45 0.18 240)" }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {step.label}{" "}
                        <span
                          className="font-normal text-xs"
                          style={{ color: "oklch(0.55 0.04 240)" }}
                        >
                          — {step.time}
                        </span>
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: "oklch(0.55 0.04 240)" }}
                      >
                        {step.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* How corrections are marked */}
            <section
              className="rounded-xl p-6"
              style={{
                background: "oklch(0.14 0.08 250)",
                border: "1px solid oklch(1 0 0 / 0.08)",
              }}
            >
              <h2 className="text-lg font-bold text-white mb-3">
                How Corrections Are Marked
              </h2>
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: "oklch(0.65 0.04 240)" }}
              >
                When a factual correction is made to a published guide, we add a
                correction note at the bottom of the page stating:
              </p>
              <div
                className="rounded-lg p-3 text-xs font-mono"
                style={{
                  background: "oklch(0.1 0.06 250)",
                  border: "1px solid oklch(1 0 0 / 0.1)",
                  color: "oklch(0.65 0.04 240)",
                }}
              >
                Correction [date]: [Original text] has been updated to
                [corrected text]. Source: [official source URL].
              </div>
              <p
                className="text-sm leading-relaxed mt-3"
                style={{ color: "oklch(0.65 0.04 240)" }}
              >
                We do not silently delete or overwrite incorrect information
                without acknowledgement. Transparency about corrections is part
                of our editorial standards.
              </p>
            </section>

            {/* Related */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/editorial-policy"
                className="text-sm underline hover:opacity-80"
                style={{ color: "oklch(0.65 0.18 240)" }}
              >
                Editorial Policy
              </Link>
              <Link
                href="/how-we-review-pilot-training-information"
                className="text-sm underline hover:opacity-80"
                style={{ color: "oklch(0.65 0.18 240)" }}
              >
                How We Review Information
              </Link>
              <Link
                href="/about-our-authors"
                className="text-sm underline hover:opacity-80"
                style={{ color: "oklch(0.65 0.18 240)" }}
              >
                About Our Authors
              </Link>
            </div>
          </div>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
