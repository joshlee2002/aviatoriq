/**
 * Class1MedicalProcess.tsx
 * Reusable SVG diagram showing the UK CAA Class 1 medical examination process.
 * Based on CAA-published guidance.
 */

export default function Class1MedicalProcess() {
  const steps = [
    {
      label: "Book AME appointment",
      sub: "CAA-approved Authorised Medical Examiner",
      color: "#1e40af",
      textColor: "#93c5fd",
    },
    {
      label: "Initial examination",
      sub: "Vision, hearing, cardiovascular, neurological, psychiatric",
      color: "#1e3a5f",
      textColor: "#93c5fd",
    },
    {
      label: "Routine result?",
      sub: "Decision point",
      color: "#1e293b",
      textColor: "#94a3b8",
      isDiamond: true,
    },
    {
      label: "Certificate issued",
      sub: "Valid 12 months (under 40) or 6 months (40+)",
      color: "#14532d",
      textColor: "#86efac",
    },
    {
      label: "Further assessment",
      sub: "Specialist referral or additional tests required",
      color: "#451a03",
      textColor: "#fcd34d",
    },
    {
      label: "CAA review",
      sub: "Case-by-case assessment — may result in OML or certificate",
      color: "#1e293b",
      textColor: "#94a3b8",
    },
  ];

  return (
    <div className="w-full overflow-x-auto my-6">
      <div className="min-w-[400px]">
        <svg
          viewBox="0 0 500 520"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-w-lg mx-auto block"
          aria-label="UK CAA Class 1 medical examination process flowchart"
          role="img"
        >
          <rect width="500" height="520" fill="#0f172a" rx="12" />

          {/* Title */}
          <text
            x="250"
            y="28"
            textAnchor="middle"
            fill="#f1f5f9"
            fontSize="13"
            fontWeight="bold"
            fontFamily="system-ui, sans-serif"
          >
            UK CAA Class 1 Medical Process
          </text>
          <text
            x="250"
            y="44"
            textAnchor="middle"
            fill="#64748b"
            fontSize="9"
            fontFamily="system-ui, sans-serif"
          >
            Source: CAA — Authorised Medical Examiners guidance
          </text>

          {/* Step 1 */}
          <rect x="125" y="58" width="250" height="44" rx="8" fill="#1e40af" />
          <text
            x="250"
            y="77"
            textAnchor="middle"
            fill="white"
            fontSize="11"
            fontWeight="bold"
            fontFamily="system-ui, sans-serif"
          >
            Book AME appointment
          </text>
          <text
            x="250"
            y="92"
            textAnchor="middle"
            fill="#93c5fd"
            fontSize="9"
            fontFamily="system-ui, sans-serif"
          >
            CAA-approved Authorised Medical Examiner
          </text>

          <line
            x1="250"
            y1="102"
            x2="250"
            y2="120"
            stroke="#475569"
            strokeWidth="2"
            markerEnd="url(#arrowMed)"
          />

          {/* Step 2 */}
          <rect
            x="100"
            y="120"
            width="300"
            height="44"
            rx="8"
            fill="#1e3a5f"
            stroke="#3b82f6"
            strokeWidth="1"
          />
          <text
            x="250"
            y="139"
            textAnchor="middle"
            fill="white"
            fontSize="11"
            fontWeight="bold"
            fontFamily="system-ui, sans-serif"
          >
            Initial examination
          </text>
          <text
            x="250"
            y="154"
            textAnchor="middle"
            fill="#93c5fd"
            fontSize="9"
            fontFamily="system-ui, sans-serif"
          >
            Vision · Hearing · Cardiovascular · Neurological · Psychiatric
          </text>

          <line
            x1="250"
            y1="164"
            x2="250"
            y2="182"
            stroke="#475569"
            strokeWidth="2"
            markerEnd="url(#arrowMed)"
          />

          {/* Decision diamond */}
          <polygon
            points="250,182 350,222 250,262 150,222"
            fill="#1e293b"
            stroke="#3b82f6"
            strokeWidth="1.5"
          />
          <text
            x="250"
            y="218"
            textAnchor="middle"
            fill="#94a3b8"
            fontSize="10"
            fontFamily="system-ui, sans-serif"
          >
            Routine result?
          </text>

          {/* Yes branch — right */}
          <line
            x1="350"
            y1="222"
            x2="420"
            y2="222"
            stroke="#22c55e"
            strokeWidth="2"
            markerEnd="url(#arrowGreenMed)"
          />
          <text
            x="385"
            y="215"
            textAnchor="middle"
            fill="#22c55e"
            fontSize="9"
            fontFamily="system-ui, sans-serif"
          >
            Yes
          </text>
          <rect
            x="420"
            y="198"
            width="60"
            height="48"
            rx="6"
            fill="#14532d"
            stroke="#22c55e"
            strokeWidth="1.5"
          />
          <text
            x="450"
            y="218"
            textAnchor="middle"
            fill="#86efac"
            fontSize="9"
            fontWeight="bold"
            fontFamily="system-ui, sans-serif"
          >
            Certificate
          </text>
          <text
            x="450"
            y="232"
            textAnchor="middle"
            fill="#86efac"
            fontSize="9"
            fontFamily="system-ui, sans-serif"
          >
            issued
          </text>
          <text
            x="450"
            y="244"
            textAnchor="middle"
            fill="#64748b"
            fontSize="8"
            fontFamily="system-ui, sans-serif"
          >
            12/6 months
          </text>

          {/* No branch — down */}
          <line
            x1="250"
            y1="262"
            x2="250"
            y2="285"
            stroke="#f59e0b"
            strokeWidth="2"
            markerEnd="url(#arrowAmberMed)"
          />
          <text
            x="260"
            y="278"
            textAnchor="start"
            fill="#f59e0b"
            fontSize="9"
            fontFamily="system-ui, sans-serif"
          >
            No
          </text>

          {/* Further assessment */}
          <rect
            x="100"
            y="285"
            width="300"
            height="44"
            rx="8"
            fill="#451a03"
            stroke="#f59e0b"
            strokeWidth="1.5"
          />
          <text
            x="250"
            y="304"
            textAnchor="middle"
            fill="#fcd34d"
            fontSize="11"
            fontWeight="bold"
            fontFamily="system-ui, sans-serif"
          >
            Further assessment
          </text>
          <text
            x="250"
            y="319"
            textAnchor="middle"
            fill="#fcd34d"
            fontSize="9"
            fontFamily="system-ui, sans-serif"
          >
            Specialist referral or additional tests required
          </text>

          <line
            x1="250"
            y1="329"
            x2="250"
            y2="352"
            stroke="#475569"
            strokeWidth="2"
            markerEnd="url(#arrowMed)"
          />

          {/* CAA review */}
          <rect
            x="100"
            y="352"
            width="300"
            height="44"
            rx="8"
            fill="#1e293b"
            stroke="#64748b"
            strokeWidth="1"
          />
          <text
            x="250"
            y="371"
            textAnchor="middle"
            fill="white"
            fontSize="11"
            fontWeight="bold"
            fontFamily="system-ui, sans-serif"
          >
            CAA review
          </text>
          <text
            x="250"
            y="386"
            textAnchor="middle"
            fill="#94a3b8"
            fontSize="9"
            fontFamily="system-ui, sans-serif"
          >
            Case-by-case — may result in OML or certificate
          </text>

          <line
            x1="250"
            y1="396"
            x2="250"
            y2="418"
            stroke="#475569"
            strokeWidth="2"
            markerEnd="url(#arrowMed)"
          />

          {/* Outcome */}
          <rect
            x="100"
            y="418"
            width="300"
            height="44"
            rx="8"
            fill="#1e293b"
            stroke="#3b82f6"
            strokeWidth="1"
          />
          <text
            x="250"
            y="437"
            textAnchor="middle"
            fill="#93c5fd"
            fontSize="11"
            fontWeight="bold"
            fontFamily="system-ui, sans-serif"
          >
            Outcome
          </text>
          <text
            x="250"
            y="452"
            textAnchor="middle"
            fill="#64748b"
            fontSize="9"
            fontFamily="system-ui, sans-serif"
          >
            Certificate · OML · Restricted certificate · Refused
          </text>

          {/* Caveat */}
          <text
            x="250"
            y="500"
            textAnchor="middle"
            fill="#475569"
            fontSize="8"
            fontFamily="system-ui, sans-serif"
          >
            Decisions are made by the CAA on a case-by-case basis. This diagram
            is indicative only.
          </text>

          <defs>
            <marker
              id="arrowMed"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L8,3 z" fill="#475569" />
            </marker>
            <marker
              id="arrowGreenMed"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L8,3 z" fill="#22c55e" />
            </marker>
            <marker
              id="arrowAmberMed"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L8,3 z" fill="#f59e0b" />
            </marker>
          </defs>
        </svg>
      </div>
      <p className="text-xs text-white/40 text-center mt-2">
        Source:{" "}
        <a
          href="https://www.caa.co.uk/pilots-and-air-staff/pilot-licences/aeroplanes/medical-requirements/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white/60"
        >
          CAA Medical Requirements
        </a>{" "}
        · Last reviewed June 2026
      </p>
    </div>
  );
}
