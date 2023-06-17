import GalleryFilter from "@/common/models/GalleryFilter";

const store = (set, get) => ({
  entireCollectionData: [],
  galleryFilter: undefined,
  filteredCollection: [],

  actions: {
    setEntireCollection: (value) => set({ entireCollectionData: value }),
    setGalleryFilter: (value) => set({ galleryFilter: value }),
    setFilteredCollection: (value) => set({ filteredCollection: value }),
  },

  triggers: {
    filterCollection: () => {
      const galleryFilter = get().galleryFilter;
      if (!galleryFilter) return;

      const filteredCollection = get().entireCollectionData.filter((item) =>
        galleryFilter.includes(item)
      );
      set({ filteredCollection });
    },

    updateGalleryFilter: (filters) => set({ galleryFilter: new GalleryFilter(filters) }),
  },
});

export default store;
