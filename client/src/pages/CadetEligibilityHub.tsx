/**
 * CadetEligibilityHub — country-aware entry point for the cadet eligibility checker.
 * Routes to the UK or US version based on the user's selected country.
 */
import { useCountry } from "@/contexts/CountryContext";
import CadetEligibility from "./CadetEligibility";
import CadetEligibilityUS from "./CadetEligibilityUS";

export default function CadetEligibilityHub() {
  const { country } = useCountry();
  if (country === "us") return <CadetEligibilityUS />;
  return <CadetEligibility />;
}
