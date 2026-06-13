import { useLocation } from "wouter";
import { useCountry } from "@/contexts/CountryContext";
import SEO from "@/components/SEO";
import { Globe, ChevronRight } from "lucide-react";

export default function CountrySelect() {
  const { setCountry } = useCountry();
  const [, navigate] = useLocation();

  const handleSelect = (c: "uk" | "us") => {
    setCountry(c);
    navigate(c === "us" ? "/us" : "/");
  };

  return (
    <>
      <SEO
        title="AviatorIQ — Choose Your Country"
        description="The world's most personalised pilot training guidance platform. Select your country to get started."
        canonical="https://www.aviatoriq.com/select"
      />
      <div className="min-h-screen flex flex-col items-center justify-center px-4"
        style={{ background: "oklch(0.14 0.04 240)" }}>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "oklch(0.65 0.22 45)" }}>
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-white font-bold text-2xl tracking-tight">AviatorIQ</span>
        </div>

        {/* Headline */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
            style={{ background: "oklch(0.25 0.06 240)", color: "oklch(0.65 0.22 45)" }}>
            <Globe className="w-4 h-4" />
            Select your country
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Where are you based?
          </h1>
          <p className="text-lg max-w-md mx-auto" style={{ color: "oklch(0.7 0.04 240)" }}>
            We'll give you guidance, costs, and school recommendations specific to your country.
          </p>
        </div>

        {/* Country cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mt-8">

          {/* USA */}
          <button
            onClick={() => handleSelect("us")}
            className="group relative flex flex-col items-start p-6 rounded-2xl border text-left transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl"
            style={{
              background: "oklch(0.18 0.05 240)",
              borderColor: "oklch(0.28 0.06 240)",
            }}
          >
            <div className="text-4xl mb-4">🇺🇸</div>
            <h2 className="text-xl font-bold text-white mb-1">United States</h2>
            <p className="text-sm mb-4" style={{ color: "oklch(0.65 0.04 240)" }}>
              FAA licences, ATP training, Part 61 vs 141, US airline cadet programmes
            </p>
            <div className="flex items-center gap-1 text-sm font-semibold"
              style={{ color: "oklch(0.65 0.22 45)" }}>
              Get started <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* UK */}
          <button
            onClick={() => handleSelect("uk")}
            className="group relative flex flex-col items-start p-6 rounded-2xl border text-left transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl"
            style={{
              background: "oklch(0.18 0.05 240)",
              borderColor: "oklch(0.28 0.06 240)",
            }}
          >
            <div className="text-4xl mb-4">🇬🇧</div>
            <h2 className="text-xl font-bold text-white mb-1">United Kingdom</h2>
            <p className="text-sm mb-4" style={{ color: "oklch(0.65 0.04 240)" }}>
              CAA licences, ATPL training, UK flight schools, airline cadet programmes
            </p>
            <div className="flex items-center gap-1 text-sm font-semibold"
              style={{ color: "oklch(0.65 0.22 45)" }}>
              Get started <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

        </div>

        {/* Other countries */}
        <p className="mt-6 text-sm" style={{ color: "oklch(0.5 0.04 240)" }}>
          Based elsewhere?{" "}
          <button
            onClick={() => handleSelect("uk")}
            className="underline hover:opacity-80 transition-opacity"
            style={{ color: "oklch(0.65 0.22 45)" }}
          >
            Use the UK version
          </button>{" "}
          — most international content applies.
        </p>

      </div>
    </>
  );
}
