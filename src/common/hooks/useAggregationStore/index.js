import { create } from "zustand";
import { devtools, subscribeWithSelector } from "zustand/middleware";

import store from "./store";

let aggregationStore = store;
aggregationStore = devtools(aggregationStore, { name: "MiniDB Aggregation Store" });
aggregationStore = subscribeWithSelector(aggregationStore);

export const useAggregationStore = create(aggregationStore);

// Export hooks

// TODO: Triggers
/*
In useCollectionStore

If entirecollection changes
  - update whole collection tags
  - update zipped tags
If filtered collection changes
  - update filtered collection tags
  - update zipped collection tags
*/
