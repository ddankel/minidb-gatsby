import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import _ from "lodash";

import useStoreState from "./hooks/useStoreState";
import useStoreItem from "./hooks/useStoreItem";
import useStoreItems from "./hooks/useStoreItems";

const defaultState = {
  speciesFilter: [],
  archetypeFilter: [],
  weaponFilter: [],
  armorFilter: [],
  paintedFilter: [],
  nameFilter: [],
  lineFilter: [],
};

const addFilter = (existingFilter, newItem) => [...new Set([...existingFilter, newItem])].sort();
const removeFilter = (existingFilter, outgoingItem) => _.without(existingFilter, outgoingItem);

// Build zustand store
let store = (set, get) => ({
  speciesFilter: defaultState.speciesFilter,
  setSpeciesFilter: (value) => set({ speciesFilter: value }),
  addSpeciesFilter: (value) =>
    set((state) => ({ speciesFilter: addFilter(state.speciesFilter, value) })),
  removeSpeciesFilter: (value) =>
    set((state) => ({ speciesFilter: removeFilter(state.speciesFilter, value) })),

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

  resetFilters: () => set(defaultState),

  isFiltered: () => {
    if (get().ignoreMonsters) return true;

    const filters = [
      get().speciesFilter,
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
const useFilterStore = create(store);

export default useFilterStore;

// Helper hooks
export const useFilterStoreState = useStoreState;
export const useFilterStoreItem = useStoreItem;
export const useFilterStoreItems = useStoreItems;
