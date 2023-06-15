import { useEntireCollection, useFilteredCollection } from "@/common/hooks/useCollectionStore";

import zipTags from "../../utils/zipTags";
import aggregateCollectionTags from "./utils/aggregateCollectionTags";
import {
  useEntireCollectionTags,
  useZippedCollectionTags,
  useFilteredCollectionTags as uFCT,
} from "@/common/hooks/useAggregationStore";

export const useFilteredCollectionTags = () => {
  return uFCT();

  console.log("useFilteredCollectionTags");
  const collection = useFilteredCollection();
  return aggregateCollectionTags(collection);
};
