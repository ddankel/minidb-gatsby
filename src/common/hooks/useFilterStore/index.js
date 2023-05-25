import { create } from "zustand";
import { createJSONStorage, devtools, persist, subscribeWithSelector } from "zustand/middleware";

import store from "./store";
import watchFilters from "./subscriptions/watchFilters";
import excludeStateAttributes from "./utils/excludeStateAttributes";

// Set up store and middleware
let filterStore = store;
filterStore = persist(filterStore, {
  name: "minidb-store",
  storage: createJSONStorage(() => sessionStorage),
  partialize: excludeStateAttributes("actions"),
});
filterStore = devtools(filterStore, { name: "MiniDB ZuStore" });
filterStore = subscribeWithSelector(filterStore);

// TODO: don't export store as default(move to named for cross-store)
const useFilterStore = create(filterStore);
export default useFilterStore;

// Add Subscriptions
useFilterStore.subscribe(...watchFilters(useFilterStore));

// Export hooks
export const useSpeciesFilter = () => useFilterStore((state) => state.speciesFilter);
export const useArchetypeFilter = () => useFilterStore((state) => state.archetypeFilter);
export const useWeaponFilter = () => useFilterStore((state) => state.weaponFilter);
export const useArmorFilter = () => useFilterStore((state) => state.armorFilter);
export const usePaintedFilter = () => useFilterStore((state) => state.paintedFilter);
export const useNameFilter = () => useFilterStore((state) => state.nameFilter);
export const useLineFilter = () => useFilterStore((state) => state.lineFilter);
export const useIgnoreMonsters = () => useFilterStore((state) => state.ignoreMonsters);
export const useIsFiltered = () => useFilterStore((state) => state.isFiltered);

export const useFilterActions = () => useFilterStore((state) => state.actions);
