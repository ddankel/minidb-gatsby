import { createContext, useContext, useEffect, useState } from "react";

type ModalStateProviderState = {
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;

  isFilterOpen: boolean;
  openFilter: () => void;
  closeFilter: () => void;
};

type ModelStateProviderProps = {
  children: React.ReactNode;
  enableFilter?: boolean;
};

const defaultState: ModalStateProviderState = {
  isSearchOpen: false,
  openSearch: () => {},
  closeSearch: () => {},

  isFilterOpen: false,
  openFilter: () => {},
  closeFilter: () => {},
};

export const ModalStateContext = createContext<ModalStateProviderState>(defaultState);
export const useModalStateContext = () => useContext(ModalStateContext);

export const ModalStateProvider = ({ children, enableFilter = false }: ModelStateProviderProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // If a filter is open, don't process futher keypresses
  const suppressKeyListening = isSearchOpen || isFilterOpen;

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
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
        default:
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [enableFilter, suppressKeyListening]);

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
