import { create } from "zustand";
import { createJSONStorage, devtools, persist, subscribeWithSelector } from "zustand/middleware";

import store from "./store";
import {
  updateGalleryFilterWhenFiltersChange,
  updateIsFilteredWhenFiltersChange,
} from "./subscriptions";
import excludeStateAttributes from "./utils/excludeStateAttributes";

// Set up store and middleware
let filterStore = store;
filterStore = persist(filterStore, {
  name: "minidb-store",
  storage: createJSONStorage(() => sessionStorage),
  partialize: excludeStateAttributes("actions", "triggers"),
});
filterStore = devtools(filterStore, { name: "MiniDB Filter Store" });
filterStore = subscribeWithSelector(filterStore);

export const useFilterStore = create(filterStore);

// Add Subscriptions
updateIsFilteredWhenFiltersChange(useFilterStore);
updateGalleryFilterWhenFiltersChange(useFilterStore);

// Export hooks
export const useGenreFilter = () => useFilterStore((state) => state.genreFilter);
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
