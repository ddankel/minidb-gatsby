import GalleryFilter from "@/common/models/GalleryFilter";

const store = (set, get) => ({
  entireCollectionData: [],
  galleryFilter: undefined,
  filteredCollectionData: [],

  actions: {
    setEntireCollection: (value) => set({ entireCollectionData: value }),
    setGalleryFilter: (value) => set({ galleryFilter: value }),
    setFilteredCollection: (value) => set({ filteredCollectionData: value }),
  },

  triggers: {
    filterCollection: () => {
      const galleryFilter = get().galleryFilter;
      if (!galleryFilter) return;

      const filteredCollectionData = get().entireCollectionData.filter((item) =>
        galleryFilter.includes(item)
      );
      set({ filteredCollectionData });
    },

    updateGalleryFilter: (filters) => set({ galleryFilter: new GalleryFilter(filters) }),
  },
});

export default store;
