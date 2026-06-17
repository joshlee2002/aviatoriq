/**
 * UKCostStackDiagram.tsx
 * Reusable SVG diagram showing the typical cost components of UK ATPL training.
 * Figures are indicative ranges based on published school prospectuses (June 2026).
 */

export default function UKCostStackDiagram() {
  const costs = [
    {
      label: "ATPL Theory",
      range: "£3,000–£8,000",
      pct: 8,
      color: "#1e40af",
      textColor: "#93c5fd",
    },
    {
      label: "PPL (45 hrs)",
      range: "£8,000–£12,000",
      pct: 12,
      color: "#1e3a5f",
      textColor: "#93c5fd",
    },
    {
      label: "Hour Building",
      range: "£8,000–£15,000",
      pct: 14,
      color: "#14532d",
      textColor: "#86efac",
    },
    {
      label: "CPL",
      range: "£10,000–£18,000",
      pct: 16,
      color: "#1a4731",
      textColor: "#86efac",
    },
    {
      label: "Instrument Rating",
      range: "£15,000–£25,000",
      pct: 22,
      color: "#451a03",
      textColor: "#fcd34d",
    },
    {
      label: "MCC / APS MCC",
      range: "£4,000–£8,000",
      pct: 7,
      color: "#422006",
      textColor: "#fcd34d",
    },
    {
      label: "Type Rating",
      range: "£15,000–£25,000",
      pct: 21,
      color: "#3b0764",
      textColor: "#d8b4fe",
    },
  ];

  const totalWidth = 600;
  const barHeight = 44;
  const startX = 20;
  const startY = 80;

  return (
    <div className="w-full overflow-x-auto my-6">
      <div className="min-w-[500px]">
        <svg
          viewBox="0 0 700 480"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          aria-label="UK ATPL training cost stack diagram showing typical cost components"
          role="img"
        >
          <rect width="700" height="480" fill="#0f172a" rx="12" />

          {/* Title */}
          <text
            x="350"
            y="28"
            textAnchor="middle"
            fill="#f1f5f9"
            fontSize="13"
            fontWeight="bold"
            fontFamily="system-ui, sans-serif"
          >
            UK ATPL Training — Typical Cost Stack
          </text>
          <text
            x="350"
            y="44"
            textAnchor="middle"
            fill="#64748b"
            fontSize="9"
            fontFamily="system-ui, sans-serif"
          >
            Indicative ranges based on published UK ATO prospectuses (June
            2026). Modular route. Verify with each school.
          </text>
          <text
            x="350"
            y="58"
            textAnchor="middle"
            fill="#64748b"
            fontSize="9"
            fontFamily="system-ui, sans-serif"
          >
            Total indicative range: £63,000–£111,000 (modular) ·
            £90,000–£120,000 (integrated)
          </text>

          {costs.map((cost, i) => {
            const barWidth = (cost.pct / 100) * totalWidth;
            const y = startY + i * (barHeight + 8);
            return (
              <g key={i}>
                {/* Bar */}
                <rect
                  x={startX}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  rx="4"
                  fill={cost.color}
                />
                {/* Label inside bar */}
                <text
                  x={startX + 8}
                  y={y + 16}
                  fill="white"
                  fontSize="10"
                  fontWeight="bold"
                  fontFamily="system-ui, sans-serif"
                >
                  {cost.label}
                </text>
                <text
                  x={startX + 8}
                  y={y + 30}
                  fill={cost.textColor}
                  fontSize="9"
                  fontFamily="system-ui, sans-serif"
                >
                  {cost.range}
                </text>
                {/* Percentage outside bar */}
                <text
                  x={startX + barWidth + 6}
                  y={y + 20}
                  fill="#64748b"
                  fontSize="9"
                  fontFamily="system-ui, sans-serif"
                >
                  {cost.pct}%
                </text>
              </g>
            );
          })}

          {/* Caveat box */}
          <rect x="20" y="420" width="660" height="44" rx="6" fill="#1e293b" />
          <text
            x="350"
            y="438"
            textAnchor="middle"
            fill="#f59e0b"
            fontSize="9"
            fontWeight="bold"
            fontFamily="system-ui, sans-serif"
          >
            These are indicative ranges only
          </text>
          <text
            x="350"
            y="452"
            textAnchor="middle"
            fill="#94a3b8"
            fontSize="8"
            fontFamily="system-ui, sans-serif"
          >
            Actual costs depend on school, aircraft type, location, weather
            delays, and exam re-sits. Always request a full written quote.
          </text>
          <text
            x="350"
            y="464"
            textAnchor="middle"
            fill="#94a3b8"
            fontSize="8"
            fontFamily="system-ui, sans-serif"
          >
            Source: published prospectuses from UK CAA-approved ATOs, June 2026.
          </text>
        </svg>
      </div>
    </div>
  );
}
