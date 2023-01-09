import create from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

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

// Build main hook
const useFilterStore = create(filterStore);

export default useFilterStore;

// Helper hooks
export const useFilterStoreState = useStoreState;
export const useFilterStoreItem = useStoreItem;
export const useFilterStoreItems = useStoreItems;
