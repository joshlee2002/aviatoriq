import { ExternalLink, BookOpen } from "lucide-react";

export interface GuideSource {
  /** Display name, e.g. "UK Civil Aviation Authority (CAA)" */
  name: string;
  /** Optional direct URL to the source document */
  url?: string;
}

interface GuideSourcesBoxProps {
  sources: GuideSource[];
  lastReviewed?: string;
}

const REGULATOR_URLS: Record<string, string> = {
  "UK Civil Aviation Authority (CAA)": "https://www.caa.co.uk",
  "CAA": "https://www.caa.co.uk",
  "UK CAA Class 1 medical guidance": "https://www.caa.co.uk/commercial-industry/pilot-licences/medical/apply-for-a-class-1-medical-certificate/",
  "GOV.UK": "https://www.gov.uk",
  "GOV.UK Career Development Loans": "https://www.gov.uk/career-development-loans",
  "EASA": "https://www.easa.europa.eu",
  "EASA Part-FCL": "https://www.easa.europa.eu/en/document-library/regulations/commission-regulation-eu-no-11782011",
  "EASA Easy Access Rules for Aircrew": "https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-aircrew-regulation-eu-no",
  "FAA": "https://www.faa.gov",
  "FAA Aeronautical Information Manual": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/",
  "FAA Guide for Aviation Medical Examiners": "https://www.faa.gov/ame_guide",
  "FAA ATP certification": "https://www.faa.gov/pilots/training/atp",
  "CASA": "https://www.casa.gov.au",
  "CASA pilot licences": "https://www.casa.gov.au/licences-and-certificates/pilots/pilot-licences",
  "CASA medical certificates": "https://www.casa.gov.au/licences-and-certificates/aviation-medicals/learn-about-medical-certificates/classes-1-3-medical-certificates",
  "Transport Canada (TC)": "https://tc.canada.ca/en/aviation",
  "Transport Canada": "https://tc.canada.ca/en/aviation",
  "Transport Canada medical certificates": "https://tc.canada.ca/en/aviation/medical-fitness-aviation/apply-manage-aviation-medical-certificate/medical-certificate-categories",
  "Transport Canada Standard 421": "https://tc.canada.ca/en/corporate-services/acts-regulations/list-regulations/canadian-aviation-regulations-sor-96-433/standards/standard-421-flight-crew-permits-licences-ratings-canadian-aviation-regulations-cars",
  "CAA New Zealand": "https://www.aviation.govt.nz",
  "CAA New Zealand pilot licensing": "https://www.aviation.govt.nz/licensing-and-certification/pilots/pilot-licensing/",
  "CAA New Zealand medical certification": "https://www.aviation.govt.nz/licensing-and-certification/medical-certification/",
  "SACAA": "https://www.caa.co.za",
  "SACAA licensing": "https://www.caa.co.za/industry-information/personnel-licensing/licensing/",
  "SACAA aviation medicine": "https://www.caa.co.za/industry-information/aviation-medicine/",
  "GCAA UAE": "https://www.gcaa.gov.ae",
  "GCAA": "https://www.gcaa.gov.ae",
  "GCAA CAR-FCL": "https://www.gcaa.gov.ae",
  "GCAA CAR-MED": "https://www.gcaa.gov.ae",
  "Emirates Flight Training Academy": "https://www.emiratesflighttrainingacademy.com/en/admissions/",
  "BALPA": "https://www.balpa.org",
  "BALPA Pay & Conditions Survey": "https://www.balpa.org/Pay-Conditions",
  "BALPA financing your training": "https://www.balpa.org/becoming-a-pilot/financing-your-training/",
  "Boeing Commercial Market Outlook": "https://www.boeing.com/commercial/market/commercial-market-outlook/",
  "IATA": "https://www.iata.org",
  "ICAO": "https://www.icao.int",
};

function resolveUrl(source: GuideSource): string | undefined {
  if (source.url) return source.url;
  return REGULATOR_URLS[source.name];
}

/**
 * GuideSourcesBox — renders a "Sources reviewed" panel at the bottom of a guide.
 * Usage:
 *   import GuideSourcesBox from "@/components/GuideSourcesBox";
 *   <GuideSourcesBox
 *     sources={[
 *       { name: "UK Civil Aviation Authority (CAA)" },
 *       { name: "EASA Part-FCL" },
 *     ]}
 *     lastReviewed="June 2026"
 *   />
 */
export default function GuideSourcesBox({ sources, lastReviewed }: GuideSourcesBoxProps) {
  return (
    <div
      className="rounded-2xl p-5 md:p-6 mt-8"
      style={{
        background: "oklch(0.13 0.07 250)",
        border: "1px solid oklch(1 0 0 / 0.07)",
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.65 0.18 240)" }} />
        <span className="text-sm font-semibold text-white">Sources reviewed</span>
        {lastReviewed && (
          <span className="ml-auto text-xs" style={{ color: "oklch(0.45 0.04 240)" }}>
            Last reviewed: {lastReviewed}
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {sources.map((s) => {
          const url = resolveUrl(s);
          return url ? (
            <a
              key={s.name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full no-underline transition-colors"
              style={{
                background: "oklch(0.45 0.18 240 / 0.08)",
                border: "1px solid oklch(0.45 0.18 240 / 0.18)",
                color: "oklch(0.65 0.18 240)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "oklch(0.45 0.18 240 / 0.18)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "oklch(0.45 0.18 240 / 0.08)";
              }}
            >
              {s.name}
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          ) : (
            <span
              key={s.name}
              className="inline-flex items-center text-xs px-3 py-1.5 rounded-full"
              style={{
                background: "oklch(0.45 0.18 240 / 0.08)",
                border: "1px solid oklch(0.45 0.18 240 / 0.18)",
                color: "oklch(0.65 0.18 240)",
              }}
            >
              {s.name}
            </span>
          );
        })}
      </div>
      <p className="text-xs mt-4" style={{ color: "oklch(0.42 0.04 240)" }}>
        All factual claims in this guide are drawn from the primary sources listed above. For the most current information, always verify directly with the relevant regulatory authority. This guide does not constitute official aviation, medical, legal, or financial advice.
      </p>
    </div>
  );
}
