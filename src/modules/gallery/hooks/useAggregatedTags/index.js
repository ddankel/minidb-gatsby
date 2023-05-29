import { useEntireCollection, useFilteredCollection } from "@/common/hooks/useCollectionStore";

import useAggregation from "./useAggregation";

export const useFilteredCollectionTags = () => {
  const collection = useFilteredCollection();
  return useAggregation(collection);
};

export const useWholeCollectionTags = () => {
  const collection = useEntireCollection();
  return useAggregation(collection);
};
