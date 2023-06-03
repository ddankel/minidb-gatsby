import { useEntireCollection, useFilteredCollection } from "@/common/hooks/useCollectionStore";

import aggregateCollectionTags from "./utils/aggregateCollectionTags";

export const useFilteredCollectionTags = () => {
  const collection = useFilteredCollection();
  return aggregateCollectionTags(collection);
};

export const useWholeCollectionTags = () => {
  const collection = useEntireCollection();
  return aggregateCollectionTags(collection);
};
