import create from "zustand";
import { devtools, persist } from "zustand/middleware";

import useStoreStateHook from "./hooks/useStoreState";
import useStoreItemHook from "./hooks/useStoreItem";
import useStoreItemsHook from "./hooks/useStoreItems";

const defaultState = {
  raceFilter: "all",
  archetypeFilter: "all",
  weaponFilter: "all",
  armorFilter: "all",
  paintedFilter: "all",
  nameFilter: "all",
  lineFilter: "all",
};

// Build zustand store
let store = (set, get) => ({
  raceFilter: defaultState.raceFilter,
  setRaceFilter: (value) => set({ raceFilter: value }),

  archetypeFilter: defaultState.archetypeFilter,
  setArchetypeFilter: (value) => set({ archetypeFilter: value }),

  weaponFilter: defaultState.weaponFilter,
  setWeaponFilter: (value) => set({ weaponFilter: value }),

  armorFilter: defaultState.armorFilter,
  setArmorFilter: (value) => set({ armorFilter: value }),

  paintedFilter: defaultState.paintedFilter,
  setPaintedFilter: (value) => set({ paintedFilter: value }),

  nameFilter: defaultState.nameFilter,
  setNameFilter: (value) => set({ nameFilter: value }),

  lineFilter: defaultState.lineFilter,
  setLineFilter: (value) => set({ lineFilter: value }),

  ignoreMonsters: false,
  setIgnoreMonsters: (value) => set({ ignoreMonsters: value }),

  setFilter: (label, value, options = {}) => {
    options = { merge: true, ...options };
    const payload = !!options.merge ? {} : { ...defaultState };
    payload[label] = value;

    set(payload);
  },

  isFiltered: () => {
    if (get().ignoreMonsters) return true;

    const filters = [
      get().raceFilter,
      get().archetypeFilter,
      get().weaponFilter,
      get().armorFilter,
      get().paintedFilter,
      get().lineFilter,
    ];

    return filters.some((item) => item !== "all");
  },
});

// Wrap store in middleware to persist to sessionStorage
store = persist(store, { name: "minidb-store", getStorage: () => sessionStorage });

// Wrap store in middleware to Integrate with Redux DevTools (browser extension)
store = devtools(store, { name: "MiniDB ZuStore" });

// Build main hook
const useStore = create(store);

export default useStore;

// Helper hooks
export const useStoreState = useStoreStateHook;
export const useStoreItem = useStoreItemHook;
export const useStoreItems = useStoreItemsHook;
