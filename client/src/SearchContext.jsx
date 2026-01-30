import { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [location, setLocation] = useState("");
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const [activeTab, setActiveTab] = useState("location");

  return (
    <SearchContext.Provider
      value={{
        location, setLocation,
        from, setFrom,
        to, setTo,
        guests, setGuests,
        activeTab, setActiveTab,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
