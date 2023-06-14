import { createContext, useContext, useEffect, useState } from "react";

export const ModalStateContext = createContext();
export const useModalStateContext = () => useContext(ModalStateContext);

export const ModalStateProvider = ({ children, enableFilter = false }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // If a filter is open, don't process futher keypresses
  const suppressKeyListening = isSearchOpen || isFilterOpen;

  const handleKeyPress = (e) => {
    // Don't process keypresses if suppressKeyListening
    if (suppressKeyListening) return;

    switch (e.key) {
      case "f":
      case "F":
        // Don't enable filters unless enableFilter is true
        if (!enableFilter) return;

        e.preventDefault();
        setIsFilterOpen(true);
        break;
      case "/":
        e.preventDefault();
        setIsSearchOpen(true);
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  const state = {
    isSearchOpen,
    openSearch: () => setIsSearchOpen(true),
    closeSearch: () => setIsSearchOpen(false),

    isFilterOpen,
    openFilter: () => setIsFilterOpen(true),
    closeFilter: () => setIsFilterOpen(false),
  };

  return <ModalStateContext.Provider value={state}>{children}</ModalStateContext.Provider>;
};
