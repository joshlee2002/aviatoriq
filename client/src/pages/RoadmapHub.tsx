/**
 * RoadmapHub — country-aware entry point for the roadmap generator.
 * Routes to the UK or US roadmap generator based on the user's selected country.
 * All other countries fall back to the UK roadmap (which covers global/EU pathways).
 */
import { useCountry } from "@/contexts/CountryContext";
import RoadmapGenerator from "./RoadmapGenerator";
import RoadmapGeneratorUS from "./RoadmapGeneratorUS";

export default function RoadmapHub() {
  const { country } = useCountry();
  if (country === "us") return <RoadmapGeneratorUS />;
  return <RoadmapGenerator />;
}
