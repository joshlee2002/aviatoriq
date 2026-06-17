/**
 * CadetProgrammeTimeline.tsx
 * Reusable SVG diagram showing a typical airline-sponsored cadet programme timeline.
 * Based on publicly available programme information (BA Speedbird, easyJet Generation).
 */

export default function CadetProgrammeTimeline() {
  const phases = [
    { month: "M1–2", label: "Application & Selection", sub: "Online tests · Assessment centre · Medical", color: "#1e40af", textColor: "#93c5fd" },
    { month: "M3–4", label: "Ground School", sub: "ATPL theory (14 subjects) at approved ATO", color: "#1e3a5f", textColor: "#93c5fd" },
    { month: "M5–12", label: "Flight Training Phase 1", sub: "PPL · Hour building · Instrument rating", color: "#14532d", textColor: "#86efac" },
    { month: "M13–20", label: "Flight Training Phase 2", sub: "CPL · MCC/APS MCC · Type rating", color: "#14532d", textColor: "#86efac" },
    { month: "M21–24", label: "Frozen ATPL Issued", sub: "Conditional on passing all skill tests", color: "#1e3a5f", textColor: "#93c5fd" },
    { month: "Post", label: "First Officer (conditional)", sub: "Subject to airline vacancies, medical, security clearance", color: "#451a03", textColor: "#fcd34d" },
  ];

  return (
    <div className="w-full overflow-x-auto my-6">
      <div className="min-w-[560px]">
        <svg
          viewBox="0 0 720 400"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          aria-label="Typical airline cadet programme timeline from application to First Officer"
          role="img"
        >
          <rect width="720" height="400" fill="#0f172a" rx="12" />

          {/* Title */}
          <text x="360" y="28" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="bold" fontFamily="system-ui, sans-serif">
            Typical Airline Cadet Programme Timeline
          </text>
          <text x="360" y="44" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">
            Based on BA Speedbird Academy and easyJet Generation easyJet published timelines. Individual programmes vary.
          </text>

          {/* Timeline spine */}
          <line x1="60" y1="200" x2="660" y2="200" stroke="#1e293b" strokeWidth="3" />

          {phases.map((phase, i) => {
            const x = 60 + i * 100 + 50;
            const isAbove = i % 2 === 0;
            const boxY = isAbove ? 80 : 230;
            const lineY1 = isAbove ? 130 : 200;
            const lineY2 = isAbove ? 200 : 230;

            return (
              <g key={i}>
                {/* Dot on timeline */}
                <circle cx={x} cy="200" r="7" fill={phase.color} stroke={phase.textColor} strokeWidth="1.5" />

                {/* Vertical connector */}
                <line x1={x} y1={lineY1} x2={x} y2={lineY2} stroke="#334155" strokeWidth="1.5" />

                {/* Box */}
                <rect x={x - 45} y={boxY} width="90" height="50" rx="6" fill={phase.color} stroke={phase.textColor} strokeWidth="1" />
                <text x={x} y={boxY + 14} textAnchor="middle" fill={phase.textColor} fontSize="8" fontWeight="bold" fontFamily="system-ui, sans-serif">{phase.month}</text>
                <text x={x} y={boxY + 26} textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="system-ui, sans-serif">{phase.label.split(" ").slice(0, 2).join(" ")}</text>
                <text x={x} y={boxY + 38} textAnchor="middle" fill="white" fontSize="8" fontFamily="system-ui, sans-serif">{phase.label.split(" ").slice(2).join(" ")}</text>
                <text x={x} y={boxY + 50} textAnchor="middle" fill={phase.textColor} fontSize="7" fontFamily="system-ui, sans-serif" opacity="0.8">{phase.sub.split(" ").slice(0, 3).join(" ")}</text>
              </g>
            );
          })}

          {/* Caveat */}
          <rect x="40" y="340" width="640" height="44" rx="6" fill="#1e293b" />
          <text x="360" y="358" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold" fontFamily="system-ui, sans-serif">Important caveat</text>
          <text x="360" y="372" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Completion of training does not guarantee employment. Progression to First Officer is conditional on airline vacancies,</text>
          <text x="360" y="384" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">medical fitness, security clearance, and meeting the airline's operational standards at the time of completion.</text>
        </svg>
      </div>
      <p className="text-xs text-white/40 text-center mt-2">
        Source: <a href="https://www.speedbirdaviation.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/60">BA Speedbird Academy</a> · <a href="https://careers.easyjet.com/generation-easyjet" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/60">easyJet Generation easyJet</a> · Last reviewed June 2026
      </p>
    </div>
  );
}
