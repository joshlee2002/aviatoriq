import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import { ShieldCheck, BookOpen, Globe, Stethoscope } from "lucide-react";

const teamRoles = [
  {
    icon: BookOpen,
    title: "Aviation Research Team",
    description:
      "Our core research team compiles and maintains all guide content. Every guide is cross-referenced against the relevant regulatory authority (CAA, EASA, FAA, CASA, Transport Canada, or GCAA) before publication. Training cost figures are verified against current school prospectuses. Salary ranges are drawn from BALPA surveys, airline collective agreements, and publicly reported data.",
    sources: [
      "UK CAA Official Publications",
      "EASA Part-FCL Regulations",
      "FAA Aeronautical Information Manual",
      "CASA CASR Part 61",
      "Transport Canada CARs",
      "GCAA UAE Regulations",
    ],
  },
  {
    icon: Globe,
    title: "Country Localisation Reviewers",
    description:
      "Each country cluster (UK, USA, Canada, Australia, Europe, UAE, South Africa, New Zealand) is reviewed by a dedicated researcher with direct knowledge of that market. They verify that local terminology, currency, regulator names, and airline-specific information are accurate for each guide.",
    sources: [
      "Airline official careers pages",
      "National aviation authority websites",
      "Flight school prospectuses",
      "Industry salary surveys",
    ],
  },
  {
    icon: Stethoscope,
    title: "Medical Content Review",
    description:
      "All medical guides (Class 1 Medical, medical condition lookups, colour vision, ADHD) are written directly from the source regulatory documentation published by the relevant authority. We do not paraphrase or interpret medical standards — we link directly to the official AME guidance and EASA/CAA/FAA medical standards documents.",
    sources: [
      "CAA Medical Standards (AMS)",
      "EASA Part-MED",
      "FAA AME Guidance",
      "CASA Medical Standards",
      "GCAA Medical Requirements",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Editorial Standards & Accuracy",
    description:
      "All guides are reviewed before publication against our Editorial Policy. Salary figures, training costs, and regulatory statements must be traceable to a named primary source. Guides are updated on a rolling 6-month cycle, with time-sensitive guides (cadet programme status, medical regulations) reviewed quarterly.",
    sources: [
      "BALPA Pay & Conditions Survey",
      "Boeing Commercial Market Outlook",
      "IATA Workforce Reports",
      "ICAO Global Aviation Training",
    ],
  },
];

export default function AboutOurAuthors() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "oklch(0.10 0.08 252)" }}
    >
      <SEO
        title="About Our Authors | AviatorIQ"
        description="Learn about the AviatorIQ editorial team and how we research, verify, and maintain our pilot training guides across 9 country markets."
        canonical="/about-our-authors"
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
          <div className="container max-w-4xl">
            <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
              About Our Authors
            </h1>
            <p
              className="text-base max-w-2xl"
              style={{ color: "oklch(0.65 0.04 240)" }}
            >
              AviatorIQ guides are produced by a dedicated editorial team that
              researches, verifies, and maintains content across 9 country
              markets. Every factual claim is traceable to a named primary
              source.
            </p>
          </div>
        </div>

        <div
          className="py-10 px-4"
          style={{ background: "oklch(0.11 0.08 252)" }}
        >
          <div className="container max-w-4xl">
            <div className="space-y-6 mb-12">
              {teamRoles.map(role => {
                const Icon = role.icon;
                return (
                  <div
                    key={role.title}
                    className="rounded-2xl p-6 md:p-8"
                    style={{
                      background: "oklch(0.14 0.08 250)",
                      border: "1px solid oklch(1 0 0 / 0.08)",
                    }}
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
                        style={{ background: "oklch(0.45 0.18 240 / 0.15)" }}
                      >
                        <Icon
                          className="w-6 h-6"
                          style={{ color: "oklch(0.65 0.18 240)" }}
                        />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-white mb-2">
                          {role.title}
                        </h2>
                        <p
                          className="text-sm leading-relaxed mb-4"
                          style={{ color: "oklch(0.65 0.04 240)" }}
                        >
                          {role.description}
                        </p>
                        <div>
                          <p
                            className="text-xs font-semibold uppercase tracking-widest mb-2"
                            style={{ color: "oklch(0.45 0.04 240)" }}
                          >
                            Primary Sources Used
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {role.sources.map(s => (
                              <span
                                key={s}
                                className="text-xs px-3 py-1 rounded-full"
                                style={{
                                  background: "oklch(0.45 0.18 240 / 0.1)",
                                  color: "oklch(0.65 0.18 240)",
                                  border:
                                    "1px solid oklch(0.45 0.18 240 / 0.2)",
                                }}
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="p-6 rounded-2xl"
              style={{
                background: "oklch(0.14 0.08 250)",
                border: "1px solid oklch(1 0 0 / 0.08)",
              }}
            >
              <h3 className="text-lg font-bold text-white mb-2">
                Our Editorial Standards
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.6 0.04 240)" }}
              >
                All content on AviatorIQ is reviewed for accuracy before
                publication and updated on a rolling 6-month cycle. For more
                information about how we research and maintain our guides,
                please read our{" "}
                <Link
                  href="/editorial-policy"
                  className="text-blue-400 underline"
                >
                  Editorial Policy
                </Link>
                .
              </p>
              <p
                className="text-sm leading-relaxed mt-3"
                style={{ color: "oklch(0.6 0.04 240)" }}
              >
                If you believe any information is incorrect or outdated, please
                contact us at{" "}
                <a
                  href="mailto:hello@aviatoriq.com"
                  className="text-blue-400 underline"
                >
                  hello@aviatoriq.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
