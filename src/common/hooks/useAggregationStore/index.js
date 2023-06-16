import { create } from "zustand";
import { devtools } from "zustand/middleware";

import store from "./store";

let aggregationStore = store;
aggregationStore = devtools(aggregationStore, { name: "MiniDB Aggregation Store" });

export const useAggregationStore = create(aggregationStore);

// Export hooks
export const useFilteredCollectionTags = () =>
  useAggregationStore((state) => state.filteredCollectionTags);
export const useEntireCollectionTags = () =>
  useAggregationStore((state) => state.entireCollectionTags);
export const useZippedCollectionTags = () =>
  useAggregationStore((state) => state.zippedCollectionTags);
