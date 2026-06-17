/**
 * CalculatorHub — country-aware entry point for the cost calculator.
 * Routes to the UK or US calculator based on the user's selected country.
 * All other countries fall back to the UK calculator (which includes EU/global routes).
 */
import { useCountry } from "@/contexts/CountryContext";
import Calculator from "./Calculator";
import CalculatorUS from "./CalculatorUS";

export default function CalculatorHub() {
  const { country } = useCountry();
  if (country === "us") return <CalculatorUS />;
  return <Calculator />;
}
