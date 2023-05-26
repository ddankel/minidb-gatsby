import { create } from "zustand";
import { devtools } from "zustand/middleware";

// Start with base store definition
let store = (set, get) => ({
  _cache: {},

  writeCache: (key, value) => {
    const cache = get()._cache;
    cache[key] = value;
    set({ _cache: cache });
  },

  readValue: (key) => get()._cache[key],
});

// Wrap store in middleware to Integrate with Redux DevTools (browser extension)
store = devtools(store, { name: "MiniDB Tag ZuStore" });

const useAggregatedTagStore = create(store);

export default useAggregatedTagStore;
