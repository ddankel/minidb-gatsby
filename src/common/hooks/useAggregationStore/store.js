import aggregateCollectionTags from "./utils/actions/aggregateCollectionTags";
import zipTags from "@/modules/gallery/utils/zipTags";

const store = (set, get) => ({
  filteredCollectionTags: {},
  entireCollectionTags: {},
  zippedCollectionTags: {},

  actions: {},

  triggers: {
    aggregateFilteredCollectionTags: (filteredCollection) => {
      set({ filteredCollectionTags: aggregateCollectionTags(filteredCollection) });
    },

    aggregateEntireCollectionTags: (entireCollectionData) => {
      set({ entireCollectionTags: aggregateCollectionTags(entireCollectionData) });
    },

    aggregateZippedColelctionTags: ({ filteredCollection, entireCollectionData }) => {
      const filteredTags = aggregateCollectionTags(filteredCollection);
      const allTags = aggregateCollectionTags(entireCollectionData);

      const zippedTags = {};

      for (const [key] of Object.entries(allTags)) {
        zippedTags[key] = zipTags(allTags[key], filteredTags[key]);
      }

      set({ zippedCollectionTags: zippedTags });
    },
  },
});

export default store;
