import { create } from "zustand";
import { devtools, subscribeWithSelector } from "zustand/middleware";

import store from "./store";

let aggregationStore = store;
aggregationStore = devtools(aggregationStore, { name: "MiniDB Aggregation Store" });
aggregationStore = subscribeWithSelector(collectionStore);

const useAggregationStore = create(aggregationStore);

// Export hooks
