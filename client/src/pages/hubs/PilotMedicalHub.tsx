import SEO from "@/components/SEO";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import { Link } from "wouter";
import {
  Heart,
  ArrowRight,
  AlertTriangle,
  ShieldCheck,
  Info,
} from "lucide-react";

const MEDICAL_GUIDES = [
  {
    title: "UK CAA Class 1 Medical",
    href: "/guides/class-1-medical",
    regulator: "CAA / AeMC",
    description:
      "Full guide to the UK Class 1 medical examination — what is tested, common disqualifiers, and the AeMC process.",
    flag: "🇬🇧",
    key_point: "Required before first solo flight on an ATPL pathway",
  },
  {
    title: "UK Class 1 Medical Disqualifiers",
    href: "/guides/class-1-medical-disqualifiers",
    regulator: "CAA",
    description:
      "Conditions that may affect Class 1 medical certification — including cardiovascular, neurological, and psychiatric conditions.",
    flag: "🇬🇧",
    key_point:
      "Many conditions are assessed case-by-case, not automatic disqualification",
  },
  {
    title: "UK Pilot Eyesight Requirements",
    href: "/guides/pilot-eyesight-requirements",
    regulator: "CAA",
    description:
      "Vision standards for Class 1 medical, corrective lenses, and laser eye surgery considerations.",
    flag: "🇬🇧",
    key_point:
      "Laser eye surgery may be acceptable — CAA/AeMC assessment required",
  },
  {
    title: "ADHD and Pilot Medical (UK)",
    href: "/guides/adhd-pilot-guide",
    regulator: "CAA",
    description:
      "How ADHD is assessed for Class 1 medical certification in the UK. Case-by-case evaluation by the CAA.",
    flag: "🇬🇧",
    key_point:
      "Not an automatic disqualification — specialist assessment required",
  },
  {
    title: "FAA Medical Certificates (USA)",
    href: "/us/guides/faa-medical-guide",
    regulator: "FAA",
    description:
      "FAA First, Second, and Third Class medical certificates — requirements, AME process, and BasicMed.",
    flag: "🇺🇸",
    key_point:
      "First Class required for ATP; Third Class for private operations",
  },
  {
    title: "FAA Class 1 Medical (USA)",
    href: "/us/guides/faa-medical-class-1",
    regulator: "FAA",
    description:
      "Detailed guide to the FAA First Class medical examination — vision, cardiovascular, and neurological standards.",
    flag: "🇺🇸",
    key_point: "Must be renewed every 12 months (under 40) or 6 months (40+)",
  },
  {
    title: "ADHD and FAA Medical (USA)",
    href: "/us/guides/adhd-faa-medical",
    regulator: "FAA",
    description:
      "FAA policy on ADHD, stimulant medications, and the Special Issuance process for pilots.",
    flag: "🇺🇸",
    key_point:
      "Stimulant medications are generally disqualifying — ADHD must be managed without them",
  },
];

const TOOLS = [
  {
    href: "/tools/class-1-medical-check",
    label: "UK Medical Readiness Checker",
    description: "Check common conditions against CAA Class 1 standards",
  },
  {
    href: "/tools/medical-condition-lookup",
    label: "UK Medical Condition Lookup",
    description: "Look up specific conditions and their CAA assessment status",
  },
  {
    href: "/us/tools/medical-condition-lookup",
    label: "US FAA Medical Condition Lookup",
    description: "Look up specific conditions and their FAA assessment status",
  },
];

export default function PilotMedicalHub() {
  return (
    <>
      <SEO
        title="Pilot Medical Requirements 2026 | Class 1 CAA, FAA | AviatorPath"
        description="Complete guide to pilot medical requirements for UK CAA Class 1, FAA medical certificates, ADHD, eyesight, and common disqualifiers. Use our free medical condition lookup tool."
        canonical="https://aviatorpath.com/hubs/pilot-medical"
      />
      <PublicNav />
      <main className="min-h-screen bg-[var(--color-navy)] text-white pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-4 py-1.5 rounded-full mb-4">
              <Heart className="w-4 h-4" />
              Pilot Medical
            </div>
            <h1 className="font-display font-bold text-3xl md:text-5xl mb-4">
              Pilot Medical Requirements
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Medical certification is one of the most important — and most
              misunderstood — parts of pilot training. Find the right guide for
              your country and situation.
            </p>
          </div>

          {/* Critical Disclaimer */}
          <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-5 mb-10 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-300 mb-1">
                Medical Information Disclaimer
              </p>
              <p className="text-sm text-red-200">
                The guides on this page are for general information only. They
                do not constitute medical advice and should not be used to
                self-assess fitness to fly. Medical certification decisions are
                made by Authorised Medical Examiners (AMEs) and the relevant
                regulator (CAA, FAA, EASA, CASA, etc.) on a case-by-case basis.
                If you have a medical condition that may affect your fitness to
                fly, consult an AME before committing to pilot training.
              </p>
            </div>
          </div>

          {/* Key Principle */}
          <div className="bg-white/5 rounded-xl border border-white/10 p-5 mb-10 flex gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white mb-1">
                The Most Important Principle
              </p>
              <p className="text-sm text-white/70">
                <strong>
                  Get a Class 1 medical assessment before committing to pilot
                  training.
                </strong>{" "}
                Many conditions that appear disqualifying are assessed
                case-by-case. Many that appear minor can be more complex. A
                preliminary assessment with a CAA-approved AME or FAA AME costs
                £150–£300 and could save you tens of thousands of pounds in
                training costs if a medical issue is identified early.
              </p>
            </div>
          </div>

          {/* Medical Guides */}
          <h2 className="font-display font-bold text-2xl mb-6">
            Medical Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {MEDICAL_GUIDES.map(guide => (
              <Link key={guide.href} href={guide.href}>
                <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-5 transition-all cursor-pointer group h-full">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{guide.flag}</span>
                      <p className="font-semibold text-white text-sm">
                        {guide.title}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white/60 flex-shrink-0 transition-colors" />
                  </div>
                  <p className="text-xs text-white/40 mb-2">
                    Regulator: {guide.regulator}
                  </p>
                  <p className="text-sm text-white/60 mb-3">
                    {guide.description}
                  </p>
                  <div className="flex gap-2 items-start">
                    <Info className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-blue-300">{guide.key_point}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Tools */}
          <h2 className="font-display font-bold text-2xl mb-4">
            Medical Assessment Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {TOOLS.map(tool => (
              <Link key={tool.href} href={tool.href}>
                <div className="bg-blue-900/30 hover:bg-blue-900/50 border border-blue-500/20 hover:border-blue-500/40 rounded-xl p-4 transition-all cursor-pointer group h-full">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-white text-sm">
                        {tool.label}
                      </p>
                      <p className="text-xs text-white/50 mt-0.5">
                        {tool.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform flex-shrink-0 mt-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* AME Note */}
          <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/20 rounded-xl border border-blue-500/20 p-6">
            <h3 className="font-display font-bold text-lg mb-2">
              Finding an Authorised Medical Examiner (AME)
            </h3>
            <p className="text-sm text-white/70 mb-3">
              In the UK, the CAA maintains a register of Authorised Medical
              Examiners. In the US, the FAA maintains a register of Aviation
              Medical Examiners. Always use an examiner approved by the relevant
              regulator.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.caa.co.uk/our-work/publications/documents/content/ame-register/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                CAA AME Register <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://amsrvs.registry.faa.gov/airmenInquiry/AMEInquiryInit.do"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                FAA AME Locator <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <PublicFooter />
    </>
  );
}
