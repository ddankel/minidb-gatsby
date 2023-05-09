import useFilteredCollection from "@/common/hooks/useFilteredCollection";
import useMiniatureCollection from "@/common/hooks/useMiniatureCollection";
import useAggregation from "./useAggregation";

export const useFilteredCollectionTags = () => {
  const collection = useFilteredCollection();
  return useAggregation(collection);
};

export const useWholeCollectionTags = () => {
  const collection = useMiniatureCollection();
  return useAggregation(collection);
};
