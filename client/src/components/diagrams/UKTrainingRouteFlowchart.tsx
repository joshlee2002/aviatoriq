/**
 * UKTrainingRouteFlowchart.tsx
 * Reusable SVG diagram showing the two main UK ATPL training routes.
 * Integrated (residential) vs Modular (part-time/flexible).
 * Based on CAA-published pathway requirements.
 */

export default function UKTrainingRouteFlowchart() {
  return (
    <div className="w-full overflow-x-auto my-6">
      <div className="min-w-[640px]">
        <svg
          viewBox="0 0 800 520"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          aria-label="UK ATPL training route flowchart showing integrated and modular pathways"
          role="img"
        >
          {/* Background */}
          <rect width="800" height="520" fill="#0f172a" rx="12" />

          {/* Title */}
          <text x="400" y="32" textAnchor="middle" fill="#f1f5f9" fontSize="15" fontWeight="bold" fontFamily="system-ui, sans-serif">
            UK ATPL Training Routes (CAA)
          </text>
          <text x="400" y="50" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">
            Source: CAA — Air Crew Licensing, EASA FCL.025
          </text>

          {/* START node */}
          <rect x="300" y="65" width="200" height="40" rx="20" fill="#1e40af" />
          <text x="400" y="90" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="system-ui, sans-serif">START: Decision Point</text>

          {/* Arrow down */}
          <line x1="400" y1="105" x2="400" y2="130" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Decision diamond */}
          <polygon points="400,130 500,165 400,200 300,165" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="400" y="162" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Budget &amp; timeline?</text>

          {/* Left branch — Integrated */}
          <line x1="300" y1="165" x2="160" y2="165" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
          <text x="230" y="155" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="system-ui, sans-serif">£90k–£120k upfront</text>
          <text x="230" y="168" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="system-ui, sans-serif">18–24 months</text>

          {/* Integrated box */}
          <rect x="60" y="185" width="200" height="50" rx="8" fill="#14532d" stroke="#22c55e" strokeWidth="1.5" />
          <text x="160" y="207" textAnchor="middle" fill="#86efac" fontSize="12" fontWeight="bold" fontFamily="system-ui, sans-serif">Integrated ATPL</text>
          <text x="160" y="224" textAnchor="middle" fill="#86efac" fontSize="10" fontFamily="system-ui, sans-serif">CAA-approved ATO (residential)</text>

          {/* Right branch — Modular */}
          <line x1="500" y1="165" x2="640" y2="165" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
          <text x="570" y="155" textAnchor="middle" fill="#f59e0b" fontSize="10" fontFamily="system-ui, sans-serif">£55k–£80k spread</text>
          <text x="570" y="168" textAnchor="middle" fill="#f59e0b" fontSize="10" fontFamily="system-ui, sans-serif">3–5 years</text>

          {/* Modular box */}
          <rect x="540" y="185" width="200" height="50" rx="8" fill="#451a03" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="640" y="207" textAnchor="middle" fill="#fcd34d" fontSize="12" fontWeight="bold" fontFamily="system-ui, sans-serif">Modular ATPL</text>
          <text x="640" y="224" textAnchor="middle" fill="#fcd34d" fontSize="10" fontFamily="system-ui, sans-serif">PPL → ATPL theory → CPL/IR/MCC</text>

          {/* Integrated steps */}
          <line x1="160" y1="235" x2="160" y2="265" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#arrowGreen)" />
          <rect x="60" y="265" width="200" height="40" rx="6" fill="#1e293b" stroke="#22c55e" strokeWidth="1" />
          <text x="160" y="282" textAnchor="middle" fill="#86efac" fontSize="10" fontFamily="system-ui, sans-serif">ATPL Theory (14 subjects)</text>
          <text x="160" y="296" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Embedded in programme</text>

          <line x1="160" y1="305" x2="160" y2="330" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#arrowGreen)" />
          <rect x="60" y="330" width="200" height="40" rx="6" fill="#1e293b" stroke="#22c55e" strokeWidth="1" />
          <text x="160" y="347" textAnchor="middle" fill="#86efac" fontSize="10" fontFamily="system-ui, sans-serif">CPL + IR + MCC/APS MCC</text>
          <text x="160" y="361" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Included in programme</text>

          {/* Modular steps */}
          <line x1="640" y1="235" x2="640" y2="265" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrowAmber)" />
          <rect x="540" y="265" width="200" height="40" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
          <text x="640" y="282" textAnchor="middle" fill="#fcd34d" fontSize="10" fontFamily="system-ui, sans-serif">PPL (45 hrs min)</text>
          <text x="640" y="296" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">CAA-approved ATO</text>

          <line x1="640" y1="305" x2="640" y2="330" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrowAmber)" />
          <rect x="540" y="330" width="200" height="40" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
          <text x="640" y="347" textAnchor="middle" fill="#fcd34d" fontSize="10" fontFamily="system-ui, sans-serif">ATPL Theory → CPL → IR → MCC</text>
          <text x="640" y="361" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Separate modules, flexible timing</text>

          {/* Both converge */}
          <line x1="160" y1="370" x2="160" y2="410" stroke="#22c55e" strokeWidth="1.5" />
          <line x1="160" y1="410" x2="400" y2="410" stroke="#475569" strokeWidth="1.5" />
          <line x1="640" y1="370" x2="640" y2="410" stroke="#f59e0b" strokeWidth="1.5" />
          <line x1="640" y1="410" x2="400" y2="410" stroke="#475569" strokeWidth="1.5" />
          <line x1="400" y1="410" x2="400" y2="430" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Frozen ATPL box */}
          <rect x="250" y="430" width="300" height="50" rx="8" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="400" y="452" textAnchor="middle" fill="#93c5fd" fontSize="12" fontWeight="bold" fontFamily="system-ui, sans-serif">Frozen ATPL (fATPL)</text>
          <text x="400" y="468" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">Unfreezes at 1,500 hrs total time + ATPL skill test</text>

          {/* Caveat note */}
          <text x="400" y="505" textAnchor="middle" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">
            Costs and timelines are indicative. Verify current requirements with the CAA.
          </text>

          {/* Arrow markers */}
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#475569" />
            </marker>
            <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#22c55e" />
            </marker>
            <marker id="arrowAmber" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#f59e0b" />
            </marker>
          </defs>
        </svg>
      </div>
      <p className="text-xs text-white/40 text-center mt-2">
        Source: <a href="https://www.caa.co.uk/pilots-and-air-staff/pilot-licences/aeroplanes/atpl/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/60">CAA ATPL Licensing</a> · Last reviewed June 2026
      </p>
    </div>
  );
}
