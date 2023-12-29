import { Miniature } from "@/common/models/Miniature";

export type TagIndexState = {
  filteredCollectionTagData: {};
  entireCollectionTagData: {};
  zippedCollectionTagData: {};

  actions: {};

  triggers: {
    aggregateFilteredCollectionTags: (filteredCollectionData: Miniature[]) => void;
    aggregateEntireCollectionTags: (entireCollectionData: Miniature[]) => void;
    aggregateZippedCollectionTags: ({
      filteredCollectionData,
      entireCollectionData,
    }: {
      filteredCollectionData: Miniature[];
      entireCollectionData: Miniature[];
    }) => void;
  };
};
