import GalleryFilter from "@/common/models/GalleryFilter";

const store = (set, get) => ({
  entireCollection: [],
  galleyFilter: undefined,
  filteredCollection: [],

  actions: {
    setEntireCollection: (value) => set({ entireCollection: value }),
    setGalleryFilter: (value) => set({ galleyFilter: value }),
    setFilteredCollection: (value) => set({ filteredCollection: value }),
  },

  triggers: {
    filterCollection: () => {
      const galleryFilter = get().galleryFilter;
      if (!galleryFilter) return;

      const filteredCollection = get().entireCollection.filter((item) =>
        galleryFilter.includes(item)
      );
      set({ filteredCollection });
    },

    updateGalleryFilter: (filters) => set({ galleryFilter: new GalleryFilter(filters) }),
  },
});

export default store;