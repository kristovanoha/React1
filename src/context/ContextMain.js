import React, { createContext, useState } from "react";

// Vytvoření nového Contextu s novým názvem
const ContextMain = createContext();

// Poskytovatel (Provider), který obalí komponenty a poskytne stav
const ContextMainProvider = ({ children }) => {
  const [count, setCount] = useState(0); // Stav pro `count`
  const [nazev, setNazev] = useState(""); // Stav pro `nazev`

  // Funkce pro zvýšení `count`
  const incrementCount = () => setCount(count + 1);

  // Funkce pro změnu `nazev`
  const updateNazev = (newNazev) => setNazev(newNazev);

  return (
    <ContextMain.Provider value={{ count, incrementCount, nazev, updateNazev }}>
      {children}
    </ContextMain.Provider>
  );
};

export { ContextMain, ContextMainProvider };

