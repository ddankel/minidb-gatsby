import { Collection } from "../models/Collection";
import { useEntireCollectionData, useFilteredCollectionData } from "../stores/useCollectionStore";

export const useEntireCollection = () => {
  const entireCollectionData = useEntireCollectionData();
  return new Collection(entireCollectionData);
};

export const useFilteredCollection = () => {
  const filteredCollectionData = useFilteredCollectionData();
  return new Collection(filteredCollectionData);
};
