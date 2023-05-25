// Start with base store definition
const store = (set, get) => ({
  entireCollection: [],
  galleyFilter: undefined,
  filteredCollection: [],

  actions: {
    setEntireCollection: (value) => set({ entireCollection: value }),
    setGalleryFilter: (value) => set({ galleyFilter: value }),
    setFilteredCollection: (value) => set({ filteredCollection: value }),
  },
});

export default store;
