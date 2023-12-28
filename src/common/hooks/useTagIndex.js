import { TagIndex } from "../models/TagIndex";
import {
  useEntireCollectionTagData,
  useFilteredCollectionTagData,
  useZippedCollectionTagData,
} from "./useTagIndexStore";

export const useEntireCollectionTagIndex = () => {
  const tagData = useEntireCollectionTagData();
  return new TagIndex(tagData);
};

export const useFilteredCollectionTagIndex = () => {
  const tagData = useFilteredCollectionTagData();
  return new TagIndex(tagData);
};

export const useZippedCollectionTagIndex = () => {
  const tagData = useZippedCollectionTagData();
  return new TagIndex(tagData);
};
