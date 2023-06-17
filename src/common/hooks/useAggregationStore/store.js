import aggregateCollectionTags from "./utils/actions/aggregateCollectionTags";
import zipTags from "@/modules/gallery/utils/zipTags";

const store = (set, get) => ({
  filteredCollectionTags: {},
  entireCollectionTags: {},
  zippedCollectionTags: {},

  actions: {},

  triggers: {
    aggregateFilteredCollectionTags: (filteredCollectionData) => {
      set({ filteredCollectionTags: aggregateCollectionTags(filteredCollectionData) });
    },

    aggregateEntireCollectionTags: (entireCollectionData) => {
      set({ entireCollectionTags: aggregateCollectionTags(entireCollectionData) });
    },

    aggregateZippedColelctionTags: ({ filteredCollectionData, entireCollectionData }) => {
      const filteredTags = aggregateCollectionTags(filteredCollectionData);
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
