import { useEffect } from "react";
import { useLocation } from "wouter";
import SEO from "@/components/SEO";

/**
 * /guides/finance-guide — legacy URL
 * 301-equivalent client-side redirect to the canonical 2026 guide.
 * The SEO component sets a canonical tag pointing to the new URL so crawlers
 * consolidate link equity immediately.
 */
const FinanceGuide = () => {
  const [, setLocation] = useLocation();

  useEffect(() => {
    setLocation("/guides/how-to-finance-pilot-training-uk", { replace: true });
  }, [setLocation]);

  return (
    <SEO
      title="How to Finance Pilot Training in the UK | AviatorPath"
      description="How to fund pilot training in the UK in 2026. Covers realistic self-funding, scholarships, modular training, family support, and loan risks to verify before applying."
      canonical="https://aviatorpath.com/guides/how-to-finance-pilot-training-uk"
    />
  );
};

export default FinanceGuide;
