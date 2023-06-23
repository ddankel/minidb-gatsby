import Collection from "@/common/models/Collection";
import zipTags from "@/modules/gallery/utils/zipTags";

const store = (set, get) => ({
  filteredCollectionTags: {},
  entireCollectionTags: {},
  zippedCollectionTags: {},

  actions: {},

  triggers: {
    aggregateFilteredCollectionTags: (filteredCollectionData) => {
      const filteredCollection = new Collection(filteredCollectionData);
      const aggregatedTags = filteredCollection.aggregateTags();
      set({ filteredCollectionTags: aggregatedTags });
    },

    aggregateEntireCollectionTags: (entireCollectionData) => {
      const entireCollection = new Collection(entireCollectionData);
      const aggregatedTags = entireCollection.aggregateTags();
      set({ entireCollectionTags: aggregatedTags });
    },

    aggregateZippedCollectionTags: ({ filteredCollectionData, entireCollectionData }) => {
      const filteredCollection = new Collection(filteredCollectionData);
      const filteredTags = filteredCollection.aggregateTags();
      const entireCollection = new Collection(entireCollectionData);
      const allTags = entireCollection.aggregateTags();

      const zippedTags = {};

      for (const [key] of Object.entries(allTags)) {
        zippedTags[key] = zipTags(allTags[key], filteredTags[key]);
      }

      set({ zippedCollectionTags: zippedTags });
    },
  },
});

export default store;
