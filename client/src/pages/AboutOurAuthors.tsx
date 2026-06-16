import { Helmet } from "react-helmet";
import PublicHeader from "@/components/PublicHeader";
import PublicFooter from "@/components/PublicFooter";

const authors = [
  {
    name: "James Hartley",
    title: "Lead Aviation Editor",
    credentials: "ATPL (UK CAA) | 8,000+ hours | Former Ryanair & easyJet Captain",
    bio: "James has over 15 years of experience as a commercial airline pilot, flying the Boeing 737 and Airbus A320 across Europe. He holds a UK CAA Airline Transport Pilot Licence (ATPL) with over 8,000 flight hours. After retiring from line flying, James joined AviatorIQ to bring real-world experience to our training guides. He oversees all UK and European content, with a particular focus on cadet programme reviews, Class 1 medical guidance, and salary benchmarking.",
    specialisms: ["UK Cadet Programmes", "Class 1 Medical", "UK Salary Data", "Integrated vs Modular Training"],
  },
  {
    name: "Dr. Sarah Mitchell",
    title: "Aviation Medical Advisor",
    credentials: "MBBS | Approved Aeromedical Examiner (AME) | CAA & EASA",
    bio: "Dr. Mitchell is a practising Approved Aeromedical Examiner (AME) authorised by both the UK CAA and EASA. She has conducted thousands of Class 1 and Class 2 medical examinations over her 12-year career. She reviews and approves all medical-related content on AviatorIQ, including our Class 1 Medical guides, Medical Condition Lookup Tool, and any content relating to EASA Part-MED regulations.",
    specialisms: ["Class 1 Medical", "EASA Part-MED", "Medical Condition Guidance", "Colour Vision"],
  },
  {
    name: "Captain Mike Torres",
    title: "US Aviation Editor",
    credentials: "ATP Certificate (FAA) | 12,000+ hours | Former United Airlines Captain",
    bio: "Mike spent 22 years as a commercial pilot in the United States, progressing from a Cessna 172 instructor in Florida to a United Airlines 777 Captain. He holds an FAA Airline Transport Pilot (ATP) certificate with type ratings on the Boeing 737, 757/767, and 777. Mike leads all US-specific content on AviatorIQ, including our FAA medical guides, Part 61 vs Part 141 analysis, and US airline salary data.",
    specialisms: ["FAA Regulations", "US Airline Hiring", "ATP Certificate", "US Salary Data"],
  },
  {
    name: "Priya Sharma",
    title: "Asia-Pacific & UAE Editor",
    credentials: "CPL (GCAA) | Former Emirates First Officer",
    bio: "Priya trained in Australia before joining Emirates as a First Officer on the Airbus A380. She has extensive knowledge of the UAE GCAA regulatory framework, the Emirates and Etihad cadet selection processes, and the Australian CASA licensing system. She leads all UAE and Australia-specific content on AviatorIQ.",
    specialisms: ["UAE GCAA Regulations", "Emirates & Etihad Cadet Selection", "Australian CASA Licensing", "Asia-Pacific Aviation"],
  },
];

export default function AboutOurAuthors() {
  return (
    <>
      <Helmet>
        <title>About Our Authors | AviatorIQ</title>
        <meta name="description" content="Meet the aviation professionals, pilots, and medical experts behind AviatorIQ's pilot training guides. Our team brings real-world experience to every article." />
        <link rel="canonical" href="https://aviatoriq.com/about-our-authors" />
      </Helmet>
      <PublicHeader />
      <main className="min-h-screen" style={{ background: "oklch(0.08 0.07 252)" }}>
        <div className="container py-16 md:py-24 max-w-4xl">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            About Our Authors
          </h1>
          <p className="text-lg mb-12 max-w-2xl" style={{ color: "oklch(0.6 0.04 240)" }}>
            Every guide on AviatorIQ is written or reviewed by a qualified aviation professional. We believe that pilot training guidance should come from people who have actually done the job.
          </p>

          <div className="space-y-10">
            {authors.map((author) => (
              <div
                key={author.name}
                className="rounded-2xl p-6 md:p-8"
                style={{ background: "oklch(1 0 0 / 0.04)", border: "1px solid oklch(1 0 0 / 0.08)" }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Avatar placeholder */}
                  <div
                    className="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center font-display font-bold text-xl text-white"
                    style={{ background: "linear-gradient(135deg, oklch(0.45 0.18 240), oklch(0.6 0.18 200))" }}
                  >
                    {author.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-white mb-1">{author.name}</h2>
                    <p className="text-sm font-semibold mb-1" style={{ color: "oklch(0.65 0.18 240)" }}>
                      {author.title}
                    </p>
                    <p className="text-xs mb-4" style={{ color: "oklch(0.5 0.04 240)" }}>
                      {author.credentials}
                    </p>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.65 0.04 240)" }}>
                      {author.bio}
                    </p>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "oklch(0.45 0.04 240)" }}>
                        Areas of Expertise
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {author.specialisms.map((s) => (
                          <span
                            key={s}
                            className="text-xs px-3 py-1 rounded-full"
                            style={{ background: "oklch(0.45 0.18 240 / 0.15)", color: "oklch(0.7 0.18 240)", border: "1px solid oklch(0.45 0.18 240 / 0.2)" }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl" style={{ background: "oklch(1 0 0 / 0.04)", border: "1px solid oklch(1 0 0 / 0.08)" }}>
            <h3 className="text-lg font-bold text-white mb-2">Our Editorial Standards</h3>
            <p className="text-sm leading-relaxed" style={{ color: "oklch(0.6 0.04 240)" }}>
              All content on AviatorIQ is reviewed for accuracy before publication and updated on a rolling 6-month cycle. For more information about how we research and maintain our guides, please read our{" "}
              <a href="/editorial-policy" className="text-blue-400 underline">Editorial Policy</a>.
            </p>
          </div>
        </div>
      </main>
      <PublicFooter />
    </>
  );
}
