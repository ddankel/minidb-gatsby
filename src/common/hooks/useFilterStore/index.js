import { create } from "zustand";
import { devtools, persist, createJSONStorage, subscribeWithSelector } from "zustand/middleware";

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
});

// Wrap store in middleware to Integrate with Redux DevTools (browser extension)
filterStore = devtools(filterStore, { name: "MiniDB ZuStore" });

filterStore = subscribeWithSelector(filterStore);

// Build main hook
const useFilterStore = create(filterStore);

export default useFilterStore;

// Helper hooks
export const useFilterStoreState = useStoreState;
export const useFilterStoreItem = useStoreItem;
export const useFilterStoreItems = useStoreItems;

// Example -- subscribe to filter changes to update filtered minis?
const unsubscribe = useFilterStore.subscribe(
  (state) => [state.archetypeFilter, state.weaponFilter],
  (token) => console.log("archtypeFilter", token)
);
