import Collection from "@/common/models/Collection";
import TagIndex from "@/common/models/TagIndex";

const store = (set, get) => ({
  filteredCollectionTagData: {},
  entireCollectionTagData: {},
  zippedCollectionTagData: {},

  actions: {},

  triggers: {
    aggregateFilteredCollectionTags: (filteredCollectionData) => {
      const filteredCollection = new Collection(filteredCollectionData);
      const tagIndex = filteredCollection.indexTags();
      set({ filteredCollectionTagData: tagIndex.toHash() });
    },

    aggregateEntireCollectionTags: (entireCollectionData) => {
      const entireCollection = new Collection(entireCollectionData);
      const tagIndex = entireCollection.indexTags();
      set({ entireCollectionTagData: tagIndex.toHash() });
    },

    aggregateZippedCollectionTags: ({ filteredCollectionData, entireCollectionData }) => {
      const filteredTags = new Collection(filteredCollectionData).indexTags();
      const allTags = new Collection(entireCollectionData).indexTags();
      const zippedIndex = TagIndex.zipTogether(allTags, filteredTags);
      set({ zippedCollectionTagData: zippedIndex.toHash() });
    },
  },
});

export default store;
