import { useEntireCollection, useFilteredCollection } from "@/common/hooks/useCollectionStore";

import aggregateCollectionTags from "./utils/aggregateCollectionTags";

// TODO: move
import zipTags from "../../components/FilterAccordion/zipTags";

export const useFilteredCollectionTags = () => {
  const collection = useFilteredCollection();
  return aggregateCollectionTags(collection);
};

export const useWholeCollectionTags = () => {
  const collection = useEntireCollection();
  return aggregateCollectionTags(collection);
};

export const useFilteredCollectionZippedTags = () => {
  const filteredCollection = useFilteredCollection();
  const entireCollection = useEntireCollection();

  const filteredTags = aggregateCollectionTags(filteredCollection);
  const allTags = aggregateCollectionTags(entireCollection);

  const zippedTags = {};

  for (const [key, value] of Object.entries(allTags)) {
    zippedTags[key] = zipTags(allTags[key], filteredTags[key]);
  }

  return zippedTags;
};
