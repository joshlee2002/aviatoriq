import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Country = "uk" | "us" | null;

interface CountryContextType {
  country: Country;
  setCountry: (c: Country) => void;
  hasSelected: boolean;
}

const CountryContext = createContext<CountryContextType>({
  country: null,
  setCountry: () => {},
  hasSelected: false,
});

export function CountryProvider({ children }: { children: ReactNode }) {
  const [country, setCountryState] = useState<Country>(() => {
    const stored = localStorage.getItem("aviatoriq_country");
    if (stored === "uk" || stored === "us") return stored;
    return null;
  });

  const hasSelected = country !== null;

  const setCountry = (c: Country) => {
    setCountryState(c);
    if (c) localStorage.setItem("aviatoriq_country", c);
    else localStorage.removeItem("aviatoriq_country");
  };

  return (
    <CountryContext.Provider value={{ country, setCountry, hasSelected }}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry() {
  return useContext(CountryContext);
}
