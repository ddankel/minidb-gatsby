import React from "react";
import { useFilterStoreItem } from "@/hooks/useFilterStore";
import {
  useFilteredCollectionTags,
  useWholeCollectionTags,
} from "@/modules/gallery/hooks/useAggregatedTags";
import TagFilter from "../../TagFilter";

const StatusFilter = () => {
  const { paintedTags } = useFilteredCollectionTags();
  const { paintedTags: allPaintedTags } = useWholeCollectionTags();

  console.log("zip", zipTags(allPaintedTags, paintedTags));
  const zippedPaintedTags = zipTags(allPaintedTags, paintedTags);

  const paintedFilter = useFilterStoreItem("paintedFilter");
  const setPaintedFilter = useFilterStoreItem("setPaintedFilter");
  const removePaintedFilter = useFilterStoreItem("removePaintedFilter");

  return (
    <TagFilter
      name="Species"
      tagsAvailable={zippedPaintedTags}
      currentSelections={paintedFilter}
      onAdd={(val) => setPaintedFilter([val])}
      onRemove={(val) => removePaintedFilter(val)}
    />
  );
};

export default StatusFilter;

// TODO separate file
const zipTags = (allTags, filteredTags) => {
  if (!allTags || !filteredTags) return [];

  const result = allTags.map(({ name }) => {
    const count = filteredTags.find((item) => item.name === name)?.count || 0;
    return { name, count };
  });

  return result;
};
