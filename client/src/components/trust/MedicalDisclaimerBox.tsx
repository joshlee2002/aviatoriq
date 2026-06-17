/**
 * MedicalDisclaimerBox.tsx
 * Mandatory disclaimer for all medical guides.
 * Must be rendered at the top of any guide touching Class 1/2/3 medical standards,
 * medical conditions, colour vision, ADHD, or any health-related pilot eligibility content.
 */

import React from "react";
import { Stethoscope } from "lucide-react";

export interface MedicalDisclaimerBoxProps {
  /** Which authority to reference — defaults to UK CAA */
  authority?: "UK CAA" | "FAA" | "EASA" | "CASA" | "Transport Canada" | "GCAA";
  /** Optional custom text to append after the standard disclaimer */
  additionalNote?: string;
  className?: string;
}

const authorityLinks: Record<
  string,
  { name: string; url: string; ameNote: string }
> = {
  "UK CAA": {
    name: "UK Civil Aviation Authority (CAA)",
    url: "https://www.caa.co.uk/medical/",
    ameNote:
      "an Approved Medical Examiner (AME) or Aeromedical Centre (AeMC) approved by the UK CAA",
  },
  FAA: {
    name: "Federal Aviation Administration (FAA)",
    url: "https://www.faa.gov/licenses_certificates/medical_certification/",
    ameNote: "an FAA Aviation Medical Examiner (AME)",
  },
  EASA: {
    name: "European Union Aviation Safety Agency (EASA)",
    url: "https://www.easa.europa.eu/en/domains/aircrew/medical",
    ameNote:
      "an EASA-approved AME or Aeromedical Centre (AeMC) in your member state",
  },
  CASA: {
    name: "Civil Aviation Safety Authority (CASA)",
    url: "https://www.casa.gov.au/licences-and-certificates/medical-certificates",
    ameNote: "a CASA Designated Aviation Medical Examiner (DAME)",
  },
  "Transport Canada": {
    name: "Transport Canada Civil Aviation (TCCA)",
    url: "https://tc.canada.ca/en/aviation/licencing-pilots-personnel/aviation-medical-requirements",
    ameNote: "a Transport Canada Civil Aviation Medical Examiner (CAME)",
  },
  GCAA: {
    name: "General Civil Aviation Authority (GCAA)",
    url: "https://www.gcaa.gov.ae/en/acs/pages/medicalcertification.aspx",
    ameNote: "a GCAA-approved Aviation Medical Examiner (AME)",
  },
};

export const MedicalDisclaimerBox: React.FC<MedicalDisclaimerBoxProps> = ({
  authority = "UK CAA",
  additionalNote,
  className = "",
}) => {
  const auth = authorityLinks[authority] ?? authorityLinks["UK CAA"];

  return (
    <div
      className={`flex items-start gap-3 rounded-lg p-4 ${className}`}
      style={{
        background: "oklch(0.55 0.18 30 / 0.06)",
        border: "1px solid oklch(0.55 0.18 30 / 0.25)",
      }}
    >
      <div
        className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center mt-0.5"
        style={{ background: "oklch(0.55 0.18 30 / 0.12)" }}
      >
        <Stethoscope
          className="w-4 h-4"
          style={{ color: "oklch(0.65 0.18 30)" }}
        />
      </div>
      <div>
        <p className="text-xs font-semibold text-white mb-1">
          Not medical advice
        </p>
        <p
          className="text-xs leading-relaxed"
          style={{ color: "oklch(0.65 0.04 240)" }}
        >
          This guide is for general information only and does not constitute
          medical advice. Medical standards for pilot licences are set by the{" "}
          <a
            href={auth.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
            style={{ color: "oklch(0.7 0.18 30)" }}
          >
            {auth.name}
          </a>{" "}
          and can change. Your individual eligibility depends on your specific
          medical history and can only be determined by {auth.ameNote}. Do not
          self-assess your eligibility based on this guide — always seek a
          formal medical examination before committing to pilot training.
        </p>
        {additionalNote && (
          <p
            className="text-xs mt-2 leading-relaxed"
            style={{ color: "oklch(0.65 0.04 240)" }}
          >
            {additionalNote}
          </p>
        )}
      </div>
    </div>
  );
};

export default MedicalDisclaimerBox;
