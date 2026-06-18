/**
 * MedicalLookupHub — country-aware entry point for the medical condition lookup tool.
 * Routes to the UK (CAA) or US (FAA) version based on the user's selected country.
 */
import { useCountry } from "@/contexts/CountryContext";
import MedicalConditionLookup from "./MedicalConditionLookup";
import MedicalConditionLookupUS from "./MedicalConditionLookupUS";

export default function MedicalLookupHub() {
  const { country } = useCountry();
  if (country === "us") return <MedicalConditionLookupUS />;
  return <MedicalConditionLookup />;
}
