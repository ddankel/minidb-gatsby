import { create } from "zustand";
import { devtools, persist, createJSONStorage, subscribeWithSelector } from "zustand/middleware";

import { shallow } from "zustand/shallow";
import store from "./store";

import useStoreState from "./hooks/useStoreState";
import useStoreItem from "./hooks/useStoreItem";
import useStoreItems from "./hooks/useStoreItems";

// Start with base store definition
let filterStore = store;

// Wrap store in middleware to persist to sessionStorage
filterStore = persist(filterStore, {
  name: "minidb-store",
  storage: createJSONStorage(() => sessionStorage),
  partialize: (state) =>
    // Don't persist actions
    Object.fromEntries(Object.entries(state).filter(([key]) => !["actions"].includes(key))),
});

// Wrap store in middleware to Integrate with Redux DevTools (browser extension)
filterStore = devtools(filterStore, { name: "MiniDB ZuStore" });

// Wrap with middleware to allow subscriptions
filterStore = subscribeWithSelector(filterStore);

// Build main hook
const useFilterStore = create(filterStore);

export default useFilterStore;

// Helper hooks
// export const useFilterStoreState = useStoreState;
export const useFilterStoreItem = useStoreItem;
// export const useFilterStoreItems = useStoreItems;

// // Example -- subscribe to filter changes to update filtered minis?
// const unsubscribe = useFilterStore.subscribe(
//   (state) => [state.archetypeFilter, state.weaponFilter],
//   (token) => console.log("archtypeFilter", token),
//   { equalityFn: shallow }
// );

const f = useFilterStore.subscribe(
  (state) => [
    state.speciesFilter,
    state.archetypeFilter,
    state.weaponFilter,
    state.armorFilter,
    state.paintedFilter,
    state.nameFilter,
    state.lineFilter,
  ],
  (token) => {
    const [
      speciesFilter,
      archetypeFilter,
      weaponFilter,
      armorFilter,
      paintedFilter,
      nameFilter,
      lineFilter,
      // actions,
      // state,
    ] = token;

    const areSomeFilters = [
      speciesFilter,
      archetypeFilter,
      weaponFilter,
      armorFilter,
      paintedFilter,
      nameFilter,
      lineFilter,
    ].some((item) => !!item.length);

    useFilterStore.setState((state) => ({ isFiltered: areSomeFilters }));

    // console.log("actions", actions.addSpeciesFilter);
    // console.log("udateisfiltered", areSomeFilters);

    // return setIsFiltered(areSomeFilters);
  },
  { equalityFn: shallow, fireImmediately: true }
);

// const d = useFilterStore.subscribe(
//   (state) => state.areFiltered,
//   (token) => console.log("areFiltered", token)
// );

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
