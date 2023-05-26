import { create } from "zustand";
import { devtools, subscribeWithSelector } from "zustand/middleware";

import store from "./store";
import { filterCollectionWhenFiltersChange } from "./subscriptions";

// Set up store and middleware
let collectionStore = store;
collectionStore = devtools(collectionStore, { name: "MiniDB Collection Store" });
collectionStore = subscribeWithSelector(collectionStore);

// TODO: Don't export store as default... move to named for cross-store
const useCollectionStore = create(collectionStore);
export default useCollectionStore;

// Add Subscriptions
filterCollectionWhenFiltersChange(useCollectionStore);

// Export hooks
export const useEntireCollection = () => useCollectionStore((state) => state.entireCollection);
export const useGalleryFilter = () => useCollectionStore((state) => state.galleyFilter);
export const useFilteredCollection = () => useCollectionStore((state) => state.filteredCollection);

export const useCollectionActions = () => useCollectionStore((state) => state.actions);
