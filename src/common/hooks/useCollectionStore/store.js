import GalleryFilter from "@/common/models/GalleryFilter";

const store = (set, get) => ({
  entireCollectionData: [],
  filteredCollectionData: [],
  galleryFilter: undefined,

  actions: {
    setEntireCollection: (value) => set({ entireCollectionData: value }),
    setFilteredCollection: (value) => set({ filteredCollectionData: value }),
    setGalleryFilter: (value) => set({ galleryFilter: value }),
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
