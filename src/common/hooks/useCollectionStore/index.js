import { create } from "zustand";
import { devtools, subscribeWithSelector } from "zustand/middleware";

import store from "./store";
import {
  aggregateEntireCollectionTagsWhenCollectionChanges,
  aggregateFilteredCollectionTagsWhenCollectionChanges,
  aggregateZippedCollectionTagsWhenCollectionChanges,
  filterCollectionWhenFiltersChange,
} from "./subscriptions";

// Set up store and middleware
let collectionStore = store;
collectionStore = devtools(collectionStore, { name: "MiniDB Collection Store" });
collectionStore = subscribeWithSelector(collectionStore);

export const useCollectionStore = create(collectionStore);

// Add Subscriptions
filterCollectionWhenFiltersChange(useCollectionStore);
aggregateEntireCollectionTagsWhenCollectionChanges(useCollectionStore);
aggregateFilteredCollectionTagsWhenCollectionChanges(useCollectionStore);
aggregateZippedCollectionTagsWhenCollectionChanges(useCollectionStore);

// Export hooks
export const useEntireCollectionData = () =>
  useCollectionStore((state) => state.entireCollectionData);
export const useGalleryFilter = () => useCollectionStore((state) => state.galleryFilter);
export const useFilteredCollectionData = () =>
  useCollectionStore((state) => state.filteredCollectionData);

export const useCollectionActions = () => useCollectionStore((state) => state.actions);
